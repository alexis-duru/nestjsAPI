import { createDocument } from './fs.mjs';
// import { program } from 'commander';

async function main() {
  const commander = await import('commander');
  const program = commander.program;

  program
    .option('--filepath <valeur>', 'Spécifiez le fichier à convertir')
    .option('--fileout <valeur>', 'Spécifiez le fichier de sortie (optionnel)')
    .parse(process.argv);

  const options = program.opts();

  if (options.filepath) {
    createDocument(options.filepath, options.fileout);
  } else {
    console.error(
      'Le paramètre filepath est obligatoire. Utilisez --filepath pour spécifier le fichier à convertir.',
    );
  }
}

main();

// program
//   .option('--filepath <valeur>', 'Spécifiez le fichier à convertir')
//   .option('--fileout <valeur>', 'Spécifiez le fichier de sortie (optionnel)')
//   .parse(process.argv);

// const options = program.opts();

// if (options.filepath) {
//   createDocument(options.filepath, options.fileout);
// } else {
//   console.error(
//     'Le paramètre filepath est obligatoire. Utilisez --filepath pour spécifier le fichier à convertir.',
//   );
// }
