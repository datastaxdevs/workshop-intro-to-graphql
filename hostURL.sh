#!/bin/sh
URL=`gp url 8080`

echo -e "JAVA_GRAPHQL_ENDPOINT=$URL/graphql" >> graphql-client-examples/.env
echo -e "JAVA_GRAPHQL_ENDPOINT=$URL/graphql" >> graphql-backend-examples/src/main/resources/application.properties