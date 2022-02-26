// <!-- You can work in the html or in a separate js file. Like:
// <script>
// 1)  Append every paragraph with the last one's content.
// 2)  Do the same again, but you should keep the cat strong.
// </script>
// OR
// <script src="content-1.js"></script> -->

const selection = document.querySelectorAll('p');
console.log(selection);
for (let i = 0; i < selection.length; i++) {
  selection[i].textContent += selection[selection.length - 1].textContent;
  console.log(selection[i].textContent);
}

for (let i = 0; i < selection.length; i++) {
  selection[i].innerHTML += selection[selection.length - 1].innerHTML;
  console.log(selection[i].innerHTML);
}
