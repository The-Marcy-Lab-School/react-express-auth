import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faBandage,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";

export default function Mission() {
  const element = <FontAwesomeIcon icon={faStethoscope} />;

  return (
    <>
      <article className="box1">
        <h1>What is</h1>
        <h1 className="carecompanion">CareCompanion?</h1>
        <div className="practice">
          <img className="doctorImg" src="./frontpic/Doctors-cuate.png"></img>
        </div>
      </article>
      <article className="box2">
        <div className="leftbox">
          <h1 className="factsTitle">Health Disparities Facts</h1>
          <div className="factbox">
            <p className="fact1">
              In the United States, the problem of inequalities in health and
              healthcare based on race and ethnicity remains a persistent and
              significant issue. The COVID-19 pandemic has emphasized the
              unequal effects felt by individuals from diverse backgrounds,
              exposing the preexisting inequities in healthcare and overall
              well-being. However, it is crucial to recognize that these
              disparities have been extensively studied and documented for a
              long time, and they are deeply entrenched in structural and
              systemic injustices rooted in racism and discrimination.
            </p>
          </div>
        </div>
        <div className="rightbox">
          <img
            src="https://www.healthcareitnews.com/sites/hitn/files/HITRacialJusticeHero.jpg"
            style={{ width: "70vh" }}
          />
        </div>
      </article>
      <article className="box3">
        <p className="quote">
          Empowering People of Color in healthcare through ratings and reviews.
          Promoting equity, accountability, and transparency in marginalized
          communities.{" "}
        </p>
      </article>
      <article className="box4">
        <div>
          <h1 className="facts_stories">Facts & Stories</h1>

          <article className="firstStory">
            <img className="doctorStoryimg" src="./frontpic/patient.png" />
            <p className="story">
              {" "}
              A young Black woman named Maya entered the healthcare system
              seeking help for a persistent health issue. Despite describing her
              symptoms in detail, she was met with skepticism and dismissive
              attitudes from healthcare providers. Maya's concerns were often
              downplayed, leading to delayed diagnoses and inadequate treatment.
              She felt marginalized and unheard, leaving her to question if her
              experiences were a result of systemic bias within the healthcare
              system.
            </p>
          </article>

          <article className="secondStory">
            <img className="doctorStoryimg" src="./frontpic/med.png" />
            <p className="story1">
              Carlos, a Hispanic man, faced language barriers when seeking
              medical care for his elderly parents. The lack of bilingual
              healthcare providers meant important medical information was lost
              in translation, leading to miscommunication and compromised
              treatment. Carlos witnessed firsthand how people of color are
              marginalized when their cultural and linguistic needs are not
              adequately addressed, resulting in unequal access to quality
              healthcare.
            </p>
          </article>

          <article className="firstStory">
            <img className="doctorStoryimg" src="./frontpic/peds.png" />
            <p className="story">
              In a rural community predominantly inhabited by Native Americans,
              Sarah, a young Indigenous woman, faced limited healthcare options
              and inadequate resources. The nearest healthcare facility was
              hours away, making it difficult for her and her community members
              to access timely and essential medical care. Sarah's experience
              highlights the healthcare disparities faced by marginalized
              populations, where geographic location and lack of healthcare
              infrastructure further exacerbate existing inequities.
            </p>
          </article>
        </div>

        <article className="funfacts">
          <div className="fact">
            <div>{element}</div>
            <h4>Disproportionate Health Outcomes</h4>
            <p className="thefact">
              People of color often experience higher rates of chronic diseases
              such as diabetes, hypertension, and certain cancers compared to
              their white counterparts, highlighting disparities in preventive
              care, access to quality treatment, and health education.
            </p>
          </div>
          <div className="fact">
            <FontAwesomeIcon icon={faBandage} />
            <h4>Implicit Bias in Diagnosis and Treatment</h4>
            <p className="thefact">
              Research shows that healthcare providers may exhibit implicit
              biases, leading to differential treatment and diagnostic errors
              for patients of color. This bias can result in delayed or
              inadequate care, affecting health outcomes and patient
              satisfaction.
            </p>
          </div>
          <div className="fact">
            <FontAwesomeIcon icon={faHospital} />
            <h4>Limited Access to Quality Care</h4>
            <p className="thefact">
              People of color, particularly those from low-income communities,
              face barriers to accessing quality healthcare services, including
              limited availability of primary care providers, fewer nearby
              healthcare facilities, and insufficient health insurance coverage,
              exacerbating existing health disparities.
            </p>
          </div>
        </article>
      </article>
    </>
  );
}
