import { server } from './server'

server
  .listen({ port: 4000 })
  .then(console.log)
