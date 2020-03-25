import React from 'react';
import { getUser, removeUserSession } from '../../util/Common';
import PlaceHolder from './Placeholder';
import './default.css'

const Dashboard = (props)=> {
  const user = getUser();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
 
  return (
    <section className="dashboard">
      <div className="dashboard__header"> 
      <div className="dashboard__header__profile-section">       
      <div className="dashboard__header__profile-icon"></div>
      <input className="dashboard__logout-btn" type="button" onClick={handleLogout} value="Logout" /></div>
      </div>
     <p>Welcome {user}!</p> 
      <PlaceHolder count={6}/>
    </section>
  );
}
 
export default Dashboard;