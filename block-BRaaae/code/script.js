let input = document.querySelector('input');
var root = document.querySelector('ul');

// State to store mpvies
var moviesList = [];


// Handling Watched/Unwatched
function handleToggle(event) {
  let id = event.target.dataset.id;
  moviesList[id].isWached = !moviesList[id].isWached;
  displayMovies(moviesList);
}

// Handling Delete
function handleDelete(event) {
  let id = event.target.dataset.id;
  moviesList.splice(id, 1);
  displayMovies(moviesList);
}

// function elem(type, attr = {}, ...childern) {
//     let element = document.createElement(type);
  
//     for (let key in attr) {
//       if (key.startsWith('data-')) {
//         element.setAttribute(key, attr[key]);
//       } else if (key.startsWith('on')) {
//         let eventType = key.replace('on', '').toLowerCase();
//         element.addEventListener(eventType, attr[key]);
//       } else {
//         element[key] = attr[key];
//       }
//     }
  
//     childern.forEach((child) => {
//       if (typeof child === 'object') {
//         element.append(child);
//       } else if (typeof child === 'string') {
//         let node = document.createTextNode('child');
//         element.append(node);
//       }
//     });
//     return element;
//   }



// Display Movies
function displayMovies(moviesArr = []) {
//   console.log(moviesArr);

//   root.innerHTML = '';
     let ui = moviesArr.map((elm, index) => {
      let li = React.createElement(
          'li',
       {
           className: "flex-1"
        },

       React.createElement('div',
       {className: 'tick',
    }, elm.isWached ?  '✅' : '⚪️'),

       React.createElement('p', {
        className: `${elm.isWached ? 'name' : 'name2'}`,
        
      }, elm.name),

      React.createElement(
        'p',
        {},

        React.createElement('span', {
          'data-id': index,
          onClick: handleToggle,
        }, elm.isWached ? 'Watched' : 'To Watched'),

        React.createElement('span', {
          'data-id': index,
          onClick: handleDelete,
        }, 'Remove')
      )
    );
    return li;
    // root.append(li);
  });
  ReactDOM.render(ui, root);
}

// Handling Input
input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && event.target.value) {
    moviesList.push({
      name: event.target.value,
      isWached: false,
    });
    event.target.value = '';
    displayMovies(moviesList);
  }
});

// Calling Display Movies
displayMovies(moviesList);