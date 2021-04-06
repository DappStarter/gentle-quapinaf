require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan reward stereo come harvest indoor flower genre'; 
let testAccounts = [
"0x22d28c71e8cc6e4bea20b7ab4a4597ca4065119b078ff5f4fff18e0394b0af37",
"0xe6b3ee3ca583e52160e21c555a26aee049f5836e4bac5fb554210a90801d6840",
"0x5a9ccc9f8fc1d102fc1b58813ba9d04b994c1d72c5b8205c8496f77ed3d9bf6b",
"0x95903c4d1bc25ed060746f6093e2b2028c592c44444f739a54b88b06f1f0916f",
"0xdd35b260e754b86ae897e03e9885bf3e69cf25816361aa25099ed885cc18cf77",
"0xabdf823611988b0ab8dd1ef1588eec331b1a9e97b0d4378d06d5358f5e99dd4b",
"0xb65306fbf29adb5fecac6f8ddf717180b4ae4eaabbffbb2eeb70e67dc986fd14",
"0xa1586b53973838ae98116ea336e19856fa6ce64defd4171bfc2280f408d7a429",
"0x17482ac9c0eff3ec9fd0ffb78d82c00a5e369e80f9b48026010034c4ccb77710",
"0x5e3a7f1fe9182fa097bd7949176d924778bf0c19dff5884ba2322ff2c303dbd4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
