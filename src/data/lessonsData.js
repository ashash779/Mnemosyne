export const lessons = [
  {
    id: 'cell',
    title: "The Cell — Life's Building Block",
    description: 'Discover what cells are, how cell theory was developed, and how the organelles inside work together to keep you alive.',
    readTime: '12 min',
    emoji: '🔬',
    color: '#e8f5ee',
    border: '#7db88a',
    sections: [
      {
        id: 's1',
        title: '1. What Is a Cell?',
        paragraphs: [
          'Every living thing on Earth — from a single bacterium to a blue whale — is made of cells. Cells are the smallest units of life that can carry out all the basic functions needed to survive: taking in nutrients, producing energy, growing, responding to the environment, and reproducing. You are made of roughly 37 trillion of them.',
          'Cells were first observed by the English scientist Robert Hooke in 1665, when he peered at a thin slice of cork under a primitive microscope. He saw a grid of tiny box-like compartments and called them "cells" because they reminded him of the small rooms monks slept in — the Latin word for room is "cella". Of course, Hooke was looking at dead plant cells, so he only saw the rigid cell walls, not the living contents inside.',
          'It wasn\'t until the invention of better microscopes in the early 1800s that scientists began to understand what cells truly are. The development of the cell theory changed biology forever, providing a unifying explanation for the structure of all living organisms.',
        ],
      },
      {
        id: 's2',
        title: '2. Cell Theory',
        paragraphs: [
          'Cell theory is one of the foundational principles of modern biology. It was developed across several decades in the 19th century, built on the work of many scientists. The two most important contributors were Matthias Schleiden, a botanist who concluded in 1838 that all plant tissue is made of cells, and Theodor Schwann, a zoologist who extended this to animals in 1839. Rudolf Virchow added the crucial third principle in 1855.',
          'The three principles of classical cell theory are: (1) All living organisms are composed of one or more cells. (2) The cell is the basic structural and functional unit of life. (3) All cells arise from pre-existing cells — cells cannot be spontaneously generated from non-living matter.',
          'This third principle was revolutionary. It challenged the widespread belief in "spontaneous generation" — the idea that living things could spring from non-living material. Virchow\'s Latin phrase "Omnis cellula e cellula" (every cell from a cell) remains one of biology\'s most important statements. Modern biology has added to cell theory: all cells share a common chemistry and all cells carry hereditary information in the form of DNA.',
          'Understanding that life is fundamentally cellular means that to understand any disease, we must understand what goes wrong at the cellular level. Cancer, for instance, is ultimately a disease of cells that have lost their normal controls on growth and division.',
        ],
      },
      {
        id: 's3',
        title: '3. Two Fundamental Cell Types',
        paragraphs: [
          'All life on Earth falls into one of two fundamental cell types: prokaryotic or eukaryotic. The difference between them is one of the most important divisions in all of biology.',
          'Prokaryotic cells (from the Greek meaning "before nucleus") are the simpler and more ancient type. They have no membrane-bound nucleus — their DNA floats freely in the cytoplasm in a region called the nucleoid. They also have no membrane-bound organelles. Bacteria and archaea are prokaryotes. Despite their simplicity, prokaryotes are extraordinarily successful: they are found in every habitat on Earth, including boiling hot springs and Antarctic ice, and they are the most numerous organisms on the planet.',
          'Eukaryotic cells (from the Greek meaning "true nucleus") are considerably more complex. They contain a true nucleus enclosed by a double membrane, as well as numerous specialised membrane-bound organelles such as mitochondria, the endoplasmic reticulum, and the Golgi apparatus. Plants, animals, fungi, and protists are all eukaryotes. The complexity of eukaryotic cells is thought to have arisen through a process called endosymbiosis — about 1.5 billion years ago, a prokaryote engulfed another and they formed a mutually beneficial partnership, eventually becoming the first eukaryotic cell.',
          'One key difference relevant to biology students: plant cells are eukaryotic and have several unique features absent in animal cells, including a rigid cell wall (made of cellulose), large central vacuoles, and chloroplasts. Animal cells instead have small vacuoles and centrioles that plant cells lack.',
        ],
      },
      {
        id: 's4',
        title: '4. The Organelles',
        paragraphs: [
          'Eukaryotic cells contain a variety of specialised structures called organelles — literally "little organs" — each performing a specific function, just as your organs (heart, lungs, liver) each have dedicated roles. Understanding organelles is essential for understanding how life works at the molecular level.',
          'The nucleus is the control centre, housing the cell\'s DNA and directing all cell activities. Surrounding it is the nuclear envelope, a double membrane punctuated with nuclear pores that allow molecules to pass in and out. Inside the nucleus, the nucleolus manufactures ribosomes. The endoplasmic reticulum (ER) is a vast network of membranes: rough ER (studded with ribosomes) synthesises proteins, while smooth ER produces lipids and detoxifies chemicals. The Golgi apparatus acts as a sorting and shipping centre — it receives proteins from the ER, modifies them, and packages them into vesicles for delivery.',
          'Mitochondria are the powerhouses of the cell, producing ATP through aerobic respiration. Their inner membrane is folded into structures called cristae to maximise the surface area for ATP synthesis. Ribosomes are the protein-building machines, found either free in the cytoplasm or attached to rough ER. Lysosomes contain digestive enzymes and break down waste materials, worn-out organelles, and foreign particles — they are the cell\'s internal recycling system.',
          'Every organelle is essential. Malfunctions in organelles cause diseases: lysosome dysfunction causes storage diseases; mitochondrial diseases impair energy production in tissues that need it most, like muscles and the brain. By understanding organelles, scientists develop targeted treatments for these conditions.',
        ],
      },
    ],
    // flow: section, checkpoint, section, section, checkpoint, section, checkpoint
    flow: [
      { type: 'section', idx: 0 },
      { type: 'checkpoint', idx: 0 },
      { type: 'section', idx: 1 },
      { type: 'section', idx: 2 },
      { type: 'checkpoint', idx: 1 },
      { type: 'section', idx: 3 },
      { type: 'checkpoint', idx: 2 },
    ],
    checkpoints: [
      {
        idx: 0,
        questions: [
          {
            question: 'Who first observed and named cells in 1665?',
            options: ['Matthias Schleiden', 'Robert Hooke', 'Rudolf Virchow', 'Theodor Schwann'],
            correctIndex: 1,
            hint: 'Think about who used a microscope to look at cork and named cells after monks\' rooms.',
          },
          {
            question: 'What did Robert Hooke observe when he first saw cells?',
            options: ['Living animal cells moving', 'Dead plant cell walls in cork', 'Bacteria dividing', 'A cell nucleus'],
            correctIndex: 1,
            hint: 'Hooke was looking at cork — a plant material. He could only see the outer walls, not the living contents.',
          },
          {
            question: 'Which statement best describes what a cell is?',
            options: [
              'A chemical compound found in all living tissue',
              'The smallest unit of life capable of carrying out basic life functions',
              'A microscopic particle found only in animals',
              'A type of protein that builds body structures',
            ],
            correctIndex: 1,
            hint: 'Cells are the smallest things we consider to be truly "alive".',
          },
        ],
      },
      {
        idx: 1,
        questions: [
          {
            question: 'What is the third principle of cell theory, added by Rudolf Virchow?',
            options: [
              'All cells have a nucleus',
              'Cells can arise from non-living matter',
              'All cells arise from pre-existing cells',
              'Only animal tissue is made of cells',
            ],
            correctIndex: 2,
            hint: 'Virchow\'s famous Latin phrase was "Omnis cellula e cellula" — every cell from a cell.',
          },
          {
            question: 'What is the key structural difference between prokaryotic and eukaryotic cells?',
            options: [
              'Prokaryotes are larger',
              'Eukaryotes have no cell membrane',
              'Prokaryotes have no membrane-bound nucleus',
              'Eukaryotes cannot reproduce',
            ],
            correctIndex: 2,
            hint: '"Pro-karyote" means "before nucleus" — their DNA floats freely in the cytoplasm.',
          },
        ],
      },
      {
        idx: 2,
        questions: [
          {
            question: 'Which organelle is known as the "powerhouse of the cell"?',
            options: ['Ribosome', 'Golgi apparatus', 'Nucleus', 'Mitochondria'],
            correctIndex: 3,
            hint: 'This organelle produces ATP through aerobic respiration and has folded inner membranes called cristae.',
          },
          {
            question: 'What is the function of the Golgi apparatus?',
            options: [
              'To produce ATP for the cell',
              'To synthesise DNA during division',
              'To sort, modify and package proteins for delivery',
              'To break down waste and old organelles',
            ],
            correctIndex: 2,
            hint: 'Think of it as the cell\'s "post office" — it receives packages from the ER and sends them where they need to go.',
          },
          {
            question: 'Which organelle contains digestive enzymes and acts as the cell\'s recycling system?',
            options: ['Vacuole', 'Lysosome', 'Ribosome', 'Endoplasmic reticulum'],
            correctIndex: 1,
            hint: 'This organelle breaks down worn-out organelles and foreign particles using powerful enzymes.',
          },
        ],
      },
    ],
  },

  {
    id: 'photosynthesis',
    title: 'Photosynthesis — How Plants Make Food',
    description: 'Explore how plants use sunlight, water, and carbon dioxide to produce glucose — and why this process is the foundation of almost all life on Earth.',
    readTime: '14 min',
    emoji: '🌱',
    color: '#f5f0e8',
    border: '#d4c4a8',
    sections: [
      {
        id: 's1',
        title: '1. What Is Photosynthesis?',
        paragraphs: [
          'Photosynthesis is one of the most important chemical processes on Earth. It is the process by which plants, algae, and some bacteria convert light energy into chemical energy stored in glucose. Without photosynthesis, there would be no food chains, no breathable oxygen, and almost no life on this planet as we know it.',
          'The overall equation for photosynthesis is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. In words: six molecules of carbon dioxide and six molecules of water, using light energy, produce one molecule of glucose and six molecules of oxygen gas. The glucose is used by the plant for energy and to build new tissues; the oxygen is a by-product released into the atmosphere — which is why plants are so vital to the air we breathe.',
          'Photosynthesis takes place in the chloroplasts — organelles found in plant cells and algae. Chloroplasts contain a green pigment called chlorophyll, which absorbs light energy (particularly from the red and blue parts of the visible spectrum) and reflects green light — which is why plants appear green. The chloroplast has an outer double membrane and an inner system of stacked membrane discs called thylakoids, arranged in stacks called grana. The fluid surrounding the thylakoids is called the stroma.',
          'Photosynthesis is split into two main stages: the light-dependent reactions (which happen in the thylakoid membranes) and the light-independent reactions, also called the Calvin cycle (which happen in the stroma). Together they transform simple inorganic molecules into energy-rich organic glucose.',
        ],
      },
      {
        id: 's2',
        title: '2. The Light-Dependent Reactions',
        paragraphs: [
          'The light-dependent reactions happen in the thylakoid membranes of the chloroplast. As the name suggests, they require direct light energy. When light hits a chlorophyll molecule, it excites electrons to a higher energy state. These energised electrons are passed along a series of proteins embedded in the thylakoid membrane called the electron transport chain.',
          'As electrons move along the chain, they release energy, which is used to pump hydrogen ions (protons) across the thylakoid membrane. This creates a concentration gradient, and the protons flow back through an enzyme called ATP synthase — much like water flowing through a turbine — generating ATP (adenosine triphosphate), the cell\'s energy currency.',
          'At the same time, water molecules are split in a process called photolysis: 2H₂O → 4H⁺ + 4e⁻ + O₂. This is where the oxygen produced by photosynthesis comes from — it\'s released as a by-product when water is split. The electrons from water replace those lost by chlorophyll. The hydrogen ions and energised electrons are ultimately used to produce NADPH, another energy-carrying molecule.',
          'So the outputs of the light-dependent reactions are ATP, NADPH, and oxygen. The ATP and NADPH are then used to power the Calvin cycle. Think of this stage as converting light energy into portable chemical energy that the plant can use to actually build glucose.',
        ],
      },
      {
        id: 's3',
        title: '3. The Calvin Cycle',
        paragraphs: [
          'The Calvin cycle (also called the light-independent reactions or carbon fixation) takes place in the stroma of the chloroplast. Despite being called "light-independent," these reactions still depend on photosynthesis — they require the ATP and NADPH produced in the light-dependent stage. They just don\'t directly use light themselves.',
          'The cycle was discovered by Melvin Calvin and his colleagues in the 1950s, earning Calvin the Nobel Prize in Chemistry in 1961. The key enzyme driving the cycle is called RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygenase) — it\'s the most abundant enzyme on Earth, and it catalyses the first step: fixing CO₂ from the air onto a 5-carbon molecule called RuBP (ribulose bisphosphate).',
          'The resulting 6-carbon compound is immediately unstable and splits into two 3-carbon molecules called G3P (glyceraldehyde-3-phosphate). Using ATP and NADPH from the light reactions, G3P is reduced and some molecules are used to regenerate RuBP, keeping the cycle going. Some G3P molecules exit the cycle and are used to build glucose and other organic molecules.',
          'For every three turns of the Calvin cycle (fixing three CO₂ molecules), one net G3P molecule is produced. It takes two G3P molecules to make one glucose. So in total, six turns of the cycle — using 18 ATP and 12 NADPH — are needed to produce one glucose molecule. The Calvin cycle is therefore an energy-expensive but crucial process for building the organic matter that fuels nearly all life.',
        ],
      },
      {
        id: 's4',
        title: '4. Factors Affecting the Rate of Photosynthesis',
        paragraphs: [
          'The rate at which a plant photosynthesises is affected by several environmental factors. Understanding these is important for agriculture, ecology, and understanding how plants will respond to climate change.',
          'Light intensity is a major limiting factor. As light intensity increases, the rate of photosynthesis increases — up to a point. Beyond a certain intensity (the light saturation point), the rate plateaus because other factors become limiting. In dim conditions, photosynthesis is slow and the plant may struggle to produce enough glucose to meet its energy needs.',
          'Carbon dioxide concentration affects photosynthesis directly, since CO₂ is a raw material. Increasing CO₂ concentration typically increases the rate of photosynthesis, which is why commercial greenhouses often pump extra CO₂ into the air. Temperature also plays a key role: as temperature rises, the enzymes involved in the Calvin cycle (particularly RuBisCO) work faster, increasing the rate. However, beyond the optimum temperature (around 25–35°C for most plants), enzymes begin to denature and the rate drops sharply.',
          'Water availability affects photosynthesis indirectly — when water is scarce, plants close their stomata to prevent water loss, which also stops CO₂ from entering and slows photosynthesis significantly. Chlorophyll concentration also matters: plants deficient in magnesium (a component of chlorophyll) turn yellow (chlorosis) and photosynthesize poorly. Understanding these limiting factors allows farmers and horticulturists to optimise growing conditions and increase crop yields.',
        ],
      },
    ],
    flow: [
      { type: 'section', idx: 0 },
      { type: 'checkpoint', idx: 0 },
      { type: 'section', idx: 1 },
      { type: 'section', idx: 2 },
      { type: 'checkpoint', idx: 1 },
      { type: 'section', idx: 3 },
      { type: 'checkpoint', idx: 2 },
    ],
    checkpoints: [
      {
        idx: 0,
        questions: [
          {
            question: 'What is the overall equation for photosynthesis?',
            options: [
              'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy',
              '6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂',
              '6O₂ + glucose → CO₂ + H₂O',
              'H₂O + CO₂ → O₂ + ATP',
            ],
            correctIndex: 1,
            hint: 'Photosynthesis is the opposite of respiration — it takes in CO₂ and water to make glucose and oxygen.',
          },
          {
            question: 'Where does photosynthesis take place in plant cells?',
            options: ['Mitochondria', 'Nucleus', 'Chloroplasts', 'Cell wall'],
            correctIndex: 2,
            hint: 'These organelles contain chlorophyll and are found in plant cells — they\'re green!',
          },
          {
            question: 'What is chlorophyll and what does it do?',
            options: [
              'An enzyme that splits water molecules',
              'A green pigment that absorbs light energy',
              'A protein that produces ATP',
              'A carbohydrate stored in plant cells',
            ],
            correctIndex: 1,
            hint: 'It\'s the reason plants look green — it reflects green light and absorbs red and blue wavelengths.',
          },
        ],
      },
      {
        idx: 1,
        questions: [
          {
            question: 'Where do the light-dependent reactions take place?',
            options: ['Stroma of the chloroplast', 'Thylakoid membranes', 'Cell membrane', 'Mitochondrial matrix'],
            correctIndex: 1,
            hint: 'Thylakoids are the stacked disc-shaped membranes inside the chloroplast — light hits them directly.',
          },
          {
            question: 'What process produces the oxygen released during photosynthesis?',
            options: ['Carbon fixation', 'ATP synthesis', 'Photolysis of water', 'The Calvin cycle'],
            correctIndex: 2,
            hint: 'Water (H₂O) is split using light energy — the oxygen is a by-product of breaking water apart.',
          },
          {
            question: 'What are the two main products of the light-dependent reactions used in the Calvin cycle?',
            options: ['Glucose and oxygen', 'ATP and NADPH', 'CO₂ and water', 'RuBP and G3P'],
            correctIndex: 1,
            hint: 'Think of the light reactions as charging batteries — they store energy in two forms that power the next stage.',
          },
        ],
      },
      {
        idx: 2,
        questions: [
          {
            question: 'What enzyme is central to the Calvin cycle and is the most abundant enzyme on Earth?',
            options: ['ATP synthase', 'DNA polymerase', 'RuBisCO', 'Amylase'],
            correctIndex: 2,
            hint: 'This enzyme "fixes" CO₂ from the air onto a 5-carbon molecule. Its full name is very long!',
          },
          {
            question: 'Which factor, when increased beyond the optimum temperature, causes photosynthesis to slow down?',
            options: [
              'More light becomes available',
              'Enzymes begin to denature',
              'CO₂ concentration drops',
              'Chlorophyll breaks down',
            ],
            correctIndex: 1,
            hint: 'Enzymes are sensitive to temperature — too hot and their 3D shape changes and they stop working.',
          },
        ],
      },
    ],
  },

  {
    id: 'circulatory',
    title: 'The Human Circulatory System',
    description: 'Follow the journey of blood through your heart and vessels, and learn how your body delivers oxygen to every cell.',
    readTime: '13 min',
    emoji: '🫀',
    color: '#f0f5f2',
    border: '#b5d5c5',
    sections: [
      {
        id: 's1',
        title: '1. Overview of Circulation',
        paragraphs: [
          'Your circulatory system is a remarkable transport network that keeps every one of your 37 trillion cells supplied with oxygen and nutrients, while removing carbon dioxide and waste products. It consists of the heart (a muscular pump), blood vessels (the highways), and blood (the transport medium). Every minute, the average heart pumps about 5 litres of blood — your entire blood supply — around the body.',
          'Humans have a double circulatory system, meaning blood passes through the heart twice for each complete circuit of the body. The first circuit is the pulmonary circulation: deoxygenated blood travels from the right side of the heart to the lungs, picks up oxygen and releases CO₂, then returns to the left side of the heart. The second circuit is the systemic circulation: oxygenated blood travels from the left side of the heart to all other organs and tissues, delivers oxygen and picks up CO₂, then returns to the right side of the heart.',
          'The advantage of a double circulatory system is that blood arrives at the organs under high pressure, having been re-pressurised by the left ventricle after passing through the lungs. This makes the delivery of oxygen much more efficient than the single circulatory system found in fish, where blood loses pressure after passing through the gills.',
          'The circulatory system works in close partnership with the respiratory system. Without the lungs continuously loading oxygen into the blood and removing CO₂, the circulatory system would quickly become unable to sustain life. Together, these two systems represent one of the most elegant examples of physiological coordination in the human body.',
        ],
      },
      {
        id: 's2',
        title: '2. The Heart',
        paragraphs: [
          'The heart is a hollow, muscular organ roughly the size of your fist, located slightly left of centre in the chest cavity. It is surrounded by a protective membrane called the pericardium and its wall is made of a specialised muscle called cardiac muscle — unique in that it contracts rhythmically without tiring and without conscious control.',
          'The heart has four chambers: two atria (singular: atrium) at the top and two ventricles at the bottom. The right side handles deoxygenated blood; the left side handles oxygenated blood. The two sides are separated by a muscular wall called the septum. The atria are thin-walled receiving chambers; the ventricles are the powerful pumping chambers. The left ventricle has the thickest walls because it must pump blood around the entire body against high systemic pressure.',
          'Blood flow through the heart is controlled by four valves that prevent backflow. The atrioventricular valves (mitral valve on the left, tricuspid on the right) separate the atria from the ventricles. The semilunar valves (aortic and pulmonary) are at the exits of the ventricles. When ventricles contract, the AV valves close (producing the "lub" sound), and when ventricles relax, the semilunar valves close (the "dub" sound) — giving the familiar "lub-dub" heartbeat.',
          'The heart\'s rhythm is initiated by the sinoatrial (SA) node — a cluster of specialised cells in the right atrium often called the "pacemaker." The SA node generates an electrical impulse roughly 60–100 times per minute. This impulse spreads across both atria, causing them to contract, then reaches the atrioventricular (AV) node, which briefly delays the signal before passing it to the ventricles via the Bundle of His and Purkinje fibres — ensuring the ventricles contract in a coordinated wave from the bottom up.',
        ],
      },
      {
        id: 's3',
        title: '3. Blood Vessels',
        paragraphs: [
          'Blood travels through three types of vessels: arteries, veins, and capillaries — each with a structure perfectly matched to its function.',
          'Arteries carry blood away from the heart (a useful memory trick: "A" for "Away"). They experience high pressure with each heartbeat, so they have thick, elastic walls with a large amount of smooth muscle. This elasticity allows them to stretch when the ventricles contract and recoil between beats, helping to maintain blood flow. The largest artery is the aorta (about 3 cm diameter), which carries oxygenated blood from the left ventricle. Arteries branch into smaller arterioles, which can constrict or dilate to regulate blood flow to different organs.',
          'Veins return blood to the heart and experience much lower pressure — they have thinner walls and a wider lumen than arteries. The reduced pressure means blood could pool or flow backwards, so veins contain semi-lunar valves to prevent backflow. Skeletal muscle contractions help push blood along veins when you move. The largest veins are the vena cava, which drain blood into the right atrium.',
          'Capillaries are the smallest vessels — just one cell thick — and they are where the actual exchange of materials happens. Their thin walls and huge collective surface area (if unrolled, your capillaries would cover two tennis courts) allow oxygen and glucose to diffuse out to cells, while CO₂ and waste diffuse in. Capillary walls are so thin that even red blood cells must squeeze through in single file. No cell in the body is more than about two or three cells away from a capillary.',
        ],
      },
      {
        id: 's4',
        title: '4. Blood Composition',
        paragraphs: [
          'Blood is a complex tissue, not just a simple fluid. It consists of a pale yellow liquid called plasma (about 55% of blood volume) in which three types of cells and cellular fragments are suspended: red blood cells, white blood cells, and platelets.',
          'Red blood cells (erythrocytes) are the most numerous — about 5 million per mm³ of blood. They are biconcave discs, lacking a nucleus at maturity (giving more space for haemoglobin), and their distinctive shape increases surface area for gas exchange. Each red blood cell contains about 280 million molecules of haemoglobin — a protein with an iron-containing haem group that binds reversibly to oxygen. In the lungs, where oxygen concentration is high, haemoglobin loads oxygen to form oxyhaemoglobin (bright red). In respiring tissues where O₂ is low, it releases the oxygen and picks up CO₂.',
          'White blood cells (leukocytes) are part of the immune system. There are several types: phagocytes engulf and destroy pathogens and debris; lymphocytes produce antibodies (B cells) or directly attack infected cells (T cells). Though far fewer in number than red blood cells, white blood cells are crucial defenders — their count surges during infection. Platelets are not true cells but fragments of larger cells called megakaryocytes. When a blood vessel is damaged, platelets aggregate at the site and trigger a cascade of clotting reactions, ultimately forming a fibrin mesh that seals the wound.',
          'Plasma carries dissolved substances throughout the body: glucose, amino acids, hormones, antibodies, clotting proteins, and waste products like urea and CO₂. About 90% of plasma is water, making it an ideal solvent. Plasma proteins like albumin help maintain the osmotic balance that keeps fluid inside blood vessels rather than leaking into tissues. When plasma leaks out of capillaries into surrounding tissue, it becomes tissue fluid; this is returned to the circulation by the lymphatic system.',
        ],
      },
    ],
    flow: [
      { type: 'section', idx: 0 },
      { type: 'checkpoint', idx: 0 },
      { type: 'section', idx: 1 },
      { type: 'section', idx: 2 },
      { type: 'checkpoint', idx: 1 },
      { type: 'section', idx: 3 },
      { type: 'checkpoint', idx: 2 },
    ],
    checkpoints: [
      {
        idx: 0,
        questions: [
          {
            question: 'What does "double circulatory system" mean?',
            options: [
              'The heart beats twice per second',
              'Blood passes through the heart twice per complete body circuit',
              'There are two hearts working together',
              'Blood can flow in two directions simultaneously',
            ],
            correctIndex: 1,
            hint: 'One circuit goes to the lungs; the other goes to the rest of the body. Blood visits the heart between each circuit.',
          },
          {
            question: 'What is the advantage of a double circulatory system over a single one?',
            options: [
              'It uses less energy',
              'Blood arrives at organs under high pressure, making oxygen delivery more efficient',
              'Blood can carry more CO₂',
              'The heart can be smaller',
            ],
            correctIndex: 1,
            hint: 'After the lungs, blood is re-pressurised before going to the rest of the body — keeping delivery efficient.',
          },
        ],
      },
      {
        idx: 1,
        questions: [
          {
            question: 'Why does the left ventricle have thicker walls than the right ventricle?',
            options: [
              'It handles more blood volume',
              'It pumps blood to the lungs only',
              'It must pump blood around the entire body against high pressure',
              'It contains more valves',
            ],
            correctIndex: 2,
            hint: 'The right ventricle only pumps to the nearby lungs; the left must push blood all the way around the body.',
          },
          {
            question: 'What produces the "lub-dub" sound of the heartbeat?',
            options: [
              'Blood rushing through arteries',
              'Heart valves opening and closing',
              'The SA node firing electrical impulses',
              'Cardiac muscle contracting',
            ],
            correctIndex: 1,
            hint: '"Lub" is the AV valves closing when ventricles contract; "dub" is the semilunar valves closing when ventricles relax.',
          },
          {
            question: 'What is the role of the sinoatrial (SA) node?',
            options: [
              'To filter blood entering the heart',
              'To initiate the electrical impulse that controls heart rhythm',
              'To pump blood into the aorta',
              'To prevent blood from flowing backwards',
            ],
            correctIndex: 1,
            hint: 'It\'s often called the heart\'s natural "pacemaker" — it generates the signal that starts each heartbeat.',
          },
        ],
      },
      {
        idx: 2,
        questions: [
          {
            question: 'Why do arteries have thicker, more elastic walls than veins?',
            options: [
              'They carry deoxygenated blood',
              'They must withstand the high pressure of blood leaving the heart',
              'They have more valves to control flow',
              'They are longer than veins',
            ],
            correctIndex: 1,
            hint: 'Blood leaves the heart at high pressure — arterial walls must stretch and recoil with every heartbeat.',
          },
          {
            question: 'What is the main function of haemoglobin in red blood cells?',
            options: [
              'To fight infections and pathogens',
              'To carry and release oxygen around the body',
              'To trigger blood clotting at wound sites',
              'To transport glucose to cells',
            ],
            correctIndex: 1,
            hint: 'Haemoglobin binds to oxygen in the lungs and releases it where cells need it most.',
          },
        ],
      },
    ],
  },

  // ── LESSON 4 ──────────────────────────────────────────────────────────────
  {
    id: 'dna-genetics',
    title: 'DNA & Genetics — The Blueprint of Life',
    description: 'Uncover the structure of DNA, how genes control traits, how inheritance works, and what mutations mean for living organisms.',
    readTime: '15 min',
    emoji: '🧬',
    color: '#eef5ff',
    border: '#a0b8d8',
    sections: [
      {
        id: 's1',
        title: '1. What Is DNA?',
        paragraphs: [
          'DNA — deoxyribonucleic acid — is the molecule that carries the genetic instructions for the development, functioning, growth, and reproduction of all known living organisms. Every cell in your body (with a few exceptions like mature red blood cells) contains the same DNA, yet your body has over 200 different types of cells — from neurons to muscle fibres to skin cells — because different genes are switched on or off in each cell type.',
          'DNA is structured as a double helix: two long strands of nucleotides wound around each other like a twisted ladder. Each nucleotide consists of a phosphate group, a deoxyribose sugar, and one of four nitrogenous bases — adenine (A), thymine (T), guanine (G), or cytosine (C). The bases pair specifically across the two strands: A always pairs with T (via two hydrogen bonds), and G always pairs with C (via three hydrogen bonds). This complementary base pairing is the key to how DNA replicates and how genetic information is read.',
          'If you were to unravel all the DNA from a single human cell and lay it end to end, it would stretch about 2 metres long — yet it is coiled so efficiently around proteins called histones that it fits inside a nucleus just 6 micrometres wide. The total human genome contains roughly 3.2 billion base pairs of DNA, organised into 23 pairs of chromosomes. Sequencing this entire genome took 13 years and was completed in 2003 as part of the Human Genome Project.',
          'DNA stores information in the sequence of its bases — much like how letters in an alphabet spell out words, the order of A, T, G, and C along a DNA strand spells out genetic instructions. A gene is a specific sequence of base pairs that encodes the instructions for making one protein (or occasionally an RNA molecule). Humans have approximately 20,000 protein-coding genes, though these account for less than 2% of the total genome — the function of much of the remaining DNA is still an active area of research.',
        ],
      },
      {
        id: 's2',
        title: '2. Genes and Chromosomes',
        paragraphs: [
          'A chromosome is a long, tightly wound molecule of DNA packaged with histone proteins. Humans have 46 chromosomes arranged in 23 pairs — one chromosome from each pair inherited from your mother, the other from your father. This double set is called diploid (2n). Sperm and egg cells (gametes) are haploid (n), containing only one set of 23 chromosomes, so that when they fuse at fertilisation the full 46-chromosome count is restored.',
          'A gene occupies a specific location on a chromosome called its locus (plural: loci). Different versions of the same gene are called alleles. For example, the gene for ABO blood type has three major alleles (IA, IB, and i), and each person inherits two of them — one from each parent. The combination of alleles a person carries is their genotype; the observable trait that results is their phenotype.',
          'Some chromosomes carry many genes while others carry fewer — chromosome 1, the largest, contains about 2,000 genes, while the Y chromosome carries fewer than 100. The sex chromosomes (X and Y) determine biological sex: individuals with two X chromosomes (XX) are typically female; those with one X and one Y (XY) are typically male. Many traits unrelated to sex are encoded on the X chromosome — these are called X-linked traits, and they show different inheritance patterns in males and females because males have only one X.',
          'Genes do not act in isolation — most traits are polygenic (controlled by multiple genes). Height, skin colour, and intelligence are all polygenic traits influenced by dozens or hundreds of genes, as well as environmental factors. This is why the range of variation in these traits is continuous rather than falling into distinct categories. The study of how genes and the environment interact to produce observable traits is one of the most active areas of modern biology.',
        ],
      },
      {
        id: 's3',
        title: '3. How Traits Are Inherited — Mendelian Genetics',
        paragraphs: [
          'The foundation of modern genetics was laid by Gregor Mendel, an Augustinian friar who conducted careful breeding experiments with pea plants in the 1860s. Mendel tracked easily observable traits — seed colour, seed shape, plant height — across multiple generations, recording and counting thousands of offspring. His meticulous data revealed predictable patterns of inheritance that we now call Mendelian genetics.',
          'Mendel\'s first law, the Law of Segregation, states that each organism carries two alleles for each trait, and these alleles separate (segregate) during gamete formation so that each gamete carries only one. Mendel\'s second law, the Law of Independent Assortment, states that alleles of different genes are distributed into gametes independently of each other (though we now know this only applies to genes on different chromosomes).',
          'Dominance is a key concept in Mendelian genetics. A dominant allele (written in upper case, e.g. R) masks the effect of a recessive allele (lower case, r) when both are present. An organism with two identical alleles (RR or rr) is homozygous; one with two different alleles (Rr) is heterozygous. A Punnett square is a grid tool for predicting the probability of offspring genotypes. For a cross between two heterozygous parents (Rr × Rr), the predicted offspring ratios are 1 RR : 2 Rr : 1 rr in genotype, and 3 dominant phenotype : 1 recessive phenotype.',
          'Not all traits follow strict Mendelian dominance. Incomplete dominance produces an intermediate phenotype in heterozygotes — for example, crossing red (RR) and white (rr) snapdragons produces pink (Rr) offspring. Codominance, seen in ABO blood typing, occurs when both alleles are fully expressed simultaneously — type AB individuals show both A and B antigens on their red blood cells. These variations on Mendel\'s laws reflect the molecular reality that genes interact in complex ways.',
        ],
      },
      {
        id: 's4',
        title: '4. Mutations and Genetic Variation',
        paragraphs: [
          'A mutation is any change in the nucleotide sequence of DNA. Mutations can range from a single base change (a point mutation) to large rearrangements of entire chromosomal sections. They can be caused by errors in DNA replication, exposure to mutagens (UV radiation, certain chemicals, X-rays), or viral infections. Cells have elaborate DNA repair systems that catch and correct most mutations — it is estimated that billions of DNA repair events happen in your cells every day.',
          'Point mutations come in several forms. A substitution replaces one base with another — if this changes the amino acid coded for, it is a missense mutation; if it creates a premature stop codon, it is a nonsense mutation; if the same amino acid is still coded (due to the redundancy of the genetic code), it is a silent mutation. Insertions and deletions add or remove base pairs from the sequence. These are often more damaging than substitutions because they cause a frameshift — shifting the reading frame of the genetic code so that every downstream codon is read incorrectly.',
          'Genetic variation — differences in DNA sequences between individuals — is essential for evolution and for species to adapt to changing environments. Natural mutations over generations are the ultimate source of all genetic variation. Sexual reproduction shuffles existing variation through the random assortment of chromosomes and crossing over (the exchange of chromosome segments between homologous chromosomes during meiosis). Without genetic variation, natural selection would have nothing to act on.',
          'Some mutations are harmful (causing genetic diseases like cystic fibrosis or sickle cell disease), some are neutral (having no effect on fitness), and a small number are beneficial (increasing survival or reproduction). Sickle cell disease is caused by a single base substitution in the gene coding for haemoglobin, changing one amino acid and causing red blood cells to take an abnormal crescent shape. Intriguingly, carrying one copy of the sickle cell allele (heterozygous) provides some protection against malaria — a powerful example of how even a "harmful" mutation can be beneficial in certain environments.',
        ],
      },
    ],
    flow: [
      { type: 'section', idx: 0 },
      { type: 'checkpoint', idx: 0 },
      { type: 'section', idx: 1 },
      { type: 'section', idx: 2 },
      { type: 'checkpoint', idx: 1 },
      { type: 'section', idx: 3 },
      { type: 'checkpoint', idx: 2 },
    ],
    checkpoints: [
      {
        idx: 0,
        questions: [
          {
            question: 'Which bases pair together in a DNA molecule?',
            options: [
              'A with G, and T with C',
              'A with T, and G with C',
              'A with C, and G with T',
              'All four bases pair randomly',
            ],
            correctIndex: 1,
            hint: 'Remember: A and T both have four letters — they pair together. G and C pair via three hydrogen bonds.',
          },
          {
            question: 'Approximately how many base pairs does the human genome contain?',
            options: ['3.2 million', '320,000', '3.2 billion', '32 billion'],
            correctIndex: 2,
            hint: 'Think of the Human Genome Project — it took 13 years to sequence the full genome. That\'s a LOT of base pairs.',
          },
          {
            question: 'What is a gene?',
            options: [
              'A chromosome containing all DNA instructions',
              'A specific sequence of base pairs encoding instructions for making a protein',
              'A type of histone protein that winds DNA',
              'The sugar-phosphate backbone of DNA',
            ],
            correctIndex: 1,
            hint: 'Think of genes as specific "words" in the DNA "language" that tell a cell how to build one protein.',
          },
        ],
      },
      {
        idx: 1,
        questions: [
          {
            question: 'What is a Punnett square used for?',
            options: [
              'Drawing the structure of a DNA molecule',
              'Predicting the probability of offspring genotypes',
              'Mapping the location of genes on chromosomes',
              'Calculating mutation rates',
            ],
            correctIndex: 1,
            hint: 'Mendel used careful counting of offspring — a Punnett square is the grid tool that models his ratios.',
          },
          {
            question: 'A cross between two heterozygous parents (Rr × Rr) produces offspring in a 3:1 phenotype ratio. What fraction of offspring show the recessive phenotype?',
            options: ['1/4', '1/2', '3/4', '1/3'],
            correctIndex: 0,
            hint: 'Draw the Punnett square: RR, Rr, Rr, rr. The recessive (rr) appears in only one out of four boxes.',
          },
        ],
      },
      {
        idx: 2,
        questions: [
          {
            question: 'What type of mutation shifts the reading frame of the genetic code?',
            options: ['A substitution mutation', 'A silent mutation', 'An insertion or deletion', 'A missense mutation'],
            correctIndex: 2,
            hint: 'Adding or removing a base pair shifts every codon downstream — like removing a letter from every word in a sentence.',
          },
          {
            question: 'Why does carrying one copy of the sickle cell allele provide an advantage in some regions?',
            options: [
              'It increases red blood cell production',
              'It provides some protection against malaria',
              'It prevents all blood disorders',
              'It speeds up immune responses',
            ],
            correctIndex: 1,
            hint: 'This is a classic example of heterozygote advantage — the "harmful" allele provides a survival benefit in malaria-prone environments.',
          },
        ],
      },
    ],
  },

  // ── LESSON 5 ──────────────────────────────────────────────────────────────
  {
    id: 'mitosis-meiosis',
    title: 'Mitosis & Meiosis — How Cells Divide',
    description: 'Learn why cells divide, how mitosis creates identical daughter cells, how meiosis produces gametes, and the key differences between the two processes.',
    readTime: '13 min',
    emoji: '🔄',
    color: '#f0fce8',
    border: '#7db88a',
    sections: [
      {
        id: 's1',
        title: '1. Why Cells Divide',
        paragraphs: [
          'Cell division is one of the most fundamental processes in biology. Without it, growth would be impossible, damaged tissues could not be repaired, and reproduction — at least for multicellular organisms — would not exist. Every human being begins as a single fertilised egg cell, which divides over and over again to produce the trillions of cells that make up an adult body. Even once you stop growing, your cells continue to divide constantly: your bone marrow produces millions of new blood cells every second, and the lining of your gut is replaced entirely every few days.',
          'Cells divide for three main reasons: growth (increasing the number of cells in a developing organism), repair and replacement (replacing cells that have died or been damaged), and reproduction (producing sperm, eggs, and in some organisms, offspring directly through asexual reproduction). The type of division used depends on the purpose. Mitosis produces two genetically identical daughter cells for growth and repair. Meiosis produces four genetically unique gametes for sexual reproduction.',
          'Before a cell divides, it must copy all of its DNA so that each daughter cell receives a complete genome. This copying process — DNA replication — happens during the S phase of interphase. The double helix unwinds, and each strand serves as a template for building a new complementary strand. The enzyme DNA polymerase assembles new nucleotides, always reading the template in the 3\'→5\' direction. The result is two identical DNA double helices, each consisting of one original strand and one new strand — a process called semi-conservative replication, confirmed experimentally by Meselson and Stahl in 1958.',
          'The cell cycle is the ordered sequence of events that a cell goes through from one division to the next. It consists of interphase (G1, S, and G2 sub-phases, during which the cell grows and replicates DNA) and the M phase (mitosis or meiosis plus cytokinesis). The duration of the cell cycle varies enormously: rapidly dividing cells like gut epithelial cells complete a cycle in about 12–24 hours, while some neurons never divide at all once they are mature. The cycle is regulated by a series of checkpoints that ensure each stage is completed correctly before the next begins.',
        ],
      },
      {
        id: 's2',
        title: '2. The Stages of Mitosis',
        paragraphs: [
          'Mitosis is the process of nuclear division that produces two daughter nuclei genetically identical to the parent. It is used for growth, repair, and asexual reproduction. Mitosis is typically divided into five stages: prophase, metaphase, anaphase, telophase, and cytokinesis (though strictly speaking, cytokinesis is the division of the cytoplasm, separate from nuclear division).',
          'Prophase is the first and longest stage. The chromatin condenses into distinct, visible X-shaped chromosomes, each consisting of two identical sister chromatids joined at the centromere. The nucleolus disappears, and the nuclear envelope begins to break down. Meanwhile, the mitotic spindle — a structure made of tubulin protein fibres — starts forming between the two centrosomes at opposite poles of the cell. In prometaphase (sometimes considered part of prophase), the nuclear envelope fully disintegrates and spindle fibres attach to the centromeres of each chromosome.',
          'In metaphase, all chromosomes become aligned along the cell\'s equatorial plane (the metaphase plate), each attached to spindle fibres from both poles. This ensures each daughter cell will receive one copy of every chromosome. The spindle assembly checkpoint ensures every chromosome is correctly attached before the cell proceeds. Anaphase begins when cohesin proteins holding sister chromatids together are cleaved — the chromatids (now individual chromosomes) are pulled to opposite poles by shortening spindle fibres. The cell also elongates as polar spindle fibres push the poles apart.',
          'Telophase is the reverse of prophase: chromosomes decondense, new nuclear envelopes form around each set of chromosomes, and the nucleoli reappear. Cytokinesis then physically divides the cell in two. In animal cells, a contractile ring of actin and myosin pinches the cell inward to create a cleavage furrow. In plant cells, a cell plate is built from the inside out using vesicles from the Golgi apparatus. The end result is two daughter cells, each with the same number and type of chromosomes as the parent — genetically identical clones.',
        ],
      },
      {
        id: 's3',
        title: '3. Meiosis and Sexual Reproduction',
        paragraphs: [
          'Meiosis is a specialised form of cell division that produces four haploid gametes (sperm or egg cells) from a single diploid cell. It is the foundation of sexual reproduction. Unlike mitosis, meiosis involves two rounds of cell division — meiosis I and meiosis II — and introduces genetic variation through two key mechanisms: crossing over and independent assortment.',
          'Meiosis I is the reductional division — it separates homologous chromosome pairs (one from each parent). During prophase I, homologous chromosomes pair up in a process called synapsis, forming structures called bivalents. At this stage, crossing over (also called recombination) occurs: corresponding segments of non-sister chromatids are exchanged between homologous chromosomes. The points where crossing over occurs are called chiasmata (singular: chiasma). Crossing over shuffles the combination of alleles on each chromosome, creating new genetic combinations that neither parent had.',
          'At metaphase I, homologous pairs line up at the cell equator rather than individual chromosomes. During anaphase I, the homologous pairs separate — but the sister chromatids stay joined. After telophase I and cytokinesis, two haploid cells result, each with half the original chromosome number but still consisting of paired chromatids. Meiosis II is very similar to mitosis: the sister chromatids separate during anaphase II, yielding four haploid cells each with a unique combination of chromosomes.',
          'The genetic variation introduced by meiosis is enormous. Independent assortment alone (the random arrangement of homologous pairs at metaphase I) can produce 2²³ — over 8 million — different chromosome combinations in human gametes. When combined with crossing over, which can happen at multiple points along every chromosome, the number of possible unique gametes is astronomically large. This variation is the raw material for natural selection and is one reason why sexual reproduction is so widespread in nature.',
        ],
      },
      {
        id: 's4',
        title: '4. Comparing Mitosis and Meiosis',
        paragraphs: [
          'Mitosis and meiosis are both forms of eukaryotic cell division that start with the same preparatory step (DNA replication in interphase), but they differ in nearly every other respect. Understanding these differences is crucial for understanding both how bodies develop and how sexual reproduction works.',
          'Mitosis produces two daughter cells; meiosis produces four. Mitosis produces diploid cells (2n); meiosis produces haploid cells (n). The daughter cells of mitosis are genetically identical to the parent; those of meiosis are genetically unique. Mitosis involves one division; meiosis involves two. Homologous chromosomes pair up in meiosis I (in synapsis) but never pair up in mitosis. Crossing over occurs in meiosis but not in mitosis.',
          'The purpose of each process also differs starkly. Mitosis is used for growth, repair, and asexual reproduction. Meiosis is used exclusively to produce gametes for sexual reproduction. In humans, meiosis occurs only in the gonads (testes in males, ovaries in females). An error in meiosis — specifically, failure of chromosomes to separate properly (called non-disjunction) — can result in gametes with an abnormal chromosome number. If such a gamete participates in fertilisation, the resulting offspring may have a chromosomal disorder such as Down syndrome (trisomy 21, having three copies of chromosome 21).',
          'The cell cycle checkpoints that regulate both processes are critical for preventing cancer and genetic disease. The G1 checkpoint assesses whether the cell has sufficient nutrients and size to divide. The G2 checkpoint ensures DNA replication was completed without errors. The spindle assembly checkpoint (at metaphase) ensures all chromosomes are correctly attached to spindle fibres. These checkpoints are enforced by proteins called cyclins and cyclin-dependent kinases (CDKs). Mutations in genes encoding checkpoint proteins are among the most common events in cancer development — without working checkpoints, cells can divide uncontrollably.',
        ],
      },
    ],
    flow: [
      { type: 'section', idx: 0 },
      { type: 'checkpoint', idx: 0 },
      { type: 'section', idx: 1 },
      { type: 'section', idx: 2 },
      { type: 'checkpoint', idx: 1 },
      { type: 'section', idx: 3 },
      { type: 'checkpoint', idx: 2 },
    ],
    checkpoints: [
      {
        idx: 0,
        questions: [
          {
            question: 'What are the three main reasons cells divide?',
            options: [
              'Nutrition, waste removal, and signalling',
              'Growth, repair and replacement, and reproduction',
              'Energy production, DNA storage, and movement',
              'Protein synthesis, lipid production, and division',
            ],
            correctIndex: 1,
            hint: 'Think about why your body constantly makes new cells — for getting bigger, fixing damage, and making gametes.',
          },
          {
            question: 'What happens to DNA during the S phase of interphase?',
            options: [
              'DNA is destroyed and rebuilt',
              'DNA condenses into chromosomes',
              'DNA is replicated so each daughter cell gets a full genome',
              'DNA is exported to the cytoplasm',
            ],
            correctIndex: 2,
            hint: '"S" stands for Synthesis — this is when DNA is copied using semi-conservative replication.',
          },
        ],
      },
      {
        idx: 1,
        questions: [
          {
            question: 'In which stage of mitosis do chromosomes line up at the cell\'s equatorial plate?',
            options: ['Prophase', 'Anaphase', 'Telophase', 'Metaphase'],
            correctIndex: 3,
            hint: 'The name is a clue — "meta" means middle. This is the stage where chromosomes are at the middle of the cell.',
          },
          {
            question: 'What event marks the start of anaphase?',
            options: [
              'The nuclear envelope breaks down',
              'Spindle fibres form at the poles',
              'Cohesin proteins are cleaved, separating sister chromatids',
              'Chromosomes decondense',
            ],
            correctIndex: 2,
            hint: 'Something must break the "glue" holding the two sister chromatids together before they can be pulled apart.',
          },
          {
            question: 'How does cytokinesis differ in animal vs plant cells?',
            options: [
              'Animal cells use a cell plate; plant cells use a cleavage furrow',
              'Plant cells use a cell plate; animal cells use a cleavage furrow',
              'Both use a cleavage furrow',
              'Both use a cell plate',
            ],
            correctIndex: 1,
            hint: 'Plant cells have a rigid wall — they can\'t be pinched. They build a new wall outward from the centre instead.',
          },
        ],
      },
      {
        idx: 2,
        questions: [
          {
            question: 'What is crossing over and when does it occur?',
            options: [
              'Exchange of whole chromosomes between cells; occurs in mitosis',
              'Exchange of chromosome segments between homologues; occurs in prophase I of meiosis',
              'Separation of sister chromatids; occurs in anaphase II',
              'Pairing of homologous chromosomes; occurs in metaphase I',
            ],
            correctIndex: 1,
            hint: 'This is when corresponding bits of DNA are swapped between a chromosome inherited from mum and one from dad — creating new combinations.',
          },
          {
            question: 'What is non-disjunction and what can it cause?',
            options: [
              'Failure of DNA to replicate; causes cell death',
              'Failure of chromosomes to separate properly; can cause chromosomal disorders like Down syndrome',
              'Failure of the cell plate to form; causes cells to fuse',
              'Failure of crossing over to occur; causes identical gametes',
            ],
            correctIndex: 1,
            hint: 'When chromosomes fail to separate (disjoin), gametes end up with too many or too few chromosomes.',
          },
        ],
      },
    ],
  },

  // ── LESSON 6 ──────────────────────────────────────────────────────────────
  {
    id: 'nervous-system',
    title: 'The Nervous System — Your Body\'s Command Centre',
    description: 'Explore how your nervous system is organised, how neurons transmit electrical signals, how the brain processes information, and how the peripheral system connects everything.',
    readTime: '14 min',
    emoji: '🧠',
    color: '#f8f0fc',
    border: '#c8a8d8',
    sections: [
      {
        id: 's1',
        title: '1. Overview of the Nervous System',
        paragraphs: [
          'The nervous system is the body\'s rapid communication and control network. It detects changes in the internal and external environment, processes that information, and coordinates a response — all within fractions of a second. This is fundamentally different from the endocrine (hormonal) system, which communicates via chemicals carried in the blood and acts over minutes, hours, or days. The nervous system uses electrical impulses, making it extraordinarily fast.',
          'The human nervous system is divided into two main parts. The central nervous system (CNS) consists of the brain and spinal cord — it is the processing centre, integrating information and generating responses. The peripheral nervous system (PNS) consists of all the nerves that branch out from the CNS to every corner of the body — the sensory neurons that bring information in, and the motor neurons that carry instructions out. The PNS itself is divided into the somatic nervous system (voluntary movements) and the autonomic nervous system (involuntary functions like heart rate and digestion).',
          'The autonomic nervous system has two divisions that often work in opposition: the sympathetic division, which prepares the body for action ("fight or flight") — increasing heart rate, dilating pupils, diverting blood to muscles; and the parasympathetic division, which promotes rest and digestion ("rest and digest") — slowing heart rate, stimulating digestion, and constricting pupils. Most organs are innervated by both divisions, which balance each other to maintain homeostasis.',
          'Nervous system disorders are among the most debilitating human diseases. Multiple sclerosis occurs when the immune system attacks the myelin sheaths around neurons, slowing signal transmission. Parkinson\'s disease results from the loss of dopamine-producing neurons in the basal ganglia, causing movement difficulties. Alzheimer\'s disease involves the progressive destruction of synaptic connections and neurons in areas critical for memory. Understanding the nervous system at a molecular level is key to developing treatments for all these conditions.',
        ],
      },
      {
        id: 's2',
        title: '2. Neurons and How Signals Travel',
        paragraphs: [
          'The functional unit of the nervous system is the neuron — a highly specialised cell designed to transmit electrical signals over long distances at high speed. There are roughly 86 billion neurons in the human brain alone. Despite their diversity, most neurons share the same basic structure: a cell body (soma) containing the nucleus; dendrites — short, branching extensions that receive incoming signals from other neurons; and an axon — a single long projection that carries the electrical signal away from the cell body to the next neuron or target organ.',
          'A nerve signal is called an action potential — a rapid, self-regenerating wave of electrical change that travels along the axon. At rest, the inside of a neuron is negatively charged relative to the outside (resting membrane potential of about −70 mV), maintained by the sodium-potassium pump. When a stimulus is strong enough, sodium channels open and positively charged Na⁺ ions rush in, briefly reversing the charge to about +40 mV (depolarisation). This triggers the next section of membrane to depolarise, and the wave travels down the axon. Potassium channels then open, K⁺ flows out, and the membrane repolarises.',
          'Many axons are wrapped in a fatty insulating layer called the myelin sheath, produced by Schwann cells in the PNS and oligodendrocytes in the CNS. Myelin dramatically speeds up signal transmission. Rather than traveling continuously along the axon, the signal jumps between gaps in the myelin called nodes of Ranvier — a process called saltatory conduction ("saltatory" from the Latin for jumping). This can increase conduction speed from about 1 m/s in unmyelinated fibres to over 100 m/s in myelinated ones.',
          'At the end of the axon, the signal reaches a synapse — the junction between two neurons (or between a neuron and a muscle). Electrical signals cannot jump the synaptic cleft directly. Instead, the action potential triggers vesicles of chemical messengers called neurotransmitters to fuse with the membrane and release their contents into the synaptic cleft. These bind to receptors on the next cell\'s membrane, generating a new signal. Common neurotransmitters include acetylcholine, dopamine, serotonin, and GABA. After binding, neurotransmitters are rapidly broken down or reabsorbed to terminate the signal.',
        ],
      },
      {
        id: 's3',
        title: '3. The Brain and Its Regions',
        paragraphs: [
          'The brain is the most complex organ in the known universe — a 1.4 kg structure containing approximately 86 billion neurons, each forming an average of 7,000 connections (synapses). The total number of synapses in one human brain is estimated at around 100 trillion. The brain is divided into three major regions with very different evolutionary origins and functions: the cerebrum, the cerebellum, and the brainstem.',
          'The cerebrum is the largest part of the brain, divided into two hemispheres (left and right) connected by the corpus callosum. Its outer layer, the cerebral cortex, is deeply folded to maximise surface area and consists of four lobes: the frontal lobe (reasoning, planning, movement, and personality), the parietal lobe (sensory processing and spatial awareness), the temporal lobe (hearing, language comprehension, and memory), and the occipital lobe (visual processing). Deep within the cerebrum are the limbic system structures (amygdala, hippocampus) that process emotions and form long-term memories.',
          'The cerebellum sits at the back and bottom of the brain and contains more than half of all neurons despite being only ~10% of brain volume. It coordinates voluntary movements, balance, and fine motor skills — fine-tuning motor commands from the cortex to produce smooth, accurate movements. Learning physical skills (playing piano, riding a bike) heavily involves the cerebellum. Damage causes ataxia, characterised by uncoordinated, stumbling movement.',
          'The brainstem connects the cerebrum and cerebellum to the spinal cord and controls the most fundamental survival functions: breathing rhythm, heart rate, blood pressure, swallowing, and the sleep–wake cycle. The hypothalamus (technically part of the diencephalon, between the cerebrum and brainstem) regulates homeostasis — body temperature, hunger, thirst, and hormonal output via the pituitary gland. The thalamus acts as the brain\'s relay station, routing incoming sensory information (except smell) to the appropriate cortical areas.',
        ],
      },
      {
        id: 's4',
        title: '4. The Peripheral Nervous System',
        paragraphs: [
          'The peripheral nervous system (PNS) consists of all neural tissue outside the brain and spinal cord. It is the communication link between the CNS and the rest of the body — carrying sensory information in (afferent signals) and motor commands out (efferent signals). The PNS includes 12 pairs of cranial nerves (connected directly to the brain) and 31 pairs of spinal nerves (connected to the spinal cord), plus all their branches.',
          'Sensory receptors throughout the body — in the skin, muscles, joints, eyes, ears, and internal organs — continuously detect stimuli and send signals to the CNS via sensory (afferent) neurons. Different types of receptors respond to different stimuli: mechanoreceptors respond to touch and pressure, thermoreceptors to temperature, photoreceptors in the eye to light, chemoreceptors in the nose and tongue to chemicals. The brain integrates all this incoming information to construct a rich, continuous model of both the body and the external world.',
          'Motor (efferent) neurons carry commands from the CNS to effectors — muscles and glands. Somatic motor neurons innervate skeletal muscles and are under voluntary conscious control. Autonomic motor neurons innervate smooth muscle (in blood vessel walls and gut), cardiac muscle, and glands — generally without conscious control. The neuromuscular junction is the synapse between a somatic motor neuron and a skeletal muscle fibre; here, acetylcholine is the neurotransmitter that triggers muscle contraction.',
          'Reflex arcs are rapid, involuntary responses that bypass the brain to save time. In a simple spinal reflex (like pulling your hand away from a hot surface), the sensory signal travels to the spinal cord, synapses directly with a motor neuron (sometimes via an interneuron), and the motor command is sent straight back to the muscle — all before the brain has even registered pain. This allows responses in about 50 milliseconds. The brain receives the information slightly later and then becomes aware of what happened. Understanding reflex arcs is clinically important — a doctor testing your knee-jerk reflex is assessing the integrity of the spinal cord segments that control it.',
        ],
      },
    ],
    flow: [
      { type: 'section', idx: 0 },
      { type: 'checkpoint', idx: 0 },
      { type: 'section', idx: 1 },
      { type: 'section', idx: 2 },
      { type: 'checkpoint', idx: 1 },
      { type: 'section', idx: 3 },
      { type: 'checkpoint', idx: 2 },
    ],
    checkpoints: [
      {
        idx: 0,
        questions: [
          {
            question: 'What is the main functional difference between the nervous system and the endocrine system?',
            options: [
              'The nervous system is slower and uses hormones; the endocrine system is faster and uses electrical signals',
              'The nervous system uses electrical impulses and is fast; the endocrine system uses hormones and is slower',
              'Both systems use the same signals but for different organs',
              'The endocrine system controls voluntary movement; the nervous system controls involuntary functions',
            ],
            correctIndex: 1,
            hint: 'Think about how quickly you can react to touching something hot vs how long it takes a growth hormone to show effects.',
          },
          {
            question: 'What does the sympathetic nervous system do?',
            options: [
              'Promotes rest and digestion after a meal',
              'Controls voluntary skeletal muscle movements',
              'Prepares the body for "fight or flight" — increasing heart rate and diverting blood to muscles',
              'Transmits sensory information from the skin to the brain',
            ],
            correctIndex: 2,
            hint: 'Sympathetic = stress response. Think adrenaline, fast heartbeat, ready to run.',
          },
        ],
      },
      {
        idx: 1,
        questions: [
          {
            question: 'What is an action potential?',
            options: [
              'The resting charge inside a neuron at −70 mV',
              'A chemical messenger released at a synapse',
              'A rapid, self-regenerating wave of electrical change that travels along an axon',
              'The fatty sheath that insulates a neuron',
            ],
            correctIndex: 2,
            hint: 'It\'s the actual nerve impulse — a wave of depolarisation that travels down the axon like a chain reaction.',
          },
          {
            question: 'What is saltatory conduction?',
            options: [
              'The release of neurotransmitters at the synapse',
              'The signal jumping between nodes of Ranvier in myelinated neurons, greatly speeding up transmission',
              'The flow of K⁺ ions during repolarisation',
              'A type of reflex arc that bypasses the brain',
            ],
            correctIndex: 1,
            hint: '"Saltatory" means jumping — the signal leaps between the gaps (nodes of Ranvier) in the myelin sheath.',
          },
          {
            question: 'What are neurotransmitters and what is their role?',
            options: [
              'Proteins that form myelin sheaths around axons',
              'Enzymes that replicate DNA in neurons',
              'Chemical messengers released at synapses that carry the signal from one neuron to the next',
              'Receptor proteins that detect action potentials on the dendrites',
            ],
            correctIndex: 2,
            hint: 'Electrical signals can\'t jump the synaptic gap — chemical messengers bridge it instead.',
          },
        ],
      },
      {
        idx: 2,
        questions: [
          {
            question: 'Which lobe of the brain is primarily responsible for processing vision?',
            options: ['Frontal lobe', 'Temporal lobe', 'Parietal lobe', 'Occipital lobe'],
            correctIndex: 3,
            hint: 'It\'s at the very back of the brain — the furthest from the eyes, yet the primary visual cortex is located here.',
          },
          {
            question: 'Why are reflex arcs important for survival?',
            options: [
              'They allow the brain to make complex decisions faster',
              'They bypass the brain so the body can react in milliseconds before conscious awareness',
              'They increase neurotransmitter release at the synapse',
              'They allow voluntary control over the autonomic system',
            ],
            correctIndex: 1,
            hint: 'Speed is critical when your hand is on something hot — waiting for the signal to reach the brain and back would be too slow.',
          },
        ],
      },
    ],
  },

  // ── LESSON 7 ──────────────────────────────────────────────────────────────
  {
    id: 'evolution',
    title: 'Evolution & Natural Selection',
    description: 'Discover Darwin\'s theory of evolution, the evidence that supports it, how natural selection drives change over generations, and how new species form.',
    readTime: '14 min',
    emoji: '🦕',
    color: '#fdf5e8',
    border: '#d4b87a',
    sections: [
      {
        id: 's1',
        title: '1. Darwin\'s Theory of Evolution',
        paragraphs: [
          'Evolution is the change in the heritable characteristics of biological populations over successive generations. It is the central unifying theory of biology — the framework that makes sense of why organisms look and behave the way they do, why the fossil record shows progressive change over time, and why living species are related by common ancestry. The theory was developed primarily by Charles Darwin and Alfred Russel Wallace in the 19th century, though the mechanisms have been greatly refined by subsequent discoveries in genetics.',
          'Charles Darwin spent five years (1831–1836) voyaging around the world on HMS Beagle, collecting specimens and making detailed observations. His observations of finches in the Galápagos Islands were particularly influential: he found 13 species of finch, each with a beak shape perfectly suited to a different food source — seeds, insects, nectar. Darwin concluded that they had all descended from a single ancestral finch species that colonised the islands, and had diversified over thousands of generations as different populations adapted to different ecological niches. This pattern of divergence from a common ancestor is called adaptive radiation.',
          'Darwin and Wallace independently arrived at the same key insight: organisms within a population vary in their traits; these traits are heritable; all populations produce more offspring than can survive given limited resources; therefore, individuals with traits better suited to their environment will survive and reproduce more successfully, and these advantageous traits will become more common in subsequent generations. Darwin called this process natural selection — the differential survival and reproduction of individuals due to differences in inherited traits.',
          'Darwin published his ideas in "On the Origin of Species" in 1859. The book was controversial because it implied that humans share ancestry with other animals — a deeply challenging idea at the time. Darwin was careful not to claim that evolution had a "direction" or "goal"; evolution does not progress toward some ideal endpoint. Natural selection simply acts on the variation that exists in a population, and the environment determines which variants survive best. In a changing environment, what counts as "fit" changes too.',
        ],
      },
      {
        id: 's2',
        title: '2. Evidence for Evolution',
        paragraphs: [
          'The evidence for evolution is overwhelming and comes from multiple independent lines of inquiry. No single piece of evidence would be convincing on its own, but the convergence of evidence from the fossil record, comparative anatomy, molecular biology, biogeography, and direct observation is so strong that evolution is considered one of the best-supported theories in all of science.',
          'The fossil record provides a chronological history of life on Earth. Fossils are found in sedimentary rock layers, with older fossils in deeper layers. The record shows the progressive appearance of new forms over time and the gradual change within lineages. Transitional fossils — organisms showing characteristics intermediate between ancestral and descendant forms — are especially powerful evidence. The Tiktaalik fossil, discovered in 2004, shows features intermediate between fish and tetrapods (four-limbed vertebrates), exactly as evolutionary theory predicted would be found in rocks of that age.',
          'Comparative anatomy reveals that many distantly related species share the same underlying bone structure modified for different purposes. The human arm, a bat\'s wing, a whale\'s flipper, and a horse\'s leg all contain the same set of bones (humerus, radius, ulna, carpals) arranged differently — these are called homologous structures. This makes no sense if species were independently created, but makes perfect sense if all tetrapods descended from a common ancestor and have modified the same basic "toolkit" for different lifestyles. Vestigial structures — such as the human appendix, whale pelvic bones, and the small muscles attached to our ear bones — are remnants of structures that were functional in ancestors but are reduced or non-functional today.',
          'Molecular evidence is perhaps the most powerful of all. By comparing DNA, RNA, and protein sequences across species, scientists can reconstruct evolutionary trees with extraordinary precision. The more similar the sequences, the more recently two species shared a common ancestor. Humans and chimpanzees share about 98.7% of their DNA sequences. More distantly related species share fewer — but virtually all of the "core" genes for basic cellular functions (DNA replication, protein synthesis, energy production) are highly conserved even between bacteria and humans, reflecting our shared deep ancestry. Endogenous retroviruses — viral sequences that inserted themselves into ancestral genomes and are now found in the same positions in the genomes of related species — provide a particularly compelling molecular "fingerprint" of common descent.',
        ],
      },
      {
        id: 's3',
        title: '3. Natural Selection in Action',
        paragraphs: [
          'Natural selection is not a historical curiosity — it happens continuously, and in some cases quickly enough to observe directly. The classic textbook example is industrial melanism in the peppered moth (Biston betularia) in 19th-century Britain. Before industrialisation, the pale, speckled form was most common (it was camouflaged against light, lichen-covered tree bark). Dark (melanic) individuals existed but were rare — they were more visible to predators. When industrial pollution killed the lichens and blackened tree trunks with soot, the dark moths became better camouflaged and the light form became more vulnerable. Within decades, the dark form became dominant in polluted areas. When pollution controls were introduced in the 20th century, the pale form recovered — a direct and measurable response to changing selection pressure.',
          'Antibiotic resistance in bacteria is perhaps the most urgent real-world example of natural selection. When antibiotics are used, the vast majority of bacteria die. But if a random mutation confers resistance to the antibiotic in even one bacterium, that individual survives and reproduces, passing the resistance gene to all its descendants. Repeat antibiotic use selects for resistant strains, and resistance genes can even spread between different bacterial species via horizontal gene transfer. The emergence of multi-drug-resistant "superbugs" like MRSA (methicillin-resistant Staphylococcus aureus) is a direct, ongoing consequence of natural selection driven by human antibiotic use.',
          'Natural selection acts on phenotypes but changes allele frequencies in the population\'s gene pool. If a trait improves survival (directional selection), the alleles encoding it become more common over generations. If intermediate trait values are favoured (stabilising selection), extreme variants are eliminated. If both extremes are favoured over the intermediate (disruptive selection), the population may split into two distinct groups. Sexual selection — where individuals are chosen as mates based on heritable traits — can drive the evolution of elaborate, seemingly impractical features like a peacock\'s tail or a stag\'s antlers.',
          'Genetic drift is another mechanism of evolutionary change, distinct from natural selection. It is the random change in allele frequencies due to chance events rather than fitness. Genetic drift has the greatest effect in small populations. The bottleneck effect occurs when a population is drastically reduced (e.g. by a natural disaster), and the surviving small population may not represent the genetic diversity of the original — purely by chance. The founder effect occurs when a small group leaves the main population to establish a new one, again carrying only a random subset of the original gene pool. Both effects can cause populations to diverge rapidly from their ancestors, even without natural selection.',
        ],
      },
      {
        id: 's4',
        title: '4. Speciation and Adaptation',
        paragraphs: [
          'A species is typically defined as a group of organisms that can interbreed and produce fertile offspring, and that are reproductively isolated from other groups. Speciation — the formation of new species — occurs when populations of the same species become isolated from each other for long enough that they evolve such different characteristics that they can no longer interbreed successfully. Reproductive isolation can be pre-zygotic (barriers that prevent mating or fertilisation) or post-zygotic (barriers that produce sterile or unviable hybrids after mating).',
          'Allopatric speciation (from the Greek for "different homeland") is the most common mechanism. It occurs when a geographic barrier — a mountain range, a river, a stretch of ocean — physically separates a population. Each sub-population then evolves independently, subject to different selection pressures and accumulating different mutations. Over thousands of generations, they diverge genetically until they can no longer interbreed if the barrier is removed. The Galápagos finches are a classic example: geographic isolation on different islands allowed independent evolution. Sympatric speciation occurs without geographic separation — populations in the same area diverge due to factors such as different mating seasons or the exploitation of different ecological niches.',
          'An adaptation is a trait that has evolved because it increases the fitness of an organism in its particular environment. Adaptations can be structural (the streamlined body of a dolphin), physiological (the ability of camels to concentrate urine and conserve water), or behavioural (migration in birds). Adaptations are always relative to a specific environment — the thick fur coat that is an adaptation for an Arctic fox would be a serious disadvantage for a desert fox. Evolution does not produce "perfect" organisms; it produces organisms that are adequately suited to their current environment.',
          'Co-evolution is the reciprocal evolution of two or more species that exert selection pressure on each other. Predator-prey relationships drive co-evolution: as prey become faster, their predators must become faster too, or starve. Perhaps the most elegant examples are mutualistic co-evolutions: the remarkably precise fit between a specific flower and its pollinator (such as the Madagascan orchid with a 30 cm nectary and the hawk moth with a 30 cm proboscis, which Darwin predicted must exist before it was discovered). The arms race between parasites and hosts also drives extraordinary co-evolutionary complexity, and is a major driver of the diversity of immune systems.',
        ],
      },
    ],
    flow: [
      { type: 'section', idx: 0 },
      { type: 'checkpoint', idx: 0 },
      { type: 'section', idx: 1 },
      { type: 'section', idx: 2 },
      { type: 'checkpoint', idx: 1 },
      { type: 'section', idx: 3 },
      { type: 'checkpoint', idx: 2 },
    ],
    checkpoints: [
      {
        idx: 0,
        questions: [
          {
            question: 'What is natural selection?',
            options: [
              'The random mutation of genes in a population over time',
              'The differential survival and reproduction of individuals due to differences in inherited traits',
              'The deliberate breeding of organisms for desirable traits by humans',
              'The process by which species stay the same across generations',
            ],
            correctIndex: 1,
            hint: 'Key words: heritable variation + environmental pressure + differential survival = natural selection.',
          },
          {
            question: 'What did Darwin observe about finches in the Galápagos Islands?',
            options: [
              'They all had identical beak shapes regardless of food source',
              'They were completely unrelated to mainland finches',
              'Each species had a beak shape suited to a different food source, suggesting adaptive radiation from a common ancestor',
              'They reproduced faster than any other bird species',
            ],
            correctIndex: 2,
            hint: 'Darwin noticed that the same basic bird had diversified into many beak shapes — each fitting a different ecological role.',
          },
        ],
      },
      {
        idx: 1,
        questions: [
          {
            question: 'What are homologous structures, and what do they indicate?',
            options: [
              'Structures with the same function but different origins — indicating convergent evolution',
              'Structures with the same underlying bones but different functions — indicating common ancestry',
              'Non-functional remnants of ancestral structures',
              'Structures that evolved independently in unrelated species',
            ],
            correctIndex: 1,
            hint: 'A human arm, a bat wing, and a whale flipper all contain the same bones — they came from the same ancestral blueprint.',
          },
          {
            question: 'Why is antibiotic resistance a real-world example of natural selection?',
            options: [
              'Bacteria deliberately mutate to survive antibiotics',
              'Antibiotics cause bacteria to evolve by changing their DNA directly',
              'Random mutations conferring resistance allow those bacteria to survive and reproduce, passing on the resistance gene',
              'Antibiotics select for weaker bacteria that are easier to destroy',
            ],
            correctIndex: 2,
            hint: 'The antibiotic doesn\'t create the mutation — it just removes all bacteria that don\'t already have it, leaving resistant ones to multiply.',
          },
        ],
      },
      {
        idx: 2,
        questions: [
          {
            question: 'What is allopatric speciation?',
            options: [
              'Speciation that occurs in the same geographic area due to ecological differences',
              'Speciation caused by genetic drift alone, with no natural selection',
              'Speciation that occurs when populations are separated by a geographic barrier and evolve independently',
              'Speciation driven by sexual selection within a single population',
            ],
            correctIndex: 2,
            hint: '"Allo" means different, "patric" means homeland — populations in different locations diverge until they can no longer interbreed.',
          },
          {
            question: 'What is genetic drift, and when does it have the greatest effect?',
            options: [
              'Change in allele frequencies due to natural selection; greatest in large populations',
              'Random change in allele frequencies due to chance; greatest in small populations',
              'The spread of genes between species via viruses; greatest in isolated populations',
              'The increase in beneficial allele frequencies over time; greatest in harsh environments',
            ],
            correctIndex: 1,
            hint: 'Chance plays a bigger role when there are fewer individuals — like the difference between flipping a coin 10 times vs 10,000 times.',
          },
        ],
      },
    ],
  },

  // ── LESSON 8 ──────────────────────────────────────────────────────────────
  {
    id: 'ecosystems',
    title: 'Ecosystems & Food Webs',
    description: 'Understand what ecosystems are, how energy flows through food webs, the roles of producers and decomposers, and what makes Earth\'s biomes so diverse.',
    readTime: '13 min',
    emoji: '🌍',
    color: '#eef8ee',
    border: '#8ab87a',
    sections: [
      {
        id: 's1',
        title: '1. What Is an Ecosystem?',
        paragraphs: [
          'An ecosystem is a community of living organisms (biotic components) interacting with each other and with their non-living physical environment (abiotic components) in a defined area. The word "ecosystem" was coined by British ecologist Arthur Tansley in 1935. Ecosystems can be as vast as an ocean or as small as a rock pool — what defines them is the web of interactions between organisms and their environment, not their size.',
          'The abiotic components of an ecosystem include temperature, light, water, soil chemistry, atmospheric gases, and physical substrates. These factors set the fundamental conditions that determine which species can survive in an area. The biotic components include all the organisms — plants, animals, fungi, bacteria, and other microbes — that live there. The interactions between organisms include predation, competition, mutualism, parasitism, and commensalism. No organism exists in isolation; every species affects and is affected by the others around it.',
          'Ecosystems are dynamic, not static. They change over time through a process called ecological succession — the gradual change in species composition following a disturbance. Primary succession occurs on bare substrate with no soil (e.g. after a volcanic eruption or glacial retreat). Pioneer species (like lichens and mosses) colonise first, breaking down rock into soil. Over hundreds of years, the community progresses through a series of stages until a relatively stable climax community is reached. Secondary succession occurs where soil already exists (e.g. after a forest fire) and is much faster.',
          'The concept of a niche is fundamental to ecology. An organism\'s niche is not just where it lives (its habitat) but what it does — its role in the ecosystem, including what it eats, what eats it, when it is active, and how it interacts with other species. No two species can occupy exactly the same niche in the same area indefinitely (the competitive exclusion principle) — eventually one will outcompete the other or the two species will evolve to use slightly different resources, reducing competition. This ecological differentiation is why ecosystems can support such extraordinary biodiversity.',
        ],
      },
      {
        id: 's2',
        title: '2. Producers, Consumers, and Decomposers',
        paragraphs: [
          'Every ecosystem is built on a foundation of energy capture and transformation. Living organisms are classified by how they obtain energy. Producers (autotrophs) capture energy from the environment and use it to synthesise organic molecules. On land, the primary producers are photosynthetic plants. In aquatic systems, phytoplankton — microscopic algae and cyanobacteria — are responsible for roughly half of all photosynthesis on Earth. Some ecosystems (deep-sea hydrothermal vents) are based on chemosynthesis, where bacteria obtain energy by oxidising inorganic compounds like hydrogen sulphide.',
          'Consumers (heterotrophs) obtain energy by eating other organisms. Primary consumers are herbivores that eat producers. Secondary consumers eat primary consumers; tertiary consumers eat secondary consumers. The number of trophic levels in a food chain is typically limited to four or five because of the 10% rule: only about 10% of the energy stored at one trophic level is transferred to the next, as the rest is lost as heat through respiration, in faeces, or in indigestible material. This is why ecosystems can support far more plants than herbivores, and far more herbivores than top predators.',
          'Decomposers are organisms — primarily bacteria and fungi — that break down dead organic matter (detritus) into inorganic compounds. This process is essential for nutrient cycling: without decomposers, nutrients would remain locked in dead bodies and litter, and primary production would grind to a halt. The carbon in your body will, after your death, be returned to the atmosphere as CO₂ by decomposers — and may eventually be incorporated into the body of another organism. Detritivores (like earthworms, woodlice, and dung beetles) are animals that feed on detritus, breaking it into smaller pieces and accelerating decomposition.',
          'Keystone species are organisms that have a disproportionately large effect on their ecosystem relative to their abundance. The classic example is the sea otter: otters eat sea urchins, which eat kelp. When sea otters were hunted to near-extinction in the 20th century, sea urchin populations exploded and kelp forests were devastated. When otters were reintroduced, the entire ecosystem recovered. Top predators often function as keystone species because their removal triggers trophic cascades — chain reactions of population changes that ripple through the entire food web.',
        ],
      },
      {
        id: 's3',
        title: '3. Energy Flow and Food Webs',
        paragraphs: [
          'A food chain is a linear sequence showing who eats whom. A food web is a more realistic representation — it shows the complex, interconnected network of feeding relationships in an ecosystem. Real ecosystems have many interlinked food chains; most consumers eat multiple types of prey and are eaten by multiple predators. Ecologists map these relationships to understand how energy and matter flow through ecosystems.',
          'Energy enters most ecosystems as sunlight, captured by producers through photosynthesis. As energy passes from one trophic level to the next, about 90% is lost. A simple calculation reveals the consequence: if a field of grass (producers) captures 10,000 units of energy, approximately 1,000 units are available to herbivores, 100 to secondary consumers, and just 10 to tertiary consumers. This energy pyramid means that eating lower on the food chain is far more energetically efficient — a key reason why plant-based diets require much less land, water, and energy than meat-based diets.',
          'Bioaccumulation and biomagnification describe how certain persistent pollutants (like mercury and PCBs) accumulate in organisms and become increasingly concentrated as you move up the food chain. Since each level must eat many individuals from the level below, the toxins consumed at each step are added together and concentrated in body tissues. Top predators — including large fish like tuna, and predatory birds like eagles — can accumulate pollutant concentrations millions of times higher than those found in the water or soil.',
          'Nutrient cycles are the pathways by which matter (as opposed to energy) moves through ecosystems. Unlike energy, which flows through ecosystems and is continuously lost as heat, matter is recycled. The carbon cycle tracks carbon from CO₂ in the atmosphere, through photosynthesis into organic compounds, back to CO₂ via respiration and decomposition, and into long-term stores in fossil fuels and ocean sediments. The nitrogen cycle is equally critical: nitrogen must be "fixed" from atmospheric N₂ into usable forms (nitrates, ammonium) by nitrogen-fixing bacteria before plants can absorb it. Decomposers release nitrogen from organic matter back to the soil for reuse.',
        ],
      },
      {
        id: 's4',
        title: '4. Biomes and Biodiversity',
        paragraphs: [
          'A biome is a large-scale community of plants and animals characterised by a specific climate and vegetation type. The distribution of biomes is primarily determined by temperature and precipitation patterns. Major terrestrial biomes include tropical rainforest (hot, wet year-round — highest biodiversity), tropical savanna (hot with distinct wet and dry seasons), desert (low rainfall — hot or cold), temperate deciduous forest, boreal forest (taiga — cold, dense conifer trees), and tundra (extremely cold, treeless, permafrost). Aquatic biomes (oceans, coral reefs, freshwater lakes, wetlands) cover most of Earth\'s surface and support the majority of life.',
          'Biodiversity refers to the variety of life on Earth at all levels: genetic diversity (variation within species), species diversity (the number and relative abundance of species in an area), and ecosystem diversity (the variety of habitats and ecological processes). Tropical rainforests, though covering only about 6% of Earth\'s surface, are home to more than half of all species. Coral reefs, sometimes called the rainforests of the sea, are the most biodiverse marine ecosystems.',
          'Biodiversity is not merely aesthetically pleasing — it is functionally essential. Diverse ecosystems are more stable and resilient: if one species is lost, others can often fill its role. Biodiversity provides ecosystem services that humans depend on entirely: clean air and water, crop pollination (done by insects, birds, and bats), soil fertility (maintained by soil organisms), climate regulation (by forests absorbing CO₂), and a vast pharmacopoeia — about a quarter of all pharmaceuticals are derived from wild organisms. The loss of biodiversity therefore poses a direct threat to human wellbeing.',
          'Earth is currently experiencing what many scientists call the sixth mass extinction — a rapid loss of species at rates estimated to be 100 to 1,000 times higher than the natural background rate. The primary drivers are habitat destruction (especially deforestation and conversion of land for agriculture), climate change, overexploitation (hunting and fishing), pollution, and invasive species. Unlike the previous five mass extinctions (driven by asteroid impacts, volcanic eruptions, or climate shifts over millions of years), this one is driven almost entirely by human activity. Conservation biology is the discipline devoted to understanding and protecting biodiversity, and includes strategies ranging from protected areas and wildlife corridors to captive breeding programmes and habitat restoration.',
        ],
      },
    ],
    flow: [
      { type: 'section', idx: 0 },
      { type: 'checkpoint', idx: 0 },
      { type: 'section', idx: 1 },
      { type: 'section', idx: 2 },
      { type: 'checkpoint', idx: 1 },
      { type: 'section', idx: 3 },
      { type: 'checkpoint', idx: 2 },
    ],
    checkpoints: [
      {
        idx: 0,
        questions: [
          {
            question: 'What is the competitive exclusion principle?',
            options: [
              'No two species can coexist in the same ecosystem at all',
              'A species with more individuals always outcompetes a smaller species',
              'No two species can occupy exactly the same niche in the same area indefinitely',
              'Predators always exclude prey species from the ecosystem',
            ],
            correctIndex: 2,
            hint: 'If two species need exactly the same resources in the same place at the same time, one will eventually win — or they\'ll evolve to exploit slightly different resources.',
          },
          {
            question: 'What is ecological succession?',
            options: [
              'The sudden replacement of all species after a mass extinction',
              'The gradual change in species composition over time following a disturbance',
              'The seasonal migration of animals between ecosystems',
              'The competitive exclusion of one species by another',
            ],
            correctIndex: 1,
            hint: 'Think of bare volcanic rock slowly transforming into a forest over hundreds of years — pioneer species → shrubs → trees → climax community.',
          },
        ],
      },
      {
        idx: 1,
        questions: [
          {
            question: 'Why are food chains rarely longer than 4–5 levels?',
            options: [
              'Predators cannot physically eat more than 4 types of prey',
              'Each trophic level loses about 90% of energy as heat, so too little remains at higher levels',
              'Decomposers recycle all nutrients before a 5th level can be supported',
              'The number of species in an ecosystem limits chain length',
            ],
            correctIndex: 1,
            hint: 'The 10% rule: if producers have 10,000 units, consumers get 1,000, secondary consumers get 100, tertiary get 10 — almost nothing left for a 5th level.',
          },
          {
            question: 'What is biomagnification?',
            options: [
              'The increase in population size of a species over time',
              'The process by which producers capture more solar energy at lower trophic levels',
              'The increasing concentration of persistent pollutants in organisms at higher trophic levels',
              'The magnification of ecosystems in response to climate change',
            ],
            correctIndex: 2,
            hint: 'Think of mercury accumulating in tuna — each level of the food chain concentrates the pollutant more than the level below it.',
          },
        ],
      },
      {
        idx: 2,
        questions: [
          {
            question: 'Why is biodiversity considered functionally essential, not just aesthetically important?',
            options: [
              'Diverse ecosystems are more colourful and interesting for humans',
              'More species means more resources for hunting and collecting',
              'Diverse ecosystems provide essential services: pollination, clean water, climate regulation, and medicines',
              'Biodiversity increases the efficiency of energy transfer through food chains',
            ],
            correctIndex: 2,
            hint: 'Ecosystem services include everything from crop pollination by bees to the clean water filtered through forest soils — services that would cost trillions to replace artificially.',
          },
          {
            question: 'What is the primary driver of the current sixth mass extinction?',
            options: [
              'An asteroid impact similar to the one that killed the dinosaurs',
              'Massive volcanic eruptions changing global climate',
              'Human activities — especially habitat destruction, climate change, and overexploitation',
              'Natural evolutionary processes replacing old species with new ones',
            ],
            correctIndex: 2,
            hint: 'Unlike the previous five mass extinctions, this one has a single primary cause — us. The rate of species loss is 100–1,000 times the natural background rate.',
          },
        ],
      },
    ],
  },

  // ── LESSON 9 ──────────────────────────────────────────────────────────────
  {
    id: 'immune-system',
    title: 'The Human Immune System',
    description: 'Learn how your body defends itself against pathogens — from physical barriers and inflammation to the targeted power of antibodies and the science behind vaccines.',
    readTime: '13 min',
    emoji: '🛡️',
    color: '#fff0f0',
    border: '#d4a0a0',
    sections: [
      {
        id: 's1',
        title: '1. Lines of Defence',
        paragraphs: [
          'Your body is constantly exposed to potentially harmful microorganisms — bacteria, viruses, fungi, and parasites — yet you remain healthy most of the time. This is because you have a multi-layered immune system that detects, neutralises, and remembers pathogens. The immune system is traditionally described as having three lines of defence, each progressively more specific.',
          'The first line of defence consists of physical and chemical barriers that prevent pathogens from entering the body in the first place. The skin is the most important barrier — its outer layer of dead, keratinised cells is tough and impermeable, and it is continuously shed, removing any microbes that attach to it. Mucus membranes line the respiratory, digestive, and urogenital tracts, trapping pathogens in sticky mucus that is then swept away by cilia (tiny hair-like projections). Saliva, tears, and nasal mucus contain lysozyme — an enzyme that breaks down bacterial cell walls. Stomach acid (pH ~2) kills most pathogens that are swallowed.',
          'The second line of defence is the non-specific (innate) immune response — it attacks any foreign material regardless of what it is. If pathogens breach the first line, the affected cells release chemical signals (including histamine) that trigger inflammation: increased blood flow to the area, causing redness and warmth, and increased permeability of blood vessels, causing swelling. This brings defensive white blood cells (phagocytes) to the site. Phagocytes engulf and digest pathogens — a process called phagocytosis. Natural killer (NK) cells patrol the body and destroy infected cells and cancer cells.',
          'The third line of defence is the specific (adaptive) immune response — a targeted attack on specific pathogens. It is slower to mount (taking several days) but is extraordinarily precise and, crucially, generates immunological memory. The adaptive immune response is carried out by lymphocytes — B cells and T cells. This response is what allows vaccines to work: exposing the immune system to a harmless version of a pathogen trains it to respond rapidly and powerfully if the real pathogen is ever encountered.',
        ],
      },
      {
        id: 's2',
        title: '2. The Role of White Blood Cells',
        paragraphs: [
          'White blood cells (leukocytes) are the soldiers of the immune system. They are produced in bone marrow and circulate in the blood and lymphatic system, constantly patrolling for signs of infection or damage. There are several distinct types, each with a specialised role. Understanding the different types of white blood cells is clinically important — a differential blood count (counting the proportions of each type) can help diagnose infections, allergies, and immune disorders.',
          'Neutrophils are the most abundant white blood cell (making up ~60% of all leukocytes in blood). They are the first responders — they arrive at a site of infection within minutes and are highly efficient phagocytes, engulfing and destroying bacteria. Monocytes circulate in the blood and can migrate into tissues, where they mature into macrophages — large, long-lived phagocytes that engulf pathogens, dead cells, and debris. Macrophages also play a crucial role in activating the adaptive immune response: after digesting a pathogen, they display fragments of it on their surface and present these to T cells.',
          'These "antigen-presenting cells" act as messengers between the innate and adaptive immune systems. Dendritic cells are particularly important antigen-presenting cells: they patrol body tissues, capture pathogens, and migrate to lymph nodes where they activate T cells. Eosinophils and basophils are involved in responses to parasites and are key players in allergic reactions. Mast cells (similar to basophils) release histamine during allergic responses and inflammation.',
          'When an infection becomes severe, bone marrow rapidly ramps up white blood cell production. A high white blood cell count (leukocytosis) in a blood test is therefore a sign of infection or inflammation. Conversely, a very low white blood cell count (leukopenia) — as caused by chemotherapy or HIV infection — severely compromises immunity, leaving the body vulnerable to opportunistic infections that a healthy immune system would easily control.',
        ],
      },
      {
        id: 's3',
        title: '3. Antigens and Antibodies',
        paragraphs: [
          'An antigen is any molecule (usually a protein or carbohydrate on the surface of a pathogen) that the immune system recognises as foreign and can mount a response against. The word is short for "antibody generator." Every pathogen carries a unique set of surface antigens — like a molecular fingerprint. The adaptive immune system is capable of recognising an almost unlimited variety of antigens because B and T cells each carry unique antigen receptors, generated by a remarkable process of random gene recombination during development.',
          'B lymphocytes (B cells) are responsible for the humoral immune response — the production of antibodies. Each B cell displays copies of its unique antibody receptor on its surface. When a B cell encounters an antigen that matches its receptor (and receives activation signals from helper T cells), it proliferates rapidly and differentiates into plasma cells (which produce and secrete millions of antibody molecules) and memory B cells (which persist in the body long after the infection is cleared).',
          'Antibodies (also called immunoglobulins) are Y-shaped proteins made of two identical heavy chains and two identical light chains. The tips of the Y (the variable regions) form the antigen-binding sites — their specific shape is complementary to one particular antigen, like a lock and key. Antibodies combat pathogens in several ways: they can neutralise toxins and viruses by binding to them and blocking their activity; they can agglutinate (clump together) pathogens to make them easier for phagocytes to engulf; and they can activate the complement system — a cascade of proteins that punches holes in bacterial membranes.',
          'T lymphocytes (T cells) are responsible for the cell-mediated immune response. Helper T cells (CD4⁺) are the coordinators of the adaptive response — they recognise antigen-presenting cells, release cytokines (chemical signals) to activate B cells and cytotoxic T cells, and direct the overall immune response. Cytotoxic T cells (CD8⁺, also called killer T cells) directly destroy cells that display the foreign antigen — including virus-infected body cells and cancer cells. HIV specifically destroys helper T cells, progressively crippling the adaptive immune response and eventually leaving the body defenceless (AIDS).',
        ],
      },
      {
        id: 's4',
        title: '4. Vaccines and Immunity',
        paragraphs: [
          'A vaccine is a biological preparation that provides active immunity to a specific disease without causing the disease itself. Vaccines work by exploiting the adaptive immune system\'s capacity for immunological memory: by exposing the immune system to a safe form of a pathogen (or a key antigen from it), they prime the immune system to respond rapidly and powerfully if the real pathogen is encountered later.',
          'Vaccines come in several forms. Live attenuated vaccines use a weakened form of the pathogen (e.g. measles, mumps, rubella — the MMR vaccine); they produce a strong, long-lasting immune response because they closely mimic natural infection, but cannot be used in immunocompromised individuals. Inactivated vaccines use killed pathogens (e.g. flu vaccine, polio IPV); they are safer but typically produce a weaker response and may require booster doses. Subunit vaccines use just a specific protein from the pathogen (e.g. hepatitis B, HPV vaccines) rather than the whole organism. mRNA vaccines (e.g. the Pfizer and Moderna COVID-19 vaccines) instruct the body\'s cells to produce a harmless piece of the pathogen (the spike protein) to trigger an immune response — this technology had been in development for decades before its first large-scale use in 2020.',
          'Herd immunity (community immunity) occurs when a sufficiently large proportion of a population has become immune to a disease — either through vaccination or prior infection — that the pathogen can no longer spread efficiently, even protecting those who are not immune. The proportion required varies by how contagious the disease is. For measles, which has a very high reproduction number (R₀ ≈ 15), approximately 95% immunity is needed for herd immunity. For COVID-19 (R₀ ≈ 2–3 for early strains), around 50–67% immunity was estimated to be sufficient.',
          'Autoimmune diseases occur when the immune system fails to distinguish "self" from "non-self" and attacks the body\'s own healthy tissues. Examples include type 1 diabetes (attack on insulin-producing beta cells), rheumatoid arthritis (attack on joint linings), lupus (widespread tissue inflammation), and multiple sclerosis (attack on myelin sheaths). Normally, T cells that recognise self-antigens are eliminated in the thymus during development (a process called clonal deletion). Autoimmune diseases arise when this process fails. Allergies represent another form of immune malfunction — an exaggerated response to harmless environmental antigens (allergens) such as pollen, nuts, or pet dander.',
        ],
      },
    ],
    flow: [
      { type: 'section', idx: 0 },
      { type: 'checkpoint', idx: 0 },
      { type: 'section', idx: 1 },
      { type: 'section', idx: 2 },
      { type: 'checkpoint', idx: 1 },
      { type: 'section', idx: 3 },
      { type: 'checkpoint', idx: 2 },
    ],
    checkpoints: [
      {
        idx: 0,
        questions: [
          {
            question: 'What is the first line of defence against pathogens?',
            options: [
              'Antibodies produced by B cells',
              'Physical and chemical barriers like skin, mucus, and stomach acid',
              'Phagocytes that engulf bacteria in the bloodstream',
              'Memory T cells that recognise specific antigens',
            ],
            correctIndex: 1,
            hint: 'The first line stops pathogens getting IN — it\'s not about recognising them, it\'s about blocking them physically.',
          },
          {
            question: 'What is inflammation and what causes it?',
            options: [
              'A targeted antibody response to a specific antigen',
              'The production of memory cells after the first exposure to a pathogen',
              'A non-specific response triggered by chemical signals, causing redness, warmth, and swelling to bring immune cells to the site',
              'The destruction of infected cells by cytotoxic T cells',
            ],
            correctIndex: 2,
            hint: 'Histamine and other signals trigger local blood vessel changes — it\'s a non-specific alarm system that calls in the phagocytes.',
          },
        ],
      },
      {
        idx: 1,
        questions: [
          {
            question: 'What is the role of antigen-presenting cells (e.g. macrophages, dendritic cells)?',
            options: [
              'They produce antibodies that neutralise pathogens',
              'They display pathogen fragments on their surface to activate T cells, linking the innate and adaptive immune responses',
              'They destroy virus-infected body cells directly',
              'They release histamine during allergic reactions',
            ],
            correctIndex: 1,
            hint: 'Think of them as "wanted poster" cells — they show T cells what the enemy looks like, triggering the specific adaptive response.',
          },
          {
            question: 'Why does a very low white blood cell count leave a person vulnerable to infection?',
            options: [
              'White blood cells produce all the body\'s antibodies, and fewer cells means fewer antibodies',
              'White blood cells are the key defenders — without enough phagocytes, T cells, and B cells, pathogens can multiply unchecked',
              'Low white blood cell counts prevent the formation of physical barriers like skin',
              'White blood cells produce stomach acid, so fewer cells means less first-line defence',
            ],
            correctIndex: 1,
            hint: 'This is why chemotherapy patients and HIV patients are so vulnerable to "opportunistic" infections that a healthy immune system would destroy easily.',
          },
        ],
      },
      {
        idx: 2,
        questions: [
          {
            question: 'How do antibodies neutralise pathogens?',
            options: [
              'They directly digest bacteria using enzymes',
              'They bind to antigens on pathogens, blocking them, clumping them for phagocytes, and activating the complement system',
              'They stimulate bone marrow to produce more red blood cells',
              'They insert into pathogen cell membranes and destroy them directly',
            ],
            correctIndex: 1,
            hint: 'Antibodies are like molecular handcuffs — they grab onto the pathogen\'s surface and either block it, flag it for phagocytes, or trigger complement proteins.',
          },
          {
            question: 'How do mRNA vaccines (like the COVID-19 vaccines) work?',
            options: [
              'They inject dead virus particles to trigger an immune response',
              'They inject antibodies directly into the bloodstream',
              'They deliver instructions for cells to produce a harmless viral protein, triggering an immune response and memory cell formation',
              'They insert viral genes permanently into human chromosomes',
            ],
            correctIndex: 2,
            hint: 'mRNA is temporary — it\'s read by ribosomes to make a viral protein, the immune system responds, and then the mRNA is broken down. No DNA is involved.',
          },
        ],
      },
    ],
  },

  // ── LESSON 10 ─────────────────────────────────────────────────────────────
  {
    id: 'enzymes-respiration',
    title: 'Enzymes & Cellular Respiration',
    description: 'Discover how biological catalysts work, explore the chemistry of cellular respiration, and understand how cells extract usable energy from glucose as ATP.',
    readTime: '14 min',
    emoji: '⚡',
    color: '#fffbee',
    border: '#d4c07a',
    sections: [
      {
        id: 's1',
        title: '1. What Are Enzymes?',
        paragraphs: [
          'Enzymes are biological catalysts — proteins (with a few RNA exceptions called ribozymes) that speed up chemical reactions in living cells without being consumed in the process. Almost every chemical reaction in a cell requires an enzyme. Without enzymes, most biological reactions would occur far too slowly to support life — a reaction that an enzyme completes in a millisecond might take years to occur spontaneously at body temperature.',
          'Enzymes work by lowering the activation energy of a reaction — the minimum energy needed to start the reaction. Reactant molecules (called substrates) must collide with sufficient energy to react. By holding substrates in the precise orientation needed for the reaction and by straining chemical bonds, enzymes reduce the energy barrier, allowing reactions to proceed rapidly at the mild temperatures found in living cells. Enzymes are extremely specific — each enzyme typically catalyses only one reaction or type of reaction, acting on one specific substrate.',
          'Enzyme specificity arises from their three-dimensional structure. Each enzyme has a precisely shaped region called the active site — a pocket or groove on the protein surface with a unique shape and chemical character. The substrate fits into the active site rather like a key into a lock (the lock-and-key model). In reality, both the enzyme and substrate change shape slightly when they meet — the induced fit model, proposed by Daniel Koshland in 1958, better reflects experimental observations. The active site residues form temporary bonds with the substrate, facilitating the reaction.',
          'Enzyme activity is sensitive to environmental conditions. Temperature affects how frequently enzyme and substrate molecules collide: activity increases with temperature up to an optimum (typically ~37°C for human enzymes) — beyond this the enzyme begins to denature (its 3D shape unfolds, permanently destroying the active site). pH also affects activity: each enzyme has an optimum pH (usually around 7 for most body enzymes, but stomach pepsin works best at pH 2). Extreme pH disrupts the hydrogen bonds and ionic interactions that maintain the enzyme\'s shape. These temperature and pH sensitivities explain why a high fever is dangerous and why different enzymes work in different parts of the digestive system.',
        ],
      },
      {
        id: 's2',
        title: '2. How Enzymes Work — Active Site and Substrate',
        paragraphs: [
          'The mechanism of enzyme action can be understood in four steps. First, the substrate binds to the enzyme\'s active site, forming an enzyme-substrate complex. The binding is driven by complementary shapes and chemical interactions (hydrogen bonds, ionic attractions, hydrophobic interactions). Second, the enzyme undergoes an induced fit — it changes shape slightly to grip the substrate tightly. Third, the active site residues facilitate the chemical reaction — they may donate or accept protons, provide a favourable chemical environment, or physically strain bonds in the substrate to weaken them. Fourth, the products are released, the enzyme returns to its original shape, and the active site is free to bind a new substrate molecule.',
          'Enzymes can be regulated by inhibitors — molecules that reduce enzyme activity. Competitive inhibitors have a shape similar to the substrate and compete with it for the active site. The inhibitor occupies the active site but is not transformed — it simply blocks the substrate from binding. Adding more substrate can overcome competitive inhibition by outcompeting the inhibitor. Non-competitive inhibitors bind to a different site on the enzyme (the allosteric site), changing the enzyme\'s overall shape so that the active site no longer fits the substrate. Non-competitive inhibition cannot be overcome by adding more substrate.',
          'Many enzymes require additional, non-protein components to function. Cofactors are inorganic ions (such as zinc, copper, or iron) that stabilise enzyme shape or directly participate in catalysis. Coenzymes are organic molecules (often derived from vitamins) that act as temporary carriers, transferring chemical groups between enzymes. NAD⁺ and FAD are crucial coenzymes in cellular respiration — they accept hydrogen atoms (electrons) from metabolic reactions and carry them to the electron transport chain. This is why vitamins (the dietary source of coenzymes) are essential in such tiny amounts — even a small deficiency impairs numerous enzymatic processes.',
          'Feedback inhibition is an elegant regulatory mechanism in metabolic pathways. If the end product of a pathway accumulates, it can act as an allosteric inhibitor of the first enzyme in the pathway, slowing or stopping its own production. This is a common and efficient way for cells to self-regulate — the enzyme that starts a pathway is switched off when its product is no longer needed, preventing waste. For example, the amino acid isoleucine inhibits the first enzyme in the pathway that synthesises it: as isoleucine concentrations rise, the pathway shuts down; as it is used up, the pathway restarts.',
        ],
      },
      {
        id: 's3',
        title: '3. Overview of Cellular Respiration',
        paragraphs: [
          'Cellular respiration is the process by which cells extract energy from organic molecules (primarily glucose) and convert it into ATP, the cell\'s usable energy currency. The overall equation for aerobic respiration is: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP. Despite this simple summary, the process involves over 20 enzyme-catalysed reactions, organised into three interconnected stages: glycolysis, the Krebs cycle (citric acid cycle), and the electron transport chain and oxidative phosphorylation.',
          'Glycolysis ("splitting of sugar") is the first stage and occurs in the cytoplasm of all living cells — it is the most ancient metabolic pathway, shared by virtually every organism. Glucose (a 6-carbon sugar) is split into two molecules of pyruvate (3 carbons each). The process uses 2 ATP but generates 4 ATP — a net gain of 2 ATP. It also produces 2 molecules of NADH (each carrying two electrons). Glycolysis does not require oxygen and is the only source of ATP in anaerobic conditions (without oxygen). In animals and fungi, anaerobic conditions lead to lactic acid fermentation or ethanol fermentation, which regenerate the NAD⁺ needed for glycolysis to continue.',
          'If oxygen is available, pyruvate is transported into the mitochondria and converted to acetyl CoA in a preparatory step, releasing CO₂ and producing NADH. Acetyl CoA then enters the Krebs cycle (named after Hans Krebs, who mapped it in the 1930s). In this cycle, each acetyl group (2 carbons) is joined to a 4-carbon compound, and as the cycle turns, CO₂ is released, electrons are picked up by NAD⁺ and FAD (producing NADH and FADH₂), and a small amount of ATP is made directly. Two turns of the cycle (one per original glucose molecule) yield 2 ATP, 6 NADH, and 2 FADH₂.',
          'The electron transport chain (ETC) in the inner mitochondrial membrane is where most ATP is generated — roughly 32 of the approximately 36–38 ATP molecules produced per glucose. NADH and FADH₂ donate their electrons to the chain. As electrons pass down the chain through a series of protein complexes, the energy released is used to pump protons across the membrane, creating a steep concentration gradient. Protons flow back through ATP synthase — the molecular motor — spinning it like a turbine and generating ATP. This process is called oxidative phosphorylation. Oxygen is the final electron acceptor, combining with electrons and protons to form water — which is why aerobic respiration requires oxygen.',
        ],
      },
      {
        id: 's4',
        title: '4. ATP and Energy in the Cell',
        paragraphs: [
          'ATP (adenosine triphosphate) is the universal energy currency of all living cells. It consists of an adenosine molecule (adenine base + ribose sugar) linked to three phosphate groups. The bonds between the second and third phosphate groups are high-energy bonds. When the terminal phosphate is cleaved by hydrolysis (ATP → ADP + Pᵢ + energy), a substantial amount of free energy is released — about 30.5 kJ/mol under standard conditions, more in cellular conditions. This energy is used to power virtually every energy-requiring process in the cell.',
          'ATP powers an enormous diversity of cellular work: mechanical work (muscle contraction, chromosome movement, flagella rotation), active transport (pumping ions across membranes against their concentration gradient, e.g. the sodium-potassium pump), biosynthetic work (building macromolecules from monomers — synthesising proteins, DNA, carbohydrates, and lipids), and chemical signalling. Every time ATP is used, it becomes ADP (adenosine diphosphate), which is then recharged back to ATP by cellular respiration. A resting human turns over roughly 40 kg of ATP per day; during intense exercise this can reach several hundred kilograms.',
          'The efficiency of aerobic respiration can be calculated: complete oxidation of one glucose molecule yields approximately 36–38 ATP molecules. The theoretical maximum energy in a glucose molecule (as captured by complete combustion to CO₂ and H₂O) is 2,870 kJ/mol. The free energy of 38 ATP molecules is approximately 38 × 30.5 = 1,159 kJ. This gives an efficiency of about 40% — considerably better than most petrol engines (~25%). The remaining energy is released as heat, which is why exercising generates body warmth.',
          'Organisms that cannot carry out aerobic respiration rely on anaerobic pathways. In yeast, glycolysis is followed by alcoholic fermentation: pyruvate is converted to ethanol and CO₂, regenerating NAD⁺ so glycolysis can continue. This is the biochemical basis of brewing and baking. In human muscle cells under intense exercise (when oxygen supply cannot keep up with demand), pyruvate is converted to lactate, also regenerating NAD⁺ — this is what causes the burning sensation in working muscles. While anaerobic respiration produces far less ATP per glucose (just 2 ATP from glycolysis) it can proceed at an extremely high rate, providing rapid energy bursts when oxygen delivery is the limiting factor. Many organisms, from bacteria to parasitic worms, are obligate anaerobes, surviving entirely without oxygen.',
        ],
      },
    ],
    flow: [
      { type: 'section', idx: 0 },
      { type: 'checkpoint', idx: 0 },
      { type: 'section', idx: 1 },
      { type: 'section', idx: 2 },
      { type: 'checkpoint', idx: 1 },
      { type: 'section', idx: 3 },
      { type: 'checkpoint', idx: 2 },
    ],
    checkpoints: [
      {
        idx: 0,
        questions: [
          {
            question: 'How do enzymes speed up chemical reactions?',
            options: [
              'They increase the temperature inside the cell',
              'They lower the activation energy of the reaction',
              'They provide extra reactant molecules',
              'They permanently change the chemical structure of the substrate',
            ],
            correctIndex: 1,
            hint: 'Enzymes don\'t add energy — they reduce the energy barrier that needs to be overcome for the reaction to proceed.',
          },
          {
            question: 'What happens to an enzyme when the temperature exceeds its optimum?',
            options: [
              'It slows down but retains its active site structure',
              'It runs out of substrate and stops working',
              'It denatures — its 3D shape unfolds, permanently destroying the active site',
              'It converts to a different enzyme type',
            ],
            correctIndex: 2,
            hint: 'Denaturation is permanent — like cooking an egg. The protein unfolds and can\'t function anymore.',
          },
        ],
      },
      {
        idx: 1,
        questions: [
          {
            question: 'What is the difference between competitive and non-competitive inhibition?',
            options: [
              'Competitive inhibitors are more harmful; non-competitive inhibitors are harmless',
              'Competitive inhibitors bind to the active site and can be overcome with more substrate; non-competitive inhibitors bind elsewhere and cannot be overcome with more substrate',
              'Non-competitive inhibitors bind to the active site; competitive inhibitors bind to the allosteric site',
              'Both types bind to the active site but competitive inhibitors are permanent',
            ],
            correctIndex: 1,
            hint: 'Competitive = fighting for the same seat (active site). Non-competitive = sits elsewhere but deforms the whole enzyme so the substrate can\'t fit.',
          },
          {
            question: 'What is feedback inhibition in a metabolic pathway?',
            options: [
              'An enzyme reactivating itself when product levels are high',
              'The end product of a pathway inhibiting the first enzyme in the pathway, switching off its own production',
              'A coenzyme blocking substrate binding when fully saturated',
              'Increased substrate concentration reducing enzyme activity',
            ],
            correctIndex: 1,
            hint: 'It\'s a self-regulating loop — when enough product is made, it turns off the factory that made it. Efficient and elegant.',
          },
        ],
      },
      {
        idx: 2,
        questions: [
          {
            question: 'Where does glycolysis take place, and what does it produce per glucose molecule?',
            options: [
              'In the mitochondria; 36 ATP',
              'In the nucleus; 2 ATP and 2 NADH',
              'In the cytoplasm; a net gain of 2 ATP and 2 NADH',
              'In the smooth ER; 4 ATP and 2 FADH₂',
            ],
            correctIndex: 2,
            hint: 'Glycolysis is the most ancient stage — it works everywhere, even without mitochondria, and yields 4 ATP but uses 2, so net gain is 2.',
          },
          {
            question: 'Why does aerobic respiration require oxygen?',
            options: [
              'Oxygen is needed to break the bonds in glucose during glycolysis',
              'Oxygen activates the enzyme ATP synthase',
              'Oxygen is the final electron acceptor in the electron transport chain, combining with electrons and protons to form water',
              'Oxygen is needed to produce NADH in the Krebs cycle',
            ],
            correctIndex: 2,
            hint: 'Without oxygen to accept electrons at the end of the chain, the whole electron transport chain would back up and stop — and so would ATP production.',
          },
        ],
      },
    ],
  },
]
