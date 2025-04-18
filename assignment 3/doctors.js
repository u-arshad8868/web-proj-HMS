if (!localStorage.getItem("isLoggedIn")) {
    window.location.href = "index.html";
  }
  
  function addDoctor(event) {
    event.preventDefault();
    const doctor = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      id: document.getElementById("id").value,
      post: document.getElementById("post").value,
      number: document.getElementById("number").value,
      email: document.getElementById("email").value,
    };
  
    const doctors = JSON.parse(localStorage.getItem("doctors")) || [];
    doctors.push(doctor);
    localStorage.setItem("doctors", JSON.stringify(doctors));
    document.getElementById("doctor-form").reset();
    showDoctors();
  }
  
  function showDoctors() {
    const doctors = JSON.parse(localStorage.getItem("doctors")) || [];
    const list = document.getElementById("doctor-list");
    list.innerHTML = "";
    doctors.forEach((d) => {
      const item = document.createElement("div");
      item.className = "p-4 bg-white shadow rounded mb-2";
      item.innerHTML = `<strong>${d.name}</strong> | ID: ${d.id} | Age: ${d.age} | Post: ${d.post} | Phone: ${d.number} | Email: ${d.email}`;
      list.appendChild(item);
    });
  }
  
  window.onload = showDoctors;
  