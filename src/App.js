import styled from "./App.module.css";
import { useState } from "react";
import {
  BackNotice,
  BtnInputsValues,
  BtnSubmit,
  HeaderCard,
} from "./components";

function App() {
  const [step, setStep] = useState(0);
  const [btn, setBtn] = useState("");

  return (
    <div className={styled.card}>
      {step === 0 ? (
        <>
          <HeaderCard />
          {/* antes de renderizar los input, preguntar si existe el state btn con algo, 
            si existe, entonces renderizarlo con el color naranja
          */}
          <div className={styled.containerBtn}>
            <BtnInputsValues btn={btn} setBtn={setBtn} />
          </div>
          <BtnSubmit btn={btn} setStep={setStep} />
        </>
      ) : (
        <>
          <BackNotice btn={btn} />
        </>
      )}
    </div>
  );
}

export default App;
