class Config {

}

class DevelopmentConfig extends Config {
    public isDevelopment = true;
    public mysql = { host: "localhost", user: "root", password: "", database: "vacations" };
}

class ProductionConfig extends Config {
    public isDevelopment = false;
    public mysql = { host: "eu-cdbr-west-02.cleardb.net", user: "bf1f7ae1ea52a9", password: "79289bd5", database: "heroku_95ef712a86b02f2" };
}

const config = process.env.NODE_ENV === "production" ? new ProductionConfig() : new DevelopmentConfig();

export default config;