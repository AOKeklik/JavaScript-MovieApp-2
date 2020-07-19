// FILM PROJEMIZIN LocalStorage ISLEMLERINI GERCEKLESTRDK
    class STORGE
    {
    // ADD A FILM TO STORAGE
        static addFilmToStorage(films)
        {
            let newFilm = this.getFilmsFromStorage();
            newFilm.push(films);
            localStorage.setItem('films',JSON.stringify(newFilm));
        }
    // QUERY FILMS IN STORAGE
        static getFilmsFromStorage()
        {
            let films;
            if(localStorage.getItem('films') === null)
            {
                films = [];
            }else{
                films = JSON.parse(localStorage.getItem('films'));
            }
            return films;
        }
    // STORGEDEN FILMI SIL
        static deleteFilmFromStorage(element)
        {
            let films = this.getFilmsFromStorage();
            films.forEach(function(value,index){
                if(value.title === element.parentElement.previousElementSibling.previousElementSibling.textContent){
                    films.splice(index,1);
                }
            });
            localStorage.setItem('films',JSON.stringify(films));
        }
    // BUTUN FILMLERI SIL
        static clearAllFilmsFromStorge()
        {
            localStorage.removeItem('films');
        }
    }