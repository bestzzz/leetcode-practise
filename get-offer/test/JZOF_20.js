/**
 * 剑指 Offer 20. 表示数值的字符串
数值（按顺序）可以分成以下几个部分：

若干空格
一个 小数 或者 整数
（可选）一个 'e' 或 'E' ，后面跟着一个 整数
若干空格
小数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
下述格式之一：
至少一位数字，后面跟着一个点 '.'
至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
一个点 '.' ，后面跟着至少一位数字
整数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
至少一位数字
部分数值列举如下：

["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]
部分非数值列举如下：

["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]

 * 
 * 输入：s = "0"
 * 输出：true
 * 
 * 输入：s = "e"
 * 输出："false"
 * 
 * 输入：s = "."
 * 输出："false"
 * 
 * 输入：s = "    .1  "
 * 输出：true
 */

// 解：https://leetcode.cn/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/solutions/398068/mei-you-za-ji-shi-xian-isnumbermei-you-shi-yong-ku/
// 解：https://leetcode.cn/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/solutions/313141/zheng-ze-yi-xing-by-elastic-shannon/

/**
 * 解题思路：
 * 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
	return /^[+-]?(\d+(\.\d*)?|(\.\d+))(e[+-]?\d+)?$/i.test(s.trim());
};

console.log(isNumber('.1'));
