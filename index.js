let counter=document.getElementById('count-el');
let count=0;
let btn=document.getElementById('increment-btn');
btn.addEventListener('click',()=>{
   
    count+=1;
    counter.textContent=`${count}`;
});
let saveBtn=document.getElementById('save-btn');
 function save(){
    let saveEl=document.getElementById('save-el');
   
   
    let saved=count+' - ';
        saveEl.textContent+=saved;
   
 }
 saveBtn.addEventListener('click',()=>{
       save(); 
       counter.textContent=`0`;
       count=0;
 })