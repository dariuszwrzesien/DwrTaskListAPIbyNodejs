module.exports = {
    database: "ntask",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "ntask.sqlite",
        logging: false,
        define: {
            underscored: true
        }
    },
    jwtSecret: "test_secret",
    jwtSession: {session: false}
};
