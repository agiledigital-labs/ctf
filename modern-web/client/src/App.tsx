import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const apiUrl = process.env.REACT_APP_API_URL ?? "";

type APIResponse = {
  job_title: string;
  phone_number: string;
  email_signature: string;
};

const apiFetch = async (
  setApiResponse: React.Dispatch<React.SetStateAction<APIResponse | undefined>>,
  method: string,
  body: string | undefined = undefined
) => {
  if (!apiUrl) {
    throw new Error("Environment variable REACT_APP_API_URL is required.");
  }

  const resp = await fetch(apiUrl, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const json = await resp.json();
  setApiResponse(typeof json === "object" ? json : undefined);
};

const submit = async (
  jobTitle: string,
  phoneNumber: string,
  setApiResponse: React.Dispatch<React.SetStateAction<APIResponse | undefined>>
) => {
  await apiFetch(
    setApiResponse,
    "POST",
    JSON.stringify({
      job_title: jobTitle,
      phone_number: phoneNumber,
    })
  );
};

const App = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [apiResponse, setApiResponse] = useState<APIResponse | undefined>(
    undefined
  );

  // On page load, fetch the most recently generated email signature.
  useEffect(() => {
    (async () => {
      await apiFetch(setApiResponse, "GET");
    })();
  }, []);

  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="job-title">Job Title</Label>
          <Input
            name="job-title"
            id="job-title"
            placeholder="Project Manager"
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <Label for="phone-number">Phone Number</Label>
          <Input
            name="phone-number"
            id="phone-number"
            placeholder="+61 400 111 222"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Button onClick={() => submit(jobTitle, phoneNumber, setApiResponse)}>
            Submit
          </Button>
        </FormGroup>
      </Form>
      {apiResponse ? (
        <>
          <h1>Email Signature Generated Successfully</h1>
          <p>
            <strong>Job title:</strong> {apiResponse.job_title}
          </p>
          <p>
            <strong>Phone number:</strong> {apiResponse.phone_number}
          </p>
          <p>
            <strong>Signature:</strong>
          </p>
          <Card>
            <CardBody>{parse(apiResponse.email_signature)}</CardBody>
          </Card>
        </>
      ) : undefined}
    </Container>
  );
};

export default App;
