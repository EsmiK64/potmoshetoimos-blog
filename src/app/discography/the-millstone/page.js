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
      name: "Judgement Day",
      lenght: "4:06",
    },
    {
      num: "2",
      name: "Submersion",
      lenght: "7:28",
    },
    {
      num: "3",
      name: "The Lost",
      lenght: "7:06",
    },
    {
      num: "4",
      name: "The Red Beneath",
      lenght: "14:38",
    },
    {
      num: "5",
      name: "The Sins of Thousands",
      lenght: "10:35",
    },
    {
      num: "6",
      name: "The Accuser",
      lenght: "15:11",
    },
    {
      num: "7",
      name: "Submission",
      lenght: "11:30",
    },
    {
      num: "8",
      name: "Arise",
      lenght: "3:54",
    },
  ];

  return (
    <>
      <ThemeProvider>
        <Nav />
        <div className="mx-auto max-w-screen-md py-12 flex flex-col items-center">
          <Card className="mb-12 overflow-hidden w-[20vw]">
            <img
              alt="The Millstone Cover"
              className="w-[80vw] h-[80vh] sm:w-[20vw] sm:h-[20vh] object-cover object-center"
              src="https://f4.bcbits.com/img/a2552800182_10.jpg"
            />
          </Card>
          <Typography variant="h1" color="blue-gray" className="mb-2">
            The Millstone
          </Typography>
          <Typography color="gray" className="font-normal my-2">
            The Millstone, the second full-length album by Potmos Hetoimos, was
            released on September 12, 2006. In 2008, it was remixed to enhance
            the sound quality. Initially, the album lacked artwork, but
            collaborator Raleigh stepped in to address this by designing art for
            all the previously artless albums.
          </Typography>
          <Typography color="gray" className="font-normal my-2">
            Compared to its predecessor, The Millstone displayed a more focused
            approach. The storyline, lyrics, and a few guitar parts were crafted
            during the summer of 2006. The album was then recorded entirely from
            scratch between August 11th and September 11th of that year. Its
            release coincided with the passing of Reneé, Matt Matheson's first
            girlfriend, serving as a tribute to her.
          </Typography>
          <Typography color="gray" className="font-normal my-2">
            Despite being an overtly Christian album, The Millstone tackles
            controversial subject matter such as pedophilia, rape, and suicide.
          </Typography>
          <Typography color="gray" className="font-normal my-2">
            The album's narrative revolves around a man who finds himself cast
            into the ocean with a millstone tied around his neck, a literal
            punishment referenced in Luke 17:1-2. He grapples with suppressing
            the memories of the sinful act that led to his predicament while
            also seeking the truth about what occurred. Later on, Satan attempts
            to consume his mind and push him into permanent despair, but God
            intervenes, preventing this and allowing the man to remember the
            truth behind his actions.
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
                        <Link href={`/lyrics/the-millstone#${name}`}>{name}</Link>
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
                      <b>74:27</b>
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
