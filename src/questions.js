module.exports = [
  {
    name: 'name',
    type: 'text',
    message: 'Component name',
    initial: 'Sidebar',
  },
  {
    name: 'dir',
    type: 'text',
    message: 'Parent directory to install folder to',
    initial: 'src/components/'
  },
  {
    name: 'hasStyles',
    type: 'confirm',
    message: 'Create a stylesheet?',
  },
  {
    name: 'hasActions',
    type: 'confirm',
    message: 'Create an actions file?',
  },
  {
    name: 'hasConstants',
    type: 'confirm',
    message: 'Create a constants file?',
  },
  {
    name: 'hasReducers',
    type: 'confirm',
    message: 'Create a reducers file?',
  },
  {
    name: 'hasSelectors',
    type: 'confirm',
    message: 'Create a selectors file?',
  },
];
