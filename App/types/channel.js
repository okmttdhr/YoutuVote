// @flow
export type TChannel = {
  id: string;
  createdAt: number;
  modifiedAt: number;
  status: string; // uninitialized, active, inactive
  rank: number;
  score: number;
  likeCount: number;
  cseSearchQuery?: string;
  youtube: {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
    banner: string;
    subscriberCount: number;
    viewCount: number;
  };
  twitter?: {
    screen_name: string;
    followersCount: number;
  };
}

export type TChannelStore = TChannel & {
  isLiked: boolean;
  isFetching: boolean;
  errorMessage: string;
}

export type TChannelStoreWithKey = {[key: string]: TChannelStore};
