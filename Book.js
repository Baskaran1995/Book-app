<html>

<body>

<form onsubmit="saveToLocalStorage(event)">

<label> Name</label>

<input type="text' name="username" required/>

<label> EmaiId</label>

<input type="email" name="emailId" required/>

<label> Phone Number</label>

input type="tel" name="phonenumber" />

<button> Submit </button>

</form>

</script>

function saveToLocalStorage(event){

event.preventDefault();

const name= event.target.username.value;

const.email=event.target.emailId.value;

const phonenumber = event.target.phonenumber.value;

localStorage.setItem('name', name);

localStorage.setItem('email', email);

localStorage.setItem('phonenumber', phonenumber)

</script>

</body>

</html>