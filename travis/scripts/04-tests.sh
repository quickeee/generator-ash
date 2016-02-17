#!/bin/bash
set -ev
#--------------------------------------------------
# Launch tests
#--------------------------------------------------
cd $HOME/$ASH
if [ $ASH != "app-gradle" ]; then
  mvn test
else
  ./gradlew test
fi
if [ $ASH != "app-gulp" ]; then
  grunt test
else
  gulp test
fi
