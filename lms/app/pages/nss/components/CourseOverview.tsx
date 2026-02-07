'use client';
import React, { useState, useEffect } from 'react';
import MainSidebar from '@/components/Sidebar';
import { useSession } from 'next-auth/react';

interface CourseOverviewProps {
  onModuleSelect: (unitId: number, moduleId: number) => void;
}

const CourseOverview: React.FC<CourseOverviewProps> = ({ onModuleSelect }) => {
  const [activeTab, setActiveTab] = useState('learning-path');
  const [expandedUnit, setExpandedUnit] = useState<number | null>(1);
  const { data: session } = useSession();
  const [studentProgress, setStudentProgress] = useState<any[]>([]);

  useEffect(() => {
    if (session?.user?.email) {
      fetchStudentProgress(session.user.email);
    }
  }, [session]);

  const fetchStudentProgress = async (email: string) => {
    const res = await fetch(`/api/progress?userEmail=${email}&subject=NSS`);
    const data = await res.json();
    if (data.success) {
      setStudentProgress(data.data);
    }
  };

  const completedModules = studentProgress.length;
  const masteryModules = studentProgress.filter(p => p.percentage >= 80).length;
  const totalModules = 25;
  const completedPercentage = Math.round((completedModules / totalModules) * 100);
  const masteryPercentage = Math.round((masteryModules / totalModules) * 100);

  const units = [
    {
      id: 1,
      title: 'Orientation: Career Guidance',
      description: 'Develop awareness about career planning, personal talents, and motivation through orientations, ice-breaking sessions, success stories, and talent shows.',
      modules: [
        { id: '1.1', title: 'Career Orientation & Future Planning', description: 'Conducting orientation programs for students - future plans, activities, and roadmap' },
        { id: '1.2', title: 'Ice Breaking & Personal Skills', description: 'Ice breaking sessions - expectations from the course and knowing personal talents' },
        { id: '1.3', title: 'Success Stories & Motivation', description: 'Displaying success stories, motivational bio pics, and award-winning movies' },
        { id: '1.4', title: 'Talent Show Activities', description: 'Conducting talent shows in singing patriotic songs, paintings, and contributions' },
        { id: '1.5', title: 'Environmental Literature', description: 'Write a summary on any book related to environmental issues' }
      ]
    },
    {
      id: 2,
      title: 'Nature & Waste Management',
      description: 'Promote responsibility toward environmental protection and waste management through competitions, recycling activities, and eco-friendly practices.',
      modules: [
        { id: '2.1', title: 'Best Out of Waste Competition', description: 'Creative projects using waste materials' },
        { id: '2.2', title: 'Poster Making Competition', description: 'Creating posters and signs for environmental awareness' },
        { id: '2.3', title: 'Recycling & Environmental Pollution', description: 'Recycling activities and pollution prevention' },
        { id: '2.4', title: 'Rainwater Harvesting Management', description: 'Understanding and implementing rainwater harvesting systems' },
        { id: '2.5', title: 'Eco-Friendly Product Management', description: 'Promoting and using eco-friendly products' }
      ]
    },
    {
      id: 3,
      title: 'Community Service',
      description: 'Encourage participation in community development and health awareness programs through village camps, surveys, and collaboration with NGOs.',
      modules: [
        { id: '3.1', title: 'One Day Special Camp in Village', description: 'Conducting village camps and contacting area leaders' },
        { id: '3.2', title: 'Village Survey & Problem Identification', description: 'Survey villages, identify problems, and help solve via media and authorities' },
        { id: '3.3', title: 'Health Awareness Programs', description: 'Programs on general health, mental health, spiritual health, and HIV/AIDS' },
        { id: '3.4', title: 'Consumer Awareness Programs', description: 'Explaining legal provisions and consumer rights' },
        { id: '3.5', title: 'Collaboration with NGOs & Charities', description: 'Programs in collaboration with local charities and NGOs' }
      ]
    },
    {
      id: 4,
      title: 'Environmental Safety',
      description: 'Demonstrate sustainable habits and ensure environmental cleanliness and safety through eco-friendly approaches, vehicle maintenance, and green activities.',
      modules: [
        { id: '4.1', title: 'Eco-Friendly Approaches', description: 'Virtual demonstration of eco-friendly approaches for sustainable living' },
        { id: '4.2', title: 'Vehicle Maintenance Workshops', description: 'Workshops on vehicle maintenance and fuel efficiency' },
        { id: '4.3', title: 'Safety Campaign Projects', description: 'Road safety, fire safety, and disaster preparedness campaigns' },
        { id: '4.4', title: 'Go Green Activities', description: 'Tree plantation drives and green campus initiatives' },
        { id: '4.5', title: 'Clean Campus Program', description: 'Cleanliness drives and waste management programs' }
      ]
    },
    {
      id: 5,
      title: 'Digital Environmental Awareness',
      description: 'Conduct digital environmental awareness activities and follow cyber safety practices through social media campaigns, zero-waste initiatives, and digital citizenship programs.',
      modules: [
        { id: '5.1', title: 'Digital Environmental Awareness', description: 'Environmental awareness via social media platforms' },
        { id: '5.2', title: 'Organizing Zero-Waste Day', description: 'Planning and conducting zero-waste day activities' },
        { id: '5.3', title: 'Women Empowerment Programs', description: 'Sexual abuse awareness, adolescent health, and population education' },
        { id: '5.4', title: 'Internet Safety & Cyber Wellness', description: 'Internet safety, cyberbullying, and digital wellness programs' },
        { id: '5.5', title: 'Digital Citizenship Activities', description: 'Digital citizenship activities and programs in schools' }
      ]
    }
  ];

  return (
    <div className="flex">
      <div>
      <MainSidebar />
      </div>
      <div className="flex-1">
        <div className="lms-dashboard">
          <div className="lms-container">
        <div className="lms-header">
          <div className="header-left">
            <svg className="megaphone-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#E63946" strokeWidth="2" fill="none"/>
            </svg>
            <h1 className="course-title">National Service Scheme (NSS)</h1>
          </div>
          <div className="header-right">
            <div className="progress-bar-container">
              <div className="progress-segments">
                {[...Array(20)].map((_, i) => {
                  const segmentThreshold = (i + 1) * 5;
                  return (
                    <div 
                      key={i} 
                      className={`segment ${
                        completedPercentage >= segmentThreshold ? 'completed' : 
                        masteryPercentage >= segmentThreshold ? 'mastery' : ''
                      }`}
                    ></div>
                  );
                })}
              </div>
              <div className="progress-text">{completedPercentage}% Completed • {masteryPercentage}% Mastery</div>
            </div>
          </div>
        </div>

        <nav className="tab-navigation">
          <button className={`tab ${activeTab === 'learning-path' ? 'active' : ''}`} onClick={() => setActiveTab('learning-path')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 3h12M2 8h12M2 13h12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            Learning Path
          </button>
          <button className={`tab ${activeTab === 'sessions' ? 'active' : ''}`} onClick={() => setActiveTab('sessions')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="3" y="3" width="10" height="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            Sessions
          </button>
          <button className={`tab ${activeTab === 'assessments' ? 'active' : ''}`} onClick={() => setActiveTab('assessments')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Assessments
          </button>
          <button className={`tab ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            About
          </button>
          <button className="tab" onClick={() => window.location.href = '/pages/livebooks'} style={{ marginLeft: 'auto' }}>
            Go to Livebooks
          </button>
        </nav>

        <div className="timeline-content">
          {units.map((unit) => (
            <div key={unit.id} className="unit-block">
              <div className="unit-header-block" onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}>
                <div className="module-badge">
                  <div className="badge-label">Module</div>
                  <div className="badge-number">{unit.id}</div>
                </div>
                <div className="unit-description">
                  <h2 className="unit-title">{unit.title}</h2>
                  <p className="unit-desc">{unit.description}</p>
                </div>
                <div className="expand-indicator">{expandedUnit === unit.id ? '▼' : '▶'}</div>
              </div>

              {expandedUnit === unit.id && (
                <div className="lessons-timeline">
                  {unit.modules.map((module, idx) => (
                    <div 
                      key={module.id} 
                      className="lesson-item" 
                      onClick={(e) => {
                        e.stopPropagation();
                        onModuleSelect(unit.id, idx + 1);
                      }}
                    >
                      <div className="lesson-badge">{module.id}</div>
                      <div className="lesson-content">
                        <h3 className="lesson-title">{module.title}</h3>
                        <p className="lesson-desc">{module.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
