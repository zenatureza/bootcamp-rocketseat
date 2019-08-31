module.exports = {
  up: queryInterface => {
    return queryInterface.removeColumn('users', 'organizer');
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'organizer', {
      type: Sequelize.BOOLEAN,
    });
  },
};
