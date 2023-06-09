import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a C++ developer with experience in designing and implementing
              efficient software solutions.
            </h3>
            <p className="mb-6">
              I am knowledgeable in data structures, algorithms, and software
              design principles, and I have experience in developing efficient,
              reliable, and scalable applications for various industries. I am
              also familiar with different software development methodologies
              and tools, and I continuously keep up with the latest trends and
              best practices in the field.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-teritary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Year of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-teritary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={41} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Project <br /> Completion
                </div>
              </div>
              <div>
                <div className="text-[40px] font-teritary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Feedback
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
