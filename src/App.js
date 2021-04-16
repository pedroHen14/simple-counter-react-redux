import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions";
import GlobalStyles from "./GlobalStyles";
import { Container, Counter } from "./styles";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <Counter>
          <h1>Contador com Redux </h1>
          <h1>{counter}</h1>
          <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
          </div>
        </Counter>
      </Container>
      <GlobalStyles />
    </>
  );
}

export default App;
