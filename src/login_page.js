export function Login_page() {
  return (
    <>
      <div className="login_page">
        <div className="login_page_text">
          <div className="page_text">
            <p className="page_text_p">
              Left questions? Contacts us now for a free consultation and free
              trial!
            </p>
            <p className="page_text_p1">
              Если у вас остались вопросы или вы хотите получить консультацию
              напишите нам и мы поможем вам найти решение.{" "}
            </p>
          </div>
          <div className="page_text1">
            <p className="page_text1_p">Email address</p>
            <p className="page_text1_p1">Estimatesguru@info.co.us</p>
            <p className="page_text1_p2">Phone number</p>
            <p className="page_text1_p3">+7 903-118-1515</p>
          </div>
        </div>
        <div className="login_page_input">
          <p className="login_page_input_p">Contact Us</p><br /><br /><br />
          <label htmlFor="">Name</label><br /><br />
          <input type="text" /><br />
          <hr /><br />
          <label htmlFor="">Email</label><br /><br />
          <input type="text" /><br />
          <hr /><br />
          <label htmlFor="">Theme</label><br /><br />
          <input type="text" /><br />
          <hr /><br />
          <label htmlFor="">Message</label><br /><br />
          <input type="text" />
          <hr />
          <button className="page_input_button">Send</button>
        </div>
      </div>
    </>
  );
}
