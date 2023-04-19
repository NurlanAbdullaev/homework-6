import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <ButtonStyly
      onClick={props.onClick}
      style={{ marginRight: props.marginRight }}
    >
      {props.children}
    </ButtonStyly>
  );
};

export default Button;

const ButtonStyly = styled.button`
  padding: 18px;
  font-weight: 600;
  color: aliceblue;
  background-color: #4a026b;
  border: none;
  border-radius: 10px;

  :hover {
    background-color: #72159e;
  }
`;
