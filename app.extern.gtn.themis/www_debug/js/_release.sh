#!/bin/bash
if [ -n "$1" ]
    then
    	echo "***************************************************************************************************************"
		echo "- 1 copy www_debug to www"
		echo "***************************************************************************************************************"
		
		rsync -av $1/www_debug/ $1/www
		

    	echo "***************************************************************************************************************"
		echo "- 2 minify"
		echo "***************************************************************************************************************"

		echo "- minify plugins"
		cd $1/www/js/plugin
        ../../../www_debug/js/_minifyer.sh plugin.min
		
		
		echo "- minify pages"
		cd $1/www/js/page
        ../../../www_debug/js/_minifyer.sh page.min
        
    	echo "***************************************************************************************************************"
		echo "- 3 delete"
		echo "***************************************************************************************************************"

		echo "- delete plugins"
		rm $1/www/js/plugin/plugin.*.js
		rm $1/www/js/plugin/plugin.*.json
		
		echo "- delete pages"
		rm $1/www/js/page/page.*.js
		rm $1/www/js/page/page.*.json
		
		echo "- delete unuses files"
		rm $1/www/js/_minifyer.sh
		rm $1/www/js/_release.sh
		
		sudo chmod -R 774 $1
       	sudo chown -R $USER $1
		
	else
        echo "Parameter error: script needs the absolute location of your cordova app as a parameter"
fi