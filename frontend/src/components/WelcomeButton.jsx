import {Link} from 'react-router-dom'
const WelcomeButton  = () => {
    return(<section id="hero">
    <div className= "hero-container" data-asos= "fade-up" data-asos-delay="150">
      <h1>Money.Money.Money</h1>
      <h2>Getcha Moneyyy!!</h2>
    
      <div className="d-flex">
        <Link to='/about' className=" btn-get-started scrollto">Welcome</Link>
      </div>
    
    </div>
    
    </section>
    );
    }
    
export default WelcomeButton
    