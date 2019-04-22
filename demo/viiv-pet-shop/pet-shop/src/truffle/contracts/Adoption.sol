pragma solidity ^0.5.0;

contract Adoption {
    address[16] public adopters;

    // 领养
    function adopt(uint petId) public returns(uint) {
        require(petId >= 0 && petId < 16);
        adopters[petId] = msg.sender;
        return petId;
    }

    // 获取所有领养者
    function getAdopters() public view returns(address[16] memory) {
        return adopters;
    }
}