new Vue({
  el: '#login_area',
  data:{
    username: '',
    password: '',
    res_code: '',
    msg: ''
  },
  methods :{login:function(){
    //const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
    //axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://127.0.0.1:5000';
    //axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'POST';
    //axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
    //axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept';
    const url = 'http://127.0.0.1:5000/login'; // origin api url
    var data = {"account":this.username,"password":this.password};
    axios.post(url,data)
    .then(response => {
      console.log(response)
      this.res_code = response.data.code
      this.msg = response.data.ch_msg
      if(this.res_code == 200){
        window.location.href = 'restapi_button2.html';
      }
      else{
        alert(this.msg);
      }
    })
    .catch(error => {
      this.res_code = 'There was an error: ' + error.message
    })
  }
}
});
