# CareCompanion

### Getting Started

1. Fork this template repo
2. Create a PostgreSQL database
3. Create a `.env` file and define environment variables for your PostgreSQL credentials. See the `knexfile.js` file for needed variables.
4. Run the command `npm run kickstart`

### Mission Statement

At CareCompanion, our mission is to empower People of Color in the healthcare system by providing an application that allows patients to rate and review their healthcare experiences with physicians, primary care providers, hospitals, and doctor's offices. CareCompanion aims to promote equity, accountability, and transparency by amplifying the voices of people in marginalized communities.

### Who We Serve

CareCompanion primarily aims to serve People of Color interested in learning and sharing their experience with healthcare providers, including physicians, primary care providers, hospitals, and doctor's offices. CareCompanion aims to address the unique challenges and disparities POC face in the health care system. 

### Product Overview

CareCompanion is an application designed to help People of Color find physicians, primary care providers, hospitals, and doctor's offices, that treat their POC patients equitably and hold their doctors accountable for how they treat their POC patients. This is done by allowing patients to search and find  physicians, primary care providers, hospitals, and doctor's offices, and rating and reviewing them based on the care they received. This information will then be available to anyone else on the application that searches for that provider. CareCompanion purpose is to help POCs find a provider that they feel safe and respected and who takes their medical issues seriously 


### Summary

 Some hard facts to know

According to the National Library of Medicine, health disparities refer to inequalities or variations in the quality of health and healthcare services that exist among different racial, ethnic, and socio-economic groups. These disparities can manifest as differences in disease prevalence, health outcomes, or access to healthcare resources. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3540621/

In the United States, the issue of racial and ethnic disparities in health and healthcare continues to be an ongoing and significant concern. The COVID-19 pandemic has further highlighted the disproportionate impact experienced by people of color, shedding light on the existing inequities in health and healthcare. However, it is important to note that these disparities have been well-documented for many years and are deeply rooted in long-standing structural and systemic inequities stemming from racism and discrimination. https://www.kff.org/racial-equity-and-health-policy/report/key-data-on-health-and-health-care-by-race-and-ethnicity/


According to the KFF(Kaiser Family Foundation), an independent source for health policy research, polling, and news, when it comes to health coverage, access to healthcare, and utilization of care, there are notable disparities between different racial and ethnic groups. In general, Black, Hispanic, and AIAN (American Indian and Alaska Native) individuals experienced more unfavorable outcomes compared to White individuals across the various measures examined (as depicted in Figure 5). On the other hand, the experiences of Asian individuals were mostly comparable to or better than those of White individuals in relation to these specific measures.

Our objective is to cater to individuals from diverse backgrounds, particularly those who identify as people of color (POC), who face health disparities and may harbor reservations about seeking care from specific healthcare providers. By incorporating feedback from individuals across various backgrounds, our aim is to foster a sense of safety and comfort within our communities when it comes to accessing healthcare services from physicians, primary care providers, hospitals, and doctor's offices.



### Technologies  
We built CareCompanion using the following technologies:

![](readme-img/technologies.png.png)



### ERD

To manage the data necessary for the CareCompanion backend, we have implemented the following schema in our PostgreSQL database:

![](readme-img/ERD.png.png)

### Key API Endpoints

The CareCompanion API provides the following endpoints:

| endpoint | description | example |
| - | - | - |
| `/api/reviews` | Posts a review for a doctor or facilities | `POST /api/reviews` |
| `/api/reviews` | Gets all reviews for doctors or facilities | `GET /api/reviews` |
| `/api/bookmark` | Gets the doctor or facility that was saved to your liking| `GET /api/bookmark/:id` |


