import React, { useState } from "react";
import parse from "html-react-parser";
import { Container } from "reactstrap";
import axios, { AxiosResponse } from "axios";

type inputData = {
  name: string;
  address: string;
  token: string;
};

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [token, setToken] = useState("");
  const [someResult, setSomeResult] = useState({
    name: "",
    address: "",
    token: "",
  });

  const handleSubmit = () => {
    const formattedData: inputData = {
      name: name,
      address: address,
      token: token,
    };
    axios
      .post(
        "https://1ucl257rci.execute-api.ap-southeast-2.amazonaws.com/dev/ctf",
        { test: "data" },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response: AxiosResponse) => {
        setSomeResult({ name: "a", address: "b", token: "<b>vuln</b>" });
      });
  };

  return (
    <Container>
      <>
        <h1>The data:</h1>
        <div>some other field</div>
        <div>{parse("<b>vuln</b>")}</div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          Token:
          <input
            type="text"
            name="token"
            onChange={(e) => setToken(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </>
      <>
        <div>{someResult.name}</div>
        <div>{someResult.address}</div>
        <div>{parse(someResult.token)}</div>
      </>
    </Container>
  );
}

export default App;
