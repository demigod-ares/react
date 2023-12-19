import React from "react";
import { convertToNumber, getColoumn } from "./Helper";
import { wineData } from "./WineData";

export const flavanoidsMap = wineData.reduce((map, wine) => {
  const alcohol = wine["Alcohol"];
  const flavanoids = wine["Flavanoids"];
  if (!map.has(alcohol)) {
    map.set(alcohol, []);
  }
  map.get(alcohol).push(convertToNumber(flavanoids));

  return map;
}, new Map());

const Flavanoid: React.FC<{ flavanoidsMap: Map<number, number[]> }> = ({
  flavanoidsMap,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Alcohol Class</th>
          <th>Flavanoids Mean</th>
          <th>Flavanoids Median</th>
          <th>Flavanoids Mode</th>
        </tr>
      </thead>
      <tbody>
        {Array.from(flavanoidsMap).map(([alcoholClass, values]) => {
          const statistics = getColoumn(values);
          return (
            <tr key={alcoholClass}>
              <td>{`Class ${alcoholClass}`}</td>
              <td>{statistics.mean}</td>
              <td>{statistics.median}</td>
              <td>{statistics.mode}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Flavanoid;
