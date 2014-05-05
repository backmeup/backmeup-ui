var config_RestClient = {
	"name":"RestClient",
	"shortname":"rc",
	"wsdFiles":{
		"../files/wsd.datasink.json":true,
		"../files/wsd.datasource.json":true,
		"../files/wsd.user.json":true,
		"../files/wsd.action.json":true,
		"../files/wsd.job.json":true,
		"../files/wsd.other.json":true
	},
	"webservices":{
		"template":{
			"url":"string url",
			"method":"string method",
			"timeout":"int timeout"
		}
	}
}