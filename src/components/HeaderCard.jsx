import styled from "../App.module.css";
import star from "../images/icon-star.svg";

export const HeaderCard = () => {
  return (
    <>
      <img className={styled.startStyles} src={star} alt="star-logo" />
      <h1>How did we do?</h1>
      <p className={styled.pInput}>
        Please let us know how we did with your support request.All feedback is
        appreciated to help us improve our offering!
      </p>
    </>
  );
};
