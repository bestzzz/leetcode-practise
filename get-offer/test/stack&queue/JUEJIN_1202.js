/**
 * 掘金小测12节2题: 每日温度问题
 * 题目描述: 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。
 * 
例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
 */

/**
 * 解题思路：https://juejin.cn/book/6844733800300150797/section/6844733800354709511?enter_from=course_center&utm_source=course_center
 * 维持一个单调栈 将温度索引存入栈 用于和当前遍历元素进行对比
 * 栈的特点：栈结构可以帮我们避免重复操作
 */

const dailyTemperatures = (T) => {
  const len = T.length // 缓存数组的长度 
  const stack = [] // 初始化一个栈   
  const res = (new Array(len)).fill(0) //  初始化结果数组，注意数组定长，占位为0
  for(let i=0;i<len;i++) {
    // 若栈不为0，且存在打破递减趋势的温度值
    while(stack.length && T[i] > T[stack[stack.length-1]]) {
      // 将栈顶温度值对应的索引出栈
      const top = stack.pop()  
      // 计算 当前栈顶温度值与第一个高于它的温度值 的索引差值
      res[top] = i - top 
    }
    // 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
    stack.push(i)
  }
  // 返回结果数组
  return res 
};
