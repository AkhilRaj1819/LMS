"use client";

import { useEffect, useState } from "react";

interface Period {
  time: string;
  subject: string;
  teacher?: string;
  description?: string;
}

interface TimetableData {
  [key: string]: Period[];
}

export default function Timetable() {
  const [data, setData] = useState<Period[]>([]);
  const [selected, setSelected] = useState<Period | null>(null);
  const [currentPeriod, setCurrentPeriod] = useState<Period | null>(null);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [linePosition, setLinePosition] = useState<number>(0);
  const timelineRef = useState<HTMLDivElement | null>(null)[0];

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = '.timeline::-webkit-scrollbar { display: none; }';
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const currentPeriod = getCurrentOrNextPeriod();
      setSelected(currentPeriod);
      scrollToCurrentPeriod();
      const interval = setInterval(() => {
        const newPeriod = getCurrentOrNextPeriod();
        setSelected(newPeriod);
        scrollToCurrentPeriod();
      }, 60000);
      return () => clearInterval(interval);
    }
  }, [data]);

  useEffect(() => {
    const updateLinePosition = () => {
      const now = new Date();
      setCurrentTime(now);
      calculateLinePosition(now);
    };

    updateLinePosition();
    const interval = setInterval(updateLinePosition, 1000);
    return () => clearInterval(interval);
  }, [data]);

  const scrollToCurrentPeriod = () => {
    if (!currentPeriod) return;
    const index = data.findIndex(p => p === currentPeriod);
    if (index !== -1) {
      const element = document.querySelector(`[data-period-index="${index}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const loadData = async () => {
    const res = await fetch("/timetable.json");
    const json: TimetableData = await res.json();
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const today = days[new Date().getDay()];
    setData(json[today] || []);
  };

  const parseTime = (timeStr: string) => {
    let [hours, minutes] = timeStr.split(":").map(Number);
    if (hours < 9) hours += 12;
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  const calculateLinePosition = (now: Date) => {
    if (data.length === 0) return;

    const firstPeriod = data[0];
    const [startStr] = firstPeriod.time.split(" - ");
    const startTime = parseTime(startStr);

    const lastPeriod = data[data.length - 1];
    const [, endStr] = lastPeriod.time.split(" - ");
    const endTime = parseTime(endStr);

    const totalMinutes = (endTime.getTime() - startTime.getTime()) / (1000 * 60);
    const elapsedMinutes = (now.getTime() - startTime.getTime()) / (1000 * 60);

    const periodHeight = 88;
    const breakHeight = 30;
    
    // Calculate total height including breaks
    let totalHeight = data.length * periodHeight;
    totalHeight += breakHeight; // Lunch break (after period 3)
    totalHeight += breakHeight; // Other break (after period 6)

    const position = (elapsedMinutes / totalMinutes) * totalHeight;
    setLinePosition(Math.max(0, Math.min(position, totalHeight)));
  };

  const getCurrentOrNextPeriod = () => {
    const now = new Date();
    let activePeriod = null;
    for (const period of data) {
      const [start, end] = period.time.split(" - ");
      const startTime = parseTime(start);
      const endTime = parseTime(end);
      if (now >= startTime && now <= endTime) {
        activePeriod = period;
        break;
      }
    }
    setCurrentPeriod(activePeriod);
    if (activePeriod) return activePeriod;
    for (const period of data) {
      const [start] = period.time.split(" - ");
      const startTime = parseTime(start);
      if (now < startTime) return period;
    }
    return data[0] || null;
  };

  const renderTimeline = () => (
    <div style={styles.timeline} className="timeline">
      <div style={{...styles.redLine, top: `${linePosition}px`}} />
      {data.map((period, i) => {
        const isCurrentPeriod = currentPeriod === period;
        return (
          <div key={i} data-period-index={i}>
            <div
              style={{
                ...styles.periodItem,
                background: selected === period ? "#f0f0f0" : "white",
                position: "relative",
              }}
              onClick={() => setSelected(period)}
            >
              <div style={styles.timeText}>{period.time}</div>
              <div style={styles.subjectText}>{period.subject || "Free"}</div>
              {isCurrentPeriod && (
                <div style={styles.happeningBadge}>Happening</div>
              )}
            </div>
            {i === 2 && (
              <div style={styles.breakSpace}>
                <div style={styles.breakText}>Lunch Break (12:30 - 1:15)</div>
              </div>
            )}
            {i === 5 && (
              <div style={styles.breakSpace}>
                <div style={styles.breakText}>Break</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  const renderDetails = () => {
    if (!selected) return <div style={styles.details}>No period selected</div>;
    const [start, end] = selected.time.split(" - ");
    return (
      <div style={styles.details}>
        <h2 style={styles.detailSubject}>{selected.subject || "Free Period"}</h2>
        <div style={styles.detailTime}>
          {start} – {end}
        </div>
        {selected.teacher && (
          <div style={styles.detailField}>
            <strong>Teacher:</strong> {selected.teacher}
          </div>
        )}
        {selected.description && (
          <div style={styles.detailField}>
            <strong>Description:</strong> {selected.description}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {renderTimeline()}
      {renderDetails()}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    border: "1px solid #999",
  },
  timeline: {
    flex: "0 0 40%",
    overflowY: "auto",
    borderRight: "2px dotted #999",
    position: "relative",
    background: "white",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },
  redLine: {
    position: "absolute",
    left: 0,
    right: 0,
    height: "3px",
    background: "#FF8080",
    zIndex: 10,
    transition: "top 0.5s ease",
    pointerEvents: "none",
  },
  periodItem: {
    padding: "20px 25px",
    borderBottom: "1px solid #ccc",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  timeText: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "8px",
  },
  subjectText: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
  },
  breakSpace: {
    height: "30px",
    background: "#f9f9f9",
    borderBottom: "1px solid #ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  breakText: {
    fontSize: "12px",
    color: "#999",
    fontStyle: "italic",
  },
  happeningBadge: {
    position: "absolute",
    top: "8px",
    right: "8px",
    background: "#4CAF50",
    color: "white",
    fontSize: "10px",
    padding: "3px 8px",
    borderRadius: "12px",
    fontWeight: "600",
  },
  details: {
    flex: 1,
    padding: "30px",
    background: "white",
  },
  detailSubject: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#333",
  },
  detailTime: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "20px",
  },
  detailField: {
    fontSize: "16px",
    marginBottom: "10px",
    color: "#555",
  },
};
