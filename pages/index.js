import Head from "next/head";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
import deved from "/public/me.png";
import Image from "next/image";
import maga from "/public/maga.jpg";
import maga2 from "/public/maga2.jpg";
import morowa from "/public/morowa1.jpg";
import morowa2 from "/public/morowa2.jpg";
import hora from "/public/hora.jpg";
import hora2 from "/public/hora2.jpg";
import chords from "/public/chords.jpg";
import maderas from "/public/maderas.jpg";
import maderas2 from "/public/maderas2.jpg";

const importAll = (r) => r.keys().map(r);

const frontEnd = importAll(
  require.context("/public/icons/front", false, /\.svg$/)
);
const backEnd = importAll(
  require.context("/public/icons/back", false, /\.svg$/)
);
const dbSvg = importAll(require.context("/public/icons/db", false, /\.svg$/));
const toolsSvg = importAll(
  require.context("/public/icons/tools", false, /\.svg$/)
);
const social = importAll(
  require.context("/public/icons/social", false, /\.png$/)
);
const certificates = importAll(
  require.context("/public/certificates", false, /\.png$/)
);
const services = importAll(
  require.context("/public/services", false, /\.svg$/)
);

const socialLinks = [
  "mailto:francoariel1492@gmail.com",
  "https://www.linkedin.com/in/francoariel1492/",
  "https://wa.me/+393497077518",
];

const certificatesLinks = [
  "https://www.coderhouse.com/certificados/63121203afcd2b0019f5f7fa",
  "https://www.coderhouse.com/certificados/634f6f4db5e703000e5019d7",
  "https://www.coderhouse.com/certificados/639467a13b6c94000ecd0994",
  "https://www.coderhouse.com/certificados/639467a23b6c94000ecd0997",
  "#",
];

const certificateTitle = [
  "Web Development",
  "Javascript",
  "React Js",
  "Front End Developer Degree",
  "PC - Repair",
];

const certificatesDescription = [
  "Website development using html and css, version control with Git, preprocessors, SEO, libraries and frameworks.",
  "Development of web applications with Javascript, introduction to libraries and frameworks, AJAX, fetch, promises, API.",
  "SPA - Ecommerce application development. Work with components with React Js. Backend simulation with Firebase.",
  "Bootcamp that I started in June 2022 and ended in December 2022. Includes the 3 previous certificates.",
  "PC repair course that I attended at the UTN Munro headquarters in 2010",
];

const servicesTitles = ["Beautiful Designs", "Teamwork", "Code your dream"];

const servicesInfo = [
  "Our goal will be create a professional-level design that fully meets your expectations.",
  "The fast-growing nature of our industry demands that we forge new connections and foster teamwork to achieve greater success and reach new heights.",
  "Are you equipped with the 2023 application? Let's work together to make it a success!",
];

