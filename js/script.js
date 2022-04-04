const dioBtn = document.querySelector('button')

dioBtn.addEventListener('click', response);
function response () {
  let response = prompt('Do you know how to fix it?');
  if(response === 'yes','Yes'){
    alert('Then turn off the lights already!');
    }
  else{
    alert("Turn off the lights.");
  }
}

const blackBtn = document.querySelector('.black');

blackBtn.addEventListener('click',()=>{
   const body =  document.body;
   body.style.background = 'black';
});
