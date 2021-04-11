/* eslint-disable no-useless-escape */
import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "FullStack Developer", // e.g: 'Name | Developer'
  lang: "en, ge, rus", // e.g: en, es, fr, jp
  description: "Welcome to my website", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "",
  name: "Vakhtang Nodadze",
  subtitle: `I'm a Front-End Developer.`,
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne: `I am a Front-End developer with 4 years of experience. While I am efficient in both stacks, my expertise is in building scalable 
    ReactJS applications with the best practices available. My passion is developing as efficient, maintainable and clean code as possible.`,
  paragraphTwo: `I thrive in new and uncharted waters. While I have accumulated quite a bit of knowledge, I am always ready to learn new things from people more
    experienced than me. I\'ve mostly worked in small startups up to 10-15 people, which gave me good appreciation for teamwork and skyrocketed my knowledge in 
    different areas, as often times I needed to do something totally new.`,
  paragraphThree:
    "I am a hard-worker, a passionate and a goal-driven person, who loves what he does and is always looking for better way to do it.",
  resume:
    "https://drive.google.com/drive/folders/1b9rp1LFYJvGkiU2Q-DG6iOQpBcUCpbyT", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "sorting.png",
    title: "Sorting Visualizer",
    info: `This is a sorting visualizer using some of the most famous sorting algorithms like quick sort, insertion sort, bubble sort so on.
    It's built in typescript and used context api to prevent prop drilling.`,
    info2: "",
    url: "https://vakhonodadze.github.io/Sorting_Visualizer/",
    repo: "https://github.com/VakhoNodadze/Sorting_Visualizer", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "BookAPI.png",
    title: "Book Store with Redux",
    info: `I used Redux to fetch Books from a google API and render them. You can also view each books details seperately and like and deslike them putting 
      it in favourites page`,
    info2: "",
    url: "https://vakhonodadze.github.io/Book-API/",
    repo: "https://github.com/VakhoNodadze/Book-API", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "sudoku.png",
    title: "Sudoku",
    info: `Created a sudoku game from scratch. Used custom algorithms. It generate random numbers and start filling the board following sudoku rules.
      If there is a duplicate in row, column or the box(3x3), it fill generate another random number and try that. After filling the board, it backtracks, deleting
      numbers from cells randomly, but only leaving one possible win scenario`,
    info2: `Player can choose different difficulty from easy to hard. Player can restart the game. If he/she breaks the rules, the 
      duplicate numbers will go red.`,
    url: "https://vakhonodadze.github.io/Sudoku/",
    repo: "https://github.com/VakhoNodadze/Sudoku", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "natours.png",
    title: "Tourist Company Page",
    info:
      "Built in pure HTML and SCSS. One of the most beautiful websites I have ever built. Taught me a lot about using SCSS, components and deviding code",
    info2: "",
    url: "https://vakhonodadze.github.io/Natours/",
    repo: "https://github.com/VakhoNodadze/Natours", // if no repo, the button will not show up
  },
];

export const blogsData = [
  {
    id: nanoid(),
    img: "react.jpeg",
    title: "How React Works Under the Hood",
    info: `I talk about React and how it works under the hood to show and teach the inside workings about this beautiful library`,
    url:
      "https://medium.com/javascript-in-plain-english/how-react-works-under-the-hood-277356c95e3d",
  },
  {
    id: nanoid(),
    img: "closures.jpeg",
    title: "Closures in Javascript",
    info: `I talk about React and how it works under the hood to show and teach the inside workings about this beautiful library`,
    url:
      "https://medium.com/javascript-in-plain-english/closures-in-javascript-47df75ac71a4",
  },
];
// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "vaxonodadze@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "stack-overflow",
      url: "https://stackoverflow.com/users/9042737/vakhtang-nodadze",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/vakhtang-nodadze/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/VakhoNodadze",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
