export default function Form() {
  return (
    <section>
      <div className="box">
        <div className="form_inner myBox">
          <div className="form_titles">
            <h1 className="section_title">
              Have any questions? <span>Contact us!</span>
            </h1>
            <p className="p">
              If you have any questions about format or what you need to choose,
              leave your number - We will answer all your questions.
            </p>
          </div>
          <form className="form">
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Company name" />
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="phone number" />
            <textarea cols={30} rows={5} placeholder="Comment"></textarea>
            <button type="submit" className="main_btn">
              Request a call
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
