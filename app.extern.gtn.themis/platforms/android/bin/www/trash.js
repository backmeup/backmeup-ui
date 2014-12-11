var fasdf = {
	"pluginId" : "org.backmeup.filegenerator",
	"title" : "Backmeup File Generator Plugin",
	"description" : "A plugin for testing purposes that generates files",
	"imageURL" : "https://backmeup.at/dummy.png",
	"pluginType" : "Source",
	"metadata" : {
		"META_BACKUP_FREQUENCY" : "daily"
	},
	"propertiesDescription" : [ {
		"name" : "text",
		"label" : "text",
		"description" : "Generate plain text files",
		"required" : true,
		"order" : 0,
		"type" : "Bool"
	}, {
		"name" : "text.paragraphs",
		"label" : "text.paragraphs",
		"description" : "Amout of paragraph in the text file",
		"required" : false,
		"order" : 1,
		"type" : "Number"
	}, {
		"name" : "image",
		"label" : "image",
		"description" : "Generate image files",
		"required" : true,
		"order" : 2,
		"type" : "Bool"
	}, {
		"name" : "image.size",
		"label" : "image.size",
		"description" : "Size (in pixel) of the generated image",
		"required" : false,
		"order" : 3,
		"type" : "Number"
	}, {
		"name" : "pdf",
		"label" : "pdf",
		"description" : "Generate pdf documents",
		"required" : true,
		"order" : 4,
		"type" : "Bool"
	}, {
		"name" : "pdf.paragraphs",
		"label" : "pdf.paragraphs",
		"description" : "Amout of paragraphs in the pdf document",
		"required" : false,
		"order" : 5,
		"type" : "Number"
	}, {
		"name" : "binary",
		"label" : "binary",
		"description" : "Generate binary files",
		"required" : true,
		"order" : 6,
		"type" : "Bool"
	}, {
		"name" : "binary.size",
		"label" : "binary.size",
		"description" : "Size (in bytes) of the allocated file",
		"required" : false,
		"order" : 7,
		"type" : "Number"
	}, {
		"name" : "generator.files",
		"label" : "generator.files",
		"description" : "Set the maximum number of files that should be generated",
		"required" : false,
		"order" : 8,
		"type" : "Number"
	} ]
}