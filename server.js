const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({noCors:true})
const auth = require('json-server-auth')
// const cors = require('cors')

// server.use(cors({
//         origin : false,
//     }
// ))
server.db = router.db
server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Methods", "PUT", "POST", "GET", "DELETE", "OPTIONS")
    res.setHeader("Access-Control-Allow-Methods", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    // res.header(
    //   "Access-Control-Allow-Headers",
    //   "Origin, X-Requested-With, Content-Type, Accept"
    // );
    next();
 });
server.use(auth)
server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})