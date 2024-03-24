export const firstFrame = {
  accepts: [
    {
      id: "farcaster",
      version: "vNext",
    },
    {
      id: "xmtp",
      version: "vNext",
    },
  ],
  image: (
    <div tw="flex flex-col">
      <div tw="flex">Get Started with Knowledge Cards</div>
      <div tw="flex">Explore and learn new things</div>
    </div>
  ),
  buttons: [
    <Button
      action="post"
      target={{
        query: { value: "start" },
      }}
    >
      Start
    </Button>,
  ],
  //   textInput: "Type something!",
};
