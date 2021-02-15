const { test, expect } = require('@jest/globals');
const hello = require('./hello');

test('outputs the correct string', () => {
    expect(hello()).toBe('hello world!!');
})