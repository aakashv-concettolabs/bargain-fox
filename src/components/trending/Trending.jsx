import { Container, Row, Col, Image, Figure } from "react-bootstrap";
import weeklyDeal from "../../assets/WeeklyDeal.png";
import trendingWeekly from "../../assets/trendingweekly.png";
import clearanceWeekly from "../../assets/clearanceWeekly.png";
import "./trending.scss";
import { Link } from "react-router-dom";
import SectionHeading from "../sectionheading/SectionHeading";
import { trendingCategoryDatas } from "../sliderSetting/SliderSetting";

const FigureImgDetails = [
  {
    id: 1,
    imgUrl: weeklyDeal,
    title: "Deals of the week",
  },
  {
    id: 2,
    imgUrl: trendingWeekly,
    title: "Trending",
  },
  {
    id: 3,
    imgUrl: clearanceWeekly,
    title: "Clearance",
  },
];

const Trending = () => {
  return (
    <Container className="trending-main">
      <SectionHeading sectionHeadingTitle="Trending on eCart" />

      <Row className="mt-5">
        {trendingCategoryDatas.map((trendingCategoryData) => (
          <Col
            key={trendingCategoryData.id}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div className="trendingImgDiv bg-body-secondary rounded-circle d-flex justify-content-center align-items-center">
              <Image
                src={trendingCategoryData.imgUrl}
                roundedCircle
                className="object-fit-cover"
              />
            </div>
            <p className="rounded-5 bg-primary d-flex justify-content-center align-items-center text-white py-1 mb-1 px-2">
              {trendingCategoryData.offer}
            </p>
            <p className="fw-medium">{trendingCategoryData.title}</p>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        {FigureImgDetails.map((FigureImgDetail) => (
          <Col
            xs={12}
            sm={4}
            className="d-flex justify-content-center align-items-center"
            key={FigureImgDetail.id}
          >
            <Figure>
              <Figure.Image
                width={360}
                // height={330}
                alt={FigureImgDetail.title}
                src={FigureImgDetail.imgUrl}
              />
              <Figure.Caption className="text-center d-flex flex-column">
                <span className="fw-bolder text-black weeklyTitle">
                  {FigureImgDetail.title}
                </span>
                <span>
                  <Link className="text-decoration-none productList" to="/">
                    View all products
                  </Link>
                </span>
              </Figure.Caption>
            </Figure>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Trending;
