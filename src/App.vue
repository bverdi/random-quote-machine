<template>
  <div id="app">
    <div id="container-quote">
      <b-jumbotron>

      
        <template v-slot:lead>
        <div v-if="!fileinput">
          <h2>Select a file</h2>
        </div>
          <div v-else>
          <b-table striped hover :fileinput="fileinput">{{}}</b-table>
          {{fileinput}}
          </div>
        </template>

        <div class="buttons">
             <b-form-group label="" label-for="file-default" label-cols-sm="0">
                <b-form-file id="file-default"  @change="onFileChange"></b-form-file>
              </b-form-group>
        </div>
      </b-jumbotron>
    </div>
    <p style="text-align: center; color: white;"> @brenoverdi. 2019 </p>
  </div>
</template>

<script>

export default {
  name: 'app',
    data: function() {
    return {
    fileinput:'' ,
    show: true,
    mynumber: 0,
    mycolor: '#000000'
  }}  
  ,
  methods: {

    onFileChange(e) {
                console.log(e);
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createInput(files[0]);
            },
            createInput(file) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = (e) => {
                vm.fileinput = reader.result;
                }
                reader.readAsText(file);
                
                console.log(this.fileinput);
            }

    }
}
</script>

<style>
@media (max-width: 768px) {

#container-quote {
  width: 80% !important;
}
  
.buttons {
display: inline-grid !important;
justify-content: center;
}

.icons-sn {
  float: none !important;
  margin: 0 auto !important;
  padding-bottom: 10px;
}

}


@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');


.fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#quote {
  font-size: 30px;
  font-weight: bolder;
}

#container-quote {
  margin: 50px auto 50px auto;
  width: 50%;
}

#author {
  font-size: 24px;
  font-weigth: normal;
  font-style: italic;
}

.icons-sn {
  font-size: 2.5em;
  float: left;
}

.icons-sn:hover {
  color: black;
}

.buttons {
  width: 100%;
  height: 100%;
  display: block;
}

#change-quote {
margin-top: 20px !important;
padding-top: 20px !important;
}
</style>
