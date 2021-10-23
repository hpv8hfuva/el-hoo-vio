const mediaFile = document.getElementById("file");
const form  = document.getElementById("form");
 

form.addEventListener('submit', (event) => {
  event.preventDefault();
  var item = form.elements["input-tag"].value;
});
