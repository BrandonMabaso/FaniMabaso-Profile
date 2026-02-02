const typingText = document.getElementById("typing");
const words = ["Data Analytics","Statistics", "Python","SQL","Excel"];
let i=0,j=0,currentWord="",isDeleting=false;

function type(){
    if(i>=words.length)i=0;

    currentWord=words[i];

    if(!isDeleting)
    {
        typingText.textContent=currentWord.substring(0,j+1);
        j++;
        if(j===currentWord.length){isDeleting=true; setTimeout(type,1000); return;}
    } 
    else 
    {
        typingText.textContent=currentWord.substring(0,j-1);
        j--;
        if(j===0){isDeleting=false;i++;}
    }
    setTimeout(type,isDeleting?50:150);
}
document.addEventListener("DOMContentLoaded",type);
