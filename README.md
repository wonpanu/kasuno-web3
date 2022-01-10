# KASUNO with Web 3

# Deploy locally

## Ganache
option 1:
[Ganache GUI](https://trufflesuite.com/ganache/)<br>
option 2:
[ganache-cli](https://www.npmjs.com/package/ganache-cli)

Create Ganache workspace and select [truffle-config.js](contracts/truffle-config.js) 
```
# plase update the address
development: {
 host: "127.0.0.1",     // Localhost (default: none)
 port: 7545,            // Standard Ethereum port (default: none)
 network_id: "*",       // Any network (default: none)
 from: "{your-address}"
}
```

## Run migrate
```
npx truffle migrate --network development
```

## Test 
```
cd contracts
npm i
npx truffle test
```
