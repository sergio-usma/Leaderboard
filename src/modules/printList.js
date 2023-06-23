function printList(getScores) {
  const leaderboardList = document.querySelector(
    '.leaderboard__wrapper__scores__list',
  );
  const emptyList = document.createElement('h3');
  if (getScores.length === 0 || !getScores) {
    leaderboardList.innerHTML = '';
    emptyList.classList.add('leaderboard__wrapper__scores__list--empty');
    emptyList.innerHTML = 'No scores to show';
    leaderboardList.appendChild(emptyList);
    return;
  }
  const table = document.createElement('table');
  table.classList.add('leaderboard__wrapper__scores__list__table');
  leaderboardList.innerHTML = '';

  const sortedScores = getScores.sort((a, b) => a.user.localeCompare(b.user));

  sortedScores.forEach((item) => {
    const tableRow = document.createElement('tr');
    tableRow.classList.add('leaderboard__wrapper__scores__list__table__row');
    tableRow.innerHTML = `
        <tr class="leaderboard__wrapper__scores__list__table__row">
          <td>${item.user}: </td>
          <td>${item.score}</td>
        </tr>`;
    table.appendChild(tableRow);
  });

  leaderboardList.appendChild(table);
}

export default printList;
