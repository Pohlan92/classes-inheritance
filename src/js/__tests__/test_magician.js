import Character from '../character';
import Magician from '../magician';

test('create new Magician class', () => {
  const result = new Magician(4,20)
  expect(result instanceof Magician).toBe(true)
  expect(result instanceof Character).toBe(true)
  expect(result).toEqual({level: 4, health: 20, attack: 10, defence: 40})
})

test('levelUp method for new Magician class', () => {
  const result = new Magician(4, 20)
  const resultError = new Magician(3, 0)
  result.levelUp()
  expect(result).toEqual({level: 5, health: 100, attack: 12, defence: 48})
  expect(resultError.levelUp()).toBe('error')
})
