const fs = require('fs');
const mkdirp = require('mkdirp');
const prompts = require('prompts');
const templite = require('templite');
const { join } = require('path');

const questions = require('./questions');

const templates = join(__dirname, 'templates');
const testTemplates = join(__dirname, 'templates', '__tests__');

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

module.exports = () => {
  let ok = true;
  const onCancel = () => ok = false;

  return prompts(questions, { onCancel }).then(argv => {
    if (!ok) {
      return console.log(`:( Init cancelled.`);
    }

    const {
      name,
      dir,
      hasIndex,
      hasActions,
      hasConstants,
      hasReducers,
      hasSelectors,
      hasStyles,
      hasTests
    } = argv;

    if (!name) {
      return console.error(':( Missing component name.');
    }
    if (!dir) {
      return console.error(':( Missing dir location.');
    }

    const lcName = `${name.charAt(0).toLowerCase()}${name.slice(1)}`;
    const hasSlash = dir.substring(dir.length - 1) === '/';
    const location = `${dir}${!hasSlash ? '/' : ''}${name}/`;
    const testLocation = `${location}__tests__/`;
    mkdirp.sync(location, err => {
      if (err) console.error(err);
      else console.log(`:) ${location}`);
    });
    if (hasTests) {
      mkdirp.sync(testLocation, err => {
        if (err) console.error(err);
        else console.log(`:) ${testLocation}`);
      });
    }

    const data = {
      name,
      imports: {
        actions: hasActions ? "import * as actions from './actions';" : '',
        selectors: hasSelectors ? "import * as selectors from './selectors';" : '',
        styles: hasStyles ? `import styles from './${lcName}.styl';` : '',
        constants: hasConstants ? "import * as constants from './constants';" : '',
      },
      styles: {
        container: hasStyles ? " className={styles.container}" : '',
      },
    };

    const targets = [
      {
        target: `${name}.js`,
        targetTemplate: 'Component.js',
        test: `${name}.spec.js`,
        testTemplate: 'Component.spec.js',
        create: true
      },
      { target: 'index.js', create: hasIndex },
      { target: `${lcName}.styl`, targetTemplate: 'component.styl', create: hasStyles },
      { target: 'actions.js', test: 'actions.spec.js', create: hasActions },
      { target: 'constants.js', create: hasConstants },
      { target: 'reducer.js', test: 'reducer.spec.js', create: hasReducers },
      { target: 'selectors.js', test: 'selectors.spec.js', create: hasSelectors },
    ];

    for (let i = 0; i < targets.length; i++) {
      const t = targets[i];
      const { target, targetTemplate, test, testTemplate, create } = t;

      if (!create) continue;

      const dest = `${location}${targetTemplate || target}`
      const file = fs.readFileSync(join(templates, targetTemplate || target), 'utf8');
      writeFile(dest, file, data);

      if (hasTests && (testTemplate || test)) {
        const testDest = `${testLocation}${testTemplate || test}`;
        const testFile = fs.readFileSync(join(testTemplates, testTemplate || test), 'utf8');
        writeFile(testDest, testFile, data);
      }
    }
  })
};
