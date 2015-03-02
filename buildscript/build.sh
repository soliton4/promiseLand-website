#!/bin/bash

rm ../release -R

mkdir ../release

echo ---------------------------------------------------------------------------
echo client build
echo ---------------------------------------------------------------------------

../src/util/buildscripts/build.sh profile=client.profile.js 

echo ---------------------------------------------------------------------------
echo copy
echo ---------------------------------------------------------------------------

cp ../src/*.html ../release/
cp ../src/*.ico ../release/