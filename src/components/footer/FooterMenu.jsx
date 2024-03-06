import React from "react";
import { Link } from "react-router-dom";

const FooterMenu = ({ title, list }) => {
  return (
    <div className="d-flex flex-column gap-2">
      <h5>{title}</h5>
      <ul className="d-flex flex-column p-0 gap-2">
        {list.map((list, index) => (
          <li className="list-group-item" key={index}>
            <Link className="text-decoration-none">{list}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
