import React, { useState } from "react";
import Axios from "axios";

function RandomJoke() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        console.log(response);
        setJoke(response.data.setup + "..." + response.data.punchline);
        //added new commented line
      }
    );
  };

  return (
    <div>
      <button onClick={getJoke}>Get Joke Now</button>
      <div>{joke}</div>
    </div>
  );
}

export default RandomJoke;
