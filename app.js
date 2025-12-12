function show (){
        document.querySelector(".hamburger-content").style.opacity = 1;
}
function closeShow (){
        document.querySelector(".hamburger-content").style.opacity = 0;
}
document.querySelector("#close2").addEventListener("click",function(){
        document.querySelector(".hide").style.display = "none";
        document.querySelector("main").style.display = "block";
});
document.querySelector("#submit").addEventListener("click",function(){
        document.querySelector("form").style.display = "none";
        document.querySelector(".message").style.display = "block"
})
function abc (){
        document.querySelector("main").style.display = "block";
}