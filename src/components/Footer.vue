<template>
  <footer class="footer">
    <div class="social-icons">
      <a href="https://www.instagram.com" target="_blank">
        <img src="../assets/instagram.png" alt="Instagram" class="icon" />
      </a>
      <a href="https://www.facebook.com" target="_blank">
        <img src="../assets/facebook.png" alt="Facebook" class="icon" />
      </a>
      <a href="https://twitter.com" target="_blank">
        <img src="../assets/x.png" alt="X" class="icon" />
      </a>
    </div>
    <div class="legal-link">
      <a href="#">© 2025 Tu Empresa - Todos los derechos reservados</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  background-color: var(--primary-green);
  color: var(--dark-gray);
  text-align: center;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  position: relative;
  bottom: 0;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 10px;
}

.icon {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.icon:hover {
  transform: scale(1.1);
}

.legal-link {
  margin-top: 10px;
}

.legal-link a {
  color: var(--dark-gray);
  text-decoration: none;
  font-size: 0.9rem;
}

.legal-link a:hover {
  text-decoration: underline;
}
</style>
