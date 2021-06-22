const sdk = require('../../../../sdk');

const MASSET_ABI_V2 = require('./abi-massetv2.json');

async function tvl(_, block) {
  console.log(block)
  
  try {
    const res = await sdk.api.abi.call({
      target: '0xe840b73e5287865eec17d250bfb1536704b43b21',
      block,
      abi: MASSET_ABI_V2.getBassets,
    });
    
    console.log("RES", res);
  } catch (error) {
    console.log("ERROR", error)
  }
}

module.exports = {
  name: 'mStable',
  token: 'MTA',
  chain: 'polygon',
  category: 'assets',
  start: 13630640,
  tvl
};
