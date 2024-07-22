import style from './Section4.module.css';

export default function Section4() {
  return (
    <div className={style['section4-container']}>
      <div className={style['section4-magic']}>
        <div className={style['section4-container-left']}>
          <span>INTEGRARE</span>
          <h1>Libertatea de a Alege, Convenția de a Rămâne Conectat</h1>
          <p>
            Platforma noastră oferă posibilitatea de a-ți gestiona propriul sistem de rezervări
            online, însă suntem conștienți că unele proprietăți doresc să-și păstreze prezența și pe
            alte platforme de rezervări. De aceea, am implementat integrări cu cele mai mari
            platforme de rezervări din industrie, precum Booking, Agoda, Airbnb, Expedia și altele.
            Aceste integrări permit sincronizarea calendarului și disponibilității între platforma
            noastră și alte platforme externe, oferindu-ți flexibilitate și control complet asupra
            modului în care îți gestionezi rezervările
          </p>
        </div>
        <div className={style['section4-container-right']}>
          <img src="/landing/Section4.png" />
        </div>
      </div>
    </div>
  );
}
