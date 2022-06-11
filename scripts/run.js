
const main = async() => {

    try{
        const whitelistContractFactory = await hre.ethers.getContractFactory("Whitelist");
        const whitelistContract = await whitelistContractFactory.deploy(10);

        await whitelistContract.deployed();

        console.log(whitelistContract.address, "The whitelist contract address");


        let add = await whitelistContract.addToWhitelist();
        await add.wait();
        
       


        

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