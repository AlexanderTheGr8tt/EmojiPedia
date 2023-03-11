import React from "react";
import Description from "./Description";
import EmojiLogo from "./EmojiLogo";
import EmojiName from "./EmojiName";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <EmojiLogo emoji={props.emoji} />
        <EmojiName name={props.name} />
      </dt>
      <Description meaning={props.meaning} />
    </div>
  );
}

export default Card;
