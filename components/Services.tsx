import Image from "next/image";
import { service_arow } from "../public/icons";
import serviceImg from "../public/media/service.png";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

type Props = {
  myRef: any;
  translations: any;
  BASE_URL: string;
};

export default function Services({ myRef, translations, BASE_URL }: Props) {
  const router = useRouter();
  const [services, setServices] = useState<any>([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/faq")
      .then((res) => {
        setServices(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [router.locale]);

  return (
    <section ref={myRef}>
      <div className="box services_inner">
        <div className="titles_div">
          <p className="mini_title">{translations.services}</p>
          <h1 className="section_title">
            {translations.service_title} <span>{translations.business}</span>
          </h1>
        </div>
        <p className="p">{translations.operate} 24/7/365</p>
        <div className="services_side">
          <Image
            className="service_img"
            src={serviceImg}
            alt="services image"
            priority={true}
          />
          <Accordion className="services_container">
            {services.map((service: any) => {
              if (router.locale === "en") {
                let question = service.question.en;
                let answer = service.answer.en;
                return (
                  <Accordion.Item
                    key={service.id}
                    eventKey={service.id}
                    className="service"
                  >
                    <Accordion.Header className="service_header">
                      <p dangerouslySetInnerHTML={{ __html: question }}></p>
                      {service_arow}
                    </Accordion.Header>
                    <Accordion.Body className="service_body">
                      <div
                        className="faq_body"
                        dangerouslySetInnerHTML={{ __html: answer }}
                      ></div>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              } else if (router.locale === "ru") {
                let question = service.question.ru;
                let answer = service.answer.ru;
                return (
                  <Accordion.Item
                    key={service.id}
                    eventKey={service.id}
                    className="service"
                  >
                    <Accordion.Header className="service_header">
                      <p dangerouslySetInnerHTML={{ __html: question }}></p>
                      {service_arow}
                    </Accordion.Header>
                    <Accordion.Body className="service_body">
                      <div
                        className="faq_body"
                        dangerouslySetInnerHTML={{ __html: answer }}
                      ></div>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              }
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

const Service = ({ service, router }: any) => {
  if (router.locale === "en") {
    return (
      <Accordion.Item eventKey={service.id} className="service">
        <Accordion.Header className="service_header">
          <p>{service.title}</p>
          {service_arow}
        </Accordion.Header>
        <Accordion.Body className="service_body">
          <p className="p">{service.text}</p>
        </Accordion.Body>
      </Accordion.Item>
    );
  } else if (router.locale === "ru") {
    return (
      <Accordion.Item eventKey={service.id} className="service">
        <Accordion.Header className="service_header">
          <p>{service.title}</p>
          {service_arow}
        </Accordion.Header>
        <Accordion.Body className="service_body">
          <p className="p">{service.text}</p>
        </Accordion.Body>
      </Accordion.Item>
    );
  }
};
