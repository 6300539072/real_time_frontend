// App.js
import React from 'react';
import Notifications from '../src/components/Notification';

function App() {
    const userId = 1; // Replace with actual dynamic user ID

    return (
      <div className="App">
          <h1>Real-Time Notifications</h1>
          <Notifications />
      </div>
  );
}

export default App;


// import React, { useEffect, useState } from 'react';
// import Notifications from '../src/components/Notification';
// import { UserContext } from '../src/components/UserContext';

// function App() {
//     const [userId, setUserId] = useState(null);

//     useEffect(() => {
//         // Example: Get the user ID from local storage
//         const storedUserId = localStorage.getItem('userId');
//         if (storedUserId) {
//             setUserId(storedUserId);
//         } else {
//             // Optionally, fetch user data from an API
//             const fetchUserData = async () => {
//                 const response = await fetch('/api/comments');
//                 console.log("response",response)
//                 const data = await response.json();
//                 console.log("idddddddd",data)
//                 setUserId(data.id);
//             };
//             fetchUserData();

//             console.error("User ID not found. Please log in.");
//         }
//     }, []);

//     return (
//         <UserContext.Provider value={{ userId }}>
//             <div className="App">
//                 <h1>Notification App</h1>
//                 {userId ? <Notifications /> : <div>Loading...</div>}
//             </div>Notifications 
//         </UserContext.Provider>
//     );
// }

// export default App;

