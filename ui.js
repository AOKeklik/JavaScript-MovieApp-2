// FILM PROJEMIZIN ARAYUZUNU GELISTRDIK
    class UI
    {
    // ADD A FILM
        static addFilmToUI(film)
        {
            const div = document.getElementById('films');
            div.innerHTML += `
                <tr>
                    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                    <td>${film.title}</td>
                    <td>${film.director}</td>
                    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                </tr>
            `;
        }
    // LOADED ALL FILMS
        static loadedAlFilms(film)
        {
            const div = document.getElementById('films');
            film.forEach((value) => {
                div.innerHTML += `
                    <tr>
                        <td><img src="${value.url}" class="img-fluid img-thumbnail"></td>
                        <td>${value.title}</td>
                        <td>${value.director}</td>
                        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                    </tr>`;
            });
        }
    // TEXTBOXLARI TEMIZLE
        static cleanTextBox(title,director,url)
        {
            title.value     = '';
            director.value  = '';
            url.value       = '';
        }
    // UYARI MESAJI
        static alertMessages(message,type)
        {
            const card  = document.getElementsByClassName('card-body')[0];
            const div   =  document.createElement('DIV');
            div.className = `alert alert-${type}`;
            div.textContent = message;
            card.appendChild(div);
            setTimeout(function(){
                div.remove();
            },1000);
        }
    // ARAYUZDEN FILM SIL
        static deleteFilmFromUI(element)
        {
            if(element.id === 'delete-film')
            {
                element.parentElement.parentElement.remove();
            }
        }
    // BUTUN FILMLERI SIL
        static clearAllFilmsFromUI()
        {
            const div = document.getElementById('films');
            while(div.firstElementChild !== null){
                div.firstElementChild.remove();
            }
        }
    }
