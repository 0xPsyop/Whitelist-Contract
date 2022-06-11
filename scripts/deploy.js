const main = async() => {

    try{
        const whitelistContract = await hre.ethers.getContractFactory("Whitelist");
        const deployContract = await whitelistContract.deploy(10);

        await deployContract.deployed();

    }catch(err){
         console.log(err);
    }
}

const runMain = async() =>{

    try{
        await main();
        process.exit(0);

    } catch(err){

        console.log(err);
        process.exit(1)
    }
}

runMain();