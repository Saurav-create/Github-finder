let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();



searchBtn.addEventListener('click', e => {

    let userText = searchUser.value;
    //    console.log(userText);      

    if (searchUser !== '') {
        fetch(`https://api.github.com/users/${userText}`)
            .then(result => result.json())
            .then(data =>{
                // console.log(data);
                if (data.message == 'Not Found') {
                    // alert
                 ui.showAlert("Profile Not Found","alert alert-danger");
                }
                else {
                    //show profile
                   ui.showProfile(data);


                }

            });
    }
    else if(searchUser === '') {
        console.log("else e dhukse");
      //Clear Profile
      ui.clearProfile();
    }


});