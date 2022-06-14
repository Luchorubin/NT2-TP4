<template>
  <section class="src-componentes-http-client">
    <div class="jumbotron">
      <h2>HttpClient</h2>
      <hr>
      <hr>
      <br>

      <button class="btn btn-warning my-3 mr-3" @click="getUsuariosXHRcb()">Pedir XHR (cb)</button>
      <button class="btn btn-success my-3 mr-3" @click="getUsuariosFetch()">Pedir Fetch </button>
      <button class="btn btn-success my-3 mr-3" @click="getUsuariosAxios()">Pedir Axios </button>
      <button class="btn btn-danger my-3" @click="usuarios=[]">CLEAR</button>
      <br>

      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
          </tr>
          <tr v-for="(usuario, index) in usuarios" :key="index">
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.email }}</td>
              <td>{{ usuario.telefono }}</td>
          </tr>
        </table>
        <h5 class="alert alert-primary">Se encontraron {{usuarios.length}} usuarios.</h5>
      </div>
      <h4 v-else class="alert alert-danger text-center">No se encontraron usuarios</h4>
     </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-http-client',
    props: [],
    mounted () {

    },
    data () {
      return {
        url : "https://62a6273eb9b74f766a44849f.mockapi.io/usuarios",
        usuarios : []
      }
    },
    methods: {
       getUsuariosXHRcb() {
          const xhr = new XMLHttpRequest()
          xhr.open('get', this.url)

          xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
              let respuesta = JSON.parse(xhr.response)
              //console.log(respuesta)
              this.usuarios = respuesta
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

      async getUsuariosFetch() {
        try {
          let response = await fetch(this.url)
          //console.log(response)
          let respuesta = await response.json()
          this.usuarios = respuesta
        }
        catch(error) {
          console.error('Error Fetch', error)
        }
    },
      async getUsuariosAxios() {          
        
        try {
          let { data } = await this.axios(this.url)
          this.usuarios = data
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
  .src-componentes-http-client {
  
  }


</style>
