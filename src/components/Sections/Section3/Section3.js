import style from './Section3.module.css';

export default function Section3() {
  const items = [
    {
      color: "rgba(255, 67, 97, 0.12)",
      title: "Rezervări Directe",
      img: "/landing/section3/1.png",
      desc: "Permite-ți clienților să facă rezervări direct pe platforma ta, simplificând procesul și oferindu-le o experiență fluidă",
    },
    {
      color: "rgba(234, 249, 255,1)",
      title: "Avantaje Competitive",
      img: "/landing/section3/2.png",
      desc: "Descoperă avantajele și beneficiile oferite de platforma noastră, economisind timp și bani pentru afacerea ta.",
    },
    {
      color: "rgba(255, 246, 211, 1)",
      title: "Flexibilitate Personalizată",
      img: "/landing/section3/3.png",
      desc: "Adaptă platforma conform nevoilor și caracteristicilor afacerii tale, oferindu-ți flexibilitatea de care ai nevoie pentru succes.",
    },
    {
      color: "rgba(228, 255, 238, 1)",
      title: "Integrări Avansate",
      img: "/landing/section3/4.png",
      desc: "Conectează-te cu marile platforme de rezervări precum Booking, Agoda și Trivago pentru a-ți gestiona toate rezervările dintr-un singur loc",
    },
    {
      color: "rgba(244, 244, 255, 1)",
      title: "Gestionare Eficientă",
      img: "/landing/section3/5.png",
      desc: "Gestionează cu ușurință rezervările și plățile online, anulările și facturile, utilizând uneltele noastre intuitive de administrare.",
    },
    {
      color: "rgba(233, 116, 37, 0.12)",
      title: "Suport 24/7",
      img: "/landing/section3/6.png",
      desc: "Beneficiază de suportul nostru dedicat disponibil 24/7 pentru a te ajuta în rezolvarea oricăror probleme sau întrebări legate de serviciile noastre din platformă.",
    },
  ];

  return (
    <div className={style['section3-container']} >
      <div className={style['section3-magic']}>
        <div className={style['section3-header']}>
          <p>CU CE ÎȚI ÎMBUNATĂȚIM AFACEREA</p>
          <h2>Ce găsești în platforma noastră</h2>
        </div>
        <div className={style['section3-content']}>
          {items.map((el,index) => {
            return (
              <div className={style['section3-item']} key={index}>
                <div
                  className={style['section3-item-img']}
                  style={{
                    backgroundColor: el.color,
                  }}
                >
                  <img src={el.img} alt="icon" />
                </div>
                <div className={style['section3-item-content']}>
                  <h4>{el.title}</h4>
                  <p>{el.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
