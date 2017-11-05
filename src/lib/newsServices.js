const baseUrl = process.env.REACT_APP_BASE_URL
const apiKey ="a65429315e8a4bd58644f190c2af875b";

export const getNewsSources = () => {
  return fetch('https://newsapi.org/v1/sources')
    .then(res => res.json())
}


export const getNews = () => {
  let params = '?source=techcrunch&apiKey='+apiKey;
  return fetch('https://newsapi.org/v1/articles'+params)
    .then(res => res.json())
}



// export const createTodo = (name) => {
//   return fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({name: name, isComplete: false})
//   })
//     .then(res => res.json())
// }
//
// export const updateTodo = (todo) => {
//   return fetch(`${baseUrl}/${todo.id}`, {
//     method: 'PUT',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(todo)
//   })
//     .then(res => res.json())
// }
//
// export const destroyTodo = (id) => {
//   return fetch(`${baseUrl}/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   })
// }
