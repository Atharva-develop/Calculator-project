document.addEventListener('DOMContentLoaded', () => {
    let string = "";
    let buttons = document.querySelectorAll('.button');
    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            if(e.target.innerHTML == '='){
                string = eval(string);
                document.getElementById('myinput').value = string;
            }
            else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.getElementById('myinput').value = string;
            }
        });
    });
});
