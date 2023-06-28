
function printCapitalAlphabet(){
    let i;
 
// console.log("Alphabets form (A-Z) are:");
 let str = '';
// Using for loop for (A-Z):
for (i = 65; i <= 90; i++) {
    str = str + String.fromCharCode(i) + '<br />';
    console.log(String.fromCharCode(i));
}
 document.getElementById("Print_small_alphabet_vertically").innerHTML=str;
// console.log("Alphabets from (a-z) are:");




}

function printSmallAlphabt(){

 str = '';
 // Using for loop for (a-z):
 for (i = 97; i <= 122; i++) {
     str = str + String.fromCharCode(i) + '<br />';
     console.log(String.fromCharCode(i));
 }
 document.getElementById("print_capital_alphabet_vertically").innerHTML = str;

}
