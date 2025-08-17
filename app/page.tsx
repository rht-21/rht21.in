import About from "@/components/About";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Separator from "@/components/ui/separator";
import { Fragment } from "react";
import Highlights from "@/components/Highlights";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Projects from "@/components/Projects";
import Heading from "@/components/react-components/ui/heading";
import FreelanceWorks from "@/components/FreelanceWorks";
// import Experience from "@/components/Experience";

const page = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Hero />
      <Profile />
      <Separator />
      <Highlights />
      <Separator />
      <Heading text="About Me" />
      <About />
      <Separator />
      <Heading text="Projects" />
      <Projects />
      <Separator />
      <Heading text="Freelance Works" />
      <FreelanceWorks />
      {/* <Separator /> */}
      {/* <Heading text="Work Experience" />
      <Experience /> */}
    </Fragment>
  );
};

export default page;
