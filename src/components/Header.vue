<template>
    <header class="header-container">
      <nav class="nav-bar">
        <ul class="nav-list">
          <li><router-link to="/aigua" class="nav-link">Calculadora Aigua</router-link></li>
          <li><router-link to="/electricitat" class="nav-link">Calculadora Energia</router-link></li>
          <li><router-link to="/consumibles" class="nav-link">Consumibles</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent"
  };
  </script>
  
  <style scoped>
  .header-container {
    background-color: var(--primary-green);
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .nav-bar {
    display: flex;
    justify-content: center;
  }
  
  .nav-list {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    padding: 0;
    margin: 0;
  }
  
  .nav-link {
    text-decoration: none;
    color: var(--text-color);
    font-weight: bold;
    font-size: 1.1rem;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover {
    color: var(--accent-green);
  }
  </style>
  