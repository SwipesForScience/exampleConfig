#!/usr/bin/env bash

# This is a deploy script for travis. it will clone the Swipes for Science code
# and copy the config.js folder in this repo to Swipes for Science.
# then travis will build, then will deploy it on gh-pages

git clone https://github.com/SwipesForScience/SwipesForScience
cp ./config.js SwipesForScience/src/config.js
cd SwipesForScience
npm install
