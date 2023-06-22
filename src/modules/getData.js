import printList from './printList.js';

const getData = async () => {
  const requestAPI = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/okkSssC9uAqE8X1UsrEQ/scores/',
  );
  const data = await requestAPI.json();
  const dataResult = data.result;
  printList(dataResult);
};

export default getData;
