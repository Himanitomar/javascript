function returnIndices(nums,targer){
for(let i=0;i<nums.length;i++){
    for(let j= i+1;j<nums.length;j++){
        if(nums[i]+nums[j]==target){
            return [i,j];
        }
    }
}
}

let nums=[2,3,5], target=7;
console.log(returnIndices(nums,target));