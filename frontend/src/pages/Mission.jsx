import { Link } from 'react-router-dom';
import React from 'react';
import YouTube from 'react-youtube';

const videoId_mixish = 'xTI4XdqIAN4';
const videoId_story = 'xGAUAH2vGVU';
const statPic = 'C:\Users\Saida\OneDrive\Pictures\datatable.PNG';


export default function Mission() {
    return <>
      <h1 className='title'> CareCompanion's Mission Statement</h1>
      
      <div className="mission" style={{  width: 'fit-content', margin: '0 auto', padding: '20px', borderRadius: '50%', border: '2px solid black'}}> Welcome to CareCompanion, our mission is to empower People of Color in the healthcare system by allowing patients to rate and review their experiences with physicians, primary care providers, hospitals, and doctor's offices. CareCompanion aims to promote equity, accountability, and transparency by amplifying the voices of people in marginalized communities.</div>

     <h1 className='title'> How To Use Our Site</h1>
   
    <p className="box">Do you want to submit a review on a medical professional (doctor, nurse, pa) or a whole facility management? Want to find previous reviews on certain medical professionals and facilities too? To get started, click to <Link to="/sign-up"> sign up or log in!</Link></p>

     <h1 className='title'> Health Disparities Facts & Stories</h1>
    
     <p className="box">
     In the United States, the problem of inequalities in health and healthcare based on race and ethnicity remains a persistent and significant issue. The COVID-19 pandemic has emphasized the unequal effects felt by individuals from diverse backgrounds, exposing the preexisting inequities in healthcare and overall well-being. However, it is crucial to recognize that these disparities have been extensively studied and documented for a long time, and they are deeply entrenched in structural and systemic injustices rooted in racism and discrimination.
       </p>
<p className='statBox'>Based on findings from the KFF (Kaiser Family Foundation), a reputable organization that conducts health policy research, polling, and news, there are significant discrepancies among different racial and ethnic groups in terms of health coverage, healthcare access, and care utilization. When evaluating various metrics (as shown in Figure 5), it becomes evident that Black, Hispanic, and AIAN individuals generally encountered more negative outcomes compared to White individuals. Conversely, Asian individuals, for the most part, had experiences similar to or more favorable than White individuals regarding these particular indicators.
</p>
<img src={statPic} />



       <div>
     <p> In the video, an episode of the ABC's Mixish program depicts the portrayal of how Black individuals experience inequitable treatment within the healthcare system due to historical factors and highlights the unjust nature of this reality.</p>
      <YouTube videoId_mixish={videoId_mixish} />
     
      <p>In this NowThis report, a Black man tragically lost his wife as a result of pregnancy complications that could have been prevented and treated adequately by the hospital. This news serves as another stark reminder of the injustices that minorities often face within the healthcare system.</p>
      <YouTube videoId_story={videoId_story} />
    
    </div>
      
     

    </>;
  }