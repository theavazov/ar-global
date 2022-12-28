import { useEffect, useState } from "react";

type Props = {
  myRef: any;
};

export default function About({ myRef }: Props) {
  const [isActive, setIsActive] = useState<Boolean>(false);

  const scrollFunction = () => {
    let top = window.pageYOffset;
    if (top >= myRef.current.offsetTop) {
      console.log("about");
    }
  };

  useEffect(() => {
    let top = window.pageYOffset;
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <section ref={myRef}>
      <div className="box">
        <div className="about_inner myBox">
          <div className="about_titles">
            <div className="titles_div">
              <p className="mini_title">ABOUT</p>
              <h1 className="section_title">
                Some interesting stats <span>about us</span>
              </h1>
            </div>
            <p className="p">
              Making AR GLOBAL LOGISTIC as one of the best companies in shipping
              and logistics service by optimaliy serving the needs and interests
              of customers so that they are known in Uzbekistan and i
              internationally.
            </p>
          </div>
          <div className="about_stats_side">
            <div className="about_stats">
              <p className="stats_title">500+</p>
              <p className="p">Employees working in our company</p>
            </div>
            <div className="about_stats">
              <p className="stats_title">
                <span>since</span> 2020
              </p>
              <p className="p">
                The company was established on September 01, 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
