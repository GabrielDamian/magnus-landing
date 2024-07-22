import style from './Section2.module.css'

export default function Section2() {
  const items = [
    {
      title: "Ai propriul tău sistem de rezervări",
      img: "/landing/section2_1.png",
      desc: "Descoperă libertatea și flexibilitatea de a avea propriul tău sistem de rezervări online, adaptat perfect nevoilor și caracteristicilor afacerii tale. Simplu, personalizat și fără restricții.",
    },
    {
      title: "Control în timp real",
      img: "/landing/section2_2.png",
      desc: "Descoperă libertatea și flexibilitatea de a avea propriul tău sistem de rezervări online, adaptat perfect nevoilor și caracteristicilor afacerii tale. Simplu, personalizat și fără restricții.",
    },
  ];
  return (
    <div className={style['section2-container']} id="integrare">
      <div className={style['section2-container-left']}>
        <img src="/landing/section2Left.png" />
      </div>
      <div className={style['section2-container-right']}>
        <div className={style['section2-container-right-tagline']}>
          <span>FUNCTIONALITĂȚI CHEIE</span>
        </div>
        <div className={style['section2-container-right-title']}>
          <h3>Acum tu îți controlezi tarifele și rezervările intregral</h3>
        </div>
        <div className={style['section2-container-right-items']}>
          {items.map((el) => {
            return (
              <div className={style['section2-container-right-items-item']}>
                <div className={style['section2-container-right-items-item-img']}>
                  <img src={el.img} />
                </div>
                <div className={style['section2-container-right-items-item-content']}>
                  <div className={style['section2-container-right-items-item-content-title']}>
                    <h4>{el.title}</h4>
                  </div>
                  <div className={style['section2-container-right-items-item-content-desc']}>
                    <p>{el.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
