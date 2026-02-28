#!/usr/bin/env python3
"""
Fix correct answer distribution in ALL multiple-choice exercises.

Properly swaps BOTH the options array elements AND the correct index,
so the correct answer moves to a new position while remaining correct.
"""

import re
import sys
import random


def find_bracket_end(text, start, open_ch='[', close_ch=']'):
    """Find position of matching closing bracket (handles nested + strings)."""
    count = 1
    i = start + 1
    in_str = False
    str_char = None

    while i < len(text) and count > 0:
        c = text[i]
        if in_str:
            if c == '\\':
                i += 2
                continue
            if c == str_char:
                in_str = False
        else:
            if c in ("'", '"', '`'):
                in_str = True
                str_char = c
            elif c == open_ch:
                count += 1
            elif c == close_ch:
                count -= 1
        i += 1

    return i - 1 if count == 0 else -1


def parse_string_items(text):
    """
    Parse JS string literals from array content.
    Returns list of (start, end, raw_string) tuples.
    """
    items = []
    i = 0
    while i < len(text):
        c = text[i]
        if c in ("'", '"', '`'):
            quote = c
            j = i + 1
            while j < len(text):
                if text[j] == '\\':
                    j += 2
                    continue
                if text[j] == quote:
                    break
                j += 1
            items.append((i, j + 1, text[i:j + 1]))
            i = j + 1
        else:
            i += 1
    return items


def swap_options_in_question(q_text, from_pos, to_pos):
    """
    Swap options[from_pos] and options[to_pos], update correct: from_pos → to_pos.
    Returns modified question text.
    """
    if from_pos == to_pos:
        return q_text

    opt_m = re.search(r'\boptions\s*:\s*\[', q_text)
    if not opt_m:
        return q_text

    bracket_start = q_text.index('[', opt_m.start())
    bracket_end = find_bracket_end(q_text, bracket_start)
    if bracket_end == -1:
        return q_text

    options_content = q_text[bracket_start + 1:bracket_end]
    items = parse_string_items(options_content)

    if len(items) <= max(from_pos, to_pos):
        return q_text  # Not enough options to swap

    # Swap the raw strings
    raw_strings = [item[2] for item in items]
    raw_strings[from_pos], raw_strings[to_pos] = raw_strings[to_pos], raw_strings[from_pos]

    # Reconstruct options content: replace strings right-to-left (preserves positions)
    new_content_chars = list(options_content)
    sorted_items = sorted(enumerate(items), key=lambda x: x[1][0], reverse=True)
    for idx, (orig_start, orig_end, _) in sorted_items:
        new_raw = raw_strings[idx]
        new_content_chars[orig_start:orig_end] = list(new_raw)

    new_options_content = ''.join(new_content_chars)

    # Rebuild question text with new options
    new_q = (
        q_text[:bracket_start + 1]
        + new_options_content
        + q_text[bracket_end:]
    )

    # Update correct index (only first match within this question block)
    new_q = re.sub(
        r'(\bcorrect\s*:\s*)' + str(from_pos) + r'(\b)',
        r'\g<1>' + str(to_pos) + r'\2',
        new_q,
        count=1
    )

    return new_q


def get_question_blocks(exercise_text):
    """
    Extract positions of each question {block} within questions: [...].
    Returns list of (start, end) positions relative to exercise_text.
    """
    q_m = re.search(r'\bquestions\s*:\s*\[', exercise_text)
    if not q_m:
        return []

    array_start = exercise_text.index('[', q_m.start())
    array_end = find_bracket_end(exercise_text, array_start, '[', ']')
    if array_end == -1:
        return []

    # Search for question objects within the questions array
    offset = array_start + 1
    array_content = exercise_text[offset:array_end]

    blocks = []
    i = 0
    while i < len(array_content):
        if array_content[i] == '{':
            brace_end = find_bracket_end(array_content, i, '{', '}')
            if brace_end == -1:
                break
            # Store position relative to exercise_text
            blocks.append((offset + i, offset + brace_end + 1))
            i = brace_end + 1
        else:
            i += 1

    return blocks


def get_correct_value(q_text):
    """Extract the numeric correct: N value from a question block."""
    m = re.search(r'\bcorrect\s*:\s*(\d+)\b', q_text)
    if m:
        return int(m.group(1))
    return None


