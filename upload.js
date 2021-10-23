const mediaFile = document.getElementById("input-tag");
const form  = document.getElementById("form");

function getFileData(myFile) {
  var file = myFile.files[0];
  return file;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  var item = form.elements["input-tag"].value;
  var file = getFileData(mediaFile);
  console.log(file.size);
  console.log(file.type);

  //const reader = new FileReader();
  //console.log(reader.readAsArrayBuffer(file));
  var data = await file.arrayBuffer();


  async CreateProductionMaster({
  "libraryId": "ilib3QD3YpNiw12oc3sHejwgPkE1fpB6",
  "type": "Production Master",
  "name": "Production Master Test",
  "description": "Production Master Test Description",
  "metadata": {
    "test": "master"
  },
  "fileInfo": [
    {
      "path": file.name,
      "mime_type": file.type,
      "size": file.size,
      "data": data,
    }
  ]
}).then((returndata) => console.log(returndata));
});
