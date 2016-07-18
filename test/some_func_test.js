import assert from 'power-assert';
import Some from '../src/js/utils/some_func';

describe('somefunc', () => {
    it('should return -1', () => {
        assert.equal(-1, [].indexOf(5));
        //assert.equal(-1, [1,2,3].indexOf(2));
    });
    const some = new Some();

    it('should return true', () => {
        assert.ok(some.someFunc());
    });
});
