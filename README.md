# Learning Management System (LMS)

A comprehensive educational platform built with Next.js, featuring multiple subject courses with interactive content, quizzes, and student management.

## Features

- **Multi-Subject Learning Platform**: Linguistics, Data Structures, Engineering Systems, Operating Systems, and Network Security
- **Interactive Content**: Video lessons, quizzes, and comprehensive course materials
- **Student Management**: Dashboard, attendance tracking, and progress monitoring
- **Admin Panel**: Course management and student administration
- **Authentication**: Secure login system with NextAuth.js
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 16.1.6
- **Frontend**: React 19.2.3, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: MongoDB
- **Authentication**: NextAuth.js
- **Icons**: Heroicons, Lucide React

## Course Subjects

### Linguistics (LS)
- Overview of Linguistics and Sub-fields
- Phonetics and Speech Sounds
- Phonology and Sound Patterns
- Morphology and Word Structure

### Data Structures (DS)
- Fundamental data structures and algorithms
- Implementation and analysis

### Engineering Systems (ES)
- Engineering principles and applications
- System design and analysis

### Operating Systems (OS)
- System architecture and processes
- Memory management and file systems

### Network Security Systems (NSS)
- Security protocols and implementations
- Network architecture and protection

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd LMS/lms
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Configure your MongoDB connection and NextAuth settings
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
lms/
├── app/
│   ├── api/                 # API routes
│   ├── pages/               # Course pages
│   │   ├── ls/             # Linguistics course
│   │   ├── ds/             # Data Structures course
│   │   ├── es/             # Engineering Systems course
│   │   ├── os/             # Operating Systems course
│   │   ├── nss/            # Network Security course
│   │   ├── adminDashboard/ # Admin panel
│   │   └── studentDashboard/ # Student dashboard
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   ├── OptionCard.tsx     # Course selection cards
│   ├── Sidebar.tsx        # Navigation sidebar
│   └── Timetable.tsx      # Schedule component
├── lib/                   # Utilities and database
│   ├── db.ts             # Database connection
│   └── schema.ts         # Database schemas
├── public/               # Static assets
└── scripts/              # Database setup scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Database Setup

The application uses MongoDB with setup scripts for initial data:

- `scripts/seedStudents.ts` - Populate student data
- `scripts/setupLeaves.ts` - Configure leave management

## Authentication

The system supports:
- Student login and dashboard
- Admin login and management panel
- Secure session management with NextAuth.js

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.