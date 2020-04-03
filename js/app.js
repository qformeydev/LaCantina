window.onload = function () {
    var app = new Vue({
        el: '#app',
        data () {
          return {
            listing: null
          }
        },
        mounted () {
          axios
            .get('http://localhost:9000/api/recipes')
            .then(response => {
                console.log(response.data);
                this.listing = response.data;
                })
        }

        
  });
}