import assert from 'assert';
import test from 'tape';
import foo from '../';

test('returns default exported value', t => {
  t.plan(1);
  t.equal(foo, 'foo!');
});
