import { Link } from 'react-router-dom';
import React from 'react';

import 'assets/style/sidebar.scss';

function SideBar({ location, match, items }) {
  const { state } = location;
  const selected = state ? state.channelName  : undefined;

  const renderOtherTabs = () => (
    items.map((item, index) => {
      return <li className={item == selected ? 'selected' : ''} key={`channel-side-bar-${index}`}>
        <Link className="menu-item"
          to={{
            pathname: `${match.url}channel`,
            state: {
              channelName: item
            }
          }}>
          <span>{item}</span>
        </Link>
      </li>
    }));

  return (
    <div className="sidebar">
      <ul className="list-unstyled sidebar-menu">
        <li className="dashboard-menu">
          <i className="stf-icon-angel-down" />
        </li>
        {renderOtherTabs()}
      </ul>
    </div>
  );
}

export default SideBar;
