import crypto from 'crypto';

const MakeSerial = (prefix: string): string => {
  const uniqueId = crypto.randomBytes(4).toString('hex').toUpperCase();
  return `${prefix}${uniqueId}`;
};

export default MakeSerial;