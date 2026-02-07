# Quiz Progress Implementation Guide

## ✅ Completed Updates

All Quiz components have been updated with progress tracking:
- ✅ OS (Operating Systems) - `/app/pages/os/components/Quiz.tsx`
- ✅ DS (Data Structures) - `/app/pages/ds/components/Quiz.tsx`
- ✅ ES (Environmental Science) - `/app/pages/es/components/Quiz.tsx`
- ✅ LS (Language Systems) - `/app/pages/ls/components/Quiz.tsx`
- ✅ FLAT (Formal Languages) - `/app/pages/flat/components/Quiz.tsx`

## 📝 Required Changes in Unit Files

For EVERY quiz usage in your unit files, you need to add three new props:

### Before (Old Format):
```tsx
<Quiz 
  title="Quiz Title"
  questions={quizQuestions}
/>
```

### After (New Format):
```tsx
<Quiz 
  title="Quiz Title"
  questions={quizQuestions}
  subject="DS"      // Subject code
  unitId={1}        // Unit number
  moduleId={3}      // Module number
/>
```

## 🎯 Subject Codes Reference

Use these exact codes for the `subject` prop:

| Subject | Code | Path |
|---------|------|------|
| Data Structures | `DS` | `/pages/ds/` |
| Operating Systems | `OS` | `/pages/os/` |
| Environmental Science | `ES` | `/pages/es/` |
| Language Systems | `LS` | `/pages/ls/` |
| FLAT | `FLAT` | `/pages/flat/` |
| National Service Scheme | `NSS` | `/pages/nss/` |

## 📂 Files to Update

### Data Structures (DS)
Update all Quiz usages in:
- `/app/pages/ds/units/Unit1.tsx`
- `/app/pages/ds/units/Unit2.tsx`
- `/app/pages/ds/units/Unit3.tsx`
- `/app/pages/ds/units/Unit4.tsx`
- `/app/pages/ds/units/Unit5.tsx`

### Operating Systems (OS)
Update all Quiz usages in:
- `/app/pages/os/units/Unit1.tsx`
- `/app/pages/os/units/Unit2.tsx`
- `/app/pages/os/units/Unit3.tsx`
- `/app/pages/os/units/Unit4.tsx`
- `/app/pages/os/units/Unit5.tsx`

### Environmental Science (ES)
Update all Quiz usages in:
- `/app/pages/es/units/Unit1.tsx`
- `/app/pages/es/units/Unit2.tsx`
- `/app/pages/es/units/Unit3.tsx`
- `/app/pages/es/units/Unit4.tsx`
- `/app/pages/es/units/Unit5.tsx`

### Language Systems (LS)
Update all Quiz usages in:
- `/app/pages/ls/units/Unit1.tsx`
- `/app/pages/ls/units/Unit2.tsx`
- `/app/pages/ls/units/Unit3.tsx`
- `/app/pages/ls/units/Unit4.tsx`
- `/app/pages/ls/units/Unit5.tsx`

### FLAT
Update all Quiz usages in:
- `/app/pages/flat/units/Unit1.tsx`
- `/app/pages/flat/units/Unit2.tsx`
- `/app/pages/flat/units/Unit3.tsx`
- `/app/pages/flat/units/Unit4.tsx`
- `/app/pages/flat/units/Unit5.tsx`

### NSS (if applicable)
Update all Quiz usages in:
- `/app/pages/nss/units/` (if quizzes exist)

## 🔍 How to Find Quiz Usages

Search for `<Quiz` in each unit file to find all instances that need updating.

Example search command (if using VS Code):
1. Open the unit file
2. Press `Ctrl+F` (or `Cmd+F` on Mac)
3. Search for: `<Quiz`
4. Update each occurrence

## 📋 Example Updates by Subject

