interface DocumentFiles {
  profilePictureFilePath?: string;
  aadharFilePath?: string;
  drivingLicenseFilePath?: string;
  addressProofFilePath?: string;
}

interface WalletHistoryItem {
  id: string;
  amount: number;
  type: "Credit" | "Debit";
  transactionDate: string; // ISO Date string from backend
  isPaid: boolean;
  orderId: string;
}

interface TransactionHistoryItem {
  id: string;
  amount: number;
  type: "Credit" | "Debit" | "Refund";
  creditedIn?: "Wallet" | "Original Payment Method";
  debittedFrom?: "Wallet" | "PaymentGateway";
  transactionDate: string; // ISO Date string from backend
}

interface SubscriptionHistoryItem {
  id: string;
  name: string;
  packageId: string; // ObjectId ref to Package
  subscriptionStartsOn: string; // ISO date string
  amount: number;
  paymentFrom: "Wallet" | "PaymentGateway";
  orderId: string;
  vehicleCount: number;
  daysCount: number;
  active: boolean;
  isPaid: boolean;
  createdAt: string; // mongoose adds timestamps
  updatedAt: string;
}

export interface IndividualUser {
  id: string; // maps from MongoDB _id
  name: string;
  phoneNo: string;
  email: string;
  role: string; // e.g. "Organisation" or other roles
  documents: DocumentFiles;
  walletBalance: number;
  totalAddedBalanceInWallet: number;
  subscriptionHistory: SubscriptionHistoryItem[]; // ObjectId refs, populate if needed
  currentSubscriptions: string[]; // same as above
  walletHistory: WalletHistoryItem[];
  transactionHistory: TransactionHistoryItem[];
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  name: string;
  phoneNo: string;
  email: string;
}
