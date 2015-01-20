var fasdf = {
	"pluginId" : "org.backmeup.facebook",
	"title" : "BackMeUp Facebook Plug-In",
	"description" : "A plug-in that is capable of downloading from facebook",
	"imageURL" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-snc4/174597_20531316728_2866555_s.jpg",
	"pluginType" : "Source",
	"metadata" : {
		"META_BACKUP_FREQUENCY" : "daily"
	},
	"authDataDescription" : {
		"configType" : "oauth",
		"redirectURL" : "https://www.facebook.com/dialog/oauth?client_id=508411825969983&redirect_uri=http://themis-dev01.backmeup.at/page/create_backup_1_oAuthFinished.html&scope=user_birthday,user_photos,read_stream,user_about_me,user_activities,user_education_history,user_events,user_groups,user_hometown,user_interests,user_likes,user_location,user_notes,user_questions,user_relationships,user_relationship_details,user_religion_politics,user_status,user_subscriptions,user_videos,user_website,user_work_history,email,read_friendlists,friends_photos, friends_about_me, friends_activities, friends_birthday, friends_education_history, friends_hometown, friends_interests, friends_likes, friends_location, friends_relationships, friends_religion_politics, friends_website, friends_work_history, manage_pages",
		"properties" : {
			"fbcallback" : "http://themis-dev01.backmeup.at/page/create_backup_1_oAuthFinished.html"
		}
	}
}