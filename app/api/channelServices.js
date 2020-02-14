import request from 'utils/request';
import { SEARCH_MESSAGE_API, FETCH_ALL_CHANNEL_IDS, POST_NEW_MESSAGE } from './apiAddresses';

export function fetchAllChannelIds() {
  return request({
    method: 'GET',
    url: FETCH_ALL_CHANNEL_IDS,
  });
};

export function  findAllChannelMessagesService(channelName) {
  const url = SEARCH_MESSAGE_API(channelName);
  return request({
    method: 'GET',
    url: url,
  });
};

export function UpdateChannel(username, message, channelId) {
  return request({
    method: 'PUT',
    url: POST_NEW_MESSAGE,
    data: {
        username,
        message,
        channelId
    }
  });
};
