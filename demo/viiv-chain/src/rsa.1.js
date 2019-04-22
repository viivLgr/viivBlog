function sign({ from, to, amount, timestamp }) {
    const keypairTemp = ec.keyFromPrivate(keys.prv)
    
    const bufferMsg = Buffer.from(`${timestamp}-${amount}-${from}-${to}`)
    
    // console.log(bufferMsg)
    
    let signature = Buffer.from(keypairTemp.sign(bufferMsg).toDER()).toString('hex')
    
    return signature
    
    }
    
    // 3. 校验签名
    
    function verify({ from, to, amount, timestamp, signature }) {
    
    // 校验只有公钥
    
    const keypairTemp = ec.keyFromPublic(keys.pub, 'hex')
    
    const bufferMsg = Buffer.from(`${timestamp}-${amount}-${from}-${to}`)
    
    console.log(bufferMsg)
    
    return keypairTemp.verify(bufferMsg, signature)
    
    }
    
    console.log(keys)
    
    
    
    const obj = { from:'woniu', to:'imooc', amount:10, timestamp:1553757424559 }
    
    const signer = sign(obj)
    
    console.log(signer)
    
    
    
    obj.signature = signer
    
    console.log(obj)
    
    console.log(verify(obj))
    
    