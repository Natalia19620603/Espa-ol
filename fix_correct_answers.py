#!/usr/bin/env python3
"""
Script to randomize correct answer positions in lessonsData.js exercises.
This fixes the issue where all correct answers are in the same position.
"""

import re
import random
from typing import List, Tuple

def randomize_correct_answers(exercise_block: str, exercise_id: str) -> str:
    """
    Randomize the correct answer positions within an exercise block.

    Args:
        exercise_block: The JavaScript code block for one exercise
        exercise_id: The ID of the exercise being processed

    Returns:
        Modified exercise block with randomized correct positions
    """
    lines = exercise_block.split('\n')
    modified_lines = []
    questions_section = False
    current_question = []
    question_count = 0
    options_count = 0

    for i, line in enumerate(lines):
        # Detect when we enter questions array
        if 'questions: [' in line:
            questions_section = True
            modified_lines.append(line)
            continue

        # Track the current question
        if questions_section:
            current_question.append(line)

            # Count options to determine max value for correct index
            if "'options': [" in line or '"options": [' in line or 'options: [' in line:
                # Look ahead to count options
                bracket_count = 1
                temp_idx = i + 1
                opts = []
                while temp_idx < len(lines) and bracket_count > 0:
                    if '[' in lines[temp_idx]:
                        bracket_count += 1
                    if ']' in lines[temp_idx]:
                        bracket_count -= 1
                        if bracket_count == 0:
                            # Extract options array
                            options_str = ''.join(lines[i:temp_idx+1])
                            # Count commas to estimate number of options
                            # This is a rough estimate
                            opts = re.findall(r"'[^']*'|\"[^\"]*\"", options_str)
                            options_count = len([o for o in opts if not o.strip().strip("'\"") in ['options', 'correct', 'explanation', 'sentence', 'question', 'spanish', 'russian', 'type']])
                            break
                    temp_idx += 1

            # When we find a 'correct:' field, randomize it
            if re.match(r'\s*correct:\s*\d+', line):
                # Extract the number of options from context
                # Default to 4 if we can't determine
                max_index = max(3, options_count - 1) if options_count > 0 else 3

                # Generate random correct answer index
                new_correct = random.randint(0, max_index)

                # Replace the correct value
                indent = len(line) - len(line.lstrip())
                new_line = ' ' * indent + f'correct: {new_correct}'

                # Preserve any trailing characters (comma, comment, etc.)
                if ',' in line:
                    new_line += ','
                if '//' in line:
                    comment = line[line.index('//'):]
                    new_line += ' ' + comment

                modified_lines.append(new_line)
                question_count += 1
                continue

        modified_lines.append(line)

    result = '\n'.join(modified_lines)
    print(f"  ✓ {exercise_id}: Randomized {question_count} questions")
    return result


def process_file(filepath: str, exercises_to_fix: List[str]) -> None:
    """
    Process the lessonsData.js file and fix specified exercises.

    Args:
        filepath: Path to lessonsData.js
        exercises_to_fix: List of exercise IDs to fix
    """
    print(f"\nReading file: {filepath}")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    print(f"\nProcessing {len(exercises_to_fix)} exercises...")

    # Process each exercise
    for exercise_id in exercises_to_fix:
        # Find the exercise block
        # Pattern: 'exercise-id': { ... },
        pattern = rf"('{exercise_id}':\s*\{{.*?\n  \}})"

        # Use DOTALL to match across newlines, but be careful with greedy matching
        # We need to match from 'exercise-id': { to the closing },
        # We'll use a more sophisticated approach

        # Find start position
        start_pattern = f"'{exercise_id}':"
        start_pos = content.find(start_pattern)

        if start_pos == -1:
            print(f"  ✗ {exercise_id}: Not found")
            continue

        # Find the opening brace
        brace_pos = content.find('{', start_pos)
        if brace_pos == -1:
            print(f"  ✗ {exercise_id}: Opening brace not found")
            continue

        # Find the matching closing brace
        brace_count = 1
        pos = brace_pos + 1
        end_pos = -1

        while pos < len(content) and brace_count > 0:
            if content[pos] == '{':
                brace_count += 1
            elif content[pos] == '}':
                brace_count -= 1
                if brace_count == 0:
                    end_pos = pos + 1
                    break
            pos += 1

        if end_pos == -1:
            print(f"  ✗ {exercise_id}: Closing brace not found")
            continue

        # Extract the exercise block
        exercise_block = content[start_pos:end_pos]

        # Randomize correct answers
        modified_block = randomize_correct_answers(exercise_block, exercise_id)

        # Replace in content
        content = content[:start_pos] + modified_block + content[end_pos:]

    # Write back to file
    print(f"\nWriting changes to file...")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"✓ File updated successfully!")


def main():
    """Main function."""
    # Set random seed for reproducibility (optional, can be removed for true randomness)
    random.seed(42)

    filepath = '/home/user/Espa-ol/src/data/lessonsData.js'

    # Critical exercises from Module 9 only (we'll do others later)
    critical_exercises_module9 = [
        'ex-9-1-b1-gram-c3',
        'ex-9-1-b1-gram-c5',
        'ex-9-3-8-vocab',
        'ex-9-5-nerviosismo-grammar',
        'ex-9-5-microbiota-vocab-1',
        'ex-9-5-microbiota-vocab-2',
        'ex-9-5-microbiota-grammar-1',
        'ex-9-5-microbiota-grammar-2',
        'ex-9-5-microbiota-grammar-3',
        'ex-9-6-estres-comprehension'
    ]

    # Warning exercises from Module 9
    warning_exercises_module9 = [
        'ex-9-1-b1-gram-c4',
        'ex-9-3-6-vocab',
        'ex-9-3-10-1',
        'ex-9-3-11-vocab',
        'ex-9-3-13-2',
        'ex-9-5-cambia-comprehension',
        'ex-9-5-cambia-grammar',
        'ex-9-5-amor-comprehension',
        'ex-9-5-nerviosismo-vocab',
        'ex-9-5-nerviosismo-comprehension',
        'ex-9-6-dudar-comprehension',
        'ex-9-6-emociones-comprehension',
        'ex-9-6-creamos-comprehension',
        'ex-9-6-abrazos-comprehension',
        'ex-9-7-rape-vocab'
    ]

    # Combine all Module 9 exercises
    exercises_to_fix = critical_exercises_module9 + warning_exercises_module9

    print("=" * 60)
    print("FIXING CORRECT ANSWER POSITIONS - MODULE 9")
    print("=" * 60)

    process_file(filepath, exercises_to_fix)

    print("\n" + "=" * 60)
    print("DONE!")
    print("=" * 60)


if __name__ == '__main__':
    main()
