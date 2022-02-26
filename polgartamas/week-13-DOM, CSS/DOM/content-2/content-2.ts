// <!-- You can work in the html or in a separate js file. Like:
//     <script>
//       1) replace the list items' content with items from this list:
//       ['apple', 'banana', 'cat', 'dog']
//       2) change the <ul> element's background color to 'limegreen'
//         - use css class to change the color instead of the style property
//     </script>
//     OR
//     <script src="content-2.js"></script> -->

const liList = document.querySelectorAll('li');
console.log(liList);
for (let i = 0; i < liList.length; i++) {
  let liContent: string[] = ['apple', 'banana', 'cat', 'dog'];
  liList[i].textContent = liContent[i];
  console.log(liList[i].textContent);
}
