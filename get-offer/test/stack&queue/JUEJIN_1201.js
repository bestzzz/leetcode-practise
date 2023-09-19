/**
 * 掘金小测12节1题: “有效括号”问题
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足： 左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
 * 

示例 1:
输入: "()"
输出: true

示例 2:
输入: "()[]{}"
输出: true

示例 4:
输入: "([)]"
输出: false
示例 5:
输入: "{[]}"
输出: true
 */

/**
 * 解题思路：https://juejin.cn/book/6844733800300150797/section/6844733800354709511?enter_from=course_center&utm_source=course_center
 * 
 * 栈的特点：先进后出 对称性
 */

const isValid = function(s) {
  const leftMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (Object.keys(leftMap).includes(item)) {
      stack.push(leftMap[item]);
    } else {
      if (!stack.length || stack.pop() !== item) {
        return false;
      }
    }
  }

  return !stack.length;
};
