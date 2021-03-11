import React from "react";
import styled from "styled-components";

const HeaderCell = ({ className, value }) => {
  return <th className={className}>{value}</th>;
};

export default styled(HeaderCell)`
  position: sticky;
  top: 0px;

  padding: 4px;
  box-sizing: border-box;

  background: #f5f5f5;
  color: #999;
  text-align: center;
  font: inherit;

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
