function responsive() {
    var x = document.getElementById("res");
    if (x.className === "menu") {
      x.className += " resp";
     
    } else {
      x.className = "menu";
    }
  }
  