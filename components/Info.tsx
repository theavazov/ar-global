import bgVideo from "../public/media/video.mp4";

type Props = {
  myRef: any;
  translations: any;
};

export default function Info({ myRef, translations }: Props) {
  const onRefClick = (ref: any) => {
    ref.current.scrollIntoView(true);
  };

  return (
    <section>
      <div className="box info_inner">
        <h1 className="section_title">
          <span>{translations.we}</span> {translations.info_title}
        </h1>
        <div className="hidden_video">
          <video src={bgVideo} muted autoPlay loop playsInline></video>
        </div>
        <div className="info_content">
          <p className="p">{translations.info_desc}</p>
          <button className="main_btn" onClick={() => onRefClick(myRef)}>
            {translations.connect}
          </button>
        </div>
      </div>
      <div className="box">
        <div className="video_div">
          <video src={bgVideo} muted autoPlay loop playsInline></video>
        </div>
      </div>
    </section>
  );
}
