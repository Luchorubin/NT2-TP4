<template>
  <section class="src-componentes-http-client">
    <div class="jumbotron">
      <h2>HttpClient</h2>
      <hr>
      <hr>
      <br>

      <button class="btn btn-warning my-3 mr-3" @click="getUsersXHRcb()">Pedir XHR (cb)</button>
      <button class="btn btn-success my-3 mr-3" @click="getUsersFetch()">Pedir Fetch </button>
      <button class="btn btn-dark my-3 mr-3" @click="getUsersAxios()">Pedir Axios </button>
      <button class="btn btn-danger my-3" @click="users=[]">CLEAR</button>
      <br>

      <div v-if="users.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
          </tr>
          <tr v-for="(usuario, index) in users" :key="index">
              <td>{{ usuario.name }}</td>
              <td>{{ usuario.email }}</td>
              <td>{{ usuario.number }}</td>
          </tr>
        </table>
        <h5 class="alert alert-primary">Se encontraron {{users.length}} usuarios.</h5>
      </div>
      <h4 v-else class="alert alert-danger text-center">No se encontraron usuarios</h4>
     </div>
  </section>
</template>

<script>

  export default  {
    name: 'src-components-http-client',
    props: [],
    mounted () {

    },
    data () {
      return {
        url : "https://62a6273eb9b74f766a44849f.mockapi.io/usuarios",
        users: []
      }
    },
    methods: {
      getUsersXHRcb() {
          const xhr = new XMLHttpRequest()
          xhr.open('get', this.url)
          xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
              this.users = JSON.parse(xhr.response)
              //console.log(respuesta)
            }
            else {
              console.error('ERROR XHR cb (status)', xhr.status)
            }
          })
          xhr.addEventListener('error', e => {
              console.error('ERROR XHR cb (ajax)', e)
          })
          xhr.send()
      },
      
      async getUsersFetch() {
        try {
          let response = await fetch(this.url)
          //console.log(response)
          this.users = await response.json()
        }
        catch(error) {
          console.error('Error Fetch', error)
        }
      },
      
      async getUsersAxios() {          
        try {
          let response = await this.axios(this.url)
          this.users = response.data
        }
        catch(error) {
          console.error('Error Axios', error)
        }  
      }

    },
    computed: {
      
    }
  }

</script>

<style scoped lang="css">
  .src-components-http-client {

  }
</style>
