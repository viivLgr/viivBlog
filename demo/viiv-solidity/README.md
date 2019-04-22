智能合约
区块链上上面写的代码

语言是类javascript的solidity

助记词
fan toe mercy south level lesson frost rebel tape include life undo

1. 布尔值
    true  false
    && || !

2. 整型
    uint 无符号整型 只能表示正数
    int 和js里的number一样 任何数
    + - * /  < > <=  >=

3. 地址 address
    以太坊的地址  
    0xEd0E34B21fF2233C8Af108A5EDCAb21Fa356D461   
    16进制
    1. 合约里面全局变量 msg.sender 部署合约的地址（合约的拥有者）
    2. 地址又很多方法，blance 查看余额，transfer 转账

4. 字符串
    string name = "viiv"

5. 数组
    uint [5] arr = [1, 2, 3, 4, 5];
    for(uint i = 0; i < arr.length; i++) {}
    arr[1] = 3;
    arr.push(6);

6. map
    所谓的map 和js的对象是一个东西
    {
        name: 'viiv',
        age: 18
    }
    // {woniu: 18}
    mapping(string=>uint) users;

    users["address1"] = 100;
    users["address2"] = 10;
    // 所谓的代币 就是映射里自己存储的值
    users["address1"] -= 10;
    users["address2"] += 10;

7. 结构体 struct
    声明一个数据有哪些字段
    struct Students {
        uint age;
        uint id;
        string name;
        string phone;
    }

    viiv = Students(18, 0, 'viiv', '13212222222')

8. 枚举
    只能在定义里面选
     // 0, 1
    enum sex {male, female}