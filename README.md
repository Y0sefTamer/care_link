---
title: Care Link - README
---

# 🏥 Care Link

> **Decentralized Healthcare Platform on ICP**  
> Connecting families with trusted caregivers & medical supplies using blockchain technology.

---

## 📌 Problem Statement
Finding a **reliable caregiver** is often difficult:  
- Families spend hours searching without guarantees of trust.  
- Payments are unsafe or involve high fees.  
- Transparency in care sessions is almost non-existent.  
- Access to **medical supplies** is fragmented and inconvenient.  

---

## 💡 Our Solution
**Care Link** is a decentralized platform built on the **Internet Computer (ICP)** that solves these challenges by:  
- Providing **verified caregiver profiles** with on-chain trust mechanisms.  
- Enabling **transparent booking & care session tracking** recorded on the blockchain.  
- Supporting **secure, intermediary-free payments**.  
- Offering a **built-in medical supplies marketplace** so families can order essential items directly.  

We also validated our idea with a **waiting list survey**, receiving interest from people in Egypt, Nigeria, Russia, the US, and more. The majority highlighted the difficulty of finding *trusted caregivers* — confirming the problem we’re solving.

---


## ✨ Key Features
- 🔒 **Verified Caregivers**: on-chain profiles with ratings & credentials.  
- 📅 **Easy Booking**: choose a date, time, and caregiver in just a few clicks.  
- 💳 **Secure Payments**: powered by ICP canisters & Plug Wallet/Internet Identity.  
- 📝 **Transparent Records**: all care sessions tracked & verifiable.  
- 🛒 **Medical Supplies Marketplace**: order healthcare products directly from the platform.  
- 📱 **Responsive Design**: works seamlessly on desktop & mobile.  

---

## 🏗️ Architecture
**Frontend** → React (connects via `@dfinity/agent`)  
**Backend** → ICP Canisters (Rust for logic & storage)  
**Auth** → Internet Identity / Plug Wallet  
**Payments** → On-chain with ICP cycles & smart contracts  
**Storage** → Tamper-proof decentralized storage for bookings, sessions, and reviews  

---

## 🛠️ Tech Stack
- **ICP Canisters** – decentralized backend logic  
- **Rust ** – smart contract languages  
- **React ** – frontend web app  
- **TailwindCSS** – responsive UI styling  
- **GitHub Actions** – CI/CD for deployment  

---

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
