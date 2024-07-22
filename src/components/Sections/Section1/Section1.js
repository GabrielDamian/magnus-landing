import style from './Section1.module.css';
export default function Section1() {
  const items = [
    {
      img: "/landing/sec1_3.png",
      title: "Propriul tău website",
      desc: "Afacerea ta are nevoie de un website calibrat nevoilor si caracteristicilor tale.",
    },
    {
      img: "/landing/sec1_2.png",
      title: "Rezervări online",
      desc: "Îți integrăm propriul website cu sistemul nostru de rezervări online",
    },
    {
      img: "/landing/sec1_1.png",
      title: "Acces la platformă",
      desc: "Manageriază-ți rezervările și clienții într-o platformă modernă",
    },
  ];
  return (
    <div className={style['landing-section1']} id="servicii">
      <div className={style['landing-section1-magic']}>
        <div className={style['landing-section1-header']}>
          <span>Serviciile noastre</span>
          <h2>Cum te vom ajuta</h2>
        </div>
        <div className={style['landing-section1-content']}>
          {items.map((item, index) => (
            <div className={style['landing-section1-item']} key={index}>
              <div className={style['landing-section1-item-img']}>
                <img src={item.img} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
