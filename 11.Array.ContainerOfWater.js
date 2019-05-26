/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
 * Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let start = 0
  let end = height.length - 1
  let maxSize = 0
  while(start < end) {
      maxSize = Math.max(maxSize, (end - start) * Math.min(height[end] , height[start]))
      height[end] > height[start] ? start++ : end--
  }
  return maxSize
};