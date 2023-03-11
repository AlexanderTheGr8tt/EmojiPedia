import React from "react";

function EmojiLogo(props) {
  return (
    <span className="emoji" role="img" aria-label="Tense Biceps">
      {props.emoji}
    </span>
  );
}

export default EmojiLogo;
