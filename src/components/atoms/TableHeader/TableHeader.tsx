type TableHeaderProps = {
  children: React.ReactNode;
};

function TableHeader({ children }: TableHeaderProps) {
  return <th>{children}</th>;
}

export default TableHeader;
