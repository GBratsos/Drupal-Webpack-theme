function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.classList.add('iframe-wrapper');
    wrapper.appendChild(el);
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const $iframe = document.querySelector('iframe');
  
    if (typeof($iframe) != 'undefined' && $iframe != null) {
      wrap($iframe, document.createElement('div'));
    }
  
  });
  