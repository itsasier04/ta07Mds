<template>
    <div class="container">
      <main class="content">
        <h1>Consumo de Electricidad</h1>
        <div class="data-card">
          <h2>Datos Generales</h2>
          <p><strong>Número de Placas Solares:</strong> {{ placas }}</p>
          <p><strong>Consumo Diario (Laboral):</strong> {{ electricidad.consumo_laboral_diario_kwh + incremento - decremento }} kWh</p>
          <p><strong>Consumo Diario (Fin de Semana):</strong> {{ electricidad.consumo_fin_de_semana_diario_kwh }} kWh</p>
          <p><strong>Consumo Mensual:</strong> {{ (electricidad.consumo_mensual_kwh + (incremento * 22) - (decremento * 22)) }} kWh</p>
          <p><strong>Consumo Anual:</strong> {{ (electricidad.consumo_anual_kwh + (incremento * 220) - (decremento * 220)) }} kWh</p>
          <p><strong>Autoconsumo Diario:</strong> {{ calcularAutoconsumoDiario() }} kWh</p>
          <p><strong>Porcentaje de Autoconsumo:</strong> {{ calcularPorcentajeAutoconsumo() }}%</p>
        </div>
        
        <div class="controls">
          <input v-model.number="nuevoIncremento" type="number" placeholder="Introduce kWh" min="1" :max="9998" @input="validarIncremento" />
          <button @click="incrementarConsumo">Incrementar Consumo</button>
        </div>
        
        <div class="controls">
          <input v-model.number="nuevoDecremento" type="number" placeholder="Introduce kWh" min="1" :max="9998" @input="validarDecremento" />
          <button @click="decrementarConsumo">Decrementar Consumo</button>
        </div>
  
        <div class="controls">
          <input v-model.number="nuevoNumeroPlacas" type="number" placeholder="Introduce número de placas" min="1" :max="200" @input="validarPlacas" />
          <button @click="incrementarPlacas">Añadir Placa Solar</button>
        </div>
  
        <div class="controls">
          <input v-model.number="nuevoNumeroPlacas" type="number" placeholder="Introduce número de placas" min="1" :max="200" @input="validarPlacas" />
          <button @click="disminuirPlacas">Disminuir Placa Solar</button>
        </div>
  
        <div class="controls">
          <button @click="restablecerDatos">Restablecer los datos</button>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import electricidadData from "@/data/electricidad.json";
  
  export default {
    data() {
      return {
        electricidad: electricidadData.electricidad,
        incremento: 0,
        decremento: 0,
        nuevoIncremento: "",
        nuevoDecremento: "",
        nuevoNumeroPlacas: "",
        placas: electricidadData.electricidad.numero_placas_solares,
        // Copia de los datos iniciales
        datosIniciales: JSON.parse(JSON.stringify(electricidadData.electricidad)) // Realizamos una copia profunda
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
      validarPlacas() {
        if (this.nuevoNumeroPlacas < 1 || this.nuevoNumeroPlacas > 200) {
          this.nuevoNumeroPlacas = "";
        }
      },
      incrementarConsumo() {
        const valor = parseInt(this.nuevoIncremento);
        if (!isNaN(valor) && valor > 0 && valor < 9999) {
          this.incremento = valor;
          this.nuevoIncremento = ""; // Limpiar campo después de la acción
        } else {
          alert("Por favor, introduce un número válido entre 1 y 9998.");
        }
      },
      decrementarConsumo() {
        const valor = parseInt(this.nuevoDecremento);
        if (!isNaN(valor) && valor > 0 && valor < 9999) {
          this.decremento = valor;
          this.nuevoDecremento = ""; // Limpiar campo después de la acción
        } else {
          alert("Por favor, introduce un número válido entre 1 y 9998.");
        }
      },
      incrementarPlacas() {
        const valor = parseInt(this.nuevoNumeroPlacas);
        if (!isNaN(valor) && valor > 0 && valor <= 200) {
          this.placas = Math.min(this.placas + valor, 200); // Asegura que no se exceda el límite de 200
          this.nuevoNumeroPlacas = ""; // Limpiar campo después de la acción
        } else {
          alert("El número de placas no puede ser menor que 1 ni mayor que 200.");
        }
      },
      disminuirPlacas() {
        const valor = parseInt(this.nuevoNumeroPlacas);
        if (!isNaN(valor) && valor > 0 && this.placas - valor >= 136) {
          this.placas = this.placas - valor;
          this.nuevoNumeroPlacas = ""; // Limpiar campo después de la acción
        } else {
          alert("El número de placas no puede ser menor que 136.");
        }
      },
      restablecerDatos() {
        // Restaurar los datos a los valores iniciales
        this.electricidad = JSON.parse(JSON.stringify(this.datosIniciales));
        this.incremento = 0;
        this.decremento = 0;
        this.nuevoIncremento = "";
        this.nuevoDecremento = "";
        this.nuevoNumeroPlacas = "";
        this.placas = this.datosIniciales.numero_placas_solares;
      },
      calcularAutoconsumoDiario() {
        return ((this.placas / 136) * this.electricidad.autoconsumo_diario_kwh).toFixed(2);
      },
      calcularPorcentajeAutoconsumo() {
        const consumoTotal = this.electricidad.consumo_anual_kwh + (this.incremento * 220) - (this.decremento * 220);
        const autoconsumoTotal = this.calcularAutoconsumoDiario() * 365;
        return ((autoconsumoTotal / consumoTotal) * 100).toFixed(2);
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
  