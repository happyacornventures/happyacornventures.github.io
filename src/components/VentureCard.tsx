const VentureCard = ({ title, description, stage, party }) => (
  <div className="card">
    <h2>{title}</h2>
    <p className="description">{description}</p>
    <p className="stage">Stage: {stage}</p>
    <p className="party">Party: {party}</p>
  </div>
);
