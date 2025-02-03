module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Artists', [
      { id: 1, name: "The Beatles", bio: "The Beatles were an English rock band formed in Liverpool.", photoUrl: "https://picsum.photos/id/1015/400/400", createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: "Adele", bio: "Adele is an English singer-songwriter known for her soulful voice.", photoUrl: "https://picsum.photos/id/1016/400/400", createdAt: new Date(), updatedAt: new Date() }
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Artists', null, {});
  }
};
