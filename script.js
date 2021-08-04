let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();



searchBtn.addEventListener('click', e => {

    let userText = searchUser.value;
    //    console.log(userText);      

    if (searchUser != '') {
        fetch(`https://api.github.com/users/${userText}`)
            .then(result => result.json())
            .then(data =>{
                if (data.messsage == 'Not Found') {
                    // alert

                }
                else {
                    //show profile
                   ui.showProfile(data);


                }

            });
    }
    else {
      //Clear Profile
      ui.clearProfile();
    }


});