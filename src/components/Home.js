import React from 'react'
import room from '../imgs/room.jpg';
import ekran from '../imgs/ekran.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="grid-container">
        <img src={room} alt="Room" />
        <div>
          MovieZone is a modern and cozy cinema that offers the best movies and unforgettable cinematic experiences.<br/>
          Forget about your daily routine and relax in the pleasant atmosphere of our establishment.
        </div>
      </div>
      <div className="grid-container">
        <div>
          Our Services and Features:<br/>
          Wide Selection of Movies: Regardless of your cinematic taste, we have something special for you. From thrilling action and epic adventures to the funniest comedies and gripping dramas - there's always something intriguing for everyone.<br/>
          Cutting-Edge Projection Technology: We ensure unparalleled image and sound quality through the use of advanced projectors and sound equipment.<br/>
          Convenient Screening Schedule: We strive to provide maximum comfort for our guests, offering various screening times to suit your preferences.<br/>
          Family-Friendly Cinema: We offer special screenings for children and family programs, ensuring that every member of your family can enjoy the movies together.<br/>
          Cozy Foyer: Our foyer is the perfect place to meet friends before the movie or discuss your impressions after the screening. Here, you can purchase popcorn, drinks, and snacks.<br/>
          Online Booking: To avoid queues and secure your spot for the most anticipated screenings, you can conveniently book tickets online on our website.<br/>
          Stay Connected and Follow Our Updates: We are continuously working to improve our services and provide the best cinematic experience for our visitors.<br/>
          Welcome to MovieZone! We will help you immerse yourself in the fascinating world of cinema!
        </div>
        <img src={ekran} alt="Monitor" />
      </div>
    </div>
  );
}
export default Home;