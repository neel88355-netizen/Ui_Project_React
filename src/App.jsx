import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Section_1 from "./components/Section1/Section1.jsx";
import Section_2 from "./components/Section2/Section2.jsx";

function App() {
  const users = [
    {
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Time management is an essential skill for working professionals. Balancing meetings, deadlines, and personal responsibilities requires proper planning.",
      color: "SteelBlue",
      tag: "Setisfied",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Continuous learning helps professionals stay competitive in their careers. Learning new technologies, improving communication skills",
      color: "LightSlateGray",
      tag: "Underserved",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Workplace communication plays a major role in team success. Clear and respectful communication helps avoid",
      color: "DarkCyan",
      tag: "Underbanked",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555421689-43cad7100750?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Maintaining a healthy work-life balance is important for long-term success. Taking breaks, spending time with family",
      color: "LightSkyBlue",
      tag: "Underbanked",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Professionalism in the workplace creates a positive impression. Being punctual, responsible, and respectful helps employees",
      color: "CadetBlue",
      tag: "Underbanked",
    },
  ];

  return (
    <>
      <Section_1 users={users} />
      {/* <Section_2/> */}
    </>
  );
}

export default App;
