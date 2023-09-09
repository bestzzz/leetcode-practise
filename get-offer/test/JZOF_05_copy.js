/**
 * 剑指 Offer 05. 替换空格
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */

// 解：https://leetcode.cn/problems/ti-huan-kong-ge-lcof/solution/tu-jie-guan-fang-tui-jian-ti-jie-ti-huan-3l74/

/**
 * 解题思路：
 * 1. 预先将最终字符串长度计算并填充好（空格数 * 2(20%.length-空格.length)）
 * 2. 利用快慢指针 慢指针指向原字符末尾 快指针指向预先填充好的字符末尾
 * 3. 如果非空格 则直接将字符替换
 * 4. 如果遇到空格 则慢指针停留这一步 快指针向前走三步(将前面三格用20%填充)
 * 5. 当指针归0 跳出循环
 */

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
	if (typeof s !== 'string' || !s.length) return '';

	
	var arr = s.split('');
	var oldLength = arr.length;
	var spaceCount = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === ' ') spaceCount++;
	};
  // 1. 预先将最终字符串长度计算并填充好（空格数 * 2(20%.length-空格.length)）
	arr.length += spaceCount * 2;

	// 2. 利用快慢指针 慢指针指向原字符末尾 快指针指向预先填充好的字符末尾
	var step1 = oldLength - 1;
	var step2 = arr.length - 1;
	while (step1 >= 0) {
    // 4. 如果遇到空格 则慢指针停留这一步 快指针向前走三步(将前面三格用20%填充)
		if (s[step1] === ' ') {
			arr[step2] = '0';
			arr[--step2] = '2';
			arr[--step2] = '%';
		} else {
 		// 3. 如果非空格 则直接将字符替换
			arr[step2] = s[step1];
		}
		step1--;
		step2--;
	}
	
	return arr.join('');
};

console.log(replaceSpace('We are happy.'));
