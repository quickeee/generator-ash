#!/bin/bash
set -ev
#-------------------------------------------------------------------------------
# Start docker container
#-------------------------------------------------------------------------------
cd $HOME/$ASH
if [[ ($ASH == 'app-cassandra') && (-a docker-compose.yml) ]]; then
  # travis is not stable with docker... need to start container with privileged
  echo '  privileged: true' >> docker-compose.yml
  docker-compose build
  docker-compose up -d
elif [[ ($ASH == 'app-mongodb') && (-a docker-compose.yml) ]]; then
  docker-compose up -d
elif [[ ($ASH == 'app-mysql') || ($ASH == 'app-psql-es') ]]; then
  if [ -a docker-compose-prod.yml ]; then
    docker-compose -f docker-compose-prod.yml up -d
  fi
fi
docker ps -a
