import { useState } from "react";

export default function MemberForm({ handleAddMember }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log(handleAddMember);
    handleAddMember(data);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new family member:</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        value={value}
        onChange={handleChange}
      ></input>
      <br />
      <label htmlfor="role">Role:</label>
      <select name="role" id="role" required>
        <option value="">Please select a role</option>
        <option value="Parent">Parent</option>
        <option value="Child">Child</option>
        <option value="Caregiver">Caregiver</option>
      </select>
      <br />
      <button>Add</button>
    </form>
  );
}
