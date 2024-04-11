import { useState } from "react";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [familyMembers, setFamilyMembers] = useState([]);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} familyMembers={familyMembers} />
    </>
  );
}
