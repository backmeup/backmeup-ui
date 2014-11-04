var config_HelperFunctions = {
	"name":"HelperFunctions",
	"shortname":"help",
	"validate":{
		"email":"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
		"password":"(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\\W]).{8,100}",
		"username":"(.){2,99}",
		"firstname":"(.){2,99}",
		"lastname":"(.){2,99}"
	}
}