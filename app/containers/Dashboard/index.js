import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { setUserToken } from 'containers/Login/actions';
import Header from 'components/Layout/Header';
import { fetchAllChannelIds } from 'api/channelServices';
import { PrivateRoutes as Routes } from 'containers/Routes/index';
import SideBar from 'components/Layout/SideBar';
import { getUserInfo, getToken } from 'containers/login/selector';

import './getStyles';

const Dashboard = props => {
  const [channelList, setChannelList] = useState([]);

  useEffect(() => {
    fetchAllChannels();
  }, []);

  const fetchAllChannels = async () => {
    try {
      const result = await fetchAllChannelIds();
      if (result.status == 'ok') {
        setChannelList(result.res);
      }
    } catch (error) {
    }
  }

  const onLogout = () => {
    logOut();
    history.push('/login');
  };

  const login = () => <Redirect to="/login" />;

  /**
  * @param {any} userInfo   - shape of {
    * @param {string} avatar 
    * @param {string} username 
    }
   */
  const letsGO = () => {
    return (
      <div className="container-area">
        <SideBar items={channelList}  match={props.match} location={props.location} />
        <div className="w-100">
          <Header username={props.userInfo.username} avatar={props.userInfo.avatar} onLogout={onLogout} />
          <main>
            <div className="container">
              <Routes match={props.match} />
            </div>
          </main>
        </div>
      </div>
    );
  };

  return (props.token ? letsGO(props) : login());
}

const mapStateToProps = state => ({
  userInfo: getUserInfo(state),
  token: getToken(state),
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(setUserToken()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
