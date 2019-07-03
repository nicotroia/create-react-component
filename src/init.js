const fs = require('fs');
const mkdirp = require('mkdirp');
const prompts = require('prompts');
const templite = require('templite');
const { format, join, parse, resolve } = require('path');

const questions = require('./questions');

const templates = join(__dirname, 'templates');

const writeFile = (target, template, data) => {
  const content = templite(template, data);

  fs.writeFile(target, content, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`:) ${target}`);
  });
};

module.exports = opts => {
  let ok = true;
  const onCancel = () => ok = false;

  return prompts(questions, { onCancel }).then(argv => {
    if (!ok) {
      return console.log(`:( Init cancelled.`);
    }

    const {
      name,
      dir,
      hasActions,
      hasConstants,
      hasReducers,
      hasSelectors,
      hasStyles
    } = argv;

    if (!name) {
      return console.error(':( Missing component name.');
    }
    if (!dir) {
      return console.error(':( Missing dir location.');
    }

    const hasSlash = dir.substring(dir.length - 1) === '/';
    const location = `${dir}${!hasSlash ? '/' : ''}${name}/`;
    mkdirp.sync(location, err => {
      if (err) console.error(err);
      else console.log(`:) ${location}`);
    });

    const styleFile = `${name.charAt(0).toLowerCase()}${name.slice(1)}`;
    const data = {
      name,
      imports: {
        actions: hasActions ? "import * as actions from './actions';" : '',
        selectors: hasSelectors ? "import * as selectors from './selectors';" : '',
        styles: hasStyles ? `import styles from './${styleFile}.styl';` : '',
        constants: hasConstants ? "import * as constants from './constants';" : '',
      },
      styles: {
        container: hasStyles ? " className={styles.container}" : '',
      },
    };

    const indexTarget = `${location}index.js`
    const indexTemplate = fs.readFileSync(join(templates, 'index.js'), 'utf8');
    writeFile(indexTarget, indexTemplate, data);

    const componentTarget = `${location}${name}.js`
    const componentTemplate = fs.readFileSync(join(templates, 'component.js'), 'utf8');
    writeFile(componentTarget, componentTemplate, data);

    if (hasStyles) {
      const indexTarget = `${location}${styleFile}.styl`
      const indexTemplate = fs.readFileSync(join(templates, 'component.styl'), 'utf8');
      writeFile(indexTarget, indexTemplate, data);
    }

    if (hasActions) {
      const actionsTarget = `${location}actions.js`
      const actionsTemplate = fs.readFileSync(join(templates, 'actions.js'), 'utf8');
      writeFile(actionsTarget, actionsTemplate, data);
    }

    if (hasConstants) {
      const constantsTarget = `${location}constants.js`
      const constantsTemplate = fs.readFileSync(join(templates, 'constants.js'), 'utf8');
      writeFile(constantsTarget, constantsTemplate, data);
    }

    if (hasReducers) {
      const reducersTarget = `${location}reducer.js`
      const reducersTemplate = fs.readFileSync(join(templates, 'reducer.js'), 'utf8');
      writeFile(reducersTarget, reducersTemplate, data);
    }

    if (hasSelectors) {
      const selectorsTarget = `${location}selectors.js`
      const selectorsTemplate = fs.readFileSync(join(templates, 'selectors.js'), 'utf8');
      writeFile(selectorsTarget, selectorsTemplate, data);
    }
  })
};
