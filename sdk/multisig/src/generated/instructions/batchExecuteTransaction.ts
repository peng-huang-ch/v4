/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category BatchExecuteTransaction
 * @category generated
 */
export const batchExecuteTransactionStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'BatchExecuteTransactionInstructionArgs'
)
/**
 * Accounts required by the _batchExecuteTransaction_ instruction
 *
 * @property [] multisig
 * @property [**signer**] member
 * @property [_writable_] proposal
 * @property [_writable_] batch
 * @property [] transaction
 * @category Instructions
 * @category BatchExecuteTransaction
 * @category generated
 */
export type BatchExecuteTransactionInstructionAccounts = {
  multisig: web3.PublicKey
  member: web3.PublicKey
  proposal: web3.PublicKey
  batch: web3.PublicKey
  transaction: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const batchExecuteTransactionInstructionDiscriminator = [
  172, 44, 179, 152, 21, 127, 234, 180,
]

/**
 * Creates a _BatchExecuteTransaction_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category BatchExecuteTransaction
 * @category generated
 */
export function createBatchExecuteTransactionInstruction(
  accounts: BatchExecuteTransactionInstructionAccounts,
  programId = new web3.PublicKey('SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf')
) {
  const [data] = batchExecuteTransactionStruct.serialize({
    instructionDiscriminator: batchExecuteTransactionInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.multisig,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.member,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.proposal,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.batch,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.transaction,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}