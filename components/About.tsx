type Props = {
  myRef: any;
  translations: any;
};

export default function About({ myRef, translations }: Props) {
  return (
    <section ref={myRef}>
      <div className="box">
        <div className="about_inner myBox">
          <div className="about_titles">
            <div className="titles_div">
              <p className="mini_title">{translations.about}</p>
              <h1 className="section_title">
                {translations.about_title} <span>{translations.about}</span>
              </h1>
            </div>
            <p className="p">{translations.about_desc}</p>
          </div>
          <div className="about_stats_side">
            <div className="about_stats">
              <p className="stats_title">500+</p>
              <p className="p">{translations.staff}</p>
            </div>
            <div className="about_stats">
              <p className="stats_title">
                <span>{translations.since}</span> 2020
              </p>
              <p className="p">{translations.history}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
