import { useRef, useState } from "react";
import { play } from "../public/icons";
import bgVideo from "../public/media/video.mp4";
import poster from "../public/media/poster.png";
import Image from "next/image";

type Props = {
  myRef: any;
  translations: any;
};

export default function Info({ myRef, translations }: Props) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

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
          <div
            className={isPlaying ? "video_mask" : "video_mask show"}
            onClick={() => setIsPlaying(true)}
          >
            <div className="play_btn">{play}</div>
            <Image src={poster} alt="poster" />
          </div>
          <video
            onClick={() => {
              setIsPlaying(false);
            }}
            src={bgVideo}
            muted={isPlaying ? false : true}
            autoPlay={isPlaying ? false : true}
            loop
            controls={isPlaying ? true : false}
            className={isPlaying ? "video" : "video hide"}
          ></video>
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
          <div
            className={isPlaying ? "video_mask" : "video_mask show"}
            onClick={() => setIsPlaying(true)}
          >
            <div className="play_btn">{play}</div>
            <Image src={poster} alt="poster" />
          </div>
          <video
            onClick={() => {
              setIsPlaying(false);
            }}
            src={bgVideo}
            muted={isPlaying ? false : true}
            autoPlay={isPlaying ? false : true}
            loop
            controls={isPlaying ? true : false}
            className={isPlaying ? "video" : "video hide"}
          ></video>
        </div>
      </div>
    </section>
  );
}
