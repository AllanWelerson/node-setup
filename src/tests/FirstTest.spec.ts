import { User } from '@models/User'

test('it shoud be ok', () => {
  const user = new User()

  user.name = 'Allan'

  expect(user.name).toEqual('Allan')
})
