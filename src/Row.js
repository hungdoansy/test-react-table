import React, { useState } from "react";
import styled from "styled-components";

const RowContainer = styled.tr`
  border-width: ${(props) => (props.hovered ? "2px" : "1px")};
  border-color: ${(props) => (props.hovered ? "blue" : "initial")};
  border-style: solid;
`;

const Row = ({ children, className, index }) => {
  const [hovered, setHoverd] = useState(false);
  console.log("render", index);
  return (
    <RowContainer
      hovered={hovered}
      className={className}
      onMouseEnter={() => {
        setHoverd(true);
      }}
      RowContainer
      onMouseLeave={() => {
        setHoverd(false);
      }}
    >
      {children}
    </RowContainer>
  );
};

export default Row;
