import React from "react";
import parse from "html-react-parser";
import { Container } from "reactstrap";

function App() {
  return (
    <Container>
      <>
        <h1>The data:</h1>
        <div>some other field</div>
        <div>{parse("<b>vuln</b>")}</div>
      </>
    </Container>
  );
}

export default App;
