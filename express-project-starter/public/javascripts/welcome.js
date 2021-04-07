// WELCOME PAGE (not loggin in / logged out)
window.addEventListener("DOMContentLoaded", (event) => {
  const welcomeRegister = document.querySelector('.welcome-register');
  const welcomeLogin = document.querySelector('.welcome-login');
  const welcomeOurStory = document.querySelector('.welcome-ourStory');
  const welcomeDemo = document.querySelector('.welcome-demo');

  welcomeRegister.addEventListener('click', (event) => {
    window.location.href="/users/register";
  });

  welcomeLogin.addEventListener('click', (event) => {
    window.location.href = "/users/login";
  });

  welcomeDemo.addEventListener('click', (event) => {
    window.location.href = '/';
  })

  welcomeOurStory.addEventListener('click', (event) => {
    window.location.href = "/welcome/our-story";
  })

})