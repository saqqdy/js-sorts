/**
 * 方法说明：冒泡排序
 * @param {Array} arr
 * @return {Array}
 */
function bubbleSort(arr) {
  var len = arr.length;
  // console.time('改进前冒泡排序耗时');
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) { //相邻元素两两对比
        var temp = arr[j + 1]; //元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  // console.timeEnd('改进前冒泡排序耗时');
  return arr;
}

/**
 * 1. 改进冒泡排序
 * @param  {Array} 传入数组，返回排序
 * @returns  {Array}
 */
function bubbleSort2(arr) {
  // console.time('1.改进后冒泡排序耗时');
  var i = arr.length - 1; //初始时,最后位置保持不变
  while (i > 0) {
    var pos = 0; //每趟开始时,无记录交换
    for (var j = 0; j < i; j++)
      if (arr[j] > arr[j + 1]) {
        pos = j; //记录交换的位置
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    i = pos; //为下一趟排序作准备
  }
  // console.timeEnd('1.改进后冒泡排序耗时');
  return arr;
}

/**
 * 2. 改进冒泡排序
 * @param  {} arr
 * @returns  {Array}
 */
function bubbleSort3(arr) {
  var low = 0;
  var high = arr.length - 1; //设置变量的初始值
  var tmp, j;
  // console.time('2.改进后冒泡排序耗时');
  while (low < high) {
    for (j = low; j < high; ++j) //正向冒泡,找到最大者
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      -- high; //修改high值, 前移一位
    for (j = high; j > low; --j) //反向冒泡,找到最小者
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
      ++ low; //修改low值,后移一位
  }
  // console.timeEnd('2.改进后冒泡排序耗时');
  return arr;
}


/**
 * 方法说明：桶排序
 * @param {Array} array 数组
 * @param {number} num   桶的数量
 * @return {Array}
 */
function bucketSort(array, num) {
  if (array.length <= 1) {
    return array;
  }
  var len = array.length,
    buckets = [],
    result = [],
    min = max = array[0],
    regex = '/^[1-9]+[0-9]*$/',
    space, n = 0;
  num = num || ((num > 1 && regex.test(num)) ? num : 10);
  // console.time('桶排序耗时');
  for (var i = 1; i < len; i++) {
    min = min <= array[i] ? min : array[i];
    max = max >= array[i] ? max : array[i];
  }
  space = (max - min + 1) / num;
  for (var j = 0; j < len; j++) {
    var index = Math.floor((array[j] - min) / space);
    if (buckets[index]) { //  非空桶，插入排序
      var k = buckets[index].length - 1;
      while (k >= 0 && buckets[index][k] > array[j]) {
        buckets[index][k + 1] = buckets[index][k];
        k--;
      }
      buckets[index][k + 1] = array[j];
    } else { //空桶，初始化
      buckets[index] = [];
      buckets[index].push(array[j]);
    }
  }
  while (n < num) {
    result = result.concat(buckets[n]);
    n++;
  }
  // console.timeEnd('桶排序耗时');
  return result;
}

/**
 * 方法说明：计数排序
 * @param {Array} array 待排序数组
 * @return {Array}
 */
function countingSort(array) {
  var len = array.length,
    B = [],
    C = [],
    min = max = array[0];
  // console.time('计数排序耗时');
  for (var i = 0; i < len; i++) {
    min = min <= array[i] ? min : array[i];
    max = max >= array[i] ? max : array[i];
    C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
  }
  for (var j = min; j < max; j++) {
    C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
  }
  for (var k = len - 1; k >= 0; k--) {
    B[C[array[k]] - 1] = array[k];
    C[array[k]]--;
  }
  // console.timeEnd('计数排序耗时');
  return B;
}

/**
 * 方法说明：堆排序
 * @param {Array} array 待排序数组
 * @return {Array}
 */
function heapSort(array) {
  // console.time('堆排序耗时');
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    //建堆
    var heapSize = array.length,
      temp;
    for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
      heapify(array, i, heapSize);
    }

    //堆排序
    for (var j = heapSize - 1; j >= 1; j--) {
      temp = array[0];
      array[0] = array[j];
      array[j] = temp;
      heapify(array, 0, --heapSize);
    }
    // console.timeEnd('堆排序耗时');
    return array;
  } else {
    return 'array is not an Array!';
  }
}
/** 
 * 方法说明：维护堆的性质
 * @param  arr 数组
 * @param  x   数组下标
 * @param  len 堆大小
 */
