// function logCredentials(event) {
//   event.preventDefault()
//   console.log($('#inputUsername').val());
//   console.log($('#inputPassword').val());
// }
//   $('#button').on('click', logCredentials);


function fetchData(event){
event.preventDefault()
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => console.log(data));
}

$('#button').on('click', fetchData);

