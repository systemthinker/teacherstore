const initialState = {
  teachers: [
    {
      id: 1,
      email: "kelley@codaisseur.com",
      name: "Kelley",
      intro: "Hi there! I'm Kelley, teacher of JavaScript, student of life",
      github_username: "kelleyvanevert",
      website: "https://hi-im-kelley.netlify.com/",
      createdAt: "2020-03-10T14:44:44.335Z",
      price: 1,
      technologies: [
        {
          id: 1,
          title: "JavaScript",
        },
        {
          id: 2,
          title: "TypeScript",
        },
        {
          id: 5,
          title: "Promise.all",
        },
      ],
    },

    {
      id: 2,
      email: "rein@codaisseur.com",
      name: "Rein",
      intro: "CHECK YOSELF BEFORE YO WRECK YOSELF #thuglyfe",
      github_username: "Reinoptland",
      website: null,
      price: 2,
      createdAt: "2020-03-10T14:44:44.336Z",
      technologies: [
        {
          id: 1,
          title: "JavaScript",
        },
        {
          id: 6,
          title: "Learning strategies",
        },
      ],
    },
    {
      id: 3,
      email: "matias@codaisseur.com",
      name: "Matias",
      intro: "Hi! I'm Matias, teacher of Codaisseur, from Uruguay!",
      github_username: "matiagarcia91",
      website: null,
      price: 3,
      createdAt: "2020-03-10T14:44:44.336Z",
      technologies: [],
    },
  ],

  users: {
    id: 1,
    name: "Henk",
    basket: [1, 3],
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        user: { ...state.user, basket: [...state.user.basket, action.payload] },
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        user: {
          ...state.user,
          basket: [
            ...state.user.basket.filter((item) => {
              if (item !== action.payload) {
                return { ...state };
              } else {
                return;
              }
            }),
          ],
        },
      };
    default: {
      console.log("STATE CALLED");
      return state;
    }
  }
}

// items: state.items.filter((item, index) => index !== action.payload)
