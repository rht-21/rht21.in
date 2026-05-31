import { Fragment } from "react";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import ScrollToTop from "@/components/ui/scroll-to-top";

const Page = () => {
  return (
    <Fragment>
      <JsonLd />
      <ScrollToTop />
      <Profile />
      <Experience />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default Page;
