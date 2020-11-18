new Vue({
  el: '#login_area',
  data:{
    username: '',
    password: '',
    res_code: '',
    msg: ''
  },
  methods :{login:function(){
    const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
    const url = 'http://mis.will68.com/user/login'; // origin api url
    var data = 'lang=0&username='+this.username+'&'+'password='+this.password;
    axios.post(`${cors}${url}`,data)
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
