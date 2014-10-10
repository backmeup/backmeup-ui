#!/bin/bash

# remove all files
rm all.$1.js
rm all.js
rm all.$1.css
rm all.css
rm app.js
rm app.config.js
rm *-min.js
rm *-min.css
rm *.json.js

# __________________
# css
yuicompressor -v -o '.css$:-min.css' *.css
cat *-min.css > all.$1.css

# __________________
# js
cat *.js > app.js

# minify the plugin.*.js files
yuicompressor -v -o '.js$:-min.js' *.js

# remove the debug output
sed -E -i '' 's/(app.debug.alert\(){1}(.){0,60}(,){1}([0-9]){1,3}(\))(;){0,1}//g' *-min.js 

# combine all plugin files
cat *-min.js > app-min.js

# __________________
# json
# copy json to javascript file (add .js)
for i in `ls *.json`; do cp $i `echo $i.js`; done

#add the var name
for i in `ls *.json.js`; do sed -E -i ""  "1s/^/var config_$(echo $i | cut -d'.' -f 2) = /" $i; done

# minify the *.json.js files
yuicompressor -v -o '.json.js$:-min.json.js' *.json.js

# create a minified config file
cat *-min.json.js > app.config-min.js

# create a config file
cat plugin.*.json.js page.*.json.js > app.config.js

# combine plugin and config files
cat app*-min.js > all.$1.js

# __________________
# remove temporary minified files
rm *-min.js
rm *-min.css
rm *.json.js
rm app.js
rm app.config.js