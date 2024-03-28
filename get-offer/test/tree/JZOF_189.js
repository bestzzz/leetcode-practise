/**
 * 189. 设计机械累加器
 * 请设计一个机械累加器，计算从 1、2... 一直累加到目标数值 target 的总和。注意这是一个只能进行加法操作的程序，不具备乘除、if-else、switch-case、for 循环、while 循环，及条件判断语句等高级功能。
 */

/**
 * 解题思路：https://leetcode.cn/problems/qiu-12n-lcof/solutions/271621/javascriptyi-xing-dai-ma-by-zoffer/?envType=study-plan-v2&envId=coding-interviews
 * 让递归来作为迭代的方式 并且利用&&进行逻辑短路。
 */


/**
 * @param {number} target
 * @return {number}
 */
var mechanicalAccumulator = function(target) {
  return target && mechanicalAccumulator(target - 1) + target;
};
