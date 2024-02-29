import "./pagination.scss";
import { Pagination } from "react-bootstrap";

const PaginationComponent = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination>
        <Pagination.Prev />
        {items}
        <Pagination.Next />
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
