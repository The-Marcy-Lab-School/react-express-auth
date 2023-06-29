import { Link } from 'react-router-dom';
import React from 'react';
import YouTube from 'react-youtube';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStethoscope, faBandage, faHospital } from '@fortawesome/free-solid-svg-icons';


const videoId_mixish = 'xTI4XdqIAN4';
const videoId_story = 'xGAUAH2vGVU';
const videoId_deepdive ='v7NFXbikOP0'
const videoOpts = {
  width: '450',
  height: '250',
};


export default function Mission() {
  
  // const element = <FontAwesomeIcon icon={faStethoscope} />

    return <>
    <article className='box1'>
      <h1 className='carecompanion' ><em> Welcome to CareCompanion</em></h1>
      {/* <h1 className='carecompanion'>CareCompanion?</h1> */}
      <div className='practice'>
      <p className= 'carecompanion' style={{ fontSize: '20px' }}>Do you want to submit a review on a medical professional (doctor, nurse, pa) or a whole facility management? Want to find previous reviews on certain medical professionals and facilities too? To get started, click to <Link to="/signuplogin">sign up or log in!</Link></p>
      <img className="doctorImg" src='./frontpic/Doctors-bro.png'></img>
      
      
      <p style={{ fontSize: '20px' }}> <em>Scroll down for more information about the health disparities the exist in the healthcare system</em> <p>&#8595;</p> </p>
      </div>
    </article>
    <article className='box2'>
      <div className='leftbox'>
      <h1 className='factsTitle'><em> Facts about Health Disparities</em> </h1>
      <div className='factbox'>
      <p className='fact1' style={{ fontSize: '20px'}}  ><em>In the United States, the problem of inequalities in health and healthcare based on race and ethnicity remains a persistent and significant issue. The COVID-19 pandemic has emphasized the unequal effects felt by individuals from diverse backgrounds, exposing the preexisting inequities in healthcare and overall well-being. However, it is crucial to recognize that these disparities have been extensively studied and documented for a long time, and they are deeply entrenched in structural and systemic injustices rooted in racism and discrimination.</em></p>
      </div>
      </div>
      <div className='rightbox'>
        <img src="https://imf-d8-prod.s3.us-west-1.wasabisys.com/2023-06/health-and-health-care-among-people-of-color-compared-to-white-people-.png" style={{width: '70vh'}}/>
      </div>
    </article>
    <article className='box3'>
      <p className='quote'> <em>CareCompanion's mission is to empower People of Color in the healthcare system by allowing patients to rate and review their experiences with physicians, primary care providers, hospitals, and doctor's offices. CareCompanion aims to promote equity, accountability, and transparency by amplifying the voices of people in marginalized communities.</em>
 </p>

    </article>
    <div className='facts_stories'>
    <h1 className='factsstories'><em>Facts & Stories</em></h1>
    <div className="border"></div> {/* Border element */}
    </div>
   
    <article className='box4'>

      <article className='firstStory'>
     <img src= 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_29/1591419/invisiblebias_final.jpg' width="450"style={{ borderRadius: '50%' }}/>
      <p className='story'style={{ fontSize: '15x' }}>  <h4 className='header'>Implicit Bias in Diagnosis and Treatment</h4> Research shows that healthcare providers may exhibit implicit biases, leading to differential treatment and diagnostic errors for patients of color. This bias can result in delayed or inadequate care, affecting health outcomes and patient satisfaction.</p>
      </article>
      <div className="border"></div> {/* Border element */}
      
      <article className='secondStory'> 
      <img src= 'https://healthpayerintelligence.com/images/site/article_headers/_normal/GettyImages-1192962717.png' width="450" style={{ borderRadius: '50%' }}/>
      <p className='story1'style={{ fontSize: '15x' }}> <h4 className='header'>Disproportionate Health Outcomes</h4> People of color often experience higher rates of chronic diseases such as diabetes, hypertension, and certain cancers compared to their white counterparts, highlighting disparities in preventive care, access to quality treatment, and health education.</p>
      </article>
      
      <div className="border"></div> {/* Border element */}
     
      <article className='firstStory'>
      <img src= 'https://production-tcf.imgix.net/app/uploads/2019/12/18171821/taylor_header-01.png' width="450" style={{ borderRadius: '50%' }}/>
      <p className='story'style={{ fontSize: '15x' }}> <h4 className='header'>Limited Access to Quality Care</h4> People of color, particularly those from low-income communities, face barriers to accessing quality healthcare services, including limited availability of primary care providers, fewer nearby healthcare facilities, and insufficient health insurance coverage, exacerbating existing health disparities.
     </p>
      </article>
    
    </article>
    </>;
  }