import Character from '../character';
import Daemon from '../daemon';

test('create new Daemon class', () => {
  const result = new Daemon(2,2)
  expect(result instanceof Daemon).toBe(true)
  expect(result instanceof Character).toBe(true)
  expect(result).toEqual({level: 2, health: 2, attack: 10, defence: 40})
})

test('levelUp method for new Daemon class', () => {
  const result = new Daemon(2,2)
  const resultError = new Daemon(1,0)
  result.levelUp()
  expect(result).toEqual({level: 3, health: 100, attack: 12, defence: 48})
  expect(resultError.levelUp()).toBe('error')
})
