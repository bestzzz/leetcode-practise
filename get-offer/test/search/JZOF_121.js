/**
 * 121. 寻找目标值 - 二维数组
 * m*n 的二维数组 plants 记录了园林景观的植物排布情况，具有以下特性：

每行中，每棵植物的右侧相邻植物不矮于该植物；
每列中，每棵植物的下侧相邻植物不矮于该植物。

请判断 plants 中是否存在目标高度值 target。

 

示例 1：

输入：plants = [[2,3,6,8],[4,5,8,9],[5,9,10,12]], target = 8

输出：true
 

示例 2：

输入：plants = [[1,3,5],[2,5,7]], target = 4
 */


/**
 * 解题思路：https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/solutions/661895/zuo-biao-zhou-fa-he-wei-sde-liang-ge-shu-rj11/?envType=study-plan-v2&envId=coding-interviews
 * 坐标轴法
 * 将二维数组比作一个坐标轴 第一行为x轴 最后一列为y轴（右上角为原点）。
 * 或者以左下角为原点也行（最后一行为x轴 第一列为y轴）
 * 不能以左上角或者右下角为原点的原因是：往下往右走都是递增 无法区分方向
 * 
 * 以右上角为原点举例：
 * 遍历二维数组 当目标值大于当前值 则让原点向下走(x++)
 * 当目标值小于当前值 则让原点向左走(y--)
 */


/**
 * @param {number[][]} plants
 * @param {number} target
 * @return {boolean}
 */
var findTargetIn2DPlants = function(plants, target) {
  if (!plants?.length || !target && target !== 0) return false;
  let x = 0, y = plants[0].length - 1;
  while (x < plants.length && y < plants[0].length) {
    const cur = plants[x][y];
    if (cur < target) {
      x++;
    } else if (cur > target) {
      y--;
    } else if (cur === target) {
      return true;
    } else {
      return false;
    }
  }
  
  return false;
};

console.log(findTargetIn2DPlants([[2,3,6,8],[4,5,8,9],[5,9,10,12]], 8));
