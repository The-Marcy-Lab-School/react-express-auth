import React from 'react';
import { Link } from 'react-router-dom';
import SymptomCard from '../components/SymptomCard';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const symptomLogs = [1, 2, 3, 4]; // Placeholder entries

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="dashboard-content">
        {/* Left Column */}
        <div className="sidebar">
          <h2>Symptom Logs & Tracker</h2>
          <ul className="log-list">
            <li>Headache, 4/15</li>
            <li>Fatigue, 4/16</li>
            <li>Back Pain, 4/17</li>
          </ul>
          <Link to="/symptom-log" className="create-log-btn">
            Create New Symptom Log
          </Link>
        </div>

        {/* Right Column */}
        <div className="symptom-cards">
          {symptomLogs.map((_, i) => (
            <SymptomCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
