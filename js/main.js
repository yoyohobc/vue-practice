

new Vue({
  el: '#app2',
  data:{
    res_data: 'loading...',
    thead:['序號','驗證碼','手機','狀態','郵箱','驗證碼通道','創建時間','更新時間'],
    num:0
  },
  created:function(){
    this.validatecode()
  },
  methods :{validatecode:function(){
    const cors = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data
    const url = 'http://mis.will68.com/ValidateCodeLog/pageList'; // origin api url
    axios.get(`${cors}${url}`)
    .then(response => {
      this.res_data = response.data.data
    })
    .catch(error => {
      this.res_data = 'There was an error: ' + error.message
    })
  }
}
});
