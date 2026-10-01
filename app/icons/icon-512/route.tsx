import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export function GET(_req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          borderRadius: 100,
          background: "linear-gradient(135deg, #58cc02 0%, #1cb0f6 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 300,
        }}
      >
        🎌
      </div>
    ),
    { width: 512, height: 512 },
  );
}
