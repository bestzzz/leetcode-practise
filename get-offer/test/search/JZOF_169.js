/**
 * 169. 招式拆解 II
 * 某套连招动作记作仅由小写字母组成的序列 arr，其中 arr[i] 第 i 个招式的名字。请返回第一个只出现一次的招式名称，如不存在请返回空格。
 * 
 * 示例 1：

输入：arr = "abbccdeff"
输出：'a'
示例 2：

输入：arr = "ccdd"
输出：' '
 */

/**
 * 解题思路：哈希表 将元素以及元素出现的次数以key/value的形式存入map中 后面遍历一遍map则可以得出结果
 * 由于查询元素出现次数的问题 必须将整个数组遍历完 则无法使用二分查找法
 */

/**
 * @param {string} arr
 * @return {character}
 */
var dismantlingAction = function(arr) {
  if (!arr) return ' ';

  const map = {};

  arr.split('').forEach(item => {
    map[item] = map[item] ? map[item] + 1 : 1;
  });

  const entries = Object.entries(map);

  for (let item of entries) {
    if (item[1] === 1) return item[0];
  }

  return ' ';
};

dismantlingAction('abbccdeff')
