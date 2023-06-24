import { Link } from 'react-router-dom';
import React from 'react';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope, faBandage, faHospital } from '@fortawesome/free-solid-svg-icons';




export default function Mission() {
  
  const element = <FontAwesomeIcon icon={faStethoscope} />

    return <>
    <article className='box1'>
      <h1>What is</h1>
      <h1 className='carecompanion'>CareCompanion?</h1>
      <div className='practice'>
      <img className="doctorImg" src='./frontpic/Doctors-bro.png'></img>
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
      <p className='quote'>Empowering People of Color in healthcare through ratings and reviews. Promoting equity, accountability, and transparency in marginalized communities. </p>

    </article>
    <article className='box4'>
      <h1 className='facts_stories'>Facts & Stories</h1>

      <article className='firstStory'>
      <img className='doctorStoryimg' src='https://cdn.shopify.com/s/files/1/0720/8186/7039/articles/what-is-healthcare-707998.png?v=1677580538'/>
      <p className='story'> In the video, an episode of the ABC's Mixish program depicts the portrayal of how Black individuals experience inequitable treatment within the healthcare system due to historical factors and highlights the unjust nature of this reality.</p>
      </article>

      <article className='secondStory'>
      <img className='doctorStoryimg' src='https://cdn.shopify.com/s/files/1/0720/8186/7039/articles/what-is-healthcare-707998.png?v=1677580538'/>
      <p className='story1'>In this NowThis report, a Black man tragically lost his wife as a result of pregnancy complications that could have been prevented and treated adequately by the hospital. This news serves as another stark reminder of the injustices that minorities often face within the healthcare system.</p>
      </article>

      <article className='firstStory'>
      <img className='doctorStoryimg' src='https://cdn.shopify.com/s/files/1/0720/8186/7039/articles/what-is-healthcare-707998.png?v=1677580538'/>
      <p className='story'>In this NowThis report, a Black man tragically lost his wife as a result of pregnancy complications that could have been prevented and treated adequately by the hospital. This news serves as another stark reminder of the injustices that minorities often face within the healthcare system.</p>
      </article>
      
      <article className='funfacts'>
        <div className='fact'>
        <div>{element}</div>
          <h4>Disproportionate Health Outcomes</h4>
          <p className='thefact'>People of color often experience higher rates of chronic diseases such as diabetes, hypertension, and certain cancers compared to their white counterparts, highlighting disparities in preventive care, access to quality treatment, and health education.</p>
        </div>
        <div className='fact'>
        <FontAwesomeIcon icon={faBandage} />
          <h4>Implicit Bias in Diagnosis and Treatment</h4>
          <p className='thefact'>Research shows that healthcare providers may exhibit implicit biases, leading to differential treatment and diagnostic errors for patients of color. This bias can result in delayed or inadequate care, affecting health outcomes and patient satisfaction.</p>
        </div>
        <div className='fact'>
        <FontAwesomeIcon icon={faHospital} />
          <h4>Limited Access to Quality Care</h4>
          <p className='thefact'>People of color, particularly those from low-income communities, face barriers to accessing quality healthcare services, including limited availability of primary care providers, fewer nearby healthcare facilities, and insufficient health insurance coverage, exacerbating existing health disparities.</p>
        </div>
      </article>
      

    </article>
    </>;
  }
