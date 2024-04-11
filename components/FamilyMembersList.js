export default function FamilyMembersList({ familyMembers }) {
  return (
    <ul>
      {familyMembers.map((member) => (
        <li key={member.id}>
          {member.name} {member.role}
        </li>
      ))}
    </ul>
  );
}
