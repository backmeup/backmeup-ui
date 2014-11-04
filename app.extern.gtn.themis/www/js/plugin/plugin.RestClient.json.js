var config_RestClient = {
	"name":"RestClient",
	"shortname":"rc",
	"wsdFiles":{
		"../files/wsd/wsd.themis.authentication.json":true,
		"../files/wsd/wsd.themis.backupjobs.json":true,
		"../files/wsd/wsd.themis.logs.json":true,
		"../files/wsd/wsd.themis.plugins.json":true,
		"../files/wsd/wsd.themis.search.json":true,
		"../files/wsd/wsd.themis.users.json":true
	},
	"webservices":{
		"template":{
			"url":"string url",
			"method":"string method",
			"timeout":"int timeout"
		}
	}
}