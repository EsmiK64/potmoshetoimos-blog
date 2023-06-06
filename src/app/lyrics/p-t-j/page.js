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

import Nav from "../../../components/navigation.js";

export default function About() {
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
          <Typography variant="h1" color="blue-gray">
            Proclaim Thy Judgement - Lyrics
          </Typography>
          <Link href="/discography/p-t-j" className="my-5">
            <Button>Read More</Button>
          </Link>
          <hr />
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-3"
            id="Playing with Harlot"
          >
            01 - Playing the Harlot
          </Typography>
          <Typography color="gray" className="font-normal my-2 space-y-3">
            <p>
              Plead with your mother, plead: for she is not my wife, neither am
              I her husband: let her therefore put away her whoredoms out of her
              sight, and her adulteries from between her breasts;
            </p>
            <p>
              Lest I strip her naked, and set her as in the day that she was
              born, and make her as a wilderness, and set her like a dry land,
              and slay her with thirst.
            </p>
            <p>
              And I will not have mercy upon her children; for they be the
              children of whoredoms.
            </p>
            <p>
              For their mother hath played the harlot: she that conceived them
              hath done shamefully: for she said, I will go after my lovers,
              that give me my bread and my water&hellip;
            </p>
            <p>
              Therefore, behold, I will hedge up thy way with thorns, and make a
              wall, that she shall not find her paths.
            </p>
            <p>
              And she shall follow after her lovers, but she shall not overtake
              them&hellip;
            </p>
            <p>&ndash;from Hosea 2:2-7 KJV</p>
          </Typography>
          <hr />
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-3"
            id="Scattered and Peeled"
          >
            02 - Scattered and Peeled
          </Typography>
          <Typography color="gray" className="font-normal my-2 space-y-3">
            <p>
              Woe to the land shadowing with wings, which is beyond the rivers
              of Ethiopia:
            </p>
            <p>
              That sendeth ambassadors by the sea, even in vessels of bulrushes
              upon the waters, saying, Go, ye swift messengers, to a nation
              scattered and peeled, to a people terrible from their beginning
              hitherto; a nation meted out and trodden down, whose land the
              rivers have spoiled!
            </p>
            <p>
              All ye inhabitants of the world, and dwellers on the earth, see
              ye, when he lifteth up an ensign on the mountains; and when he
              bloweth a trumpet, hear ye.
            </p>
            <p>&ndash;Isaiah 18:1-3 KJV</p>
          </Typography>
          <hr />
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-3"
            id="Illusions of Peace"
          >
            03 - Illusions of Peace
          </Typography>
          <Typography color="gray" className="font-normal my-2 space-y-3">
            <p>
              Son of man, prophesy against the prophets of Israel that prophesy,
              and say thou unto them that prophesy out of their own hearts, Hear
              ye the word of the LORD;
            </p>
            <p>
              Thus saith the Lord GOD; Woe unto the foolish prophets, that
              follow their own spirit, and have seen nothing!
            </p>
            <p>O Israel, thy prophets are like the foxes in the deserts.</p>
            <p>
              Ye have not gone up into the gaps, neither made up the hedge for
              the house of Israel to stand in the battle in the day of the LORD.
            </p>
            <p>
              They have seen vanity and lying divination, saying, The LORD
              saith: and the LORD hath not sent them: and they have made others
              to hope that they would confirm the word.
            </p>
            <p>
              Have ye not seen a vain vision, and have ye not spoken a lying
              divination, whereas ye say, The LORD saith it; albeit I have not
              spoken?
            </p>
            <p>
              Therefore thus saith the Lord GOD; Because ye have spoken vanity,
              and seen lies, therefore, behold, I am against you, saith the Lord
              GOD.
            </p>
            <p>
              And mine hand shall be upon the prophets that see vanity, and that
              divine lies: they shall not be in the assembly of my people,
              neither shall they be written in the writing of the house of
              Israel, neither shall they enter into the land of Israel; and ye
              shall know that I am the Lord GOD.
            </p>
            <p>
              Because, even because they have seduced my people, saying, Peace;
              and there was no peace; and one built up a wall, and, lo, others
              daubed it with untempered morter:
            </p>
            <p>
              Say unto them which daub it with untempered morter, that it shall
              fall: there shall be an overflowing shower; and ye, O great
              hailstones, shall fall; and a stormy wind shall rend it.
            </p>
            <p>
              Lo, when the wall is fallen, shall it not be said unto you, Where
              is the daubing wherewith ye have daubed it?
            </p>
            <p>
              Therefore thus saith the Lord GOD; I will even rend it with a
              stormy wind in my fury; and there shall be an overflowing shower
              in mine anger, and great hailstones in my fury to consume it.
            </p>
            <p>
              So will I break down the wall that ye have daubed with untempered
              morter, and bring it down to the ground, so that the foundation
              thereof shall be discovered, and it shall fall, and ye shall be
              consumed in the midst thereof: and ye shall know that I am the
              LORD.
            </p>
            <p>–Ezekiel 13:1-14 KJV</p>
          </Typography>
          <hr />
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-3"
            id="Valley of Slaughter"
          >
            04 - Valley of Slaughter
          </Typography>
          <Typography color="gray" className="font-normal my-2 space-y-3">
            <p>
              For the children of Judah have done evil in my sight, saith the
              LORD: they have set their abominations in the house which is
              called by my name, to pollute it.
            </p>
            <p>
              And they have built the high places of Tophet, which is in the
              valley of the son of Hinnom, to burn their sons and their
              daughters in the fire; which I commanded them not, neither came it
              into my heart.
            </p>
            <p>
              Therefore, behold, the days come, saith the LORD, that it shall no
              more be called Tophet, nor the valley of the son of Hinnom, but
              the valley of slaughter: for they shall bury in Tophet, till there
              be no place.
            </p>
            <p>
              And the carcases of this people shall be meat for the fowls of the
              heaven, and for the beasts of the earth; and none shall fray them
              away.
            </p>
            <p>
              Then will I cause to cease from the cities of Judah, and from the
              streets of Jerusalem, the voice of mirth, and the voice of
              gladness, the voice of the bridegroom, and the voice of the bride:
              for the land shall be desolate.
            </p>
            <p>
              At that time, saith the LORD, they shall bring out the bones of
              the kings of Judah, and the bones of his princes, and the bones of
              the priests, and the bones of the prophets, and the bones of the
              inhabitants of Jerusalem, out of their graves:
            </p>
            <p>
              And they shall spread them before the sun, and the moon, and all
              the host of heaven, whom they have loved, and whom they have
              served, and after whom they have walked, and whom they have
              sought, and whom they have worshipped: they shall not be gathered,
              nor be buried; they shall be for dung upon the face of the earth.
            </p>
            <p>
              And death shall be chosen rather than life by all the residue of
              them that remain of this evil family, which remain in all the
              places whither I have driven them, saith the LORD of hosts.
            </p>
            <p>&ndash;Jeremiah 7:30-8:3 KJV</p>
          </Typography>
          <hr />
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-3"
            id="Army of Locusts"
          >
            05 - Army of Locusts
          </Typography>
          <Typography color="gray" className="font-normal my-2 space-y-3">
            <p>
              Blow ye the trumpet in Zion, and sound an alarm in my holy
              mountain: let all the inhabitants of the land tremble: for the day
              of the LORD cometh, for it is nigh at hand;
            </p>
            <p>
              A day of darkness and of gloominess, a day of clouds and of thick
              darkness, as the morning spread upon the mountains: a great people
              and a strong; there hath not been ever the like, neither shall be
              any more after it, even to the years of many generations.
            </p>
            <p>
              A fire devoureth before them; and behind them a flame burneth: the
              land is as the garden of Eden before them, and behind them a
              desolate wilderness; yea, and nothing shall escape them.
            </p>
            <p>
              The appearance of them is as the appearance of horses; and as
              horsemen, so shall they run.
            </p>
            <p>
              Like the noise of chariots on the tops of mountains shall they
              leap, like the noise of a flame of fire that devoureth the
              stubble, as a strong people set in battle array.
            </p>
            <p>
              Before their face the people shall be much pained: all faces shall
              gather blackness.
            </p>
            <p>
              They shall run like mighty men; they shall climb the wall like men
              of war; and they shall march every one on his ways, and they shall
              not break their ranks:
            </p>
            <p>
              Neither shall one thrust another; they shall walk every one in his
              path: and when they fall upon the sword, they shall not be
              wounded.
            </p>
            <p>
              They shall run to and fro in the city; they shall run upon the
              wall, they shall climb up upon the houses; they shall enter in at
              the windows like a thief.
            </p>
            <p>
              The earth shall quake before them; the heavens shall tremble: the
              sun and the moon shall be dark, and the stars shall withdraw their
              shining:
            </p>
            <p>
              And the LORD shall utter his voice before his army: for his camp
              is very great: for he is strong that executeth his word: for the
              day of the LORD is great and very terrible; and who can abide it?
            </p>
            <p>
              Therefore also now, saith the LORD, turn ye even to me with all
              your heart, and with fasting, and with weeping, and with mourning:
            </p>
            <p>
              And rend your heart, and not your garments, and turn unto the LORD
              your God: for he is gracious and merciful, slow to anger, and of
              great kindness, and repenteth him of the evil.
            </p>
            <p>&ndash;Joel 2:1-13 KJV</p>
          </Typography>
        </div>
      </ThemeProvider>
    </>
  );
}
