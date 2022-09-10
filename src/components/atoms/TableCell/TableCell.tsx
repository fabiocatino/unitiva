type TableCellProps = {
  children: React.ReactNode;
};

const TableCell = ({ children }: TableCellProps) => {
  return <td>{children}</td>;
};

export default TableCell;
