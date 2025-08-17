"use client";

import ComponentNavigation from "@/components/react-components/ComponentNavigation";
import ComponentSection from "@/components/react-components/ComponentSection";
import Installation from "@/components/react-components/Installation";
import Props from "@/components/react-components/Props";
import Description from "@/components/react-components/ui/description";
import Heading from "@/components/react-components/ui/heading";
import Loader from "@/components/ui/loader";
import Separator from "@/components/ui/separator";
import { docsRegistry } from "@/lib/docs-registry";
import { usePathname } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";

const Page = () => {
  const path = usePathname().split("/").pop();
  const [title, setTitle] = useState("");
  const pageData = docsRegistry[path as string];

  useEffect(() => {
    setTitle(docsRegistry[path as string]?.name);
  }, [path]);

  if (!path || !title || !pageData) return <Loader />;

  return (
    <Fragment>
      <ComponentNavigation />
      <Separator />
      <Heading text={pageData.name} />
      <Description text={pageData.description} />
      <ComponentSection
        name={pageData.name}
        code={pageData.previewCode.trim()}
        preview={pageData.preview}
      />
      <Separator />
      <Heading className="text-2xl" text="Installation" />
      <Installation
        id={path}
        code={pageData.code.trim()}
        packages={pageData?.packages}
      />
      <Separator />
      <Heading className="text-2xl" text="Props" />
      <Props propsData={pageData.props} />
    </Fragment>
  );
};

export default Page;
