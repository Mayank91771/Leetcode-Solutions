class Solution {
    public int maxSubArray(int[] nums) {
        int maxValue = nums[0], curr=0;

        for(int i=0; i<nums.length; i++)
        {
            if(curr < 0){
                curr = 0;
            }

            curr = curr + nums[i];
            maxValue = maxValue < curr ? curr : maxValue;
        }

        return maxValue;
    }
}