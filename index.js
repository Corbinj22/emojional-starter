// document.getElementById("happy").addEventListner("click", function(){
//   document.getElementById("h2").innerHTML = "hello world";
//   console.log("hello");
// });


document.getElementByClassName("happy").addEventListener("click", function(){
  document.getElementByClassName("message").innerHTML = "Hello World";
});
