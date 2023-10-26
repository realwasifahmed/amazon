import React from "react";
import LoadingGif from "../../Assets/loading.gif";

function Loading() {
  return (
    <div className="Loading">
      <img src={LoadingGif} alt="Loading..." />
    </div>
  );
}

export default Loading;
