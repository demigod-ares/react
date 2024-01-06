import React from "react";
import { convertToNumber, getColoumn } from "./Helper";
import { wineData } from "./WineData";

export const gammaMap = wineData.reduce((map, wine) => {
  const alcohol = wine["Alcohol"];
  const ash: number = convertToNumber(wine["Ash"]);
  const hue: number = convertToNumber(wine["Hue"]);
  const magnesium: number = convertToNumber(wine["Magnesium"]);
  const gamma: number = (ash * hue) / magnesium;
  //Gamma = (Ash * Hue) / Magnesium.
  if (!map.has(alcohol)) {
    map.set(alcohol, []);
  }
  map.get(alcohol).push(gamma);

  return map;
}, new Map());

const Gamma: React.FC<{ gammaMap: Map<number, number[]> }> = ({
  gammaMap,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Alcohol Class</th>
          <th>Gamma Mean</th>
          <th>Gamma Median</th>
          <th>Gamma Mode</th>
        </tr>
      </thead>
      <tbody>
        {Array.from(gammaMap).map(([alcoholClass, values]) => {
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

export default Gamma;
