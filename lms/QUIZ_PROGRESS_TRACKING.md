# Quiz Progress Tracking System

## Overview
The LMS now includes a comprehensive quiz progress tracking system that stores student quiz attempts, displays previous scores, allows retakes, and enables admins to monitor student progress.

## Features

### For Students:
1. **Quiz Attempts Tracking**: All quiz attempts are automatically saved to the database
2. **Previous Score Display**: Students can see their previous score before retaking a quiz
3. **Score Comparison**: After retaking, students can compare their new score with the previous attempt
4. **Unlimited Retakes**: Students can retake quizzes as many times as needed
5. **Progress Badges**: Visual indicators show previous attempt scores

### For Admins:
1. **Student Progress Monitoring**: View all quiz attempts for any student
2. **Subject-wise Progress**: See progress organized by subject, unit, and module
3. **Score Analytics**: View scores, percentages, and completion dates
4. **Quick Access**: Progress button on each student card in the admin dashboard

## Database Schema

### Progress Collection
```javascript
{
  userEmail: String,        // Student's email
  subject: String,          // Subject code (e.g., "DS", "OS", "ES")
  unitId: Number,           // Unit number
  moduleId: Number,         // Module number
  score: Number,            // Number of correct answers
  totalQuestions: Number,   // Total questions in quiz
  percentage: Number,       // Calculated percentage
  completedAt: Date         // Timestamp of completion
}
```

## API Endpoints

### POST /api/progress
Save or update quiz progress
```javascript
{
  userEmail: "student@example.com",
  subject: "DS",
  unitId: 1,
  moduleId: 3,
  score: 8,
  totalQuestions: 10
}
```

### GET /api/progress
Retrieve progress data
- Query by `userEmail`: Get all progress for a student
- Query by `subject`: Get all progress for a subject
- Query by both: Get specific subject progress for a student

## Usage in Quiz Components

### Updated Quiz Component Props
```typescript
interface QuizProps {
  title: string;
  questions: Question[];
  subject: string;      // NEW: Subject identifier
  unitId: number;       // NEW: Unit number
  moduleId: number;     // NEW: Module number
}
```

### Example Usage
```tsx
<Quiz 
  title="Arrays Quiz"
  questions={arrayQuestions}
  subject="DS"
  unitId={1}
  moduleId={1}
/>
```

## Implementation Guide

### Step 1: Update Existing Quiz Components
For each subject (DS, OS, ES, LS, FLAT), update Quiz component calls to include the new props:

```tsx
// Before
<Quiz title="Stack Quiz" questions={stackQuestions} />

// After
<Quiz 
  title="Stack Quiz" 
  questions={stackQuestions}
  subject="DS"
  unitId={1}
  moduleId={3}
/>
```

### Step 2: Subject Codes
Use these standardized subject codes:
- `DS` - Data Structures
- `OS` - Operating Systems
- `ES` - Environmental Science
- `LS` - Language Systems
- `FLAT` - Formal Languages & Automata Theory
- `NSS` - National Service Scheme

### Step 3: Unit and Module Numbering
- Units start from 1
- Modules within each unit start from 1
- Example: Unit 1, Module 3 = First unit, third module

## Admin Dashboard Integration

### Viewing Student Progress
1. Navigate to Admin Dashboard → Manage Users
2. Click "Progress" button on any student card
3. View modal showing all quiz attempts with:
   - Subject name
   - Unit and module numbers
   - Score and percentage
   - Completion timestamp

### Progress Modal Features
- Organized by subject
- Color-coded by performance
- Sortable by date
- Shows improvement over time

## Student Experience

### Taking a Quiz
1. Student navigates to a module with a quiz
2. If previous attempt exists, badge shows: "Previous: 7/10 (70%)"
3. Student completes quiz
4. Results show current score and previous score comparison
5. "Retake Quiz" button allows immediate retry

### Score Display
- **During Quiz**: Previous score badge at top
- **After Completion**: 
  - Current score prominently displayed
  - Previous score shown below (if different)
  - Percentage calculated automatically
  - Pass/fail status (60% threshold)

## Styling

### CSS Classes Added
```css
.previous-attempt-badge {
  background: #E3F2FD;
  color: #1976D2;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
}

.previous-score-info {
  background: #F5F5F5;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #616161;
}
```

## Future Enhancements

### Potential Features
1. **Analytics Dashboard**: Visualize progress trends over time
2. **Leaderboards**: Compare performance across students
3. **Certificates**: Award certificates for high scores
4. **Time Tracking**: Record time taken for each quiz
5. **Question-level Analytics**: Track which questions are most difficult
6. **Adaptive Quizzes**: Adjust difficulty based on performance
7. **Export Reports**: Generate PDF reports of student progress

## Troubleshooting

### Common Issues

**Issue**: Progress not saving
- **Solution**: Check if user is logged in (session exists)
- **Solution**: Verify MongoDB connection string in .env

**Issue**: Previous score not displaying
- **Solution**: Ensure subject, unitId, and moduleId match exactly
- **Solution**: Check browser console for API errors

**Issue**: Admin can't see student progress
- **Solution**: Verify student has completed at least one quiz
- **Solution**: Check API endpoint is accessible

## Testing Checklist

- [ ] Student can take quiz and see score
- [ ] Score is saved to database
- [ ] Previous score displays on retake
- [ ] Admin can view student progress
- [ ] Progress modal shows all attempts
- [ ] Percentages calculate correctly
- [ ] Timestamps display properly
- [ ] Retake updates existing record

## Security Considerations

1. **Authentication**: Only logged-in users can save progress
2. **Authorization**: Students can only view their own progress
3. **Admin Access**: Only admins can view all student progress
4. **Data Validation**: Server-side validation of all inputs
5. **Rate Limiting**: Consider adding rate limits to prevent abuse

## Performance Optimization

1. **Indexing**: Add MongoDB indexes on userEmail and subject
2. **Caching**: Consider caching frequently accessed progress data
3. **Pagination**: Implement pagination for large progress lists
4. **Lazy Loading**: Load progress data only when needed

## Maintenance

### Regular Tasks
1. Monitor database size and clean old records if needed
2. Review and optimize slow queries
3. Update subject codes if new subjects are added
4. Backup progress data regularly

### Database Maintenance
```javascript
// Create indexes for better performance
db.progress.createIndex({ userEmail: 1, subject: 1 })
db.progress.createIndex({ completedAt: -1 })
```

## Support

For issues or questions:
1. Check this documentation first
2. Review browser console for errors
3. Check MongoDB logs
4. Verify API endpoints are responding
5. Test with different browsers

---

**Version**: 1.0.0  
**Last Updated**: 2025  
**Maintained By**: LMS Development Team
