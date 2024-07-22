import { useState } from "react";
import style from './Section6.module.css';

export default function Section6() {
  const items = [
    [
      "Cum funcționează integrările cu alte platforme de rezervări?",
      "Integrările cu alte platforme de rezervări permit sincronizarea calendarului și disponibilității între platforma noastră și platformele externe precum Booking, Agoda, Airbnb, Expedia etc. Astfel, proprietarii de hoteluri pot gestiona toate rezervările într-un singur loc.",
    ],
    [
      "Cum sunt protejate plățile online efectuate prin platforma voastră?",
      "Plățile online efectuate prin platforma noastră sunt securizate cu tehnologii avansate de criptare și sunt procesate prin intermediul unui partener de încredere, precum Stripe. Astfel, datele financiare ale utilizatorilor sunt protejate în timpul tranzacțiilor.",
    ],
    [
      "Care sunt avantajele de a avea propriul sistem de rezervări în loc să folosesc alte platforme de rezervări?",
      "Avantajele de a avea propriul sistem de rezervări includ independența de alte platforme, controlul complet asupra procesului de rezervare, personalizarea și economisirea de costuri asociate cu comisioanele platformelor externe.",
    ],
    [
      "Care sunt opțiunile de suport oferite pentru întrebările sau problemele utilizatorilor?",
      " Oferim suport dedicat și asistență pentru clienți, disponibil 24/7. Echipa noastră este pregătită să răspundă la întrebările și să rezolve problemele utilizatorilor pentru a asigura o experiență fără probleme.",
    ],
  ];

  return (
    <div className={style['section6-container']}>
      <div className={style['section6-magic']}>
        <div className={style['section6-title']}>
          <span>ÎNTREBĂRI FRECVENTE</span>
          <h1>Ai întrebări?</h1>
        </div>
        <div className={style['section6-content']}>
          {items.map((el) => {
            return <Question q={el[0]} a={el[1]} />;
          })}
        </div>
      </div>
    </div>
  );
}

const Question = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSwtich = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style['section6-question']} id="intrebari">
      <div className={style['section6-question-top']}>
        <img
          src="/landing/Section6Expand.png"
          alt="expand"
          onClick={handleSwtich}
          className={`${isOpen ? style['magic-class'] : null}`}
        />
        <span>{q}</span>
      </div>
      <div
      className={`${style['section6-question-bottom']} ${!isOpen ? style['section6-question-bottom-closed'] : ''}`}
    >
        <p>{a}</p>
      </div>
    </div>
  );
};

//
