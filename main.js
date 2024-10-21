const myRowEl = document.querySelector('.myrow');
//console.log(myRowEl);
const modalEl = document.getElementById('myModal');
const modalImgEl = document.getElementById('modalImage');
const modalTitleEl = document.getElementById('modalTitle');

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
        const postIts = response.data
        //console.log(postIts);

        let postItsEl = ''
        postIts.forEach(postIt => {

            const { url, title } = postIt


            const markup = ` 
        <div class="col-xs-12 col-lg-4 col-xx-4 postit">
            <div class="pin"><img src="./assets/img/pin.svg" alt=""></div>
            <img src="${url}" alt="">
            <div class="div cardtext">${title}</div>
        </div>
        `
            postItsEl += markup
        });
        myRowEl.innerHTML = postItsEl
    
        
        document.querySelectorAll('.postit').forEach(element => {
            element.addEventListener('click', function() {
              modalEl.style.display = 'block';
              modalImgEl.src = this.getAttribute('data-url');
            });
            //console.log(modalImgEl);
            //console.log(element);
          });
          
          
    })
