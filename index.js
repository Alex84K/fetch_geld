
const base_url = 'https://api.apilayer.com/fixer';
const api_key = 'hkDR39dBncaaa9DUhrVZUFEwNLNaXUu2';


let myHeaders = new Headers();
myHeaders.append("apikey", "hkDR39dBncaaa9DUhrVZUFEwNLNaXUu2");

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
        apikey: api_key
    }
};


fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
    .then(response => response.json())
    .then(r => { keys = Object.keys(r.symbols) })
    .then(data => {
        keys.forEach(element => {
            const option = document.createElement('option');
            const optionTo = document.createElement('option');
            option.append(document.createTextNode(element.toString()));
            optionTo.append(document.createTextNode(element.toString()));
            from.append(option);
            to.append(optionTo);
        })
    })
    .catch(error => console.log('error', error))


conveter.onclick = () => {
    fetch(`${base_url}/convert?from=${from.value.trim()}&to=${to.value.trim()}&amount=${sum.value.trim()}`, {
        headers: {
            apikey: api_key
        }
    })
        .then(result => result.json())
        .then(data => data.result)
        .then(res => {
            const h1 = document.createElement('h1');
            h1.append(`Result: ${res.toFixed(2)}`);
            if (result.firstElementChild) {
                result.replaseChild(h1, result.firstElementChild)
            } else {
                result.append(h1);
            }
        })
        .catch(e => {
            const h1 = document.createElement('h1');
            h1.append(`Error...${e}`);
            if (result.firstElementChild) {
                result.replaseChild(h1, result.firstElementChild)
            } else {
                result.append(h1);
            }
        })
}





