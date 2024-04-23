import "./breadcrumbComponent.scss";
import { Breadcrumb, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbComponent = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((space) => space);
  let breadCrumbs = "";

  return (
    <Container fluid className="breadcrumbMain d-none d-lg-flex ps-3 pt-2">
      {pathnames[0] != "checkout" && (
        <Breadcrumb>
          {pathnames.length > 0 && (
            <Link to={"/"} className="itemsOfBread notlastItemofBread">
              Home
            </Link>
          )}
          {pathnames.slice(0, 2).map((individualpathname, index) => {
            breadCrumbs += `/${individualpathname}`;
            const isLast = index === pathnames.length - 2;
            return isLast ? (
              <p
                key={individualpathname}
                className="active itemsOfBread text-capitalize"
              >
                {individualpathname.slice(0, 30)}
              </p>
            ) : (
              <Link
                className="itemsOfBread notlastItemofBread text-capitalize"
                to={breadCrumbs}
                key={individualpathname}
              >
                {individualpathname.slice(0, 30)}
              </Link>
            );
          })}
        </Breadcrumb>
      )}
    </Container>
  );
};

export default BreadcrumbComponent;
