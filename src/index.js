const helpers = require("./helpers");
const provider = require("./providers");

const person = {
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
    }${helpers.random_number_length(7)}`;
    },

    nida: () => {
        // Format: 19950304-19345-04546-43
        const block1 = date.between("1950-01-01", "1999-12-31").replace(/-/g, "");
        const block2 = helpers.random_number_length(5);
        const block3 = helpers.random_number_length(5);
        const block4 = helpers.random_number_length(2);
        return `${block1}-${block2}-${block3}-${block4}`;
    },

    tribe: () => {
        return provider.tribe[helpers.random_element(provider.tribe)];
    },

    job: () => {
        return provider.job[helpers.random_element(provider.job)];
    },
};

const date = {
    between: (startdate, enddate) => {
        if (typeof startdate === "undefined") {
            return "Missing Valid Parameters";
        } else {
            const start = new Date(startdate);
            const end = new Date(enddate);
            return new Date(
                    start.getTime() + Math.random() * (end.getTime() - start.getTime())
                )
                .toISOString()
                .slice(0, 10);
        }
    },

    past: () => {
        const start = new Date('2019-01-31');
        const end = new Date();
        return new Date(
                start.getTime() + Math.random() * (end.getTime() - start.getTime())
            )
            .toISOString()
            .slice(0, 10);
    },

    future: () => {
        const start = new Date();
        const end = new Date('2022-12-31');
        return new Date(
                start.getTime() + Math.random() * (end.getTime() - start.getTime())
            )
            .toISOString()
            .slice(0, 10);
    },
};

const finance = {
    bank: () => {
        return provider.bank[helpers.random_element(provider.bank)];
    },
};

const company = {
    name: () => {
        return provider.company[helpers.random_element(provider.company)];
    },
};

const misc = {
    rangi: () => {
        return provider.color[helpers.random_element(provider.color)];
    },
    food: () => {
        return provider.food[helpers.random_element(provider.food)];
    },
};


module.exports = {
    person,
    date,
    finance,
    company,
    misc
};