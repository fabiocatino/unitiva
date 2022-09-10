import React from "react";
import { Data } from "./styles";

type TableDataProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

function TableData({ children, style }: TableDataProps) {
  return <Data {...{ style }}>{children}</Data>;
}

export default TableData;
