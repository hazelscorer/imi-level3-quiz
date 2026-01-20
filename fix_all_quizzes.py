#!/usr/bin/env python3
"""
Automated Quiz Fixer
This script removes the broken Firebase tracking code from all quiz files
"""

import re
import os

def fix_quiz_file(filename):
    """Fix a single quiz file by removing broken tracking code"""
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find the pattern where the broken code starts
        pattern = r'(ReactDOM\.render\(<QuizApp />, document\.getElementById\(["\']root["\']\)\);)\s*// Progress Tracking.*$'
        
        # Replace with just the ReactDOM.render line plus proper closing
        replacement = r'\1\n    </script>\n</body>\n</html>'
        
        # Fix the file
        fixed_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        
        # Write back
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"✓ Fixed {filename}")
        return True
    except Exception as e:
        print(f"✗ Error fixing {filename}: {e}")
        return False

def main():
    # Fix all quiz files from 1 to 68
    fixed_count = 0
    for i in range(1, 69):
        filename = f'quiz{i}.html'
        if os.path.exists(filename):
            if fix_quiz_file(filename):
                fixed_count += 1
        else:
            print(f"⚠ {filename} not found - skipping")
    
    print(f"\n✅ Fixed {fixed_count} quiz files!")
    print("All quizzes should now work properly.")

if __name__ == '__main__':
    main()
