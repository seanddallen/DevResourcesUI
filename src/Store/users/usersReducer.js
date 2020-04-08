import { FETCH_ALL_USERS, FETCH_ONE_USER } from "../actionTypes";

const initialState = {
  all: [],
  one: {},
  current: {
    id: 1,
    first_name: "Hall",
    last_name: "Finley",
    username: "Alexander3",
    email: "alexanderfinley@shadease.com",
    employment: "Employed-Mid",
    education: "CS Degree",
    experience: "5-10 years",
    specialty: "Dev-Ops",
    approved: true,
    linkedinUrl: "https://randoLinkedIn.com",
    githubUrl: "https://randoGitHub.com",
    personalUrl: "https://randoPersonalSite.com",
    role: "user",
    score: 264,
    image: "randoImg.jpeg"
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return { ...state, all: action.payload };

    case FETCH_ONE_USER:
      return {
        ...state,
        one: action.payload
      };
    default:
      return state;
  }
};
