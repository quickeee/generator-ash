#!/bin/bash
set -ev
#-------------------------------------------------------------------------------
# Use ash-travis-build that contain .m2 and node_modules
#-------------------------------------------------------------------------------
if [ $ASH_MVN_DEP == 1 ]; then
  cd $TRAVIS_BUILD_DIR/
  git clone https://github.com/ash/ash-travis-build.git
  rm -Rf $HOME/.m2/repository/
  mv $TRAVIS_BUILD_DIR/ash-travis-build/repository $HOME/.m2/
  mv $TRAVIS_BUILD_DIR/ash-travis-build/node_modules/ $ASH_SAMPLES/$ASH/
  ls -al $HOME/.m2/
  ls -al $HOME/.m2/repository/
  ls -al $ASH_SAMPLES/$ASH/
#-------------------------------------------------------------------------------
# Clone official ash-sample-app
#-------------------------------------------------------------------------------
elif [ $ASH_MVN_DEP == 2 ]; then
  cd $TRAVIS_BUILD_DIR/
  git clone https://github.com/ash/ash-sample-app.git
  cd $TRAVIS_BUILD_DIR/ash-sample-app/
  mvn dependency:go-offline
#-------------------------------------------------------------------------------
# By default, do nothing
#-------------------------------------------------------------------------------
else
  echo "By default, no speedup build..."
fi
