import axios from "axios";
import { useState } from "react";

type Props = {
  url: string;
  translations: any;
};

export default function Form({ url, translations }: Props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [comment, setComent] = useState("");

  const postAction = (e: any): void => {
    e.preventDefault();
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
              placeholder={translations.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder={translations.comment}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder={translations.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder={translations.phonenumber}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <textarea
              cols={30}
              rows={5}
              placeholder={translations.comment}
              value={comment}
              onChange={(e) => setComent(e.target.value)}
              required
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
