'use strict';


//function Tables(start, end) {
//    let a;
//    for (let i = start; i <= end; i++) {
//        console.log(`Multiplication for Table ${i}`);
//        for (let j = 1; j <= 10; j++) {
//            a = i * j;

//            console.log(`${i} X ${j} = ${a}`);
//        }
//    }


//}
//console.log(Tables(1, 10));

//function Sum(n) {

//    let c = 0;
//    let rem;

//    while (n) {
//        rem = n % 10;
//        c += rem;
//        n = Math.floor(n / 10);
//    }
//    return c;
//}
//console.log(`sum of all  the digits is : ${Sum(1234)}`);

//function Prime(start, end) {
//    for (let i = start; i < end; i++) {
//        if (i > 1) {
//            for (let j = 2; j < i; i++) {

//                if (i % j == 0) {
//                    break;
//                }
//                else {

//                    console.log(i);
//                }

//            }
//        }
//    }

    
//}
 
//console.log(Prime(2, 100));

//function IsPalindrome(st) {
//    let rev = " ";
//    for (let i = st.length-1; i >=0; i--) {

//        rev += st[i];
//    }
//    if (rev == st) {
//        return ("palindrome");
//    }
//    else {
//        return("not palindrome")
//    }
   
//}
//console.log(IsPalindrome("Tejoram"));

//function StringRev(st) {
//    let rev = " ";
//    for (let i = st.length-1; i >= 0;i--) {
//        rev += st[i];
//    }
//    return (rev);
//}
//console.log(StringRev("Hello World"));

//const arr = [",","@","#","$","%"]
//function Sum(sent) {
//    let count = 0;
//    for (let i in sent) {
//        if (arr.includes(i)) {
//            continue;
//        }
//        else {

            
//            count += i

//        }
        
//    }
//    return count;
//}
//console.log(Sum("1,2,4,5,8,9"));


function Sum(str) {
    let arr = str.split(',');
    let s = 0;
    for (let i = 0; i <arr.length;i++) {
        s +=Number(arr[i])
    }
    return s;
}
console.log(Sum("-1,-4,4,7"))


