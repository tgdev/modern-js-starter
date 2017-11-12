import demo from './demo';

describe('demo', () => {

  it('should return a greeting message', () => {
    const greeting = 'friend';
    const actual = demo(greeting);
    const expected = 'Hello friend';

    expect(actual).toBe(expected);

  });

});
