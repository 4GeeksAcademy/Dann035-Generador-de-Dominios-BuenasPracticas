let pronouns = ['the', 'our'];
let adjetives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let domains = ['.com', '.net', '.us', '.io'];

let domainGenerator = () => {
    pronouns.flatMap(pronoun => adjetives.flatMap(adjetives => nouns.flatMap(noun => domains.map(domain => console.log(pronoun + adjetives + noun + domain)))));
}


// for (let i = 0; i < pronoun.length; i++) {
//     for (let j = 0; j < adj.length; j++) {
//         for (let k = 0; k < noun.length; k++) {
//             for (let l = 0; l < domain.length; l++) {
//                 console.log(pronoun[i] + adj[j] + noun[k] + domain[l]);
//             }
//         }
//     }
// }


