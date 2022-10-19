/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  var maxDiameter = 0;
  const maxDepth = (root) => {
    if (root == null) {
      return 0;
    }
    var leftMax = maxDepth(root.left);
    var rightMax = maxDepth(root.right);
    var myDiameter = leftMax + rightMax;
    maxDiameter = Math.max(maxDiameter, myDiameter);
    return 1 + Math.max(leftMax, rightMax);
  };
  maxDepth(root);
  return maxDiameter;
};
// @lc code=end
