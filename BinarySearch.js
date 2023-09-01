function BinarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return -1;
  }
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const target = 7;
  const index = BinarySearch(arr, target);
  console.log(target+" in index "+ index); 
  