const dgram = require('dgram')

const udp = dgram.createSocket('udp4')

// 收信息
udp.on('message', (data, remote) => {
  console.log('accept message ' + data.toString())
  console.log(remote)
})

udp.on('listening', () => {
  const address = udp.address()
  console.log('udp server is listening ' + address.address + ':' + address.port)
})
udp.bind(8002)

function send (message, port, host) {
  console.log('cend message ', message, port, host)
  udp.send(Buffer.from(message), port, host)
}

const port = Number(process.argv[2])
const host = process.argv[3]
if (port && host) {
  send('雷猴啊', port, host)
}

// nodejs 打印参数
console.log(process.argv)
// [ '/usr/local/bin/node',
//   '/Users/viiv/Desktop/ViivWorkspace/viivBlog/demo/viiv-chain/src/testp2p.js' ]
