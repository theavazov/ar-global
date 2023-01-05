type Props = {
  information: any;
  myRef: any;
  translations: any;
};

export default function Contact({ information, myRef, translations }: Props) {
  const map = information.map;
  return (
    <section ref={myRef}>
      <div className="box">
        <div className="contact_inner myBox">
          <div className="contact_content">
            <div className="titles_div">
              <p className="mini_title">{translations.location}</p>
              <h1 className="section_title">
                {translations.we_located} <span>IT park office</span>
              </h1>
            </div>
            <div className="contact_information">
              <div className="contact_child">
                <p>{translations.contact}:</p>
                <a href={`tel: ${information.phone_number}`} className="p">
                  {information.phone_number}
                </a>
              </div>
              <div className="contact_child">
                <p>{translations.email}:</p>
                <a href={`mailto: ${information.email}`} className="p">
                  {information.email}
                </a>
              </div>
              <div className="contact_child">
                <p>{translations.address}:</p>
                <p className="p">{information.address}</p>
              </div>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: map }} className="map"></div>
        </div>
      </div>
    </section>
  );
}
