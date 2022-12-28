import Image from "next/image";
import { service_arow } from "../public/icons";
import serviceImg from "../public/media/service.png";
import Accordion from "react-bootstrap/Accordion";

type Props = {
  myRef: any;
};

export default function Services({ myRef }: Props) {
  const services = [
    {
      id: 1,
      title: "Truck Dispatch",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      title: "Accounts Payables & Accounts Receivables",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      title: "Payroll",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      title: "Safety / HR",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 5,
      title: "Fleet / maintenance",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 6,
      title: "Claims",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section ref={myRef}>
      <div className="box services_inner">
        <div className="titles_div">
          <p className="mini_title">SERVICES</p>
          <h1 className="section_title">
            What we actually can do for your <span>business</span>
          </h1>
        </div>
        <p className="p">We operate 24/7/365</p>
        <div className="services_side">
          <Image
            className="service_img"
            src={serviceImg}
            alt="services image"
          />
          <Accordion className="services_container">
            {services.map((service) => {
              return <Service key={service.id} service={service} />;
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

const Service = ({ service }: any) => {
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
};
