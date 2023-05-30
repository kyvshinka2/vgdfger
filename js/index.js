let vavodAPI = document.querySelector('.resultResept');

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(api => {

  // создаем цикл
  for(let i = 0; i < 40; i++) {
    let mal = document.createElement('li');
    // присваиваем значение
    mal.innerHTML += 
    '<p> Название: ' + api[i].title +
    '<br> ID-пользователя: ' + api[i].userId + '<br>';

    vavodAPI.appendChild(mal);
  }
})







// async function loadRecipes() {

//     // токен для доступа
//     const token = 'superToken';
//     // фильтр для на поиск рецептов
//     const filter = '&health=sulfite-free&random=true';

//     // параметры запроса
//     const uri = {
//         async: true,
//         crossDomain: true, 
//         url: `https://edamam.com/api/recipes/v2${token}${filter}`,
//         method: 'GET',
//     };

//     let response = await $.ajax(uri);

//     if (response) return response.hits;

//     return null;
// }

// async function recipes() {
//     recipes.forEach(function (el) {

//         let link = el._link.self.href
//         let id = link.substr(link.indexOf('v2/') + 3, link.indexOf('?') - link.indexOf('v2/'));

//         $('.row#recipes').append(`
//         <div class="col-lg-4 col-md-6 mb-4">
//           <div class="box bg-white">
//             <div class="d-flex align-items-center">
//               <div class="rounded-circle mx-3 d-flex align-items-center justify-content-center">
//                 <img src="${el.recipe.image}">
//               </div>
//               <div class="d-flex flex-column">
//                 <a href="/recipe?id=${id}">${el.recipe.lable}</a>
//                 <p class="text-muted">${el.recipe.mealType[0]}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         `);
//     });
// }