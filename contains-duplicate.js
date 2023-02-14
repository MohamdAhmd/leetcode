function containsDuplicate(nums) {
    let hashset = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (hashset.has(nums[i])) {
            return true;
        }
        hashset.add(nums[i]);
    }
    return false
}
;

containsDuplicate([1,2,3,4,1])