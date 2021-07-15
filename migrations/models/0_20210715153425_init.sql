-- upgrade --
CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "username" VARCHAR(32) NOT NULL,
    "hash_password" VARCHAR(128) NOT NULL,
    "api_key" VARCHAR(128) NOT NULL
);
CREATE TABLE IF NOT EXISTS "contents" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "filename" VARCHAR(64) NOT NULL,
    "content_type" VARCHAR(32) NOT NULL,
    "user_id" INT NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS "aerich" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "version" VARCHAR(255) NOT NULL,
    "app" VARCHAR(20) NOT NULL,
    "content" JSONB NOT NULL
);
