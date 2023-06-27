import { useContext, useState, useEffect } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import mapboxgl from 'mapbox-gl';
import CurrentUserContext from "../contexts/current-user-context";
import { createUser } from "../adapters/user-adapter";

// Controlling the signup form is a good idea because we want to adde (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, userLocation: location } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // We could also use a single state variable for the form data:
  // const [formData, setFormData] = useState({ username: '', password: '' });
  // What would be the pros and cons of that?

  if (currentUser) return <Navigate to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText("");
    if (!username || !password) { return setErrorText("Missing username or password"); }

    const [user, error] = await createUser({ username, password, location });
    if (error) return setErrorText(error.statusText);

    setCurrentUser(user);
    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  // MAP GLOBE BACKGROUND ================================================================
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidHJleWphZGVkIiwiYSI6ImNsaXRkYWV4czAxa28za3QzeWgzcnB5YnAifQ.Sa0yc1I-LsaVBVMIPLYzxA';

    const map = new mapboxgl.Map({
      container: 'signInMap',
      style: 'mapbox://styles/mapbox/satellite-v9',
      projection: 'globe',
      zoom: 1.5,
      center: [-90, 40],
    });

    map.on('style.load', () => {
      map.setFog({});
    });

    const secondsPerRevolution = 120;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;

    let userInteracting = false;
    let spinEnabled = true;

    function spinGlobe() {
      const zoom = map.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.getCenter();
        center.lng -= distancePerSecond;
        map.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.on('mousedown', () => {
      userInteracting = true;
    });

    map.on('mouseup', () => {
      userInteracting = false;
      spinGlobe();
    });

    map.on('dragend', () => {
      userInteracting = false;
      spinGlobe();
    });

    map.on('pitchend', () => {
      userInteracting = false;
      spinGlobe();
    });

    map.on('rotateend', () => {
      userInteracting = false;
      spinGlobe();
    });

    map.on('moveend', () => {
      spinGlobe();
    });

    document.getElementById('btn-spin').addEventListener('mousemove', (e) => {
      spinEnabled = !spinEnabled;
      if (spinEnabled) {
        spinGlobe();
        e.target.innerHTML = 'Pause rotation';
      } else {
        map.stop();
        e.target.innerHTML = 'Start rotation';
      }
    });

    spinGlobe();
  }, []);

  return (
    <>

      <div className='sign-up-page'>
        <h1 className="form-title">Sign Up</h1>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <label htmlFor="username" className="username-label">Username</label>
          <input
            autoComplete="off"
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={username}
            placeholder="xxxxxxxxx"
          />

          <label htmlFor="password" className="password-label">Password</label>
          <input
            autoComplete="off"
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={password}
            placeholder="xxxxxxxxx"
          />
          {/* In reality, we'd want a LOT more validation on signup, so add more things if you have time
          <label htmlFor="password-confirm">Password Confirm</label>
          <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" />
        */}

          <button>Sign Up Now!</button>
        </form>
        {!!errorText && <p>{errorText}</p>}
        <p className="form-redirect">
          Already have an account with us? <Link to="/login" className="form-redirect-link">Log in!</Link>
        </p>
      </div>
      <div>
        <div id="signInMap"></div>
        <button id="btn-spin">Pause rotation</button>
      </div>
    </>
  );
}
