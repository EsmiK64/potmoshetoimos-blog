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

export default function Proclaim_Thy_Judgeme() {
  const TABLE_HEAD = ["No.", "Name", "Length"];

  const TABLE_ROWS = [
    {
      num: "1",
      name: "Playing the Harlot",
      lenght: "7:14",
    },
    {
      num: "2",
      name: "Scattered and Peeled",
      lenght: "7:17",
    },
    {
      num: "3",
      name: "Illusions of Peace",
      lenght: "12:25",
    },
    {
      num: "4",
      name: "Valley of Slaughter",
      lenght: "8:43",
    },
    {
      num: "5",
      name: "Army of Locusts",
      lenght: "13:50",
    },
  ];

  return (
    <>
      <ThemeProvider>
        <Nav />
        <div className="mx-auto max-w-screen-md py-12 flex flex-col items-center">
          <Card className="mb-12 overflow-hidden w-[20vw]">
            <img
              alt="Potmos Hetoimos Background"
              className="w-[20vw] h-[20vw] object-cover object-center"
              src="https://f4.bcbits.com/img/a2160234265_10.jpg"
            />
          </Card>
          <Typography variant="h1" color="blue-gray" className="mb-2">
            Proclaim Thy Judgement
          </Typography>
          <Typography color="gray" className="font-normal my-2">
            Potmos Hetoimos' debut album, "Proclaim Thy Judgment," was released
            on June 1, 2006. Notably, it was initially released without any
            artwork, but collaborator Raleigh later resolved this by designing
            art for all the previously artless albums.
          </Typography>
          <Typography color="gray" className="font-normal my-2">
            The album consists of a collection of five songs recorded between
            November 2005 ("Scattered and Peeled") and May 2006 ("Army of
            Locusts"), with three additional songs recorded in March 2006. Due
            to the varying recording times, the production quality differs from
            song to song, reflecting the early stages of PH founder Matt
            Matheson's recording and mixing journey. For the electronic drums,
            Matheson used a microphone placed in front of an amp, deviating from
            the direct drum-to-recorder setup.
          </Typography>
          <Typography color="gray" className="font-normal my-2">
            "Proclaim Thy Judgment" aptly lives up to its title as the song
            lyrics directly draw from Old Testament books of prophecy, including
            Hosea, Isaiah, Ezekiel, Jeremiah, and Joel.
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
                        <Link href={`/lyrics/p-t-j#${name}`}>{name}</Link>
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
                      <b>49:29</b>
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
