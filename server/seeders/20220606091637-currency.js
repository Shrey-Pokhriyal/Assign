'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('currency', [
      {
       currency_id:"1be6624a-cce7-4bb6-8102-ac0038fb4da5",
       value:"AUD",
       label:"Australian Dollar (AUD)",
       symbol:"A$",
       createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      currency_id:"1d4de93b-39ff-494b-b323-65b1604d61ed",
      value:"GBP",
      label:"British Pound (GBP)",
      symbol:"£",
      createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      currency_id:"295299ab-6f18-44e6-87c1-6070b2085a85",
      value:"NZD",
      label:"New Zealand Dollar (NZD)",
      symbol:"NZ$",
      createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      currency_id:"90609600-ba6b-42d8-9c2d-deacc0a26ff1",
      value:"CHF",
      label:"Swiss Franc (CHF)",
      symbol:"Fr.",
      createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      currency_id:"cd3d0bda-116e-4df4-bd50-ef58ee7f82bc",
      value:"EUR",
      label:"European Euro (EUR)",
      symbol:"€",
      createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      currency_id:"d961e13e-285f-402f-9d0d-783499fde4ac",
      value:"USD",
      label:"U.S. Dollar (USD)",
      symbol:"$",
      createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      currency_id:"e2691532-fdeb-477c-ab2f-2aee77ebb43a",
      value:"INR",
      label:"Indian Rupee (INR)",
      symbol:"₹",
      createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      currency_id:"ef21747d-366f-4b2b-b9d5-845c8f079401",
      value:"ZAR",
      label:"South African Rand (ZAR)",
      symbol:"R",
      createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      currency_id:"ef4cc697-b4d6-4718-90e4-1835d05e3030",
      value:"JPY",
      label:"Japanese Yen (JPY)",
      symbol:"¥",
      createdAt: new Date(),
     updatedAt: new Date()
    },
    {
      currency_id:"fa2dbbdb-954e-4811-b887-c4ef35a07ab9",
      value:"CAD",
      label:"Canadian Dollar (CAD)",
      symbol:"C$",
      createdAt: new Date(),
     updatedAt: new Date()
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
