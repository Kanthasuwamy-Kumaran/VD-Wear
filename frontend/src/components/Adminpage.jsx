import React, { useState, useEffect } from 'react';

const Adminpage = () => {
  const [shopDetails, setShopDetails] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch Shop Details
    const fetchShopDetails = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/admin/shopsprofile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminToken')}`, // You need to implement admin token storage
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch shop details');
        }
        const data = await response.json();
        setShopDetails(data);
      } catch (error) {
        console.error('Error fetching shop details:', error.message);
      }
    };

    // Fetch All Users
    const fetchAllUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/admin/usersprofile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminToken')}`, // You need to implement admin token storage
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchShopDetails();
    fetchAllUsers();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const handleDeleteShop = async (shopId) => {
    try {
      // /${shopId}
      const response = await fetch(`http://localhost:3001/api/admin/deleteshop`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`, // You need to implement admin token storage
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete shop');
      }
      // Optionally, update the shopDetails state after successful deletion
      setShopDetails((prevShopDetails) => prevShopDetails.filter((shop) => shop._id !== shopId));
    } catch (error) {
      console.error('Error deleting shop:', error.message);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/admin/deleteuser/${userId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`, // You need to implement admin token storage
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      // Optionally, update the users state after successful deletion
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };

  return (
    <div className="admin-page" style={{background:"red", height:"100%"}}>
      <h1>Admin Page</h1>

      <section>
        <h2>Shop Details</h2>
        <table>
          <thead>
            <tr>
              <th>Shop ID</th>
              {/* Add more table headers as needed */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {shopDetails.map((shop) => (
              <tr key={shop._id}>
                <td>{shop._id}</td>
                {/* Display other shop details in table cells */}
                <td>
                  <button onClick={() => handleDeleteShop(shop._id)}>Delete Shop</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>All Users</h2>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              {/* Add more table headers as needed */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                {/* Display other user details in table cells */}
                <td>
                  <button onClick={() => handleDeleteUser(user._id)}>Delete User</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Adminpage;
