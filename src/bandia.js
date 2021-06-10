const helpers = require("./helpers");
const provider = require("./providers");

const generator = {
  firstName: () => {
    return provider.first_name[helpers.random_element(provider.first_name)];
  },

  lastName: () => {
    return provider.last_name[helpers.random_element(provider.last_name)];
  },

  fullName: () => {
    return (
      provider.first_name[helpers.random_element(provider.first_name)] +
      " " +
      provider.last_name[helpers.random_element(provider.last_name)]
    );
  },

  email: () => {
    return `${provider.first_name[
      helpers.random_element(provider.first_name)
    ].toLowerCase()}${provider.last_name[
      helpers.random_element(provider.last_name)
    ].toLowerCase()}@${
      provider.domains[helpers.random_element(provider.domains)]
    }`;
  },

  phone: () => {
    return `0${
      provider.phone[helpers.random_element(provider.phone)]
    }${Math.floor(Math.random() * 8999999 + 1000000)}`;
  },

  nida_id: () => {},
};

module.exports = generator;
