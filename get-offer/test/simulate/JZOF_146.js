/**
 * 146. 螺旋遍历二维数组
 * 给定一个二维数组 array，请返回「螺旋遍历」该数组的结果。
螺旋遍历：从左上角开始，按照 向右、向下、向左、向上 的顺序 依次 提取元素，然后再进入内部一层重复相同的步骤，直到提取完所有元素。

示例 1：

输入：array = [[1,2,3],[8,9,4],[7,6,5]]
输出：[1,2,3,4,5,6,7,8,9]
示例 2：

输入：array  = [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
输出：[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
 */

/**
 * 解题思路：模拟
 * 模拟四面墙 每走完一面墙 则把墙向前移动 当墙交叉时跳出循环
 */

/**
 * @param {number[][]} array
 * @return {number[]}
 */
var spiralArray = function(matrix) {
  if (matrix.length == 0) return [];
  const res = [];

  // 这里设四面墙 每走完一面墙 则把墙向前移动
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  // 当墙交叉时跳出循环
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    // 这行的处理是因为 上面两个墙已经前移了 所以在这里做一个边界判断
    if (top > bottom || left > right) break;

    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};

console.log(spiralArray([[1,2,3],[8,9,4],[7,6,5]]));
