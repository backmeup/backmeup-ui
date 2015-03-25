var editor = {
	languageObject : {},
	mergedLanguageObject : {},
	defaultLanguage : null,
	loadLanguageFiles : function() {
		var url;
		url = "../../../www_debug/js/plugin/plugin.MultilanguageIso639_3.json";
		$.ajax({
			dataType : "json",
			url : url,
			async : false
		}).done(function(json) {
			editor.defaultLanguage = json.defaultLanguage;
			$.each(json.availableLanguages, function(index, languageName) {
				var url;
				url = "../../../www_debug/files/language/" + languageName + ".json", $.ajax({
					dataType : "json",
					url : url,
					async : false
				}).done(function(json) {
					editor.languageObject[languageName] = json;
				}).fail(function() {
					alert("Failed to load: " + url);
				});
			});
		}).fail(function() {
			alert("Failed to load: " + url);
		});
	},
	mergeAll : function(primaryLanguage) {

		$.each(editor.languageObject, function(languageName, languageObject) {
			$.extend(true, editor.mergedLanguageObject, languageObject);

		});

		if (primaryLanguage != undefined)
			$.extend(true, editor.mergedLanguageObject, editor.languageObject[primaryLanguage]);
	}
}
$(document).on("change", "#changePriamry", function() {
	var lang = $(this).val();
	editor.mergeAll(lang);
	//alert(JSON.stringify(editor.mergedLanguageObject, null, '\t'))
	$('#output').html( JSON.stringify(editor.mergedLanguageObject, null, '\t'));

});
$(document).ready(function() {
	editor.loadLanguageFiles();
	editor.mergeAll(editor.defaultLanguage);

	$('body').append('<select id="changePriamry" ></select>');
	$('#changePriamry').append('<option value="' + editor.defaultLanguage + '" selected="selected">Select Language</option>');
	$.each(editor.languageObject, function(languageName, languageObject) {
		$('#changePriamry').append('<option value="' + languageName + '">' + languageName + '</option>');
	});

	$('body').append('<textarea id="output" style="width:100%;"></textarea>');

	$('#output').append(JSON.stringify(editor.mergedLanguageObject, null, '\t'));
});