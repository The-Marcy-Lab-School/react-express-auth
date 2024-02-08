// import { useNavigate } from "react-router-dom";
// import { updateUsername } from "../adapters/user-adapter";
import { createLog } from "../adapters/log-adapter";

export default function LogForm({ currentUser, setCurrentUser }) {
//   const navigate = useNavigate();
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const [user, error] = await updateUsername(Object.fromEntries(formData));
//     // If our user isn't who they say they are
//     // (an auth error on update) log them out
//     // We added the httpStatus as a custom cause in our error
//     if (error?.cause > 400 && error?.cause < 500) {
//       setCurrentUser(null);
//       return navigate('/');
//     }

//     setCurrentUser(user);
//     event.target.reset();
//   };

const setRangeValues = (sliderInput) => {
    if (sliderInput > 0 && sliderInput <= 20){
      return sliderInput = 1;
    } else if(sliderInput > 20 && sliderInput <= 40){
      return sliderInput = 2;
    } else if (sliderInput > 40 && sliderInput <= 60){
      return sliderInput = 3;
    } else if (sliderInput > 60 && sliderInput <= 80){
      return sliderInput = 4;
    } else {
      return sliderInput = 5;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const obj = Object.fromEntries(formData)
    obj.mood = Number(obj.mood)
    obj.abd_pain = setRangeValues(obj.abd_pain)
    obj.back_pain = setRangeValues(obj.back_pain)
    obj.nausea = setRangeValues(obj.nausea)
    obj.fatigue = setRangeValues(obj.fatigue)
    console.log(obj)
    await createLog(obj)
    
    setCurrentUser(user);
    console.log(obj)
    event.target.reset();
  };

  return <form onSubmit={handleSubmit} aria-labelledby="dailyLog-heading">
  <h2 id='dailyLog-heading'>Welcome Back!</h2>
  <h3>How are you feeling today?</h3>
  <input type="radio" id="worst" name="mood" value = "1"/>
  <label htmlFor="worst">Worst</label>

  <input type="radio" id="notGood" name="mood" value="2"/>
  <label htmlFor="notGood">Not Good</label>

  <input type="radio" id="fine" name="mood" value="3"/>
  <label htmlFor="fine">Fine</label>

  <input type="radio" id="good" name="mood" value="4"/>
  <label htmlFor="good">Good</label>

  <input type="radio" id="veryGood" name="mood" value="5"/>
  <label htmlFor="veryGood">Very Good</label>

  <h3>Abdominal Pain</h3>
  <input type="range" min="0" max="100" id="abdPain" name = "abd_pain"/>

  <h3>Back Pain</h3>
  <input type="range" min="0" max="100" id="backPain" name = "back_pain"/>

  <h3>Nausea</h3>
  <input type="range" min="0" max="100" id="nausea" name = "nausea"/>

  <h3>Fatigue</h3>
  <input type="range" min="0" max="100" id="fatigue" name = "fatigue"/>

  <input type="hidden" name="id" value={currentUser.id} />
  <button>Submit</button>
</form>;
}
