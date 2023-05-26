// @ts-nocheck
export function getData () {
    // Open a connection to the IndexedDB database
  const openRequest = indexedDB.open('myDatabase', 1);
  
  // Handle database upgrade event
  openRequest.onupgradeneeded = function (event) {
    const db = event.target.result;
  
    // Create an object store within the database
    const objectStore = db.createObjectStore('myObjectStore', { keyPath: 'id', autoIncrement: true });
  
    // Define the structure of the data (optional)
    objectStore.createIndex('nameIndex', 'name', { unique: false });
  };
  
  // Handle database open success event
  openRequest.onsuccess = function (event) {
    const db = event.target.result;
  
    // Start a transaction
    const transaction = db.transaction(['myObjectStore'], 'readonly');
  
    // Access the object store
    const objectStore = transaction.objectStore('myObjectStore');
  
    // Retrieve data by key or index
    const getRequest = objectStore.get(1); // Replace 1 with the actual key or index value
  
    // Handle success event for the get operation
    getRequest.onsuccess = function (event) {
      const data = event.target.result;
      console.log('Retrieved data:', data);
    };
  
    // Handle error event for the get operation
    getRequest.onerror = function (event) {
      console.error('Error retrieving data from IndexedDB', event.target.error);
    };
  
    // Complete the transaction
    transaction.oncomplete = function (event) {
      console.log('Transaction completed');
    };
  
    // Handle error event for the transaction
    transaction.onerror = function (event) {
      console.error('Transaction error', event.target.error);
    };
  };
  
  // Handle database open error event
  openRequest.onerror = function (event) {
    console.error('Error opening database', event.target.error);
  };
  
  }
  