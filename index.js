class Navbar {
  constructor() {
    this.btn = document.getElementById("mobileTogglebtn");
    this.menu = document.getElementById("mobileMenu");
    this.icon = document.getElementById("iconMenu");

    this.isOpen = false;

    this.init();
  }

  init() {
    this.btn.addEventListener("click", () => this.toggle());

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!this.menu.contains(e.target) && !this.btn.contains(e.target)) {
        this.close();
      }
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close();
    });
  }

  open() {
    this.menu.classList.remove("-translate-y-full", "opacity-0");
    this.menu.classList.add("translate-y-0", "opacity-100");

    this.menu.setAttribute("aria-hidden", "false");
    this.btn.setAttribute("aria-expanded", "true");

    // icon change
    this.icon.classList.remove("fa-bars");
    this.icon.classList.add("fa-xmark");

    // lock scroll (SaaS standard UX)
    document.body.style.overflow = "hidden";

    this.isOpen = true;
  }

  close() {
    this.menu.classList.add("-translate-y-full", "opacity-0");
    this.menu.classList.remove("translate-y-0", "opacity-100");

    this.menu.setAttribute("aria-hidden", "true");
    this.btn.setAttribute("aria-expanded", "false");

    // icon reset
    this.icon.classList.add("fa-bars");
    this.icon.classList.remove("fa-xmark");

    document.body.style.overflow = "";

    this.isOpen = false;
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }
}

new Navbar();