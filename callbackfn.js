/*-you can take a function and pass it into another function is known as callback fn.
  -callbackfn gives access to whole asyncronous world in a synchronous single threaded language
  -using callbackfn you can do asyc things in a js
  -if you call a function or pass function inside a function is known as callbackfn
  */
 
function x(){

}x(function y(){

})

/*why it is called callback function.
  -you give all the responsibility of 1 function to another function
  -you pass y inside x().it is upto x() when it wants to call this y.
  -this fn y is call sometime later in your code thas why it is called callback fn*/

  //how callback function works in asynchronous task
   /*setTimeout- it takes a callbackfn and store in some place and attach a timer.
   and js proceed once the timer expire it takes callbackfn and puts in callstack*/
  setTimeout(function (){
   console.log("helloo timer")
  },5000)

  function x(y){
  console.log("x ");
  }

  function y (){
  console.log("y");
  }