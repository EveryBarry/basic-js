const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    let i = (position - 1);
    if (this.chain[i] == undefined) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(i, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let out = this.chain.join('~~');
    this.chain = [];
    return out;
  }
};

module.exports = {
  chainMaker
};
