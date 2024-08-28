import "../../style.scss";
import { containerGitHub, input, form } from "./vars";
import getInfoGithub from "./getInfoGithub";

getInfoGithub("TatyanaPanchenko");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!input.value) {
    return;
  } else {
    containerGitHub.innerHTML = "";
    getInfoGithub(input.value);
  }
});
