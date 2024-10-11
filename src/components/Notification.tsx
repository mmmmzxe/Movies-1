'use client';
import React, { useEffect, useState } from 'react';

import i from '../../public/images/tes2.jpg';
import i2 from '../../public/images/test3.jpg';
import i3 from '../../public/images/test5.jpg';
import i4 from '../../public/images/tes4.jpg';
import i5 from '../../public/images/test6.jpg';
import i6 from '../../public/images/test1.jpg';
import Image, { StaticImageData } from 'next/image';

// Notification data type
type NotificationProps = {
  name: string;
  location: string;
  message: string;
  time: string;
  amount: string;
  Image: StaticImageData;
};

// Mock function to fetch new data
const fetchNewData = (): NotificationProps => {
  const names = ["James", "Sarah", "Michael", "Emma", "Daniel", "John"];
  const locations = ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Miami, FL"];
  const messages = ["Just purchased a movie", "Just purchased a book", "Just bought a game", "Just purchased a subscription", "Just purchased", "Just purchased"];
  const amounts = [99, 99, 99, 99, 99];
  const images = [i, i2, i3, i4, i5, i6]; // Array of images
  
  const randomIndex = Math.floor(Math.random() * names.length);
  
  return {
    name: names[randomIndex],
    location: locations[randomIndex],
    message: messages[Math.floor(Math.random() * messages.length)],
    time: `${Math.floor(Math.random() * 10 + 1)} minutes ago`,
    amount: `${amounts[Math.floor(Math.random() * amounts.length)]}`,
    Image: images[randomIndex], // Assign random image
  };
};

const Notification: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<NotificationProps>(fetchNewData);
  const [delay, setDelay] = useState(25000); // Initial delay of 25 seconds

  useEffect(() => {
    const showNotification = () => {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        setDelay((prevDelay) => prevDelay + prevDelay * 0.5); // Increase delay by 50%
      }, 5000); // Notification is visible for 5 seconds
    };

    // Set timer for notification appearance
    const timer = setTimeout(() => {
      showNotification();
      setData(fetchNewData()); // Fetch new data on each notification
    }, delay);

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, [delay]);

  return visible ? (
    <div className="notification">
      <div className="profileImage">
        <Image src={data.Image} alt={`${data.name} profile`} width={50} height={50} />
      </div>
      <div className="content">
     <div className='flex flex-col justify-start items-start '>
     <p className="user">
          {data.name} from {data.location}
        </p>
        <p className="message">{data.message}</p>
     </div>
       
        <div className="amount">
        
        <p className="time">{data.time}</p>
        <span >${data.amount}</span>
      </div>
      </div>
      
    </div>
  ) : null; // Don't render the notification if not visible
};

export default Notification;
