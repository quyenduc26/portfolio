import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import useIntersect from "../../utils/useIntersectionObserver";
import { scrollIntoId } from "../common/navbar";


export default function AboutMe({
  setIsVisible,
}: {
  setIsVisible: () => void;
}) {
  // Call the useIntersect hook and receive the setNode and entry variables
  const { entry, setNode } = useIntersect({
    root: null, // The element used as the viewport for checking visibility, null means the browser viewport
    rootMargin: "0px", // Margin around the root element (in pixels)
    threshold: 0.5, // A threshold value between 0 and 1, indicating the percentage of the target element that should be visible before the callback is invoked
  });

  const observeRef = useRef(null);

  useEffect(() => {
    setNode(observeRef.current);
  }, []);

  useEffect(() => {
    if (!!entry?.isIntersecting) {
      setIsVisible();
    }
  }, [entry?.isIntersecting]);

  return (
    <motion.section
      id="_about-me"
      ref={observeRef}
      className="relative mt-8 cursor-default bg-dark-100/20 p-6 text-[13px] font-medium leading-[150%] text-gray-100 shadow-lg transition-all duration-300 ease-in hover:bg-dark-100/40 md:relative md:m-auto md:mb-32 md:mt-0 md:w-max md:rounded-[30px] md:p-16 md:text-[16px]"
    >
      <div className="absolute -top-12 left-1/2 w-[315px] -translate-x-1/2">
        <motion.h2 className="heading-gradient text-lg font-semibold text-white">
          From Code to Coffee: About Me
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="heading-gradient-underline h-[1px]"
        />
      </div>
      <br />

      <p className="!leading-loose transition-all duration-300 ease-in hover:text-white/70">
        A senior student at Passerelles Numeriques Vietnam
        <br className="hidden md:block" /> who thrives on software development
         and project operation.
        <br />
        <br /> What sets me apart? - I am deeply driven by a passion for innovation and
        <br className="hidden md:block" />  consistently aim to craft groundbreaking solutions.
      </p>
      <br />
      <p></p>
      <p className="transition-all duration-300 ease-in hover:text-white/70">
      If you seek a promising seed, believe in my ability to deliver fruitful outcomes.{" "}
        <br className="hidden md:block" />
        let&apos;s{" "}
        <button
          className="underline"
          onClick={() => scrollIntoId("_contact-me")}
        >
          connect!
        </button>
      </p>
      <br />
      <p className="transition-all duration-300 ease-in hover:text-white/70">
        I build awesome products using:
      </p>
      <div className="grid w-full grid-cols-2 gap-1 gap-x-5 pl-4 md:grid-cols-3">
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          Laravel
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          NextJS
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          TypeScript
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          NestJS
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          VueJS
        </p>
        <p className="asterisk text-yellow transition-all duration-300 ease-in hover:text-white/70">
          NodeJS
        </p>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <span className="text-xs">Others:</span>
        <p className="flex gap-1 text-xs text-gray-100">
          <span className="text-yellow">Github</span>
          &#x2022;
          <span className="text-yellow">Zustand</span>
          &#x2022;
          <span className="text-yellow">TanStack </span>
          &#x2022;
          <span className="text-yellow">Spring Boot</span>
          &#x2022;
          <span className="text-yellow">Python</span>
          &#x2022;
          <span className="text-yellow">MySQL</span>
          &#x2022;
          <span className="text-yellow">MongoDB</span>
          &#x2022;
          <span className="text-yellow">Jira</span>
          &#x2022;
          <span className="text-yellow">Bootstrap</span>
          &#x2022;
          <span className="text-yellow">Tailwind</span>
        </p>
      </div>
    </motion.section>
  );
}
