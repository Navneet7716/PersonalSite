
import Image from "next/image";
import React from "react";

function About() {

  return (
    <div>
      <h1 className="text-center font-bold text-3xl py-4">My Resume</h1>
      <div className="flex justify-center items-center">
        <Image
          alt="navneet's resume"
          src={"/resume.jpg"}
          width={"900"}
          height={"100"}
        />
      </div>
    </div>
  );
}

export default About;
