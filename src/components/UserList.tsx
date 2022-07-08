import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelected';

const UserList: React.FC = () => {

const {error, loading, users} = useTypedSelector(state => state.user);
const {fetchUsers} = useActions()

useEffect(() => {  
  fetchUsers()
}, [])

if (loading) {
  return <div>Loading...</div>
}

if (error) {
  return <h1>{error}</h1>
}

return (
    <div>
      {users.map(user => <div>{user.name}</div>)}
    </div>
  );
};

export default UserList;
