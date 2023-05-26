// @ts-nocheck
export function postData () {

const local = localStorage.getItem("user");
console.log(local);

let data;

try {
  // @ts-ignore
  data = JSON.parse(local);
} catch (error) {
  console.error('Invalid JSON data in localStorage:', error)
}

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
  const transaction = db.transaction(['myObjectStore'], 'readwrite');

  // Access the object store
  const objectStore = transaction.objectStore('myObjectStore');

  // Add the data to the object store
  const addRequest = objectStore.add(data);

  // Handle success event for the add operation
  addRequest.onsuccess = function (event) {
    console.log('Data added to IndexedDB');
  };

  // Handle error event for the add operation
  addRequest.onerror = function (event) {
    console.error('Error adding data to IndexedDB', event.target.error);
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


