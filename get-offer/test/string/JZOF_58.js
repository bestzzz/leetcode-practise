/**
 * 剑指 Offer 58. 左旋转字符串
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
 * 请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 * 
 * 输入：s = "abcdefg", k = 2
 * 输出："cdefgab"
 * 
 * 输入：s = "lrloseumgh", k = 6
 * 输出："umghlrlose"
 */

// 解：https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/solutions/886550/dai-ma-sui-xiang-lu-dai-ni-gao-ding-zuo-vs2oc/?envType=study-plan-v2&envId=coding-interviews

/**
 * 解题思路：
 * 1. 双指针(空间复杂度高) 第一个指针负责从第n个位置开始走 第二个指针负责把第一个指针所指内容记录
 * 2. 直接原字符串修改 先反转0-n长度字符 再反转n-length长度字符 最后将整个字符反转即可
 */

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
	var length = s.length;
	var step1 = n;
	var step2 = 0;

	var res = new Array(length);
	while (step2 <= length) {
		res.push(s[step1]);
		step2++;
		if (step1 >= length) {
			step1 = 0;
		} else {
			step1++;
		}
	};
	return res.join('');
};

console.log('111', reverseLeftWords('abcdefg', 3));


/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords2 = function(s, n) {
	// 字符反转函数
	var reverse = function (str, left, right) {
		var strArr = str.split('');
		for (var i = left, j = right; i < j; i++, j--) {
			[strArr[i], strArr[j]] = [strArr[j], strArr[i]];
		}
		return strArr.join('');
	};

	// 先反转前面的
	s = reverse(s, 0, n - 1);
	// 再反转后面的
	s = reverse(s, n, s.length - 1);
	// 最后全部反转
	return reverse(s, 0, s.length - 1);
};

console.log('222', reverseLeftWords2('abcdefg', 3));
