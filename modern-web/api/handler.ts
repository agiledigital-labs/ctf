import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import * as fs from "fs";

const easyMode = process.env.EASY_MODE;

const mapObject = <V>(
  obj: { [name: string]: V },
  func: (value: V | string) => V
) =>
  Object.fromEntries(
    Object.entries(obj).map(([name, value]) => [func(name), value])
  );

// Clean the input data.
const removeSpecialProperties = (formData: Record<string, string>) => {
  const { email_signature, ...rest } = formData;
  return rest;
};

const readStoredFormData = () => {
  try {
    return fs.readFileSync("/tmp/formdata").toString();
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

/**
 * The frontend sends the user's input data as a JSON object. The backend makes some changes and
 * then sends the object back in the response. The frontend then displays that data to the user,
 * including one field that contains HTML.
 * On page load, the front end fetches the most recent data.
 */
exports.ctfEndpoint = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  // TODO: /tmp isn't shared between Lambda invocations, so you might have to refresh the page
  //       a few times to see the new data.
  if (event.body) {
    fs.writeFileSync("/tmp/formdata", event.body);
  }

  const storedFormData = readStoredFormData();

  if (storedFormData) {
    const formDataRaw: Record<string, string> = JSON.parse(storedFormData);
    const formDataCleaned = removeSpecialProperties(formDataRaw);
    // Normalise the map.
    const formData = mapObject(formDataCleaned, (x: any) => x.toLowerCase());

    const whitelistChars = (str: string) =>
      easyMode ? str : str.replace(/[^A-Za-z\d-, ()+]*/g, "");

    const jobTitle = whitelistChars(formData["job_title"]);
    const phoneNumber = whitelistChars(formData["phone_number"]);

    // So you can tap the phone number to call it.
    const telUrl = `tel:${phoneNumber.replace(/[^+\d]*/g, "")}`;

    return {
      headers: {
        "Content-Type": "application/json",
        // CORS
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        // Add formatted email signature.
        email_signature:
          "<p>" +
          `<b>Agile Digital | ${jobTitle}</b><br/>` +
          "Love Your Software&#8482; | ABN 98 106 361 273<br/>" +
          'p: <a href="tel:+611300858277">1300 858 277</a> | ' +
          `m: <a href="${telUrl}">${phoneNumber}</a> | ` +
          'w: <a href="https://agiledigital.com.au">agiledigital.com.au</a>' +
          "</p>",
        ...formData,
      }),
    };
  } else {
    return {
      headers: {
        "Content-Type": "application/json",
        // CORS
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(null),
    };
  }
};
