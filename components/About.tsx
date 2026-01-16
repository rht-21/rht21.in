import React from "react";

const About = () => {
  return (
    <main className="border-b">
      <div className="border-vertical align-center flex flex-col gap-4 p-4 text-lg">
        <p>Hello World!</p>
        <p>
          I&apos;m an engineer who enjoys living at the intersection of
          artificial intelligence and user experience. Most days I&apos;m
          working with Python, deep learning models, and modern web frameworks
          to solve problems that go beyond demos and survive in production.
        </p>
        <p>
          I care about systems that are reliable, readable, and scalable —
          because code should age like good wine, not milk.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll usually find me watching
          football, following Barça, or looping EDM while debugging something
          that definitely “worked yesterday”.
        </p>
      </div>
    </main>
  );
};

export default About;
