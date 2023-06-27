import JoinSusu from "../components/joinForm";
import CreateSusu from "../components/createForm";
import "../styles/formpage.css";
export default function CreateSusuForm() {
    return( <div className = "form-container">
    <JoinSusu/>
    <div className ="or">
        <h1>OR</h1>
    </div>
    <CreateSusu/>
    </div>)
}