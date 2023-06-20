import { Link } from "react-router-dom";

export default function SusoCard({ susu }) {
  return (
    <Link to={`/susu/${susu.susu_id}`}>
      <div id={susu.id} className="card">
        <img className="card-image" src="https://susupay.app/static/media/edited-logo.9da11c10679ce69c07b872082cf17208.svg" alt="Card" />
        <h2 className="card-title">{susu.name}</h2>
        <p className="card-payment">Payment Amount: ${susu.payment_amount}</p>
        <p className="check-payment">Payment Made: {susu.make_payments}</p>
      </div>
    </Link>
  );
}