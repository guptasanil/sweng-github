async function getRepos(input) {
    const data = await fetch(`https://api.github.com/users/${input}/repos`);
    const dataJSON = await data.json();
    return dataJSON;
}

export default getRepos;