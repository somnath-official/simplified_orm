import { User } from "./App/models/User"

new User()
  .where('name', 'like', '%som%')
  .where('age', 10)
  .get()