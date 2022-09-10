type TableHeadProps = {
  children: React.ReactNode;
};

const TableHead = ({ children }: TableHeadProps) => {
  return <thead>{children}</thead>;
};

export default TableHead;
