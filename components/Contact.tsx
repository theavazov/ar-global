import { useEffect } from "react";

type Props = {
  information: any;
  myRef: any;
};

export default function Contact({ information, myRef }: Props) {
  return (
    <section ref={myRef}>
      <div className="box">
        <div className="contact_inner myBox">
          <div className="contact_content">
            <div className="titles_div">
              <p className="mini_title">Location</p>
              <h1 className="section_title">
                We are located in the <span>IT park office</span>
              </h1>
            </div>
            <div className="contact_information">
              <div className="contact_child">
                <p>Contacts:</p>
                <a href={`tel: ${information.phone_number}`} className="p">
                  {information.phone_number}
                </a>
              </div>
              <div className="contact_child">
                <p>Email:</p>
                <a href={`mailto: ${information.email}`} className="p">
                  {information.email}
                </a>
              </div>
              <div className="contact_child">
                <p>Address:</p>
                <p className="p">{information.address}</p>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.7325782468997!2d69.26342283333852!3d41.27115821298628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8aa15f4f83f1%3A0x797f0aad2f862499!2sKizil%20-Arvat%20Str.%2C%20Tashkent%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1672213754816!5m2!1suz!2s"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
