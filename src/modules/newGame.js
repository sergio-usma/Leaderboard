const newGame = async () => {
  const gameAPI = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        name: 'Space cadets',
      }),
    },
  );
  const responseAPI = await gameAPI.json();
  return responseAPI;
};

export default newGame;
