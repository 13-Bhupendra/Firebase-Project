import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../Slices/usersSlices';
import ChatroomScreen from './ChatroomScreen';
import DefaultScreen from './DefaultScreen';

const UserCards = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.users);

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div className='userCard d-flex flex-column p-3' style={{ height: '100vh' }}>
      <SearchBar />

      <div className="profile-cards flex-grow-1 overflow-auto mt-3">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          users.map((e) => (
            <div key={e.uid}>
              <div
                className="profile-card d-flex justify-content-between align-items-center rounded"
                onClick={() => setSelectedUser(e)}
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <img
                    src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
                    alt=""
                    className="rounded-circle me-2 profile-img border"
                  />
                  <div>
                    <span className="profile-name m-0">{e.name}</span> <br />
                    <span className="profile-time text-muted">Online</span>
                  </div>
                </div>
                <span className="profile-time text-muted">21/09/2025 <br /> Yesterday</span>
              </div>
              <hr />
            </div>
          ))
        )}
      </div>

      {selectedUser ? (
        <ChatroomScreen userName={selectedUser.name} />
      ) : (
        <DefaultScreen />
      )}
    </div>
  );
};

export default UserCards;


