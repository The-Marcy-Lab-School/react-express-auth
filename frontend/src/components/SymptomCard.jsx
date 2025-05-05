import React from 'react';
import '../styles/SymptomCard.css';

export default function SymptomCard() {
  return (
    <div className="symptom-card">
      <h3>Symptom Log</h3>
      <p><strong>Symptoms:</strong> Rash, Bleeding, Swelling</p>
      <p><strong>Pain Location:</strong> Arm</p>
      <p><strong>Pain Level/Severity:</strong> 7</p>
      <p><strong>Pain Type:</strong> Burning</p>
      <p><strong>Doctor Type:</strong> Dermatologist, General Physician</p>
      <p><strong>Notes:</strong> ________</p>
      <p>Would you like to create an appointment?</p>
      <div className="appointment-buttons">
        <button className="yes-btn">Yes</button>
        <button className="no-btn">No</button>
      </div>
    </div>
  );
}
