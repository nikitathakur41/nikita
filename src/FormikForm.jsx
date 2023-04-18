import { useState } from "react";

function InputForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "age") {
      setAge(value);
    }
  };

  const handleSubmit = (event) => {
   // . . .
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={handleInputChange} />
      <input name="age" value={age} onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputForm;