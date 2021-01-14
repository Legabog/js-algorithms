let array = [5, 2, 6, 4, 1, 3, 9, 8, 7];

// LinearSearch

function linearSearch(array, el) {
  for (i = 0; i < array.length; i++) {
    if (el === array[i]) {
      return i;
    }
  }

  return -1;
}

// BinarySearch

function binarySearch(array, el) {
  const sortedArray = array.sort((a, b) => a - b);
  let left = 0;
  let right = sortedArray.length - 1;

  while (right - left > 1) {
    const mid = Math.floor((left + right) / 2);

    if (el == array[mid]) {
      return mid;
    }

    if (el < sortedArray[mid]) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return -1;
}

// output LinearSearch
console.log(linearSearch(array, 7));
console.log(binarySearch(array, 8));

// O(log N)
