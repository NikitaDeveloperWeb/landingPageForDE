class Modal {
  constructor(button, window) {
    this.$button = document.getElementById(button);
    this.$modalWindow = document.querySelector(window);
    this.$close = document.getElementById('close');
    this.$modalWindowContent = document.querySelector('.modalOpen__window');
    this.$modalOverlay = document.querySelector('.modalOpen__overlay');
    this.$modalWindow.style.display = 'none';
    this.state = false;

    this.#setup();
    this.render();
  }
  render() {
    if (this.state === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$button.addEventListener('click', this.clickHandler);
    this.$close.addEventListener('click', this.clickHandler);
    this.$modalOverlay.addEventListener('click', this.clickHandler);
  }
  clickHandler() {
    this.toggle();
  }
  get isOpen() {
    return this.$modalWindow.classList.contains('modalOpen');
  }

  //swift state dropdown
  toggle() {
    this.isOpen ? this.close() : this.open();
  }
  open() {
    this.$modalWindow.classList.remove('modalClose');
    this.$modalWindow.classList.add('modalOpen');
    this.$modalWindow.style.display = '';
    this.state = true;

    this.render();
  }
  close() {
    this.$modalWindow.classList.remove('modalOpen');
    this.$modalWindow.classList.add('modalClose');
    this.$modalWindow.style.display = 'none';
    this.state = false;
    this.render();
  }
}
