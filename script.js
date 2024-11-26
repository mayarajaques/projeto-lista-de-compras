const input = document.getElementById("itemInput");
const form = document.querySelector("form");
const list = document.getElementById("list");

input.addEventListener("input", () => {
  const onlyLettersRegex = /[0-9]+/g;
  input.value = input.value.replace(onlyLettersRegex, "");
});

form.onsubmit = (event) => {
  event.preventDefault();
};
document.getElementById("addItemButton").addEventListener("click", function () {
  const inputValue = input.value.trim();

  if (inputValue !== "") {
    const newItem = document.createElement("li");
    newItem.classList.add("list");

    const checkboxImg = document.createElement("img");
    checkboxImg.src = "assets/buttonUnchecked.svg";
    checkboxImg.classList.add("custom-checkbox");

    checkboxImg.addEventListener("click", function () {
      checkboxImg.src = checkboxImg.src.includes("buttonUnchecked.svg") 
        ? "assets/buttonChecked.svg" 
        : "assets/buttonUnchecked.svg";
    });

    const buttonRemove = document.createElement("button");
    buttonRemove.classList.add("remove-btn");

    const imgRemove = document.createElement("img");
    imgRemove.src = "assets/remove.svg";
    buttonRemove.appendChild(imgRemove);

    newItem.appendChild(checkboxImg);
    newItem.appendChild(document.createTextNode(inputValue));
    newItem.appendChild(buttonRemove);

    list.appendChild(newItem);

    input.value = "";

    let messageContainer = document.getElementById("messageContainer");

    if (!messageContainer) {
      messageContainer = document.createElement("div");
      messageContainer.id = "messageContainer";
      document.querySelector("main").appendChild(messageContainer);
    }

    // Criar botão de fechar
    const closeButton = document.createElement("button");
    closeButton.innerHTML = `<img src="assets/delete-small.png" alt="Fechar" class="close-btn" />`;

    // Criar imagem de alerta
    const imgAlert = document.createElement("img");
    imgAlert.src = "assets/alert.svg";

    buttonRemove.addEventListener("click", function () {
      newItem.remove();

      // Limpar o conteúdo da mensagem para adicionar o novo
      messageContainer.innerHTML = ""; 

      // Adicionar imagem de alerta e texto
      messageContainer.appendChild(imgAlert);
      messageContainer.appendChild(document.createTextNode("O item foi removido da lista"));
      messageContainer.appendChild(closeButton);

      // Exibir a mensagem
      messageContainer.style.display = "flex"; 
      messageContainer.style.visibility = "visible"; 

      closeButton.addEventListener("click", function () {
        messageContainer.style.display = "none";
      });
    });
  } else {
    alert("Por favor, insira um item válido na lista de compras.");
  }
});