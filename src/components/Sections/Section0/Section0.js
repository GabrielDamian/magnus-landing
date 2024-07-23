import React from "react";
import style from './Section0.module.css';
import FadeInSection from "@/saturn/FadeInSection";

export default function Section0() {

  const integratonImgs = [
    "/landing/booking.png",
    "/landing/agoda.png",
    "/landing/trivago.png"
  ]
  return (
    <div className={style['landing-hero']} id="hero">
      <div className={style['landing-hero-magic']}>
        <FadeInSection
          className={style['landing-hero-left']}
          delay={1}
        >
          <div className={style['landing-hero-left-title']}>
            <p>Conectează-te la viitorul rezervărilor online</p>
          </div>
          <div className={style['landing-hero-left-subtitle']}>
            <p>
              Scapă de platformele costisitoare și creează-ți propriul sistem de rezervări online, dedicat afacerii tale.
            </p>
          </div>
          <div className={style['landing-hero-left-buttons']}>
            <div className={style['landing-hero-left-buttons-start']}>
              <button>Începe</button>
            </div>
            <div className={style['landing-hero-left-buttons-video']}>
              <img src="/landing/play-button.png" alt="play" />
              <span>Vezi video</span>
            </div>
          </div>
          <div className={style['landing-hero-left-integration']}>
            <p>Integrat cu:</p>
            <div className={style['landing-hero-left-integration-core']}>
              {
                integratonImgs.map((el,index)=>{
                  return(
                    <FadeInSection
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                      delay={1+index*0.3}>
                        <img src={el} key={index} alt="integration"/>
                      </FadeInSection>
                  )
                })
              }
            </div>
          </div>
        </FadeInSection>
        <FadeInSection
         className={style['landing-hero-right']}
          delay={1.9}
        >
          <img src="/landing/heroRight.png" alt="hero" />
        </FadeInSection>
      </div>
    </div>
  );
}
