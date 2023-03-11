import React from "react";
import Header from "./Header";
import Card from "./Card";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">
        {emojipedia.map((emoji) => (
          <Card
            id={emoji.id}
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
