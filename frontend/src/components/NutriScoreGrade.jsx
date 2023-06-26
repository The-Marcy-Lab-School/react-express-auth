import NutriGradeA from "../media/scores/nutriscore-a.svg";
import NutriGradeB from "../media/scores/nutriscore-b.svg";
import NutriGradeC from "../media/scores/nutriscore-c.svg";
import NutriGradeD from "../media/scores/nutriscore-d.svg";
import NutriGradeE from "../media/scores/nutriscore-e.svg";
import NutriNotApplicable from "../media/scores/nutriscore-not-applicable.svg";

export default function NutriScoreGrade({ props }) {
  return (
    <>
      {props === 'a' ? (
        <>
          <img
            alt="Nova Score 1"
            src={NutriGradeA}
            style={{ width: "34px", height: "65px" }}
          />
        </>
      ) : props === 'b' ? (
        <>
          <img
            alt="Nova Score 2"
            src={NutriGradeB}
            // ../src/media/scores/nova-score2.svg
            style={{ width: "34px", height: "65px" }}
          />
        </>
      ) : props === "c" ? (
        <>
          <img
            alt="Nova Score 3"
            src={NutriGradeC}
            style={{ width: "34px", height: "65px" }}
          />
        </>
      ) : props === "d" ? (
        <>
          <img
            alt="Nova Score 4"
            src={NutriGradeD}
            style={{ width: "34px", height: "65px" }}
          />
        </>
      ) : props === "e" ? (
        <>
          <img
            alt="Nova Score Unknown"
            src={NutriGradeE}
            style={{ width: "34px", height: "65px" }}
          />
        </>
      ):(
        <>
        <img
            alt="Nova Score Unknown"
            src={NutriNotApplicable}
            style={{ width: "34px", height: "65px" }}
          />
        </>
      )}
    </>
  );
}
