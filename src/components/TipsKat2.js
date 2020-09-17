import React from 'react';
import Tip from './Tip';

const Tips_kat2 = () => {
  // Tip Inhalte Array
  const tips = [
    {
      titel: 'Tip 1',
      inhalt: 'Des ersten Tips Inhalt',
      kategorie: 'Kategorie 2',
    },
    {
      titel: 'Tip 2',
      inhalt: 'Des zweiten Tips Inhalt',
      kategorie: 'Kategorie 2',
    },
  ];

  return (
    <div className="center">
      <h2>Die Kategorie 2 hat {tips.lenght} Tips</h2>
      {tips.map((tip) => (
        <Tip titel={tip.titel} inhalt={tip.inhalt} kategorie={tip.kategorie} />
      ))}
    </div>
  );
};

export default Tips_kat2;
