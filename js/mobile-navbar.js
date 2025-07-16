// navegação do menu em geral
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}


const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();


//script para navegação do user e carrinho de compras
// criação de conta/acesso ao usuário
const buttonUser = document.querySelector(".btn-user")
const modalUser = document.querySelector("dialog")
const btnCloseForm = document.querySelector(".btn-closeForm")

buttonUser.onclick = function () {
  modalUser.show()
}

btnCloseForm.onclick = function () {
  modalUser.close()
}



// criação do acesso ao carrinho de compras
const buttonCart = document.querySelector(".btn-cart")
const modalCart = document.querySelector("dialog.dialogCart")
const btnCloseCart = document.querySelector(".btn-goCart")

buttonCart.onclick = function () {
  modalCart.show()
}

btnCloseCart.onclick = function () {
  modalCart.close()
}