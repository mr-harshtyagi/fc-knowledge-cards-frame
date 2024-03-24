// api/frames/route.tsx
/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";

const frames = createFrames({
  basePath: "/api/frames",
});

const handleRequest = frames(async (ctx) => {
  const type = ctx.searchParams.value || "home";

  if (type === "home") {
    return {
      image: (
        <div tw="flex flex-col justify-center items-center w-full h-full">
          <p tw="text-[40px]">Welcome to the Knowledge Cards Frame!</p>
          <p tw="">Click the button below to get started.</p>
        </div>
      ),
      buttons: [
        <Button action="post" target={{ query: { value: "start" } }}>
          Get Started
        </Button>,
      ],
    };
  } else if (type === "start") {
    return {
      image: (
        <div tw="flex flex-col justify-center items-center w-full h-full">
          <p tw="text-[40px]">Start Exploring!</p>
          <p tw="">Enter a text to search.</p>
        </div>
      ),
      buttons: [
        <Button action="post" target={{ query: { value: "result" } }}>
          Search
        </Button>,
      ],
      textInput: "Type here!",
    };
  } else if (type === "result") {
    // Call the API to get the results
    console.log("input text :", ctx.message.inputText);
    const results = await callApi(ctx.message.inputText);
    console.log("results :", results);
    return {
      image: (
        <div tw="flex flex-col justify-center items-center w-full h-full">
          <p tw="text-[40px]">Here are your results!</p>
          <p tw="">{results}</p>
        </div>
      ),
      buttons: [
        <Button action="post" target={{ query: { value: "start" } }}>
          Search Again
        </Button>,
      ],
    };
  } else if (type === "error") {
    return {
      image: <span>There was an error</span>,
      buttons: [
        <Button action="post" target={{ query: { value: "home" } }}>
          Go to Home
        </Button>,
      ],
    };
  }
});

export const GET = handleRequest;
export const POST = handleRequest;

const callApi = async (inputText) => {
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log("API results:", data);
  return inputText;
};
