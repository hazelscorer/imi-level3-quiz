// Shared progress tracking for every quiz page.
// Each quiz loads this with: <script type="module" src="progress-tracker.js"></script>
// It works out the quiz number from the file name (quiz12.html -> 12), watches for
// the results screen, and saves users/{uid}/progress/quiz{N} = true on a perfect score.
import { auth, database } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const pageMatch = location.pathname.match(/quiz(\d+)\.html/);
const quizNumber = pageMatch ? parseInt(pageMatch[1], 10) : null;

// Where each quiz layout shows its final score:
//   quizzes 1-5:   .text-6xl                  "25/25"
//   quizzes 6-17:  .results .score            "25/25"
//   quizzes 18-43: .results-container         "25 / 25" or "25 out of 25"
//   quizzes 44-68: #resultsContainer.show     "You scored 25 out of 25"
const RESULT_SELECTORS = ['.text-6xl', '.results .score', '.results-container', '#resultsContainer.show'];
const SCORE_PATTERN = /(\d+)\s*(?:\/|out of)\s*(\d+)/;

function showNotice(message, colour) {
    const box = document.createElement('div');
    box.textContent = message;
    box.style.cssText = 'position:fixed;left:50%;bottom:20px;transform:translateX(-50%);z-index:9999;' +
        'padding:12px 20px;border-radius:8px;color:#fff;font:600 15px system-ui,sans-serif;' +
        'box-shadow:0 4px 12px rgba(0,0,0,.25);max-width:90%;text-align:center;background:' + colour;
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 6000);
}

function readScore() {
    for (const selector of RESULT_SELECTORS) {
        const element = document.querySelector(selector);
        const match = element && element.textContent.match(SCORE_PATTERN);
        if (match) return { correct: parseInt(match[1], 10), total: parseInt(match[2], 10) };
    }
    return null;
}

if (quizNumber) {
    let currentUser = null;
    let saved = false;
    let warnedLoggedOut = false;

    onAuthStateChanged(auth, (user) => { currentUser = user; });

    setInterval(() => {
        const score = readScore();
        if (!score) {
            saved = false; // back on the questions (e.g. Retake), so allow another save
            warnedLoggedOut = false;
            return;
        }
        if (saved || score.total === 0 || score.correct !== score.total) return;

        if (!currentUser) {
            if (!warnedLoggedOut) {
                warnedLoggedOut = true;
                showNotice('Perfect score! Log in to save it to your dashboard.', '#b45309');
            }
            return;
        }

        saved = true;
        set(ref(database, `users/${currentUser.uid}/progress/quiz${quizNumber}`), true)
            .then(() => showNotice(`✅ Quiz ${quizNumber} saved to your dashboard`, '#15803d'))
            .catch((error) => {
                console.error('Progress save failed:', error);
                showNotice('⚠️ Could not save progress: ' + error.message, '#b91c1c');
            });
    }, 1000);
}
