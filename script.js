document.getElementById("burger-menu").addEventListener("click", function () {
  this.classList.toggle("closed");
  document.getElementById("mobileNavLinkPage").classList.toggle("open");
  document.getElementById("mobileTopNav").classList.toggle("fixednav");
  document.body.classList.toggle("no-scroll");
});

// document.querySelector("#contactusMainForm").submit((e)=>{
//     e.preventDefault();

//     document.querySelector('button[type="submit"]').text("Sending Message...")

//     let name = document.querySelector('input[name="name"]').val()
//     let email = document.querySelector('input[name="email"]').val()
//     let number = document.querySelector('input[name="number"]').val()
//     let subject = document.querySelector('input[name="subject"]').val()
//     let message = document.querySelector('textarea[name="message"]').val()
//     let submit = document.querySelector('input[name="submit"]').val()

//     document.querySelector("#formMessage").load("mail.php",{
//         name: name,
//         email: email,
//         number: number,
//         subject: subject,
//         message: message,
//         submit: submit
//     }, function(response, status, xhr) {
//         // Revert the text of the submit button back to its original state
//         document.querySelector('button[type="submit"]').text("Send message")
//     });

// })

//check if the elmeent has entered viewport
function isInViewport(element) {
  if (element != null) {
    var bounding = element.getBoundingClientRect();
    return (
      bounding.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.bottom >= 0
    );
  }
}
let valueDisplays = document.querySelectorAll(".numCount");
let interval = 1000;

const handleAnimation = () => {
  if (isInViewport(document.querySelector("#heroContent h1"))) {
    document.querySelector("#heroContent h1").classList.add("animate");
  }
  if (isInViewport(document.querySelector("#heroContentDesc"))) {
    document.querySelector("#heroContentDesc").classList.add("animate");
  }
  if (isInViewport(document.querySelector("#heroBtns"))) {
    document.querySelector("#heroBtns").classList.add("animate");
  }
//   document.querySelectorAll("#patnersContent img").forEach((item) => {
//     if (isInViewport(item)) {
//       item.classList.add("animate");
//     }
//   });
  document.querySelectorAll(".slideFromRight").forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("animate");
    }
  });
  document.querySelectorAll(".slideFromLeft").forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("animate");
    }
  });
  document.querySelectorAll(".slideFromBottom").forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("animate");
    }
  });
  document.querySelectorAll(".slideFromUp").forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("animate");
    }
  });
  document.querySelectorAll(".scale").forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("animate");
    }
  });
  document.querySelectorAll(".spin").forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("animate");
    }
  });
};
window.addEventListener("load", handleAnimation);
window.addEventListener("scroll", handleAnimation);

let counted = false;

let numberCount = () => {
  if (counted == false) {
    valueDisplays.forEach((valueDisplay) => {
      if (isInViewport(valueDisplay)) {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-value"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(() => {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);counted = true;
      }
    });
    
  }
  
};
window.addEventListener("scroll", numberCount);
