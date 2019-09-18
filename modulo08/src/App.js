import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  // react hooks state init
  const [tech, setTech] = useState(['React JS', 'React Native']);
  const [newTech, setNewTech] = useState(['']);

  /* using 'useCallback' hook to avoid creating handleAdd function everytime the
  component renders
  */
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  // componentDidMount hook
  // only fired once, because of the empty array (2nd parameter)
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    // if we uncomment this line, this function'll act as 'componentDidUnmount'
    // return () => {};
  }, []);

  // executes function (1st parameter) when 'tech' change
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  /* using this hook to avoid calculating tech array length everytime the
  component updates. so the calculation'll be executed only when tech array
  changes, not the entire component returned in return method.
  */
  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você possui {techSize} tecnologias cadastradas.</strong>
      <input
        type="text"
        onChange={e => setNewTech(e.target.value)}
        value={newTech}
      />
      <button type="button" onClick={handleAdd}>
        ADD
      </button>
    </>
  );
}

export default App;
