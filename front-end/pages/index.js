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
        },
      ],
    },
    {
      title: "Where did you here about us ?",
      data:[]
    }
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
