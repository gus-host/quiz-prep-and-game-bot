module.exports = [
  {
    question: "What is a wallet in the context of blockchain?",
    options: [
      "A physical location where digital assets are stored",
      "A software program that allows users to securely interact with the blockchain",
      "A digital representation of cash",
      "A type of cryptocurrency.",
    ],
    answer: 1,
    explanation:
      "A wallet in blockchain technology is not a physical location but a software program that holds public and private keys for accessing digital assets on the blockchain",
  },
  {
    question: "What happens if you lose your private key",
    options: [
      "Your digital assets are deleted from the blockchain.",
      "You can still access your assets with your public key",
      "You lose access to your digital assets, but they remain on the blockchain",
      "You can easily recover your private key with your seed phrase",
    ],
    answer: 2,
    explanation:
      "Losing your private key means losing access to your digital assets. However, the assets themselves remain on the blockchain, inaccessible without the private key",
  },
  {
    question: "What is the difference between a seed phrase and a private key?",
    options: [
      "There is no difference, they are the same thing.",
      "A seed phrase is a more secure version of a private key.",
      "A seed phrase gives access to your private key, which in turn grants access to your digital assets.",
      "A private key allows access to the blockchain, while a seed phrase is for your wallet.",
    ],
    answer: 2,
    explanation:
      "A seed phrase is a collection of words used to recover your private key, which then allows you to access your digital assets.",
  },

  {
    question:
      "Why is it important to keep your private keys and seed phrases confidential?",
    options: [
      "It takes billions of years to crack them statistically.",
      "Knowing part of the seed phrase is enough to access your assets.",
      "Sharing them allows others to help you manage your assets.",
      "Both A and B",
    ],
    answer: 3,
    explanation:
      "Both your private key and seed phrase are critical for accessing your digital assets. Sharing them with anyone gives them complete control over your assets. While cracking them may be statistically difficult, it's still best to keep them confidential.",
  },
  {
    question: "Which type of wallet is generally considered more secure?",
    options: [
      "Hot wallet because it's always connected to the network for updates.",
      "Cold wallet because it stores private keys offline.",
      "There is no difference in security between hot and cold wallets.",
      "Security depends on the specific wallet provider.",
    ],
    answer: 1,
    explanation:
      "Cold wallets are considered more secure because they store private keys offline, making them less vulnerable to online attacks.",
  },

  {
    question:
      "What is important to consider when choosing a wallet for a specific blockchain network?",
    options: [
      "The wallet with the most colorful user interface.",
      "The popularity of the wallet provider.",
      "Whether the wallet is compatible with the chosen blockchain network.",
      "How many additional features the wallet offers.",
    ],
    answer: 2,
    explanation:
      "Different wallets work with different blockchain networks. It's crucial to choose a wallet that is compatible with the specific network you plan to use, such as Ethereum, Solana, or Cosmos.",
  },

  {
    question: "How does a public key function in a blockchain wallet?",
    options: [
      "It encrypts your digital assets for storage.",
      "It allows others to send you digital assets.",
      "It decrypts your private key for transactions.",
      "It stores your transaction history.",
    ],
    answer: 1,
    explanation:
      "Your public key acts like your public address, allowing others to send you cryptocurrency to your account.",
  },

  {
    question:
      "In the context of wallets, what is the role of a digital signature?",
    options: [
      "It verifies the sender's identity during a transaction.",
      "It encrypts the transaction data for privacy.",
      "It stores the transaction fees associated with a transfer.",
      "It determines the recipient's wallet address.",
    ],
    answer: 0,
    explanation:
      "A digital signature uses your private key to cryptographically prove you authorized a transaction.",
  },

  {
    question: "How should you store your seed phrase to ensure its safety?",
    options: [
      "Write it down on a piece of paper and keep it in your wallet.",
      "Store it as a note on your phone.",
      "Memorize it and never write it down.",
      "Save it in a cloud storage service.",
    ],
    answer: 2,
    explanation:
      "Seed phrases should be kept offline and away from any digital storage. Memorizing it is the most secure option, but writing it down on a piece of paper stored securely can be a backup option.",
  },
  {
    question:
      "What are some potential consequences of a phishing attack related to crypto wallets?",
    options: [
      "The attacker gains access to your browsing history.",
      "Your computer's processing power is used for mining.",
      "You are tricked into revealing your private key or seed phrase.",
      "Your internet connection is disrupted.",
    ],
    answer: 2,
    explanation:
      "Phishing attacks aim to steal your login credentials or sensitive information like your private key or seed phrase.",
  },
  {
    question: "What is a disadvantage of using a hot wallet?",
    options: [
      "Requires a physical device for access.",
      "More susceptible to online attacks.",
      "Limited compatibility with different blockchains.",
      "Complex setup process.",
    ],
    answer: 1,
    explanation:
      "Hot wallets are constantly connected to the internet, making them more vulnerable to hacking attempts.",
  },
  {
    question: "What is an advantage of using a cold wallet?",
    options: [
      "Offers a wider range of investment options.",
      "Easier to recover lost access.",
      "Convenient for frequent transactions.",
      "Provides higher transaction speeds.",
    ],
    answer: 3,
    explanation:
      "Cold wallets prioritize security by being offline, so transaction speeds might be slower compared to hot wallets. However, some cold wallets can connect to the internet for faster transactions when needed.",
  },

  // Add more questions as needed
];
