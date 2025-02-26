let pronouns = ['the', 'our'];
let adjetives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let domains = ['.com', '.net', '.us', '.io'];

let domainGenerator = () => {
    pronouns.flatMap(pronoun => adjetives.flatMap(adjetive => 
        nouns.flatMap(noun => domains.map(domain => console.log(pronoun + adjetive + noun + domain)))));
}

domainGenerator()