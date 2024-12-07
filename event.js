

// ! mouseover
let btn = document.querySelector('button')
btn.addEventListener('mouseover',()=>{
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    btn.innerText = 'Light'
})

// ! mouseout
btn.addEventListener('mouseout',()=>{
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    btn.innerText = 'Dark'
})



