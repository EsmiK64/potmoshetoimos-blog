"use client";

import React from "react";
import Slider from "react-slick";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ThemeProvider,
} from "@material-tailwind/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <ThemeProvider>
        <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              Material Tailwind
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Buy Now</span>
              </Button>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <Collapse open={openNav}>
            {navList}
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Buy Now</span>
            </Button>
          </Collapse>
        </Navbar>
        <div className="mx-auto max-w-screen-md py-12">
          <Card className="mb-12 overflow-hidden">
            <img
              alt="Potmos Hetoimos Background"
              className="w-[50vw] w-full object-cover object-center"
              src="https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/300953665_463716255768622_4371739264982142776_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=JpqjAiZBD6QAX_YQ7n4&_nc_ht=scontent-prg1-1.xx&oh=00_AfB8lEjUP3HD5YWStYR2ohUo_DVQcksNN8f1Qb9e-Lz9YA&oe=6483D26B"
            />
          </Card>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Potmos Hetoimos
          </Typography>
          <Typography color="gray" className="font-normal">
            Can you help me out? you will get a lot of free exposure doing this
            can my website be in english?. There is too much white space do less
            with more, so that will be a conversation piece can you rework to
            make the pizza look more delicious other agencies charge much lesser
            can you make the blue bluer?. I think we need to start from scratch
            can my website be in english?, yet make it sexy i&apos;ll pay you in
            a week we don&apos;t need to pay upfront i hope you understand can
            you make it stand out more?. Make the font bigger can you help me
            out? you will get a lot of free exposure doing this that&apos;s
            going to be a chunk of change other agencies charge much lesser. Are
            you busy this weekend? I have a new project with a tight deadline
            that&apos;s going to be a chunk of change. There are more projects
            lined up charge extra the next time.
          </Typography>
        </div>
        <Slider {...settings}>
        <div>
            <Card className="mt-6 w-96">
              <CardHeader
                floated={false}
                color="blue-gray"
                className="h-80 w-80 mx-7"
              >
                <img
                  src="https://f4.bcbits.com/img/a2160234265_10.jpg"
                  alt="img-blur-shadow"
                  layout="fill"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Proclam Thy Judgement
                </Typography>
                <Typography className="text-justify">
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to &quot;Naviglio&quot; where you can
                  enjoy the main night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </div>
        </Slider>
      </ThemeProvider>
    </>
  );
}
