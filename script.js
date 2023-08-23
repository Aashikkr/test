//  (function(){
    let screen = document.querySelector('.screen');
   //  let buttons = document.querySelectorAll('.btn');
   //  let clear = document.querySelector('.btn-clear');
   //  let equal = document.querySelector('.btn-equal');

      function appendValue(value){
         screen.value +=value;
      }

      function calculate(){
         screen.value = eval(screen.value); 
      }

      // equal.addEventListener('click', function(){
      //    screen.value = eval(screen.value);
      // })

      function clearValue(){
         screen.value=null;
      }

      // clear.addEventListener('click', function(){
      //    screen.value= null;
      // })



//     buttons.forEach(function(button){
//         button.addEventListener('click',function(e){
//             let value = e.target.dataset.num;
//             screen.value +=value;
//         })
//     });
//     console.log(screen.log)
     
//      equal.addEventListener('click',function(){
//          if(screen.value==""){
//             screen.value="Please enter";
//          }else{
//             let answer = eval(screen.value);
//             screen.value= answer;
//          }
//      })

//      clear.addEventListener('click',function(e){
//         screen.value=""; 
//      })

//  })();