def get_options_count(q_text):
    """Count number of options in a question's options array."""
    opt_m = re.search(r'\boptions\s*:\s*\[', q_text)
    if not opt_m:
        return 0
    bracket_start = q_text.index('[', opt_m.start())
    bracket_end = find_bracket_end(q_text, bracket_start)
    if bracket_end == -1:
        return 0
    options_content = q_text[bracket_start + 1:bracket_end]
    items = parse_string_items(options_content)
    return len(items)


def generate_targets(n, seed):
    """
    Generate n target positions (0-3) with balanced distribution.
    Uses fixed seed for reproducibility.
    """
    rng = random.Random(seed)
    pool = []
    for _ in range((n + 3) // 4):
        chunk = [0, 1, 2, 3]
        rng.shuffle(chunk)
        pool.extend(chunk)
    return pool[:n]


def needs_fixing(mc_questions, threshold=0.5):
    """Check if an exercise's correct answer distribution is too skewed."""
    n = len(mc_questions)
    if n < 4:
        return False  # Too few questions to meaningfully balance

    counts = {0: 0, 1: 0, 2: 0, 3: 0}
    for cur in mc_questions:
        if cur in counts:
            counts[cur] += 1

    max_count = max(counts.values())
    # Fix if: >50% same position, OR D never used in exercises with 8+ questions
    if max_count / n > threshold:
        return True
    if n >= 8 and counts[3] == 0:
        return True
    return False


def fix_exercise(content, exercise_id):
    """
    Fix answer distribution for one exercise.
    Returns (modified_content, changes_count).
    """
    start_marker = f"'{exercise_id}':"
    start_pos = content.find(start_marker)
    if start_pos == -1:
        return content, 0

    brace_start = content.find('{', start_pos)
    if brace_start == -1:
        return content, 0

    brace_end = find_bracket_end(content, brace_start, '{', '}')
    if brace_end == -1:
        return content, 0

    exercise_text = content[brace_start:brace_end + 1]
    q_blocks = get_question_blocks(exercise_text)
    if not q_blocks:
        return content, 0

    # Collect MC questions (numeric correct, 4 options)
    mc_info = []  # [(rel_start, rel_end, current_correct)]
    for (qs, qe) in q_blocks:
        q_text = exercise_text[qs:qe]
        cur = get_correct_value(q_text)
        n_opts = get_options_count(q_text)
        if cur is not None and n_opts == 4:
            mc_info.append((qs, qe, cur))

    if not mc_info:
        return content, 0

    current_corrects = [c for _, _, c in mc_info]
    if not needs_fixing(current_corrects):
        return content, 0

    # Generate balanced target positions
    seed = abs(hash(exercise_id)) & 0xFFFFFFFF
    targets = generate_targets(len(mc_info), seed)

    # Apply changes right-to-left (within exercise) to preserve positions
    new_content = content
    changes = 0

    sorted_mc = sorted(enumerate(mc_info), key=lambda x: x[1][0], reverse=True)
    for q_idx, (rel_qs, rel_qe, cur_correct) in sorted_mc:
        target = targets[q_idx]
        if target == cur_correct:
            continue

        abs_qs = brace_start + rel_qs
        abs_qe = brace_start + rel_qe

        q_text = new_content[abs_qs:abs_qe]
        new_q_text = swap_options_in_question(q_text, cur_correct, target)

        if new_q_text != q_text:
            new_content = new_content[:abs_qs] + new_q_text + new_content[abs_qe:]
            changes += 1

    return new_content, changes


def get_all_exercise_ids(content):
    """Extract all exercise IDs from the file."""
    ids = []
    seen = set()
    for m in re.finditer(r"'(ex-[a-zA-Z0-9_-]+)'\s*:", content):
        eid = m.group(1)
        if eid not in seen:
            seen.add(eid)
            ids.append(eid)
    return ids


def main():
    filepath = '/home/user/Espa-ol/src/data/lessonsData.js'

    print(f"Reading {filepath} ...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    exercise_ids = get_all_exercise_ids(content)
    print(f"Found {len(exercise_ids)} exercise IDs")

    total_changes = 0
    fixed_count = 0

    for eid in exercise_ids:
        new_content, changes = fix_exercise(content, eid)
        if changes > 0:
            content = new_content
            total_changes += changes
            fixed_count += 1
            print(f"  ✓ {eid}: {changes} questions redistributed")

    print(f"\nFixed: {fixed_count} exercises, {total_changes} questions total")

    if total_changes > 0:
        print(f"Writing changes to {filepath} ...")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Done!")
    else:
        print("No changes needed.")


if __name__ == '__main__':
    main()
