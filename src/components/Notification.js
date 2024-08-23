
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const NotificationComponent = () => {
    const socket = io('http://localhost:5000');

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        socket.on('newComment', (notification) => {
            console.log("Received notification:", notification);
            setNotifications((prevNotifications) => [...prevNotifications, notification]);
        });

        return () => {
            socket.off('newComment');
        };
    }, [socket]);

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
