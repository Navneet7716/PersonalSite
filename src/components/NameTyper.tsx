"use client";
import Typewriter from "typewriter-effect";

function NameTyper() {
  return (
    <Typewriter
      component={"span"}
      onInit={(typewriter) => {
        typewriter.typeString("Navneet!").pauseFor(2500).start();
      }}
    />
  );
}

export default NameTyper;
