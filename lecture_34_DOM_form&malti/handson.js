const users = [];
const form = document.querySelector("#contactForm");
const outputDiv = document.querySelector("#output");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const user = {
    name: document.querySelector("#name").value,
    mobile: document.querySelector("#mobile").value,
    gender: document.querySelector("input[name='gender']:checked")?.value || "Not selected",
    city: document.querySelector("#city").value,
  };

  users.push(user);
  console.log(users);

  displayUsers();
  form.reset();
});

function displayUsers() {
  outputDiv.innerHTML = "<h3>Submitted Users:</h3>";

  users.forEach((user, index) => {
    const userInfo = `
      <p><strong>${index + 1}.</strong> ${user.name} | ${user.mobile} | ${user.gender} | ${user.city}</p>
    `;
    outputDiv.innerHTML += userInfo;
  });
}
