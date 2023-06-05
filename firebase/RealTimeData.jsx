import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import StartFirebase from '../firebase/firebase';

const db = StartFirebase();

export default function RealTimeData() {
  const [data, setData] = useState({});

  useEffect(() => {
    const dbRef = ref(db, 'userdata');
    const fetchData = () => {
      onValue(dbRef, (snapshot) => {
        const records = [];
        snapshot.forEach((childSnapshot) => {
          const keyName = childSnapshot.key;
          const data = childSnapshot.val();
          records.push({ key: keyName, data: data });
        });
        setData({ userData: records });
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
    // Perform any actions based on the updated data state
  }, [data]);

  return data;
}
