const fs = require("fs");
const mkdirp = require("mkdirp");
const prompts = require("prompts");
const templite = require("templite");
const { join } = require("path");

const questions = require("./questions");

const templates = join(__dirname, "templates");

const writeFile = (target, template, data) => {
  const content = templite(template, data);

  fs.writeFile(target, content, err => {
    if (err) console.error(err);
    else console.log(`:) ${target}`);
  });
};

const createDir = location => {
  mkdirp.sync(location, err => {
    if (err) console.error(err);
    else console.log(`:) ${location}`);
  });
};

module.exports = () => {
  let ok = true;
  const onCancel = () => (ok = false);

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
      hasTests,
      hasStories,
      extension
    } = argv;

    if (!name) {
      return console.error(":( Missing component name.");
    }
    if (!dir) {
      return console.error(":( Missing dir location.");
    }

    const lcName = `${name.charAt(0).toLowerCase()}${name.slice(1)}`;
    const hasSlash = dir.substring(dir.length - 1) === "/";
    const location = `${dir}${!hasSlash ? "/" : ""}${name}/`;
    const testLocation = `${location}__tests__/`;
    const storyLocation = `${location}__stories__/`;
    createDir(location);
    if (hasTests) {
      createDir(testLocation);
    }
    if (hasStories) {
      createDir(storyLocation);
    }

    const data = {
      dir,
      dotDir: dir.replace(/\//g, '.'),
      noSrcDir: dir.replace(/^src\//, ''),
      name,
      imports: {
        actions: hasActions ? "import * as actions from './actions';" : "",
        selectors: hasSelectors
          ? "import * as selectors from './selectors';"
          : "",
        styles: hasStyles ? `import styles from './${lcName}.styl';` : "",
        constants: hasConstants
          ? "import * as constants from './constants';"
          : ""
      },
      styles: {
        container: hasStyles ? " className={styles.container}" : ""
      }
    };

    const targets = [
      {
        target: `${name}.${extension === "ts" ? "tsx" : extension}`,
        targetTemplate: `Component.${extension === "ts" ? "tsx" : extension}`,
        test: `${name}.spec.${extension === "ts" ? "tsx" : extension}`,
        testTemplate: `Component.spec.${
          extension === "ts" ? "tsx" : extension
          }`,
        story: `${name}.story.${extension === "ts" ? "tsx" : extension}`,
        storyTemplate: `Component.story.${
          extension === "ts" ? "tsx" : extension
          }`,
        createIf: true
      },
      { target: `index.${extension}`, createIf: hasIndex },
      {
        target: `${lcName}.styl`,
        targetTemplate: "component.styl",
        createIf: hasStyles
      },
      {
        target: `actions.${extension}`,
        test: `actions.spec.${extension}`,
        createIf: hasActions
      },
      { target: `constants.${extension}`, createIf: hasConstants },
      {
        target: `reducer.${extension}`,
        test: `reducer.spec.${extension}`,
        createIf: hasReducers
      },
      {
        target: `selectors.${extension}`,
        test: `selectors.spec.${extension}`,
        createIf: hasSelectors
      },
      { target: "types.ts", createIf: extension === "ts" },
      { target: "messages.ts", createIf: extension === "ts" }
    ];

    for (let i = 0; i < targets.length; i++) {
      const t = targets[i];
      const {
        target,
        targetTemplate,
        test,
        testTemplate,
        story,
        storyTemplate,
        createIf
      } = t;

      if (!createIf) continue;

      const dest = `${location}${target || targetTemplate}`;
      const file = fs.readFileSync(
        join(templates, extension, targetTemplate || target),
        "utf8"
      );
      writeFile(dest, file, data);

      if (hasTests && (test || testTemplate)) {
        const testDest = `${testLocation}${test || testTemplate}`;
        const testFile = fs.readFileSync(
          join(templates, extension, "__tests__", testTemplate || test),
          "utf8"
        );
        writeFile(testDest, testFile, data);
      }

      if (hasStories && (story || storyTemplate)) {
        const storyDest = `${storyLocation}${story || storyTemplate}`;
        const storyFile = fs.readFileSync(
          join(templates, extension, "__stories__", storyTemplate || story),
          "utf8"
        );
        writeFile(storyDest, storyFile, data);
      }
    }
  });
};
