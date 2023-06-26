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
      <p className= 'carecompanion' style={{ fontSize: '20px' }}>Do you want to submit a review on a medical professional (doctor, nurse, pa) or a whole facility management? Want to find previous reviews on certain medical professionals and facilities too? To get started, click to <Link to="/sign-up">sign up or log in!</Link></p>
      <img className="doctorImg" src='./frontpic/Doctors-bro.png'></img>
      
      
      <p style={{ fontSize: '20px' }}> <em>Scroll down for more information about the health disparities the exist in the healthcare system</em> <p>&#8595;</p> </p>
      </div>
    </article>
    <article className='box2'>
      <div className='leftbox'>
      <h1 className='factsTitle'>Health Disparities Facts</h1>
      <div className='factbox'>
      <p className='fact1'>In the United States, the problem of inequalities in health and healthcare based on race and ethnicity remains a persistent and significant issue. The COVID-19 pandemic has emphasized the unequal effects felt by individuals from diverse backgrounds, exposing the preexisting inequities in healthcare and overall well-being. However, it is crucial to recognize that these disparities have been extensively studied and documented for a long time, and they are deeply entrenched in structural and systemic injustices rooted in racism and discrimination.</p>
      </div>
      </div>
      <div className='rightbox'>
        <img src="https://www.healthcareitnews.com/sites/hitn/files/HITRacialJusticeHero.jpg" style={{width: '70vh'}}/>
      </div>
    </article>
    <article className='box3'>
      <p className='quote'> <em>CareCompanion's mission is to empower People of Color in the healthcare system by allowing patients to rate and review their experiences with physicians, primary care providers, hospitals, and doctor's offices. CareCompanion aims to promote equity, accountability, and transparency by amplifying the voices of people in marginalized communities.</em>
 </p>

    </article>
    <div className='facts_stories'>
    <h1>Facts & Stories</h1>
    <div className="border"></div> {/* Border element */}
    </div>
   
    <article className='box4'>

      <article className='firstStory'>
      <YouTube  opts={videoOpts} videoId={videoId_deepdive} />
      <p className='story'> The video "Deep Dives: Advocacy in Action for Racial Disparities in Healthcare" sheds light on the racial disparities prevalent within the American healthcare system, particularly affecting minority populations. It emphasizes the voices of those who have personally experienced these disparities and advocates for change. The video addresses the existence of gaps in medical coverage, which result in limited access to proper medical care for certain individuals.</p>
      </article>
      <div className="border"></div> {/* Border element */}
      
      <article className='secondStory'>
      <YouTube  opts={videoOpts} videoId={videoId_story} />
      <p className='story1'>In this NowThis report, a Black man tragically lost his wife as a result of pregnancy complications that could have been prevented and treated adequately by the hospital. This news serves as another stark reminder of the injustices that minorities often face within the healthcare system.</p>
      </article>
      
      <div className="border"></div> {/* Border element */}
     
      <article className='firstStory'>
      <YouTube  opts={videoOpts} videoId={videoId_mixish} />
      <p className='story'>
      In the video, an episode of the ABC's Mixish program depicts the portrayal of how Black individuals experience inequitable treatment within the healthcare system due to historical factors and highlights the unjust nature of this reality.</p>
      </article>
      
      <article className='funfacts'>
        <div className='fact'>
        {/* <div>{element}</div> */}
          <h4>Disproportionate Health Outcomes</h4>
          <p className='thefact'>People of color often experience higher rates of chronic diseases such as diabetes, hypertension, and certain cancers compared to their white counterparts, highlighting disparities in preventive care, access to quality treatment, and health education.</p>
        </div>
        <div className='fact'>
        {/* <FontAwesomeIcon icon={faBandage} /> */}
          <h4>Implicit Bias in Diagnosis and Treatment</h4>
          <p className='thefact'>Research shows that healthcare providers may exhibit implicit biases, leading to differential treatment and diagnostic errors for patients of color. This bias can result in delayed or inadequate care, affecting health outcomes and patient satisfaction.</p>
        </div>
        <div className='fact'>
        {/* <FontAwesomeIcon icon={faHospital} /> */}
          <h4>Limited Access to Quality Care</h4>
          <p className='thefact'>People of color, particularly those from low-income communities, face barriers to accessing quality healthcare services, including limited availability of primary care providers, fewer nearby healthcare facilities, and insufficient health insurance coverage, exacerbating existing health disparities.</p>
        </div>
      </article>
      

    </article>
    </>;
  }