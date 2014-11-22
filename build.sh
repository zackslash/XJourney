#!/bin/bash -       
#title           :build.sh
#description     :This script will build the XJourney application for OSX.
#author			 :Luke Hines
#date            :20141012
#version         :0.1    
#usage			 :bash build.sh
#notes           :resulting application will be inside 'Output' directory.
#bash_version    :4.1.5(1)-release
#==============================================================================

rm –Rf output/XJourney.app/Contents/Resources/app.nw
zip -r --exclude=*output* --exclude=*build.sh* --exclude=*ExampleData.csv* output/XJourney.app/Contents/Resources/app.nw *
