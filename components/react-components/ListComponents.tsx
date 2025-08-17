import { docsList } from "@/lib/docs-registry";
import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const ListComponents = () => {
  return (
    <main className="border-b">
      <ul className="border-vertical align-center flex min-h-96 flex-col text-lg">
        {docsList.map((component, index) => (
          <li key={index} className="border-b">
            <div className="flex items-center">
              <div className="flex aspect-square h-16 w-16 items-center justify-center border-r">
                <IconBrandReact stroke={1.5} />
              </div>
              <div className="flex flex-1 flex-col gap-1 px-4">
                <Link
                  href={`/components/${component.id}`}
                  className="hover:text-primary w-fit cursor-pointer font-semibold underline-offset-2 transition-colors duration-200 hover:underline"
                >
                  {component.name}
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ListComponents;
