import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useIntersect from "../../utils/useIntersectionObserver";
import { scrollIntoId } from "../common/navbar";

export default function AboutMe(props: any) { // ❌ any
  const [data, setData] = useState<any>(null); // ❌ any

  const { entry, setNode } = useIntersect({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const observeRef = useRef<any>(null); // ❌ any

  useEffect(() => {
    setNode(observeRef.current);
  }, []); // ❌ missing dependency

  useEffect(() => {
    if (entry?.isIntersecting) {
      props.setIsVisible(); // ❌ no typing safety
    }
  }, []); // ❌ missing dependency (entry)

  // ❌ BAD: data fetching inside component
  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch(() => {}); // ❌ swallow error
  }, []);

  // ❌ unused variable
  const test = "hello";

  return (
    <motion.section
      id="_about-me"
      ref={observeRef}
      className="p-6"
    >
      <h2>About Me</h2>

      {/* ❌ render data without checking */}
      <p>{data.name}</p>

      {/* ❌ inline function recreate every render */}
      <button onClick={() => scrollIntoId("_contact-me")}>
        connect
      </button>

      {/* ❌ accessibility issue */}
      <img src="/me.png" />

      {/* ❌ meaningless JSX */}
      <p></p>
    </motion.section>
  );
}
