/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const map = new Map()                 
    for(let i = 0; i< nums.length; i++){
 
        const num = nums[i] 
 
        const value = target-num 
 
        const valueIndex = map.get(value)
  
        const isTarget = map.has(value)
        
        if (isTarget) return [ valueIndex , i ]
        map.set(num,i)
    }
    return [-1 ,-1 ]
    
};
twoSum([2,7,11,15],26)