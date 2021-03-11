import React from "react";
import styled from "styled-components";
import Cell from "./Cell";
import Row from "./Row";
import HeaderCell from "./HeaderCell";
import data from "./data";

const Spreadsheet = ({ className }) => {
  return (
    <table className={className}>
      <thead>
        <tr>
          <HeaderCell value="intent name" />
          <HeaderCell value="topic level intent" />
          <HeaderCell value="# of paraphrases" />
        </tr>
      </thead>

      <tbody>
        {data.map((r, rowIdx) => (
          <Row key={rowIdx} index={rowIdx}>
            {r.map((v, cellIdx) => (
              <Cell key={cellIdx} value={v} />
            ))}
          </Row>
        ))}
      </tbody>
    </table>
  );
};

export default styled(Spreadsheet)`
  border-collapse: collapse;
  table-layout: fixed;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: grey;
`;
