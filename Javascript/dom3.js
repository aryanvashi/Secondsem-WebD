let heading= document.getElementById("heading");
let input=document.getElementById("inputText");
let para= document.getElementById("para");
document.getElementById("changeTextBtn").onclick=function(){
    heading.innerText= input.value;
};
input.onchange=function(){
    console.log("Input changed:", input.value);
};
document.getElementById("bgColorBtn").addEventListener("click", function(){
    document.body.style.backgroundColor="lightblue";
    document.body.style.fontFamily="fantasy";
});
document.getElementById("fontSizeBtn").addEventListener("click", function(){
    heading.style.fontSize="40px";
});
document.getElementById("toggleParaBtn").addEventListener("click", function(){
    if(para.style.display==="none"){
        para.style.display="block";
    } else {
        para.style.display="none";
    }
});


document.getElementById("resetBtn").onclick=function(){
    location.reload();
};
heading.onmouseover=function(){
    heading.style.color="orange";
};