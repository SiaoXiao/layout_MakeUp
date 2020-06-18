// var btn = document.getElementsByClassName("menuBtn")[0];
// var list = document.getElementsByClassName("list");


// btn.addEventListener('onclick',function showMenu(){
//   console.log(btn)
// });

// function showMenu() {
//   var btn = document.getElementsByClassName("menuBtn")
//   console.log("aaaa")
// }
  //------側邊欄開關------
  function showHideHam() {
    let filterPanel = document.getElementsByClassName("list")[0];
    filterPanel.classList.toggle("none");
  }
  document.getElementsByClassName("list")[0]= showHideHam;
  //------側邊欄開關結束------