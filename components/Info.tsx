import bgVideo from "../public/media/video.mp4";

type Props = {
  myRef: any;
};

export default function Info({ myRef }: Props) {
  const onRefClick = (ref: any) => {
    ref.current.scrollIntoView(true);
  };

  return (
    <section>
      <div className="box info_inner">
        <h1 className="section_title">
          We are trucking industry <span>experts</span>
        </h1>
        <div className="hidden_video">
          <video src={bgVideo} muted autoPlay loop playsInline></video>
        </div>
        <div className="info_content">
          <p className="p">
            Outsource your dispatching, payroll, safety.... to us, we will do it
            better than anyone else!
          </p>
          <button className="main_btn" onClick={() => onRefClick(myRef)}>
            Connect with us
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
