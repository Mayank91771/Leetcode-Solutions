class Solution {
    public int maxProduct(int[] nums) {

        if(nums.length == 0){
            return 0;
        } 

        int min = nums[0], max = nums[0];
        int res = max;

        for(int i=1; i<nums.length; i++){
            int curr = nums[i];
            int maxVal = Math.max(curr, Math.max(curr*max, curr*min));
            min = Math.min(curr, Math.min(curr*max, curr*min));
            max = maxVal;
            res = Math.max(res, max);
        }

        return res;
        
    }
}