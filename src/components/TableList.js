import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import styled from 'styled-components';

const StripedTable = styled.table`
  width: 100%;
  margin-bottom: 170px;
  border-collapse: collapse;
  text-align: left;

  tbody tr:nth-of-type(2n + 1) {
    background-color: ${props => props.theme.offWhite10};
  }

  td,
  th {
    padding: 1rem 0.75rem;
  }
`;

function TableList(props) {
  return (
    <StripedTable>
      <thead>
        <tr>
          <th scope="col">About</th>
          <th scope="col">Author</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {props.tableData.map(article => (
          <tr>
            <td>
              <OutboundLink
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.title}
              </OutboundLink>
            </td>
            <td>
              <OutboundLink
                href={article.source.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.source.name}
              </OutboundLink>
            </td>
            <td>{article.date}</td>
          </tr>
        ))}
      </tbody>
    </StripedTable>
  );
}

export default TableList;
