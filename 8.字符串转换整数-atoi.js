/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const re = new RegExp(/^(-|\+)?\d+/);
    let str = s.trim().match(re);
    let res = str ? Number(str[0]) : 0;
    return res >= 0 ? Math.min(res, 2**31 - 1) : Math.max(res, -(2**31))
};
// @lc code=end

