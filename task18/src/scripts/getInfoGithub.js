import renderInfoGitHub from "./renderInfoGitHub";

export default async function getInfoGithub(name) {
  try {
    const resp = await fetch(`https://api.github.com/users/${name}`);
    const info = await resp.json();
    renderInfoGitHub(info);
  } catch (e) {
    console.error(e);
  }
}
