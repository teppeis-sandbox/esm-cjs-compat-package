'use strict';

const assert = require('assert');
const test = require('tape');

test('returns default export as an object', t => {
  t.plan(1);
  t.deepEqual(require('../'), {default: 'foo!'});
});

test('has a property `__esModule: true`', t => {
  t.plan(1);
  t.equal(require('../').__esModule, true);
});
