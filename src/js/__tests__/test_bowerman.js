import Character from '../character';
import Bowerman from '../bowerman';

test('create new Bowerman class', () => {
  const result = new Bowerman(1,1)
  expect(result instanceof Bowerman).toBe(true)
  expect(result instanceof Character).toBe(true)
  expect(result).toEqual({level: 1, health: 1, attack: 25, defence: 25})
})

test('levelUp method for new Bowerman class', () => {
  const result = new Bowerman(1,1)
  const resultError = new Bowerman(1,0)
  result.levelUp()
  // resultError.levelUp()
  expect(result).toEqual({level: 2, health: 100, attack: 30, defence: 30})
  expect(resultError.levelUp()).toBe('error')
})

