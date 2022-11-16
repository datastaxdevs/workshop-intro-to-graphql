#!/bin/sh
URL=`gp url 8080`

echo -e "JAVA_GRAPHQL_ENDPOINT=\"$URL/graphiql\"" > /workspace/workshop-intro-to-graphql/graphql-client-examples/.local-backend.env
echo -e "JAVA_GRAPHQL_ENDPOINT=$URL/graphiql" >> /workspace/workshop-intro-to-graphql/graphql-backend-examples/src/main/resources/application.properties