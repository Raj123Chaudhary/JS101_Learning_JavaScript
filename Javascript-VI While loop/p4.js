// Problem 4: Print the average of even numbers from 1 to 100 (both included).

let s=1;
let e=100;
let sum=0;
let count=0;
 while(s<=e){
     if(s%2==0){
          sum=sum+s;
          count++;
     }
     s++;
 }
 console.log("total sum : ",sum);
 let avg=sum/count;
 console.log('avg :' ,avg);
 