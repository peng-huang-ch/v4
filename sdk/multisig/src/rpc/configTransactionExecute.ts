import {
  Connection,
  PublicKey,
  SendOptions,
  Signer,
  TransactionSignature,
} from "@solana/web3.js";
import * as transactions from "../transactions";
import { translateAndThrowAnchorError } from "../errors";

/** Execute a config transaction. */
export async function configTransactionExecute({
  connection,
  feePayer,
  multisigPda,
  transactionIndex,
  member,
  rentPayer,
  signers,
  sendOptions,
}: {
  connection: Connection;
  feePayer: Signer;
  multisigPda: PublicKey;
  transactionIndex: bigint;
  member: Signer;
  rentPayer: Signer;
  signers?: Signer[];
  sendOptions?: SendOptions;
}): Promise<TransactionSignature> {
  const blockhash = (await connection.getLatestBlockhash()).blockhash;

  const tx = transactions.configTransactionExecute({
    blockhash,
    feePayer: feePayer.publicKey,
    multisigPda,
    transactionIndex,
    member: member.publicKey,
    rentPayer: rentPayer.publicKey,
  });

  tx.sign([feePayer, member, rentPayer, ...(signers ?? [])]);

  try {
    return await connection.sendTransaction(tx, sendOptions);
  } catch (err) {
    translateAndThrowAnchorError(err);
  }
}