import Image from "next/image";
import hr from "../public/media/hr.png";
import ceo from "../public/media/ceo.png";

type Props = {
  myRef: any;
  formRef: any;
};

export default function Recruiting({ myRef, formRef }: Props) {
  const onRefClick = (ref: any) => {
    ref.current.scrollIntoView(true);
  };

  return (
    <section ref={myRef}>
      <div className="box recruiting_inner">
        <div>
          <div>
            <div className="titles_div">
              <p className="mini_title">Recruiting of dispatchers</p>
              <p className="section_title">
                <span>More</span> Than just a career
              </p>
            </div>
            <div className="recruit_texts">
              <p className="p">
                We believe our business would not have been as half successful
                with our great employees! Thats why our employees are like
                family members to us, many have grown to be top executives!
              </p>
              <button className="main_btn" onClick={() => onRefClick(formRef)}>
                Join us
              </button>
            </div>
          </div>
          <div className="ceo_div">
            <Image src={ceo} alt="ceo" />
            <div className="ceo_content">
              <div className="ceo_titles">
                <p className="ceo_name">Karimov Rizamat </p>
                <p className="ceo_job">Founder & CEO of AR-GLOBAL-LOGISTIC </p>
              </div>
              <p className="ceo_quote">
                “We invest a lot in technology, constantly improve our process
                and help our client more to be more efficient”
              </p>
            </div>
          </div>
        </div>
        <div className="recruit_img_div">
          <Image src={hr} alt="hr" />
          <div className="hr_texts">
            <p className="hr_title">500+</p>
            <p className="p">Employees working in our company</p>
          </div>
        </div>
      </div>
    </section>
  );
}
