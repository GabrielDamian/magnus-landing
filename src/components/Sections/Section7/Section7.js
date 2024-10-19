import style from "./Section7.module.css";
import { useEffect } from "react";

export default function Section7() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="pachete" className={style["section7-container"]}>
      <div className={style["section7-core"]}>
        <div className={style["section7-header"]}>
          <p>ALEGE CE ȚI SE POTRIVEȘTE</p>
          <h1>Pachete</h1>
        </div>
        <stripe-pricing-table
          pricing-table-id="prctbl_1PmLjICLryJM3oFkC5VEBSqg"
          publishable-key="pk_live_51M3IIzCLryJM3oFkdotp2AKelJ0yYtjmoDJKpy92JySxa9hJtQ68yudqqaAo2E4A2GY6OLmr9Mxo8NbMsbmh4x2F004XOBLdqU"
        ></stripe-pricing-table>
      </div>
    </div>
  );
}
