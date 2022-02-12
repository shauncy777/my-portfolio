
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import Pdf from '../Documents.pdf/resume_2022.pdf' ;



export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Shawn Calhoun
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
          <a href = {Pdf} target = "_blank">View Resume</a>
        </nav>
        <a className="mr-3 hover:text-white"><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="bg-indigo-500" iconSize="4" roundness="20%" url="https://github.com/shauncy777" size="40" />
          </a>
          <a className="mr-3 "><SocialMediaIconsReact   borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="bg-indigo-500" iconSize="1" roundness="20%" url="https://www.linkedin.com/in/s-d-calhoun/" size="40"/>
          </a>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}