export const initialState = {
  dark: {
    textColor: '#fff',
    bgColor: '#000',
  },
  light: {
    textColor: '#000',
    bgColor: '#fff',
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL':
      localStorage.setItem('mode', 'dark');
      document.body.style.color = state.dark.textColor;
      document.body.style.backgroundColor = state.dark.bgColor;
      return state;
    case 'LIGHT':
      document.body.style.color = state.light.textColor;
      document.body.style.backgroundColor = state.light.bgColor;
      return state;
    case 'DARK':
      document.body.style.color = state.dark.textColor;
      document.body.style.backgroundColor = state.dark.bgColor;
      return state;

    default:
      return state;
  }
};
