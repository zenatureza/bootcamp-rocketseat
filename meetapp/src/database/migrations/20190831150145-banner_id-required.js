module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('meetups', 'banner_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('meetups', 'banner_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    });
  },
};
