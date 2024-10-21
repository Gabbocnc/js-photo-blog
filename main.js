const myRowEl = document.querySelector('.myrow');
//console.log(myRowEl);
const modalEl = document.getElementById('myModal');
const modalImgEl = document.getElementById('modalImage');
const modalTitleEl = document.getElementById('modalTitle');
const closeModalEl = document.querySelector('.closeModal');

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
            <div class="randomImage"><img src="${url}" alt=""></div>
            <div class="div cardtext">${title}</div>
        </div>
        `
            postItsEl += markup
        });
        myRowEl.innerHTML = postItsEl
    

        document.querySelectorAll('.postit').forEach(element => {
            element.addEventListener('click', function() {
                //seleziono le immagini
                const imgEl = element.querySelector('.randomImage img');
                //recupero il loro src
                const imgSrc = imgEl.getAttribute('src');
                modalEl.style.display = 'block';
                //applico l scr in uscita uguale a quello delle immagini 
                modalImgEl.src = imgSrc;
                //console.log(imgEl);
            }); 
        });
    });
    //bottone chiusura modale 
    closeModalEl.addEventListener('click', ()=>{
    modalEl.style.display = 'none'
   })