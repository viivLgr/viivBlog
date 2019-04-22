// 加密 安全
// RSA非对称加密

// 1. 生成公私钥对
// 2. 公钥直接当成地址用（或者截取公钥前20位）
// 3. 公钥可以通过私钥算出来
const fs = require('fs')
const EC = require('elliptic').ec
const ec = new EC('secp256k1')
let keypair = ec.genKeyPair()

const keys = generateKeys()
// 用私钥算出公钥
function getPub (prv) {
  return ec.keyFromPrivate(prv).getPublic('hex').toString()
}
// 1. 获取公私钥对（持久化）
function generateKeys () {
  const fileName = './wallet.json'
  try {
    let res = JSON.parse(fs.readFileSync(fileName))
    if (res.prv && res.pub && getPub(res.prv) === res.pub) {
      keypair.ec.keyFromPrivate(res.prv)
      return res
    } else {
      // 验证失败 重新生成
      throw new Error('not valid wallet.json')
    }
  } catch (error) {
    console.log('生成')
    // 文件不存在 或者文件内容不合法 重新生成
    const res = {
      prv: keypair.getPrivate('hex').toString(),
      pub: keypair.getPublic('hex').toString()
    }
    fs.writeFileSync(fileName, JSON.stringify(res))
    return res
  }
}
// 2. 签名
function sign ({ from, to, amount, timestamp }) {
//   const bufferMsg = Buffer.from(`${timestamp}-${amount}-${from}-${to}`)
//   let signature = Buffer.from(keypair.sign(bufferMsg).toDER()).toString('hex')
  const keypairTemp = ec.keyFromPrivate(keys.prv)
  const bufferMsg = Buffer.from(`${timestamp}-${amount}-${from}-${to}`)
  let signature = Buffer.from(keypairTemp.sign(bufferMsg).toDER()).toString('hex')
  return signature
}
// 3. 校验签名
function verify ({ from, to, amount, timestamp, signature }, pub) {
  // 校验只有公钥
  const keypairTemp = ec.keyFromPublic(pub, 'hex')
  const bufferMsg = Buffer.from(`${timestamp}-${amount}-${from}-${to}`)
  return keypairTemp.verify(bufferMsg, signature)
}

module.exports = { sign, verify, keys }

const trans = { from: 'viiv', to: 'imooc', amount: 100 }
const trans2 = { from: 'viiv2', to: 'imooc', amount: 100 }
const signature = sign(trans)
const signature2 = sign(trans2)
console.log('signature', signature)
trans.signature = signature
trans2.signature = signature2
const isVerify = verify(trans, keys.pub)
const isVerify2 = verify(trans2, keys.pub)
console.log('校验签名', keys, isVerify)
console.log('校验签名2', keys, isVerify2)
