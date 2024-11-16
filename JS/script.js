function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  function handleSubmit(event, type) {
    event.preventDefault();
    
    if (type === 'login') {
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      
      console.log('Tentative de connexion:', { email, password });
      // Ajoutez ici votre logique de connexion
      
    } else if (type === 'register') {
      const name = document.getElementById('registerName').value;
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      
      if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas!');
        return false;
      }
      
      console.log('Tentative d\'inscription:', { name, email, password });
      // Ajoutez ici votre logique d'inscription
    }
    
    closeModal(type + 'Modal');
    return false;
  }
  
  // Fermer la modal si on clique en dehors
  window.onclick = function(event) {
    if (event.target.className === 'modal') {
      event.target.style.display = "none";
    }
  }


  const Cours = document.querySelector('cours');

  Cours.onclick = function() {
    this.style.backgroundColor = 'red';
  };