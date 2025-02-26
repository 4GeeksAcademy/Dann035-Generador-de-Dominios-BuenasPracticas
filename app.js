let pronouns = ['the', 'our'];
let adjetives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let domains = ['.com', '.net', '.us', '.io'];

let domainGenerator = () => {
    pronouns.flatMap(pronoun => adjetives.flatMap(adjetives => nouns.flatMap(noun => domains.map(domain => console.log(pronoun + adjetives + noun + domain)))));
}
