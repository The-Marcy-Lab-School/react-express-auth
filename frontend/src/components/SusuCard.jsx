export default function SusoCard({susu}) {
    console.log(susu)
    return (
        <div>
        <div className="card">
        <img className="card-image" src="https://susupay.app/static/media/edited-logo.9da11c10679ce69c07b872082cf17208.svg" alt="Card" />
        <h2 className="card-title">Susu Title</h2>
        <p className="card-description">Susu description</p>
      </div>
        </div>
    );
}