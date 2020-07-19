// FILM PROJEMIZIN ANA js ISLEMLERI, BU DOSYAYI html DOKUMANIN EN ALTINA KAYDETTIK

// TUM ETIKETLERI CEKELIM
    const   form        = document.getElementById('film-form'),
            txtTitle    = document.getElementById('title'),
            txtDirector = document.getElementById('director'),
            txtUrl      = document.getElementById('url');
            card2       = document.getElementsByClassName('card-body')[1];
            clearBtn    = document.getElementById('clear-films');

// LISTENERS
    eventListeners();
    function eventListeners()
    {
        form.addEventListener('submit',addFilm);
        document.addEventListener('DOMContentLoaded',function(){
            const films = STORGE.getFilmsFromStorage();
            UI.loadedAlFilms(films);
        });
        card2.addEventListener('click',deleteFilm);
        clearBtn.addEventListener('click',clearAllFilms);
    }
// ADD A FILM
    function addFilm(e)
    {
        const title     = txtTitle.value,
              director  = txtDirector.value,
              url       = txtUrl.value;

        if(title === '' || director === '' || url === ''){
            UI.alertMessages('Tum Alanlari Doldurunuz..','danger');
        }else{
            let films = new FILM(title,director,url);

            UI.addFilmToUI(films);
            STORGE.addFilmToStorage(films);
            UI.alertMessages('Yeni Film Eklendi...','success');
            
        }
        UI.cleanTextBox(txtTitle,txtDirector,txtUrl);

        e.preventDefault();
    }
// FILM SIL
    function deleteFilm(e)
    {
        if(e.target.id === 'delete-film')
        {
            UI.deleteFilmFromUI(e.target);
            STORGE.deleteFilmFromStorage(e.target);
            UI.alertMessages('Film Silindi...','success');
        }
    }
// TUM FILMLERI SIL
    function clearAllFilms()
    {
        if(confirm('Filmlerin Silinmesini Istediginizden Eminmisiniz?'))
        {
            UI.clearAllFilmsFromUI();
            STORGE.clearAllFilmsFromStorge();
            UI.alertMessages('Tum Film Silindi...','success');
        }
    }
    