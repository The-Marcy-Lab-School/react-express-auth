import React from 'react';
import { fetchHandler } from '../utils';
import '../styles/home.css';
import WelcomeButton from '../components/WelcomeButton';

export default function HomePage() {
  const content = fetchHandler('/api/susu');
  console.log(content);

  return (
    <div className='home-wrapper'>
      <WelcomeButton />
    </div>
  );
}
