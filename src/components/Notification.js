
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const NotificationComponent = () => {
    // Initialize socket connection
    const socket = io('http://localhost:5000');

    // State to hold the list of notifications
    const [notifications, setNotifications] = useState([]);

    // useEffect to handle newComment event
    useEffect(() => {
        // Listen for newComment event from the server
        socket.on('newComment', (notification) => {
            console.log("Received notification:", notification);
            // Update the notifications state with the new notification
            setNotifications((prevNotifications) => [...prevNotifications, notification]);
        });

        // Clean up the event listener when the component unmounts
        return () => {
            socket.off('newComment');
        };
    }, [socket]); // Only re-run the effect if socket changes

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>
                        <p><strong>Author:</strong> {notification.author}</p>
                        <p><strong>Content:</strong> {notification.content}</p>
                        <p><strong>Timestamp:</strong> {notification.timestamp}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationComponent;
