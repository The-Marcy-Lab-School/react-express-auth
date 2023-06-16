import { Link } from "react-router-dom";

export default function detailsLink() {
    return (
        <div className = "payment-details">
          <label>
            <span className = "name">Amanda</span>
            <input type="checkbox" />
          </label>
          <label>
            <span className = "name">Ashley</span>
            <input type="checkbox" />
          </label>
          <label>
            <span className = "name">Casterly</span>
            <input type="checkbox" />
          </label>
          <label>
            <span className = "name">Luis</span>
            <input type="checkbox" />
          </label>
        </div>
      );
}
