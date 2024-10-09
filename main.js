function getUserName() {
    var name = prompt("Please enter your name:");
    if (name != null) {
      document.getElementById("output").innerHTML = "Hello " + name + "!";
    }
  }
  
  function enlargeImage() {
    var img = document.getElementById("myImage");
    if (img.style.width == "300px") {
      img.style.width = "100px";
    } else {
      img.style.width = "300px";
    }
  }

  function changeColorOnHover(item) {
    item.style.color = "blue";
  }
  
  function resetColor(item) {
    item.style.color = "black";
  }
  