function bindEvents() {
      var form = document.getElementById("register");
      form.addEventListener("submit", validateForm);
    }
  function validateForm(e) {
      var login = document.getElementById("kdgLogin");
        e.preventDefault();
        login.classList.add("login");
  }
    bindEvents();