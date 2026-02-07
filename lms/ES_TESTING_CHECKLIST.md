# ES Quiz & Progress Testing Checklist

## ✅ Testing Steps

### 1. Quiz Functionality
- [ ] Navigate to ES course
- [ ] Complete a quiz (any unit)
- [ ] Verify score is displayed
- [ ] Click "Retake Quiz" button
- [ ] Verify quiz resets to question 1
- [ ] Complete quiz again with different answers
- [ ] Verify new score is saved

### 2. Database Verification
- [ ] Check MongoDB `progress` collection
- [ ] Verify entry has correct fields:
  - userEmail
  - subject: "ES"
  - unitId (1-5)
  - moduleId (1-5)
  - moduleName (correct name)
  - score
  - totalQuestions
  - percentage
  - completed (true if ≥60%)
  - completedAt
  - updatedAt

### 3. Admin Dashboard
- [ ] Login as admin
- [ ] Go to Admin Progress page
- [ ] Select a student who completed ES quizzes
- [ ] Click on "Environmental Science" card
- [ ] Verify all 5 units show correct module names
- [ ] Verify completed modules show green checkmark
- [ ] Verify scores are displayed correctly (e.g., "80% (4/5)")

### 4. Module Names Consistency
- [ ] Check ES Sidebar - verify module names
- [ ] Check ES Course Overview - verify module names
- [ ] Check Admin Progress - verify module names
- [ ] All three should match exactly

### 5. Previous Score Display
- [ ] Complete a quiz
- [ ] Navigate away and come back
- [ ] Verify previous score badge shows before starting
- [ ] Retake the quiz
- [ ] Verify both current and previous scores show in results

### 6. Edge Cases
- [ ] Test without login (should show loading or prompt)
- [ ] Test with 0% score
- [ ] Test with 100% score
- [ ] Test with exactly 60% score (should mark as completed)
- [ ] Test with 59% score (should not mark as completed)

## 🔍 Expected Results

### Quiz Results Screen Should Show:
- Quiz icon and title
- Current score with percentage
- Pass/fail message
- Requirements (60% to pass)
- Previous score (if exists and different)
- Retake Quiz button (always visible)

### Admin Dashboard Should Show:
- Student list on left
- Subject cards with progress percentage
- Detailed unit view with all modules
- Green checkmarks for completed modules
- Scores for completed modules
- "Not attempted" for incomplete modules

### Database Entry Should Have:
```json
{
  "userEmail": "student@example.com",
  "subject": "ES",
  "unitId": 1,
  "moduleId": 5,
  "moduleName": "Unit 1 Quiz",
  "score": 4,
  "totalQuestions": 5,
  "percentage": 80,
  "completed": true,
  "completedAt": "2025-01-XX...",
  "updatedAt": "2025-01-XX..."
}
```

## 🐛 Common Issues to Check

1. **Module names mismatch**: Verify all three locations use same names
2. **Score not updating**: Check API response and MongoDB connection
3. **Retake not working**: Verify state reset in handleRetake
4. **Previous score not showing**: Check fetchProgress function
5. **Admin dashboard empty**: Verify student has completed quizzes

## ✨ Success Indicators

- ✅ Retake button appears after every quiz submission
- ✅ Database updates on every quiz attempt
- ✅ Admin can see all student progress
- ✅ Module names are consistent everywhere
- ✅ Previous scores are preserved and displayed
- ✅ Completion status updates correctly (60% threshold)
