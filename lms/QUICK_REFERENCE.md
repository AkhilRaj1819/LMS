# 🚀 Quiz Progress - Quick Reference Card

## ✅ What's Done
- API endpoint created (`/api/progress`)
- All 5 Quiz components updated (OS, DS, ES, LS, FLAT)
- Admin dashboard enhanced with progress viewing
- Styling and documentation complete

## ⚠️ What You Need to Do
Update ALL quiz usages in unit files by adding 3 props.

## 📝 Copy-Paste Template

```tsx
<Quiz 
  title="Your Quiz Title"
  questions={yourQuestions}
  subject="DS"      // Change to: DS, OS, ES, LS, FLAT, or NSS
  unitId={1}        // Change to actual unit number
  moduleId={1}      // Change to actual module number
/>
```

## 🎯 Subject Codes (Copy Exactly)

```
DS    - Data Structures
OS    - Operating Systems  
ES    - Environmental Science
LS    - Language Systems
FLAT  - Formal Languages & Automata Theory
NSS   - National Service Scheme
```

## 📂 Files to Update (~25-30 files)

```
/app/pages/ds/units/Unit1.tsx → Unit5.tsx
/app/pages/os/units/Unit1.tsx → Unit5.tsx
/app/pages/es/units/Unit1.tsx → Unit5.tsx
/app/pages/ls/units/Unit1.tsx → Unit5.tsx
/app/pages/flat/units/Unit1.tsx → Unit5.tsx
```

## 🔍 Find & Replace Pattern

**Search for:** `<Quiz`

**Replace with:** Add these 3 lines after `questions={...}`:
```tsx
subject="XX"
unitId={N}
moduleId={N}
```

## 💡 Examples

### Data Structures - Unit 1, Module 3
```tsx
<Quiz 
  title="Stack Quiz"
  questions={stackQuestions}
  subject="DS"
  unitId={1}
  moduleId={3}
/>
```

### Operating Systems - Unit 2, Module 1
```tsx
<Quiz 
  title="Process Management Quiz"
  questions={processQuestions}
  subject="OS"
  unitId={2}
  moduleId={1}
/>
```

### Environmental Science - Unit 1, Module 2
```tsx
<Quiz 
  title="Ecology Quiz"
  questions={ecologyQuestions}
  subject="ES"
  unitId={1}
  moduleId={2}
/>
```

## ✅ Verification

After updating, check:
- [ ] No TypeScript errors
- [ ] Quiz loads in browser
- [ ] Score saves after submission
- [ ] Previous score shows on retake
- [ ] Admin can view progress

## 🐛 Common Mistakes

❌ **Wrong:** `subject="ds"` (lowercase)
✅ **Right:** `subject="DS"` (uppercase)

❌ **Wrong:** `unitId="1"` (string)
✅ **Right:** `unitId={1}` (number)

❌ **Wrong:** Starting from 0
✅ **Right:** Start from 1

## 🧪 Quick Test

1. Open browser → Navigate to a quiz
2. Take quiz → Submit
3. Refresh page → Retake quiz
4. Check if previous score badge appears
5. Login as admin → Check student progress

## 📊 What Students See

- Previous score badge before retaking
- Score comparison after retaking
- Percentage calculation
- Pass/fail status (60% threshold)

## 👨‍💼 What Admins See

- All quiz attempts per student
- Subject, unit, module info
- Scores and percentages
- Completion timestamps

## ⏱️ Time Estimate

- Per file: ~2-5 minutes
- Total: 1-2 hours for all files

## 🎯 Priority Order

1. **High Priority**: DS and OS (most used)
2. **Medium Priority**: ES and LS
3. **Low Priority**: FLAT and NSS

## 📞 Need Help?

Check these files:
- `QUIZ_PROGRESS_TRACKING.md` - Full documentation
- `QUIZ_IMPLEMENTATION_GUIDE.md` - Step-by-step guide
- `IMPLEMENTATION_SUMMARY.md` - Complete overview

---

**Pro Tip**: Update one subject completely, test it, then move to the next!

**Remember**: All 5 props are required: title, questions, subject, unitId, moduleId
