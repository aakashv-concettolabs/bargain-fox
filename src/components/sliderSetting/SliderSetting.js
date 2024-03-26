// deals of the day images
import womenWestern from "../../assets/western.png";
import menWestern from "../../assets/men.png";
import casualShoes from "../../assets/casualShoe.png";
import runningShoes from "../../assets/running.png";
import sunglasses from "../../assets/sunglasses.png";
import jwellery from "../../assets/jwellery.png";

// trending of eCart images
import electronics from "../../assets/electronis.png";
import kitchen from "../../assets/kitchen.png";
import home from "../../assets/home.png";
import Toytrending from "../../assets/Toy-trending.png";
import sports from "../../assets/sports.png";
import jobLot from "../../assets/jobLot.png";
import pet from "../../assets/pet.png";

// garden & DIY images
import garden1 from "../../assets/garden-1.png";
import garden2 from "../../assets/garden-2.png";
import garden3 from "../../assets/garden-3.png";
import garden4 from "../../assets/garden-4.png";

// electronics images
import electronic1 from "../../assets/electronic1.png";
import electronic2 from "../../assets/electronic2.png";
import electronic3 from "../../assets/electronic3.png";
import electronic4 from "../../assets/electronic4.png";

// deals slider setting
export const dealsettings = {
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

// product detail slider A
export const productDetailSliderAsettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  vertical: true,
  verticalSwiping: true,
  initialSlide: 0,
};

// product detail slider B
export const productDetailSliderBsettings = {
  dots: false,
  infinite: false,
  speed: 500,
  fade: true,
  slidesToShow: 1,
};

// slider setting
export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// deals of the day data
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

// trending on ecart data
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

// garden & DIY data
export const GardenDatas = [
  {
    id: 1,
    imgUrl: garden1,
    detail:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    // ratedStar: starColor,
    // unratedStar: star,
    price: "44",
    offerPrice: "40",
    productUrl: "/",
  },
  {
    id: 2,
    imgUrl: garden2,
    detail:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    // ratedStar: starColor,
    // unratedStar: star,
    price: "35",
    offerPrice: "30",
    productUrl: "/",
  },
  {
    id: 3,
    imgUrl: garden3,
    detail:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    // ratedStar: starColor,
    // unratedStar: star,
    price: "42",
    offerPrice: "38",
    productUrl: "/",
  },
  {
    id: 4,
    imgUrl: garden4,
    detail:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    // ratedStar: starColor,
    // unratedStar: star,
    price: "44",
    offerPrice: "40",
    productUrl: "/",
  },
  {
    id: 5,
    imgUrl: garden3,
    detail:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    // ratedStar: starColor,
    // unratedStar: star,
    price: "42",
    offerPrice: "38",
    productUrl: "/",
  },
  {
    id: 6,
    imgUrl: garden2,
    detail:
      "Oismys Glow in Dark Tree Elves Fairy 20Pcs Luminous Ghost Micro Landscape Accessories Garden...",
    // ratedStar: starColor,
    // unratedStar: star,
    price: "35",
    offerPrice: "30",
    productUrl: "/",
  },
];

// electronics data
export const electronicDatas = [
  {
    id: 1,
    imgUrl: electronic1,
    detail:
      "Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 256GB, Wi-Fi, 12MP",
    price: "50",
    offerPrice: "44",
  },
  {
    id: 2,
    imgUrl: electronic2,
    detail:
      "Eilik - an Electronic Robot Pets Toys with Intelligent and Interactive | Abundant Emotions, Idle...",
    price: "48",
    offerPrice: "42",
  },
  {
    id: 3,
    imgUrl: electronic3,
    detail:
      "LOBKIN Wireless Bluetooth Headphones, Over-Ear Headphones with Built-in HD Mic",
    price: "46",
    offerPrice: "40",
  },
  {
    id: 4,
    imgUrl: electronic4,
    detail:
      "LOBKIN Wireless Bluetooth Headphones, Over-Ear Headphones with Built-in HD Mic",
    price: "44",
    offerPrice: "38",
  },
  {
    id: 5,
    imgUrl: electronic1,
    detail:
      "Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 256GB, Wi-Fi, 12MP",
    price: "50",
    offerPrice: "44",
  },
  {
    id: 6,
    imgUrl: electronic2,
    detail:
      "Eilik - an Electronic Robot Pets Toys with Intelligent and Interactive | Abundant Emotions, Idle...",
    price: "48",
    offerPrice: "42",
  },
];
