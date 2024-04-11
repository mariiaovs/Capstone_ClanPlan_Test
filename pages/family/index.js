import FamilyMembersList from "@/components/FamilyMembersList";
import MemberForm from "@/components/Form";
import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: black;
  opacity: 30%;
`;

const StyledSection = styled.section`
  width: 500px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 10%;
  right: 30%;
  padding: 20px;
`;

export default function FamilyPage({ familyMembers }) {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <p>
        From Wikipedia, the free encyclopedia This article is about the New
        South Wales waratah. For other species of telopea, see waratah. Telopea
        speciosissima a red dome-shaped flowerhead made up of hundreds of red
        flowers in bushland Telopea speciosissima flowerhead with florets
        opening from the edges towards the centre, Blue Mountains, Australia
        Scientific classificationEdit this classification Kingdom: Plantae
        Clade: Tracheophytes Clade: Angiosperms Clade: Eudicots Order: Proteales
        Family: Proteaceae Genus: Telopea Species: T. speciosissima Binomial
        name Telopea speciosissima (Sm.) R.Br.[1] Synonyms[2] Embothrium
        speciosissimum (Sm.) Embothrium speciosissimum (Salisb. nom. illeg.)
        Hylogyne speciosa ((Salisb.) Salisb. ex Knight nom. illeg. nom. rej.)
        Telopea speciosissima, commonly known as the New South Wales waratah or
        simply waratah, is a large shrub in the plant family Proteaceae. It is
        endemic to New South Wales in Australia and is the floral emblem of that
        state. No subspecies are recognised, but the closely related Telopea
        aspera was only recently classified as a separate species. T.
        speciosissima is a shrub to 3 or 4 m (9.8 or 13.1 ft) high and 2 m (6.6
        ft) wide, with dark green leaves. Its several stems arise from a
        pronounced woody base known as a lignotuber. The species is well
        renowned for its striking large red springtime inflorescences
        (flowerheads), each including hundreds of individual flowers. These are
        visited by the eastern pygmy possum (Cercartetus nanus), birds such as
        honeyeaters (Meliphagidae), and various insects. The floral emblem for
        its home state of New South Wales, Telopea speciosissima has featured
        prominently in art, architecture, and advertising, particularly since
        Australian federation. Commercially grown in several countries as a cut
        flower, it is also cultivated in home gardens, requiring good drainage
        yet adequate moisture, but is vulnerable to various fungal diseases and
        pests. A number of cultivars with various shades of red, pink and even
        white flowers are available. Horticulturists have also developed hybrids
        with T. oreades and T. mongaensis which are more tolerant of cold,
        shade, and heavier soils.
      </p>
      <FamilyMembersList familyMembers={familyMembers} />
      <button onClick={() => setModal(true)}>+</button>
      {modal && (
        <>
          <StyledDiv onClick={() => setModal(false)}></StyledDiv>
          <StyledSection>
            <MemberForm />
          </StyledSection>
        </>
      )}
    </div>
  );
}
