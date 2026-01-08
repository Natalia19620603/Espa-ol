#!/usr/bin/env python3
"""
Detailed analysis of exercises with correct answer patterns, grouped by lesson
"""

import re
from collections import defaultdict

def extract_exercises_with_lessons(file_path):
    """Extract exercises and map them to lessons"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all lessons with their exercises
    lesson_pattern = r"'(lesson-[^']+)':\s*\{[^}]*?exercises:\s*\[(.*?)\]"

    lesson_to_exercises = {}
    for match in re.finditer(lesson_pattern, content, re.DOTALL):
        lesson_id = match.group(1)
        exercises_str = match.group(2)
        # Extract exercise IDs from the array
        exercise_ids = re.findall(r"'([^']+)'", exercises_str)
        lesson_to_exercises[lesson_id] = exercise_ids

    # Now find all exercises with numeric correct values
    exercise_pattern = r"'(ex-[^']+)':\s*\{.*?type:\s*['\"]([^'\"]+)['\"].*?questions:\s*\[(.*?)\n\s*\]"

    exercises = {}
    for match in re.finditer(exercise_pattern, content, re.DOTALL):
        exercise_id = match.group(1)
        exercise_type = match.group(2)
        questions_block = match.group(3)

        # Extract correct values
        correct_values = []
        correct_pattern = r"correct:\s*(\d+)"
        for correct_match in re.finditer(correct_pattern, questions_block):
            correct_values.append(int(correct_match.group(1)))

        if correct_values:
            exercises[exercise_id] = {
                'type': exercise_type,
                'correct_values': correct_values,
                'num_questions': len(correct_values)
            }

    # Map exercises to lessons
    exercise_to_lesson = {}
    for lesson_id, ex_ids in lesson_to_exercises.items():
        for ex_id in ex_ids:
            exercise_to_lesson[ex_id] = lesson_id

    return exercises, exercise_to_lesson

def analyze_patterns(exercises):
    """Find exercises with pattern issues"""
    problems = []

    for ex_id, data in exercises.items():
        if data['num_questions'] < 2:
            continue

        correct_values = data['correct_values']
        unique_values = set(correct_values)

        # All same position
        if len(unique_values) == 1:
            problems.append({
                'exercise_id': ex_id,
                'exercise_type': data['type'],
                'issue': 'all_same',
                'position': correct_values[0],
                'num_questions': data['num_questions'],
                'pattern': correct_values
            })

    return problems

def main():
    file_path = '/home/user/Espa-ol/src/data/lessonsData.js'

    exercises, exercise_to_lesson = extract_exercises_with_lessons(file_path)
    problems = analyze_patterns(exercises)

    # Group problems by lesson
    lesson_problems = defaultdict(list)
    for problem in problems:
        lesson = exercise_to_lesson.get(problem['exercise_id'], 'unknown')
        lesson_problems[lesson].append(problem)

    print("DETAILED REPORT: Exercises with ALL correct answers in the SAME position")
    print("="*80)
    print()

    for lesson_id in sorted(lesson_problems.keys()):
        probs = lesson_problems[lesson_id]
        print(f"Lesson: {lesson_id}")
        print(f"  Issues found: {len(probs)}")
        print()

        for p in probs:
            print(f"    Exercise ID: {p['exercise_id']}")
            print(f"    Type: {p['exercise_type']}")
            print(f"    All answers at position: {p['position']}")
            print(f"    Questions affected: {p['num_questions']}")
            print()

        print("-"*80)
        print()

    # Summary by position
    print("\nSUMMARY BY POSITION:")
    print("="*80)
    position_count = defaultdict(int)
    for p in problems:
        position_count[p['position']] += 1

    for pos in sorted(position_count.keys()):
        print(f"  Position {pos}: {position_count[pos]} exercises")

    print()
    print(f"Total exercises with this issue: {len(problems)}")

if __name__ == '__main__':
    main()
