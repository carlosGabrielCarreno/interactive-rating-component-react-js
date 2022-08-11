import styled from "../App.module.css";

export const BtnSubmit = ({ btn, setStep }) => {
  return (
    <>
      <button
        className={styled.btnSubmit}
        onClick={() => (btn ? setStep(1) : setStep(0))}
      >
        SUBMIT
      </button>
    </>
  );
};
