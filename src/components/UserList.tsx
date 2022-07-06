import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelected';
import { fetchUsers } from '../store/actionCreators/user';
import { UserAction } from '../types/user';

const UserList: React.FC = () => {

const {error, loading, users} = useTypedSelector(state => state.user);

const dispatch = useDispatch();

useEffect(() => {  
  dispatch(fetchUsers())
}, [])

if (loading) {
  return <div>Loading...</div>
}

if (error) {
  return <h1>{error}</h1>
}

return (
    <div>
      {users.map(user => 
        <div>{user.name}</div>
        )}
    </div>
  );
};

export default UserList;
