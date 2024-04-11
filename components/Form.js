export default function MemberForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new family member:</h1>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" required></input>
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
