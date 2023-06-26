import NovaScore1 from "../media/scores/nova-score1.svg";
import NovaScore2 from "../media/scores/nova-score2.svg";
import NovaScore3 from "../media/scores/nova-score3.svg";
import NovaScore4 from "../media/scores/nova-score4.svg";
import NovaScoreUnknown from "../media/scores/nova-score-unknown.svg";


export default function NovaScore({props}) {
    console.log("NovaScore",props);
  return (
    <>
      {props === 1 ? (
        <>
          <img
            alt="Nova Score 1"
            src={NovaScore1}
            style={{ width: "34px", height: "65px" }}
          />
        </>
      ) : props === 2 ? (
        <>
          <img
            alt="Nova Score 2"
            src={NovaScore2}
            // ../src/media/scores/nova-score2.svg
            style={{ width: "34px", height: "65px" }}
          />
        </>
      ) : props === 3 ? (
        <>
          <img
            alt="Nova Score 3"
            src={NovaScore3}
            style={{ width: "34px", height: "65px" }}
          />
        </>
      ) : props === 4 ? (
        <>
          <img
            alt="Nova Score 4"
            src={NovaScore4}
            style={{ width: "34px", height: "65px" }}
          />
        </>
      ) : (
        <>
          <img
            alt="Nova Score Unknown"
            src={NovaScoreUnknown}
            style={{ width: "34px", height: "65px" }}
          />
        </>
      )}
    </>
  );
}
