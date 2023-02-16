import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./Contact.css";
import { MdOutlineForwardToInbox } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massege, setMassege] = useState("");
  const handleValue = (targert) => {
    if (email.includes("@") && name) {
      Swal.fire(
        "تم إستلام رسالتك بنجاح",
        "Thanke You <b style=color:red;> " +
          name +
          " </b>for contacting me and I will reply to you as soon as possible Inashalla",

        "success"
      );
      clearInputs();
      emailjs
        .sendForm(
          "service_yyz7c43",
          "template_chzwj99",
          form.current,
          "HI2yON0y98XYnchtZ"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      Swal.fire({
        icon: "error",
        title: "أوووبس",
        text: "تأكد أنك قمت بإدخال اسمك وبريدك بشكل صحيح",
        footer: "",
      });
    }
  };
  const clearInputs = () => {
    setName("");
    setEmail("");
    setMassege("");
  };
  return (
    <div className="container contact">
      <div className="row">
        <div className="col-md-3">
          <div className="contact-info" dir="rtl">
            <MdOutlineForwardToInbox
              style={{
                width: "10rem",
                height: "10rem",
                color: "white",
                border: "none",
              }}
            />
            <h2>راسلني الان</h2>
            <h4>إذا كان لديك بعض المقترحات أو الشكاوي</h4>
          </div>
        </div>
        <div className="col-md-9">
          <div className="contact-form" dir="rtl" ref={form}>
            <div className="form-group">
              <label className="control-label col-sm-2" for="fname">
                إسمك:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="user_name"
                  placeholder="ما إسمك ؟"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-sm-2" for="email">
                بريدك:
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="user_email"
                  placeholder="بريدك الإلكتروني "
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" for="comment">
                رسالتك:
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  rows="5"
                  onChange={(e) => setMassege(e.target.value)}
                  value={massege}
                  name="message"
                  placeholder="ماذا تريد أن تقترح لتطوير الموقع وتحسينه ..."
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <div className="mb-6  buttons">
                  <button
                    type="submit"
                    className="
            
          "
                    onClick={() => handleValue()}
                  >
                    إضغط للإرسال
                  </button>
                  {name || email || massege ? (
                    <button
                      type="submit"
                      className=""
                      onClick={() => clearInputs()}
                    >
                      إفراغ جميع الحقول
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
