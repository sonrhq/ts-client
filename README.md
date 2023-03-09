# Sonr TypeScript Client

This is a public TypeScript client for the Sonr blockchain, a decentralized, peer-to-peer identity and asset management system. The client allows developers to interact with the Sonr blockchain using TypeScript.

## Getting Started
To get started with the Sonr TypeScript client, follow these steps:

1. Install the Sonr TypeScript client

```bash
npm install @sonrhq/ts-client
```

2. Initialize the client with your Sonr credentials:
```typescript
import { SonrClient } from 'sonr-typescript-client';

const sonrClient = new SonrClient({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_API_SECRET',
});
```

3. Use the client to interact with the Sonr blockchain:
```typescript
// Get a list of all identities on the Sonr blockchain
const identities = await sonrClient.getAllIdentities();

// Create a new identity on the Sonr blockchain
const newIdentity = await sonrClient.createIdentity({
  name: 'John Doe',
  email: 'johndoe@example.com',
});

// Get the DID document for an identity on the Sonr blockchain
const didDocument = await sonrClient.getDIDDocument('did:sonr:1234');
```

For more information on how to use the Sonr TypeScript client, please refer to the API documentation.

## Join the Core Team
If you're interested in joining the core founding team for a deeply connected VC-backed startup, we're hiring! Check out our [job board](https://sonr.notion.site) for open positions.
