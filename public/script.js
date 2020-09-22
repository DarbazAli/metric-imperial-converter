
const form = document.getElementById('convertForm');
const query = document.getElementById('input_query');
const target = document.getElementById('api_result');

form.addEventListener('submit', e => {

    e.preventDefault();
    // console.log(query.value);
    fetch(`/api/convert?input=${query.value}` )
    .then(res => res.json())
    .then( data => {
        // console.log(data)
        if ( data.error ) {
            target.innerText = JSON.stringify(data);
        } else {
            let str = JSON.stringify(data.string);
            str = str.replace('"', '').replace('"', '')
            target.innerText = str;
        }
        
    })
})