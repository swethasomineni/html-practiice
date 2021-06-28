let url = "https://jsonplaceholder.typicode.com/posts";

let request = new XMLHttpRequest();
request.open('GET', url);
request.send();
request.onload = () => {
    const response = JSON.parse(request.response);
    console.log(response)
}

