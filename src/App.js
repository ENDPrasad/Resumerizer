import "./App.css";
import { useState, useEffect } from "react";
import Chatbot from "./components/ChatBot";
import axios from "axios";
import Response from "./components/Response";
import NavBar from "./components/NavBar";
// import wordDoc from "./assets/RamyaKarnati.docx";
import data from "./data.json";

const d = {
  significantAchievements: [
    {
      projectTitle: "eCommerce Website",
      description:
        "Developed and maintained a responsive eCommerce website for a small business using Vue.js framework. The website achieved a 50% increase in sales and a 30% decrease in bounce rate within the first three months of launch.",
      contribution:
        "Designed and developed the frontend components and user interfaces for the eCommerce website using Vue.js and JavaScript. Implemented RESTful API integrations to facilitate communication between frontend and backend components. Optimized the website for performance and ensured data exchange and functionality synchronization.",
      metrics: "50% increase in sales",
      outcomes: "Improved customer experience and conversion rate",
      ATSfriendlyKeywords: [
        "eCommerce website",
        "Vue.js framework",
        "responsive design",
        "RESTful API integrations",
        "improved customer experience",
      ],
    },
    {
      projectTitle: "Mobile App",
      description:
        "Developed a mobile app for a local restaurant using Vue.js framework. The app achieved a 4.5-star rating on the App Store and was featured in local news for its user-friendly design and intuitive features.",
      contribution:
        "Designed and developed the frontend components and user interfaces for the mobile app using Vue.js and JavaScript. Optimized the app for performance and ensured data exchange and functionality synchronization. Implemented features such as menu ordering, reservations, and loyalty programs.",
      metrics: "4.5-star rating on the App Store",
      outcomes: "Increased customer engagement and satisfaction",
      ATSfriendlyKeywords: [
        "mobile app",
        "Vue.js framework",
        "user-friendly design",
        "intuitive features",
        "increased customer engagement",
      ],
    },
    {
      projectTitle: "Design Competition",
      description:
        "Participated in a design competition for a web-based platform and won first place. The platform focused on improving accessibility for individuals with disabilities and was featured in a national magazine for its innovative design.",
      contribution:
        "Developed the frontend components and user interfaces for the web-based platform using JavaScript and CSS. Conducted user research and usability testing to ensure the platform was accessible and user-friendly. Collaborated with a team of designers and developers to implement innovative features and improve the overall user experience.",
      metrics: "First place in design competition",
      outcomes:
        "Improved accessibility and user experience for individuals with disabilities",
      ATSfriendlyKeywords: [
        "design competition",
        "accessibility",
        "innovative design",
        "user research",
        "usability testing",
      ],
    },
  ],
  ATSfriendlyKeywords: [
    "Vue.js framework",
    "JavaScript",
    "CSS",
    "frontend development",
    "RESTful API integrations",
  ],
};

function App() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const API_KEY = data.API_KEY;
  // console.log(API_KEY);
  // let data = {ATSfriendlyKeywords:[], significantAchievements:[]}

  // useEffect(() => {
  //   const fn = async () => {
  //     // await handleSendMessage();
  //     await fetchQuery();
  //   };
  //   fn();
  //   // console.log(JSON.parse(output));
  // }, []);

  const fetchQuery = async () => {
    //////////////////////////////////////
    // Working code
    /////////////////////////////////////
    try {
      if (input) {
        const options = {
          method: "POST",
          url: "https://open-ai21.p.rapidapi.com/qa",
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": `${API_KEY}`,
            "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
          },
          data: {
            question:
              "Generate detailed bullet points detailing a significant achievement in a project or competition, explaining your contribution to its success with specific metrics or outcomes and ATS friendly keywords.Give me the response in JSON format and should only have two keys 'significantAcheivements' which will give at least 5 contributions  and 'ATSfriendlyKeywords' which will give ATS friendly keywords of type array",
            // "Thoroughly analyze the provided job description. Generate detailed bullet points detailing a significant achievement in a project or competition, explaining your contribution to its success with specific metrics or outcomes., and ensure integration of pertinent keywords for ATS-friendly resume optimization. Give me the response in JSON format and should only have two keys 'significantAcheivements' which will give at least 5 contributions  and 'ATSfriendlyKeywords' which will give ATS friendly keywords of type array",
            context: `${input}`,
          },
        };
        const response = await axios.request(options);
        console.log(response.data);
        setOutput(() => response.data.result);
        setInput("");
        return () => console.log("request completed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChaneHandler = (data) => {
    setInput(data);
  };
  return (
    <div className="App">
      <NavBar />
      <h2>Get the required content and ATS friendly keywords in one go 🐱‍🏍</h2>

      <Chatbot onClickHandler={fetchQuery} onChaneHandler={onChaneHandler} />
      <Response data={output ? JSON.parse(output) : ""} />
      {/* <Response data={output ? output: ""} /> */}
      {/* <iframe src={`${wordDoc}`}></iframe> */}
    </div>
  );
}

export default App;
