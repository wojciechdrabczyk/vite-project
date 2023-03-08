/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
export const Card = () => {
  return (
    <div className="photo-container">
      <img src="katie-zaferes.png" className="card--photo" alt="swimmer" />
      <div className="text">SOLD OUT</div>
      <div className="info--card">
        <img src="star.png" className="card--star" alt="logo of a star" />
        <div className="rating">5.0 (6) </div>
      </div>
    </div>
  );
};
