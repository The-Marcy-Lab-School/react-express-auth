import { useContext, useState, useEffect } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(Object.fromEntries(formData.entries()));
    if (error) return setErrorText(error.statusText);
    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };

  if (currentUser) return <Navigate to="/" />;

  // MAP GLOBE BACKGROUND =================================================================
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

  return <>
    <div className="login-page">
      <h1 className="form-title">Login</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="username" className="username-label">Username</label>
        <input type="text" autoComplete="username" id="username" name="username" placeholder="xxxxxxxxx" />

        <label htmlFor="password" className="password-label">Password</label>
        <input type="password" autoComplete="current-password" id="password" name="password" placeholder="xxxxxxxxx"/>

        <button>Log in</button>
      </form>
      { !!errorText && <p>{errorText}</p> }
      <p className="form-redirect">
        Don't have an account? <Link to="/sign-up" className="form-redirect-link">Sign up!</Link>
      </p>
    </div>
    <div>
        <div id="signInMap"></div>
        <button id="btn-spin">Pause rotation</button>
      </div>
  </>;
}
