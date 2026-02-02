
let password = 'Nodejs@2026';

let encryptedPassword = btoa(password);
console.log('encryptedPassword: ',encryptedPassword);

let decryptedPassword = atob(encryptedPassword);
console.log('decryptedPassword: ',decryptedPassword);
