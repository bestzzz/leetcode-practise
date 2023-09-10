/**
 * 剑指 Offer 67. 把字符串转换成整数
 * 写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。
 * 
 * 输入：4193 with words
 * 输出：4193
 */

// 解：https://leetcode.cn/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof/solutions/1652009/dai-ma-jian-ji-yi-chong-huan-bu-cuo-de-j-ni33/

/**
 * 解题思路：
 * 
 */

/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
  str = str.trim();
  if (!str.length) {
    return 0;
  };

  var INT_MIN = -Math.pow(2,31), INT_MAX = Math.pow(2,31) - 1;
  var reg = /^[\-\+]?\d+/;
  var result = reg.exec(str);
  if(result != null){
    if(result[0][0] == "-" && result[0] < INT_MIN){  
        return INT_MIN;
    }else if(result[0] > INT_MAX){
        return INT_MAX;
    }  
    return result[0]; 
  }else{
    return 0;
  }
};

console.log(strToInt('+123aaa'));
