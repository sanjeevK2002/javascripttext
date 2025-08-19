var maxArea = function(height) {
    let maxContainer =0;
    let left = 0;
    let right = height.length - 1 ;
    
    while(left < right){
        let currentHeight = Math.min(height[left],height[right]);
        let currentWidth = right - left ;
        let currentArea = currentHeight * currentWidth;
        maxContainer = Math.max(maxContainer, currentArea);

        height[left] < height[right] ? left++ : right--;

    }
    return maxContainer;
};
const result = maxArea([1,8,6,2,5,4,8,3,7]);
console.log(result);