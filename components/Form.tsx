import axios from "axios";
import { useState } from "react";
import { IMaskInput } from "react-imask";

type Props = {
  url: string;
  translations: any;
  setIsSucces: Function;
};

export default function Form({ url, translations, setIsSucces }: Props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [comment, setComent] = useState("");

  const postAction = (e: any) => {
    e.preventDefault();
    axios
      .post(`${url}/feedback`, {
        page: url.replace("/api", ""),
        name: name,
        company: company ? company : null,
        email: email ? email : null,
        phone_number: `+998 ${number}`,
        message: comment ? comment : null,
      })
      .then((res) => {
        if (res.status == 201) {
          setIsSucces(true);
          setTimeout(() => {
            setIsSucces(false);
          }, 2000);
          setName("");
          setCompany("");
          setEmail("");
          setComent("");
          setNumber("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <div className="box">
        <div className="form_inner myBox">
          <div className="form_titles">
            <h1 className="section_title">
              {translations.any_issues} <span>{translations.contact_us}</span>
            </h1>
            <p className="p">{translations.form_desc}</p>
          </div>
          <form className="form" onSubmit={postAction}>
            <input
              type="text"
              placeholder={`${translations.name} *`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder={translations.company}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              type="email"
              placeholder={translations.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="imask">
              <span>+998</span>
              <IMaskInput
                mask={"(00) 000 00 00"}
                placeholder={`${translations.phonenumber} *`}
                value={number}
                onChange={(e: any) => setNumber(e.target.value)}
                required
              />
            </div>
            <textarea
              cols={30}
              rows={5}
              placeholder={translations.comment}
              value={comment}
              onChange={(e) => setComent(e.target.value)}
            ></textarea>
            <button type="submit" className="main_btn">
              {translations.request_call}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
