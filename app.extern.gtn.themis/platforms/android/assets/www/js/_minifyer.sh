#!/bin/bash

# remove all files
rm all.$1.js
rm all.$1.css

echo "***************************************************************************************************************"
echo "start minifying: $1"
echo "                 `pwd`"
echo "***************************************************************************************************************"
ls -l

echo "***************************************************************************************************************"
echo "css minifying: $1"
echo "               `pwd`"
echo "***************************************************************************************************************"

yuicompressor -v -o '.css$:-min.css' *.css
cat *-min.css > all.$1.css
ls -l


echo "***************************************************************************************************************"
echo "js minifying: $1"
echo "              `pwd`"
echo "***************************************************************************************************************"



# minify the plugin.*.js files
yuicompressor -v -o '.js$:-min.js' *.js


# remove the debug output
#sed -E -i '' 's/(app.debug.alert\(){1}(.){0,60}(,){1}([0-9]){1,3}(\))(;){0,1}//g' *-min.js

# combine all js files
cat *-min.js > javascript-minifyed.js
ls -l
rm *-min.js


echo "***************************************************************************************************************"
echo "json minifying: $1"
echo "                `pwd`"
echo "***************************************************************************************************************"

# copy json to javascript file (add .js)
for i in `ls *.json`;
do
    cp $i `echo $i.js`;
done

#add the var name
for i in `ls *.json.js`;
do
    sed -E -i "1s/^/var config_$(echo $i | cut -d'.' -f 2) = /" $i;
done


# minify the *.json.js files
yuicompressor -v -o '.json.js$:-min.json.js' *.json.js



# create a minified config file
cat *-min.json.js > json-minifyed.js
#rm *-min.json.js
ls -l
rm *.json.js

# create a config file
#cat plugin.*.json.js page.*.json.js > app.config.js

# combine javascript and json files
cat *-minifyed.js > all.$1.js
rm *-minifyed.js

echo "***************************************************************************************************************"
echo "finish minifying: $1"
echo "                  `pwd`"
echo "***************************************************************************************************************"
ls -l


echo ""
echo ""
echo ""
echo ""
echo ""
# __________________
# remove temporary minified files
#rm *-min.js
#rm *-minifyed.js
#rm *-min.css
#rm *.json.js
#rm app*.js
#rm app.config.js