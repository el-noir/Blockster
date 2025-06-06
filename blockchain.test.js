const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', ()=>{
    let blchain;

    beforeEach(()=>{
        blchain= new Blockchain();
    });

    it(`starts with genesis block`, ()=>{
        expect(blchain.chain[0]).toEqual(Block.genesis());
    });

    it(`adds a new block`, ()=>{
        const data = 'noi';
        blchain.addBlock(data);

        expect(blchain.chain[blchain.chain.length-1].data).toEqual(data);
    })
})