import { useState } from "react";

function RatingSelect({select}) {
  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    setSelected(Number(e.target.value)); // Convert the value to a number and update the state
    select(selected)
};

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, index) => (
        <li key={index + 1}>
          <input
            type="radio"
            id={`num${index + 1}`}
            name="rating"
            value={index + 1}
            onChange={handleChange}
            checked={selected === index + 1}
          />
          <label htmlFor={`num${index + 1}`}>{index + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
