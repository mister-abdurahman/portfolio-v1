import React from "react";

export default function VideoPlayer() {
  return (
    <div>
      <iframe
        // width="100%" // Set the width of the video player
        // height="100%" // Set the height of the video player
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.canva.com/design/DAFwNM3EH8A/watch?embed"
        title="YouTube Video Player"
        allowFullScreen
      ></iframe>
    </div>
  );
}

{
  /* <div style="position: relative; width: 100%; height: 0; padding-top: 177.7778%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFwNM3EH8A&#x2F;watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFwNM3EH8A&#x2F;watch?utm_content=DAFwNM3EH8A&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Design</a> */
}
