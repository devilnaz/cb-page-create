initAccordionModule('#accordion_questions');

function initAccordionModule(selector) {
  block = document.querySelector(selector);
  
  headAll = block.querySelectorAll('[data-name="head"]');
  bodyAll = block.querySelectorAll('[data-name="body"]');
  
  for (let head of headAll) {
    head.addEventListener('click', function() {
      let body = this.nextElementSibling;
      let height = body.scrollHeight;
      
      if (body.style.minHeight) {
        bodyAll.forEach(function(body) {
          body.style.minHeight = null;
        });
        this.style.borderBottom = null;
        this.querySelector('img').setAttribute('src', `${window.location.href}/img/modules/accordion/accordion_plus.svg`);
      } else {
        bodyAll.forEach(function(body) {
          body.style.minHeight = null;
        });
        headAll.forEach(function(head) {
          head.style.borderBottom = null;
          head.querySelector('img').setAttribute('src', `${window.location.href}/img/modules/accordion/accordion_plus.svg`);
        });
        this.querySelector('img').setAttribute('src', `${window.location.href}/img/modules/accordion/accordion_minus.svg`);
        this.style.borderBottom = '1px solid #EAEAEA';
        body.style.minHeight = height + 'px';
      }
    })
  }
}