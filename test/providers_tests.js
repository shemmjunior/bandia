const chai = require("chai");
const bandia = require('../src');
const expect = chai.expect;

/** First Name */
expect(bandia.person.firstName()).to.be.a('string');

/** Last Name */
expect(bandia.person.lastName()).to.be.a('string');

/** Email */
expect(bandia.person.email()).to.be.a('string');

/** Phone Number */
expect(bandia.person.phone()).to.be.a('string');
expect(bandia.person.phone()).to.have.lengthOf(10)

/** Nida */
expect(bandia.person.nida()).to.be.a('string');
expect(bandia.person.nida()).to.have.lengthOf(23)

/** Tribe */
expect(bandia.person.tribe()).to.be.a('string');

/** Bank */
expect(bandia.finance.bank()).to.be.a('string');

/** Company */
expect(bandia.company.name()).to.be.a('string');

/** Color */
expect(bandia.misc.rangi()).to.be.a('string');

/** Food */
expect(bandia.misc.food()).to.be.a('string');