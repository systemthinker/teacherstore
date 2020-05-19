

const initialState = 
    [{
    users: {
    id: 1,
    email: "kelley@codaisseur.com",
    name: "Kelley",
    intro: "Hi there! I'm Kelley, teacher of JavaScript, student of life",
    github_username: "kelleyvanevert",
    website: "https://hi-im-kelley.netlify.com/",
    createdAt: "2020-03-10T14:44:44.335Z",
    technologies: [
      {
        id: 1,
        title: "JavaScript"
      },
      {
        id: 2,
        title: "TypeScript"
      },
      {
        id: 5,
        title: "Promise.all"
      }
    ]}},
   {
        id: 2,
        email: "rein@codaisseur.com",
        name: "Rein",
        intro: null,
        github_username: "Reinoptland",
        website: null,
        createdAt: "2020-03-10T14:44:44.336Z",
        technologies: [
          {
            id: 1,
            title: "JavaScript"
          },
          {
            id: 6,
            title: "Learning strategies"
          }
        ]},
        {
            id: 3,
            email: "matias@codaisseur.com",
            name: "Matias",
            intro: "Hi! I'm Matias, teacher of Codaisseur, from Uruguay!",
            github_username: "matiagarcia91",
            website: null,
            createdAt: "2020-03-10T14:44:44.336Z",
            technologies: [
            ],
          }
          ]

          export default function reducer(state = initialState, action) {
            switch (action.type) {
              
          
              default: {
                return state;
              }
            }
          }