import React, { useState, useEffect } from 'react';

import { db } from '../../firebase/firebase';
import { useStateValue } from '../../store/Store';
import Order from './components/Order';

import './Orders.scss';

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => {
          setOrders(
            snapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data()
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <section className='orders'>
      <h1>{`${user ? 'Your Oders' : 'Please login to view your orders'}`}</h1>

      <section className='orders__order'>
        {orders.map((order, index) => (
          <Order key={index} order={order} />
        ))}
      </section>
    </section>
  );
}

export default Orders;
