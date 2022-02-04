
let array_aleatorio = [56, 3, 7, -1, 9, 98, 75, 4, 82, 50, 923, 859, 845, 37];


// Selection Sort:
let selectionSort = (array) => {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }
    }
    return array;
};

//Quicksort Recursivo:
function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  }
  
console.log("Array fora de ordem: ", array_aleatorio);
console.log("\nQuickSort: ", quicksort(array_aleatorio));
console.log("\nSectionSort: ", selectionSort(array_aleatorio));
