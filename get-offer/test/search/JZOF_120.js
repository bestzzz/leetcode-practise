/**
 * 120. 寻找文件副本
 * 设备中存有 n 个文件，文件 id 记于数组 documents。若文件 id 相同，则定义为该文件存在副本。请返回任一存在副本的文件 id。
 * 示例 1：
输入：documents = [2, 5, 3, 0, 5, 0]
输出：0 或 5
 */


/**
 * 解题思路：https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/solutions/661437/ha-xi-biao-shu-zu-zhong-zhong-fu-de-shu-bh7co/?envType=study-plan-v2&envId=coding-interviews
 * 借助哈希表 查找方便
 */

/**
 * @param {number[]} documents
 * @return {number}
 */
var findRepeatDocument = function(documents) {
  const map = {};
  for (let i = 0; i < documents.length; i++) {
    const item = documents[i];
    if (map[item]) {
      return item;
    }
    map[item] = 1;
  }
  return null;
};

console.log(findRepeatDocument([2, 5, 3, 0, 5, 0]));
