// const dioBtn = document.querySelector('button')
//
// dioBtn.addEventListener('click', response);
// function response () {
//   let response = prompt('Do you know how to fix it?');
//   if(response === 'yes','Yes'){
//     alert('Then turn off the lights already!');
//     }
//   else{
//     alert("Turn off the lights.");
//   }
// }
//
// const blackBtn = document.querySelector('.black');
//
// blackBtn.addEventListener('click',()=>{
//    const body =  document.body;
//    body.style.background = 'black';
// });

function openCity(evt, assignment) {
  let ifr = document.getElementById('foo')
  switch (assignment) {
   case 'bio': ifr.src="pre-week5/assignment_1.html"
   break;

   case 'Chessboard': ifr.src="week-5/chess-Board2.html"
   break;

   case 'assignment-5': ifr.src="week-5/assignment_5.html"
   break;

   case 'assignment-4': ifr.src="pre-week5/assignment_4.html"
   break;

   case 'wonderBrd': ifr.src="pre-week5/wonderBrd.html"
   break;

   case 'generator': ifr.src="../week12-demo.html"
   break;

   default: ifr.src=""
  }
}
