import styled from "../App.module.css";
import thankYou from "../images/illustration-thank-you.svg";

export const BackNotice = ({ btn }) => {
  return (
    <>
      <img className={styled.imgOutput} src={thankYou} alt="thank-you-logo" />
      <h3 className={styled.h3}>You selected {btn} out of 5</h3>
      <h2 className={styled.h2}>Thank you!</h2>
      <p className={styled.pOutput}>
        We appreciate you taking the time to give a rating.If you ever need more
        support, don't hesitate to get in touch!
      </p>
    </>
  );
};
