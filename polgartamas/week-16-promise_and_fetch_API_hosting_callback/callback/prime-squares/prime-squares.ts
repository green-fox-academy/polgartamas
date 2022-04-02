const getSection = document.querySelector('section');
console.log(getSection);

const primeValidator = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

for (let i = 2; i <= 100; i++) {
  let newDiv: HTMLElement = document.createElement('div');
  getSection.appendChild(newDiv);
  newDiv.textContent = i.toString();
}

function colorCell(cell: HTMLDivElement, i: number) {
  const num: number = parseInt(cell.textContent);
  setTimeout(() => {
    if (primeValidator(num)) {
      cell.className += 'not-prime';
    } else {
      cell.className += 'prime';
    }
  }, i * 100);
}

for (let i = 0; i < 100; i++) {
  const htmlCells: any = document.querySelectorAll('div');
  colorCell(htmlCells[i], i);
}
