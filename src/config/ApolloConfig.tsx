import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { FC, PropsWithChildren } from "react";

const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
    headers: {
        authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2b25AZW5jaWJyYS5jb20iLCJpYXQiOjE3MTkyNDU1NDQsImV4cCI6MTcxOTI2MzU0NH0.4MJ6T_pr3k_-8Urr2iicCk1UZPSmkMh2UamricnRGmc",
    },
});

const ApolloConfig: FC<PropsWithChildren> = ({ children }) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloConfig;
