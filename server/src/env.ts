import { config } from "dotenv";

//config for deploying on render with docker
if (process.env.node_env === "docker") {
  config({ path: "/etc/secrets/.env" });
}

config({ path: "./src/.env" });

export const {
  PORT,
  AUTH0_AUDIENCE,
  AUTH0_DOMAIN,
  MONGO_URI,
  CLIENT_ORIGIN_URL,
} = process.env;
