// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

const numArray = [10, 0, 4, -1, -4, 1, -1];
const arrayOfZeroes = [0, 0, 0, 0];

// positive if we have
const getClosestToZero = (array: number[]): number => {
  if (!array || array.length === 0)
    throw new Error('There are issues with the array you provided');

  let found = array[0];
  let onlyZeroes = true;

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (item !== 0) {
      onlyZeroes = false;
      if (
        item !== 0 &&
        (Math.abs(item) < Math.abs(found) || item === Math.abs(found))
      ) {
        found = item;
      }
    }
  }

  if (onlyZeroes === true)
    throw new Error('Array must contain numbers other than zeroes');

  return found;
};

appDiv.innerHTML = `<h1>TypeScript Starter</h1> ${getClosestToZero(numArray)}`;
