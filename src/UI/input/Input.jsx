import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return (
    <Form2>
      <label htmlFor="text">{props.children}</label>
      <InputContain
        style={{ marginBottom: props.marginBottom, marginTop: props.marginTop }}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </Form2>
  );
};

export default Input;

const Form2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 600;
`;
const InputContain = styled.input`
  width: 340px;
  height: 30px;
  border: none;
  border-radius: 10px;
  outline: none;
  margin-top: 8px;
  padding: 5px 10px 5px 18px;
`;
