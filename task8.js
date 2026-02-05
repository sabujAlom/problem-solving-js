//find the big number 

function numbers (arr){
    let longestNum = arr[0];
    for(const num of arr){
        if(num > longestNum){
            longestNum = num;
        }

    }
        return longestNum;


}
const output = numbers([4, 5, 2, 9, 7, 45, 8]);
console.log(output);