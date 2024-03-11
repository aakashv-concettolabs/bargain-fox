import womenWestern from "../../assets/western.png";
import menWestern from "../../assets/men.png";
import casualShoes from "../../assets/casualShoe.png";
import runningShoes from "../../assets/running.png";
import sunglasses from "../../assets/sunglasses.png";
import jwellery from "../../assets/jwellery.png";
import electronics from "../../assets/electronis.png";
import kitchen from "../../assets/kitchen.png";
import home from "../../assets/home.png";
import Toytrending from "../../assets/Toy-trending.png";
import sports from "../../assets/sports.png";
import jobLot from "../../assets/jobLot.png";
import pet from "../../assets/pet.png";

export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

export const dealofthedays = [
  {
    id: 1,
    imgUrl: womenWestern,
    offer: "Upto 40% off",
    title: "Women's Western Clothing",
  },
  {
    id: 2,
    imgUrl: menWestern,
    offer: "Upto 40% off",
    title: "Men's Western Clothing",
  },
  {
    id: 3,
    imgUrl: casualShoes,
    offer: "Upto 50% off",
    title: "Casual Shoes",
  },
  {
    id: 4,
    imgUrl: runningShoes,
    offer: "Upto 50% off",
    title: "Running Shoes",
  },
  {
    id: 5,
    imgUrl: sunglasses,
    offer: "Upto 10% off",
    title: "Sunglasses",
  },
  {
    id: 6,
    imgUrl: jwellery,
    offer: "Upto 20% off",
    title: "Statement Fashion Jewellery",
  },
  {
    id: 7,
    imgUrl: jwellery,
    offer: "Upto 20% off",
    title: "Statement Fashion Jewellery",
  },
];

export const trendingCategoryDatas = [
  {
    id: 1,
    imgUrl: electronics,
    offer: "Upto 10% off",
    title: "Electronics",
  },
  {
    id: 2,
    imgUrl: kitchen,
    offer: "Upto 50% off",
    title: "Kitchen",
  },
  {
    id: 3,
    imgUrl: home,
    offer: "From £50",
    title: "Home",
  },
  {
    id: 4,
    imgUrl: Toytrending,
    offer: "From £100",
    title: "Toys & Crafts",
  },
  {
    id: 5,
    imgUrl: sports,
    offer: "Upto 5% off",
    title: "Sports & Leisure",
  },
  {
    id: 6,
    imgUrl: jobLot,
    offer: "Upto 15% off",
    title: "Job Lots",
  },
  {
    id: 7,
    imgUrl: pet,
    offer: "Upto 10% off",
    title: "Pets",
  },
];
