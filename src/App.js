import styled from "./App.module.css";
import star from "./images/icon-star.svg";
import thankYou from "./images/illustration-thank-you.svg";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(0);
  const [btn, setBtn] = useState("");

  const handlerStateBtn = (state) => {};

  return (
    <div className={styled.card}>
      {step === 0 ? (
        <>
          <img className={styled.startStyles} src={star} alt="star-logo" />
          <h1>How did we do?</h1>
          <p className={styled.pInput}>
            Please let us know how we did with your support request.All feedback
            is appreciated to help us improve our offering!
          </p>
          {/* antes de renderizar los input, preguntar si existe el state btn con algo, 
            si existe, entonces renderizarlo con el color naranja
          */}
          <div className={styled.containerBtn}>
            <input
              className={btn == "1" ? styled.btnActive : styled.btn}
              type="submit"
              onClick={() => setBtn("1")}
              value={"1"}
            />
            <input
              className={btn == "2" ? styled.btnActive : styled.btn}
              type="submit"
              onClick={() => setBtn("2")}
              value={"2"}
            />
            <input
              className={btn == "3" ? styled.btnActive : styled.btn}
              type="submit"
              onClick={() => setBtn("3")}
              value={"3"}
            />
            <input
              className={btn == "4" ? styled.btnActive : styled.btn}
              type="submit"
              onClick={() => setBtn("4")}
              value={"4"}
            />
            <input
              className={btn == "5" ? styled.btnActive : styled.btn}
              type="submit"
              onClick={() => setBtn("5")}
              value={"5"}
            />
          </div>
          <button
            className={styled.btnSubmit}
            onClick={() => (btn ? setStep(1) : setStep(0))}
          >
            SUBMIT
          </button>
        </>
      ) : (
        <>
          <img
            className={styled.imgOutput}
            src={thankYou}
            alt="thank-you-logo"
          />
          <h3 className={styled.h3}>You selected {btn} out of 5</h3>
          <h2 className={styled.h2}>Thank you!</h2>
          <p className={styled.pOutput}>
            We appreciate you taking the time to give a rating.If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </>
      )}
    </div>
  );
}

export default App;