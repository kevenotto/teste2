document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("[data-form]");
    const successMessage = document.querySelector(".success");
    const errorMessage = document.querySelector(".error");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(this);
      fetch(this.action, {
        method: this.method,
        headers: {
          Accept: "application/json"
        },
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            // Exibir mensagem de sucesso
            successMessage.style.display = "block";
            errorMessage.style.display = "none";
          } else {
            // Exibir mensagem de erro
            successMessage.style.display = "none";
            errorMessage.style.display = "block";
          }
        })
        .catch(error => {
          console.error("Erro ao enviar o formulário:", error);
          // Exibir mensagem de erro
          successMessage.style.display = "none";
          errorMessage.style.display = "block";
        });
    });
  });
  