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
              alt="The Paragon Trisagion Cover"
              className="w-[80vw] h-[80vh] sm:w-[20vw] sm:h-[20vh] object-cover object-center"
              src="https://f4.bcbits.com/img/a1075646893_10.jpg"
            />
          </Card>
          <Typography variant="h1" color="blue-gray" className="mb-2">
            The Paragon Trisagion
          </Typography>
          <Link href="/discography/t-p-t" className="my-5">
            <Button>Read More</Button>
          </Link>
          <hr />
          <Typography color="blue-gray" className="mb-3">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Light Wells"
            >
              01 - Light Wells
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              There are times when the sunlight comes down
              <br />
              And is buried in the ground like a seed
              <br />
              Hidden hope yet withholding its power
              <br />
              As it waits for the hour of its need
              <br />
              <br />
              Beauty fades in the world that surrounds
              <br />
              As the shadows abound in the earth
              <br />
              Spirits ache and they groan in travail
              <br />
              As they suffer the pale pain of birth
              <br />
              <br />
              Orbital procession, spiraling 'round the sun
              <br />
              Angular momentum, circling on and on
              <br />
              Optical dissonance, see what we cannot see
              <br />
              Singular genesis, pondering what we are
              <br />
              <br />
              There were times when the sunlight came down
              <br />
              And was buried in the ground like a seed
              <br />
              Hope in bloom here unveiling its power
              <br />
              We are reaching the hour of our need
              <br />
              <br />
              Beauty shines like a flame from a spark
              <br />
              Beyond anything the dark would allow
              <br />
              Breaking through, in the darkness unfurled
              <br />
              There is light in the world even now
              <br />
              <br />
              Light wells
            </Typography>
            <hr />
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Synthetic Eclipse"
            >
              02 - Synthetic Eclipse
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              We don't need the sun to shine on us
              <br />
              Artificial light is pure enough
              <br />
              Let the tower rise to never rust
              <br />
              Stand long after we return to dust
              <br />
              <br />
              There's no reason to look to the sky
              <br />
              All creation is condemned to die
              <br />
              Let the oceans rise up to our eyes
              <br />
              'Til holy fire comes to purify
              <br />
              <br />
              Raise the shells in the name of seclusion
              <br />
              Self-made gods, enthroned in our own mind
              <br />
              Luminous spectacle against the skyline
              <br />
              Monument to our prideful kind
              <br />
              Archetype of a spiteful lie
              <br />
              <br />
              Heaven's in the sky, blacking out the sun
              <br />
              Ascension of the tide, the ending has begun
              <br />
              In the hills we cannot hide, to the mountains we can't run
              <br />
              Now hell is on the rise...oh God, what have we done?
            </Typography>
            <hr />
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Resplendence"
            >
              03 - Resplendence
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              Light before us
              <br />
              Light behind us
              <br />
              Light beside us
              <br />
              Light beneath us
              <br />
              Light above us
              <br />
              Light around us
              <br />
              Light beyond us
              <br />
              Light within us
            </Typography>
            <hr />
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Amethysts"
            >
              04 - Amethysts
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              My God, my God, it’s all gone black
              <br />
              My God, my God, I can’t go back
              <br />
              <br />
              “Abomination”, they shriek and wail when I walk by
              <br />
              If not with their mouths, still with their eyes
              <br />
              As though I have subverted nature, as though I were not made this
              way
              <br />
              An image - corrupted? - but aren’t we all?
              <br />
              Are we not called to glory all the same?
              <br />
              Am I not called “just as I am”?
              <br />
              <br />
              I am an amethyst in a world of sapphires and rubies
              <br />
              I am a mystery to the ones who thought they knew me
              <br />
              I am a heretic to the pure and pious body
              <br />
              I am an amethyst
              <br />
              But we all have the same flaws
              <br />
              <br />
              Blood on their hands, hatred in their hearts, with no sense of
              shame
              <br />
              Twisted dogma, judgment justified, corruption of a name
              <br />
              Distant and bitter, I cannot pretend I am one of them anymore
              <br />
              Let the curse relent, heaven’s recompense
              <br />
              <br />
              I am an amethyst in a world of sapphires and rubies
              <br />
              I am a heretic to the pure and pious body
              <br />
              I am a mystery to the ones who thought they knew me
              <br />
              I am an amethyst
              <br />
              But we all reflect the same light
              <br />
              We all have the same flaws
              <br />
              But we all reflect the same light
              <br />
            </Typography>
            <hr />
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Strawgod"
            >
              05 - Strawgod
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              Tenuous faith in precarious stasis
              <br />
              Frail from agonizing consciousness
              <br />
              Hollow answers wracked by endless questions
              <br />
              Swirling paradox and contradiction
              <br />
              <br />
              Attribution of imputed character
              <br />
              Doomed to destruction from the moment conceived
              <br />
              Assail the infinite with finite comprehension
              <br />
              Meaningless, the defeat attained
              <br />
              <br />
              Fear of the unknowable, who has known His mind?
              <br />
              Mystery unsearchable, or lifespring to find?
              <br />
              Dancing with divinity, a prelude to a pratfall?
              <br />
              Total trust in what you see, can you see anything at all?
              <br />
              <br />
              Blinded by the thirst for validation
              <br />
              Tragic amputation of the senses
              <br />
              Vacant eyes deny their occupation
              <br />
              A cauterization of the spirit inside
              <br />
              <br />
              The picture of deity burns in a cloud of ashen smoke
              <br />
              As an idol carved of wood and clay
              <br />
              Vanishing vapor ascends into the atmosphere
              <br />
              A universe of discourse pitiably constrained
              <br />
              <br />
              Divested omnipotence corrupts and collapses
              <br />
              Free will permitting our descent to captivity
              <br />
              Empty benevolence manifests in egoism
              <br />
              Seed of omniscience a long-lost memory
              <br />
              <br />
              (Eyes to see, but they cannot see
              <br />
              Ears to hear, but they cannot hear)
              <br />
              There's a light of revelation shining
              <br />
              But still we're standing in the way
              <br />
              It is standing at the threshold knocking
              <br />
              But we're not opening the gates
              <br />
              There's a truth beyond our desperate hope
              <br />
              Drowning under fictive stories that we tell
              <br />
              Yet they lift the flame to raze His name
              <br />
              And the torches they bear light their way to hell
            </Typography>
            <hr />
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Cherubae"
            >
              06 - Cherubae
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              <em>(this song is an instrumental)</em>
            </Typography>
            <hr />
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Fear and Bright"
            >
              07 - Fear and Bright
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              There was a time when a man was confident
              <br />
              Standing firmly on his authority
              <br />
              In denial of the consequence
              <br />
              Blinded by his own security
              <br />
              The light of life yet dimly flickering
              <br />
              Snuffed by arrogance in autonomy
              <br />
              Yet still igniting, burning, sickening
              <br />
              Unrelenting in its agony
              <br />
              <br />
              Everything changed
              <br />
              When I began to see
              <br />
              The light in everything...
              <br />
              <br />
              Swallowed up in my own darkness
              <br />
              Dead and lonesome, cold and heartless
              <br />
              At the moment I was farthest
              <br />
              I heard Your voice call me righteous
              <br />
              There You met me in my weakness
              <br />
              And breathed hope into the lifeless
              <br />
              Being conformed to Your likeness
              <br />
              All that’s left now is fear and brightness
              <br />
            </Typography>
            <hr />
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Queen of the Fire"
            >
              08 - Queen of the Fire
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              I'm the queen of the fire!
              <br />
              Can you see the passion that I inspire?
              <br />
              From afar, men watch and admire
              <br />
              Thinking I'll fulfill their every desire
              <br />
              <br />
              Don't be shy to draw near
              <br />
              Step into the light and walk without fear
              <br />
              I'm the one who brought the flame here
              <br />
              And I've kept it burning ten thousand years
              <br />
              <br />
              Come and carry the flame
              <br />
              Let it melt away your sorrow and shame
              <br />
              When you hear the message that we proclaim
              <br />
              You know that you never will be the same
              <br />
              <br />
              Look me straight in the eye
              <br />
              When I tell you that you're not gonna die
              <br />
              And if you listen close then you might
              <br />
              Not even know you've swallowed the lie
              <br />
              <br />
              Don't blink
              <br />
              Set my sights before your eyes
              <br />
              Don't think
              <br />
              Let my thoughts consume your mind
              <br />
              Don't speak
              <br />
              My voice will provide the words
              <br />
              <br />
              (Breathe...)
              <br />
              Feel like I'm wandering lost in the darkness
              <br />
              And I've been searching for myself
              <br />
              (Think...)
              <br />
              Words disappearing into the noise
              <br />
              As if I'm talking to myself
              <br />
              (Rage...)
              <br />
              My mind is running away from its captor
              <br />
              Finally thinking for myself
              <br />
              (Speak...)
              <br />
              I'm looking upward and not looking backward
              <br />
              Believing in myself
              <br />
              <br />
              Child, I know there are others
              <br />
              Who tell you that our way is wrong
              <br />
              They simply cannot see the vision
              <br />
              The program we must carry on
              <br />
              This
              <br />
              Is
              <br />
              Our
              <br />
              World
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Heliamartha"
            >
              09 - Heliamartha
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              Kinetic impulse, artifact of inception, stirring deep within
              <br />
              Drawing the mind into the vast expanse of reality, beyond
              perception and perspicuity
              <br />
              A radiance that blinds, invisible to the eye, inviting into its
              warmth
              <br />
              The essence of everything, the energy inspiring the symphony of
              the stars
              <br />
              <br />
              Aim for the sun, never bending
              <br />
              Our guilty minds unrelenting
              <br />
              We've missed the mark, altered angles
              <br />
              Suffering with fallen angels
              <br />
              <br />
              Consequence of defiance
              <br />
              We've lost the light of guidance
              <br />
              Trapped in our own indifference
              <br />
              We walk circles through the wilderness
              <br />
              <br />
              Aim for the sun, never bending
              <br />
              Raise to the sky praise unending
              <br />
              With every breath make me empty
              <br />
              'Til shepherds' gates grant me entry
              <br />
              Like light we fall in endless rays
              <br />
              Like particles becoming waves
              <br />
              Like life reborn we lift our souls
              <br />
              Like waves becoming particles
              <br />
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Adamah, Anima"
            >
              10 - Adamah, Anima
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              Dust, lifeless dust, drowning in the waters
              <br />
              Called to arise, claiming its worth
              <br />
              Hands, fragile hands, groping in the darkness
              <br />
              Groan in travail, aching for birth
              <br />
              <br />
              Drawn from the ground, molded by the potter
              <br />
              Earthen vessel for divine breath
              <br />
              Darkened mind susceptible to deception
              <br />
              Cursed with an endless lineage of death
              <br />
              <br />
              First to rise, first among the fallen
              <br />
              Bringing destruction for all time
              <br />
              Renewed life implies a new creation
              <br />
              Perfect promise, human redefined
              <br />
              <br />
              Out of dust, into dust
              <br />
              (Error revealing)
              <br />
              Out of light, into dark
              <br />
              (Bearer of healing)
              <br />
              <br />
              I will pour out My spirit on all flesh (Anima)
              <br />
              Filling the lifeless mud with My own breath (inspiration)
              <br />
              Raising the firstborn from among the dead (adamah)
              <br />
              I will pour out My spirit on all flesh (animation)
              <br />
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Fallow Soil"
            >
              11 - Fallow Soil
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              Far across the vacant landscape, a restless farmer wanders sowing
              <br />
              As he watches from his homestead, what he planted is not growing
              <br />
              Rising, he surveys the ground and finds it barren, as if sleeping
              <br />
              Patiently, he listens to the earth to hear its bitter weeping
              <br />
              <br />
              What has happened in my absence to my precious planted vineyard?
              <br />
              Selfish servants failed their tending, turning thought and focus
              inward
              <br />
              Without their cooperation, still my plan is moving forward
              <br />
              What once was will be again when I renew my blessed orchard
              <br />
              <br />
              Though the land be dead and fruitless, there is hope yet for its
              sighing
              <br />
              Where the birds flew, I built a scarecrow, arms outstretched to
              ward their flying
              <br />
              Where the rocks made soil shallow, I removed them from their
              sources
              <br />
              Where the thorns grew, I ripped them up and wove a crown out of
              their corpses
              <br />
              <br />
              I saw the stones buried in the ground, carved with images of faces
              proud
              <br />
              Clutched in a hand naught but bone, for life cannot sprout from
              stone
              <br />
              I watched the vultures circle in the sky, revealing where the
              carrion lies
              <br />
              Where the bodies were taken away on the bloodstained rapture day
              <br />
              I saw the chaff and the choking weeds, swallowing light with
              ruthless greed
              <br />
              Their fate is on the threshing floor to be trampled forevermore
              <br />
              I watched the fields at first light, driving away the cloak of
              night
              <br />
              The kernels that fell and were crushed began to reach out to the
              sun
              <br />
              <br />
              What will I do with your barren hearts?
              <br />
              I will till and I'll plow to turn over the ground
              <br />
              What will I do with your fallow souls?
              <br />
              I will sow and I'll reap sixtyfold for my keep
              <br />
              What will I do with your barren hearts?
              <br />
              I will till and I'll plow to turn over the ground
              <br />
              What will I do with your fallow souls?
              <br />
              I will sow and I'll reap a hundredfold for my keep
              <br />
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="The Devil's Miracles"
            >
              12 - The Devil's Miracles
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              I wear the lion’s mane, I grin and bare my teeth
              <br />
              A captivating mask with nothing underneath
              <br />
              I am the angel of light in this masquerade
              <br />
              With open arms, they welcome my charade
              <br />
              <br />
              I have a host of slaves among the righteous ones
              <br />
              My heart swelled with pride when they were called my sons
              <br />
              To the one who bows, I offer everything
              <br />
              I hold the power of death, come and feel its sting
              <br />
              <br />
              I have come from roving back and forth across the land
              <br />
              I am the new god who devours sacrifice
              <br />
              I fill hearts with deceit and greed, ‘til disciples are struck
              dead
              <br />
              I am the lawless one, worker of wonders and weaver of lies
              <br />
              <br />
              I speak with silver tongue, drunk deep on blood and gold
              <br />
              I take their guilt away and return it sevenfold
              <br />
              I turned those rivers to blood and I rained down frogs from the
              sky
              <br />
              I wear the lion’s mane and I’ll stalk you ‘til you die
              <br />
              <br />
              But I, even I, shudder in fear when the Holy One draws near
              <br />
              I feel the burn of eternal flame at the mention of His name
              <br />
              I set the world against His plan, had my soldiers kill the man
              <br />
              And I tore my flesh on that day when He walked out of His grave
              <br />
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Goannai"
            >
              13 - Goannai
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              <em>(this song is an instrumental)</em>
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Residence Altar"
            >
              14 - Residence Altar
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              naked - nakedness exposed
              <br />
              nothing - naught in which to boast
              <br />
              crawling - crawling to the flame
              <br />
              burning - burn away my name
              <br />
              dying - death for all my pride
              <br />
              living - life of sacrifice
              <br />
              offering - offering my soul
              <br />
              letting - letting go of hope
              <br />
              in myself, there is no salvation
              <br />
              i cannot drag this soul to heaven
              <br />
              in myself, there is no power to redeem
              <br />
              yet this weakness is stronger than it seems
              <br />
              inside the fire i reside because Your spirit there abides
              <br />
              remember not the empty days, letting the holy fill me
              <br />
              my will turned over here to die, my stubborn heart to sanctify
              <br />
              surrender to the searing light, seeking my life will kill me
              <br />
              count the cost, knowing what i’ll suffer
              <br />
              from now on, cast no gaze on the life of the former
              <br />
              turn around and run, escaping the sulfur
              <br />
              desolate black ash rains, the past is darker than fire
              <br />
              all in now, can’t look back once i enter
              <br />
              extirpate the dross, refining like silver
              <br />
              purified and whole, peaceful at my center
              <br />
              finding rest, residence on the altar
              <br />
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Awaken the Dawn"
            >
              15 - Awaken the Dawn
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              rise above the skies, fill this day with Your splendor like
              sunlight
              <br />
              baptize and sanctify all Your children transformed from death to
              life
              <br />
              blessed with righteousness, separate us from sin as east from west
              <br />
              enthroned in holiness, still You hear us when we cry out to You
              <br />
              and when our desolation dominates
              <br />
              your presence elevates
              <br />
              i will awaken the dawn, and call Your spirit across the waters and
              the skies
              <br />
              i will resolve in my soul to never falter because Your
              faithfulness is near
              <br />
              i will make melodies resonate emotion, beyond the mountains and
              the plains
              <br />
              i will awaken the dawn, and never quiet until the world exalts
              Your name
              <br />
              must i ascend to the heavens to call Your glory down?
              <br />
              we need more than a pillar of fire, more than a looming cloud
              <br />
              when we wander far from rivers of life
              <br />
              even the rock will give us water with a strike
              <br />
              bread from heaven for the starving You provide
              <br />
              i will awaken the dawn, and call Your spirit across the waters and
              the skies
              <br />
              i will resolve in my soul to never falter because Your
              faithfulness is near
              <br />
              i will make melodies resonate emotion, beyond the mountains and
              the plains
              <br />
              i will awaken the dawn, and never quiet until the world exalts
              Your name
              <br />
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Blue Agave Prism"
            >
              16 - Blue Agave Prism
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              one shot of tequila when i wake up
              <br />
              a little liquor is less expensive than hard drugs
              <br />
              do what it takes to keep this face numb
              <br />
              synthetic emotional evasion
              <br />
              i’d rather sit in silence and play dumb
              <br />
              than have to walk through life wearing makeup
              <br />
              ceramic smile to show off a fake love
              <br />
              pathetic deceptive creation
              <br />
              <br />
              i can hold my liquor, hold my liquor
              <br />
              got a hold on my liquor
              <br />
              (and my liquor's got a hold on me)
              <br />
              i can’t put my finger on the thing
              <br />
              that keeps me up at night
              <br />
              i look in this mirror, in this mirror
              <br />
              and it all seems no clearer
              <br />
              (no one’s looking back at me)
              <br />
              i see too much color in a picture
              <br />
              that should be black and white
              <br />
              <br />
              tears on a grave
              <br />
              i feel the condemnation of a soul i could not save
              <br />
              years as a slave
              <br />
              crippled with regret i’ve just been wasting away
              <br />
              look me in the eyes, we both know i am the one who should have
              died
              <br />
              what will you say when you see me on the other side?
              <br />
              <br />
              one shot of tequila when i wake up
              <br />
              maybe someday my eyelids will stay shut
              <br />
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Shadetree"
            >
              17 - Shadetree
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              behold this city, wrought by human hands
              <br />
              forty days and it should all be gone
              <br />
              against all justice, Nineveh stands
              <br />
              a blemish on the face of a vengeful God
              <br />
              this truth has burned my soul since the coming of His word
              <br />
              that repentance would preclude His holy plan
              <br />
              my fury swells at compassion so absurd
              <br />
              i reject this grace, prophecy be damned
              <br />
              <br />
              i went my own way (carve my path out of the night)
              <br />
              fleeing on the waves (occultation from Your sight)
              <br />
              driven back, your storm took hold of me
              <br />
              i could not escape
              <br />
              hopelessness i gave (countdown to catastrophe)
              <br />
              to a city depraved (paradigm iniquity)
              <br />
              terrified, they turned their backs on me
              <br />
              crying to be saved
              <br />
              <br />
              execution stayed (contrition annulling wrath)
              <br />
              by this mockery of faith (circumvented aftermath)
              <br />
              why should You defile Your character
              <br />
              with this act of grace?
              <br />
              i won’t be Your slave (power and pity at Your whim)
              <br />
              i am not afraid (slay me now instead of them)
              <br />
              let Your blazing light fall down on me
              <br />
              i’ll dwell in the shade
              <br />
              <br />
              wretched man, is it your place to twitch and writhe in anger?
              <br />
              who made you the arbiter of damnation and mercy?
              <br />
              ever hope remains for those who abdicate their evil
              <br />
              condemnation falls upon what is, but not what must be
              <br />
              shade you tended not became delight until abated
              <br />
              raging at the loss of this ephemeral provision
              <br />
              I have watched the rise and fall of all I have created
              <br />
              how your heart would burst were it reopened to this vision
              <br />
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Shade Eater"
            >
              18 - Shade Eater
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              we can’t escape
              <br />
              our past mistakes
              <br />
              <br />
              the sun, the rain
              <br />
              touch every face
              <br />
              (grace is wider than the sky)
              <br />
              <br />
              where cursed or blessed
              <br />
              You bring Your rest
              <br />
              (still His patience covers all)
              <br />
              <br />
              thus in my shame
              <br />
              i must confess...
              <br />
              (someday we will understand...)
              <br />
              <br />
              (...that we are all the same)
              <br />
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Nostalgia Nausea"
            >
              19 - Nostalgia Nausea
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              does it make you feel safe, knowing you can come home?
              <br />
              when you’re leaving behind everything that you’ve known?
              <br />
              all the memories that you can never forget
              <br />
              will they haunt your dreams with the fear of regret?
              <br />
              <br />
              does it make you feel sick, knowing you’re all alone?
              <br />
              do you tremble and shake, with a chill in your bones?
              <br />
              are you losing the will to get up and press on?
              <br />
              now that everything’s lost and everyone’s gone?
              <br />
              <br />
              all i’ve ever wanted, all that i desired, laid down at my feet
              <br />
              i took my future into my hands, following my own plans, thinking i
              was free
              <br />
              (self-made captivity)
              <br />
              now i lay my weary head down on the dirty ground, no sign of
              shelter
              <br />
              (wandering in a desert)
              <br />
              once i gorged on bread and wine, now i long to eat like swine,
              dying of hunger
              <br />
              (fill my stomach with dirt)
              <br />
              my tongue’s as dry as cotton, and i’ve almost forgotten what it’s
              like to really live
              <br />
              (taste of living water)
              <br />
              is it too late to return, cross the bridges that i’ve burned, to
              the one who can forgive
              <br />
              (the arms of my father)
              <br />
              <br />
              i remember everything
              <br />
              reminiscence sickening
              <br />
              nostalgia nausea
              <br />
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Lamppost"
            >
              20 - Lamppost
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              <em>(this song is an instrumental)</em>
            </Typography>
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-3"
              id="Wayward Stars"
            >
              21 - Wayward Stars
            </Typography>
            <Typography color="gray" className="font-normal my-2 space-y-3">
              <Typography variant="h3" color="blue-gray" className="mb-3">
                i. Asteres Planetai
              </Typography>
              <p>
                A flickering multitude piercing through blackest night
                <br />
                Erratic and chaotic patterns of sidereal light
                <br />
                Like a moth drawn in despite impending fate terrible
                <br />
                Transient glimmer of pyrite, false grace irresistible
                <br />
                <br />
                (Path of Cain) twisting the arms of fate, shift its shape with
                violence
                <br />
                (Balaam’s error) gazing upon the gleam, temporal affinity
                <br />
                (Korah’s rebellion) seeking divinity, rejection of created order
                <br />
                <br />
                The seas are sick with reefs to breach the hull before the shore
                is found
                <br />
                The land thirsts beneath the ghastly shade of waterless clouds
                <br />
                The beggars choke on breathless pleas offered at the feet of
                fruitless trees
                <br />
                Beneath a gibbous light we lose our way tossed about by wild
                waves
                <br />
                We are following the course of the wayward stars
                <br />
                Asking all the questions of who we are
                <br />
                Following the course
                <br />
                Of the wayward stars
                <br />
                Finding who we are
              </p>

              <Typography variant="h3" color="blue-gray" className="mb-3">
                ii. Cloud of Darkness
              </Typography>
              <p>
                Lower the sails, this storm is battering
                <br />
                Patch up the cracks, this ship is shattering
                <br />
                Fear in the air, the souls are scattering
                <br />
                Riding Poseidon’s wake
                <br />
                Swear I can feel the earth shake
                <br />
                <br />
                Summon your courage, spare your cowardice
                <br />
                All of your lives have led you up to this
                <br />
                Driven, if not by fame, then avarice
                <br />
                Thaumas in rage, salacious
                <br />
                Thirsty for blood berates us
                <br />
                <br />
                Darkness surrounds with fog mysterious
                <br />
                Venturing toward the grave of Nereus
                <br />
                Captain and crew appear delirious
                <br />
                If we don’t find a way through
                <br />
                We’re never gonna see blue
                <br />
                Skies or a sunset over home again
                <br />
                Nevertheless, we are the chosen men
                <br />
                Pull it together, we are stronger than
                <br />
                What any sea can send us
                <br />
                Thunder and rain won't end us
                <br />
                <br />
                We’re on our way through a cloud of darkness
                <br />
                We’re heading into the storm
                <br />
                We’re on our way through a cloud of darkness
                <br />
                We’re gonna have to press on
              </p>

              <Typography variant="h3" color="blue-gray" className="mb-3">
                iii. Oligopistides
              </Typography>
              <p>
                Each moment the storm grows darker
                <br />
                Clutched to our chests, all that we cherish
                <br />
                Whipped about by a whirlwind
                <br />
                Certain that we will perish
                <br />
                Like a little child, I close my eyes
                <br />
                And pretend this allows me to hide
                <br />
                Daddy, daddy, why are you sleeping
                <br />
                When I need you by my side?
                <br />
                <br />
                Why did we start this journey
                <br />
                When we knew such a tempest loomed?
                <br />
                The ocean which has borne us
                <br />
                Now intends to be our doom
                <br />
                In isolated terror
                <br />
                I seek vain sanctuary
                <br />
                Then comes a calm serenity
                <br />
                If only momentary
                <br />
                <br />
                Ye of little faith, how can I save you?
              </p>
              <Typography variant="h3" color="blue-gray" className="mb-3">
                iv. 40 years
              </Typography>
              <p>
                friend, i couldn’t help but notice you look a little hopeless
                <br />
                i hope this mopiness isn’t a consequence of your dopiness
                <br />
                forgive my intervention, i assure you i’ve only the best
                intentions
                <br />
                now that i have your attention, i feel compelled to mention
                <br />
                you might desire to retire that uninspiring attire
                <br />
                you’re a man of many miles but no smiles to show for it
                <br />
                if my wiles can transform your lifestyle, i say go for it
                <br />
                you can ignore my advances, but there may be no more chances
                <br />
                so i implore you to consider your finances
                <br />
                you’ve come for comfort but come up wanting
                <br />
                a fearful feeling your soul is haunting
                <br />
                it’s truer than true, though it might seem funny,
                <br />
                you just can’t top the bright gleam of money
                <br />
                oh yeah, money
                <br />
                ahh, there’s nothing like the smell, and the touch, and the
                taste
                <br />
                it’s a waste to see such a nice fellow depressed
                <br />
                but i stress what i tell you, so much trust misplaced
                <br />
                just replace your old crutch with a well-stocked account
                <br />
                it’ll turn your life around, make your life abound
                <br />
                sweep you off the ground with its joyous sound
                <br />
                you won’t be wont to recount your woes
                <br />
                when your portfolios hold more gold than you can count!
                <br />
                just twelve easy steps and you’ll be on your way
                <br />
                for twelve easy payments, but really it pays for itself
                <br />
                ten times over, with the health and wealth
                <br />
                you’re destined for prosperity
                <br />
                preserve none for posterity
                <br />
                improve your popularity
                <br />
                donate a bit to charity
                <br />
                the pinnacle of purity
                <br />
                of safety and security
                <br />
                smoother than silk
                <br />
                sweeter than honey
                <br />
                all the world revolves around money
                <br />
                that’s right, money
              </p>

              <Typography variant="h3" color="blue-gray" className="mb-3">
                v. asteres mysterioi
              </Typography>
              <p>
                where can i go from Your spirit?
                <br />
                where from Your face can i flee?
                <br />
                in the highest of heights You are there
                <br />
                in the darkest of depths You are there
                <br />
                were i to rise on the wings of the dawn
                <br />
                to sail away to the edge of the sea
                <br />
                still i would fall in the palm of Your hand
                <br />
                still i would find myself held in Your grasp
              </p>
              <Typography variant="h3" color="blue-gray" className="mb-3">
                vi. godless heaven
              </Typography>
              <p>
                hey brother
                <br />
                i’ve got news for you about your life
                <br />
                no other messenger can tell you what i can
                <br />
                hush! silence...can you hear the sound she sings sweetly
                <br />
                discover all you ever dreamed can be your reality
              </p>
              <p>
                come! welcome to our paradise, pure perfection
                <br />
                all reason, flawless and pristine, exact science
                <br />
                ideal implementation of high logic
                <br />
                revealing all the mysteries of our universal dream
              </p>
              <p>
                sensory overload, where am i? i cannot believe
                <br />
                this island kingdom fabricated by the brightest for the best
                <br />
                crystalline towers stretch as high as the eye can perceive
                <br />
                paradigm of harmony, a place to find some peace and rest
              </p>
              <p>
                don’t be concerned about the secrets that we keep
                <br />
                the machinations that sustain us while we sleep
                <br />
                our light dissimulates the darkness in the deep
                <br />
                emotions cauterized so we don’t have to weep
              </p>
              <p>
                there’s something strange about the citizens of this utopia
                <br />
                mindless homogeny, discordance met with a collective grief
                <br />
                a silent qualm beneath the calm façade of their euphoria
                <br />a grim machine to obviate all individual belief
              </p>
              <p>
                we built this city as a cenotaph for fate
                <br />
                to mute the testimony of a cosmic faith
                <br />
                the blood of dissidents this thirsty ground will sate
                <br />
                and you will join them if you stand in the way
              </p>
              <p>
                what of identity? you can’t succeed in suffocating souls
                <br />
                you are no better than automata, deterministic drive
                <br />
                this illusory paradise is no glimmering diamond, it’s black as
                coal
                <br />i must be free of it if i am to remain truly alive
              </p>
              <Typography variant="h3" color="blue-gray" className="mb-3">
                vii. choir of echoes
              </Typography>
              <p>
                an overwhelming revelation
                <br />
                the genesis of restoration
                <br />
                a harmony for all creation
                <br />
                all creatures in their right relation
                <br />
                a refuge from the devastation
                <br />
                a home for every tribe and nation
                <br />
                a song to sing with adoration
                <br />
                eternal peace without cessation
              </p>
              <p>
                a truth beyond the wildest fiction
                <br />
                complete and without contradiction
                <br />
                a pure and resolute conviction
                <br />
                from One with holy jurisdiction
                <br />
                to save His children from affliction
                <br />
                to break the bondage of addiction
                <br />
                to lead them out in benediction
                <br />
                to liberty without restriction
              </p>
              <p>
                a tingle to excite the senses
                <br />
                a clarity through darkened lenses
                <br />
                a freedom that the light dispenses
                <br />
                a mercy that forgives offenses
                <br />
                a haven for the poor defenseless
                <br />
                a wisdom that invites the senseless
                <br />
                a kingdom built without defenses
                <br />a love that moves without pretenses
              </p>
              <p>
                beyond the scope of human vision
                <br />
                constructed not of man’s decision
                <br />
                a unity without division
                <br />
                where needs are met with sure provision
                <br />
                the sick are healed, the dead are risen
                <br />
                the promised hope of true religion
                <br />
                without the trappings of tradition
                <br />
                the fountainhead of pure volition
              </p>
              <p>
                home, bring me home
                <br />
                home, bring us home
              </p>
              <Typography variant="h3" color="blue-gray" className="mb-3">
                viii. edge of the earth
              </Typography>
              <p>
                (we come now to a place which to all listeners should easily
                appear
                <br />
                we bid you close your eyes and picture there your greatest fear
                <br />
                the grimmest fate is when you find yourself unable to be what
                you’re meant to be
                <br />
                imagine, then, the sailor’s horror at the sight of no more sea…)
              </p>
              <p>
                this...this is the end
                <br />
                there’s nowhere left for us to flee
                <br />
                our journey has failed
                <br />
                we never found our destiny
                <br />
                but maybe this world
                <br />
                isn’t the world that was meant to be
                <br />
                i have yet seen
                <br />
                deep in my dreams, a new reality
              </p>
              <p>
                enough! you dare speak of dreams?
                <br />
                go back to sleep and tell me when
                <br />
                your ideas cross over into
                <br />
                the realm of men
                <br />
                fantasies come and go
                <br />
                but we are in no place to pretend
                <br />
                that there’s any hope
                <br />
                it’s all come to this...this is the end
              </p>
              <p>
                we found the limit of the everlasting ocean
                <br />
                a fatal obstacle to our persistent motion
                <br />
                the boats that brought us here can’t take us any farther
                <br />
                instead of heroes, they’ll remember us as martyrs
                <br />
                we have blasphemed the names of sacred faith and science
                <br />
                one or the other comes to punish our defiance
                <br />
                o, do you hear the knell of that returning thunder?
                <br />
                the stars that held our hands now deign to pull us under
                <br />
                we sought salvation from tyrannical oppression
                <br />
                abandoning the ways restricting our progression
                <br />
                immortal empire we raised and spread together
                <br />
                yet here we find ourselves no better off than ever
                <br />
                we dance the line between our slavery and freedom
                <br />
                maintain a balance of two contradicting kingdoms
                <br />
                afraid to sacrifice our temporal desires
                <br />
                we chase the wind until the moment we expire
              </p>
              <p>
                and so we sway
                <br />
                (back and forth and back and forth and…)
                <br />
                walking on the unbroken line
                <br />
                cycling through death and rebirth
                <br />
                holding to a moment in time
                <br />
                falling off the edge of the earth
              </p>
              <Typography variant="h3" color="blue-gray" className="mb-3">
                ix. aster proïnon / light of the Morning Star
              </Typography>
              <p>
                hey! are you awake?
                <br />
                you’ve been out for so long
                <br />
                i thought you might be gone
                <br />
                safe we’re drifting on the waves
                <br />
                the storm has passed us by
                <br />
                but there’s no end in sight
              </p>
              <p>
                look! a star shines in the distance
                <br />
                a luminous persistence
                <br />
                a goal for us to seek
                <br />
                though we row with desperation
                <br />
                toward this invitation
                <br />
                the light we cannot reach
              </p>
              <p>
                look! the star descends from heaven
                <br />
                from our horizon beckons
                <br />
                it surely begs us home
                <br />
                still our exercise is fruitless
                <br />
                the ocean’s waves are ruthless
                <br />
                we’ll sink here like a stone
              </p>
              <p>
                look! the light is drawing closer
                <br />
                our hopelessness is over
                <br />
                we’ll soon be back on land
                <br />
                wait! it walks upon the water
                <br />
                it calls us son and daughter
                <br />
                and takes us by the hand
                <br />
                out upon the sea He leads us
                <br />
                from ruin He has freed us
                <br />
                to bring us onto shore
                <br />
                home, where darkness is defeated
                <br />
                and at the gates we’re greeted
                <br />
                with light forevermore
                <br />
                with life forevermore
              </p>
              <p>
                we are following the course of the morning star
                <br />
                finding all the answers of who we are
                <br />
                following the course
                <br />
                of the morning star
                <br />
                this is who we are
              </p>
            </Typography>
          </Typography>
        </div>
      </ThemeProvider>
    </>
  );
}
