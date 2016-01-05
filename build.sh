echo "Bundling scripts..."
browserify ./src/scripts/index.js -o ./public/bundle.js
echo "Translating Jade templates..."
jade ./src/templates -o ./public
echo "Moving CSS..."
cp -r ./src/css ./public
echo "Done"