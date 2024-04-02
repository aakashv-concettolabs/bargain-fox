import { useNavigate } from "react-router-dom";
import "./pagination.scss";
import { Pagination } from "react-bootstrap";
import he from "he";
import { useState } from "react";

const PaginationComponent = ({ pages, lastpage }) => {
  const [activepage, setActivepage] = useState(1);
  const navigate = useNavigate();
  let items = [];

  const handlePageClick = (page) => {
    setActivepage(page);
    navigate(`?page=${page}`);
  };

  const handlePrev = () => {
    if (activepage > 1) {
      setActivepage(activepage - 1);
      navigate(`?page=${activepage - 1}`);
    }
  };
  const handleNext = () => {
    if (activepage < lastpage) {
      setActivepage(activepage + 1);
      navigate(`?page=${activepage + 1}`);
    }
  };
  for (let page = 1; page <= lastpage; page++) {
    items.push(
      <Pagination.Item
        key={page}
        active={page === activepage}
        onClick={() => handlePageClick(page)}
      >
        {page}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination>
        <Pagination.Prev onClick={handlePrev} disabled={activepage < 1}>
          {pages && he.decode(pages[0].label)}
        </Pagination.Prev>
        {items}
        <Pagination.Next onClick={handleNext} disabled={activepage == lastpage}>
          {pages && he.decode(pages[pages.length - 1].label)}
        </Pagination.Next>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
