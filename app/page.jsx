import { fetchMetadata } from "frames.js/next";

export async function generateMetadata() {
  const metadata = await fetchMetadata(
    new URL(
      "/api/frames",
      process.env.VERCEL_URL
        ? `https://knowledge-cards-two.vercel.app/`
        : "http://localhost:3000"
    )
  );
  // console.log("Metadata: ", metadata);
  return {
    title: "Knowledge Cards",
    // provide a full URL to your /frames endpoint
    other: metadata,
  };
}

export default function Page() {
  return (
    <>
      <h1>Knowledge Cards Frame</h1>
    </>
  );
}
