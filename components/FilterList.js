// components/FilterList.js
import React, { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const FilterOption = styled.div`
  margin-bottom: 10px;
`;

const SubOptions = styled.div`
  margin-left: 20px;
`;

const ExpandButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const FilterList = () => {
  const [expandedOptions, setExpandedOptions] = useState({});

  const toggleOption = (option) => {
    setExpandedOptions({
      ...expandedOptions,
      [option]: !expandedOptions[option],
    });
  };

  return (
    <FilterContainer>
      <h2>Filter List</h2>
      <FilterOption>
        <ExpandButton onClick={() => toggleOption("option1")}>
          {expandedOptions["option1"] ? "▼" : "▶"} Option 1
        </ExpandButton>
        {expandedOptions["option1"] && (
          <SubOptions>
            <input type="checkbox" id="sub-option1" />
            <label htmlFor="sub-option1">Sub-option 1</label>
            <br />
            <input type="checkbox" id="sub-option1" />
            <label htmlFor="sub-option2">Sub-option 2</label>
          </SubOptions>
        )}
      </FilterOption>
      {/* Add more filter options here */}
    </FilterContainer>
  );
};

export default FilterList;
