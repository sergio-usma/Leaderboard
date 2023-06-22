const setData = async (player, score) => {
  const playerData = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/okkSssC9uAqE8X1UsrEQ/scores/',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        user: player,
        score,
      }),
    },
  );
  const setResult = await playerData.json();
  return setResult;
};

export default setData;

/*
const sending = async (player, points) => {
  const dataplayer = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lnOTY3pQ8ZWWUEXQqBlg/scores/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: player,
      score: points,
    }),
  });
  const sendComplete = await dataplayer.json();
  return sendComplete;
};

export default sending;
 */
