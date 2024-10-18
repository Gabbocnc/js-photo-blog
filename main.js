axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then (response =>{
    const data = response.data
    console.log(data);
})
