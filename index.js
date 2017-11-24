exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: 'yellow',
    cursorColor: 'yellow',
    colors: {
      black: '#373737',
      red: '#DF9291',
      green: '#B5D1B0',
      yellow: '#F0D7A4',
      blue: '#93AFCF',
      magenta: '#D1B8D4',
      cyan: '#9FD2D3',
      white: '#D0CFC8',
      lightBlack: '#434343',
      lightRed: '#EAB9B9',
      lightGreen: '#D3E4D0',
      lightYellow: '#F7EAD0',
      lightBlue: '#B6C9DF',
      lightMagenta: '#E6D8E7',
      lightCyan: '#C2E2E3',
      lightWhite: '#F1EFEC'
    },
    css: `
      ${config.css || ''}
      .splitpane_divider {
        background-color: 434343;
      }
    `
  });
}
