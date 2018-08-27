const BASEURL = "http://photomanager.dev";

export const userService = {
  login,
};

function login(email,password){
    const url = BASEURL + "/auth/login?email="+email+"&password="+password;
    const request = {
      method: 'GET',
    };
    return fetch(url, request).then(function(response) {
      return response.json();
    });
};