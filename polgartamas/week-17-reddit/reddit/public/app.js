const SERVER_URL = 'http://localhost:3000';

function loadAllPosts() {
  return fetch(`${SERVER_URL}/posts`, { method: 'GET' })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

function submitNewPost(title, url) {
  return fetch(`${SERVER_URL}/posts`, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, url }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

function upvotePost(id) {
  return fetch(`${SERVER_URL}/posts/${id}/upvote`, { method: 'PUT' })
    .then((response) => {
      if (response.status === 404) {
        console.log('Hiba.');
      } else {
        return response.json();
      }
    })
    .catch((err) => console.log(err));
}

function downvotePost(id) {
  return fetch(`${SERVER_URL}/posts/${id}/downvote`, { method: 'PUT' })
    .then((response) => {
      if (response.status === 404) {
        console.log('Hiba.');
      } else {
        return response.json();
      }
    })
    .catch((err) => console.log(err));
}

loadAllPosts().then((posts) => {
  posts.forEach((post) => {
    const ul = document.getElementsByClassName('all-posts-list');
    const onePost = document.createElement('li');
    onePost.className = 'post';
    const newDiv1 = document.createElement('div');
    newDiv1.className = 'list-left-side';
    const button1 = document.createElement('button');
    button1.className = 'upvote';
    button1.innerText = 'Upvote';
    newDiv1.appendChild(button1);
    const newP1 = document.createElement('p');
    newP1.className = 'score';
    newP1.innerText = post.score;
    newDiv1.appendChild(newP1);
    const button2 = document.createElement('button');
    button2.className = 'downvote';
    button2.innerText = 'Downvote';
    newDiv1.appendChild(button2);
    onePost.appendChild(newDiv1);
    const newDiv2 = document.createElement('div');
    newDiv2.className = 'list-right-side';
    const newH3 = document.createElement('h3');
    newH3.className = 'title';
    newH3.innerText = post.title;
    newDiv2.appendChild(newH3);
    const newP2 = document.createElement('p');
    newP2.className = 'url';
    newP2.innerText = post.url;
    newDiv2.appendChild(newP2);
    const newP3 = document.createElement('p');
    newP3.className = 'timestamp';
    newP3.innerText = post.timestamp;
    newDiv2.appendChild(newP3);
    onePost.appendChild(newDiv2);
    ul[0].appendChild(onePost);
  });
});

// button1.addEventListener('click', function () {
//   console.log(button1);
//   upvotePost(button1.id);
// });

loadAllPosts().then((posts) => {
  const buttonUpvoteArray = document.querySelectorAll('.upvote');
  const buttonDownvoteArray = document.querySelectorAll('.downvote');
  const scoreArray = document.querySelectorAll('.score');
  posts.forEach((post, i) => {
    buttonUpvoteArray[i].addEventListener('click', function () {
      upvotePost(post.id).then((response) => {
        scoreArray[i].innerText = `${response[0].score}`;
      });
    });
    buttonDownvoteArray[i].addEventListener('click', function () {
      downvotePost(post.id).then((response) => {
        scoreArray[i].innerText = `${response[0].score}`;
      });
    });
  });
});