const myInfo = `Hello there! My friends call me Napo, and I'm thrilled to meet
you. I'm a web developer with a passion for learning and a love of
collaboration. As for my personal interests, I speak English,
Spanish, and Italian fluently, and I've had the opportunity to use
my language skills to connect with people from all over the world.
When I'm not coding, you'll find me playing guitar or planning my
next adventure abroad.`;

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Parente - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-3xl">{"</>"}</h1>
            <ul className="flex items-center">
              <li>
                {!darkMode ? (
                  <BsFillMoonFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                ) : (
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1YV0kVvhsgOJrYe9o7Yn0uqpyZiIKm-1w/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Franco Ariel Parente
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full Stack Engineer MERN
            </h3>
            <p className="text-md leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              {myInfo}
            </p>
            <div className="mx-auto  w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="webimg" />
            </div>
            <div className="py-5 m-5">
              <h3 className="text-2xl py-2 font-medium dark:text-white md:text-6xl">
                Front End Skills
              </h3>
              <div className="text-5xl flex flex-wrap justify-center gap-16 py-5 text-gray-600 dark:text-gray-400 p-5 m-5">
                {frontEnd.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    className="rounded-lg object-contain"
                    width={"100%"}
                    height={"100%"}
                    alt="webimg"
                  />
                ))}
              </div>
              <h3 className="text-2xl py-2 font-medium dark:text-white md:text-6xl">
                Back End Skills
              </h3>
              <div className="text-5xl flex flex-wrap justify-center gap-16 py-5 text-gray-600 dark:text-gray-400 p-5 m-5">
                {backEnd.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    className="rounded-lg object-contain"
                    width={"100%"}
                    height={"100%"}
                    alt="webimg"
                  />
                ))}
              </div>
              <h3 className="text-2xl py-2 font-medium dark:text-white md:text-6xl">
                D B
              </h3>
              <div className="text-5xl flex flex-wrap justify-center gap-16 py-5 text-gray-600 dark:text-gray-400 p-5 m-5">
                {dbSvg.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    className="rounded-lg object-contain"
                    width={"100%"}
                    height={"100%"}
                    alt="webimg"
                  />
                ))}
              </div>
              <h3 className="text-2xl py-2 font-medium dark:text-white md:text-6xl">
                TOOLS
              </h3>
              <div className="text-5xl flex flex-wrap justify-center gap-16 py-5 text-gray-600 dark:text-gray-400 p-5 m-5">
                {toolsSvg.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    className="rounded-lg object-contain"
                    width={"100%"}
                    height={"100%"}
                    alt="webimg"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="text-center">
          <h3 className="text-2xl py-2 font-medium dark:text-white md:text-6xl">
            Studies
          </h3>
          <div className="flex flex-wrap justify-around gap-5 p-5 m-5">
            {certificates.map((image, index) => (
              <div
                key={index}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <a href={certificatesLinks[index]}>
                  <Image
                    src={image}
                    layout="responsive"
                    objectFit="contain"
                    width={"100%"}
                    height={"100%"}
                    alt="webimg"
                  />
                </a>
                <div className="p-5">
                  <a href={certificatesLinks[index]}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {certificateTitle[index]}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {certificatesDescription[index]}
                  </p>
                  <a
                    href={certificatesLinks[index]}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Certificate
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl py-2 font-medium dark:text-white md:text-6xl">
              Services
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since I began my career as a web developer, I have created
              different websites in which I have had the pleasure of
              collaborating with very{" "}
              <span className="text-teal-500">talented people</span>, and I have
              been able to develop{" "}
              <span className="text-teal-500">my own ideas</span> that emerged
              in the middle of the learning period.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              What I like to provide when developing a project is
            </p>
          </div>
          <div className="lg:flex gap-10">
            {services.map((image, index) => (
              <div
                key={index}
                className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1"
              >
                <Image src={image} width={100} height={100} alt="webimg" />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  {servicesTitles[index]}
                </h3>
                <p className="py-2">{servicesInfo[index]}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="pt-10 text-center">
          <div>
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Portfolio
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl pb-10">
              And here are some of the projects I ve been working on 💻
            </h3>
          </div>
          <div className="flex flex-col gap-1 py-1 lg:flex-row lg:flex-wrap pt-10">
            <h3 className="basis-2/3 flex-1 text-2xl py-2 dark:text-white md:text-3xl">
              📸 Magali Moris Fotografia - Freelance Project 🐶
            </h3>
            <p className="basis-2/3 flex-1 text-md leading-8 text-gray-800 dark:text-gray-200">
              I have had the incredible pleasure of working with Magali, a
              professional photographer who is dedicated to capturing images of
              our greatest friends.
            </p>
            <a
              className="basis-2/3 flex-1 text-2xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-3xl"
              href="https://github.com/francoariel1492/Magali-Moris-Fotografia"
            >
              Github Repo
            </a>
            <div className="basis-1/3 flex-1 ">
              <a href="https://francoariel1492.github.io/Magali-Moris-Fotografia/">
                <Image
                  className="rounded-lg object-contain"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={maga}
                  alt="webimg"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://francoariel1492.github.io/Magali-Moris-Fotografia/">
                <Image
                  className="rounded-lg object-contain"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={maga2}
                  alt="webimg"
                />
              </a>
            </div>
            <h3 className="basis-2/3 flex-1 text-2xl py-2 dark:text-white md:text-3xl">
              👚 Morowa Clothes - Ecommerce Project 🛒
            </h3>
            <p className="basis-2/3 flex-1 text-md leading-8 text-gray-800 dark:text-gray-200">
              I made a clothing store for some friends from Mendoza Argentina as
              a project for the React Js course.
            </p>
            <a
              className="basis-2/3 flex-1 text-2xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-3xl"
              href="https://github.com/francoariel1492/ecomerce-parente34800"
            >
              Github Repo
            </a>
            <div className="basis-1/3 flex-1">
              <a href="https://morowaindumentaria.netlify.app/">
                <Image
                  className="rounded-lg object-contain"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={morowa}
                  alt="webimg"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://morowaindumentaria.netlify.app/">
                <Image
                  className="rounded-lg object-contain"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={morowa2}
                  alt="webimg"
                />
              </a>
            </div>
            <h3 className="basis-2/3 flex-1 text-2xl py-2 dark:text-white md:text-3xl">
              ✈️ Hora de Viajar - Travel Advisor App 🛫
            </h3>
            <p className="basis-2/3 flex-1 text-md leading-8 text-gray-800 dark:text-gray-200">
              Own project of a website that explains how to obtain Working
              Holiday Visas in different countries according to one s
              nationality.
            </p>
            <a
              className="basis-2/3 flex-1 text-2xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-3xl"
              href="https://github.com/francoariel1492/Hora-de-Viajar"
            >
              Github Repo
            </a>
            <div className="basis-1/3 flex-1">
              <a href="https://francoariel1492.github.io/Hora-de-Viajar/">
                <Image
                  className="rounded-lg object-contain"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={hora}
                  alt="webimg"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://francoariel1492.github.io/Hora-de-Viajar/">
                <Image
                  className="rounded-lg object-contain"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={hora2}
                  alt="webimg"
                />
              </a>
            </div>
            <h3 className="basis-2/3 flex-1 text-2xl py-2 dark:text-white md:text-3xl">
              🎸 Maderas Musicales - Music Shop/School - 🎶
            </h3>
            <p className="basis-2/3 flex-1 text-md leading-8 text-gray-800 dark:text-gray-200">
              I did this work for the javascript course, it is a luthier
              workshop that is in charge of selling wood for the construction of
              musical instruments, selling instruments built to suit the
              musicians and also works as a training school for those who want
              to develop as luthiers.
            </p>
            <a
              className="basis-2/3 flex-1 text-2xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-3xl"
              href="https://github.com/francoariel1492/Maderas-Musicales"
            >
              Github Repo
            </a>
            <div className="basis-1/3 flex-1">
              <a href="https://francoariel1492.github.io/Maderas-Musicales/">
                <Image
                  className="rounded-lg object-contain"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={maderas2}
                  alt="webimg"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://francoariel1492.github.io/Maderas-Musicales/">
                <Image
                  className="rounded-lg object-contain"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={maderas}
                  alt="webimg"
                />
              </a>
            </div>
            <h3 className="basis-2/3 flex-1 text-2xl py-2 dark:text-white md:text-3xl">
              🎶 Wonderful Chords 🎶
            </h3>
            <p className="basis-2/3 flex-1 text-md leading-8 text-gray-800 dark:text-gray-200">
              This is the last work I did and it is a website that shows a
              random chord progression that sounds excellent for Ukulele.
            </p>
            <a
              className="basis-2/3 flex-1 text-2xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-3xl"
              href="https://github.com/francoariel1492/wonderfulchords"
            >
              Github Repo
            </a>
            <div className="basis-1/3 flex-1">
              <a href="https://francoariel1492.github.io/wonderfulchords/">
                <Image
                  className="rounded-lg object-contain"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={chords}
                  alt="webimg"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Contact me
          </h2>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          Did you enjoy my work? Are you interested in learning more or working with me? Feel free to add me and I will respond as soon as possible.
          </p>
          <div className="gap-5 flex flex-row justify-center py-10">
            {social.map((image, index) => (
              <a key={index} href={socialLinks[index]}>
                <Image
                  key={index}
                  src={image}
                  className="rounded-lg object-contain"
                  width={"50%"}
                  height={"50%"}
                  alt="webimg"
                />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
