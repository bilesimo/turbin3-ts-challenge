import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';

export function base58ToWallet(base58: string): Uint8Array {
    try {
        const wallet = bs58.decode(base58);
        console.log("Decoded wallet bytes:", wallet);
        return wallet;
    } catch (error) {
        console.error("Failed to decode Base58:", error);
        return new Uint8Array();
    }
}

export function walletToBase58(wallet: Uint8Array): string {
    try {
        const base58 = bs58.encode(wallet);
        console.log("Encoded Base58 string:", base58);
        return base58;
    } catch (error) {
        console.error("Failed to encode to Base58:", error);
        return "";
    }
}
