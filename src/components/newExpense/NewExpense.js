import React, { useState } from "react";
import Button from "../../UI/button/Button";
import ExpensesForm from "./ExpensesForm";
import styled from "styled-components";

const NewExpense = ({ addExpenseHandler }) => {
  const [state, setState] = useState(false);

  function openAndCloseExpensesFormHandler() {
    setState((prev) => !prev);
  }

  return (
    <DivName>
      {state ? (
        <ExpensesForm
          onClick={openAndCloseExpensesFormHandler}
          addExpenseHandler={addExpenseHandler}
        />
      ) : (
        <Button onClick={openAndCloseExpensesFormHandler}>
          Добавить новый расход
        </Button>
      )}
    </DivName>
  );
};

export default NewExpense;

const DivName = styled.div`
  background-color: #ad9be9;
  width: 50%;
  padding: 30px;
  border-radius: 20px;
`;
