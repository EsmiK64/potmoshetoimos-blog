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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Nav from "../../components/navigation.js";

export default function About() {
  return (
    <>
      <ThemeProvider>
        <Nav />
        <div className="mx-auto max-w-screen-md py-12">
          <Card className="mb-12 overflow-hidden">
            <img
              alt="Potmos Hetoimos Background"
              className="w-[50vw] object-cover object-center"
              src="/ph-bg.png"
            />
          </Card>
          <Typography variant="h1" color="blue-gray" className="mb-2">
            About Potmos Hetoimos
          </Typography>
          <Typography color="gray" className="font-normal my-2">
            Potmos Hetoimos emerged from Matt Matheson's progressive metal
            project, Metagloria. The first recorded track under the Potmos
            Hetoimos name was "Scattered and Peeled." This led to the debut
            album, Proclaim Thy Judgment, which was entirely improvised during
            recording, giving it a distinct and creative feel different from
            later releases. The Millstone and Dance with Divinity are concept
            albums, while Suffering the Storm is a bass-driven album without
            guitar.
          </Typography>
          <Typography color="gray" className="font-normal my-2">
            The albums Kingdoms and The Greater Gospel showcase influences from
            artists like Cult of Luna and Rosetta, transitioning Potmos Hetoimos
            towards progressive post-metal. These albums contain standout tracks
            such as "Thrones," "Matriarch," "Sector 7," and "The Crumbling Dam"
            that work well as standalone pieces. Agatha, heavily inspired by
            Monolithe, Esoteric, and Ahab, marked a significant shift towards
            pure funeral doom and expanded its universe with the prequel Evelyn
            and connecting conclusion Maribel, intensifying psychedelic and
            orchestral elements. Collaborations with artists like Mike Armine,
            Chris Grigg, and James Dorton became more prevalent during this era.
          </Typography>
          <Typography color="gray" className="font-normal my-2">
            Following the funeral doom trilogy, Potmos Hetoimos continued to
            embrace its sludge and post-metal roots, resulting in a vast amount
            of non-doom material waiting to be recorded. This culminated in the
            release of the triple album, The Paragon Trisagion, featuring
            diverse genres such as post-metal, progressive stoner metal, and
            prog metal, as well as unexpected deviations. The album also
            featured guest appearances from various artists. The subsequent
            album, Vox Medusae, expanded Potmos Hetoimos' progressive sludge
            sound by incorporating blackened hardcore, jazz, and funk elements,
            utilizing saxophone, piano, and slap bass. Vox Medusae was released
            on Not Music Records.
          </Typography>
        </div>
      </ThemeProvider>
    </>
  );
}
