const server = require('./api/src/app.js')
const { conn } = require('./api/src/db.js')

const PORT = process.env.PORT || 3001

server.listen(PORT, async () => {
    await conn.sync({ force: false })
    console.log(`is listening at ${PORT}`)
    console.log('**************************    GymSpace    ***********************')
})
