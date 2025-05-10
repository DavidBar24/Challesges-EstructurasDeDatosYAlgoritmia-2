import { useState } from "react";

function PersonForm({ onAdd }) {
  const [person, setPerson] = useState({ name: "", amount: "" });

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(person);
    setPerson({ name: "", amount: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Individuo" value={person.name} onChange={handleChange} required />
      <input type="number" name="amount" placeholder="Dinero Retirado" value={person.amount} onChange={handleChange} required />
      <button type="submit">Añadir</button>
    </form>
  );
}

export default PersonForm;