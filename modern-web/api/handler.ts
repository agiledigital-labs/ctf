import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";

const mapObject = <V>(
  obj: { [name: string]: V },
  func: (value: V | string) => V
) =>
  Object.fromEntries(
    Object.entries(obj).map(([name, value]) => [func(name), func(value)])
  );

// TODO
const removeSpecialProperties = (formData: Record<string, string>) => formData;

exports.ctfEndpoint = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  if (!event.body) {
    throw new Error("No body");
  }

  const formDataRaw: Record<string, string> = JSON.parse(event.body);
  const formDataCleaned = removeSpecialProperties(formDataRaw);
  // Normalise the input
  const formData = mapObject(formDataCleaned, (x: any) => x.toLowerCase());

  // formData["name"]

  return {
    body: JSON.stringify({
      ...formData,
      // Add the special data
      // TODO
    }),
  };
};
