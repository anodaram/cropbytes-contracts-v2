

const cropbytes = artifacts.require("CropBytes");
const cropbytesVesting = artifacts.require("CropBytesVesting");
module.exports = async(deployer) =>{
    await deployer.deploy(cropbytes);
    await deployer.deploy(cropbytesVesting,cropbytes.address)
   
};

