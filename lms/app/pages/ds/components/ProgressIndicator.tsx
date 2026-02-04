'use client';
import React, { useState, useEffect } from 'react';

interface ProgressIndicatorProps {
  unitNumber: string;
  unitTitle: string;
  isSidebarOpen?: boolean;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ unitNumber, unitTitle, isSidebarOpen }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showSparkles, setShowSparkles] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDragging) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      const finalProgress = Math.min(progress, 100);
      setScrollProgress(finalProgress);
      
      if (finalProgress >= 100 && !showSparkles) {
        setShowSparkles(true);
        setTimeout(() => setShowSparkles(false), 2000);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDragging]);

  if (isSidebarOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '-20px',
      left: '0px',
      width: '100%',
      padding: '70px 0px',
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '50px 80px 20px 80px',
        backgroundColor: '#FAFBFC'
      }}>
        {/* Progress bar */}
        <div style={{
          width: '100%',
          height: '7px',
          backgroundColor: '#c6c2c2',
          borderRadius: '3px',
          overflow: 'visible',
          position: 'relative'
        }}>
          {/* Progress fill */}
          <div style={{
            width: `${scrollProgress}%`,
            height: '100%',
            backgroundColor: '#FFD700',
            borderRadius: '3px',
            transition: 'width 0.1s ease-out',
            position: 'relative'
          }}>
            {/* Orange traveling dot */}
            {scrollProgress < 100 && (
              <div 
                style={{
                  position: 'absolute',
                  right: '-6px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#f79774',
                  borderRadius: '50%',
                  zIndex: 10,
                  cursor: 'grab'
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                  const progressBar = e.currentTarget.parentElement?.parentElement;
                  if (!progressBar) return;
                  
                  document.body.style.userSelect = 'none';
                  
                  const handleMouseMove = (moveEvent: MouseEvent) => {
                    moveEvent.preventDefault();
                    const rect = progressBar.getBoundingClientRect();
                    const x = moveEvent.clientX - rect.left;
                    const progress = Math.max(0, Math.min(100, (x / rect.width) * 100));
                    setScrollProgress(progress);
                    
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrollTo = (progress / 100) * docHeight;
                    window.scrollTo({ top: scrollTo, behavior: 'auto' });
                  };
                  
                  const handleMouseUp = () => {
                    setIsDragging(false);
                    document.body.style.userSelect = '';
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                  };
                  
                  document.addEventListener('mousemove', handleMouseMove);
                  document.addEventListener('mouseup', handleMouseUp);
                }}
              />
            )}
          </div>
          
          {/* End icon */}
          {scrollProgress >= 100 && (
            <img 
              src="https://storage.googleapis.com/nucleus_public_assets_community/assets/livebooksV2/LivebooksV2LessonProgress.svg"
              alt="Progress Complete"
              style={{
                position: 'absolute',
                right: '1px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '24px',
                height: '24px',
                zIndex: 10
              }}
            />
          )}
        </div>
        
        {/* Unit info and completion status */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '8px'
        }}>
          <div style={{
            fontSize: '12px',
            color: '#666',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '2px 6px',
              borderRadius: '0px',
              fontSize: '10px',
              fontWeight: 'bold'
            }}>{unitNumber}</span>
            <span>{unitTitle}</span>
          </div>
          
          {scrollProgress >= 100 && (
            <div style={{
              fontSize: '12px',
              color: '#666',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span>Completed!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;