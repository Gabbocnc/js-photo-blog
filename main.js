const postEl = document.querySelector('.postit');
//console.log(postEl);

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(response =>{
    const postIts = response.data
    //console.log(postIts);

    let postItsEl = ''
    postIts.forEach(postIt => {
        
        const {url, title} = postIt


        const markup =  ` 
        <div class="col-xs-12 postit">
            <div class="pin"><img src="./assets/img/pin.svg" alt=""></div>
            <img src="${url}" alt="">
            <div class="div cardtext">${title}</div>
        </div>
        `
        postItsEl += markup
    });
        postEl.innerHTML = postItsEl
        //console.log(postEl);
        
})

