module.exports = {
    database: "ntask_test",
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
