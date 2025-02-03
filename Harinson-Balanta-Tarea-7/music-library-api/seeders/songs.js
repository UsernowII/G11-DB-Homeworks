'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Songs', [
      { id: 1, title: "Hey Jude", artistId: 1, releaseYear: 1968, duration: 431, coverUrl: "https://picsum.photos/id/1018/400/400", createdAt: new Date(), updatedAt: new Date() },
      { id: 2, title: "Let It Be", artistId: 1, releaseYear: 1970, duration: 243, coverUrl: "https://picsum.photos/id/1020/400/400", createdAt: new Date(), updatedAt: new Date() },
      { id: 3, title: "Rolling in the Deep", artistId: 2, releaseYear: 2010, duration: 228, coverUrl: "https://picsum.photos/id/1021/400/400", createdAt: new Date(), updatedAt: new Date() },
      { id: 4, title: "Someone Like You", artistId: 2, releaseYear: 2011, duration: 284, coverUrl: "https://picsum.photos/id/1022/400/400", createdAt: new Date(), updatedAt: new Date() },
      { id: 5, title: "Hello", artistId: 2, releaseYear: 2015, duration: 295, coverUrl: "https://picsum.photos/id/1023/400/400", createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Songs', null, {});
  }
  
};
