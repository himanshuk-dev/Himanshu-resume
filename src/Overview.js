import React from "react";

const Overview = ({ points, keywords }) => {
  const highlightKeywords = (text, keywords) => {
    let startIndex = 0;
    const parts = [];

    keywords.forEach((keyword) => {
      let i = text.indexOf(keyword, startIndex);
      if (i !== -1) {
        if (i > startIndex) {
          parts.push({ text: text.slice(startIndex, i), isKeyword: false });
        }
        parts.push({ text: keyword, isKeyword: true });
        startIndex = i + keyword.length;
      }
    });

    if (startIndex < text.length) {
      parts.push({ text: text.slice(startIndex), isKeyword: false });
    }

    return parts;
  };

  return (
    <ul>
      {points.map((point, index) => (
        <li key={index}>
          {highlightKeywords(point, keywords).map((part, i) => (
            <span
              key={i}
              style={{ fontWeight: part.isKeyword ? "bold" : "normal" }}
            >
              {part.text}
            </span>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default Overview;
