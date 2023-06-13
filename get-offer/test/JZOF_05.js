/**
 * 剑指 Offer 05. 替换空格
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */

// 解：https://leetcode.cn/problems/ti-huan-kong-ge-lcof/solution/tu-jie-guan-fang-tui-jian-ti-jie-ti-huan-3l74/

const replaceSpaces = s => {
	// 边界
	if (!s || typeof s !== 'string') return '';

	// 预留%20位置
	const resArr = s.split('');
	let spaceCount = 0;
	for (let i = 0; i < resArr.length; i++) {
		if (s[i] === ' ') spaceCount++;
	}
	const resLength = resArr.length + spaceCount * 2;

	// 双指针 
	for (let i = resArr.length - 1, j = resLength - 1; i >=0, j >= 0; i--, j--) {
		const left = resArr[i];
		// 左边指针遇到空格 右边指针直接替换%20
		if (left === ' ') {
			resArr[j] = 0;
			resArr[j - 1] = 2;
			resArr[j - 2] = '%';
			j -= 2;
			continue;
		}
		// 没有空格 则将左边赋值给右边
		resArr[j] = left;
	}

	return resArr.join('');
};

const res = replaceSpaces("We are happy.");
console.log('result: ', res);
