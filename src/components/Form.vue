<template>

  <section class="src-components-Form">
    <div class="jumbotron">
      <h2>Formulario</h2>
      <hr>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">
    
        
        <!-- nombre -->
        
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            name="nombre" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre" 
            required 
            :minlength="minLength"
            :maxlength="maxLength"
          />

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{minLength}} caracteres.
            </div>
           <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo admite como máximo {{minLength}} caracteres.
            </div>
          </field-messages>
        </validate>
        <br>

       
        <!--  edad  -->
        
        <validate tag="div">
          <label for="edad">Edad</label>
          <input 
            type="number"
            id="edad"
            name="edad" 
            class="form-control"
            autocomplete="off"
            v-model.number="formData.edad" 
            required 
            :min="edadMin"
            :max="edadMax"
          />

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima permitida es de {{edadMin}} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima permitida es de {{edadMax}} años.
            </div>
          </field-messages>
        </validate>
        <br>

       
        <!--  email  -->
       
        <validate tag="div">
          <label for="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.email" 
            required 
          />

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </validate>
        <br>

        <!-- Botón de envío -->
        <button class="btn btn-success my-4" :disabled="formState.$invalid">Enviar</button>
      </vue-form>      

       <!-- Tabla para representar los datos ingresados -->
      <h2><i>Tabla de usuarios</i></h2>
      <br>

      <div v-if="usuarios.length" class="table-responsive">
        <table class="table">
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Mail</th>
          </tr>
          <tr v-for="(usuario,index) in usuarios" :key="index">
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.edad }}</td>
            <td>{{ usuario.email }}</td>
          </tr>
        </table>
      </div>
      <h3 v-else class="alert alert-info">No hay usuarios ingresados</h3>
     
     
    </div>  
  </section>

</template>

<script lang="js">
  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {
    },
    data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        usuarios : [],
        minLength : 5,
        maxLength : 15,
        edadMin: 18,
        edadMax: 120
      }
    },
    methods: {
      getInicialData() {
        return {
          nombre: '',
          edad: '',
          email: ''
        }
      },
       enviar() {
        let usuario = {...this.formData}
        console.log(usuario)
        this.usuarios.push(usuario)
        this.formData = this.getInicialData() 
        this.formState._reset() 
      }
    },
    computed: {
    }
}
</script>

<style scoped lang="css">

  .jumbotron {
      background-color: pink;
      color: black;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  hr {
      background-color: #bbb;
  }  
</style>