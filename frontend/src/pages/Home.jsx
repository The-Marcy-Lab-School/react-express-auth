import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText, Button} from "reactstrap";
import image from '../../assets/BACKGROUND_IMG.png';
import { NavLink } from "react-router-dom";
import '../index.css';

export default function HomePage() {
  return <>
          <div id='main-text-box'>
            <div id='about-area-div' style={{
              backgroundImage: `url(${image})`,
          }}>
              <div id='about-text-div'>
                <h1 id='about-header' className='animate__animated animate__slideInDown'>Be<br />
                the Change<br />
                You Want to See!
                </h1>
                <p id='about-text'>
                  Clean or dirty, countless people share it all on Urban Unblemished. Team up and join fun events to keep NYC clean -- sign up to be apart of the change.
                </p>
                <Button size="lg" color="success"><NavLink to='/sign-up' style={{
                  textDecoration:'none',
                  color:'black'
                }}>Sign Up</NavLink></Button>
              </div>
              <div className="about-img" id='about-img-div'>
                <img src='../../assets/MAIN_GRAPHIC.png' id='about-img' alt='icon' />
              </div>
            </div>
            <div id="divider-div" style={{
              backgroundColor:'black',
              height:'230px'
            }}></div>
            <div id="card-holder" style={{
              margin:'15px'
            }}>
              <div id="issue">
                <Card id="home-card" outline>
                  <CardBody>  
                <h1 id='home-header'>What Brings Us Together? </h1>
                    <CardText>
                      <p>
                        Pollution and inadequate street maintenance negatively  impacts the community by creating an unsightly and unhygienic environment, inviting unwelcomed creatures into the environment and diminishing  the overall quality of life for residents and visitors alike. 
                      </p>
                    </CardText>
                  </CardBody>
                </Card>
              </div>
              <div id="impacts">
                <Card id="home-card">
                  <CardBody>
                <h1 id='home-header'>Where's the Harm?</h1>
                    <CardText>
                    <div id="impacts-text">
                      <h6>
                        Littering can have a negative impact on the quality of life in New York City. Rats can cause a number of problems, including:
                      </h6>
                      <ul>
                        <li>

                    Spreading disease: Rats can carry diseases such as rabies, leptospirosis, and salmonella. These diseases can be transmitted to humans through       contact with rat droppings, urine, or saliva.
                        </li>
                        <li>
                    Contaminating food: Rats can contaminate food by chewing on it or urinating on it. This can make food unsafe to eat.
                        </li>
                        <li> 
                    Damaging property: Rats can chew through wires, pipes, and other materials, which can cause damage to homes and businesses.
                    Making people feel unsafe: Rats can make people feel unsafe, especially in areas where they are seen frequently. This can lead to people avoiding       certain areas or feeling nervous about being outside at night.
                          </li>
                      </ul>
                    (ROS Team. “What You Should Know About New York City Rats Issue.“ RentOwnSell NY, https://www.nyrentownsell.com/blog/new-york-city-rat-issue/.      Accessed 26 May 2023.)
                    </div>
                    </CardText>
                  </CardBody>
                </Card>
              </div>
              <div id="solution">
                <Card id="home-card">
                  <CardBody>
                <h1 id='home-header'> The Solution</h1>
                    <CardText>
                      <p>
                      If users actively participate in keeping the streets clean through the Urban Unblemished app, this will cause a major shift in NYC pollution.  This collective action will create a sense of pride, ownership, and community spirit, fostering a cleaner and more vibrant NYC. The ultimate impact of Urban Unblemished's solution would be a cleaner, greener, and more livable NYC. Teamwork will enhance the overall quality of life for residents and visitors by improving the aesthetics, health, and sense of belonging in the community.
                      </p>
                    </CardText>
                  </CardBody>
                </Card>
              </div>
        </div>
      </div>
      <div id="divider-div" style={{
              backgroundColor:'black',
              height:'230px'
            }}></div>
      <div id="uu-how-to">
        <div id='wrapper'>
          <div id="graphics-header">
            <h1 id='how-to-header'> 
              How Urban Unblemished Works
            </h1>
            <p id='header-text'>
            Join today and make change tomorrow. <br />
            Meet New Yorkers looking for a greener day!
            </p>
          </div>
        </div>
        <div id="graphics-div">
          <div>
            <img id="graphic" src="../../assets/JOIN_NOW_ICON.png"/>
            <h1 id='how-to-header'>Join Now</h1>
            <p>Create an account today and begin making history.</p>
          </div>
          <div>
          <img id="graphic" src="../../assets/MAKE_EVENTS_ICON.png"/>
            <h1 id='how-to-header'>Make Events</h1>
            <p>Band together, form events and clean organized.<br /> Form clean up groups and promote and discuss events.</p>
          </div>
        </div>
      </div>
  </>
}