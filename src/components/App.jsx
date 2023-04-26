import { useEffect, useState } from 'react';

export const App = () => {
  const [wish, setWish] = useState('');
  const date = new Date();
  console.dir(date);
  const hour = date.getHours();
  console.log(hour);
  useEffect(() => {
    if (hour >= 5 && hour <= 10) {
      setWish('Good morning 🌞. Wish you a good day!');
    } else if (hour > 10 && hour <= 18) {
      setWish(
        'Good day 🌞. I hope this message brightens your day and makes it a little better. You are very important to many people and I hope your day is filled with happiness, laughter and opportunities. Go and take a day! Wishing you a great day ahead, may you achieve whatever you have planned for today.!'
      );
    } else if (hour > 18 && hour <= 21) {
      setWish('Good Evening 🌆! I hope you had a good and productive day.');
    } else if (hour > 21) {
      setWish(
        'It`s night already 🌉! Wishing you a wonderful night`s sleep 🌙✨.'
      );
    } else {
      setWish(
        'Oh, it`s late night! I hope you go to sleep as soon as possible 🌙✨.'
      );
    }
  }, [hour]);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {wish}
    </div>
  );
};
