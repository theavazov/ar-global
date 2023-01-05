import Image from "next/image";
import hr from "../public/media/hr.png";
import ceo from "../public/media/ceo.png";

type Props = {
  myRef: any;
  formRef: any;
  translations: any;
};

export default function Recruiting({ myRef, formRef, translations }: Props) {
  const onRefClick = (ref: any) => {
    ref.current.scrollIntoView(true);
  };

  return (
    <section ref={myRef}>
      <div className="box recruiting_inner">
        <div>
          <div>
            <div className="titles_div">
              <p className="mini_title">{translations.recruit_mini_titl}</p>
              <p className="section_title">
                <span>{translations.more}</span> {translations.recruit_title}
              </p>
            </div>
            <div className="recruit_texts">
              <p className="p">{translations.recruit_desc}</p>
              <button className="main_btn" onClick={() => onRefClick(formRef)}>
                {translations.join}
              </button>
            </div>
          </div>
          <div className="ceo_div">
            <Image src={ceo} alt="ceo" priority={true} />
            <div className="ceo_content">
              <div className="ceo_titles">
                <p className="ceo_name">Karimov Rizamat</p>
                <p className="ceo_job">{translations.ceo_job}</p>
              </div>
              <p className="ceo_quote">{translations.ceo_quote}</p>
            </div>
          </div>
        </div>
        <div className="recruit_img_div">
          <Image src={hr} alt="hr" />
          <div className="hr_texts">
            <p className="hr_title">500+</p>
            <p className="p">{translations.staff}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
