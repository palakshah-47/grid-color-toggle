import { Key, useState } from "react";

export const GridComponent = ({
  rows,
  columns,
}: {
  rows: number;
  columns: number;
}) => {
  const [grid, setGrid] = useState(
    Array(rows)
      .fill(null)
      .map(() => Array(columns).fill("white"))
  );

  const getNeighbors = (row, col, n) => {
    const adjacentCells = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    const newCells = adjacentCells
      .map(([dx, dy]) => [row + dx, col + dy])
      .filter(([r, c]) => r >= 0 && r < n && c >= 0 && c < n);
    return newCells;
  };

  const toggleCell = (newGrid, row, col) => {
    newGrid[row][col] = newGrid[row][col] === "white" ? "lightblue" : "white";
  };

  const handleClick = (row: number, col: number) => {
    setGrid((prevGrid: any) => {
      const newGrid = prevGrid.map((r: any) => [...r]);
      toggleCell(newGrid, row, col);

      const neighbours = getNeighbors(row, col, prevGrid.length);
      neighbours.forEach(([r, c]) => toggleCell(newGrid, r, c));

      return newGrid;
    });
  };

  return grid.map((row: number, rowIndex: number) => (
    <div key={rowIndex} style={{ display: "flex" }}>
      {row.map((color: string, colIndex: number) => (
        <div
          key={colIndex}
          style={{
            width: "60px",
            height: "60px",
            background: color,
            border: "1px solid black",
          }}
          onClick={() => handleClick(rowIndex, colIndex)}
        ></div>
      ))}
    </div>
  ));
};
