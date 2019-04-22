// 结尾是.sol
// http://remix.ethereum.org
// https://metamask.io/
// 1. 版本声明

pragma solidity ^0.5.1;

// contract 关键字新建合约
contract Counter {
    // 变量必须声明类型
    uint num;
    address owner;
    string name = "viiv";
    uint [5] arr = [1, 2, 3, 4, 5];

    // {woniu: 18}
    mapping(string=>uint) users;

    users["address1"] = 100;
    users["address2"] = 10;
    // 所谓的代币 就是映射里自己存储的值
    users["address1"] -= 10;
    users["address2"] += 10;

    struct Students {
        uint age;
        uint id;
        string name;
        string phone;
    }

    viiv = Students(18, 0, 'viiv', '13212222222')

    // 0, 1
    enum sex {male, female}

    constructor() public {
        num = 0;
        // msg.sender 谁部署合约，这个值就是谁
        owner = msg.sender;
    }
    // 函数类型 public 公用函数
    function increment() public {
        // 只有部署的人才可以操作
        if(owner == msg.sender) {
            num += 1; 
        }
    }
    // view 函数 只读取变量，不屑
    // 声明返回值类型
    function getNum() public view returns (uint) {
        return num;
    }
}