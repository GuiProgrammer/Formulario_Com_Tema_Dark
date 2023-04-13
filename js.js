const form = document.querySelector('.container');
const buttonTheme = document.querySelector('i.fa-solid');

buttonTheme.addEventListener("click", () =>{
    if(buttonTheme.classList.contains('fa-moon')){
        buttonTheme.classList.remove('fa-moon')
        buttonTheme.classList.add('fa-sun')
        form.classList.toggle('dark')
    }
    else{
        buttonTheme.classList.add('fa-moon')
        buttonTheme.classList.remove('fa-sun')
        form.classList.remove('dark')
    }
})