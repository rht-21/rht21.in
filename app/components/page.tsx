import ListComponents from "@/components/react-components/ListComponents";
import Description from "@/components/react-components/ui/description";
import Heading from "@/components/react-components/ui/heading";
import Separator from "@/components/ui/separator";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <Heading text="Components" />
      <Description
        text={[
          "Cut the noise. Build sleek, accessible interfaces in record time. Pre-built components that handle the details, so you can focus on features.",
        ]}
      />
      <Separator />
      <Heading className="text-2xl" text="Prerequisites" />
      <Separator />
      <ListComponents />
    </Fragment>
  );
};

export default page;
