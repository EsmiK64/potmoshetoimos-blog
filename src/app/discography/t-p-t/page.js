"use client";

import React from "react";
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

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Nav from "../../../components/navigation.js";

export default function The_Millstone() {
  const TABLE_HEAD = ["No.", "Name", "Length"];

  const TABLE_ROWS = [
    {
      num: "1",
      name: "Light Wells",
      lenght: "8:44",
    },
    {
      num: "2",
      name: "Synthetic Eclipse",
      lenght: "10:13",
    },
    {
      num: "3",
      name: "Resplendence",
      lenght: "2:21",
    },
    {
      num: "4",
      name: "Amethysts",
      lenght: "6:31",
    },
    {
      num: "5",
      name: "Strawgod",
      lenght: "11:20",
    },
    {
      num: "6",
      name: "Cherubae",
      lenght: "4:41",
    },
    {
      num: "7",
      name: "Fear and Bright",
      lenght: "9:34",
    },
    {
      num: "8",
      name: "Queen of the Fire",
      lenght: "7:39",
    },
    {
      num: "9",
      name: "Heliamartha",
      lenght: "6:44",
    },
    {
      num: "10",
      name: "Adamah, Anima",
      lenght: "6:47",
    },
    {
      num: "11",
      name: "Fallow Soil",
      lenght: "9:21",
    },
    {
      num: "12",
      name: "The Devil's Miracles",
      lenght: "11:52",
    },
    {
      num: "13",
      name: "Goannai",
      lenght: "5:11",
    },
    {
      num: "14",
      name: "Residence Altar",
      lenght: "9:20",
    },
    {
      num: "15",
      name: "Awaken the Dawn",
      lenght: "8:00",
    },
    {
      num: "16",
      name: "Blue Agave Prism",
      lenght: "2:43",
    },
    {
      num: "17",
      name: "Shadetree",
      lenght: "6:14",
    },
    {
      num: "18",
      name: "Shade Eater",
      lenght: "3:30",
    },
    {
      num: "19",
      name: "Nostalgia Nausea",
      lenght: "5:49",
    },
    {
      num: "20",
      name: "Lamppost",
      length: "5:11",
    },
    {
      num: "21",
      name: "Wayward Stars",
      lenght: "55:13",
    },
  ];

  return (
    <>
      <ThemeProvider>
        <Nav />
        <div className="mx-auto max-w-screen-md py-12 flex flex-col items-center">
          <Card className="mb-12 overflow-hidden w-[20vw]">
            <img
              alt="The Paragon Trisagion Cover"
              className="w-[80vw] h-[80vh] sm:w-[20vw] sm:h-[20vh] object-cover object-center"
              src="https://f4.bcbits.com/img/a1075646893_10.jpg"
            />
          </Card>
          <Typography variant="h1" color="blue-gray" className="mb-2">
            The Paragon Trisagion
          </Typography>
          <Typography color="blue-gray" className="mb-2">
            The Paragon Trisagion is the tenth album by the American one-man
            band Potmos Hetoimos. It was released on August 18, 2015. Although
            the album is spread out over three acts, it is actually a digital
            release and includes guest musicians such as Persefone's Carlos
            Lozano, Crib45's Teemu Mantynen, First Reign's Sean Lang, and
            members of the Baltimore Rock Opera Society.
          </Typography>

          <Typography color="blue-gray" className="mb-2">
            The album also includes the 55-minute epic "Wayward Stars", which is
            the second longest song Potmos Hetoimos has ever recorded.
          </Typography>

          <Typography color="blue-gray" className="mb-2">
            At 3 hours, 17 minutes and 10 seconds, it is the longest PH album,
            overtaking the 2007 album Dance with Divinity.
          </Typography>

          <Typography variant="h2" color="blue-gray" className="mb-2">
            Background
          </Typography>
          <Typography color="blue-gray" className="mb-2">
            While working on a funeral doom trilogy, which consists of three
            albums titled Maribel, Evelyn, and Maribel, Potmos Hetoimos had not
            forsaken its sludge and post-metal roots, so there was an enormous
            amount of non-doom material waiting to be recorded after that.
          </Typography>

          <blockquote>
            <Typography color="blue-gray" className="mb-2">
              “I think with Maribel, I really hit the pinnacle of my ability as
              a doom composer. I felt like I had pushed my own personal capacity
              as far as it could go with that, and I was ready to get back to
              some more high-energy songs, stuff you could show off to your
              friends, stuff you could blast in the car. As much as I liked
              Maribel, anytime someone unfamiliar with my music wanted to hear
              what it sounded like, I would struggle to think of what part to
              show them. It's not exactly accessible. So I bought this album
              back down to Earth a little, […] and made each song something I'd
              be psyched to show people, something more immediately gripping.”
            </Typography>
            <footer>- Matt Matheson</footer>
          </blockquote>

          <Typography color="blue-gray" className="mb-2">
            At 3 hours, 17 minutes and 10 seconds, it is both the project's
            first triple album and the longest PH album, described by Matheson
            as “to my knowledge, the longest studio album in metal history.”
            When asked about it, he stated that he “just wanted to push it even
            farther.”
          </Typography>

          <Typography variant="h2" color="blue-gray" className="mb-2">
            Musical style
          </Typography>
          <Typography color="blue-gray" className="mb-2">
            Musically, the album blends Matheson's affinity for doom with the
            atmospheric sludge style that Potmos Hetoimos focused on before the
            trilogy, but it also dabbles in hardcore and post-hardcore, lending
            some songs more drive than pase Isis-style morass. An impressive
            roster of eclectic and offbeat guest spots further diversifies some
            songs. A few guest highlights include guitarist Carlos Lozano of
            Andorran prog-metal band Persefone, Norwegian jazz saxophonist Ben
            Widerøe from Seven Impale, and (of particular interest to longtime
            IO readers) Andrew Millar of Patrons of the Rotting Gate lending
            vocals to standout track “Amethysts,” which is part of disc 1.
          </Typography>

          <Typography variant="h2" color="blue-gray" className="my-4">
            Track Listing
          </Typography>
          <Card className="h-full w-full overflow-hidden">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ num, name, lenght }, index) => (
                  <tr key={num} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {num}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <Link href={`/lyrics/t-p-t#${name}`}>
                          {name}
                        </Link>
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {lenght}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2" className="text-right p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <b>Total lenght:</b>
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <b>197:10</b>
                    </Typography>
                  </td>
                </tr>
              </tfoot>
            </table>
          </Card>
        </div>
      </ThemeProvider>
    </>
  );
}
