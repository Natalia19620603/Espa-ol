#!/usr/bin/env python3
"""
Analyze lessonsData.js to find exercises where correct answers are always in the same position
"""

import re
import json
from collections import defaultdict, Counter

def extract_exercises_from_file(file_path):
    """Extract exercises with correct answer indices from the file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all exercise blocks with correct: number pattern
    exercises = []

    # Match exercise blocks with IDs and questions with numeric correct values
    # Looking for patterns like: id: 'something', type: 'something', questions: [...]

    # Split by exercises: [ to find exercise arrays
    exercise_pattern = r"(id:\s*['\"]([^'\"]+)['\"].*?type:\s*['\"]([^'\"]+)['\"].*?questions:\s*\[)(.*?)(\n\s*\])"

    matches = re.finditer(exercise_pattern, content, re.DOTALL)

    for match in matches:
        exercise_id = match.group(2)
        exercise_type = match.group(3)
        questions_block = match.group(4)

        # Extract correct values from this block
        correct_values = []
        correct_pattern = r"correct:\s*(\d+)"

        for correct_match in re.finditer(correct_pattern, questions_block):
            correct_values.append(int(correct_match.group(1)))

        if correct_values:  # Only include if we found numeric correct values
            exercises.append({
                'id': exercise_id,
                'type': exercise_type,
                'correct_values': correct_values,
                'num_questions': len(correct_values)
            })

    return exercises

def analyze_patterns(exercises):
    """Analyze exercises for patterns in correct answer positions"""

    problems = []

    for ex in exercises:
        if ex['num_questions'] < 2:
            continue  # Skip single-question exercises

        correct_values = ex['correct_values']
        unique_values = set(correct_values)

        # Check if all correct answers are the same
        if len(unique_values) == 1:
            problems.append({
                'exercise_id': ex['id'],
                'exercise_type': ex['type'],
                'issue': 'all_same_position',
                'position': correct_values[0],
                'num_questions': ex['num_questions'],
                'correct_values': correct_values
            })
        # Check if there's very low variance (e.g., only 2 different positions out of many questions)
        elif ex['num_questions'] >= 5 and len(unique_values) <= 2:
            counter = Counter(correct_values)
            most_common = counter.most_common(1)[0]
            if most_common[1] >= ex['num_questions'] * 0.8:  # 80% or more are the same
                problems.append({
                    'exercise_id': ex['id'],
                    'exercise_type': ex['type'],
                    'issue': 'mostly_same_position',
                    'position': most_common[0],
                    'frequency': most_common[1],
                    'num_questions': ex['num_questions'],
                    'correct_values': correct_values
                })

    return problems

def main():
    file_path = '/home/user/Espa-ol/src/data/lessonsData.js'

    print("Analyzing lessonsData.js for correct answer patterns...\n")

    exercises = extract_exercises_from_file(file_path)
    print(f"Found {len(exercises)} exercises with numeric correct answer indices\n")

    problems = analyze_patterns(exercises)

    if not problems:
        print("No issues found! All exercises have good variation in correct answer positions.")
        return

    print(f"Found {len(problems)} exercises with potential issues:\n")
    print("="*80)

    # Group by issue type
    all_same = [p for p in problems if p['issue'] == 'all_same_position']
    mostly_same = [p for p in problems if p['issue'] == 'mostly_same_position']

    if all_same:
        print(f"\n🚨 CRITICAL: {len(all_same)} exercises where ALL correct answers are in the SAME position:\n")
        for p in all_same:
            print(f"  Exercise ID: {p['exercise_id']}")
            print(f"  Type: {p['exercise_type']}")
            print(f"  Position (stuck at): {p['position']}")
            print(f"  Number of questions: {p['num_questions']}")
            print(f"  Pattern: {p['correct_values']}")
            print()

    if mostly_same:
        print(f"\n⚠️  WARNING: {len(mostly_same)} exercises where correct answers are MOSTLY in the same position:\n")
        for p in mostly_same:
            print(f"  Exercise ID: {p['exercise_id']}")
            print(f"  Type: {p['exercise_type']}")
            print(f"  Most common position: {p['position']}")
            print(f"  Frequency: {p['frequency']}/{p['num_questions']} ({p['frequency']/p['num_questions']*100:.1f}%)")
            print(f"  Pattern: {p['correct_values']}")
            print()

    # Summary
    print("="*80)
    print("\nSUMMARY:")
    print(f"  Total exercises analyzed: {len(exercises)}")
    print(f"  Exercises with all answers in same position: {len(all_same)}")
    print(f"  Exercises with mostly same position: {len(mostly_same)}")
    print(f"  Total issues: {len(problems)}")

if __name__ == '__main__':
    main()
