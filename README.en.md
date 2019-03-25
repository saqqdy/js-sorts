# js_sorts

### Description

常用的 JS 排序算法

#### Software Architecture

Software architecture description

### Installation

```
# 安装
1. npm install --save js_sorts
# 引入
2. import { bubbleSort, bucketSort } from 'js_sorts'
# 使用
3. bubbleSort(array)
```

### Instructions

#### Functions

<dl>
<dt><a href="#bubbleSort">bubbleSort(arr)</a> ⇒ <code>Array</code></dt>
<dd><p>方法说明：冒泡排序</p>
</dd>
<dt><a href="#bubbleSort2">bubbleSort2(传入数组，返回排序)</a> ⇒ <code>Array</code></dt>
<dd><ol>
<li>改进冒泡排序</li>
</ol>
</dd>
<dt><a href="#bubbleSort3">bubbleSort3(arr)</a> ⇒ <code>Array</code></dt>
<dd><ol start="2">
<li>改进冒泡排序</li>
</ol>
</dd>
<dt><a href="#bucketSort">bucketSort(array, num)</a> ⇒ <code>Array</code></dt>
<dd><p>方法说明：桶排序</p>
</dd>
<dt><a href="#countingSort">countingSort(array)</a> ⇒ <code>Array</code></dt>
<dd><p>方法说明：计数排序</p>
</dd>
<dt><a href="#heapSort">heapSort(array)</a> ⇒ <code>Array</code></dt>
<dd><p>方法说明：堆排序</p>
</dd>
<dt><a href="#heapify">heapify(arr, x, len)</a></dt>
<dd><p>方法说明：维护堆的性质</p>
</dd>
<dt><a href="#insertionSort">insertionSort(array)</a> ⇒ <code>Array</code></dt>
<dd><p>方法说明：插入排序</p>
</dd>
<dt><a href="#binaryInsertionSort">binaryInsertionSort(array)</a> ⇒ <code>Array</code></dt>
<dd><p>二分插入排序</p>
</dd>
<dt><a href="#mergeSort">mergeSort(arr)</a> ⇒ <code>Array</code></dt>
<dd><p>方法说明：归并排序</p>
</dd>
<dt><a href="#quickSort">quickSort(array)</a> ⇒ <code>Array</code></dt>
<dd><p>方法说明：快速排序 方法一</p>
</dd>
<dt><a href="#quickSort2">quickSort2(array)</a> ⇒ <code>Array</code></dt>
<dd><p>方法说明：快速排序 方法二</p>
</dd>
<dt><a href="#radixSort">radixSort(arr, maxDigit)</a> ⇒ <code>Array</code></dt>
<dd><p>方法说明：基数排序</p>
</dd>
<dt><a href="#selectionSort">selectionSort(arr)</a> ⇒ <code>Array</code></dt>
<dd><p>方法说明：选择排序</p>
</dd>
<dt><a href="#shellSort">shellSort(arr)</a> ⇒ <code>Array</code></dt>
<dd><p>方法说明：希尔排序</p>
</dd>
</dl>

<a name="bubbleSort"></a>

#### bubbleSort(arr) ⇒ <code>Array</code>
方法说明：冒泡排序

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 

<a name="bubbleSort2"></a>

#### bubbleSort2(传入数组，返回排序) ⇒ <code>Array</code>
1. 改进冒泡排序

**Kind**: global function  

| Param | Type |
| --- | --- |
| 传入数组，返回排序 | <code>Array</code> | 

<a name="bubbleSort3"></a>

#### bubbleSort3(arr) ⇒ <code>Array</code>
2. 改进冒泡排序

**Kind**: global function  

| Param |
| --- |
| arr | 

<a name="bucketSort"></a>

#### bucketSort(array, num) ⇒ <code>Array</code>
方法说明：桶排序

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | 数组 |
| num | <code>number</code> | 桶的数量 |

<a name="countingSort"></a>

#### countingSort(array) ⇒ <code>Array</code>
方法说明：计数排序

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | 待排序数组 |

<a name="heapSort"></a>

#### heapSort(array) ⇒ <code>Array</code>
方法说明：堆排序

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | 待排序数组 |

<a name="heapify"></a>

#### heapify(arr, x, len)
方法说明：维护堆的性质

**Kind**: global function  

| Param | Description |
| --- | --- |
| arr | 数组 |
| x | 数组下标 |
| len | 堆大小 |

<a name="insertionSort"></a>

#### insertionSort(array) ⇒ <code>Array</code>
方法说明：插入排序

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | 待排序数组 |

<a name="binaryInsertionSort"></a>

#### binaryInsertionSort(array) ⇒ <code>Array</code>
二分插入排序

**Kind**: global function  

| Param |
| --- |
| array | 

<a name="mergeSort"></a>

#### mergeSort(arr) ⇒ <code>Array</code>
方法说明：归并排序

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | 待排序数组 |

<a name="quickSort"></a>

#### quickSort(array) ⇒ <code>Array</code>
方法说明：快速排序 方法一

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | 待排序数组 |

<a name="quickSort2"></a>

#### quickSort2(array) ⇒ <code>Array</code>
方法说明：快速排序 方法二

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | 待排序数组 |

<a name="radixSort"></a>

#### radixSort(arr, maxDigit) ⇒ <code>Array</code>
方法说明：基数排序

**Kind**: global function  

| Param | Description |
| --- | --- |
| arr | 待排序数组 |
| maxDigit | 最大位数 |

<a name="selectionSort"></a>

#### selectionSort(arr) ⇒ <code>Array</code>
方法说明：选择排序

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | 待排序数组 |

<a name="shellSort"></a>

#### shellSort(arr) ⇒ <code>Array</code>
方法说明：希尔排序

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | 待排序数组 |

### Contribution

1. Fork the repository
2. Create Feat_xxx branch
3. Commit your code
4. Create Pull Request

### Gitee Feature

- ***使用*** _Readme\_XXX.md_ 来支持不同的语言，`例如` _Readme\_en.md, Readme\_zh.md_
- 我的码云：[https://gitee.com/saqqdy](https://gitee.com/saqqdy)
- 我的Github：[https://github.com/saqqdy](https://github.com/saqqdy)
- 我的npm：[https://npmjs.com/~saqqdy](https://npmjs.com/~saqqdy)
- 我的个人网站 [http://www.saqqdy.com](http://www.saqqdy.com)

