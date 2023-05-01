/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { supabase } from '../../supabaseClient';
import { useState } from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";


<>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./layout.css"></link>
  </>

function getJoke() {
  fetch('https://v2.jokeapi.dev/joke/Any?type=single&safe-mode')
    .then(response => response.json())
    .then(data => {
      const jokeElement = document.getElementById('joke');
      jokeElement.innerHTML = data.joke;
    })
    .catch(error => console.log(error));
}

getJoke();


 function modulo(number, mod) {
  let result = number % mod;
  if (result < 0) {
    result += mod;
  }
  return result;
}

function setUpCarousel(carousel) {
  function handleNext() {
    currentSlide = modulo(currentSlide + 1, numSlides);
    changeSlide(currentSlide);
  }

  function handlePrevious() {
    currentSlide = modulo(currentSlide - 1, numSlides);
    changeSlide(currentSlide);
  }

  function changeSlide(slideNumber) {
    carousel.style.setProperty('--current-slide', slideNumber);
  }

  // get elements
  const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
  const buttonNext = carousel.querySelector('[data-carousel-button-next]');
  const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');

  // carousel state we need to remember
  let currentSlide = 0;
  const numSlides = slidesContainer.children.length;

  // set up events
  buttonPrevious.addEventListener('click', handlePrevious);
  buttonNext.addEventListener('click', handleNext);
}

const carousels = document.querySelectorAll('[data-carousel]');
carousels.forEach(setUpCarousel);


const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
  },
  {
    text: "Examples",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

function Gamelibrary() {
  const [myGames, setMyGames] = useState([]);
  async function getGames() {
    let { data: Games, error } = await supabase
      .from('Games')
      .select('*')
    setMyGames(Games);
  }
  // getGames();
  return (
    <>
    <button type='button' class='btn btn-primary' onClick={getGames}>Some of my favorite games</button>
    <table border ="1" id='gametab'>
    {
      myGames.map(g => (
        <tr>
          <td>{g.title}</td>
          <td>{g.rank}</td>
          <td>{g.experience}</td>
        </tr>
      ))
    }
    </table>
    </>
  )
}



const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage id="sasoripfp"
        src="https://steamuserimages-a.akamaihd.net/ugc/840330163396078759/FFC584FB3BB2EC1E2A033F1639D39A11BFCB826F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        loading="eager"
        width={400}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Sneshie's drop zone!</b>
      </h1>
      <p class={styles.intro}>
        <b>Socials:</b>{" "}
        <a href="https://www.twitch.tv/sneshie">Twitch</a> | <a href="https://twitter.com/SneshNB/">Twitter</a> | 
        <a href="https://www.instagram.com/todaysmucksesh/"> Instagram</a> | <a href="https://medal.tv/u/Sneshie"> Medal.tv</a>
        <br />
        Thanks for stopping by! Check out some of my social pages to 
        keep up-to-date with what I'm currently working on.  
      </p>
      <h2>Here's a Joke for You:</h2><p id="joke"></p>
    </div>

    <body class="carousel_attempt">
  <div class="carousel" data-carousel>
    <div class="carousel-buttons">
      <button
        class="carousel-button carousel-button_previous"
        data-carousel-button-previous
      >
        <span class="fas fa-chevron-circle-left"></span>
      </button>
      <button
        class="carousel-button carousel-button_next"
        data-carousel-button-next
      >
        <span class="fas fa-chevron-circle-right"></span>
      </button>
    </div>
    <div class="slides" data-carousel-slides-container>
      <div class="slide">
        <iframe title="clip 1" width="560" height="315" src="https://www.youtube.com/embed/TXpmBJxN-s8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="slide">
        <iframe title="clip 2" width="560" height="315" src="https://www.youtube.com/embed/yp8xWqaigCs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="slide">
        <iframe title="clip 3" width="560" height="315" src="https://www.youtube.com/embed/IhCe5UsVdZg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
    </div>
  </div>
</body>
<h1>More about me:</h1>
  <Gamelibrary />


  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
