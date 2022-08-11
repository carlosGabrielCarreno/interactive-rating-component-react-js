import styled from "../App.module.css";

export const BtnInputsValues = ({ btn, setBtn }) => {
  return (
    <>
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
    </>
  );
};
