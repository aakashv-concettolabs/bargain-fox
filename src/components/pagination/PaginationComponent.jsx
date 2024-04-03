import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./pagination.scss";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ lastpage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialActivePage = Number(params.get("page")) || 1;
  const [activePage, setactivePage] = useState(initialActivePage);

  useEffect(() => {
    if (initialActivePage !== activePage) {
      setactivePage(initialActivePage);
    }
  }, [params.get("page")]);

  const handlePageClick = (page) => {
    params.set("page", page.toString());
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const handlePrev = () => {
    if (activePage > 1) {
      params.set("page", (activePage - 1).toString());
      navigate(`${location.pathname}?${params.toString()}`);
    }
  };
  const handleNext = () => {
    if (activePage < lastpage) {
      params.set("page", (activePage + 1).toString());
      navigate(`${location.pathname}?${params.toString()}`);
    }
  };

  let items = [];
  for (let page = 1; page <= lastpage; page++) {
    items.push(
      <Pagination.Item
        key={page}
        active={page === activePage}
        onClick={() => handlePageClick(page)}
      >
        {page}
      </Pagination.Item>
    );
  }
  return (
    <div>
      {items.length > 1 && (
        <Pagination>
          <Pagination.Prev onClick={handlePrev} disabled={activePage <= 1}>
            &laquo; Previous
          </Pagination.Prev>
          {items}
          <Pagination.Next
            onClick={handleNext}
            disabled={activePage == lastpage}
          >
            Next &raquo;
          </Pagination.Next>
        </Pagination>
      )}
    </div>
  );
};

export default PaginationComponent;
