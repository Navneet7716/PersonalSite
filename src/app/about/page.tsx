
import Image from "next/image";
import React from "react";

function About() {

  return (
    <div>
      <h1 className="text-center font-bold text-3xl py-4">My Resume</h1>
      <div className="flex flex-col justify-center items-center">
        <Image
          alt="navneet's resume"
          src={"/resume-1.jpg"}
          width={"900"}
          height={"100"}
        />
        <Image
          alt="navneet's resume"
          src={"/resume-2.jpg"}
          width={"900"}
          height={"100"}
        />
      </div>
    </div>
  );
}

export default About;
