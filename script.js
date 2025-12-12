console.log("Javascript is connected");
let name = "Vivek";
console.log(name);
function greet() {
  console.log("Welcome to my portfolio!");
}
greet();
const btn = document.getElementById("themeBtn");


// button for theme of the portfolio website
btn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    btn.textContent ="☀️"
  } else{
    btn.textContent = "🌑"
  }
});

let visitorName = "Friend";
function welcomeVisitor(visitorName){
  return `Welcome, Thanks for visiting my portfolio🙏🏻`;
}

console.log(welcomeVisitor()); 
window.onload = function(){
  alert("Welcome to my portfolio!");
};
