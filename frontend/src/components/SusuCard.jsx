import { Link } from "react-router-dom";

export default function SusoCard({ susu }) {
  return (
    <Link to={`/susu/${susu.id}`}>
      <div id={susu.id} className="card">
        <img className="card-image" src="https://susupay.app/static/media/edited-logo.9da11c10679ce69c07b872082cf17208.svg" alt="Card" />
        <h2 className="card-title">Susu Title</h2>
        <p className="card-description">Susu description</p>
      </div>
    </Link>
  );
}