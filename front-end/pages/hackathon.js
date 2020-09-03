import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  faEnvelope,
  faUser,
  faPhoneAlt,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

import NavbarIE from "../components/Navbar";
import HeroComponent from "../components/HeroComponent";
import FormComponent from "../components/FormComponent";

const formSetting = [
  {
    title: "Personal Information",
    data: [
      {
        type: "email",
        label: "Your Email",
        icon: faEnvelope,
        name: "email",
      },
      {
        type: "text",
        label: "Name",
        icon: faUser,
        name: "email",
      },
      {
        type: "text",
        label: "Phone Number",
        icon: faPhoneAlt,
        name: "phone",
      },
      {
        type: "text",
        label: "National ID",
        icon: faIdCard,
        name: "nationalId",
        size: 0.5,
      },
      {
        type: "select",
        label: "Governorate of Residence",
        name: "governorate",
        options: [
          "Alexandria",
          "Aswan",
          "Asyut",
          "Beheira",
          "Beni Suef",
          "Cairo",
          "Dakahlia",
          "Damietta",
          "Faiyum",
          "Gharbia",
          "Giza",
          "Ismailia",
          "Kafr El Sheikh,",
          "Luxor",
          "Matruh",
          "Minya",
          "Monufia",
          "New Valley",
          "North Sinai",
          "Port Said ",
          "Qalyubia",
          "Qena",
          "Red Sea ",
          "Sharqia",
          "Sohag",
          "South Sinai ",
          "Suez",
        ],
        size: 0.5,
      },
    ],
  },
  {
    title:
      "Choose (as much as you want) the field(s) that you are interested in.",
    data: [
      { type: "checkbox", label: "Machine learning and Data Science" },
      {
        type: "checkbox",
        label: "Internet of Things (IoT) and Embedded Systems",
      },
      { type: "checkbox", label: "Game/ App Development" },
      { type: "checkbox", label: "Cybersecurity" },
      { type: "checkbox", label: "Environmental Sciences and Engineering" },
      { type: "checkbox", label: "Renewable Energy Systems" },
      { type: "checkbox", label: "None of the above" },
    ],
  },
  {
    title: "Academic Background *",
    data: [
      { type: "radio", label: "High School (National)", name: "academic" },
      { type: "radio", label: "High School (STEM)", name: "academic" },
      { type: "radio", label: "Undergraduate", name: "academic" },
      { type: "radio", label: "Graduate", name: "academic" },
    ],
  },
  {
    title: "Where did you here about us ?",
    data: [
      {
        type: "checkbox",
        label: "Social media",
        name: "hearAbSocial mediaoutUs",
      },
      { type: "checkbox", label: "Search engines", name: "Search engine" },
      { type: "checkbox", label: "A friend", name: "A friend" },
      { type: "checkbox", label: "Other", name: "Other" },
    ],
  },

  {
    data: [
      {
        type: "textArea",
        label: "What is your major/ focus area? *",
        name: "What is your major/ focus area? *",
        subLabel: "Ex.: Mechanical Engineering/ Biochemistry/ Computer Science",
      },

      {
        type: "textArea",
        label: "Why are you participating in AppX '20 Hackathon? *",
        name: "Why are you participating in AppX '20 Hackathon? *",
      },

      {
        type: "textArea",
        label: "Are you already in a team? *",
        name: "Are you already in a team? *",
      },

      {
        type: "textArea",
        label: "Mention the name of the team (if any.)",
        name: "Mention the name of the team (if any.)",
        subLabel:
          "Please stick to ONLY ONE SPECIFIC way of writing your team name for our convenience.",
      },

      {
        type: "textArea",
        label: "Do you have any comments or inquiries?",
        name: "Do you have any comments or inquiries?",
      },
    ],
  },
];

const hackthon = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarIE />
      <HeroComponent imgUrl="/hero_image_blue.png" />
      <div className={styles.poweredBy}>
        <span> Powered by</span>
        <img src="/powered_by.png" alt="" className="ml-5" />
      </div>
      <FormComponent data={formSetting} />
    </div>
  );
};

export default hackthon;
