import Character from '../character';
import Zombie from '../zombie';

test('create new Zombie class', () => {
  const result = new Zombie(7, 17)
  expect(result instanceof Zombie).toBe(true)
  expect(result instanceof Character).toBe(true)
  expect(result).toEqual({level: 7, health: 17, attack: 40, defence: 10})
})

test('levelUp method for new Zombie class', () => {
  const result = new Zombie(7, 17)
  const resultError = new Zombie(3, 0)
  result.levelUp()
  expect(result).toEqual({level: 8, health: 100, attack: 48, defence: 12})
  expect(resultError.levelUp()).toBe('error')
})
