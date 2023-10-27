export default interface User {
  name: string || undefined,
  role: string || string[] || undefined,
  age?: number || undefined
}