import recipify from "./public/recipify.jpg";
import forkify from "./public/forkify.jpg";
import worldwise from "./public/worldwise.jpg";
import faraway from "./public/faraway.jpg";
import node_blog from "./public/node-blog.jpg";
import chatbot from "./public/chatbot.jpg";
import trillo from "./public/trillo.jpg";
import tenzies from "./public/tenzies.jpg";
import usepopcorn from "./public/usepopcorn.jpg";
import weather from "./public/weather.webp";
import splitneat from "./public/splitneat.jpg";
import sociopedia from "./public/sociopedia.jpg";
import nexter from "./public/nexter.jpg";
import natours from "./public/natours.jpg";
import mapty from "./public/mapty.jpg";
import bank_app from "./public/bank-app.png";
import hangman from "./public/hangman.webp";
import node_farm from "./public/node-farm.jpg";
import quizzical from "./public/quizzical.webp";
import react_quizz from "./public/react-quizz.webp";
import visual from "./public/visual.png";
import hotel from "./public/hotel.jpg";
import healthbuddy from "./public/healthBuddy.png";

export const projects = [
  // {
  //   image: recipify,
  //   category: "React App",
  //   title: "Recipify",
  //   readme:
  //     "A react app where you can search for different recipes and check their cooking time and ingredients",
  //   tools: ["react", "html", "css", "tailwind", "typescript"],
  //   github_link: "https://github.com/mister-abdurahman/recipify",
  //   live_demo: "https://recipify-delta.vercel.app",
  // },
  {
    image: sociopedia,
    category: "React+Node",
    title: "Sociopedia",
    readme:
      "A sociomedia app mimicking your regular modern social media app 😍",
    tools: [
      "tailwind",
      "react",
      "redux",
      "node",
      "css",
      "typescript",
      "html",
      "mongodb",
    ],
    github_link: "https://github.com/mister-abdurahman/sociopedia-frontend",
    live_demo: "https://sociopedia-frontend-ochre.vercel.app/",
  },
  {
    image: hotel,
    category: "React+Node",
    title: "Wild Oasis (HAMS)",
    readme:
      "An hotel admin management system for managing the bookings, cabins and customers operations in the organization",
    tools: [
      "styled-component",
      "react",
      "redux",
      "supabase",
      "css",
      "typescript",
      "html",
    ],
    github_link: "https://github.com/mister-abdurahman/wild-oasis",
    live_demo: "https://wildoasis-01.netlify.app/",
  },
  {
    image: healthbuddy,
    category: "React+Node",
    title: "Health Buddy",
    readme:
      "An Health App for Patients to book appointments with doctors and see health related matters",
    tools: [
      "tailwind",
      "react",
      "redux",
      "node",
      "css",
      "typescript",
      "html",
      "mongodb",
    ],
    github_link: "https://github.com/mister-abdurahman/healthBuddy_FE",
    live_demo: "https://health-buddy-fe.vercel.app/",
  },
  {
    image: visual,
    category: "React+Node",
    title: "Visual Dashboard",
    readme:
      "A dashboard that displays different visual charts of data fetched from a MongoDB database",
    tools: [
      "tailwind",
      "react",
      "node",
      "css",
      "typescript",
      "html",
      "mongodb",
    ],
    github_link: "https://github.com/mister-abdurahman/blackcoffer_frontend",
    live_demo: "https://blackcoffer-frontend-psi.vercel.app/",
  },
  {
    image: worldwise,
    category: "React+Node",
    title: "WorldWise",
    readme:
      "Track your travels, map your movements, record your best tours all in one app.",
    tools: [
      "react",
      "redux",
      "html",
      "css",
      "tailwind",
      "javascript",
      "typescript",
      "node",
    ],
    github_link: "https://github.com/mister-abdurahman/worldwise",
    live_demo: "https://worldwise-delta.vercel.app",
  },
  // {
  //   image: forkify,
  //   category: "Web App",
  //   title: "forkify",
  //   readme:
  //     "A vanillaJS app to search for varities of recipes, create your own recipes and bookmark your favourites. 😍",
  //   tools: ["tailwind", "react", "css", "html"],
  //   github_link: "https://github.com/mister-abdurahman/forkify",
  //   live_demo:
  //     "https://forkify-abdurahman.netlify.app/#64edca193d03bb001490e1fb",
  // },
  {
    image: quizzical,
    category: "React App",
    title: "Quizzical",
    readme:
      "A quizz app that asks questions across all fields of study to test your IQ and knowledge span",
    tools: ["tailwind", "react", "css", "html"],
    github_link: "https://github.com/mister-abdurahman/react-quizzicalTS",
    live_demo: "https://react-quizzical-ts.vercel.app/",
  },
  {
    image: usepopcorn,
    category: "React App",
    title: "usePopcorn 🍿",
    readme:
      "A movies website react app like the popular IMDB that displays movies based on your search with their information and other useful functionalities",
    tools: ["tailwind", "react", "css", "html", "typescript"],
    github_link: "https://github.com/mister-abdurahman/usePopcorn-v1",
    live_demo: "https://use-popcorn-v1.vercel.app",
  },
  {
    image: faraway,
    category: "React App",
    title: "Far Away",
    readme:
      "Your personal assistant to ensure you take all your stuffs when planning for your vacation 🏖⛱",
    tools: ["tailwind", "react", "css", "html", "typescript"],
    github_link: "https://github.com/mister-abdurahman/far-away",
    live_demo: "https://far-away-eight.vercel.app",
  },
  {
    image: node_blog,
    category: "Node App",
    title: "Node Blogging app",
    readme:
      "A node blogging app that allows users to create, edit and delete their blogs, view other bloggers blogs.",
    tools: ["ejs", "node", "css", "html", "javascript"],
    github_link: "https://github.com/mister-abdurahman/Blogging-API",
    live_demo: "https://strange-sunglasses-moth.cyclic.app/",
  },
  {
    image: node_farm,
    category: "Node App",
    title: "Node Farm",
    readme:
      "A simple fruit app built on the node engine with html and css using the fs system.",
    tools: ["node", "css", "html", "javascript"],
    github_link: "https://github.com/mister-abdurahman/node-farm",
    live_demo:
      "https://https://node-farm-rfa3quwz7-mister-abdurahman.vercel.app",
  },
  {
    image: react_quizz,
    category: "React+Node",
    title: "Dev. Quizz",
    readme:
      "A Quizz app to test react developers skills by asking react questions",
    tools: ["tailwind", "react", "css", "html", "typescript"],
    github_link: "https://github.com/mister-abdurahman/dev-quizz",
    live_demo: "https://dev-quizz-two.vercel.app",
  },
  {
    image: natours,
    category: "Web App",
    title: "Natours",
    readme:
      "A web app to keep track of your experience with nature for your travels",
    tools: ["sass", "css", "html", "typescript", "javascript"],
    github_link: "https://github.com/mister-abdurahman/natours",
    live_demo: "https://natours-wheat-one.vercel.app",
  },
  {
    image: trillo,
    category: "Web App",
    title: "Trillo",
    readme: "A Travel Agency Web App",
    tools: ["sass", "css", "html", "typescript", "javascript"],
    github_link: "https://github.com/mister-abdurahman/trillo-travels",
    live_demo: "https://trillo-travels.vercel.app",
  },
  {
    image: nexter,
    category: "Web App",
    title: "Nexter",
    readme: "A Real estate Agency web app",
    tools: ["sass", "css", "html", "typescript", "javascript"],
    github_link: "https://github.com/mister-abdurahman/nexter",
    live_demo: "https://eloquent-stardust-af8acc.netlify.app/",
  },
  {
    image: tenzies,
    category: "React App",
    title: "Tenzies Game",
    readme: "A React Tenzies Game",
    tools: ["tailwind", "react", "css", "html", "javascript"],
    github_link: "https://github.com/mister-abdurahman/reactTenzies",
    live_demo: "https://react-tenzies-orcin-rho.vercel.app",
  },
  {
    image: weather,
    category: "React App",
    title: "Classy Weather",
    readme: "A responsive react weather app",
    tools: ["tailwind", "react", "css", "html", "typescript"],
    github_link: "https://github.com/mister-abdurahman/classy-weather",
    live_demo: "https://classy-weather-nu.vercel.app",
  },
  {
    image: chatbot,
    category: "Node App",
    title: "Restaurant Chatbot",
    readme:
      "A customer support chatbot that uses web sockets for server connection between server and client",
    tools: ["node", "css", "html", "javascript"],
    github_link: "https://github.com/mister-abdurahman/restaurant-chatbot",
    live_demo: "https://https://restaurant-chatbot-n0y4.onrender.com",
  },
  {
    image: mapty,
    category: "Web App",
    title: "Mapty",
    readme: "A web app to track your workouts",
    tools: ["css", "html", "javascript"],
    github_link: "https://github.com/mister-abdurahman/My-Mapty-App",
    live_demo: "https://my-mapty-app.netlify.app/",
  },
  {
    image: hangman,
    category: "React App",
    title: "Hangman Game",
    readme: "Guess the correct word before the man gets hanged 😅",
    tools: ["react", "css", "html", "typescript"],
    github_link: "https://github.com/mister-abdurahman/hangman-reactTS",
    live_demo: "https://elegant-peony-53ec8b.netlify.app/",
  },
  {
    image: splitneat,
    category: "React App",
    title: "Split-n-eat",
    readme: "Split the bill with your friends when you make expenses together",
    tools: ["react", "css", "html", "typescript"],
    github_link: "https://github.com/mister-abdurahman/react-split-n-eat",
    live_demo: "https://react-split-n-eat.vercel.app",
  },
  {
    image: bank_app,
    category: "Web App",
    title: "Simple Bank App",
    readme: "A simple bank app layout that shows transactions",
    tools: ["css", "html", "javascript"],
    github_link: "https://github.com/mister-abdurahman/simple-bank-app",
    live_demo: "https://bank-simple-app.netlify.app/",
  },
];
