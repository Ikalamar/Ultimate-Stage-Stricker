function setGentlemen(){
    if(document.getElementsByClassName("selected").length == 2){
        for(var i=0; i < 2; i++){
            let id = document.getElementsByClassName("selected")[i].getAttribute("id");
            document.getElementsByClassName("imgMap")[i].setAttribute("src", document.getElementById("img"+id).getAttribute("src"));
            document.getElementsByClassName("nomMap")[i].innerHTML = document.getElementById("text"+id).innerHTML;
        }

        document.getElementById("listGentlemen").classList.remove("visible");
        document.getElementById("listGentlemen").classList.add("hidden");

        document.getElementById("listStage").classList.remove("hidden");
        document.getElementById("listStage").classList.add("visible");
    }
}

function selected(id){
    if(document.getElementById(id).classList.contains("selected")){
        document.getElementById(id).classList.remove("selected");
    }else if(document.getElementsByClassName("selected").length < 2){
        document.getElementById(id).classList.add("selected");
    }
}

function banned(id){
    if(document.getElementById(id).classList.contains("banned")){
        document.getElementById(id).classList.remove("banned");
    }else{
        document.getElementById(id).classList.add("banned");
    }
}

function resetBan(){
    for(var i=0; i < document.getElementsByClassName("stage").length; i++){
        let id = document.getElementsByClassName("stage")[i].getAttribute("id");
        document.getElementById(id).classList.remove("banned");
    }
}