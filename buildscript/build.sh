#!/bin/bash

rm ../release -R

mkdir ../release

#echo ---------------------------------------------------------------------------
#echo server build
#echo ---------------------------------------------------------------------------
#
#cp ../src/build/plugins/* ../src/util/build/plugins/
#
#../src/util/buildscripts/build.sh profile=server.profile.js 

echo ---------------------------------------------------------------------------
echo client build
echo ---------------------------------------------------------------------------

../src/util/buildscripts/build.sh profile=client.profile.js 

echo ---------------------------------------------------------------------------
echo copy
echo ---------------------------------------------------------------------------

cp ../src/*.html ../release/
cp ../src/*.ico ../release/