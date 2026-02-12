export const userByMobileKey = (countryCode: string, mobile: string) =>
  `user:mobile:${countryCode}:${mobile}`;

export const getUserKey = (userId: string) => `user:id:${userId}`;

export const contactListKey = (userId: string) => `contactList:${userId}`;

export const contactInfoKey = (ownerUserId: string, linkedUserId: string) =>
  `contactInfo:${ownerUserId}:${linkedUserId}`;
