import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form";
import Header from "../components/Header/Header";
import Info from "../components/Info";
import Recruiting from "../components/Recruiting";
import Services from "../components/Services";
import Spinner from "../components/Spinner/Spinner";
import { url } from "./_app";

export default function Home() {
  const BASE_URL = "https://admin.argloballogistic.com/api";

  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSucces, setIsSucces] = useState<boolean>(false);

  const aboutRef = useRef();
  const servicesRef = useRef();
  const recruitingRef = useRef();
  const contactRef = useRef();

  const [allInfo, setAllInfo] = useState<any>({});
  const [translations, setTranslations] = useState<any>({});
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");

  let translationsArray: any = [];

  useEffect(() => {
    if (router.locale === "en") {
      axios
        .get(BASE_URL + "/translations")
        .then((res) => {
          const data = res.data.data;
          data.forEach((translation: any) => {
            translationsArray.push({
              [translation.key]: translation.val.en,
            });
          });
          let english = {};
          for (let i = 0; i < translationsArray.length; i++) {
            Object.assign(english, translationsArray[i]);
          }
          setTranslations(english);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
      axios
        .get(BASE_URL + "/site-info")
        .then((res) => {
          setAllInfo(res.data.data);
          setAddress(res.data.data.address.en);
          setTitle(res.data.data.title.en);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    } else if (router.locale === "ru") {
      axios
        .get(BASE_URL + "/translations")
        .then((res) => {
          const data = res.data.data;
          data.forEach((translation: any) => {
            translationsArray.push({
              [translation.key]: translation.val.ru,
            });
          });
          let russian = {};
          for (let i = 0; i < translationsArray.length; i++) {
            Object.assign(russian, translationsArray[i]);
          }
          setTranslations(russian);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
      axios
        .get(BASE_URL + "/site-info")
        .then((res) => {
          setAllInfo(res.data.data);
          setAddress(res.data.data.address.ru);
          setTitle(res.data.data.title.ru);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [router.locale]);

  interface Information {
    [key: string]: any;
  }

  const information: Information = {
    phone_number: allInfo.phone_number,
    email: allInfo.email,
    address: address,
    map: allInfo.map,
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang="x-default" href={url} />
        <link rel="alternate" hrefLang="en" href={`${url}/en`} />
        <title>{title}</title>
        <meta name="description" content={translations.desc} />
        <link rel="icon" href={allInfo.md_favicon_path} />
      </Head>
      <Header
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        recruitingRef={recruitingRef}
        contactRef={contactRef}
        setIsLoading={setIsLoading}
        translations={translations}
      />
      <main>
        <Info myRef={contactRef} translations={translations} />
        <About myRef={aboutRef} translations={translations} />
        <Services
          myRef={servicesRef}
          translations={translations}
          BASE_URL={BASE_URL}
        />
        <Recruiting
          myRef={recruitingRef}
          formRef={contactRef}
          translations={translations}
        />
        <Contact
          information={information}
          myRef={contactRef}
          translations={translations}
        />
        <Form
          url={BASE_URL}
          translations={translations}
          setIsSucces={setIsSucces}
        />
      </main>
      <Footer translations={translations} />
      <Spinner isLoading={isLoading} setIsLoading={setIsLoading} />
      <p className={isSucces ? "success show" : "success"}>
        {translations.message}
      </p>
    </>
  );
}
