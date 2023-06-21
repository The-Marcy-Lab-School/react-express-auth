import { fetchHandler } from "../utils";
import '../styles/home.css';



export default function HomePage() {
  const content = fetchHandler("/api/susu")
  console.log(content)
  return (<>
    
    <h2>In construction</h2>
     
     
  </>);
}
