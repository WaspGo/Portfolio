import "/src/sass/style.scss";
import JustValidate from "just-validate";

const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

const counters = document.querySelectorAll(".skills__progress-procent"),
  lines = document.querySelectorAll(".skills__progress__procent-completed");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

try {
  const validator = new JustValidate("form");

  validator
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Please fill the name",
      },
      {
        rule: "minLength",
        value: 2,
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Please fill the email",
      },
      {
        rule: "email",
      },
    ])
    .addField(
      "#text",
      [
        {
          rule: "required",
          errorMessage: "Please fill the text field",
        },
        {
          rule: "minLength",
          value: 5,
        },
      ],
      {
        errorsContainer: document
          .querySelector("#text")
          .parentElement.querySelector(".error-message"),
      },
    )
    .addField(
      "#checkbox",
      [
        {
          rule: "required",
          errorMessage: "Please mark the ckeckbox",
        },
      ],
      {
        errorsContainer: document
          .querySelector("#checkbox")
          .parentElement.parentElement.querySelector(".checkbox-error-message"),
      },
    )
    .onSuccess((event) => {
      const form = event.currentTarget;
      const formData = new FormData(form);

      fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success", data);
          form.reset();
        });
    });
} catch (e) {}
