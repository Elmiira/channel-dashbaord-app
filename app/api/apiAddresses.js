import config from 'config';

export const AUTH_USER_API = `${config.backendBasURL.concat('/auth/login')}`;

export const FETCH_ALL_CHANNEL_IDS = `${config.backendBasURL.concat('/channel/searchAll')}`;

export const POST_NEW_MESSAGE = `${config.backendBasURL.concat('/channel')}`;

export const SEARCH_MESSAGE_API = channelName => 
  `${config.backendBasURL.concat('/channel/search')}${channelName}`