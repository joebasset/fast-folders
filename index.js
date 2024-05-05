// index.js

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const yargs = require('yargs');


const argv = yargs

    .command('create <js> <types..>', 'Create a new entity', (yargs) => {
        yargs.positional('js', {
            describe: 'Language of the files (js or ts)',
            type: 'string',
            choices: ['js', 'ts']
        }).positional('types', {
            describe: 'Types of entities to create',
            type: 'string',
            array: true
        });
    }, (argv) => {
        const entityTypes = argv.types.slice(0, -1);
        const entityName = argv.types[argv.types.length - 1];
        const isJs = argv?.js === 'js';

        if (!isJs && argv?.js !== 'ts') {
            console.error('Error: You must specify the language as "js" or "ts".');
            return;
        }

        let subPath = '';
        entityTypes.forEach((type) => subPath += type + '/')

        const entityDir = path.join(__dirname, 'src', subPath);

        if (!fs.existsSync(entityDir)) {
            fs.mkdirSync(entityDir, { recursive: true });
        }

        const entityFolder = path.join(entityDir, entityName);
        if (!fs.existsSync(entityFolder)) {
            fs.mkdirSync(entityFolder);


            fs.writeFileSync(path.join(entityFolder, 'styles.css'), '');


            const indexFile = path.join(entityFolder, isJs ? 'index.js' : 'index.ts');
            fs.writeFileSync(indexFile, '');


            let componentContent = `import React from 'react';\n`;
            componentContent += `import './styles.css';\n\n`;
            componentContent += `const ${entityName} = () => {\n`;
            componentContent += `  return (\n`;
            componentContent += `    <div>${entityName}</div>\n`;
            componentContent += `  );\n`;
            componentContent += `}\n\n`;
            componentContent += `export default ${entityName};`;

            const componentFile = path.join(entityFolder, isJs ? `${entityName}.js` : `${entityName}.tsx`);
            fs.writeFileSync(componentFile, componentContent);
            let importExportStatement = `import ${entityName} from './${entityName}';\n\n`;
            importExportStatement += `export default ${entityName};`;

            fs.appendFileSync(indexFile, importExportStatement);


        }


    })
    .demandCommand(1, 'You must specify a command.')
    .help()
    .argv;
