
# CareLink

CareLink is a decentralized platform that connects patients and families with qualified home nursing professionals. 
Built on the Internet Computer (ICP), CareLink ensures secure, transparent, and reliable healthcare services, enabling users 
to request, schedule, and manage home care services with trust and efficiency.

---

## 🚀 Project Description

CareLink addresses the challenge of accessing professional home care by providing a trusted digital healthcare solution.  
With ICP’s decentralized infrastructure, CareLink ensures patient privacy, secure payments, and a seamless connection between 
caregivers and patients. The platform empowers families to easily find verified nurses, while professionals can expand their 
reach and manage bookings online.

---

## 🛠️ Setup Instructions (Local Development)

To run CareLink locally, follow these steps:

### Prerequisites
- Install [DFX SDK](https://internetcomputer.org/docs/current/developer-docs/quickstart/local-quickstart)
- Install [Rust](https://www.rust-lang.org/tools/install)
- Install [Node.js](https://nodejs.org/) (LTS recommended)
- Install [npm](https://www.npmjs.com/)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/carelink.git
   cd carelink
   ```

2. Start the local Internet Computer replica:
   ```bash
   dfx start --background
   ```

3. Deploy the canisters:
   ```bash
   dfx deploy
   ```

4. Start the frontend (React app):
   ```bash
   cd frontend
   npm install
   npm start
   ```

The application will be available at `http://localhost:3000`.

---

## 🔗 Integration

CareLink exposes backend canister methods that can be integrated into other applications.  
Developers can interact with CareLink using [Candid](https://internetcomputer.org/docs/current/references/candid-spec/) interfaces.

### Example (JavaScript Agent):
```javascript
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory as carelink_idl, canisterId } from "declarations/carelink";

const agent = new HttpAgent();
const carelink = Actor.createActor(carelink_idl, { agent, canisterId });

// Example: Fetch all available nurses
const nurses = await carelink.get_all_nurses();
console.log(nurses);
```

---

## 🤝 Contributing

We welcome contributions from the community!

### How to Contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to your branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

Please ensure your code follows the project’s coding standards and is well-documented.

---

## 📩 Contact & Updates

- **Team CareLink**
- LinkedIn: [Yosef Tamer](https://www.linkedin.com/in/yosef-tamer-a740b4310/)
- LinkedIn: [Ahmed Magdy](www.linkedin.com/in/ahmed-magdy-023536240)
- LinkedIn: [Mariam Zekry]( https://www.linkedin.com/in/mariam-zekry-a163b9320/)
- LinkedIn: [Marim Fadel](https://www.linkedin.com/in/marim-fadel-b38509318/)
- Newsletter & Updates: Coming soon!

---

## 🧭 Team Vision

CareLink is redefining access to healthcare in the Middle East and Africa by enabling safe, transparent, and affordable 
home nursing services. With ICP’s decentralized infrastructure, we aim to bridge the gap between patients and caregivers, 
empowering communities with digital healthcare solutions.

