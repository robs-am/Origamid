function initTab() {
  //função responsável por iniciar navegação por tab
  //seleciona as classes especificas criadas para a navegação
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo");

  //cria a função responsável por adicionar a classe ativo na seção passada no parametro index e removê-la
  //das seções não selecionadas pelo index

  if (tabContent.lenght && tabMenu.length) {
    //verifica com a propriedade lenght se existe as classes citadas, existindo, ele retornará a função abaixo

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTab();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  accordionList[0].classList.add("ativo");
  accordionList[0].nextElementSibling.classList.add("ativo");

  //função que adiciona a classe ativo, responsável por mostrar/esconder
  function activeAccordion(event) {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  //substituimos o currentTaregt por this porque se referencia o item do forEach

  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}

initAccordion();