### Data Structures Example
```tsx
// Unit 1, Module 1 - Arrays Quiz
<Quiz 
  title="Arrays Fundamentals Quiz"
  questions={arraysQuestions}
  subject="DS"
  unitId={1}
  moduleId={1}
/>

// Unit 1, Module 3 - Stack Quiz
<Quiz 
  title="Stack Operations Quiz"
  questions={stackQuestions}
  subject="DS"
  unitId={1}
  moduleId={3}
/>
```

### Operating Systems Example
```tsx
// Unit 2, Module 1 - Process Management Quiz
<Quiz 
  title="Process Management Quiz"
  questions={processQuestions}
  subject="OS"
  unitId={2}
  moduleId={1}
/>
```

### Environmental Science Example
```tsx
// Unit 1, Module 2 - Ecology Quiz
<Quiz 
  title="Ecology Fundamentals Quiz"
  questions={ecologyQuestions}
  subject="ES"
  unitId={1}
  moduleId={2}
/>
```

### Language Systems Example
```tsx
// Unit 3, Module 1 - Grammar Quiz
<Quiz 
  title="Grammar Basics Quiz"
  questions={grammarQuestions}
  subject="LS"
  unitId={3}
  moduleId={1}
/>
```

### FLAT Example
```tsx
// Unit 1, Module 1 - Automata Quiz
<Quiz 
  title="Finite Automata Quiz"
  questions={automataQuestions}
  subject="FLAT"
  unitId={1}
  moduleId={1}
/>
```

## ⚠️ Important Notes

1. **Unit and Module Numbers**: 
   - Start from 1 (not 0)
   - Must match the actual unit/module structure
   - Example: Unit 1, Module 3 means first unit, third module

2. **Subject Codes**:
   - Must be EXACT (case-sensitive)
   - Use the codes from the reference table above

3. **Consistency**:
   - All quizzes in the same module should have the same unitId and moduleId
   - Subject code should be consistent across all units of a subject

## ✅ Verification Checklist

After updating, verify:
- [ ] All `<Quiz` components have 5 props (title, questions, subject, unitId, moduleId)
- [ ] Subject codes match the reference table
- [ ] Unit and module numbers are correct
- [ ] No TypeScript errors in the files
- [ ] Quiz loads without errors in browser
- [ ] Previous scores display correctly
- [ ] New scores save to database
- [ ] Admin can view student progress

## 🧪 Testing Steps

1. **Student View**:
   - Navigate to a module with a quiz
   - Take the quiz and submit
   - Verify score is displayed
   - Retake the quiz
   - Verify previous score badge appears
   - Check new score updates

2. **Admin View**:
   - Login as admin
   - Go to Admin Dashboard → Manage Users
   - Click "Progress" on a student who took quizzes
   - Verify all quiz attempts are shown
   - Check subject, unit, module info is correct

## 🐛 Troubleshooting

**Issue**: Quiz doesn't load
- **Fix**: Check console for errors, verify all 5 props are provided

**Issue**: Progress not saving
- **Fix**: Verify user is logged in, check MongoDB connection

**Issue**: Previous score not showing
- **Fix**: Ensure subject/unitId/moduleId match exactly with saved data

**Issue**: TypeScript errors
- **Fix**: Make sure Quiz component import is correct and props are typed

## 📊 Progress Tracking Features

Once implemented, students will see:
- ✅ Previous attempt scores before retaking
- ✅ Score comparison after retaking
- ✅ Percentage calculations
- ✅ Pass/fail status (60% threshold)
- ✅ Unlimited retakes

Admins will see:
- ✅ All student quiz attempts
- ✅ Scores and percentages
- ✅ Completion timestamps
- ✅ Subject/unit/module organization

## 🚀 Quick Start

1. Open a unit file (e.g., `/app/pages/ds/units/Unit1.tsx`)
2. Find all `<Quiz` components
3. Add the three new props to each
4. Save the file
5. Test in browser
6. Repeat for all unit files

---

**Need Help?** Check the main documentation: `QUIZ_PROGRESS_TRACKING.md`
