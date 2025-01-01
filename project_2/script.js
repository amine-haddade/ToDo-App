let tache=document.getElementById('input-box');

let listTache=document.getElementById('list-container');

let li=document.querySelector('LI')

function addtache(){
    if(tache.value==''){
        alert("add tache monsieur")
    }
    else{
    let li=document.createElement('LI');
    li.innerHTML=tache.value;
    listTache.appendChild(li);

    let span=document.createElement('SPAN');
    span.innerHTML="\u00d7";
    li.appendChild(span);
    save()
    }
    tache.value="";
    save();
    
}

listTache.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        // e.target.className="cheked";  la methode className permet de effcter class mais il ne peut pas remove class in element
        e.target.classList.toggle("cheked");
        save()
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        save()
    }
    
})

function save(){
    localStorage.setItem("data",listTache.innerHTML);
}
function afficher(){
    listTache.innerHTML=localStorage.getItem("data")
}
afficher()