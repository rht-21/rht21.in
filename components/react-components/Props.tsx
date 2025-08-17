import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IProps } from "@/lib/docs-registry";

const Props = ({ propsData }: { propsData: IProps[] | undefined }) => {
  if (!propsData) return null;

  return (
    <main className="border-b">
      <div className="border-vertical align-center space-y-4 p-4">
        <Table className="border">
          <TableHeader>
            <TableRow className="bg-neutral-300 dark:bg-neutral-900">
              <TableHead>Props</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Default Value</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {propsData.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.default}</TableCell>
                <TableCell>{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
};

export default Props;
