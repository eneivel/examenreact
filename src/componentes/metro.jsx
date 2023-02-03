import React, { useState, useEffect } from 'react';

const MetroNetwork = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch('https://api.xor.cl/red/metro-network')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Ocurrió un error al cargar la información: {error.message}</p>;
  }

  if (!data.length) {
    return <p>No se encontró información</p>;
  }

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default MetroNetwork;
