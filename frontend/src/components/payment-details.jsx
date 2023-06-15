import { Link } from "react-router-dom";

export default function detailsLink() {
    return (
        <div class = "payment-details">
          <label>
            <span class = "name">Amanda</span>
            <input type="checkbox" />
          </label>
          <label>
            <span class = "name">Ashley</span>
            <input type="checkbox" />
          </label>
          <label>
            <span class = "name">Casterly</span>
            <input type="checkbox" />
          </label>
          <label>
            <span class = "name">Luis</span>
            <input type="checkbox" />
          </label>
        </div>
      );
}
