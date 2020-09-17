import React from 'react';
import Tip from './Tip';

const Tips_kat1 = () => {
  // Tip Inhalte Array
  const tips = [
    {
      titel: 'Tip 1',
      inhalt: 'Des ersten Tips Inhalt',
      kategorie: 'Kategorie 1',
    },
    {
      titel: 'Tip 2',
      inhalt: 'Des zweiten Tips Inhalt',
      kategorie: 'Kategorie 1',
    },
    {
      titel: 'Tip 3',
      inhalt: 'Des dritten Tips Inhalt',
      kategorie: 'Kategorie 1',
    },
  ];

  return (
    <div className="center">
      <h2>Die Kategorie 1 hat {tips.length} Tips</h2>
      {tips.map((tip) => (
        <Tip titel={tip.titel} inhalt={tip.inhalt} kategorie={tip.kategorie} />
      ))}
    </div>
  );
};

export default Tips_kat1;
