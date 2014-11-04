var config_WebServiceClient = {
	"name":"WebServiceClient",
	"shortname":"wsc",
	"defaultWebServiceTimeoutMs":5000,
	"defaultWebServiceMethod":"post",
	"defaultWebServiceType":"json",
	"useKeepAlive":true,
	"keepAlive":{
		"keepAliveServer":"backmeup",
		"keepAliveIntervalInS":15,
		"keepAlivePath":"/keepAlive.json",
		"method":"get",
		"type":"json",
		"timeout":"4500",
		"lastDuration":null,
		"isAlive":true,
		"maximumResponseTime":4000,
		"error":{
			"text":"",
			"code":0
		}
	},
	"useServerShuffle":true,
	"useHeaderToken":true,
	"headerToken":{
		"key":"Authorization",
		"value":"data-html5-themis-token"
	},
	"defaultServer":"backmeup",
	"server":{
		"backmeup":{
			"active":true,
			"pingPath":"",
			"mappings":{
				"post":"json",
				"get":"query",
				"put":"query",
				"delete":"json"
			},
			"first":{
				"scheme":"http",
				"scheme_specific_part":"://",
				"host":"themis-dev01.backmeup.at",
				"port":80
			},
			"second":{},
			"third":{},
			"fouth":{},
			"fifth":{}
		},
		"licence":{
			"active":true,
			"pingPath":"REST/ping",
			"mappings":{
				"post":"query",
				"get":"query",
				"put":"query",
				"delete":"query"
			},
			"first":{
				"scheme":"http",
				"scheme_specific_part":"://",
				"host":"localhost",
				"port":8080
			},
			"second":{},
			"third":{},
			"fouth":{},
			"fifth":{}
		}
	}
}