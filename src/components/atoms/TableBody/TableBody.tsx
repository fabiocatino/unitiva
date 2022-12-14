import React from "react";

type TableBodyProps = {
  children: React.ReactNode;
};

const TableBody = ({ children }: TableBodyProps) => {
  return <tbody>{children}</tbody>;
};

export default TableBody;
