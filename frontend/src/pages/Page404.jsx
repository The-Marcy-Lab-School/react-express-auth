import foodParty from "../media/mrbroc.gif";
import error from "../media/404.png";

// Remove this after
import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import ProductsList from "../components/ProductsList";

export default function Page404() {
  const { setQuery } = useContext(ProductContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setQuery(e.target[0].value);
  };

  return (
    <body id="Page404">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
      </style>

      <div id="lostlol">
        <img id="errordiv" src={error}></img>

        <h1 className="h1404">Seems like you're lost,</h1>
        <h1 className="h1404">Mr. Broccoli is here to guide you back!</h1>
        <img id="mrbroc" src={foodParty}></img>
        <a id="returnButt" href="http://localhost:5173">
          {" "}
          Follow Mr. Broccoli{" "}
        </a>
      </div>
    </body>
  );
}
