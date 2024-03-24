// import { getFrameMetadata } from "@coinbase/onchainkit";
// import type { Metadata } from "next";
// import { FrameImageUrls, FRAME_BASE_URL } from "../lib/farcaster";
// import RedirectToDemo from "@/components/redirect";

// const frameMetadata = getFrameMetadata({
//   buttons: ["Create a wallet"],
//   image: FrameImageUrls.START,
//   post_url: `${FRAME_BASE_URL}/api/wallet`,
// });

// export const metadata = {
//   title: "Privy Frames",
//   description: "Privy Frames",
//   openGraph: {
//     title: "Privy Frames",
// description: "Privy Frames",
//     images: ["https://privy-frames.vercel.app/og-image.png"],
//   },
//   //   other: {
//   //     ...frameMetadata,
//   //   },
// };
import { fetchMetadata } from "frames.js/next";

export async function generateMetadata() {
  const metadata = await fetchMetadata(
    new URL(
      "/frames",
      process.env.VERCEL_URL
        ? `https://knowledge-cards-two.vercel.app/`
        : "http://localhost:3000"
    )
  );
  console.log("Metadata: ", metadata);
  return {
    title: "My Page",
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
