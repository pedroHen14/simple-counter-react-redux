import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: blueviolet;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  flex-direction: column;

  > div {
    display: flex;
  }

  button {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    background-color: inherit;
    border: solid 2px white;
    font-size: 20px;
    transition: all 0.4s;

    :active {
      transform: scale(0.9);
    }
  }
`;

export const Counter = styled.div`
  display: flex;
  background-color: darkblue;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #000;
  height: 300px;
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;
