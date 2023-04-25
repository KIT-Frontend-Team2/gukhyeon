import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/StyledButton";
import styled, { createGlobalStyle } from "styled-components";

const PrimaryStyledButton = styled(StyledButton)`
  background: palevioletred;
  color: white;
`;

const UpperCaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);

const MyButton = (props) => (
  <button className={props.className} children={`MyButton ${props.children}`} />
);

const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.color || "palevioletred"};
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;
`;

const GlobalStyle = createGlobalStyle`
button {
  color: yellow
}
`;

const StyledA = styled.a.attrs((props) => ({
  target: "_blank",
}))`
  color: black;
  background-color: white;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <StyledButton>버튼</StyledButton>
          <StyledButton primary>버튼</StyledButton>
          <PrimaryStyledButton>버튼</PrimaryStyledButton>
          <StyledButton as="a" href="https://www.naver.com">
            버튼
          </StyledButton>
          <StyledButton as={UpperCaseButton}>button</StyledButton>
          <StyledMyButton color="green">버튼</StyledMyButton>
          <StyledA href="https://www.naver.com">링크</StyledA>
        </p>
      </header>
    </div>
  );
}

export default App;
