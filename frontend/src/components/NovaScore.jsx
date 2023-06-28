import NovaScore1 from "../media/scores/nova-score1.svg";
import NovaScore2 from "../media/scores/nova-score2.svg";
import NovaScore3 from "../media/scores/nova-score3.svg";
import NovaScore4 from "../media/scores/nova-score4.svg";
import NovaScoreUnknown from "../media/scores/nova-score-unknown.svg";

export default function NovaScore({ props: novaGroup }) {
  console.log("NovaScore", novaGroup);

  const getBackgroundColor = () => {
    if (novaGroup == 1) {
      return "#e8f4ed";
    } else if (novaGroup == 2) {
      return "#fff4cd";
    } else if (novaGroup == 3) {
      return "#ffe0ce";
    } else if (novaGroup == 4) {
      return "#fdeeee";
    } else {
      return "#ededed";
    }
  };
  const backgroundColor = getBackgroundColor();

  return (
    <div id="nova-div" className="ui">
      <div className="ui one column grid">
        <div className="row">
          <div id="nutri-stats" className="column">
            <strong>
              <img
                alt={`Nova Score ${novaGroup}`}
                src={
                  novaGroup === 1
                    ? NovaScore1
                    : novaGroup === 2
                    ? NovaScore2
                    : novaGroup === 3
                    ? NovaScore3
                    : novaGroup === 4
                    ? NovaScore4
                    : NovaScoreUnknown
                }
                style={{ width: "34px", height: "65px" }}
              />
            </strong>
            <p id="nutri-details">
              {novaGroup === 1
                ? "Unprocessed or minimally"
                : novaGroup === 2
                ? "Processed or minimally"
                : novaGroup === 3
                ? "Processed foods"
                : novaGroup === 4
                ? "Ultra processed foods"
                : "Unknown"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
