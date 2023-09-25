const server = require('./app')
const PORT = 3002

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)

})
process.on('SIGINT', () => {
    server.close()
    console.log('Aplicação encerrada')
})

