import Character from '../character';
import Swordsman from '../swordsman';

test('create new Swordsman class', () => {
  const result = new Swordsman(3,50)
  expect(result instanceof Swordsman).toBe(true)
  expect(result instanceof Character).toBe(true)
  expect(result).toEqual({level: 3, health: 50, attack: 40, defence: 10})
})

test('levelUp method for new Swordsman class', () => {
  const result = new Swordsman(3, 50)
  const resultError = new Swordsman(3, 0)
  result.levelUp()
  expect(result).toEqual({level: 4, health: 100, attack: 48, defence: 12})
  expect(resultError.levelUp()).toBe('error')
})
