import { Card } from "../Card/Card";

export const Column = ({ title }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card theme="orange" title="Web Design" />
        <Card theme="green" title="Research" />
        <Card theme="purple" title="Copywriting" />
      </div>
    </div>
  );
};
