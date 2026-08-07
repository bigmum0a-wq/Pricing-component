document.addEventListener('DOMContentLoaded', () =>{

    const input =       document.querySelector('input');
    const basicPrice =  document.querySelector('#basic');
    const proPrice =    document.querySelector('#pro');
    const masterPrice = document.getElementById('master');


    input.addEventListener('click', (e) =>{
        
        if(input.checked)
        {
            basicPrice.textContent = '199.99'
            proPrice.textContent = '249.99'
            masterPrice.textContent = '399.99'
        }
        else
        {
            basicPrice.textContent = '19.99'
            proPrice.textContent = '24.99'
            masterPrice.textContent = '39.99'
        }
    })
});