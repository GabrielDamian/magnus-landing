import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import style from './Contact.module.css';
import Footer from "../Footer/Footer_1/Footer";

export default function ContactSection() {

  const info = [
    {
      icon: "/landing/phone.png",
      label: "TELEFON",
      value: "+40 0759 334 718",
    },
    {
      icon: "/landing/mail.png",
      label: "EMAIL",
      value: "contact@magnusbooking.ro",
    },
  ];

  const [fields, setFields] = useState({
    Nume: "",
    Emai: "",
    Telefon: "",
  });

  const handleFieldsChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={style['contact-container']} id="top">
      <div className={style['contact-core']}>
        <div className={style['contact-core-magic']}>
          <div className={style['contact-top']}>
            <div className={style['contact-top-core']}>
              <div className={style['contact-top-core-left']}>
                <div className={style['contact-top-core-left-top']}>
                  <h2>
                    Contactează<span>-ne!</span>
                  </h2>
                  <p>Iar de restul de ocupăm noi.</p>
                </div>
                <div className={style['contact-top-core-left-center']}>
                  <div className={style['contact-top-core-left-center-fields']}>
                    {Object.keys(fields).map((el) => {
                      return (
                        <div className={style['contact-top-core-left-center-fields-el']}>
                          <TextField
                            id="outlined-basic"
                            label={el}
                            name={el}
                            variant="outlined"
                            value={fields[el]}
                            onChange={handleFieldsChange}
                            sx={{
                              width: "100%",
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className={style['contact-top-core-left-center-submit']}>
                    <button>TRIMITE</button>
                  </div>
                </div>
                <div className={style['contact-top-core-left-bot']}>
                  {info.map((el) => {
                    return (
                      <div className={style['contact-top-core-left-bot-section']}>
                        <div className={style['contact-top-core-left-bot-section-icon']}>
                          <img src={el.icon} alt="icon" />
                        </div>
                        <div className={style['contact-top-core-left-bot-section-core']}>
                          <p>{el.label}</p>
                          <span>{el.value}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={style['contact-top-core-right']}>
                <img src="/landing/contact.jpg" alt="contact" />
              </div>
            </div>
          </div>
          <div className={style['contact-bottom']}>
            <div className={style['contact-bottom-left']}>
              <img src="/landing/logo.png" alt="logo" />
            </div>
            <div className={style['contact-bottom-center']}></div>

            <div className={style['contact-bottom-right']}>
              <p>
                #Modern <b>Booking Engine</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
