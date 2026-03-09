# IMI Quiz Tracker - Setup Instructions

## Files Created

I've created 3 new files for you:
1. **firebase-config.js** - Firebase connection configuration
2. **auth.html** - Login/Signup page with GitHub star integration
3. **dashboard.html** - User dashboard showing progress

## Next Steps

### Step 1: Enable Authentication in Firebase

1. Go to Firebase Console: https://console.firebase.google.com/
2. Select your project "imi-quiz-tracker"
3. Click "Authentication" in left sidebar
4. Click "Get Started"
5. Click "Sign-in method" tab
6. Enable "Email/Password"
7. Click "Save"

### Step 2: Configure Database Rules

1. In Firebase Console, click "Realtime Database"
2. Click the "Rules" tab
3. Replace the rules with:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

4. Click "Publish"

### Step 3: Update Your Quiz HTML Files

You need to add progress tracking to each quiz file. Add this code at the END of each quiz HTML file, just before the closing `</script>` tag:

```javascript
// Progress Tracking - Add this to each quiz file
import { auth, database } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        // Mark quiz as completed when score is 100%
        const originalShowResults = window.showResults;
        window.showResults = function() {
            originalShowResults();
            const score = (correctAnswers / quizData.questions.length) * 100;
            if (score === 100) {
                const quizNum = quizData.quizNumber; // Get from quiz data
                const progressRef = ref(database, `users/${user.uid}/progress/quiz${quizNum}`);
                set(progressRef, true).catch(console.error);
            }
        };
    }
});
```

### Step 4: Update index.html

Change the main index.html to redirect to auth.html for login. Add this at the top of the `<script>` section:

```javascript
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Redirect to login if not authenticated
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = 'auth.html';
    }
});
```

## How It Works

1. **auth.html**: Users sign up/login
   - Requires GitHub star checkbox (honor system)
   - Creates Firebase account

2. **dashboard.html**: Shows user progress
   - Displays completed quizzes with checkmarks
   - Shows progress bar
   - Lists all 68 quizzes

3. **Quiz files**: Track completion
   - When user gets 100% on a quiz, it's marked complete
   - Progress saved to Firebase

4. **index.html**: Main quiz portal
   - Requires login to access
   - Shows all quizzes

## Deployment

1. Upload all files to your GitHub repository
2. Make sure GitHub Pages is enabled
3. Users go to: https://hazelscorer.github.io/imi-level3-quiz/auth.html

## Testing

1. Go to auth.html
2. Sign up with an email
3. Check the GitHub star box
4. Login
5. Complete a quiz with 100% score
6. Go to dashboard to see it marked complete

## Troubleshooting

- **"Module not found"**: Make sure all files are in the same directory
- **"Permission denied"**: Check Firebase database rules
- **"Auth not enabled"**: Enable Email/Password in Firebase Console
- **Progress not saving**: Check browser console for errors

## Security Notes

- The GitHub star is honor system (we can't verify it automatically)
- Firebase rules ensure users can only access their own data
- Use test mode for learning, add proper security rules for production
