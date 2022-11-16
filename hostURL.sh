#!/bin/sh
URL=`gp url 8080`

# writing this snippet to later re-inject into the "Astra" dotenv
echo -e "JAVA_GRAPHQL_ENDPOINT=\"$URL/graphql\"" > /workspace/workshop-intro-to-graphql/graphql-client-examples/.local-backend.env
# also writing here to have a local-only-working React app from the start
echo -e "JAVA_GRAPHQL_ENDPOINT=\"$URL/graphql\"" > /workspace/workshop-intro-to-graphql/graphql-client-examples/.env

# writing this to have GraphiQL reach the local (DGS-powered) Spring Boot GraphQL server
echo -e "JAVA_GRAPHQL_ENDPOINT=$URL/graphql" >> /workspace/workshop-intro-to-graphql/graphql-backend-examples/src/main/resources/application.properties
