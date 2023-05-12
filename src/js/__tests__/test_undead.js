import Character from '../character';
import Undead from '../undead';

test('create new Undead class', () => {
  const result = new Undead(8,15)
  expect(result instanceof Undead).toBe(true)
  expect(result instanceof Character).toBe(true)
  expect(result).toEqual({level: 8, health: 15, attack: 25, defence: 25})
})

test('levelUp method for new Undead class', () => {
  const result = new Undead(8, 15)
  const resultError = new Undead(3, 0)
  result.levelUp()
  expect(result).toEqual({level: 9, health: 100, attack: 30, defence: 30})
  expect(resultError.levelUp()).toBe('error')
})
