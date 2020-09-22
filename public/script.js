


const form = document.getElementById('convertForm');
const query = document.getElementById('input_query');
const target = document.getElementById('api_result');

form.addEventListener('submit', e => {

    e.preventDefault();

    fetch(`/api/convert?input=${query.value}` )
    .then(res => res.json())
    .then( data => {

        let str = JSON.stringify(data.string || data);
        str = str.replace('"', '').replace('"', '')
        target.innerText = str;
        
    })
})