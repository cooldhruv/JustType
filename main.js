
let synth = window.speechSynthesis;
    
    let awaajen = document.getElementById('voices-SELECT');
    let voices = [];

function myfunc(){
    
    voices = speechSynthesis.getVoices();
   

    for(let i=0;i<voices.length;i++){
         let option = document.createElement('option');
        option.innerHTML  +=  voices[i].name;
           if(voices[i].default){
                option.innerHTML += 'Default';     
           }
           
           option.setAttribute('data-lang',voices[i].lang);
           option.setAttribute('data-name',voices[i].name);


           console.log(voices[i].lang);
           awaajen.appendChild(option);  
           
    }

   
      
}

myfunc();
if(synth.onvoiceschanged!==undefined){
    synth.onvoiceschanged=myfunc;
}

let ref = document.getElementById('refresh');
ref.addEventListener('click',(j)=>{
      location.reload();
    j.preventDefault();
 
});


let sub = document.getElementById('submit');
sub.addEventListener('click', (e)=>
{ 
let txt = document.getElementById("texter").value;
    let rate = document.getElementById('rate').value;
    let pitch = document.getElementById('pitch').value;


   console.log(txt);

e.preventDefault();

let speaker = new SpeechSynthesisUtterance(txt);
let b = document.getElementById('voices-SELECT');
let c = b.selectedIndex;
let t=  b.children[c];
 let f = t.getAttribute('data-name');

for(let i=0;i<voices.length;i++){
   
    if (voices[i].name ===f) {
        speaker.voice = voices[i];
        break;
    }
}
// console.log(typeof(voices[9].name));
speaker.pitch=pitch;
speaker.rate=rate;
console.log();
synth.speak(speaker);
console.log(pitch);
   
});


