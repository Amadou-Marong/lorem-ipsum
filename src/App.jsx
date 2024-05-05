import { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count)
    setText(data.slice(0, amount))
  };

  return (
    <section className="section-center">
      <h4>Tired of Lorem Ipsum</h4>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="paragraph">Number of Paragraphs:</label>
        <input
          name="paragraph"
          id="paragraph"
          type="number"
          value={count}
          onChange={(e) => {setCount(e.target.value)}}
          min='1'
          max='8'
          step='1'
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <div className="lorem-text">
        {text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>
        })}
      </div>
    </section>
  );
};
export default App;
