import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  findAllChannelMessagesService,
  UpdateChannel,
} from 'api/channelServices';
import MessageList from 'components/List';
import TextEditor from 'components/TextEditor';
import { getUserInfo } from 'containers/login/selector';

function Channel(props) {
  const { state } = props.location;

  useEffect(() => {
    searchMessages(state.channelName);
  }, [props.location.state.channelName]);

  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([]);

  const searchMessages = async channelName => {
    try {
      const result = await findAllChannelMessagesService(channelName);
      if (result.status == 'ok') {
        setPosts(result.res);
      }
    } catch (error) {}
  };

  const setNewMsg = e => {
    setMessage(e.target.value);
  };

  const postNewMsg = async () => {
    if (message == '') {
      return;
    }
    try {
      setMessage('');
      const result = await UpdateChannel(
        props.userInfo.username,
        message,
        state.channelName,
      );
      if (result !== undefined) {
        const updatedPosts = posts.concat(result);
        setPosts(updatedPosts);
      }
    } catch (error) {}
  };

  return (
    <>
      <MessageList items={posts} />
      <TextEditor
        value={message}
        editMode={message == ''}
        value={message}
        handleOnChange={setNewMsg}
        submit={postNewMsg}
      />
    </>
  );
}

const mapStateToProps = state => ({
  userInfo: getUserInfo(state),
});

export default connect(mapStateToProps)(Channel);
