import hello from './hello';

test('setTimeout', () => {
  jest.useFakeTimers();
  const callback = jest.fn();
  hello('jest', callback);
  jest.runAllTimers();
  expect(callback).toHaveBeenCalledWith('Hello, jest!');
  jest.clearAllTimers();
})
