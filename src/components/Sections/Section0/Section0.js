import React from "react";
import style from './Section0.module.css';
import FadeInSection from "@/saturn/FadeInSection";

export default function Section0() {
  return (
    <div className={style['landing-hero']} id="hero">
      <div className={style['landing-hero-magic']}>
        {/* <div className="landing-hero-left"> */}
        <FadeInSection
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className={style['landing-hero-left-title']}>
            <p>Conectează-te la viitorul rezervărilor online</p>
          </div>
          <div className={style['landing-hero-left-subtitle']}>
            <p>
              Scapă de platformele costisitoare și creează-ți propriul sistem de rezervări online
              pentru afacerea ta
            </p>
          </div>
          <div className={style['landing-hero-left-buttons']}>
            <div className={style['landing-hero-left-buttons-start']}>
              <p>Începe </p>
            </div>
            <div className={style['landing-hero-left-buttons-video']}>
              <img src="/landing/play-button.png" alt="play" />
              <span>Vezi video</span>
            </div>
          </div>
          <div className={style['landing-hero-left-integration']}>
            <p>Integrat cu:</p>
            <div className={style['landing-hero-left-integration-core']}>
              <img src="/landing/booking.png" alt="booking" />
              <img src="/landing/agoda.png" alt="agoda" />
              <img src="/landing/trivago.png" alt="trivago" />
            </div>
          </div>
        </FadeInSection>
        {/* <div className="landing-hero-right"/> */}
        <FadeInSection
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          delay={0.5}
        >
          <img src="/landing/heroRight.png" alt="hero" />
        </FadeInSection>
      </div>
    </div>
  );
}
