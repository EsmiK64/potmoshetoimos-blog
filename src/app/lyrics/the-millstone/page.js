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
              alt="The Millstone Cover"
              className="w-[80vw] h-[80vh] sm:w-[20vw] sm:h-[20vh] object-cover object-center"
              src="https://f4.bcbits.com/img/a2552800182_10.jpg"
            />
          </Card>
          <Typography variant="h1" color="blue-gray" className="mb-2">
            The Millstone - Lyrics
          </Typography>
          <Link href="/discography/the-millstone" className="my-5">
            <Button>Read More</Button>
          </Link>
          <hr />
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-3"
            id="Playing with Harlot"
          >
            01 - Judgement Day
          </Typography>
          <Typography color="gray" className="font-normal my-2 space-y-3">
            <p>
              There I lay, overlooking my impending grave
              <br />
              Judgment day, my wickedness has now condemned me
              <br />
              For my crime, I suffocate and drown to death
              <br />
              Down below, hanging this sentence &lsquo;round my neck.
              <br />
              There&rsquo;s no more time to try to justify my deeds
              <br />
              One last cry escapes my mouth before they choke me
              <br />
              Tightening the rope, tying to the stone
              <br />
              They intend to send me down to meet the devil on his throne
              <br />A man arises, towering over the crowd
              <br />
              And one by one my evils are read aloud
              <br />
              No mercy comes from the voices around
              <br />
              They will not be appeased till I am drowned
              <br />
              So there we stood, the captors and the seized
              <br />
              My last glimpse of sunlight and a soft breeze
              <br />
              With no remorse they walk me to the edge
              <br />
              Silently and suddenly they kick me from the deck
              <br />
              This ends my journey on earth&rsquo;s shore
              <br />
              Thus begins my journey to the ocean&rsquo;s floor
            </p>
          </Typography>
          <hr />
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-3"
            id="Submersion"
          >
            02 - Submersion
          </Typography>
          <Typography color="gray" className="font-normal my-2 space-y-3">
            <p>
              Eyes remain open as I slowly sink below
              <br />
              The glare of the sun on the water
              <br />
              May be the last light I ever know
              <br />
              My memory fades with the evening rays
              <br />
              Her memory slips from me
              <br />
              Her
              <br />
              Is she why I am here,
              <br />
              Is she really why I am here?
              <br />
              Forget these memories, I&rsquo;ll push them all below
              <br />
              Fate rushes over me like coldest winter snow
              <br />
              Rid of my regrets I can finally be free
              <br />
              My past I&rsquo;ll submerge as the ocean drowns me
              <br />I won&rsquo;t let them take this from me
              <br />I will take this from myself first
              <br />
              Before I slip away, into oceanic oblivion
              <br />
              Consumed by mother earth
              <br />
              Forgotten by father time
              <br />
              Crushed by pressure
              <br />
              Beneath the salt and brine
              <br />
              There will I find rest
              <br />
              Freedom in release
              <br />
              These memories I purge
              <br />
              As the water cleanses me
              <br />
              My past so real meets fate surreal
              <br />I let this all go
              <br />
              All thought in exile
              <br />I let this all go
              <br />
              Forget these memories, I&rsquo;ll push them all below
              <br />
              Fate rushes over me like coldest winter snow
              <br />
              Rid of my regrets I can finally be free
              <br />
              My past I&rsquo;ll submerge as the ocean drowns me
            </p>
          </Typography>
          <hr />
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-3"
            id="The Lost"
          >
            03 - The Lost
          </Typography>
          <Typography color="gray" className="font-normal my-2 space-y-3">
            <p>
              There in the darkness of my mind
              <br />I place these thoughts, that none should ever find
              <br />
              As blue fades to black I close my eyes
              <br />
              Drifting down to where there is no light
              <br />
              Slowly passing away,
              <br />
              Slowly passing&hellip;
              <br />
              She opened those eyes, the hazel eyes of a child
              <br />
              Perfect in her innocence
              <br />
              But it couldn&rsquo;t last in the perversion of this world
              <br />
              How she wished to never blink again
              <br />
              She screamed, but I never heard
              <br />
              Quietly she lay in pain, corrupted by
              <br />I never understood
              <br />
              How evil like the waves could roll in
              <br />
              Crushing spirit and inundating good
              <br />
              In a moment there was no God left within
              <br />
              The darkness reached out and took hold,
              <br />
              And she was seized with a damning lust
              <br />
              One soul tarnished with the act
              <br />
              One soul ruined by the aftermath
              <br />
              She screamed, but I never heard
              <br />
              Quietly she lay in pain, corrupted by
              <br />I never understood
              <br />
              How evil like the waves could roll in
              <br />
              On the shores of purity
              <br />
              Breaking like her sanity
              <br />
              Drink in deep, at such a young age,
              <br />
              This was the end of your innocent stage
            </p>
          </Typography>
          <hr />
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-3"
            id="The Red Beneath"
          >
            04 - The Red Beneath
          </Typography>
          <Typography color="gray" className="font-normal my-2 space-y-3">
            <p>
              It&rsquo;s a cold, unwelcome sickness
              <br />
              Impressing itself on me
              <br />
              The onset of psychosis
              <br />
              Triggered by memories
              <br />
              Suppression left me empty
              <br />
              Lest the tide should fill the void
              <br />
              They&rsquo;ll crawl back in and haunt me
              <br />
              Unless I can stop the noise
              <br />
              Curse the name by which this brain has been made
              <br />
              Its ill perfection refuses to let the past fade
              <br />
              In black and white I hear her voice
              <br />
              In screaming color I see her face
              <br />
              Why must I remember
              <br />
              Come forth, my resting place!
              <br />
              How I long to swallow silt and muck
              <br />
              To embrace this agony whither I am constrained
              <br />
              One inhale should send me into death
              <br />
              But I can&rsquo;t awaken from this mental drain
              <br />
              <em>
                Fight, man! Fight this blasphemous reminiscence!
                <br />
                Your end is sealed! No reason to recall
                <br />
                The blood that stained your hands toward this disposition
                <br />
                But that thought awaits below as you fall
              </em>
            </p>
          </Typography>
          <hr />
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-3"
            id="The Sins of the Thousands"
          >
            05 - The Sins of the Thousands
          </Typography>
          <Typography color="gray" className="font-normal my-2 space-y-3">
            <p>
              Here I am, face to face with my past again
              <br />
              There she stands, shivering and afraid
              <br />
              Dilated pupils struggle to form a bleak stare
              <br />
              Piercing my calloused soul with remorse
              <br />
              Five years ago, throwing conscience to the fire
              <br />
              When passion perverse had taken its hold
              <br />
              With baited breath watching her from a distance
              <br />
              Awaiting my moment to strip away her grace
              <br />
              What Godless animation, this!
              <br />
              To cast aside my mind and act on foolishness
              <br />A thought long killed continues to survive
              <br />
              And presses me to an unforgivable,
              <br />A thousand times unforgivable deed
              <br />
              Hiding away under cloud-covered night
              <br />
              In darkness I smothered all inhibition
              <br />
              Alone she walked, as the clock struck her years
              <br />
              Into my grasp she fell, commencing my mission
              <br />
              Eyes shut, over and over
              <br />
              Cold touch, warmer and warmer
              <br />
              Screaming, louder and louder
              <br />
              Hoping no one will find her
              <br />
              Now there&rsquo;s no turning back, the act is accomplished
              <br />
              Spirit&rsquo;s conviction silenced, my soul is vanished
              <br />
              The opposite of perfection is manifest
              <br />
              The only justified punishment is death
              <br />I escaped to live on, but forever she was trapped
              <br />
              Dead inside, she fell into a life of wickedness
              <br />
              Five years passed before they could not find her
              <br />
              But my name they found on her suicide letter
              <br />
              Did I take her life, her purity,
              <br />
              In prepubescent indignity?
              <br />
              Or it this reality all that it seems?
              <br />
              This is how it should have happened
              <br />
              This is how it would have happened
              <br />
              But instead I lay alone only daydreaming such schemes
              <br />
              The construct of my mind erased
              <br />
              Confronted by a sinner&rsquo;s face
              <br />I only misbehaved inside my head
              <br />
              But if my sin is psychological
              <br />
              What this ocean so physical
              <br />
              That purports to drain my life till I am dead?
            </p>
          </Typography>
          <hr />
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-3"
            id="The Accuser"
          >
            06 - The Accuser
          </Typography>
          <Typography color="gray" className="font-normal my-2 space-y-3">
            <p>
              Memories so clear scrape at my consciousness
              <br />
              Am I really here, and what is the purpose of this?
              <br />I recall on a dark, cloudy night making light of my lust
              <br />
              This water has weakened my mind, I don&rsquo;t know what to trust
              <br />
              With uncertain psyche, a shout comes to deafen my ears
              <br />
              Breaking my spirit and compounding all of my fears
              <br />
              Though I cannot tell the actions apart from the dreams
              <br />
              This voice unrelenting condemns me full well, with scream after
              scream:
              <br />
              <em>
                You raper, you raped her
                <br />
                In your heart and in your mind
                <br />
                Coercion, perversion
                <br />
                Now forever you are mine
                <br />
              </em>
              Is there truth to this claim?
              <br />I know I fantasized so long
              <br />
              My head now hangs below in shame
              <br />
              There&rsquo;s no more hope for the one I wronged
              <br />
              My life is sealed, along with eternity
              <br />
              My drowning now towards burning then
              <br />I wish this sorrow could be released from me
              <br />
              But the hell-borne shriek reminds me yet again
              <br />
              <em>
                You raper, you raped her
                <br />
                Tearing down her paradise
                <br />
                Vulgarly destroying
                <br />
                Now forever you are mine
                <br />
              </em>
              My perversion abolished her integrity
              <br />
              This half decade she wasted in promiscuity
              <br />I am the culprit, instigating her fall from grace
              <br />
              She is the reason I was turned over to this place
              <br />
              In hopelessness she built her makeshift gallows
              <br />
              She wrote my name in blood then left this world
              <br />
              Suicide at seventeen, such a hard thing to swallow
              <br />
              The bitter end of brokenness for this beautiful young girl
              <br />
              <em>
                You killer, you killed her
                <br />
                Her blood stains your sick design
                <br />
                Condemning your standing
                <br />
                By your hand this girl died
                <br />
                You killer, you killed her
                <br />
                Tie the knot above her spine
                <br />
                Suspended, life ended
                <br />
                Now forever you are
                <br />
              </em>
              <strong>
                No! Listen for the voice,
                <br />
                Look for the truth
                <br />
                Did this ever happen
                <br />
                He&rsquo;s lying to you
                <br />
                These accusations comprise deceit
                <br />
                What could have happened in reality?
                <br />
                You never laid hands on that virgin&rsquo;s skin
                <br />
                The only perpetration was that of your eyes
                <br />
                Behind, o accuser! And search now within
                <br />
                You are not responsible for her demise
                <br />
                Open your eyes
                <br />
                Open your eyes
                <br />
                My child, open your eyes!
              </strong>
            </p>
          </Typography>
          <hr />
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-3"
            id="Submission"
          >
            07 - Submission
          </Typography>
          <Typography color="gray" className="font-normal my-2 space-y-3">
            <p>
              So this is how it ends
              <br />I can feel the pressure of the deep
              <br />
              The travesty of my sins
              <br />
              Finds me in a comatose sleep
              <br />
              But I will awaken, and soon I will taste
              <br />
              The hope of recollection of my obscured history
              <br />
              The liar&rsquo;s proclamations are now laid to waste
              <br />
              The hour is impending to unfold this mystery
              <br />
              It was the pedophilic fetish of my heart
              <br />
              That blackened and adulterated my thoughts
              <br />
              No action did I intend to impart
              <br />
              For debasement of self, and for terror of being caught
              <br />I never laid a finger on her body
              <br />
              Only in my vision did she concede
              <br />
              By coincidence she faltered and became
              <br />
              The willing pawn of immorality
              <br />I placed the blame upon myself alone
              <br />
              For thinking of her so objectively
              <br />
              When fertility was found, she surrendered
              <br />
              Her neck embraced by a rope of tragedy
              <br />
              She screamed, but I never heard
              <br />
              Quietly she hung in pain, corrupted by her own decision
              <br />I never understood
              <br />
              How evil like the waves could roll in
              <br />
              Where could I have been?
              <br />
              Is it really not my fault?
              <br />
              With different eyes, could I have seen her pain?
              <br />
              Is her blood on my hands?
              <br />
              The screams of injustice are gone
              <br />A whisper in my memory resurfaces
              <br />A faith long lost brings a reiteration;
              <br />
              <strong>&ldquo;I will restore you and heal you&rdquo;</strong>
              <br />
              In my final moments I recall this word
              <br />
              And plead for mercy to arise
              <br />
              The millstone I placed on my neck is shattered
              <br />
              There extends a hand to offer me new life
              <br />
              The sickness that has possessed me
              <br />
              Is dispelled by the panacea of heaven&rsquo;s hand
              <br />
              No longer will my perversion control me
              <br />
              No longer will this burden I withstand
              <br />
              My head strikes the ocean floor,
              <br />
              My eyes behold the open door,
              <br />
              His love overwhelms and washes over me
              <br />I am free
              <br />I see the waters peeled back in submission
              <br />A thunderous voice weeps&nbsp;
              <strong>
                &ldquo;Welcome, son,
                <br />
                Behold the earth you knew now for the last time;
                <br />
                Now, forever, you are Mine.&rdquo;
              </strong>
            </p>
          </Typography>
          <hr />
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-3"
            id="Arise"
          >
            08 - Arise
          </Typography>
          <Typography color="gray" className="font-normal my-2 space-y-3">
            <em>(this song is an instrumental)</em>
          </Typography>
        </div>
      </ThemeProvider>
    </>
  );
}