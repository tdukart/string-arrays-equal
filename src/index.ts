/**
 * Compares two arrays of strings to see if they are equal.
 *
 * @param {string[]} arrayA
 * @param {string[]} arrayB
 * @returns {boolean}
 */
function stringArraysEqual(arrayA: string[], arrayB: string[]): boolean {
  if (arrayA.length !== arrayB.length) {
    return false;
  }

  // Sort the arrays.
  const sortedA = arrayA.sort();
  const sortedB = arrayB.sort();
  for (let i = 0; i < sortedA.length; i += 1) {
    if (sortedA[i] !== sortedB[i]) {
      return false;
    }
  }
  return true;
}

export default stringArraysEqual;
