"use client";

import React from "react";
import {
  Typography,
  Button,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ThemeProvider,
} from "@material-tailwind/react";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Nav from "../../components/navigation.js";

export default function Discography() {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  };
  return (
    <>
      <ThemeProvider>
        <Nav />
        <div className="mx-auto max-w-screen-md py-12">
          <Card className="mb-12 overflow-hidden">
            <img
              alt="Potmos Hetoimos Background"
              className="w-[50vw] object-cover object-center"
              src="https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/300953665_463716255768622_4371739264982142776_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=JpqjAiZBD6QAX_YQ7n4&_nc_ht=scontent-prg1-1.xx&oh=00_AfB8lEjUP3HD5YWStYR2ohUo_DVQcksNN8f1Qb9e-Lz9YA&oe=6483D26B"
            />
          </Card>
          <Typography variant="h1" color="blue-gray" className="mb-2">
            Potmos Hetoimos - Discography
          </Typography>
          <Typography color="gray" className="font-normal">
            Potmos Hetoimos's discography is pretty varied, from doom metal
            through sludge, progressive, post-metal to jazz. Here are all of
            their albums, ranked by the time they were released.
          </Typography>
        </div>
        <div className="flex items-center mx-auto max-w-4xl">
          <IconButton
            onClick={() => slider?.current?.slickPrev()}
            className="hidden sm:block"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </IconButton>

          <div className="mx-auto max-w-3xl py-2">
            <Slider ref={slider} {...settings}>
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
                      Proclaim Thy Judgement
                    </Typography>
                    <Typography className="text-justify">
                      Potmos Hetoimos' debut album, "Proclaim Thy Judgment," was
                      released on June 1, 2006. The album features five songs
                      with lyrics directly sourced from Old Testament books of
                      prophecy, conveying its thematic alignment with its title.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button>
                      <Link href="/discography/p-t-j">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card className="mt-6 w-96">
                  <CardHeader
                    floated={false}
                    color="blue-gray"
                    className="h-80 w-80 mx-7"
                  >
                    <img
                      src="https://f4.bcbits.com/img/a2552800182_10.jpg"
                      alt="img-blur-shadow"
                      layout="fill"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      The Millstone
                    </Typography>
                    <Typography className="text-justify">
                      "The Millstone," Potmos Hetoimos' second album, was
                      released on September 12, 2006. Despite being an overtly
                      Christian album, it tackles controversial subjects like
                      pedophilia, rape, and suicide, while also serving as a
                      tribute to Matt Matheson's late girlfriend, Reneé.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button>
                      <Link href="/discography/the-millstone">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card className="mt-6 w-96">
                  <CardHeader
                    floated={false}
                    color="blue-gray"
                    className="h-80 w-80 mx-7"
                  >
                    <img
                      src="https://f4.bcbits.com/img/a1886558379_10.jpg"
                      alt="img-blur-shadow"
                      layout="fill"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Suffering The Storm
                    </Typography>
                    <Typography className="text-justify">
                      Suffering the Storm is the third album by the American
                      one-man band Potmos Hetoimos, released on June 1, 2007.
                      Unlike the first two PH albums, there is no guitar
                      anywhere on the album. Each song was written and performed
                      entirely on bass."
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button>
                      <Link href="/discography/s-t-s">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card className="mt-6 w-96">
                  <CardHeader
                    floated={false}
                    color="blue-gray"
                    className="w-80 mx-7"
                  >
                    <img
                      src="https://f4.bcbits.com/img/a4096153354_10.jpg"
                      alt="img-blur-shadow"
                      layout="fill"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Dance with Divinity
                    </Typography>
                    <Typography className="text-justify">
                      "Dance with Divinity", the fourth album by Potmos
                      Hetoimos, was released on September 12, 2007, and returns
                      to a guitar-driven sound. It tells the story of a married
                      couple facing religious differences, leading to a violent
                      killing spree against Christians by the husband.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button>
                      <Link href="/discography/d-w-d">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card className="mt-6 w-96">
                  <CardHeader
                    floated={false}
                    color="blue-gray"
                    className="w-80 mx-7"
                  >
                    <img
                      src="https://f4.bcbits.com/img/a3556330156_10.jpg"
                      alt="img-blur-shadow"
                      layout="fill"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Kingdoms
                    </Typography>
                    <Typography className="text-justify">
                      "Kingdoms," Potmos Hetoimos' fifth album released on
                      September 12, 2008, features Matt Matheson's friend Jason
                      as the vocalist and explores diverse musical styles,
                      emphasizing the theme of false human-created kingdoms
                      challenging the authority of the true King.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button>
                      <Link href="/discography/kingdoms">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card className="mt-6 w-96">
                  <CardHeader
                    floated={false}
                    color="blue-gray"
                    className="w-80 mx-7"
                  >
                    <img
                      src="https://f4.bcbits.com/img/a2623036751_10.jpg"
                      alt="img-blur-shadow"
                      layout="fill"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      The Greater Gospel
                    </Typography>
                    <Typography className="text-justify">
                      The Greater Gospel is the sixth album by Potmos Hetoimos.
                      It was released on September 12, 2009. The album discusses
                      the problems of poverty, exploitation, and ignorance in
                      the city, and how the Kingdom of God can break through
                      manmade barriers to provide hope.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button>
                      <Link href="/discography/t-g-g">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card className="mt-6 w-96">
                  <CardHeader
                    floated={false}
                    color="blue-gray"
                    className="w-80 mx-7"
                  >
                    <img
                      src="https://f4.bcbits.com/img/a0585412432_10.jpg"
                      alt="img-blur-shadow"
                      layout="fill"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Agatha
                    </Typography>
                    <Typography className="text-justify">
                      "Agatha," the seventh album by Potmos Hetoimos, released
                      on September 12, 2010, marks the beginning of a funeral
                      doom trilogy. It reintroduces the storyline format,
                      departs from previous post-metal albums, and showcases
                      Matt Matheson's return as the vocalist.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button>
                      <Link href="/discography/agatha">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card className="mt-6 w-96">
                  <CardHeader
                    floated={false}
                    color="blue-gray"
                    className="w-80 mx-7"
                  >
                    <img
                      src="https://f4.bcbits.com/img/a1127893052_10.jpg"
                      alt="img-blur-shadow"
                      layout="fill"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Evelyn
                    </Typography>
                    <Typography className="text-justify">
                      "Evelyn" is the eighth album by the American one-man band
                      Potmos Hetoimos. It was released on June 1, 2011 and is
                      the second part of a funeral doom trilogy, preceded by
                      Agatha and followed by Maribel.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button>
                      <Link href="/discography/evelyn">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card className="mt-6 w-96">
                  <CardHeader
                    floated={false}
                    color="blue-gray"
                    className="w-80 mx-7"
                  >
                    <img
                      src="https://f4.bcbits.com/img/a2205022672_10.jpg"
                      alt="img-blur-shadow"
                      layout="fill"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Maribel
                    </Typography>
                    <Typography className="text-justify">
                      "Maribel," Potmos Hetoimos' ninth album, released on
                      October 10, 2013, serves as the concluding part of a
                      funeral doom trilogy following "Agatha" and "Evelyn." It
                      continues the story, intertwining with "Agatha" and
                      providing different perspectives on overlapping timelines.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button>
                      <Link href="/discography/maribel">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card className="mt-6 w-96">
                  <CardHeader
                    floated={false}
                    color="blue-gray"
                    className="w-80 mx-7"
                  >
                    <img
                      src="https://f4.bcbits.com/img/a1075646893_10.jpg"
                      alt="img-blur-shadow"
                      layout="fill"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      The Paragon Trisagion
                    </Typography>
                    <Typography className="text-justify">
                      The Paragon Trisagion is the tenth album by the American
                      one-man band Potmos Hetoimos. It was released on August
                      18, 2015. The album also includes the 55-minute epic
                      "Wayward&nbsp;Stars", which is the second longest song
                      Potmos Hetoimos has ever recorded.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button>
                      <Link href="/discography/t-p-t">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card className="mt-6 w-96">
                  <CardHeader
                    floated={false}
                    color="blue-gray"
                    className="w-80 mx-7"
                  >
                    <img
                      src="https://f4.bcbits.com/img/a1437689425_10.jpg"
                      alt="img-blur-shadow"
                      layout="fill"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Vox Medusae
                    </Typography>
                    <Typography className="text-justify">
                      Vox Medusae is the eleventh album by the American one-man
                      band Potmos Hetoimos. It was released on September 12,
                      2018 via Not Music Records. It is the project's first
                      album in 3 years, following The Paragon Trisagion in 2015.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button>
                      <Link href="/discography/evelyn">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </Slider>
          </div>
          <IconButton
            onClick={() => slider?.current?.slickNext()}
            className="hidden sm:block"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </IconButton>
        </div>
        <br />
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between px-7">
          <Typography color="blue-gray" className="font-normal">
            &copy; 2023 EsmiK. All rights reserved.
          </Typography>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Discography
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Lyrics
              </Typography>
            </li>
          </ul>
        </footer>
      </ThemeProvider>
    </>
  );
}
