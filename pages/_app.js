import { useState } from "react";
import GlobalStyle from "../styles";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [familyMembers, setFamilyMembers] = useState([]);

  function handleAddMember(formData) {
    setFamilyMembers([
      ...familyMembers,
      { id: uid(), name: formData.name, role: formData.role },
    ]);
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} familyMembers={familyMembers} handleAddMember={handleAddMember}/>
    </>
  );
}
