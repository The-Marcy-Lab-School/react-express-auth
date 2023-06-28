import NutriGradeA from "../media/scores/nutriscore-a.svg";
import NutriGradeB from "../media/scores/nutriscore-b.svg";
import NutriGradeC from "../media/scores/nutriscore-c.svg";
import NutriGradeD from "../media/scores/nutriscore-d.svg";
import NutriGradeE from "../media/scores/nutriscore-e.svg";
import NutriNotApplicable from "../media/scores/nutriscore-not-applicable.svg";

export default function NutriScoreGrade({ props: nutriGrade }) {

    const getBackgroundColor = () => {
        if(nutriGrade === "a"){
          return "#e8f4ed";
        }else if(nutriGrade === "b"){
          return "#dff2bd";
        }else if(nutriGrade === "c"){
          return "#fff4cd";
        }else if(nutriGrade === "d"){
          return "#ffe0ce";
        }else if(nutriGrade === "e"){
          return "#fdeeee";
        }else{
          return "#ededed";
        }
    };

    const backgroundColor = getBackgroundColor();

  return (
    <div id="nutri-div" className="ui" >
      <div className="ui three column grid">
        <div className="row">
          <div id="nutri-stats" className="column">
            <strong>
              <img
                alt={`Nova Score ${nutriGrade}A}`}
                src={
                  nutriGrade === "a"
                    ? NutriGradeA
                    : nutriGrade === "b"
                    ? NutriGradeB
                    : nutriGrade === "c"
                    ? NutriGradeC
                    : nutriGrade === "d"
                    ? NutriGradeD
                    : nutriGrade === "e"
                    ? NutriGradeE
                    : NutriNotApplicable
                }
                style={{ width: "120px", height: "65px" }}
              />
            </strong>
            <p id="nutri-details">{nutriGrade === "a" ? "Very good nutritional quality" : nutriGrade === "b" ? "Good nutritional quality" : nutriGrade === "c" ? "Average nutritional quality" : nutriGrade === "d" ? "Poor nutritional quality" : nutriGrade === "e" ? "Bad nutritional quality" : "Unknown"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
