/*
  WRITE YOUR SOLUTION HERE
*/

document.getElementById("blue").addEventListener("click", function(){
  mudaCor("blue");
});
document.getElementById("pink").addEventListener("click", function(){
  mudaCor("pink");
});
document.getElementById("green").addEventListener("click", function(){
  mudaCor("green");
});


function mudaCor(cor){
  document.getElementsByTagName("body")[0].style.background  = cor;
};