import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8082",
    realm: "ciaboc",
    clientId: "ciaboc-web",
});

export default keycloak;