import fetch from "node-fetch";

export const _testingEndpointInference = async (text: string, auth: any) => {
    console.log(text);
    console.log(auth);

    // Need to look up how to format this again
    const body = {
      "instances": [
        { "instance_key_1": "value"}
      ]
    };

    // Hard coding this temporarily, will eventually change to project environment variables
    // Values won't work because KitchenPantry is on different project
    const ENDPOINT_ID = "2323373622606954496";
    const PROJECT_ID = "740457994563";
    const LOCATION = "us-west1-b";

    let url = "https://us-central1-aiplatform.googleapis.com/v1/";
    url += "projects/" + PROJECT_ID;
    url += "/locations/" + LOCATION + "/";
    url += "endpoints/" + ENDPOINT_ID + ":predict";


    try {
        const response = await fetch(url, {
            method: "GET",
            body: JSON.stringify(body)
        });

        const data = await response.json();
        console.log(data);

    } catch(error) {
        console.log(error.message);
        console.log(error.stack);
        return error;
    }
};

