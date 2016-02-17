#!/bin/bash
set -ev
#-------------------------------------------------------------------------------
# Generate the project with yo ash
#-------------------------------------------------------------------------------
mv -f $ASH_SAMPLES/$ASH $HOME/
cd $HOME/$ASH
if [ $GRUNT == 1 ]; then
  rm -Rf $HOME/$ASH/node_modules/*gulp*
else
  rm -Rf $HOME/$ASH/node_modules/*grunt*
fi
npm link generator-ash
yo ash --force --no-insight
ls -al $HOME/$ASH
ls -al $HOME/$ASH/node_modules/generator-ash/
ls -al $HOME/$ASH/node_modules/generator-ash/entity/
