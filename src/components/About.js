import React from "react";



export default function About() {
  return(
  <section id="about">
  <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Hi, I'm Shawn.
        <br className="hidden lg:inline-block" />I'm a full-stack web developer.
      </h1>
      <p className="mb-8 leading-relaxed">
       After 7 years as a Service Experience/Operations Manager, I made a 180° pivot and learned to code. After earning a JavaScript Full-Stack Techdegree certification, I'm prepared for the next stage  =>  becoming an accomplished professional developer. Thanks for stopping by!
      </p>
      <div className="flex justify-center">
        <a
          href="#contact"
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
          Work With Me
        </a>
        <a
          href="#projects"
          className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
          See My Past Work
        </a>
      </div>
    </div>
    <div className="lg:max-w-sm sm:w-full md:w-1/2 w-5/6 rounded-full">
      <img
        className="object-fill	 rounded-full bg-blend-darken"
        alt="hero"
        src="./FullSizeRender.jpeg"
      />
    </div>
  </div>
</section>
);
}

