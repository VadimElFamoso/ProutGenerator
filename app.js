/////////////////////////////////////////////////////////////////
////////////////////////Const and vars///////////////////////////
const muted = document.getElementById("muted")
const low_fart = document.getElementById("low_fart");
const medium_fart = document.getElementById("medium_fart");
const high_fart = document.getElementById("high_fart");

const hz_range = document.getElementById("hz_range");
let hz_range_value = document.getElementById("hz_range_value");

let low_fart_audio = new Audio("sound/low_fart.mp3");
let medium_fart_audio = new Audio("sound/medium_fart.mp3");
let high_fart_audio = new Audio("sound/high_fart.mp3");
let audio_array = [low_fart_audio, medium_fart_audio, high_fart_audio];
/////////////////////////////////////////////////////////////////

hz_range.oninput = function(){

    //Reset audio to pause on hz_range change :
    for(let i = 0; i < audio_array.length; i++){
        audio_array[i].pause();
        audio_array[i].currentTime = 0;  
    }

    //Fart choice detector :
    console.log("Etat low:" + low_fart.checked);
    console.log("Etat medium:" + medium_fart.checked);
    console.log("Etat high:" + high_fart.checked);

    //Si muted je return :
    if(muted.checked === true){
        onValueChange();
        return;
    }
    
    //On vérifie une par une chacune de ces conditions : 
    else if(low_fart.checked === true){
        playAudio(low_fart_audio, onValueChange());
    }

    else if(medium_fart.checked === true){
        playAudio(medium_fart_audio, onValueChange());
    }
    else if(high_fart.checked === true){
        playAudio(high_fart_audio, onValueChange());
    }
    else{
        return;
    }
};

//A chaque changement de valeur, je la recalcule : 
function onValueChange(){
    let value = hz_range.value;
    hz_range_value.innerHTML = value + " Hz";
    return value;
}

//Fonction qui joue l'audio avec la valeur en Hz définie par l'utilisateur : 
function playAudio(audio, hz_value){
        audio.play();
        audio.playbackRate = hz_value;
}
