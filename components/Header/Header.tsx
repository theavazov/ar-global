import Image from "next/image";
import styles from "./Header.module.css";
import logo from "../../public/media/logo.png";
import { chevron } from "../../public/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  aboutRef: any;
  servicesRef: any;
  recruitingRef: any;
  contactRef: any;
  setIsLoading: Function;
};

export default function Header({
  aboutRef,
  servicesRef,
  recruitingRef,
  contactRef,
  setIsLoading,
}: Props) {
  const router = useRouter();

  const [isAboutActive, setIsAboutActive] = useState<boolean>(false);
  const [isServicesActive, setIsServicesActive] = useState<boolean>(false);
  const [isRecruitingActive, setIsRecruitingActive] = useState<boolean>(false);
  const [isContactActive, setIsContactActive] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onRefClick = (ref: any) => {
    ref.current.scrollIntoView(true);
  };

  const scrollFunction = () => {
    let top = window.pageYOffset;

    if (top >= 5) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (window.innerWidth >= 880) {
      if (top >= aboutRef.current.offsetTop - 100) {
        setIsAboutActive(true);
      } else {
        setIsAboutActive(false);
      }
      if (top >= servicesRef.current.offsetTop - 100) {
        setIsAboutActive(false);
        setIsContactActive(false);
        setIsRecruitingActive(false);
        setIsServicesActive(true);
      } else {
        setIsServicesActive(false);
      }
      if (top >= recruitingRef.current.offsetTop - 100) {
        setIsAboutActive(false);
        setIsContactActive(false);
        setIsServicesActive(false);
        setIsRecruitingActive(true);
      } else {
        setIsRecruitingActive(false);
      }
      if (top >= contactRef.current.offsetTop - 100) {
        setIsAboutActive(false);
        setIsRecruitingActive(false);
        setIsContactActive(true);
      } else {
        setIsContactActive(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  // }, [router.locale]);

  return (
    <header
      className={
        isScrolled ? `${styles.header} ${styles.border}` : styles.header
      }
    >
      <div className={`box ${styles.header_inner}`}>
        <Image
          className={styles.logo}
          src={logo}
          alt="logo"
          role={"button"}
          onClick={toTop}
        />
        <div className={styles.secondary_div}>
          <nav className={styles.header_nav}>
            <button
              className={
                isAboutActive
                  ? `${styles.tipa_link} ${styles.active}`
                  : styles.tipa_link
              }
              onClick={() => onRefClick(aboutRef)}
            >
              About
            </button>
            <button
              className={
                isServicesActive
                  ? `${styles.tipa_link} ${styles.active}`
                  : styles.tipa_link
              }
              onClick={() => onRefClick(servicesRef)}
            >
              Services
            </button>
            <button
              className={
                isRecruitingActive
                  ? `${styles.tipa_link} ${styles.active}`
                  : styles.tipa_link
              }
              onClick={() => onRefClick(recruitingRef)}
            >
              Recruiting
            </button>
            <button
              className={
                isContactActive
                  ? `${styles.tipa_link} ${styles.active}`
                  : styles.tipa_link
              }
              onClick={() => onRefClick(contactRef)}
            >
              Contact
            </button>
          </nav>
          <div className={styles.extra_div}>
            <div className={styles.current_lang}>
              {router.locale} {chevron}
              <div className={styles.dropdown}>
                <nav className={styles.dropdown_menu}>
                  {router.locales?.map((singleLocale) => {
                    return (
                      <Link
                        key={singleLocale}
                        href={router.asPath}
                        locale={singleLocale}
                      >
                        {singleLocale}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
            <div className={styles.hamburger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
