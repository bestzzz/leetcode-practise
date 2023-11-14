/**
 * 183. 望远镜中最高的海拔
 * 科技馆内有一台虚拟观景望远镜，它可以用来观测特定纬度地区的地形情况。该纬度的海拔数据记于数组 heights ，其中 heights[i] 表示对应位置的海拔高度。请找出并返回望远镜视野范围 limit 内，可以观测到的最高海拔值。
 * 
 * 示例 1：

输入：heights = [14,2,27,-5,28,13,39], limit = 3
输出：[27,27,28,28,39]
解释：
  滑动窗口的位置                最大值
---------------               -----
[14 2 27] -5 28 13 39          27
14 [2 27 -5] 28 13 39          27
14 2 [27 -5 28] 13 39          28
14 2 27 [-5 28 13] 39          28
14 2 27 -5 [28 13 39]          39
 */


/**
 * 解题思路：滑动窗口问题 类似‘JUEJIN_1302’
 * 1. 双端队列
 *  维护一个递减队列 时刻保持队头是最大值 之所以是‘双端’ 是因为队头可以出队(当队头元素到了框之外时) 队尾也可以出队(当队尾元素小于当前元素时)
 *  递减队列中存的是元素索引 因为如果存入的是元素值的话 后面队头出队的时候无法去判断是否到了框之外
 * 2. 双指针
 *  设置左右指针间隔为limit-1 然后慢慢向右移动 并在移动过程中求当前框住范围内的最大值 将最大值存入结果数组
 */


/**
 * @param {number[]} heights
 * @param {number} limit
 * @return {number[]}
 */
var maxAltitude = function(heights, limit) {
  const len = heights.length;
  const res = [];
  const deque = [];

  for (let i = 0; i < len; i++) {
    const cur = heights[i];

    // 队尾和当前元素比较 维护递减队列
    while (deque.length && cur > heights[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);

    // 如果还没走完一整框 则先跳出
    if (i < limit - 1) {
      continue;
    }

    // 判断队头是否在框内
    if (deque[0] < i - limit + 1) {
      deque.shift();
    }

    res.push(heights[deque[0]]);
  }

  return res;
};

/**
 * 双指针法
 * @param {*} heights 
 * @param {*} limit 
 * @returns 
 */
var maxAltitude2 = function(heights, limit) {
  const res = [];
  let left = 0;
  let right = left + limit - 1;
  while (right < heights.length) {
    let max = 0;
    for (let i = left; i <= right; i++) {
      const cur = heights[i];
      max = Math.max(max, cur);
    }
    res.push(max);
    left++;
    right++;
  };
  return res;
};
