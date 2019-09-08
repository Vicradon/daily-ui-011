if ("serviceWorker" in navigator){
  navigator.serviceWorker.register("/sw.js")
  .then(() => console.log("services worker was successfully registered"))
  .catch(error => console.log(error))
}

const $ = node => document.querySelector(node);
const heading = $('.heading');
const action = $('.action');
const tog = $('.switch');
const text = $('.text');
const chkcirc = $('#checkcirc');
const icon = $('.icon');

tog.onclick = () => {
  // const toggle = (node, property, first, second) => node.property === first ? node.property = second:node.property = first;
  // toggle(heading, 'textContent', 'Awesome', 'Ooops');
  heading.textContent === 'Awesome' ? heading.textContent = 'Ooops' : heading.textContent = 'Awesome';
  heading.style.color === 'red' ? heading.style.color = 'rgb(5, 201, 5)' : heading.style.color = 'red';
  text.textContent === 'Your application has been sent successfully' ? text.textContent = 'Something went wrong, please try again' : text.textContent = 'Your application has been sent successfully';
  action.style.backgroundColor === 'red' ? action.style.backgroundColor = 'rgb(5, 201, 5)' : action.style.backgroundColor = 'red';
  action.textContent === 'Continue' ? action.textContent = 'Try Again' : action.textContent = 'Continue';
  tog.textContent === 'Failure' ? tog.textContent = 'Success' : tog.textContent = 'Failure';
  if (Array.from(chkcirc.classList).includes('fa-check-circle')) {
    chkcirc.classList.remove('fa-check-circle');
    chkcirc.classList.add('fa-times-circle');
    icon.style.color = 'red';
  }
  else {
    chkcirc.classList.add('fa-check-circle');
    chkcirc.classList.remove('fa-times-circle');
    icon.style.color = '#05c905';
  }
}