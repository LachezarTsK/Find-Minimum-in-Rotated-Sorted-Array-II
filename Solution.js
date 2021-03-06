
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {

    let low = 0;
    let high = nums.length - 1;

    while (low < high) {

        let mid = low + Math.floor((high - low) / 2);
        if (nums[mid] < nums[high]) {
            high = mid;
        } else if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high--;
        }
    }
    return nums[low];
};
