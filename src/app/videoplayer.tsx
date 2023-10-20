import React from "react";

export default function VideoPlayer() {
  return (
    <div>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.canva.com/design/DAFwNM3EH8A/watch?embed"
        title="YouTube Video Player"
        allowFullScreen
      ></iframe>
    </div>
  );
}