document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.container');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.5
    });
    containers.forEach(container => {
        observer.observe(container);
    });
});

const style = document.createElement('style');
style.textContent = `
  .bounce-on-hover {
    transition: transform 0.3s ease;
    display: inline-block;
  }
  .bounce-on-hover:hover {
    animation: bounce 0.4s forwards;
  }
  @keyframes bounce {
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1.1); }
  }
`;
document.head.appendChild(style);

const elements = document.querySelectorAll('[type="button"], [role="button"], [class="nav-link"], [src="./Images/Morschel-logo-klein.png"], [responsive="True"]');
elements.forEach(element => {
  element.classList.add('bounce-on-hover');
});