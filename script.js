const ratingInfo = [
  {
    image: 'images/illustration-thank-you.svg',
    message: "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
  }
]

const ratingButton = document.querySelectorAll('.rating-button');

let ratingIndex ;

// EVENT ON RATING BUTTON

ratingButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    ratingButton.forEach(btn => {
      btn.style.background = 'rgba(211, 211, 211, 0.055)';
      btn.style.color = 'white';
    });

    button.style.background = 'rgba(255, 123, 0, 0.986)';
    button.style.color = 'black';
    
    ratingIndex = index + 1;
  });
});


// EVENT ON SUBMIT BUTTON

const submitButton = document.querySelector('.js-submit-button');

submitButton.addEventListener('click', () => {
  
  const main = document.querySelector('.js-main-container');

  main.innerHTML = `
    <div class="css-illustration-thank-you">
      <img src="${ratingInfo[0].image}">
      <span>You selected ${ratingIndex} of 5</span>
      <h2>Thank you!</h2>
      <p>${ratingInfo[0].message}</p>
    </div>
  `
});
