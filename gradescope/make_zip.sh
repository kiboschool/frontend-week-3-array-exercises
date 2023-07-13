#!/usr/bin/env bash

# copy files with tests
cp -r ../section-* ./
# copy package.json
cp ../package.json ../jest.config.js ./

TESTS=$(ls ./section-*/*/*.test.js)
zip -r gradescope.zip setup.sh run_autograder package.json jest.config.js $TESTS

# remove copied files
rm -r ./section-*
rm package.json
rm jest.config.js