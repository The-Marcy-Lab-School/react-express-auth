import { useState, useEffect } from "react";
import ArticlesComponent from "../components/ArticlesCard";
import globeImage from "../imgs/environment.png"

export default function ArticlesPage() {
    const [filter, setFilter] = useState('help environment green recycling');
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
      document.body.style.overflowX = 'hidden';

      return () => {
          document.body.style.overflowX = '';
      };
  }, []);

  return (
    <>
      <div style={{
        position: 'absolute',
        top: "-80rem",
        right: "-30rem",
        zIndex: -1,
        width: '100%',
        height: 'auto'
        }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#45885F" d="M36.3,-53.8C48.5,-41.2,60.7,-32.4,61.5,-21.9C62.2,-11.4,51.4,0.9,48.1,17.1C44.9,33.3,49.1,53.4,42.4,62.8C35.6,72.3,17.8,71,5.3,63.7C-7.2,56.4,-14.3,43,-27.2,35.6C-40.1,28.1,-58.8,26.6,-69,17.2C-79.2,7.8,-81.1,-9.6,-74.3,-22.2C-67.6,-34.9,-52.2,-42.8,-38.4,-54.9C-24.6,-66.9,-12.3,-83.2,-0.1,-83C12.1,-82.9,24.2,-66.4,36.3,-53.8Z" transform="translate(100 100)" />
        </svg>
      </div>

    <div style={{
                position: 'absolute',
                top: '-35rem',
                right: '10rem',
                zIndex: 5
            }}>
                <img src={globeImage} alt="globe image" style={{ width: '35rem', height: 'auto' }} />
            </div>

    <div style={{
            position: 'absolute',
            top: '-25rem',
            left: '2rem',
            zIndex: 2,
            width: '50%'
          }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '3rem' }}>Environmental Impact</h1>
        <p style={{ fontSize: '1.5rem' }}>We wanted to share some of our findings from our research on the environmental impacts of waste and spread awareness to this cause. This is also a space for people to inform themselves about environmental issues and ways to make a change.</p>
    </div>
    <div style={{ padding: '4rem', marginTop: '40rem', paddingTop: '10rem'}}>
      <ArticlesComponent filter={filter} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
    </>
  );
}