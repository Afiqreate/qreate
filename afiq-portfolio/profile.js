document.addEventListener('DOMContentLoaded', () => {
    const forgetm = document.getElementById('popupForget');
    const forget = document.querySelector('.forget');
    const programming =document.querySelector('.ac-programmer');

    forget.addEventListener('click', () => {
        forgetm.style.display = 'block';
    })
    

});

function closePopup() {
    document.getElementById('popupForget').style.display = 'none';
}
function openPopup() {
  document.getElementById("popupOverlay").classList.add("active");
}

function closePopup() {
  document.getElementById("popupOverlay").classList.remove("active");
}
function openUpProgrammer() {
  const container = document.querySelector('.sc-programmmer');
  const content = document.querySelector('.ac-programmmer');

  container.style.height = '600px';
  content.style.display = 'block';
  content.classList.add('show');
  container.style.backgroundColor = 'white';
  container.style.color = '#9b0023';

  // Add event listener for outside click
  document.addEventListener('click', function outsideClickHandler(event) {
    if (!container.contains(event.target)) {
      // Reset styles
      container.style.height = '';
        content.classList.remove('show');
      container.style.backgroundColor = '';
      container.style.color = '';

      // Remove this event listener once triggered
      document.removeEventListener('click', outsideClickHandler);
    }
  });
}
function openUpVideoEditing() {
  const container1 = document.querySelector('.sc-videoEditing');
  const content1 = document.querySelector('.ac-videoEditing');

  container1.style.height = '600px';
  content1.style.display = 'block';
  content1.classList.add('show');
  container1.style.backgroundColor = 'white';
  container1.style.color = '#9b0023';

  // Add event listener for outside click
  document.addEventListener('click', function outsideClickHandler(event) {
    if (!container1.contains(event.target)) {
      // Reset styles
      container1.style.height = '';
        content1.classList.remove('show');
      container1.style.backgroundColor = '';
      container1.style.color = '';

      // Remove this event listener once triggered
      document.removeEventListener('click', outsideClickHandler);
    }
  });
}
function openUpGraphicDesign() {
  const container1 = document.querySelector('.sc-grapicDesign');
  const content1 = document.querySelector('.ac-grapicDesign');

  container1.style.height = '600px';
  content1.style.display = 'block';
  content1.classList.add('show');
  container1.style.backgroundColor = 'white';
  container1.style.color = '#9b0023';

  // Add event listener for outside click
  document.addEventListener('click', function outsideClickHandler(event) {
    if (!container1.contains(event.target)) {
      // Reset styles
      container1.style.height = '';
        content1.classList.remove('show');
      container1.style.backgroundColor = '';
      container1.style.color = '';

      // Remove this event listener once triggered
      document.removeEventListener('click', outsideClickHandler);
    }
  });
}
function openUpNetwork() {
  const container1 = document.querySelector('.sc-Network');
  const content1 = document.querySelector('.ac-Network');

  container1.style.height = '600px';
  content1.style.display = 'block';
  content1.classList.add('show');
  container1.style.backgroundColor = 'white';
  container1.style.color = '#9b0023';

  // Add event listener for outside click
  document.addEventListener('click', function outsideClickHandler(event) {
    if (!container1.contains(event.target)) {
      // Reset styles
      container1.style.height = '';
        content1.classList.remove('show');
      container1.style.backgroundColor = '';
      container1.style.color = '';

      // Remove this event listener once triggered
      document.removeEventListener('click', outsideClickHandler);
    }
  });
}
function openUpPentest() {
  const container1 = document.querySelector('.sc-pentest');
  const content1 = document.querySelector('.ac-pentest');

  container1.style.height = '600px';
  content1.style.display = 'block';
  content1.classList.add('show');
  container1.style.backgroundColor = 'white';
  container1.style.color = '#9b0023';

  // Add event listener for outside click
  document.addEventListener('click', function outsideClickHandler(event) {
    if (!container1.contains(event.target)) {
      // Reset styles
      container1.style.height = '';
        content1.classList.remove('show');
      container1.style.backgroundColor = '';
      container1.style.color = '';

      // Remove this event listener once triggered
      document.removeEventListener('click', outsideClickHandler);
    }
  });
}
function openUpSmk() {
  const container1 = document.querySelector('.smk');
  const content1 = document.querySelector('.descSmk');

  // Expand the container and show content
  container1.style.width = '1000px';
  content1.style.display = 'block';

  // Temporary delay to allow layout update before adding listener
  setTimeout(() => {
    function outsideClickHandler(event) {
      if (!container1.contains(event.target)) {
        // Collapse the container
        container1.style.width = '200px';
        content1.style.display = 'none';
        content1.style.opacity = '1';

        // Remove the event listener after one trigger
        document.removeEventListener('click', outsideClickHandler);
      }
    }

    // Attach only once
    document.addEventListener('click', outsideClickHandler);
  }, 100);
}
function openUpUitm() {
  const container1 = document.querySelector('.uitm');
  const content1 = document.querySelector('.decUitm');

  // Expand the container and show content
  container1.style.width = '1000px';
  content1.style.display = 'block';

  // Temporary delay to allow layout update before adding listener
  setTimeout(() => {
    function outsideClickHandler(event) {
      if (!container1.contains(event.target)) {
        // Collapse the container
        container1.style.width = '200px';
        content1.style.display = 'none';
        content1.style.opacity = '1';

        // Remove the event listener after one trigger
        document.removeEventListener('click', outsideClickHandler);
      }
    }

    // Attach only once
    document.addEventListener('click', outsideClickHandler);
  }, 100);
}
function openUpMdec() {
  const container1 = document.querySelector('.mdec');
  const content1 = document.querySelector('.decMdec');

  // Expand the container and show content
  container1.style.width = '1000px';
  content1.style.display = 'block';

  // Temporary delay to allow layout update before adding listener
  setTimeout(() => {
    function outsideClickHandler(event) {
      if (!container1.contains(event.target)) {
        // Collapse the container
        container1.style.width = '200px';
        content1.style.display = 'none';
        content1.style.opacity = '1';

        // Remove the event listener after one trigger
        document.removeEventListener('click', outsideClickHandler);
      }
    }

    // Attach only once
    document.addEventListener('click', outsideClickHandler);
  }, 100);
}
function openUpCisco() {
  const container1 = document.querySelector('.cisco');
  const content1 = document.querySelector('.decCisco');

  // Expand the container and show content
  container1.style.width = '1000px';
  content1.style.display = 'block';

  // Temporary delay to allow layout update before adding listener
  setTimeout(() => {
    function outsideClickHandler(event) {
      if (!container1.contains(event.target)) {
        // Collapse the container
        container1.style.width = '200px';
        content1.style.display = 'none';
        content1.style.opacity = '1';

        // Remove the event listener after one trigger
        document.removeEventListener('click', outsideClickHandler);
      }
    }

    // Attach only once
    document.addEventListener('click', outsideClickHandler);
  }, 100);
}
function openUpFcc() {
  const container1 = document.querySelector('.fcc');
  const content1 = document.querySelector('.decFcc');

  // Expand the container and show content
  container1.style.width = '1000px';
  content1.style.display = 'block';

  // Temporary delay to allow layout update before adding listener
  setTimeout(() => {
    function outsideClickHandler(event) {
      if (!container1.contains(event.target)) {
        // Collapse the container
        container1.style.width = '200px';
        content1.style.display = 'none';
        content1.style.opacity = '1';

        // Remove the event listener after one trigger
        document.removeEventListener('click', outsideClickHandler);
      }
    }

    // Attach only once
    document.addEventListener('click', outsideClickHandler);
  }, 100);
}


function scrollCarousel(direction) {
    const container = document.getElementById('carousel');
    const scrollAmount = 250; // pixels per click

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  function sendEmail() {
    window.location.href = 'mailto:m.afiq11705@gmail.com';
    setTimeout(() => {
        alert('If your email client didn’t open, please copy the email address and paste it into your email app.');
    }, 200);
}
  