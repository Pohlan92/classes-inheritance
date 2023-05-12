import Character from '../character';

test('create new Character class', () => {
  const result = new Character(1,1)
  expect(result instanceof Character).toBe(true)
  expect(result).toEqual({level: 1, health: 1})
})

