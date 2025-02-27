<template>
    <div class="container">
      <main class="content">
        <h1>Consumo de Agua</h1>
        <div class="data-card">
          <h2>Datos Generales</h2>
          <p><strong>Consumo Diario (Laboral):</strong> {{ agua.dia_laboral_litros + incremento - decremento }} L</p>
          <p><strong>Consumo Diario (Fin de Semana):</strong> {{ agua.fin_de_semana_litros }} L</p>
          <p><strong>Consumo Mensual:</strong> {{ (agua.consumo_mensual_litros + (incremento * 22) - (decremento * 22)) }} L</p>
          <p><strong>Consumo Anual:</strong> {{ (agua.consumo_anual_litros + (incremento * 220) - (decremento * 220)) }} L</p>
        </div>
        
        <div class="controls">
          <input v-model.number="nuevoIncremento" type="number" placeholder="Introduce litros" min="1" :max="9998" @input="validarIncremento" />
          <button @click="incrementarConsumo">Incrementar Consumo</button>
        </div>
        
        <div class="controls">
          <input v-model.number="nuevoDecremento" type="number" placeholder="Introduce litros" min="1" :max="9998" @input="validarDecremento" />
          <button @click="decrementarConsumo">Decrementar Consumo</button>
        </div>
  
        <div class="controls">
          <button @click="restablecerDatos">Restablecer los datos</button>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import aguaData from "@/data/agua.json";
  
  export default {
    data() {
      return {
        agua: aguaData.agua,
        incremento: 0,
        decremento: 0,
        nuevoIncremento: "",
        nuevoDecremento: "",
        datosIniciales: JSON.parse(JSON.stringify(aguaData.agua))
      };
    },
    methods: {
      validarIncremento() {
        if (this.nuevoIncremento < 1 || this.nuevoIncremento > 9998) {
          this.nuevoIncremento = "";
        }
      },
      validarDecremento() {
        if (this.nuevoDecremento < 1 || this.nuevoDecremento > 9998) {
          this.nuevoDecremento = "";
        }
      },
      incrementarConsumo() {
        const valor = parseInt(this.nuevoIncremento);
        if (!isNaN(valor) && valor > 0 && valor < 9999) {
          this.incremento = valor;
          this.nuevoIncremento = "";
        } else {
          alert("Por favor, introduce un número válido entre 1 y 9998.");
        }
      },
      decrementarConsumo() {
        const valor = parseInt(this.nuevoDecremento);
        if (!isNaN(valor) && valor > 0 && valor < 9999) {
          this.decremento = valor;
          this.nuevoDecremento = "";
        } else {
          alert("Por favor, introduce un número válido entre 1 y 9998.");
        }
      },
      restablecerDatos() {
        this.agua = JSON.parse(JSON.stringify(this.datosIniciales));
        this.incremento = 0;
        this.decremento = 0;
        this.nuevoIncremento = "";
        this.nuevoDecremento = "";
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .content {
    width: 80%;
    max-width: 800px;
    text-align: center;
  }
  
  .data-card {
    background: var(--light-gray);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }
  
  .controls {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  
  input {
    padding: 10px;
    border: 1px solid var(--medium-gray);
    border-radius: 5px;
    width: 150px;
  }
  
  button {
    background-color: var(--primary-green);
    color: var(--dark-gray);
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  button:hover {
    background-color: var(--secondary-green);
  }
  </style>
  