import React, { useState } from "react";
import "./styles.css";
const novelDB = {
  Romance: [
    { name: "Pride and Prejudice", rating: "4/5" },
    { name: "Outlander", rating: "4.2/5" },
    { name: "The Notebook", rating: "4.1/5" }
  ],
  Thriller: [
    { name: "Gone Girl", rating: "4.2/5" },
    { name: "The Silent Patient", rating: "4.1/5" },
    { name: "The Girl on the Train", rating: "4/5" }
  ],
  Psychological: [
    { name: "The Portrait of a Lady", rating: "3.5/5" },
    { name: "Cold Comfort Farm", rating: "4.2/5" },
    { name: "The Bookshop", rating: "3.2/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Romance");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="books">
          📚
        </span>
        Good Novels
      </h1>

      <p style={{ padding: "1%", fontSize: "smaller" }}>
        Check out my ratings for some of my favourite Novels. Select a genre to
        get started
      </p>

      <div>
        {Object.keys(novelDB).map((genre) => (
          <button
            key={genre}
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              borderRadius: "0.2rem",
              padding: ".5rem 2rem",
              color: "white",
              border: "none",
              margin: "2rem 0.5rem",
              backgroundColor: "#7c3aed"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center", width: "50%" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {novelDB[selectedGenre].map((novel) => (
            <li
              key={novel.name}
              style={{
                listStyle: "none",
                padding: ".5rem",
                border: "1px solid black",
                width: "50%",
                margin: "1% 72.5%",
                borderRadius: "0.2rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {novel.name}</div>
              <div style={{ fontSize: "smaller" }}> {novel.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
