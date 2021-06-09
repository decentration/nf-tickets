import utils from '../substrateUtils';
import { signAndSendTx } from './txHandler';

const createGift = async (api, senderAccount, interimAddress, amount, cb) => {
  if (!interimAddress) {
    throw new Error('No address was specified to redeem the gift to');
  }
  const chainAmount = utils.toChainUnit(amount, api.registry.chainDecimals);
  const tx = api.tx.gift.gift(chainAmount, interimAddress);

  return new Promise((resolve, reject) =>
    signAndSendTx(tx, senderAccount, ({ result, error }) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    }).catch((error) => reject(error))
  );
};

const claimGift = async (api, interimAccount, recipientAddress, cb) => {
  if (!recipientAddress) {
    throw new Error('No address was specified to redeem the gift to');
  }
  const tx = api.tx.gift.claim(recipientAddress);
  return new Promise((resolve, reject) =>
    signAndSendTx(tx, interimAccount, ({ result, error }) => {
      if (error) {
        reject(error);
      }
      const { events } = result;
      const giftClaimedEvent = events.filter(({ event }) =>
        api?.events?.gift?.GiftClaimed?.is(event)
      );

      const value = giftClaimedEvent[0]?.event?.data[1]?.toString();
      resolve(value);
    }).catch((error) => reject(error))
  );
};

const removeGift = async (api, senderAccount, interimAddress, cb) => {
  const tx = api.tx.gift.remove(interimAddress);
  return new Promise((resolve, reject) =>
    signAndSendTx(tx, senderAccount, ({ result, error }) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    }).catch((error) => reject(error))
  );
};
const giftPallet = { createGift, claimGift, removeGift };
export default giftPallet;
