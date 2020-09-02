import Head from "next/head";
import styles from "../styles/Home.module.css";

import NavbarIE from "../components/Navbar";
import HeroComponent from "../components/HeroComponent";
import FormComponent from "../components/FormComponent";
import {
  faEnvelope,
  faUser,
  faPhoneAlt,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const green = [
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
          options: ["Menoufiya", "Cairo", "alexandria"],
          size: 0.5,
        },
      ],
    },
    {
      title: "Where did you here about us ?",
      data: [
        { type: "checkbox", label: "Social media" },
        { type: "checkbox", label: "Search engines" },
        { type: "checkbox", label: "A friend" },
        { type: "checkbox", label: "Other" },
      ],
    },
    {
      title: "Academic Background *",
      data: [
        { type: "radio", label: "Social media", name: "academic" },
        { type: "radio", label: "Search engines", name: "academic" },
        { type: "radio", label: "A friend", name: "academic" },
        { type: "radio", label: "Other", name: "academic" },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarIE />
      <HeroComponent />
      <div className={styles.poweredBy}>
        <span> Powered by</span>
        <img src="/powered_by.png" alt="" className="ml-5" />
      </div>
      <FormComponent data={green} />
    </div>
  );
}
