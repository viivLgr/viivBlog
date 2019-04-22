pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Adoption.sol";

contract TestAdoption {
    Adoption adoption = Adoption(DeployedAddresses.Adoption());
    uint expectedPetId = 8;
    address expectedAdopter = address(this);

    function testUserCanAdopt() public {
        uint returnId = adoption.adopt(8);
        Assert.equal(returnId, expectedPetId, "返回领养ID");
    }

    function testCanGetAdopters() public {
        address expect = address(this);
        address[16] memory adopters = adoption.getAdopters();
        Assert.equal(adopters[8], expect, "领养后，我的地址会被记录下来");
    }

    function testGetAdopterAddressByPetId() public {
        address adopter = adoption.adopters(expectedPetId);
        Assert.equal(adopter, expectedAdopter, "返回领养者信息");
    }

}