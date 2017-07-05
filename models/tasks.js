module.exports = app => {
  return {
    findAll: (params, callback) => {
    return callback([
        {title: 'Learn Node.js'},
        {title: 'Mastering javascript'}
      ]);
    }
  };
};
