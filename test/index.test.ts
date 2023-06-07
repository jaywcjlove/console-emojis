import '../src/index';

it('console-emojis "console.cn" test case', async () => {
  console.log = jest.fn();
  console.cn(" Welcome to China!");
  // @ts-ignore
  expect(console.log.mock.calls[0][0]).toBe(`🇨🇳  Welcome to China!`);
  
});

it('console-emojis "console.a" test case', async () => {
  console.log = jest.fn();
  console.a(" Hello -> a !")
  // @ts-ignore
  expect(console.log.mock.calls[0][0]).toBe(`🅰️  Hello -> a !`);
});

it('console-emojis "console.a" test case', async () => {
  console.log = jest.fn();
  console.airplane(" Hello -> airplane !")
  // @ts-ignore
  expect(console.log.mock.calls[0][0]).toBe(`✈️  Hello -> airplane !`);
});