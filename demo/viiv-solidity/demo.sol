pragma solidity ^0.5.6;
contract ERC20{
    // 返回币的名字 比如 viiv币
    string public name = "果然币";
    // 返回币的代号 viiv BTC
    string public symbal = "GRC";
    // 返回币的精度
    uint public decimals = 2;
    // 币种全部有多少个
    uint public totalSupply = 21000000;
    mapping (address => uint256) blances;
    mapping (address => mapping (address => uint256)) allowed;

    function TokenDemo(string memory _name, string memory _symbal, uint _decimals, uint _totalSupply) public {
        name = _name;
        symbal = _symbal;
        decimals = _decimals;
        totalSupply = _totalSupply;
    }

    // 查询余额
    function blanceOf(address _owner) public view returns (uint blance) {
        return blances[_owner];
    }

    // 转账
    function transfer(address _to, uint _value) public returns (bool success) {
        // 1. 校验
        require(blances[msg.sender] >= _value && _value > 0);
        // 2. 转钱
        blances[msg.sender] -= _value;
        blances[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    // 代理转账 授权
    function transferFrom(address _from, address _to, uint _value) public returns (bool success) {
        // 1. from 的地址余额要足
        // 2. 转账钱大于0
        // 3. 授权的额度大雨转账额度
        // require(blances[_from] >= _value && _value > 0 && allowed[_from][msg.sender] >= _value);
        require(blances[_from] >= _value && _value > 0 && allowed[msg.sender][_from] >= _value);
        // allowed[_from][msg.sender] -= _value;
        allowed[msg.sender][_from] -= _value;
        blances[_from] -= _value;
        blances[_to] += _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    // 授权 给某人可以花我的多少钱
    function approve(address _spender, uint _value) public returns (bool sucess) {
        allowed[msg.sender][_spender] = _value;
        emit Approve(msg.sender, _spender, _value);
        return true;
    }

    // 我授权给慕课 100
    // 小明给慕课 200
    function allowance(address _owner, address _spender) public view returns(uint remaining) {
        return allowed[_owner][_spender];
    }

    event Transfer(address indexed _from, address indexed _to, uint _value);

    event Approve(address indexed _owner, address _spender, uint _value);
}