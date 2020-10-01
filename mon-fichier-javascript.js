const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = "Voici une liste dynamique. Cliquez n'importe où en dehors de la liste pour ajouter un nouvel élément de liste. Cliquez sur un élément de liste existant pour changer son libellé.";

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt("Quel contenu voulez-vous ajouter à la liste ?");
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt("Saisissez un nouveau contenu pour votre élément de liste.");
    this.textContent = listContent;
  }
}