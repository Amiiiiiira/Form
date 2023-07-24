function logCredentials(event) {
  event.preventDefault()
  console.log($('#inputUsername').val());
  console.log($('#inputPassword').val());
}
  $('#button').on('click', logCredentials);