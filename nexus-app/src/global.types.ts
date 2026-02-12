import { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";

export interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

export interface userInfoInterface {
  id: string;
  name: string | null;
  email: string | null;
  createdAt: string | Date;
  countryCode: string;
  mobile: string;
  profilePicture: string | null;
  lastName: string | null;
  isVerified?: boolean;
}

export type Args = {
  file: File | null;
  firstName: string;
  lastName: string;
  mobile: string;
  countryCode: string;
};

export interface profileUserInterface {
  profilePicture: string;
  name: string;
  lastName: string;
  mobile: string;
  countryCode: string;
}

export type UserContextType = {
  user: userInfoInterface | null;
  setUser: Dispatch<SetStateAction<userInfoInterface | null>>;
  clearUser: () => void;
};

export interface countryCode {
  id: number;
  countryCode: string;
}

export type Errors = {
  countryCode?: string;
  mobile?: string;
  photo?: string;
  firstName?: string;
  lastName?: string;
  contactName?: string;
  mobileNumber?: string;
};

export type FormState = {
  success: boolean;
  error: Errors | null;
  data: any | null;
};

export interface userContactInfoInterface {
  id: string;
  ownerUserId: string;
  phone: string;
  name: string | null;
  linkedUserId: string | null;
  isDeleted: boolean;
  createdAt: string | Date;
  linkedUser: userInfoInterface | null;
}

export type SidebarProps = {
  isSidebarOpen: boolean;
  contacts: userContactInfoInterface[];
  selectedChat: userContactInfoInterface | null;
  setSelectedChat: (value: userContactInfoInterface | null) => void;
};

export enum MessageType {
  TEXT = "text",
  IMAGE = "image",
  LOCATION = "location",
  LIVE_LOCATION = "live_location",
  FILE = "file",
}

export type contentType = {
  text: string;
  type: MessageType;
  isSafe: boolean | null;
};

export type chatReactionType = {
  id: string | null;
  messageId: string;
  reactorId: string;
  emoji: string;
  createdAt: string;
  isDeleted?: boolean;
};

export type chatType = {
  id?: string | null;
  senderId: string;
  receiverId: string;
  chatReactions?: chatReactionType[];
  content: contentType;
  createdAt?: string;
  isDeleted?: boolean;
};

export interface NewContactProps {
  setContactFormOpen: (open: boolean) => void;
  contactFormOpen: boolean;
  dropdown: ReactNode;
  setContactsState: Dispatch<SetStateAction<userContactInfoInterface[]>>;
}

type OtpSuccessResponse = {
  success: true;
  user: {
    user: userInfoInterface;
    token: string;
  } | null;
  isExistingUser: boolean;
};

type OtpErrorResponse = {
  success: false;
  message: string;
};

export type OtpResponse = OtpSuccessResponse | OtpErrorResponse;
