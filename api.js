const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Получаем данные через API и формируем строки таблицы
fetch(API_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(user => {
      const html = `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.address.city}, ${user.address.street}, ${user.address.suite}</td>
                </tr>
            `;
      // Вставляем созданную строку в <tbody>
      document.querySelector('tbody').insertAdjacentHTML('beforeend', html);
    });
  })
  .catch((error) => {
    console.error('Error fetching users:', error);
  });