if (!localStorage.getItem("isLoggedIn")) {
    window.location.href = "index.html";
  }
  
  function addPatient(event) {
    event.preventDefault();
    const patient = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      id: document.getElementById("id").value,
      disease: document.getElementById("disease").value,
      number: document.getElementById("number").value,
    };
  
    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    patients.push(patient);
    localStorage.setItem("patients", JSON.stringify(patients));
    document.getElementById("patient-form").reset();
    showPatients();
  }
  
  function showPatients() {
    const patients = JSON.parse(localStorage.getItem("patients")) || [];
    const list = document.getElementById("patient-list");
    list.innerHTML = "";
    patients.forEach((p) => {
      const item = document.createElement("div");
      item.className = "p-4 bg-white shadow rounded mb-2";
      item.innerHTML = `<strong>${p.name}</strong> | ID: ${p.id} | Age: ${p.age} | Disease: ${p.disease} | Phone: ${p.number}`;
      list.appendChild(item);
    });
  }
  
  window.onload = showPatients;
  