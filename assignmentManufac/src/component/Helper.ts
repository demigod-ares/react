export interface Wine {
  [key: string]: number | string;
}

interface TableColoumn {
  mean: number;
  median: number;
  mode: number;
}

export function getColoumn(array: number[]): TableColoumn {
  const mean: number = calculateMean(array);
  const median: number = calculateMedian(array);
  const mode: number = 3 * median - 2 * mean;
  const roundedMean: number = Number(mean.toFixed(3));
  const roundedMedian: number = Number(median.toFixed(3));
  const roundedMode: number = Number(mode.toFixed(3));

  return {
    mean: roundedMean,
    median: roundedMedian,
    mode: roundedMode,
  };
}

function calculateMean(array: number[]): number {
  return array.reduce((acc, val) => acc + val, 0) / array.length;
}

function calculateMedian(array: number[]): number {
  const sortedArray = array.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
  } else {
    return sortedArray[middle];
  }
}

export function convertToNumber(propertyValue: number| string): number {
if (typeof propertyValue === "string") {
    // Try to parse the string to a float, or fallback to NaN if it's not a valid number
    return parseFloat(propertyValue) || 0; // Change the fallback value as needed
  }
  // If it's not a string, assume it's a number
  return propertyValue as number;
};
