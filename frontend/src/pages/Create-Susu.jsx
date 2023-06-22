import JoinSusu from "../components/joinForm";
import CreateSusu from "../components/createForm";
import "../styles/formpage.css";
export default function CreateSusuForm() {
    return( <div className = "form-container">
    <JoinSusu/>
    <CreateSusu/>
    </div>)
}