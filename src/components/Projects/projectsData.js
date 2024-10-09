const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Airwards - Transcription',
      description:'Trained diarization and transcription models and built a server to provide these functionalities to over 100 daily users',
      imgSrc: '/assets/projects/airforce.png',
      stack: ['Python', 'FAST API', 'Tensorflow', 'Docker'],
    },
    {
      name: 'Optimizing Matrix Multplication',
      description: 'Using SIMD, Open MP, and Open MPI, optimized matrix multiplication by over 5 times its original speed',
      imgSrc: '/assets/projects/optimize-cs61c.png',
      stack: ['C', 'SIMD', 'Open MP', 'Open MPI'],
    },
    {
      name: 'CS61CPU',
      description: 'Built a CPU in logism that runs actual RISC-V instructions and implemented a 2-state pipeline',
      imgSrc: '/assets/projects/cpu.png',
      stack: ['Logism', 'RISC-V'],
    },
    {
      name: 'TTS',
      description:'Trained a TTS model and developed a server that enables users to train their own voice',
      imgSrc: '/assets/projects/coqui.png',
      stack: ['Python', 'Torch', 'Tensorflow'],
    },
    {
      name: 'Classifier',
      description: 'Utililzed a simple machine learning algorithm to classify handwritten digits in RISC-V',
      imgSrc: '/assets/projects/cs61c.png',
      stack: ['RISC-V'],
    },
    {
      name: 'Gitlet',
      description: 'Built a version-control system that mimics the functionality of Git',
      imgSrc: '/assets/projects/git.jpeg',
      stack: ['Java'],
    },
    {
      name: 'Snake',
      description: 'Developed a playable snake game in C',
      imgSrc: '/assets/projects/snake.png',
      stack: ['C'],
    },
    {
      name: 'Enigma',
      description: 'Recreated the enigma machine used by German soldiers during WWII',
      imgSrc: '/assets/projects/enigma.png',
      stack: ['Java'],
    },
    {
      name: 'Scheme Interpreter',
      description: 'Created an interpreter for the scheme programming language including features such as reading Scheme expressions, calling built-in functions, and more',
      imgSrc: '/assets/projects/scheme.png',
      stack: ['Python', 'Scheme'],
    },
    {
      name: 'MDB Socials',
      description: 'Developed a trivia-like game to familiarize with members of MDB',
      imgSrc: '/assets/projects/mdb.png',
      stack: ['Python'],
    },
    {
      name: 'Ants vs SomeBees',
      description: 'Created a mimic of Plants vs. Zombies game',
      imgSrc: '/assets/projects/ants.png',
      stack: ['Python'],
    },
  ]

  export {projects};