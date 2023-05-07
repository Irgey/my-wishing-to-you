import { useEffect, useState } from 'react';
import Clock from 'react-live-clock';
import { morningWishes } from 'data/morningWishes';
import { dayWishes } from 'data/dayWishes';
import { eveningWishes } from 'data/eveningWishes';
import { nightWishes } from 'data/nightWishes';
export const App = () => {
  const [wish, setWish] = useState('');
  const date = new Date();
  console.dir(date);
  const hour = date.getHours();
  console.log(hour);
  const getRandomWish = wishesArr => {
    const rndIndex = Math.floor(Math.random() * wishesArr.length);
    return wishesArr[rndIndex];
  };
  useEffect(() => {
    if (hour >= 5 && hour <= 9) {
      setWish(getRandomWish(morningWishes));
      document.body.style.backgroundImage =
        'url(https://images.pexels.com/photos/849403/pexels-photo-849403.jpeg?auto=compress)';
      document.body.style.color = ' #ffffff';
    } else if (hour > 9 && hour <= 17) {
      setWish(getRandomWish(dayWishes));
      document.body.style.backgroundImage =
        'url(https://images.pexels.com/photos/5015450/pexels-photo-5015450.jpeg?auto=compress)';
      document.body.style.color = ' #000000';
    } else if (hour > 17 && hour <= 21) {
      setWish(`${getRandomWish(eveningWishes)}🌙`);
      document.body.style.backgroundImage =
        'url(https://images.pexels.com/photos/14803699/pexels-photo-14803699.jpeg?auto=compress)';
    } else if (hour > 21) {
      setWish(`${getRandomWish(nightWishes)}✨`);
      document.body.style.backgroundImage =
        'url(https://images.pexels.com/photos/421129/pexels-photo-421129.jpeg?auto=compress)';
      // document.body.style.color = ' #21cabe';
    } else {
      setWish(
        'Oh, it`s late night! I hope you go to sleep as soon as possible 🌙✨.'
      );
      document.body.style.backgroundImage =
        'url(https://images.pexels.com/photos/9991623/pexels-photo-9991623.jpeg?auto=compress)';
      document.body.style.color = ' #e6dcdc';
    }
  }, [hour]);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <Clock format={'HH:mm:ss'} ticking={true} />
      {wish}
    </div>
  );
};
