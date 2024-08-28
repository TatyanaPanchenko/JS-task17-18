import { containerGitHub } from "./vars";

export default function renderInfoGitHub(info) {
  containerGitHub.innerHTML = `<div class="avatar"> <img src="${
    info.avatar_url
  }" alt="avatar">
  </div>
     <div class="name">${info.login}</div>
    <div class="link"><a href="${
      info.html_url
    }"><img src="./src/images/github-logo.png" alt="github"></a></div>
    <div class="date">${new Date(info.created_at).toLocaleString(
      "ru",
      options
    )}</div>
    <div class="repositories">${info.public_repos} repositories</div>`;
}
const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
};
