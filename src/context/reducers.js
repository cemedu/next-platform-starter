import StoreAction from "./context.action";

const Initials = {
  popup: [false, null],
  show: [false, null],

  error: false,
  loading: false,
  reading_mode: false,
  theme: false,

  user: {},
  data: {},
  datas: [],
};


function Theme(x) {
  if (x) {
    document.documentElement.style.setProperty('--bg1', ' #ffffff');
    document.documentElement.style.setProperty('--bg2', ' #ffffff');
    document.documentElement.style.setProperty('--bg3', ' #001733');

    document.documentElement.style.setProperty('--text1', '#07253f');
    document.documentElement.style.setProperty('--text2', '#ffffff');
    document.documentElement.style.setProperty('--text3', '#bedeff');
    document.documentElement.style.setProperty('--icon', '#00a6d8');
  } else {
    document.documentElement.style.setProperty('--bg1', ' #070e0f');
    document.documentElement.style.setProperty('--bg2', ' #000000');
    document.documentElement.style.setProperty('--bg3', ' #001733');

    document.documentElement.style.setProperty('--text1', '#aecbf0');
    document.documentElement.style.setProperty('--text2', '#26314e');
    document.documentElement.style.setProperty('--text3', '#bedeff');

    document.documentElement.style.setProperty('--icon', '#00a6d8');
  }
}

// Define the reducer function
function Reducers(state, action) {
  switch (action.type) {
    case StoreAction.loading: {
      return { ...state, loading: action.payload };
    }
    case StoreAction.popup: {
      return { ...state, popup: action.payload };
    }
    case StoreAction.error: {
      return { ...state, error: action.payload };
    }
    case StoreAction.show: {
      return { ...state, show: action.payload };
    }
    case StoreAction.user: {
      return { ...state, user: action.payload };
    }
    case StoreAction.data: {
      return { ...state, data: action.payload };
    }
    case StoreAction.reading_mode: {
      return { ...state, reading_mode: action.payload };
    }

    case StoreAction.datas: {
      return { ...state, datas: action.payload };
    }

    case StoreAction.theme: {
      Theme(action.payload);
      return { ...state, theme: action.payload }
    }

    default:
      return state;
  }
}

export { Reducers, Initials };
