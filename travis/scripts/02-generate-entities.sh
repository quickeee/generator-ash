#!/bin/bash
set -ev
#--------------------------------------------------
# Generate the entities with yo ash:entity
#--------------------------------------------------
cd $HOME/$ASH
if [ -a .ash/BankAccount.json ]; then
  yo ash:entity BankAccount --force --no-insight
  if [ $ASH == "app-cassandra" ]; then
    cat src/main/resources/config/cql/*_added_entity_BankAccount.cql >> src/main/resources/config/cql/create-tables.cql
  fi
fi
if [ -a .ash/Label.json ]; then
  yo ash:entity Label --force --no-insight
fi
if [ -a .ash/Operation.json ]; then
  yo ash:entity Operation --force --no-insight
fi