function heapify(arr, x, len) {
  if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
    var l = 2 * x + 1,
      r = 2 * x + 2,
      largest = x,
      temp;
    if (l < len && arr[l] > arr[largest]) {
      largest = l;
    }
    if (r < len && arr[r] > arr[largest]) {
      largest = r;
    }
    if (largest != x) {
      temp = arr[x];
      arr[x] = arr[largest];
      arr[largest] = temp;
      heapify(arr, largest, len);
    }
  } else {
    return 'arr is not an Array or x is not a number!';
  }
}

/**
 * 方法说明：插入排序
 * @param {Array} array 待排序数组
 * @return {Array}
 */
function insertionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    // console.time('插入排序耗时：');
    for (var i = 1; i < array.length; i++) {
      var key = array[i];
      var j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = key;
    }
    // console.timeEnd('插入排序耗时：');
    return array;
  } else {
    return 'array is not an Array!';
  }
}

/**
 * 二分插入排序
 * @param  {} array
 * @return {Array}
 */
function binaryInsertionSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
    // console.time('二分插入排序耗时：');

    for (var i = 1; i < array.length; i++) {
      var key = array[i],
        left = 0,
        right = i - 1;
      while (left <= right) {
        var middle = parseInt((left + right) / 2);
        if (key < array[middle]) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      }
      for (var j = i - 1; j >= left; j--) {
        array[j + 1] = array[j];
      }
      array[left] = key;
    }
    // console.timeEnd('二分插入排序耗时：');

    return array;
  } else {
    return 'array is not an Array!';
  }
}

/**
 * 方法说明：归并排序
 * @param {Array} arr 待排序数组
 * @return {Array}
 */
function mergeSort(arr) { //采用自上而下的递归方法
  var len = arr.length;
  if (len < 2) {
    return arr;
  }
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];
  // console.time('归并排序耗时');
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());
  // console.timeEnd('归并排序耗时');
  return result;
}

/**
 * 方法说明：快速排序 方法一
 * @param {Array} array 待排序数组
 * @return {Array}
 */
//方法一
function quickSort(array, left, right) {
  // console.time('1.快速排序耗时');
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array' && typeof left === 'number' && typeof right === 'number') {
    if (left < right) {
      var x = array[right],
        i = left - 1,
        temp;
      for (var j = left; j <= right; j++) {
        if (array[j] <= x) {
          i++;
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
      quickSort(array, left, i - 1);
      quickSort(array, i + 1, right);
    }
    // console.timeEnd('1.快速排序耗时');
    return array;
  } else {
    return 'array is not an Array or left or right is not a number!';
  }
}

/**
 * 方法说明：快速排序 方法二
 * @param {Array} array 待排序数组
 * @return {Array}
 */
var quickSort2 = function (arr) {
  // console.time('2.快速排序耗时');
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // console.timeEnd('2.快速排序耗时');
  return quickSort2(left).concat([pivot], quickSort2(right));
};

/**
 * 方法说明：基数排序
 * @param  arr 待排序数组
 * @param  maxDigit 最大位数
 * @return {Array}
 */
//LSD Radix Sort
function radixSort(arr, maxDigit) {
  var mod = 10;
  var dev = 1;
  var counter = [];
  // console.time('基数排序耗时');
  for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (var j = 0; j < arr.length; j++) {
      var bucket = parseInt((arr[j] % mod) / dev);
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    var pos = 0;
    for (var j = 0; j < counter.length; j++) {
      var value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
  // console.timeEnd('基数排序耗时');
  return arr;
}

/**
 * 方法说明：选择排序
 * @param {Array} arr 待排序数组
 * @return {Array}
 */
function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;
  // console.time('选择排序耗时');
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) { //寻找最小的数
        minIndex = j; //将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  // console.timeEnd('选择排序耗时');
  return arr;
}

/**
 * 方法说明：希尔排序
 * @param {Array} arr 待排序数组
 * @return {Array}
 */
function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1;
  // console.time('希尔排序耗时:');
  while (gap < len / 5) { //动态定义间隔序列
    gap = gap * 5 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (var i = gap; i < len; i++) {
      temp = arr[i];
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  // console.timeEnd('希尔排序耗时:');
  return arr;
}