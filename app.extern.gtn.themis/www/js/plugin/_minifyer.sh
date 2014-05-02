#!/bin/bash

rm *-min.js
ls
rm *-min.css
ls
rm *-min.json
ls
cat *.js > app.js
ls
yuicompressor -v -o '.js$:-min.js' *.js
ls
yuicompressor -v -o '.css$:-min.css' *.css
ls
yuicompressor -v -o '.json$:-min.json' *.json
ls
sed -E -i '' 's/(app.debug.alert\(){1}(.){0,60}(,){1}([0-9]){1,3}(\))(;){0,1}//g' *-min.js 
ls
cat *-min.js > app-min.js

