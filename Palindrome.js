
function Palindrome(str){
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reverseStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reverseStr;
}

let val = "aba";
let result = Palindrome(val);

if (result ===true){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}