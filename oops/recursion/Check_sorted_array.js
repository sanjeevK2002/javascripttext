function checkSortedArray(arr , n) {
        if(n == 1 || n==0){
            return true;
        }

        return (arr[n-1] >= arr[n-2]) && checkSortedArray(arr , n-1);
}
const arr = [1,2,3,4,5];
console.log(checkSortedArray(arr , arr.length));