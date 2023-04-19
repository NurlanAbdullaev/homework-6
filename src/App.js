import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import styled from "styled-components";

const productData = [
  {
    title: "Alma",
    price: 120,
    date: "01.25.23",
    id: "1",
  },

  {
    title: "Food",
    price: 380,
    date: "11.07.23",
    id: "2",
  },

  {
    title: "Juice",
    price: 80,
    date: "05.15.23",
    id: "3",
  },
];

function App() {
  const [newProduct, setNewProduct] = useState(productData);

  function addExpenseHandler(data) {
    setNewProduct([...newProduct, data]);
  }

  function deleteExpense(id) {
    const newData = newProduct.filter((el) => el.id !== id);
    setNewProduct(newData);
  }

  return (
    <AppDiv>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses
        data={newProduct}
        setNewProduct={setNewProduct}
        onDelete={deleteExpense}
      />
    </AppDiv>
  );
}

export default App;
const AppDiv = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
`;
