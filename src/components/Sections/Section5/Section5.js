import style from './Section5.module.css';

export default function Section5() {
  return (
    <div className={style['section5-container']}>
      <div className={style['section5-magic']}>
        <div className={style['section5-left']}>
          <img src="/landing/Section5Left.png" />
        </div>
        <div className={style['section5-right']}>
          <span>PLĂȚI ONLINE SECURIZATE</span>
          <h1>Siguranță în Plăți Online</h1>
          <p>
            Bucură-te de o experiență de plată online simplă și securizată cu partenerul nostru de
            încredere, Stripe. Fiecare tranzacție este protejată prin cele mai avansate tehnologii
            de criptare, astfel încât clienții tai să poată efectua plăți fără griji sau ezitări.
          </p>
        </div>
      </div>
    </div>
  );
}
//
