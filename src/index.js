import "./styles.css";
const V2_URL = "https://v2-stage.fe-alpha.auslr.io/";
const navigate = () => (window.location = V2_URL);
document.body.addEventListener("animationend", () =>
  setTimeout(navigate, 1000)
);
document.body.addEventListener("load", () => {
  setTimeout(navigate, 8000);
});
