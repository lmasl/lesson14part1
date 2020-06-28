'use strict'
function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }
  
  DomElement.prototype.createEl = function () {
    let newElName = this.selector.slice(1),
      newEl;
  
    if (this.selector[0] === '.') {
      newEl = document.createElement('div');
      newEl.classList.add(newElName);
    } else if (this.selector[0] === '#') {
      newEl = document.createElement('p');
      newEl.id = newElName;
    }
  
    newEl.textContent = 'Новый элемент';
  
    newEl.style.height = this.height + 'px';
    newEl.style.width = this.width + 'px';
    newEl.style.backgroundColor = this.bg;
    newEl.style.fontSize = this.fontSize;
  
    document.body.append(newEl);
  };
  
  const domElement = new DomElement('.block', 50, 150, 'yellow', 20);
  
  domElement.createEl();
