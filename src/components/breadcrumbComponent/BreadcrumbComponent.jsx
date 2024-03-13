import "./breadcrumbComponent.scss";
import { Breadcrumb, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbComponent = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((space) => space);
  let breadCrumbs = "";
  return (
    <Container fluid className="breadcrumbMain d-none d-lg-flex ps-3 pt-2">
      <Breadcrumb>
        {pathnames.length > 0 && (
          <Link to={"/"} className="itemsOfBread">
            Home
          </Link>
        )}
        {pathnames.map((individualpathname, index) => {
          breadCrumbs += `${individualpathname}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Link
              key={individualpathname}
              //   className={isLast ? "active" : ""}
              className="active itemsOfBread text-capitalize"
            >
              {individualpathname}
            </Link>
          ) : (
            <Link
              className="itemsOfBread text-capitalize"
              to={breadCrumbs}
              key={individualpathname}
            >
              {individualpathname}
            </Link>
          );
        })}
      </Breadcrumb>
    </Container>
  );
};

export default BreadcrumbComponent;
