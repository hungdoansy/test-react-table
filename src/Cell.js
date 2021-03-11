import React from "react";
import styled from "styled-components";

const Cell = ({ className, value }) => {
  return <td className={className}>{value}</td>;
};

export default styled(Cell)`
  min-width: 6em;
  min-height: 1.9em;
  height: 1.9em;
  max-height: 1.9em;
  border: 1px solid rgb(231, 231, 231);
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  text-align: left;
  box-sizing: border-box;
  user-select: none;
`;
