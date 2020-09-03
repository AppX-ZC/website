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
    title: "Where did you here about us ?*",
    data: [
      { type: "checkbox", label: "Social media", name: "Social media" },
      { type: "checkbox", label: "Search engines", name: "Search engines" },
      { type: "checkbox", label: "A friend", name: "A friend" },
      { type: "checkbox", label: "Other", name: "Other" },

      {
        type: "textArea",
        label: "Do you have any comments or inquiries?",
        name: "comments",
      },
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
];

const summit = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarIE />
      <HeroComponent imgUrl="/hero_image_green.png" />
      <div className={styles.poweredBy}>
        <span> Powered by</span>
        <img src="/powered_by.png" alt="" className="ml-5" />
      </div>
      <FormComponent data={formSetting} />
    </div>
  );
};

export default summit;
