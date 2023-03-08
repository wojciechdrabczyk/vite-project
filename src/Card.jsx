export const Card = () => {
  return (
    <div className="card--container">
      <img src="katie-zaferes.png" className="card--photo" alt="swimmer" />
      <div className="card--text">SOLD OUT</div>
      <div className="card--info">
        <div className="card--star--rating">
          <img src="star.png" className="card--star" alt="logo of a star" />
          <div className="card--rating">5.0 (6) • USA </div>
        </div>
        <div className="card--paragraph">Life lessons with Katie Zaferes</div>
        <div className="card--price">
          <span style={{ fontWeight: "bold" }}>From $136 /</span> person
        </div>
      </div>
    </div>
  );
};
