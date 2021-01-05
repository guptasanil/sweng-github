async function getLangs(username, repoName) {
    const languages = await fetch(
        `https://api.github.com/repos/${username}/${repoName}/languages`
    );
    const languagesJSON = await languages.json();
    var langArr = [];
    Object.keys(languagesJSON).forEach(function (key) {
        var lang = {
            label: key,
            value: languagesJSON[key],
        };
        
        langArr.push(lang);
    });
    //console.log(langArr);
    
    return langArr;
}

export default getLangs;