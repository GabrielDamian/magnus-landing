import Link from 'next/link';
import style from './Footer_1.module.css';

export default function Footer() {
  const social = [
    ["https://www.google.com", "/landing/social/1.png"],
    ["https://www.google.com", "/landing/social/2.png"],
    ["https://www.google.com", "/landing/social/3.png"],
    ["https://www.google.com", "/landing/social/4.png"],
  ];

  const sectionAbout = [
    ["Termeni & Condiții", "/termeni-platforma"],
    ["Politica de confidențialitate", "/politica-platforma"],
  ];
  const sectionLinks = [
    ["Contactează-ne", "/contact"],
    ["Autentificare", "/login"],
  ];
  return (
    <div className={style['landing-footer-container']}>
      <div className={style['landing-footer-magic']}>
        <div className={style['landing-footer-left']}>
          <div className={style['landing-footer-left-logo']}>
            <img src="/landing/logoFooter.png" alt="logo" />
          </div>
          <div className={style['landing-footer-left-social']}>
            {social.map((el) => {
              return (
                <Link href={el[0]} target="_blank" rel="noreferrer">
                  <img src={el[1]} alt="social" />
                </Link>
              );
            })}
          </div>
        </div>
        <div className={style['landing-footer-center']}>
          <div className={style['landing-footer-center-section']}>
            <h2>Pentru clienți</h2>
            <div className={style['landing-footer-center-section-items']}>
              {sectionAbout.map((el) => {
                return <Link href={el[1]}>{el[0]}</Link>;
              })}
            </div>
          </div>
          <div className={style['landing-footer-center-section']}>
            <h2>Utile</h2>
            <div className={style['landing-footer-center-section-items']}>
              {sectionLinks.map((el) => {
                return <Link href={el[1]}>{el[0]}</Link>;
              })}
            </div>
          </div>
        </div>
        <div className={style['landing-footer-right']}>
          <div className={style['landing-footer-right-row']}>
            <p>
              <b>Oferit de: </b>MAGNUS DIGITAL INTEGRATION S.R.L.
            </p>
          </div>
          <div className={style['landing-footer-right-row']}>
            <Link href="https://anpc.ro/ce-este-sal/">
              <img src="/landing/anpc-sal.svg" alt="ANPC"/>
            </Link>
            <Link href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO">
              <img src="/landing/litigii.svg" alt="Litigii"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

//
