const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const data = "some string that we want to save to the Infura IPFS";
ipfs.add(data, (err, hash) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('http://ipfs.infura.io/ipfs/' + hash);
    }
})