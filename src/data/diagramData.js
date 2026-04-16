export const diagrams = {
  cell: {
    id: 'cell',
    label: 'Animal Cell',
    emoji: '🔬',
    parts: [
      {
        id: 'cytoplasm',
        label: 'Cytoplasm',
        shortDescription: 'The jelly-like fluid that fills the cell and suspends its organelles.',
        fullDescription:
          'The cytoplasm is a thick, gel-like substance made mostly of water, salts, and proteins. It fills the space between the cell membrane and the nucleus, holding all the organelles in place. Many chemical reactions of the cell take place here, including glycolysis — the first stage of cellular respiration. The cytoplasm also helps distribute materials throughout the cell.',
        x: 8,
        y: 58,
      },
      {
        id: 'cell-membrane',
        label: 'Cell Membrane',
        shortDescription: 'A flexible barrier that controls what enters and leaves the cell.',
        fullDescription:
          'The cell membrane is a thin, flexible structure made of a phospholipid bilayer embedded with proteins. It acts as the cell\'s gatekeeper, using selective permeability to allow essential molecules like oxygen and glucose in while keeping harmful substances out. Proteins in the membrane act as channels, receptors, and transporters. It also plays a key role in cell signalling and communication with neighbouring cells.',
        x: 87,
        y: 45,
      },
      {
        id: 'nucleus',
        label: 'Nucleus',
        shortDescription: 'The control centre of the cell, containing the cell\'s DNA.',
        fullDescription:
          'The nucleus is the largest organelle in most animal cells and acts as the command centre. It contains the cell\'s genetic material — DNA — organised into chromosomes. The nucleus is surrounded by a double membrane called the nuclear envelope, which has pores that allow molecules to pass in and out. Inside is the nucleolus, where ribosomes are assembled. The nucleus controls cell growth, metabolism, and reproduction.',
        x: 42,
        y: 47,
      },
      {
        id: 'mitochondria',
        label: 'Mitochondria',
        shortDescription: 'The powerhouse of the cell — produces ATP through cellular respiration.',
        fullDescription:
          'Mitochondria are oval-shaped organelles with a double membrane. The inner membrane is folded into structures called cristae, which massively increase the surface area for chemical reactions. Through a process called aerobic respiration, mitochondria convert glucose and oxygen into ATP (adenosine triphosphate) — the cell\'s usable energy currency. Cells with high energy demands, like muscle cells, have hundreds of mitochondria. Fascinatingly, mitochondria have their own DNA, suggesting they were once free-living bacteria.',
        x: 73,
        y: 30,
      },
      {
        id: 'er',
        label: 'Endoplasmic Reticulum',
        shortDescription: 'A network of membranes that transports and processes proteins and lipids.',
        fullDescription:
          'The endoplasmic reticulum (ER) is an interconnected network of folded membranes extending from the nuclear envelope. There are two types: rough ER, studded with ribosomes that synthesise proteins destined for secretion or the cell membrane; and smooth ER, which synthesises lipids, stores calcium, and detoxifies drugs and poisons. Together they form the cell\'s internal transport highway.',
        x: 54,
        y: 27,
      },
      {
        id: 'golgi',
        label: 'Golgi Apparatus',
        shortDescription: 'The cell\'s post office — packages and ships proteins to their destinations.',
        fullDescription:
          'The Golgi apparatus is a stack of flattened membrane sacs that receives proteins from the endoplasmic reticulum and modifies, sorts, and packages them. It acts like a postal sorting office: proteins arrive at the cis face, are processed as they move through, and exit from the trans face in vesicles. These vesicles carry proteins to the cell membrane for secretion, to lysosomes, or to other organelles. Without the Golgi, cells could not efficiently deliver proteins where they\'re needed.',
        x: 62,
        y: 72,
      },
      {
        id: 'ribosome',
        label: 'Ribosome',
        shortDescription: 'Tiny structures that build proteins by reading mRNA instructions.',
        fullDescription:
          'Ribosomes are the protein-building machinery of the cell — small but essential. They are made of ribosomal RNA (rRNA) and proteins, and they translate messenger RNA (mRNA) into chains of amino acids that fold into functional proteins. Ribosomes can be free-floating in the cytoplasm, making proteins for use inside the cell, or attached to the rough ER, making proteins for export. A single cell can contain millions of ribosomes.',
        x: 27,
        y: 72,
      },
      {
        id: 'vacuole',
        label: 'Vacuole',
        shortDescription: 'A storage compartment that holds water, nutrients, or waste products.',
        fullDescription:
          'In animal cells, vacuoles are small membrane-bound sacs used for temporary storage of water, food particles, or waste. Unlike plant cells (which have one large central vacuole), animal cells have several smaller vacuoles. They help maintain the cell\'s internal balance, assist in digestion when they fuse with lysosomes to form food vacuoles, and remove waste from the cell. Some single-celled organisms use contractile vacuoles to pump out excess water.',
        x: 23,
        y: 33,
      },
    ],
  },

  heart: {
    id: 'heart',
    label: 'Human Heart',
    emoji: '🫀',
    parts: [
      {
        id: 'left-ventricle',
        label: 'Left Ventricle',
        shortDescription: 'The heart\'s strongest chamber — pumps oxygenated blood to the whole body.',
        fullDescription:
          'The left ventricle is the most muscular chamber of the heart, with thick walls that generate enough pressure to push oxygenated blood through the aorta and all the way around the body. It receives oxygenated blood from the left atrium via the mitral (bicuspid) valve and ejects it into the aorta through the aortic valve. Because it must pump blood against high systemic pressure, its walls are about three times thicker than the right ventricle. Damage to the left ventricle is a common cause of heart failure.',
        x: 32,
        y: 67,
      },
      {
        id: 'right-ventricle',
        label: 'Right Ventricle',
        shortDescription: 'Pumps deoxygenated blood to the lungs via the pulmonary artery.',
        fullDescription:
          'The right ventricle receives deoxygenated blood from the right atrium through the tricuspid valve and pumps it into the pulmonary artery toward the lungs. Its walls are thinner than the left ventricle because it only needs to pump blood through the low-pressure pulmonary circulation. It wraps around the left ventricle in a crescent shape. The pulmonary semilunar valve prevents blood from flowing back once it\'s been ejected.',
        x: 64,
        y: 67,
      },
      {
        id: 'left-atrium',
        label: 'Left Atrium',
        shortDescription: 'Receives freshly oxygenated blood returning from the lungs.',
        fullDescription:
          'The left atrium is the upper-left chamber of the heart and receives oxygenated blood from the lungs via the pulmonary veins. It acts as a holding chamber, collecting blood during ventricular contraction before sending it to the left ventricle through the mitral valve. Though its walls are thin compared to the ventricles, it plays a crucial role in maintaining efficient blood flow. Atrial fibrillation — an irregular heartbeat — most commonly originates here.',
        x: 30,
        y: 27,
      },
      {
        id: 'right-atrium',
        label: 'Right Atrium',
        shortDescription: 'Collects deoxygenated blood from the body via the vena cava.',
        fullDescription:
          'The right atrium receives deoxygenated blood from the body through two large veins: the superior vena cava (from the upper body) and the inferior vena cava (from the lower body). It also receives blood from the coronary sinus, which drains the heart muscle itself. From here, blood passes through the tricuspid valve into the right ventricle. The sinoatrial (SA) node — the heart\'s natural pacemaker — is located in the wall of the right atrium.',
        x: 68,
        y: 27,
      },
      {
        id: 'aorta',
        label: 'Aorta',
        shortDescription: 'The largest artery in the body — carries oxygenated blood from the heart.',
        fullDescription:
          'The aorta is the largest blood vessel in the human body, with a diameter of about 3 cm. It emerges from the top of the left ventricle and arches over the heart before descending through the chest and abdomen. It distributes oxygenated blood to all parts of the body through smaller branching arteries. The aortic valve at its base prevents backflow into the left ventricle between heartbeats. The aorta must withstand enormous pressure with every heartbeat.',
        x: 42,
        y: 7,
      },
      {
        id: 'pulmonary-artery',
        label: 'Pulmonary Artery',
        shortDescription: 'Carries deoxygenated blood from the right ventricle to the lungs.',
        fullDescription:
          'The pulmonary artery is unique among arteries because it carries deoxygenated blood — the opposite of most arteries. It emerges from the right ventricle and splits into the left and right pulmonary arteries, which carry blood to each lung. In the lungs, blood releases CO₂ and picks up oxygen before returning to the heart. This short loop — heart to lungs and back — is called pulmonary circulation. The pulmonary artery has thinner walls than the aorta because blood pressure is lower in this circuit.',
        x: 60,
        y: 10,
      },
      {
        id: 'pulmonary-vein',
        label: 'Pulmonary Vein',
        shortDescription: 'Returns freshly oxygenated blood from the lungs to the left atrium.',
        fullDescription:
          'The pulmonary veins are the only veins in the body that carry oxygenated blood. There are four pulmonary veins (two from each lung) that drain into the left atrium. After blood has been oxygenated in the lung capillaries and had carbon dioxide removed, the pulmonary veins return it to the heart to be pumped around the body. This completes the pulmonary circuit. Blockages or abnormalities in the pulmonary veins can lead to pulmonary hypertension.',
        x: 20,
        y: 17,
      },
      {
        id: 'vena-cava',
        label: 'Vena Cava',
        shortDescription: 'The largest vein — returns all deoxygenated blood from the body to the heart.',
        fullDescription:
          'The vena cava consists of two large veins: the superior vena cava, which returns blood from the head, neck, arms, and chest; and the inferior vena cava, which returns blood from the abdomen and lower limbs. Together they are the final stop in systemic circulation, draining all deoxygenated blood into the right atrium. The inferior vena cava is the largest vein in the body. Unlike arteries, veins have thin walls and contain valves to prevent backflow against gravity.',
        x: 80,
        y: 17,
      },
    ],
  },

  leaf: {
    id: 'leaf',
    label: 'Leaf Cross-Section',
    emoji: '🌿',
    parts: [
      {
        id: 'cuticle',
        label: 'Cuticle',
        shortDescription: 'A waxy, waterproof layer coating the outer surface of the leaf.',
        fullDescription:
          'The cuticle is a thin layer of waxy cutin secreted by the epidermal cells of the leaf. It is transparent to allow light through and waterproof to reduce water loss through the leaf surface — a process called transpiration. The cuticle is thicker on the upper surface, which faces the sun and loses more water. Cacti and desert plants have especially thick cuticles as an adaptation to dry environments.',
        x: 14,
        y: 10,
      },
      {
        id: 'upper-epidermis',
        label: 'Upper Epidermis',
        shortDescription: 'A protective single cell layer on the top surface of the leaf.',
        fullDescription:
          'The upper epidermis is a single layer of transparent cells that forms the outer protective covering on the top (adaxial) surface of the leaf. Its cells are tightly packed with no chloroplasts, so they allow maximum light to pass through to the photosynthesising cells below. It secretes the waxy cuticle on its outer surface and produces guard cells that flank stomata. It also protects the leaf from mechanical damage, pathogens, and excessive water loss.',
        x: 84,
        y: 13,
      },
      {
        id: 'palisade',
        label: 'Palisade Mesophyll',
        shortDescription: 'Tightly packed cells packed with chloroplasts — the main site of photosynthesis.',
        fullDescription:
          'Palisade mesophyll cells are tall, column-shaped cells arranged directly below the upper epidermis. They contain the highest concentration of chloroplasts in the leaf and are the primary site of photosynthesis. Their vertical orientation and tight packing maximise light absorption. Each cell can contain 40–50 chloroplasts, and they can rotate to track the angle of sunlight. The palisade layer is thicker in sun leaves than in shade leaves.',
        x: 20,
        y: 30,
      },
      {
        id: 'spongy',
        label: 'Spongy Mesophyll',
        shortDescription: 'Loosely arranged cells with air spaces that allow gas exchange.',
        fullDescription:
          'Spongy mesophyll lies below the palisade layer and is made up of irregularly shaped cells with large air spaces between them. These air spaces connect to the stomata and facilitate the diffusion of gases — CO₂ in for photosynthesis and O₂ out as a by-product. The cells also contain chloroplasts and contribute to photosynthesis, though less efficiently than palisade cells. The moist cell surfaces allow CO₂ to dissolve before entering the cells.',
        x: 76,
        y: 57,
      },
      {
        id: 'lower-epidermis',
        label: 'Lower Epidermis',
        shortDescription: 'The protective bottom layer of the leaf, containing most of the stomata.',
        fullDescription:
          'The lower epidermis is the outermost layer on the underside (abaxial surface) of the leaf. Like the upper epidermis, its cells are transparent and tightly packed, but it contains far more stomata — the tiny pores used for gas exchange. Being on the underside reduces direct sun exposure, lowering the risk of water evaporation from open stomata. In some plants, tiny hair-like structures called trichomes grow from the lower epidermis to further reduce water loss.',
        x: 84,
        y: 83,
      },
      {
        id: 'stomata',
        label: 'Stomata',
        shortDescription: 'Tiny pores in the leaf surface that allow gas exchange and transpiration.',
        fullDescription:
          'Stomata (singular: stoma) are microscopic pores found mainly on the lower epidermis of leaves. They allow carbon dioxide to enter the leaf for photosynthesis and oxygen and water vapour to exit. Each stoma is flanked by two guard cells that control whether it opens or closes. Stomata open during the day when photosynthesis requires CO₂, and close at night or during drought to conserve water. A single leaf may have thousands to hundreds of thousands of stomata.',
        x: 52,
        y: 90,
      },
      {
        id: 'guard-cells',
        label: 'Guard Cells',
        shortDescription: 'Bean-shaped cells that open and close the stomatal pore.',
        fullDescription:
          'Guard cells are specialised kidney- or bean-shaped cells that flank each stoma. Unlike other epidermal cells, guard cells contain chloroplasts and can photosynthesise. When light hits them, they produce sugar and actively pump potassium ions in, causing water to follow by osmosis. This makes the cells turgid and their uneven wall thicknesses cause them to bow outward, opening the pore. At night, or when the plant is dehydrated, guard cells lose water and become flaccid, closing the stoma.',
        x: 30,
        y: 88,
      },
      {
        id: 'vascular-bundle',
        label: 'Vascular Bundle',
        shortDescription: 'The leaf\'s transport system — contains xylem and phloem vessels.',
        fullDescription:
          'Vascular bundles form the veins of a leaf and contain two types of transport tissue: xylem and phloem. Xylem carries water and dissolved minerals from the roots upward to the leaf — this flow is driven by transpiration pull. Phloem transports the sugars produced by photosynthesis away from the leaf to the rest of the plant — a process called translocation. Vascular bundles are surrounded by bundle sheath cells and are embedded in the spongy mesophyll layer. They also provide structural support to the leaf.',
        x: 49,
        y: 52,
      },
    ],
  },

  plantCell: {
    id: 'plantCell',
    label: 'Plant Cell',
    emoji: '🌱',
    parts: [
      {
        id: 'cell-wall',
        label: 'Cell Wall',
        shortDescription: 'A rigid outer layer made of cellulose that gives plant cells their shape.',
        fullDescription:
          'The cell wall is a tough, non-living layer that surrounds the cell membrane in plant cells. Made primarily of cellulose fibres, it provides structural rigidity, protects against mechanical stress, and prevents the cell from bursting when water enters by osmosis. Unlike the cell membrane, the cell wall is fully permeable — it does not regulate what passes through it. Plant cell walls can also contain lignin (for extra strength in wood) and pectin (which glues cells together).',
        x: 6,
        y: 6,
      },
      {
        id: 'cell-membrane',
        label: 'Cell Membrane',
        shortDescription: 'A selectively permeable barrier just inside the cell wall.',
        fullDescription:
          'Shared with animal cells, the plant cell membrane is a phospholipid bilayer that controls the movement of substances into and out of the cell. It sits just inside the rigid cell wall and regulates the uptake of nutrients, the export of waste, and cell signalling. In plants, the membrane is also connected to the endoplasmic reticulum and other membrane systems within the cell. Carrier proteins embedded in the membrane allow active transport of ions against concentration gradients.',
        x: 10,
        y: 10,
      },
      {
        id: 'nucleus',
        label: 'Nucleus',
        shortDescription: 'The control centre that contains the plant cell\'s DNA.',
        fullDescription:
          'Like in animal cells, the plant cell nucleus is surrounded by a double nuclear envelope with pores. It houses the chromosomes and the nucleolus (which makes ribosomes). The nucleus directs cell activities by controlling gene expression — determining which proteins are made and when. In mature plant cells, the nucleus is often pushed to the side by the large central vacuole. It coordinates growth, reproduction, and responses to environmental stimuli such as light.',
        x: 66,
        y: 70,
      },
      {
        id: 'chloroplast',
        label: 'Chloroplast',
        shortDescription: 'The site of photosynthesis — uses sunlight to make glucose from CO₂ and water.',
        fullDescription:
          'Chloroplasts are oval organelles unique to plant cells and some algae. They contain stacks of disc-like thylakoid membranes called grana, where the light-dependent reactions of photosynthesis take place, converting light energy into chemical energy. The fluid-filled stroma surrounding the grana is the site of the light-independent (Calvin cycle) reactions, where CO₂ is fixed into glucose. Chloroplasts contain their own circular DNA and reproduce by binary fission — evidence of their ancient bacterial origin.',
        x: 22,
        y: 26,
      },
      {
        id: 'mitochondria',
        label: 'Mitochondria',
        shortDescription: 'Produces ATP — present in plant cells alongside chloroplasts.',
        fullDescription:
          'Plant cells contain mitochondria just like animal cells, because photosynthesis alone cannot power all cellular processes — especially at night when light is absent. Mitochondria carry out aerobic respiration, converting glucose and oxygen into ATP, CO₂, and water. Having both chloroplasts and mitochondria makes plant cells remarkably self-sufficient: they can both produce and consume chemical energy. Cells with high energy demands (e.g. in roots) have more mitochondria than leaf cells.',
        x: 83,
        y: 38,
      },
      {
        id: 'central-vacuole',
        label: 'Central Vacuole',
        shortDescription: 'A large, fluid-filled sac that maintains turgor pressure and stores cell sap.',
        fullDescription:
          'The central vacuole is the defining feature of a mature plant cell, sometimes occupying up to 90% of the cell\'s volume. It is filled with cell sap — a watery solution of sugars, salts, and pigments. Its primary function is to maintain turgor pressure: water enters the vacuole by osmosis, pressing the cytoplasm outward against the cell wall. This keeps plants rigid and upright. Wilting occurs when the central vacuole loses water. It also stores nutrients, waste products, and pigments such as the anthocyanins that give flowers their colours.',
        x: 49,
        y: 46,
      },
      {
        id: 'er',
        label: 'Endoplasmic Reticulum',
        shortDescription: 'An internal membrane network for protein and lipid transport.',
        fullDescription:
          'The endoplasmic reticulum (ER) in plant cells functions as in animal cells — rough ER (studded with ribosomes) synthesises proteins destined for membranes or secretion, while smooth ER handles lipid synthesis and calcium storage. In plant cells, the ER is also connected to plasmodesmata — tiny channels through the cell wall that link neighbouring cells. This ER–plasmodesmata network forms the symplast, allowing direct cell-to-cell communication and transport of molecules throughout the plant.',
        x: 76,
        y: 50,
      },
      {
        id: 'golgi',
        label: 'Golgi Apparatus',
        shortDescription: 'Packages and delivers proteins — also builds cell wall materials.',
        fullDescription:
          'The Golgi apparatus in plant cells performs the same sorting and packaging role as in animal cells but has an additional crucial job: it produces the cell wall components. It synthesises hemicelluloses, pectins, and other polysaccharides that are packaged into vesicles and transported to the cell surface, where they are incorporated into the growing cell wall. The Golgi is particularly active during cell division, when a new cell plate (the future cell wall) is being built between the two daughter cells.',
        x: 20,
        y: 72,
      },
    ],
  },

  brain: {
    id: 'brain',
    label: 'Human Brain',
    emoji: '🧠',
    parts: [
      {
        id: 'frontal-lobe',
        label: 'Frontal Lobe',
        shortDescription: 'Controls reasoning, planning, movement, and aspects of personality.',
        fullDescription:
          'The frontal lobe is the largest lobe of the brain, located at the front of the cerebrum. It is responsible for higher-order cognitive functions including decision-making, problem-solving, planning, and impulse control. The primary motor cortex, which directs voluntary movement, runs along the posterior edge of the frontal lobe. Broca\'s area (usually in the left frontal lobe) controls speech production. Damage to the frontal lobe can alter personality, reduce impulse control, or impair movement on the opposite side of the body.',
        x: 18,
        y: 40,
      },
      {
        id: 'parietal-lobe',
        label: 'Parietal Lobe',
        shortDescription: 'Processes sensory information and is key to spatial awareness.',
        fullDescription:
          'The parietal lobe sits behind the frontal lobe, separated by the central sulcus. Its primary somatosensory cortex receives and processes sensory signals from the skin, muscles, and joints — including touch, pressure, pain, temperature, and proprioception (body position). The parietal lobe also integrates sensory information to form a continuous map of your body in space, helping you reach for objects and navigate environments. Damage can cause spatial neglect — an inability to pay attention to one side of the environment.',
        x: 52,
        y: 16,
      },
      {
        id: 'temporal-lobe',
        label: 'Temporal Lobe',
        shortDescription: 'Handles hearing, memory formation, and language comprehension.',
        fullDescription:
          'The temporal lobe runs along the side of the brain, below the lateral fissure. The primary auditory cortex within it processes sounds. Wernicke\'s area (usually left temporal lobe) is critical for language comprehension. The temporal lobe is also closely connected to the hippocampus (deep within it), which is essential for forming new long-term memories. The amygdala, nearby, links emotions to memories. Temporal lobe epilepsy can cause déjà vu experiences and, in severe cases, memory impairments.',
        x: 25,
        y: 72,
      },
      {
        id: 'occipital-lobe',
        label: 'Occipital Lobe',
        shortDescription: 'The brain\'s visual processing centre — at the back of the cerebrum.',
        fullDescription:
          'The occipital lobe is found at the very back of the cerebrum. It contains the primary visual cortex, which receives raw visual information from the retinas (via the optic nerves and thalamus) and begins interpreting edges, motion, colour, and depth. Surrounding association areas process this raw data into recognisable objects and scenes. Damage to the occipital lobe can cause cortical blindness — the eyes work perfectly but the brain cannot process the signals. Migraines often originate here, sometimes producing visual auras.',
        x: 84,
        y: 44,
      },
      {
        id: 'cerebellum',
        label: 'Cerebellum',
        shortDescription: 'Coordinates movement, balance, and fine motor skills.',
        fullDescription:
          'The cerebellum ("little brain") sits at the back and bottom of the brain, beneath the occipital lobe. Despite being only about 10% of the brain\'s volume, it contains more than half of all its neurons. The cerebellum fine-tunes motor commands from the cerebral cortex, ensuring movements are smooth, precise, and well-timed. It also maintains posture and balance by integrating inputs from the eyes, ears, and proprioceptors. Learning motor skills (like riding a bike) is heavily dependent on the cerebellum. Damage causes ataxia — uncoordinated, stumbling movement.',
        x: 80,
        y: 82,
      },
      {
        id: 'brainstem',
        label: 'Brainstem',
        shortDescription: 'Controls vital automatic functions — breathing, heart rate, and sleep.',
        fullDescription:
          'The brainstem connects the cerebrum to the spinal cord and consists of three regions: the midbrain, pons, and medulla oblongata. It controls autonomic functions that keep us alive without conscious effort — including breathing rhythm, heart rate, blood pressure, swallowing, and the sleep–wake cycle. All information travelling between the brain and body passes through the brainstem. Many cranial nerves originate here. The reticular activating system within the brainstem maintains consciousness. Damage to the medulla is immediately life-threatening.',
        x: 52,
        y: 94,
      },
      {
        id: 'corpus-callosum',
        label: 'Corpus Callosum',
        shortDescription: 'A thick band of nerve fibres that connects the brain\'s two hemispheres.',
        fullDescription:
          'The corpus callosum is the largest white matter structure in the brain — a broad, flat bundle of about 250 million nerve fibres that links the left and right cerebral hemispheres. It allows the two halves of the brain to communicate and share information instantly. For instance, when you pick up an object with your right hand, the left hemisphere processes it, but the corpus callosum shares this information with the right hemisphere so both sides maintain a unified picture. In split-brain patients (where it has been severed), the two hemispheres can act almost independently.',
        x: 50,
        y: 41,
      },
      {
        id: 'hypothalamus',
        label: 'Hypothalamus',
        shortDescription: 'Regulates body temperature, hunger, thirst, hormones, and the sleep cycle.',
        fullDescription:
          'The hypothalamus is a small but critical region at the base of the brain, about the size of a pea. Despite its tiny size it acts as the master regulator of homeostasis — the body\'s internal balance. It controls body temperature, hunger, thirst, fatigue, and circadian rhythms. It also acts as the brain\'s endocrine control centre: by releasing releasing hormones to the pituitary gland just below it, the hypothalamus governs the entire hormonal system, including growth, stress response (cortisol), reproduction, and thyroid function.',
        x: 50,
        y: 70,
      },
    ],
  },

  dna: {
    id: 'dna',
    label: 'DNA Double Helix',
    emoji: '🧬',
    parts: [
      {
        id: 'sugar-phosphate-backbone',
        label: 'Sugar-Phosphate Backbone',
        shortDescription: 'The structural framework of the DNA strand — alternating sugar and phosphate groups.',
        fullDescription:
          'The sugar-phosphate backbone is the repeating structural core of each DNA strand. It consists of alternating deoxyribose sugar molecules and phosphate groups linked by covalent phosphodiester bonds. This backbone runs along the outside of the double helix and is hydrophilic (water-attracting), which keeps the molecule stable in the watery environment of the cell nucleus. The nitrogenous bases branch inward from the sugars. The two backbones run antiparallel to each other — one runs 5\'→3\' and the other 3\'→5\'.',
        x: 28,
        y: 25,
      },
      {
        id: 'nitrogenous-bases',
        label: 'Nitrogenous Bases',
        shortDescription: 'The information-carrying molecules — A, T, G, and C — that pair across the helix.',
        fullDescription:
          'Nitrogenous bases are the "letters" of the genetic code. There are four types in DNA: adenine (A) and guanine (G) are larger purines, while thymine (T) and cytosine (C) are smaller pyrimidines. Bases project inward from the sugar-phosphate backbone toward the centre of the helix, where they pair with bases on the opposite strand. The sequence of bases encodes all genetic information. The order of these bases in a gene specifies the sequence of amino acids in a protein via the genetic code.',
        x: 50,
        y: 30,
      },
      {
        id: 'hydrogen-bonds',
        label: 'Hydrogen Bonds',
        shortDescription: 'Weak bonds between complementary bases that hold the two DNA strands together.',
        fullDescription:
          'Hydrogen bonds are the relatively weak attractive forces that hold the two strands of the double helix together by linking complementary base pairs. Adenine forms two hydrogen bonds with thymine; guanine forms three hydrogen bonds with cytosine. Although individual hydrogen bonds are weak, the sheer number of base pairs in a DNA molecule (over 3 billion in human DNA) makes the overall structure highly stable. The weakness of individual bonds is actually beneficial — it allows the strands to be easily "unzipped" during DNA replication and transcription.',
        x: 50,
        y: 70,
      },
      {
        id: 'adenine',
        label: 'Adenine (A)',
        shortDescription: 'A purine base that always pairs with thymine via two hydrogen bonds.',
        fullDescription:
          'Adenine is a purine nitrogenous base — it has a double-ring structure. By Chargaff\'s rules, in any DNA molecule the amount of adenine always equals the amount of thymine. Adenine forms two hydrogen bonds with its complementary base thymine on the opposite strand. Beyond its role in DNA, adenine is also a key component of ATP (adenosine triphosphate), the cell\'s main energy currency, and of NAD and FAD, coenzymes central to cellular respiration and metabolism.',
        x: 38,
        y: 28,
      },
      {
        id: 'thymine',
        label: 'Thymine (T)',
        shortDescription: 'A pyrimidine base that pairs with adenine via two hydrogen bonds.',
        fullDescription:
          'Thymine is a pyrimidine nitrogenous base with a single-ring structure. It is unique to DNA — in RNA, thymine is replaced by uracil (U). Thymine pairs exclusively with adenine via two hydrogen bonds, ensuring complementary base pairing and accurate DNA replication. Ultraviolet (UV) radiation from the sun can cause two adjacent thymine bases on the same strand to bond abnormally to each other, forming a thymine dimer. These mutations are usually repaired by DNA repair enzymes, but if unrepaired they can lead to skin cancer.',
        x: 62,
        y: 30,
      },
      {
        id: 'guanine',
        label: 'Guanine (G)',
        shortDescription: 'A purine base that pairs with cytosine via three hydrogen bonds.',
        fullDescription:
          'Guanine is a purine — a double-ring nitrogenous base — that pairs with cytosine. This G-C pair forms three hydrogen bonds, making it a slightly stronger pairing than A-T. DNA sequences that are rich in G-C pairs require slightly more energy to denature (separate the two strands). By Chargaff\'s rules, the amount of guanine in a DNA molecule always equals the amount of cytosine. Guanine is also a component of GTP (guanosine triphosphate), which plays important roles in protein synthesis and cell signalling.',
        x: 38,
        y: 65,
      },
      {
        id: 'cytosine',
        label: 'Cytosine (C)',
        shortDescription: 'A pyrimidine base that pairs with guanine via three hydrogen bonds.',
        fullDescription:
          'Cytosine is a pyrimidine — a single-ring nitrogenous base — that specifically pairs with guanine. The three hydrogen bonds of a C-G pair make this the strongest of the two base-pair types. Cytosine can undergo a spontaneous chemical change (deamination) to uracil — one of the most common mutations in DNA. Organisms have evolved DNA repair systems to detect and correct these errors. In epigenetics, cytosine can be chemically modified by adding a methyl group (methylation), which can silence genes without altering the DNA sequence itself.',
        x: 62,
        y: 67,
      },
      {
        id: 'nucleotide',
        label: 'Nucleotide',
        shortDescription: 'The monomer unit of DNA — one phosphate group, one deoxyribose sugar, and one base.',
        fullDescription:
          'A nucleotide is the fundamental building block of DNA. Each nucleotide consists of three components bonded together: a phosphate group, a five-carbon deoxyribose sugar, and one of the four nitrogenous bases (A, T, G, or C). Nucleotides are joined end-to-end by phosphodiester bonds (between the phosphate of one nucleotide and the sugar of the next) to form a long polynucleotide strand. The specific sequence of nucleotides in a strand — determined by which base is attached — encodes the genetic information. DNA polymerase reads template strands and assembles new complementary nucleotide chains during replication.',
        x: 15,
        y: 84,
      },
    ],
  },

  eye: {
    id: 'eye',
    label: 'Human Eye',
    emoji: '👁️',
    parts: [
      {
        id: 'cornea',
        label: 'Cornea',
        shortDescription: 'The transparent front surface of the eye — refracts incoming light.',
        fullDescription:
          'The cornea is the clear, dome-shaped front window of the eye. It is the first and most powerful refractive surface, responsible for about 70% of the eye\'s total focusing power. The cornea has no blood vessels (it would block light) and receives oxygen directly from the air and tears. Its transparent curved surface bends (refracts) incoming light to begin focusing it on the retina. The cornea is highly sensitive to touch — the blink reflex is triggered by even the slightest contact. LASIK eye surgery reshapes the cornea to correct vision.',
        x: 10,
        y: 50,
      },
      {
        id: 'iris',
        label: 'Iris',
        shortDescription: 'The coloured, muscular ring that controls how much light enters the eye.',
        fullDescription:
          'The iris is the coloured part of the eye — its pigmentation (from brown to blue) is determined by the amount of melanin present. The iris contains two sets of smooth muscles: the circular sphincter pupillae (which contracts the pupil in bright light) and the radial dilator pupillae (which widens the pupil in dim light). This pupillary reflex regulates the amount of light reaching the retina, protecting it from over-exposure and optimising vision in varying light conditions. Interestingly, the iris pattern is unique to each individual and is used in biometric identification.',
        x: 22,
        y: 42,
      },
      {
        id: 'pupil',
        label: 'Pupil',
        shortDescription: 'The dark central opening in the iris through which light enters the eye.',
        fullDescription:
          'The pupil is not a structure in itself but an opening — the hole in the centre of the iris through which light passes into the eye. It appears dark because light entering the eye is absorbed by the retina and other internal structures with very little reflected back. The pupil changes size continuously in response to light intensity (pupillary reflex), emotional state (adrenaline dilates it), and accommodation (the near reflex also slightly constricts it). In a fully dark-adapted eye, the pupil can dilate to around 8 mm; in bright light, it constricts to as little as 1.5 mm.',
        x: 22,
        y: 50,
      },
      {
        id: 'lens',
        label: 'Lens',
        shortDescription: 'A flexible, transparent structure that fine-tunes focus by changing shape.',
        fullDescription:
          'The crystalline lens sits behind the iris and is connected to the ciliary muscle via suspensory ligaments. Its job is to fine-tune the focusing of light on the retina — a process called accommodation. When focusing on near objects, the ciliary muscles contract, reducing tension on the lens so it becomes rounder and more powerful. For distant objects, the muscles relax, flattening the lens. The lens is transparent because its cells lack nuclei and other organelles. As we age, the lens becomes less flexible, causing presbyopia (difficulty focusing on close objects). Cataracts are caused by cloudiness of the lens.',
        x: 33,
        y: 50,
      },
      {
        id: 'vitreous-humor',
        label: 'Vitreous Humor',
        shortDescription: 'A clear, jelly-like gel that fills the main chamber of the eye.',
        fullDescription:
          'The vitreous humor is a transparent, colourless gel — mostly water (99%) with collagen fibres and hyaluronic acid — that fills the large posterior segment of the eyeball behind the lens. It maintains the eye\'s spherical shape, holds the retina in place against the back of the eye, and transmits light without distortion. The floaters that many people see (small drifting shapes) are shadows cast by protein clumps or condensed collagen fibres within the vitreous humor. Unlike the aqueous humor (in the front chamber), the vitreous is not continuously replenished.',
        x: 58,
        y: 50,
      },
      {
        id: 'retina',
        label: 'Retina',
        shortDescription: 'The light-sensitive inner lining that converts light into electrical signals.',
        fullDescription:
          'The retina is a thin layer of neural tissue lining the back two-thirds of the eye. It contains two types of photoreceptor cells: rods, which detect light and dark in dim conditions (night vision); and cones, which detect colour and fine detail in bright light. There are about 120 million rods and 6 million cones in the human retina. The fovea, at the retina\'s centre, contains the highest density of cones and is responsible for sharp central vision. Light signals are converted into electrical impulses by the photoreceptors, processed by bipolar and ganglion cells, and sent to the brain via the optic nerve.',
        x: 86,
        y: 50,
      },
      {
        id: 'optic-nerve',
        label: 'Optic Nerve',
        shortDescription: 'Transmits visual signals from the retina to the brain\'s visual cortex.',
        fullDescription:
          'The optic nerve (cranial nerve II) is a bundle of about 1.2 million ganglion cell axons that carries visual information from the retina to the brain. It exits the back of the eye at the optic disc — a region devoid of photoreceptors, creating the "blind spot." The two optic nerves meet at the optic chiasm, where fibres from the nasal half of each retina cross over to the opposite side of the brain. This partial crossing means each hemisphere receives visual information from the opposite visual field. The signals are then processed by the thalamus before reaching the occipital lobe\'s visual cortex.',
        x: 92,
        y: 56,
      },
      {
        id: 'sclera',
        label: 'Sclera',
        shortDescription: 'The tough, white outer coat that gives the eyeball its shape and protection.',
        fullDescription:
          'The sclera is the opaque white outer layer of the eyeball, making up about 83% of its surface area. Made of dense, irregularly arranged collagen fibres, it is extremely tough and resists deformation, maintaining the eye\'s shape and protecting the delicate internal structures. The six extraocular muscles that move the eyeball are attached to the sclera. At the front, the sclera is continuous with the cornea; at the back, it is pierced by the optic nerve. The visible "white of the eye" is the anterior part of the sclera covered by the conjunctiva.',
        x: 50,
        y: 12,
      },
    ],
  },

  mitosis: {
    id: 'mitosis',
    label: 'Mitosis Stages',
    emoji: '🔄',
    parts: [
      {
        id: 'interphase',
        label: 'Interphase',
        shortDescription: 'The cell grows and replicates its DNA in preparation for division.',
        fullDescription:
          'Interphase is not a stage of mitosis but the phase the cell spends most of its life in. It has three sub-stages: G1 (cell growth and normal functions), S phase (DNA synthesis — each chromosome is duplicated to form sister chromatids), and G2 (further growth and preparation for division). During interphase the chromosomes are in their extended chromatin form — not yet condensed and visible. The centrosomes also duplicate during interphase. Only after completing all these preparations does a cell commit to dividing through the M phase (mitosis + cytokinesis).',
        x: 21,
        y: 20,
      },
      {
        id: 'prophase',
        label: 'Prophase',
        shortDescription: 'Chromosomes condense and become visible; the spindle begins to form.',
        fullDescription:
          'Prophase is the first and longest stage of mitosis. The chromatin fibres coil and condense into distinct X-shaped chromosomes (each consisting of two identical sister chromatids joined at the centromere). The nucleolus disappears. In the cytoplasm, the two centrosomes (each containing a pair of centrioles) move to opposite poles of the cell, and spindle fibres of tubulin protein begin extending between them. Toward the end of prophase (sometimes called prometaphase), the nuclear envelope breaks down, allowing the spindle to attach to the chromosomes.',
        x: 49,
        y: 20,
      },
      {
        id: 'metaphase',
        label: 'Metaphase',
        shortDescription: 'Chromosomes align at the cell\'s equatorial plate, attached to spindle fibres.',
        fullDescription:
          'Metaphase is the stage where condensed chromosomes line up along the cell\'s equatorial plane (the metaphase plate) midway between the two spindle poles. Each chromosome\'s centromere is attached to spindle fibres from both poles via protein complexes called kinetochores. The spindle assembly checkpoint ensures all chromosomes are correctly attached before the cell proceeds. Metaphase is the easiest stage to study chromosomes — they are maximally condensed and clearly visible. Karyotyping (photographing the chromosome set to detect abnormalities) uses cells arrested at metaphase.',
        x: 77,
        y: 20,
      },
      {
        id: 'anaphase',
        label: 'Anaphase',
        shortDescription: 'Sister chromatids are pulled apart to opposite poles of the cell.',
        fullDescription:
          'Anaphase begins when the enzyme separase cleaves the cohesin proteins holding sister chromatids together at their centromeres. The spindle fibres shorten, pulling the separated chromatids (now called individual chromosomes) toward opposite poles of the cell. The cell also elongates as non-kinetochore spindle fibres push the poles apart. This is the briefest stage of mitosis. At the end of anaphase, there are two complete sets of chromosomes at each pole. Any failure in chromatid separation (non-disjunction) can lead to cells with an incorrect chromosome number — a condition called aneuploidy.',
        x: 21,
        y: 60,
      },
      {
        id: 'telophase',
        label: 'Telophase',
        shortDescription: 'Two new nuclei form as chromosomes decondense at each pole.',
        fullDescription:
          'Telophase is essentially the reverse of prophase. At each pole, the chromosomes cluster together and begin to decondense back into chromatin. A new nuclear envelope reassembles around each set of chromosomes, the nucleolus reappears, and the spindle fibres disassemble. By the end of telophase there are two distinct nuclei in the cell, each with a complete diploid set of chromosomes — genetically identical to each other and to the original parent cell. Telophase overlaps with cytokinesis, the physical division of the cytoplasm.',
        x: 49,
        y: 60,
      },
      {
        id: 'cytokinesis',
        label: 'Cytokinesis',
        shortDescription: 'The cytoplasm divides, producing two separate daughter cells.',
        fullDescription:
          'Cytokinesis is the physical division of the cytoplasm following nuclear division. In animal cells, a contractile ring of actin and myosin filaments pinches the cell membrane inward, forming a cleavage furrow that deepens until the cell is cut in two. In plant cells (which have rigid walls), a cell plate forms from the inside out — vesicles from the Golgi apparatus fuse at the mid-plane, building new cell wall and membrane material that eventually joins the existing walls. The result of mitosis + cytokinesis is two genetically identical daughter cells, each with the same chromosome number as the parent.',
        x: 77,
        y: 60,
      },
      {
        id: 'spindle-fibers',
        label: 'Spindle Fibres',
        shortDescription: 'Protein threads made of tubulin that move chromosomes during cell division.',
        fullDescription:
          'Spindle fibres are made of microtubules — hollow tubes assembled from the protein tubulin. They form the mitotic spindle, the machinery that separates chromosomes during mitosis. Kinetochore microtubules attach to the centromere of each chromosome and shorten during anaphase to pull chromatids apart. Polar microtubules extend past the chromosomes and overlap at the cell\'s equator, pushing the spindle poles apart to elongate the cell. Astral microtubules anchor the spindle to the cell cortex. The drug colchicine blocks tubulin assembly and arrests cells at metaphase — a technique used in karyotyping.',
        x: 77,
        y: 48,
      },
      {
        id: 'chromosomes',
        label: 'Chromosomes',
        shortDescription: 'Condensed structures of DNA and protein — one pair for each gene-set.',
        fullDescription:
          'Chromosomes are compact structures of DNA wound around histone proteins, forming nucleosomes that are further coiled and folded. They become visible under a light microscope only when condensed during cell division. Humans have 46 chromosomes in 23 pairs (diploid) in most body cells. Each chromosome is duplicated before mitosis, so at the start of division, each consists of two identical sister chromatids joined at a central region called the centromere. The specific banding pattern of each chromosome (visible with staining) allows cytologists to identify individual chromosomes and detect structural abnormalities in karyotypes.',
        x: 49,
        y: 10,
      },
    ],
  },

  digestive: {
    id: 'digestive',
    label: 'Human Digestive System',
    emoji: '🫀',
    parts: [
      {
        id: 'mouth',
        label: 'Mouth',
        shortDescription: 'Where digestion begins — mechanical chewing and enzyme action on starch.',
        fullDescription:
          'The mouth (oral cavity) is the entry point of the digestive system. Mechanical digestion begins here: teeth cut, tear, and grind food into smaller pieces, increasing the surface area for enzymes to act on. Simultaneously, three pairs of salivary glands secrete saliva, which moistens the food and contains salivary amylase — an enzyme that begins breaking starch into maltose. The tongue shapes the food into a bolus (a soft lump) and pushes it to the back of the throat. Swallowing is then coordinated by the brain, directing the bolus into the oesophagus.',
        x: 46,
        y: 8,
      },
      {
        id: 'oesophagus',
        label: 'Oesophagus',
        shortDescription: 'A muscular tube that moves food from the throat to the stomach by peristalsis.',
        fullDescription:
          'The oesophagus is a muscular tube about 25 cm long connecting the mouth to the stomach. Food is propelled downward not by gravity but by coordinated waves of muscular contractions called peristalsis — a squeezing action of the circular and longitudinal muscles in the wall. This is why astronauts can swallow food in microgravity. At the bottom of the oesophagus is the lower oesophageal sphincter (cardiac sphincter), a ring of muscle that opens to let food into the stomach and closes to prevent stomach acid from refluxing back up.',
        x: 48,
        y: 22,
      },
      {
        id: 'stomach',
        label: 'Stomach',
        shortDescription: 'Churns food with acid and enzymes, breaking it into a semi-liquid called chyme.',
        fullDescription:
          'The stomach is a J-shaped muscular bag that serves as both a food store and a chemical processor. Its three layers of muscle churn food vigorously, while gastric glands in the stomach lining secrete gastric juice — a mixture of hydrochloric acid (pH ~2, which kills bacteria and denatures proteins) and pepsin (an enzyme that begins breaking down proteins). The stomach can expand to hold up to 1.5 litres. The resulting semi-liquid mixture, called chyme, is gradually released through the pyloric sphincter into the small intestine.',
        x: 30,
        y: 38,
      },
      {
        id: 'small-intestine',
        label: 'Small Intestine',
        shortDescription: 'The main site of digestion and nutrient absorption — 6 metres long.',
        fullDescription:
          'The small intestine is a coiled tube about 6 metres long, divided into three sections: duodenum, jejunum, and ileum. This is where most chemical digestion is completed by enzymes from the pancreas (amylase, lipase, proteases) and from the intestinal wall itself. The products of digestion — amino acids, monosaccharides, fatty acids — are then absorbed into the bloodstream or lymphatic system. To maximise absorption, the inner wall is highly folded (villi) and covered in tiny finger-like projections (microvilli or brush border), increasing the surface area to about 200 m² — roughly the size of a tennis court.',
        x: 50,
        y: 62,
      },
      {
        id: 'large-intestine',
        label: 'Large Intestine',
        shortDescription: 'Reabsorbs water and salts from undigested material, forming solid faeces.',
        fullDescription:
          'The large intestine (colon) is about 1.5 metres long and much wider than the small intestine. It receives undigested food, water, and electrolytes from the small intestine. Its primary function is to reabsorb water and salts back into the bloodstream, converting the liquid contents into semi-solid faeces. The large intestine also hosts trillions of bacteria (the gut microbiome), which ferment indigestible fibre, produce some vitamins (K and B12), and play roles in immunity. Insufficient water reabsorption causes diarrhoea; too much causes constipation.',
        x: 70,
        y: 58,
      },
      {
        id: 'liver',
        label: 'Liver',
        shortDescription: 'Produces bile to emulsify fats, and processes nutrients absorbed from the gut.',
        fullDescription:
          'The liver is the largest internal organ and the body\'s metabolic powerhouse. In digestion, its key role is producing bile — a yellow-green fluid containing bile salts that emulsify fats, breaking large fat droplets into tiny ones so lipase enzymes can work more efficiently. Bile is stored in the gall bladder and released into the duodenum as needed. The liver also processes all nutrients absorbed from the small intestine (via the hepatic portal vein) — regulating blood glucose (storing excess as glycogen), breaking down old red blood cells, detoxifying drugs and alcohol, and synthesising blood proteins.',
        x: 66,
        y: 33,
      },
      {
        id: 'pancreas',
        label: 'Pancreas',
        shortDescription: 'Secretes powerful digestive enzymes into the small intestine.',
        fullDescription:
          'The pancreas is a glandular organ with two distinct roles. Its exocrine function produces pancreatic juice — a cocktail of powerful digestive enzymes (amylase for starch, lipase for fats, trypsin and chymotrypsin for proteins) and sodium bicarbonate to neutralise the acidic chyme entering the duodenum from the stomach. Its endocrine function (from the islets of Langerhans) produces hormones: insulin, which lowers blood glucose by promoting glucose uptake, and glucagon, which raises it. Failure of the endocrine pancreas causes diabetes mellitus.',
        x: 42,
        y: 45,
      },
      {
        id: 'rectum',
        label: 'Rectum',
        shortDescription: 'The final section of the large intestine — temporarily stores faeces before elimination.',
        fullDescription:
          'The rectum is the last 15 cm of the large intestine, a temporary storage chamber for faeces. As faeces accumulates, stretch receptors in the rectal wall send signals to the brain, creating the urge to defecate. The internal anal sphincter (involuntary) relaxes in response, while the external anal sphincter (voluntary) allows conscious control over timing. Controlled elimination through the anus then occurs. The rectum\'s ability to store faeces allows humans to delay defecation until a socially appropriate moment — a voluntary control that develops in early childhood.',
        x: 50,
        y: 88,
      },
    ],
  },

  foodweb: {
    id: 'foodweb',
    label: 'Ecosystem Food Web',
    emoji: '🌍',
    parts: [
      {
        id: 'producer',
        label: 'Producer',
        shortDescription: 'Organisms (like plants) that make their own food through photosynthesis.',
        fullDescription:
          'Producers (autotrophs) are organisms that convert light energy into chemical energy stored in organic molecules — primarily through photosynthesis in plants and algae. They form the base of all food webs because they are the entry point for energy from the sun into the ecosystem. Without producers there would be no food for any other organisms. On land, producers include grasses, trees, and shrubs. In aquatic systems, phytoplankton are the dominant producers. Producers also absorb CO₂ from the atmosphere, making them critical to the carbon cycle and climate regulation.',
        x: 50,
        y: 30,
      },
      {
        id: 'primary-consumer',
        label: 'Primary Consumer',
        shortDescription: 'An organism that eats producers directly — the first consumer in the food chain.',
        fullDescription:
          'Primary consumers are herbivores — animals that feed directly on producers. They occupy the second trophic level of a food web. Examples include rabbits, deer, caterpillars, and cows. Only about 10% of the energy stored in a producer is transferred to the primary consumer (the rest is lost as heat through respiration, or in indigestible material). This 10% rule explains why food chains rarely have more than four or five levels — too little energy remains at higher levels to sustain large populations of predators.',
        x: 22,
        y: 54,
      },
      {
        id: 'secondary-consumer',
        label: 'Secondary Consumer',
        shortDescription: 'An organism that eats primary consumers — the third trophic level.',
        fullDescription:
          'Secondary consumers eat primary consumers (herbivores) and occupy the third trophic level. They can be carnivores (eating only animals) or omnivores (eating both plants and animals). Examples include foxes eating rabbits, frogs eating insects, and small birds of prey eating mice. Again, only about 10% of the energy from the primary consumer level is available to secondary consumers. This progressive energy loss as you move up trophic levels is why ecosystems can support far more herbivores than carnivores, and far more plants than herbivores.',
        x: 36,
        y: 75,
      },
      {
        id: 'tertiary-consumer',
        label: 'Tertiary Consumer',
        shortDescription: 'A top predator that eats secondary consumers — the apex of the food web.',
        fullDescription:
          'Tertiary consumers sit at the top (or near the top) of the food web and are often called apex predators. They have few or no natural predators and play a key role in controlling the populations of organisms below them in the food web. Examples include wolves, eagles, sharks, and large cats. Because so little energy reaches this level (roughly 0.1% of the original solar energy), apex predator populations are always small relative to lower trophic levels. Their removal from an ecosystem can trigger trophic cascades — dramatic changes in the populations of all other organisms.',
        x: 62,
        y: 75,
      },
      {
        id: 'decomposer',
        label: 'Decomposer',
        shortDescription: 'Breaks down dead organic matter, recycling nutrients back into the ecosystem.',
        fullDescription:
          'Decomposers — primarily fungi and bacteria — break down the dead bodies of plants and animals, as well as waste products (faeces, fallen leaves, etc.), into inorganic substances such as nitrates, phosphates, and CO₂. This process releases nutrients back into the soil and atmosphere, making them available for producers to absorb again. Without decomposers, nutrients would remain locked in dead organic material and producers would quickly run out of the minerals they need. Decomposers are therefore essential to nutrient cycling (carbon cycle, nitrogen cycle) and to the sustainability of all ecosystems.',
        x: 86,
        y: 80,
      },
      {
        id: 'sun',
        label: 'Sun / Energy Source',
        shortDescription: 'The ultimate energy source — sunlight drives photosynthesis at the base of the web.',
        fullDescription:
          'The sun is the primary energy source for almost all life on Earth. Sunlight energy is captured by producers through photosynthesis and converted into the chemical energy of organic molecules. This energy is then transferred through the food web as organisms consume each other. At each trophic level, roughly 90% of the energy is lost as heat through respiration, excretion, and indigestible material — only about 10% is stored in body tissues and transferred to the next level. Some ecosystems (deep-sea hydrothermal vents) are powered by chemical energy instead of sunlight, but these are exceptional.',
        x: 50,
        y: 8,
      },
      {
        id: 'herbivore',
        label: 'Herbivore',
        shortDescription: 'An animal that eats only plants — fills the primary consumer role in most food webs.',
        fullDescription:
          'Herbivores are plant-eating animals that have evolved specific adaptations for digesting tough plant material. Many have flat teeth for grinding, long digestive tracts, and specialised gut microbes that help ferment cellulose. Herbivores play a critical ecological role: they transfer energy from the sun-capturing producers to higher trophic levels, and their grazing can shape ecosystems (e.g. cattle maintaining grasslands). Examples include insects, rabbits, deer, horses, cows, elephants, and many fish. In aquatic systems, zooplankton grazing on phytoplankton are the equivalent herbivores.',
        x: 22,
        y: 54,
      },
      {
        id: 'carnivore',
        label: 'Carnivore',
        shortDescription: 'An animal that eats other animals — occupies higher trophic levels.',
        fullDescription:
          'Carnivores eat other animals. They tend to have specialised predatory features: sharp teeth and claws, strong muscles, acute senses, and hunting behaviours. Carnivores may be secondary consumers (eating herbivores) or tertiary consumers (eating other carnivores). Some, like crocodiles or sharks, are apex predators. Others, like spiders and insectivorous birds, are secondary consumers. Obligate carnivores (like cats) cannot survive on plant material because they lack certain metabolic pathways and require nutrients found only in animal tissue. Carnivores regulate prey populations and maintain ecosystem balance.',
        x: 62,
        y: 75,
      },
    ],
  },
}

export const diagramList = [
  { id: 'cell',      label: 'Animal Cell',              emoji: '🔬' },
  { id: 'heart',     label: 'Human Heart',               emoji: '🫀' },
  { id: 'leaf',      label: 'Leaf Cross-Section',        emoji: '🌿' },
  { id: 'plantCell', label: 'Plant Cell',                emoji: '🌱' },
  { id: 'brain',     label: 'Human Brain',               emoji: '🧠' },
  { id: 'dna',       label: 'DNA Double Helix',          emoji: '🧬' },
  { id: 'eye',       label: 'Human Eye',                 emoji: '👁️' },
  { id: 'mitosis',   label: 'Mitosis Stages',            emoji: '🔄' },
  { id: 'digestive', label: 'Digestive System',          emoji: '🫁' },
  { id: 'foodweb',   label: 'Ecosystem Food Web',        emoji: '🌍' },
]
