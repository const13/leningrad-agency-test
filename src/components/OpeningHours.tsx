import React from 'react';
import styled from 'styled-components';

const OpeningHoursStyled = styled.section`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;

  table {
    width: 241px;
    border-collapse: collapse;
    border-spacing: 0;
    text-transform: uppercase;

    tr {
      height: 41px;
    }

    tr:nth-child(odd) {
      background-color: #eeeeee;
    }
  }
`;

function OpeningHours() {
  return (
      <OpeningHoursStyled>
        <h3>Часы работы</h3>
        <table>
          <tbody>
            <tr>
              <td>пн-пт</td>
              <td>10-18</td>
            </tr>
            <tr>
              <td>сб</td>
              <td>10-16</td>
            </tr>
            <tr>
              <td>вс</td>
              <td>12-16</td>
            </tr>
          </tbody>
        </table>
      </OpeningHoursStyled>
  );
}

export default OpeningHours;
