// template_qhpqmv3
// service_57w3hqt
// OgzFtBaCt61Gn79qf

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_57w3hqt",
      "service_57w3hqt",
      event.target,
      "user_OgzFtBaCt61Gn79qf"
    )
    .then(() => {
        throw new Error("error");
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at ccsoftwaredevelopment@gmail.com"
      );
    });
}





// const themeToggle = document.getElementById('theme-toggle');

// const body = document.body;

// const button = document.getElementById('theme-toggle')

// // const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// function setTheme(theme) {
//     if (theme === 'dark')  {
//         body.classList.add('dark-mode');
//         button.classList.add('logo__dark')
//         themeToggle.querySelector('i').textContent = ''
//     }
//     else {
//         body.classList.remove('dark-mode');
//         button.classList.add('logo__dark')
//         themeToggle.querySelector('i').textContent = "" 
//     }
//     localStorage.setItem('theme', theme)
// }

// // const savedTheme = localStorage.getItem('theme');
// // if (savedTheme) {
// //   setTheme(savedTheme);
// // } else if (prefersDarkScheme.matches) {
// //   setTheme('dark');
// // } else {
// //   setTheme('light');
// // }

// themeToggle.addEventListener('click', () => {
//   const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
//   setTheme(newTheme);
// });