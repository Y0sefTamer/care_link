---
title: Care Link - README
---

# 📖 Project Description

Care Link is a decentralized platform built on the Internet Computer
(ICP) that connects families with trusted caregivers. The project solves
the problems of trust, access, and transparency in home healthcare by
leveraging the security and scalability of blockchain technology.\
\
Care Link provides a reliable way for families to:\
- Find and book verified caregivers\
- Track care sessions transparently on-chain\
- Ensure secure payments with no intermediaries\
- Build trust through decentralized verification\
\
By using ICP canisters, the platform ensures decentralized backend logic
and tamper-proof data storage, making healthcare interactions safe and
transparent.

# ⚙️ Local Development Setup

## Prerequisites

\- Install DFX SDK
(https://internetcomputer.org/docs/current/developer-docs/build/install-dfx)\
- Install Node.js (LTS) (https://nodejs.org/)\
- Install Git

## Clone the Repository

\`\`\`bash\
git clone https://github.com/your-username/care-link.git\
cd care-link\
\`\`\`

## Start ICP Local Replica

\`\`\`bash\
dfx start \--background\
\`\`\`

## Deploy the Canisters

\`\`\`bash\
dfx deploy\
\`\`\`

## Run Frontend (if React/Next.js)

\`\`\`bash\
cd frontend\
npm install\
npm run dev\
\`\`\`

Now visit: http://127.0.0.1:4943

# 🔗 Integration

\- Smart Contracts (Canisters): expose APIs for authentication,
caregiver booking, and payments.\
- Frontend: connects to the canisters using \@dfinity/agent.\
- Wallets: integrates with Plug Wallet or Internet Identity for
authentication.

Example usage in frontend:\
\
\`\`\`javascript\
import { Actor, HttpAgent } from \"@dfinity/agent\";\
import { idlFactory as careLink_idl, canisterId as careLink_id } from
\"declarations/care_link\";\
\
const agent = new HttpAgent();\
const careLinkActor = Actor.createActor(careLink_idl, {\
agent,\
canisterId: careLink_id,\
});\
\
// Example: book a caregiver\
await careLinkActor.bookCaregiver(caregiverId, date, hours);\
\`\`\`

# 🤝 Contributing

We welcome contributions!\
\
1. Fork the repo\
2. Create your feature branch\
\`\`\`bash\
git checkout -b feature/amazing-feature\
\`\`\`\
3. Commit changes\
\`\`\`bash\
git commit -m \"Add amazing feature\"\
\`\`\`\
4. Push to branch\
\`\`\`bash\
git push origin feature/amazing-feature\
\`\`\`\
5. Open a Pull Request 🎉

# 📜 License

This project is licensed under the MIT License.
