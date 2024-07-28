import { Theme } from "../types";

interface Question {
  question: string;
  choices: string[];
  answer: string;
  id: string;
}

const ALL = [
  {
    question: "Which planet in our solar system is known as the 'Red Planet'?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
    id: "wlf8i",
  },
  {
    question: "Who is the author of the famous novel 'To Kill a Mockingbird'?",
    choices: [
      "F. Scott Fitzgerald",
      "Harper Lee",
      "J.K. Rowling",
      "Jane Austen",
    ],
    answer: "Harper Lee",
    id: "u7s97",
  },
  {
    question:
      "Which of the following musical groups was formed in Liverpool in 1960?",
    choices: ["The Beatles", "The Rolling Stones", "Queen", "The Who"],
    answer: "The Beatles",
    id: "zrd5c",
  },
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Paris", "London", "Rome"],
    answer: "Paris",
    id: "5qdh9",
  },
  {
    question:
      "What is the largest living species of lizard, found primarily in Indonesia?",
    choices: [
      "Komodo dragon",
      "Saltwater crocodile",
      "Black mamba",
      "African elephant",
    ],
    answer: "Komodo dragon",
    id: "fzz6u",
  },
  {
    question: "In which year did the first iPhone release?",
    choices: ["2005", "2007", "2009", "2011"],
    answer: "2007",
    id: "yrxj4",
  },
  {
    question:
      "Who is the protagonist in Herman Melville's epic novel 'Moby-Dick'?",
    choices: ["Ahab", "Ishmael", "Queequeg", "Flask"],
    answer: "Ishmael",
    id: "3cc17",
  },
  {
    question: "What is the process by which plants make their own food?",
    choices: ["Photosynthesis", "Respiration", "Fermentation", "Decomposition"],
    answer: "Photosynthesis",
    id: "vgsa2",
  },
  {
    question: "Which chemical element has the symbol 'H' and atomic number 1?",
    choices: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
    answer: "Hydrogen",
    id: "4hwdt",
  },
  {
    question: "Who is the lead singer of the rock band Guns N' Roses?",
    choices: ["Axl Rose", "Slash", "Duff McKagan", "Matt Sorum"],
    answer: "Axl Rose",
    id: "k4ro2",
  },
  {
    question: "What is the world's largest waterfall, by volume of water?",
    choices: ["Victoria Falls", "Iguazu Falls", "Niagara Falls", "Angel Falls"],
    answer: "Victoria Falls",
    id: "rrl9l",
  },
  {
    question: "In Greek mythology, who was the hero of the Odyssey?",
    choices: ["Achilles", "Hector", "Odysseus", "Perseus"],
    answer: "Odysseus",
    id: "r4j5x",
  },
  {
    question: "Who painted the famous artwork 'The Starry Night'?",
    choices: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Claude Monet",
    ],
    answer: "Vincent van Gogh",
    id: "vkymp",
  },
  {
    question:
      "What is the smallest country in the world, both in terms of population and land area?",
    choices: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
    answer: "Vatican City",
    id: "k4fl9",
  },
  {
    question: "Who wrote the famous novel '1984'?",
    choices: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Isaac Asimov"],
    answer: "George Orwell",
    id: "j53h9",
  },
  {
    question: "What is the largest mammal on Earth?",
    choices: ["Blue whale", "Fin whale", "Humpback whale", "Gray whale"],
    answer: "Blue whale",
    id: "osl6n",
  },
  {
    question: "Who was the Roman Emperor when the Roman Empire fell in 476 CE?",
    choices: ["Augustus", "Constantine", "Romulus Augustus", "Trajan"],
    answer: "Romulus Augustus",
    id: "hq764",
  },
  {
    question: "What is the chemical symbol for gold?",
    choices: ["Ag", "Au", "Hg", "Pb"],
    answer: "Au",
    id: "e1t8w",
  },
  {
    question: "What is the highest mountain peak in North America?",
    choices: ["Denali", "Mount Whitney", "Mount Rainier", "Mount Hood"],
    answer: "Denali",
    id: "uecne",
  },
  {
    question: "Who is the author of the famous novel 'Pride and Prejudice'?",
    choices: [
      "Jane Austen",
      "Mary Shelley",
      "Charlotte Brontë",
      "Emily Brontë",
    ],
    answer: "Jane Austen",
    id: "j73bt",
  },
  {
    question:
      "What is the process by which water moves through a plant, from the roots to the leaves?",
    choices: ["Transpiration", "Respiration", "Photosynthesis", "Osmosis"],
    answer: "Transpiration",
    id: "kxzqv",
  },
  {
    question: "Who was the first President of the United States?",
    choices: [
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson",
      "Theodore Roosevelt",
    ],
    answer: "George Washington",
    id: "je45d",
  },
  {
    question: "What is the chemical symbol for silver?",
    choices: ["Ag", "Au", "Hg", "Pb"],
    answer: "Ag",
    id: "ax9mi",
  },
  {
    question:
      "Who is the protagonist in J.D. Salinger's novel 'The Catcher in the Rye'?",
    choices: [
      "Holden Caulfield",
      "Huckleberry Finn",
      "Jay Gatsby",
      "Sherlock Holmes",
    ],
    answer: "Holden Caulfield",
    id: "r5hjf",
  },
  {
    question: "What is the highest mountain peak in South America?",
    choices: ["Aconcagua", "Ojos del Salado", "Monte Pissis", "Cerro Bonete"],
    answer: "Aconcagua",
    id: "16nnu",
  },
  {
    question: "In Greek mythology, who was the god of the underworld?",
    choices: ["Zeus", "Poseidon", "Hades", "Hephaestus"],
    answer: "Hades",
    id: "z6znu",
  },
  {
    question: "Who was the first woman to fly solo across the Atlantic Ocean?",
    choices: [
      "Amelia Earhart",
      "Harriet Quimby",
      "Bessie Coleman",
      "Jacqueline Cochran",
    ],
    answer: "Amelia Earhart",
    id: "kl98e",
  },
  {
    question:
      "What is the process by which an organism's genetic information is passed from one generation to the next?",
    choices: ["Hereditary", "Genetic drift", "Natural selection", "Evolution"],
    answer: "Hereditary",
    id: "mt5p9",
  },
  {
    question: "Who was the Roman god of war?",
    choices: ["Mars", "Jupiter", "Neptune", "Venus"],
    answer: "Mars",
    id: "8i6zd",
  },
  {
    question: "What is the world's largest desert?",
    choices: ["Sahara", "Gobi", "Mojave", "Atacama"],
    answer: "Sahara",
    id: "43pft",
  },
  {
    question: "Who wrote the famous novel 'The Great Gatsby'?",
    choices: [
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "John Steinbeck",
      "William Faulkner",
    ],
    answer: "F. Scott Fitzgerald",
    id: "oncpd",
  },
  {
    question: "What is the scientific term for the 'building blocks of life'?",
    choices: ["Cells", "Molecules", "Tissues", "Organisms"],
    answer: "Cells",
    id: "23gun",
  },
  {
    question:
      "Who was the first President of the United States to resign from office?",
    choices: [
      "Richard Nixon",
      "John F. Kennedy",
      "Lyndon B. Johnson",
      "Gerald Ford",
    ],
    answer: "Richard Nixon",
    id: "jsp6l",
  },
  {
    question: "What is the chemical symbol for copper?",
    choices: ["Cu", "Ag", "Au", "Hg"],
    answer: "Cu",
    id: "mjbwz",
  },
  {
    question: "Who was the lead singer of the rock band Queen?",
    choices: ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    answer: "Freddie Mercury",
    id: "51q0u",
  },
  {
    question: "What is the highest mountain peak in Europe?",
    choices: ["Mount Elbrus", "Mont Blanc", "Mount Olympus", "Mount Etna"],
    answer: "Mount Elbrus",
    id: "whn9s",
  },
  {
    question: "Who wrote the famous novel 'Alice's Adventures in Wonderland'?",
    choices: [
      "Lewis Carroll",
      "J.M. Barrie",
      "C.S. Lewis",
      "Robert Louis Stevenson",
    ],
    answer: "Lewis Carroll",
    id: "52bl2",
  },
  {
    question:
      "What is the process by which water returns to the Earth as precipitation?",
    choices: ["Evaporation", "Condensation", "Transpiration", "Precipitation"],
    answer: "Precipitation",
    id: "6uvqn",
  },
  {
    question:
      "Who was the ancient Greek philosopher who taught that 'know thyself' was the most important maxim?",
    choices: ["Socrates", "Plato", "Aristotle", "Epicurus"],
    answer: "Socrates",
    id: "igqed",
  },
  {
    question: "What is the chemical symbol for tin?",
    choices: ["Sn", "Pb", "Hg", "Cu"],
    answer: "Sn",
    id: "8m1hp",
  },
  {
    question: "Who was the lead singer of the rock band Led Zeppelin?",
    choices: ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham"],
    answer: "Robert Plant",
    id: "ebsv4",
  },
  {
    question: "What is the highest mountain peak in Africa?",
    choices: [
      "Mount Kilimanjaro",
      "Mount Kenya",
      "Mount Elbrus",
      "Mount Olympus",
    ],
    answer: "Mount Kilimanjaro",
    id: "z65la",
  },
  {
    question: "Who wrote the famous novel 'War and Peace'?",
    choices: [
      "Leo Tolstoy",
      "Fyodor Dostoevsky",
      "Ivan Turgenev",
      "Anton Chekhov",
    ],
    answer: "Leo Tolstoy",
    id: "lsh3o",
  },
  {
    question: "Who was the Roman goddess of love and beauty?",
    choices: ["Venus", "Mars", "Jupiter", "Neptune"],
    answer: "Venus",
    id: "95agk",
  },
  {
    question: "What is the world's largest island?",
    choices: ["Greenland", "Iceland", "Great Britain", "Ellesmere Island"],
    answer: "Greenland",
    id: "ej9ge",
  },
  {
    question: "Who wrote the famous novel 'The Count of Monte Cristo'?",
    choices: [
      "Alexandre Dumas",
      "Victor Hugo",
      "Gustave Flaubert",
      "Honoré de Balzac",
    ],
    answer: "Alexandre Dumas",
    id: "9d0ip",
  },
  {
    question:
      "What is the scientific term for the 'study of the structure, behavior, and evolution of the universe'?",
    choices: ["Cosmology", "Astronomy", "Geology", "Biology"],
    answer: "Cosmology",
    id: "o9x8j",
  },
  {
    question:
      "Who was the first President of the United States to be assassinated?",
    choices: [
      "Abraham Lincoln",
      "John F. Kennedy",
      "William McKinley",
      "James A. Garfield",
    ],
    answer: "Abraham Lincoln",
    id: "k7smw",
  },
  {
    question: "What is the chemical symbol for mercury?",
    choices: ["Hg", "Ag", "Au", "Pb"],
    answer: "Hg",
    id: "8ykdb",
  },
  {
    question: "Who was the lead singer of the rock band The Doors?",
    choices: ["Jim Morrison", "Ray Manzarek", "Robby Krieger", "John Densmore"],
    answer: "Jim Morrison",
    id: "o4w0i",
  },
  {
    question: "What is the highest mountain peak in Asia?",
    choices: ["Mount Everest", "K2", "Annapurna", "Kangchenjunga"],
    answer: "Mount Everest",
    id: "ox38x",
  },
  {
    question: "Who wrote the famous novel 'Oliver Twist'?",
    choices: ["Charles Dickens", "Jane Austen", "Mary Shelley", "Emily Brontë"],
    answer: "Charles Dickens",
    id: "a9haj",
  },
  {
    question:
      "Who was the ancient Greek philosopher who taught that 'all is water'?",
    choices: ["Thales of Miletus", "Anaximander", "Xenophanes", "Heraclitus"],
    answer: "Thales of Miletus",
    id: "ib93c",
  },
  {
    question: "What is the chemical symbol for lead?",
    choices: ["Pb", "Hg", "Ag", "Au"],
    answer: "Pb",
    id: "soelr",
  },
  {
    question: "Who was the lead singer of the rock band The Rolling Stones?",
    choices: ["Mick Jagger", "Keith Richards", "Brian Jones", "Charlie Watts"],
    answer: "Mick Jagger",
    id: "xaynr",
  },
  {
    question: "Who wrote the famous novel 'The Picture of Dorian Gray'?",
    choices: [
      "Oscar Wilde",
      "Bram Stoker",
      "Mary Shelley",
      "Robert Louis Stevenson",
    ],
    answer: "Oscar Wilde",
    id: "p6em1",
  },
  {
    question: "Who was the Roman goddess of wisdom and war?",
    choices: ["Minerva", "Jupiter", "Mars", "Venus"],
    answer: "Minerva",
    id: "66md3",
  },
  {
    question: "Who wrote the famous novel 'Wuthering Heights'?",
    choices: [
      "Emily Brontë",
      "Charlotte Brontë",
      "Jane Austen",
      "Mary Shelley",
    ],
    answer: "Emily Brontë",
    id: "w9irb",
  },
  {
    question: "Who was the lead singer of the rock band The Who?",
    choices: [
      "Roger Daltrey",
      "Pete Townshend",
      "John Entwistle",
      "Keith Moon",
    ],
    answer: "Roger Daltrey",
    id: "vqgxf",
  },
  {
    question:
      "Who wrote the famous novel 'The Adventures of Huckleberry Finn'?",
    choices: [
      "Mark Twain",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "William Faulkner",
    ],
    answer: "Mark Twain",
    id: "zzfik",
  },
  {
    question:
      "Who was the ancient Greek philosopher who taught that 'all is fire'?",
    choices: ["Heraclitus", "Thales of Miletus", "Anaximander", "Xenophanes"],
    answer: "Heraclitus",
    id: "sotpo",
  },
  {
    question: "Who was the lead singer of the rock band Pink Floyd?",
    choices: ["Roger Waters", "David Gilmour", "Syd Barrett", "Nick Mason"],
    answer: "Roger Waters",
    id: "8ef12",
  },
  {
    question: "Who wrote the famous novel 'The Great Expectations'?",
    choices: ["Charles Dickens", "Jane Austen", "Mary Shelley", "Emily Brontë"],
    answer: "Charles Dickens",
    id: "rs9hj",
  },
  {
    question: "Which chemical element has the symbol 'C' and atomic number 6?",
    choices: ["Carbon", "Nitrogen", "Oxygen", "Fluorine"],
    answer: "Carbon",
    id: "3zgfg",
  },
  {
    question: "Who is the author of the famous novel 'The Sound and the Fury'?",
    choices: [
      "F. Scott Fitzgerald",
      "William Faulkner",
      "Ernest Hemingway",
      "John Steinbeck",
    ],
    answer: "William Faulkner",
    id: "f1jfb",
  },
  {
    question:
      "What is the world's largest living structure, according to the Guinness World Records?",
    choices: [
      "The Great Barrier Reef",
      "The Amazon Rainforest",
      "The Grand Canyon",
      "The Great Wall of China",
    ],
    answer: "The Great Barrier Reef",
    id: "e3dmv",
  },
  {
    question: "Who is the lead singer of the rock band AC/DC?",
    choices: ["Axl Rose", "Angus Young", "Brian Johnson", "Bon Scott"],
    answer: "Brian Johnson",
    id: "ysv5c",
  },
  {
    question:
      "What is the process by which the universe became transparent to light?",
    choices: ["Recombination", "Decoupling", "Ionization", "Nucleosynthesis"],
    answer: "Recombination",
    id: "r7tav",
  },
  {
    question:
      "Who is the protagonist in Fyodor Dostoevsky's novel 'Crime and Punishment'?",
    choices: [
      "Raskolnikov",
      "Sonya Marmeladova",
      "Dmitri Karamazov",
      "Ivan Karamazov",
    ],
    answer: "Raskolnikov",
    id: "b6rou",
  },
  {
    question: "What is the chemical symbol for oxygen?",
    choices: ["O", "Ox", "Oxy", "Oxygenium"],
    answer: "O",
    id: "ysh4v",
  },
  {
    question: "Who is the author of the famous novel 'The Handmaid's Tale'?",
    choices: [
      "Margaret Atwood",
      "Alice Walker",
      "Toni Morrison",
      "Ursula K. Le Guin",
    ],
    answer: "Margaret Atwood",
    id: "9mwxw",
  },
  {
    question: "What is the highest mountain peak in Antarctica?",
    choices: ["Vinson Massif", "Mount Everest", "K2", "Mauna Kea"],
    answer: "Vinson Massif",
    id: "imve2",
  },
  {
    question: "Who was the Roman god of the sea?",
    choices: ["Neptune", "Mars", "Jupiter", "Apollo"],
    answer: "Neptune",
    id: "4ug9k",
  },
  {
    question:
      "Who is the author of the famous novel 'The Tenant of Wildfell Hall'?",
    choices: [
      "Anne Bronte",
      "Charlotte Bronte",
      "Emily Bronte",
      "Mary Shelley",
    ],
    answer: "Anne Bronte",
    id: "feemr",
  },
  {
    question: "Who was the first woman to fly solo across the Pacific Ocean?",
    choices: [
      "Amelia Earhart",
      "Harriet Quimby",
      "Bessie Coleman",
      "Amy Johnson",
    ],
    answer: "Amelia Earhart",
    id: "ytono",
  },
  {
    question: "What is the highest mountain peak in Australia?",
    choices: [
      "Mount Kosciuszko",
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount Elbrus",
    ],
    answer: "Mount Kosciuszko",
    id: "szh65",
  },
  {
    question: "Who was the Roman goddess of agriculture?",
    choices: ["Ceres", "Venus", "Minerva", "Juno"],
    answer: "Ceres",
    id: "ppnqz",
  },
  {
    question: "Who was the lead singer of the rock band Fleetwood Mac?",
    choices: [
      "Stevie Nicks",
      "Lindsey Buckingham",
      "Christine McVie",
      "Mick Fleetwood",
    ],
    answer: "Stevie Nicks",
    id: "me1vl",
  },
  {
    question: "What is the chemical symbol for iron?",
    choices: ["Fe", "Ir", "Io", "In"],
    answer: "Fe",
    id: "5snhz",
  },
  {
    question: "Who wrote the famous novel 'The Scarlet Letter'?",
    choices: [
      "Nathaniel Hawthorne",
      "Herman Melville",
      "Edgar Allan Poe",
      "Mark Twain",
    ],
    answer: "Nathaniel Hawthorne",
    id: "m8qbh",
  },
  {
    question: "What is the highest mountain peak in New Zealand?",
    choices: [
      "Aoraki / Mount Cook",
      "Mount Tasman",
      "Mount Aspiring",
      "Mount Ruapehu",
    ],
    answer: "Aoraki / Mount Cook",
    id: "o0xq4",
  },
  {
    question: "Who is the author of the famous novel 'The Age of Innocence'?",
    choices: [
      "Edith Wharton",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "John Steinbeck",
    ],
    answer: "Edith Wharton",
    id: "3fdgk",
  },
  {
    question: "What is the chemical symbol for chromium?",
    choices: ["Cr", "Ch", "Cm", "Cn"],
    answer: "Cr",
    id: "0malj",
  },
  {
    question: "Who was the lead singer of the rock band The Eagles?",
    choices: ["Don Henley", "Glenn Frey", "Randy Meisner", "Joe Walsh"],
    answer: "Don Henley",
    id: "mot6a",
  },
  {
    question: "What is the highest mountain peak in Turkey?",
    choices: ["Mount Ararat", "Mount Erciyes", "Mount Suphan", "Mount Kaçkar"],
    answer: "Mount Ararat",
    id: "thzy8",
  },
  {
    question: "Who wrote the famous novel 'The Turn of the Screw'?",
    choices: [
      "Henry James",
      "Edith Wharton",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
    ],
    answer: "Henry James",
    id: "8819d",
  },
  {
    question: "Who was the lead singer of the rock band Black Sabbath?",
    choices: ["Ozzy Osbourne", "Tony Iommi", "Geezer Butler", "Bill Ward"],
    answer: "Ozzy Osbourne",
    id: "xt55y",
  },
  {
    question: "What is the highest mountain peak in Argentina?",
    choices: ["Aconcagua", "Monte Pissis", "Mount Bonete", "Cerro El Condor"],
    answer: "Aconcagua",
    id: "mxjdl",
  },
  {
    question: "Who is the author of the famous novel 'The Grapes of Wrath'?",
    choices: [
      "John Steinbeck",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
      "William Faulkner",
    ],
    answer: "John Steinbeck",
    id: "8en4g",
  },
  {
    question: "What is the chemical symbol for zinc?",
    choices: ["Zn", "Zc", "Zi", "Zm"],
    answer: "Zn",
    id: "rtphh",
  },
  {
    question: "What is the highest mountain peak in Peru?",
    choices: ["Huascarán", "Andes", "Cordillera Blanca", "Mount Pichu"],
    answer: "Huascarán",
    id: "hzk2g",
  },
  {
    question: "What is the chemical symbol for nickel?",
    choices: ["Ni", "Nc", "Nm", "Nn"],
    answer: "Ni",
    id: "wrsn7",
  },
  {
    question: "What is the highest mountain peak in Chile?",
    choices: [
      "Ojos del Salado",
      "Monte Pissis",
      "Cerro El Condor",
      "Aconcagua",
    ],
    answer: "Ojos del Salado",
    id: "plkn4",
  },
  {
    question: "Who is the author of the famous novel 'The Canterbury Tales'?",
    choices: [
      "Geoffrey Chaucer",
      "William Shakespeare",
      "John Milton",
      "Alexander Pope",
    ],
    answer: "Geoffrey Chaucer",
    id: "hymst",
  },
  {
    question: "What is the highest mountain peak in Bolivia?",
    choices: ["Sajama", "Illimani", "Huayna Potosí", "Ancohuma"],
    answer: "Sajama",
    id: "v7gcs",
  },
  {
    question: "Who was the lead singer of the rock band Aerosmith?",
    choices: ["Steven Tyler", "Joe Perry", "Tom Hamilton", "Joey Kramer"],
    answer: "Steven Tyler",
    id: "m9t32",
  },
  {
    question: "What is the highest mountain peak in Colombia?",
    choices: [
      "Cristóbal Colón",
      "Ritacuba Blanco",
      "Pico Cristóbal Colón",
      "Nevado del Tolima",
    ],
    answer: "Cristóbal Colón",
    id: "u5fcp",
  },
  {
    question: "What is the highest mountain peak in Ecuador?",
    choices: ["Chimborazo", "Cotopaxi", "Cayambe", "Antisana"],
    answer: "Chimborazo",
    id: "9tdzr",
  },
  {
    question:
      "Who is the author of the famous novel 'The Adventures of Huckleberry Finn'?",
    choices: [
      "Mark Twain",
      "Herman Melville",
      "Edgar Allan Poe",
      "Walt Whitman",
    ],
    answer: "Mark Twain",
    id: "mo2vi",
  },
  {
    question: "What is the highest mountain peak in Venezuela?",
    choices: [
      "Pico Bolívar",
      "Pico Humboldt",
      "Pico Bonpland",
      "Pico La Concha",
    ],
    answer: "Pico Bolívar",
    id: "6jffw",
  },
  {
    question: "What is the highest mountain peak in Uruguay?",
    choices: [
      "Cerro Catedral",
      "Cerro de las Ánimas",
      "Cerro Pan de Azúcar",
      "Cerro del Verdún",
    ],
    answer: "Cerro Catedral",
    id: "8p7wz",
  },
  {
    question: "What is the highest mountain peak in Paraguay?",
    choices: [
      "Cerro León",
      "Cerro Tajumbina",
      "Cerro Ñacunday",
      "Cerro San Rafael",
    ],
    answer: "Cerro León",
    id: "585h9",
  },
  {
    question:
      "Which planet in our solar system is known for being the largest?",
    choices: ["Earth", "Saturn", "Jupiter", "Uranus"],
    answer: "Jupiter",
    id: "lst0o",
  },
  {
    question: "Which artist painted the famous painting 'The Starry Night'?",
    choices: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Claude Monet",
    ],
    answer: "Vincent van Gogh",
    id: "j1vxt",
  },
  {
    question:
      "Which musician is often referred to as the 'King of Rock and Roll'?",
    choices: [
      "Elvis Presley",
      "Chuck Berry",
      "Little Richard",
      "Jerry Lee Lewis",
    ],
    answer: "Elvis Presley",
    id: "yr9dd",
  },
  {
    question: "The ancient city of Petra is located in which country?",
    choices: ["Jordan", "Israel", "Egypt", "Syria"],
    answer: "Jordan",
    id: "9abpj",
  },
  {
    question: "Who is the main character in the novel 'To Kill a Mockingbird'?",
    choices: ["Scout Finch", "Atticus Finch", "Jem Finch", "Boo Radley"],
    answer: "Scout Finch",
    id: "yabwb",
  },
  {
    question:
      "Which novel by Jane Austen begins with the line 'It is a truth universally acknowledged...'?",
    choices: [
      "Pride and Prejudice",
      "Sense and Sensibility",
      "Emma",
      "Northanger Abbey",
    ],
    answer: "Pride and Prejudice",
    id: "lwrez",
  },
  {
    question: "Who is the lead singer of the rock band Queen?",
    choices: ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    answer: "Freddie Mercury",
    id: "mlyly",
  },
  {
    question: "The Great Barrier Reef is located in which country?",
    choices: ["Australia", "New Zealand", "Papua New Guinea", "Indonesia"],
    answer: "Australia",
    id: "97rm8",
  },
  {
    question: "The ancient city of Angkor Wat is located in which country?",
    choices: ["Thailand", "Cambodia", "Vietnam", "Laos"],
    answer: "Cambodia",
    id: "6dr4e",
  },
  {
    question: "Who is the author of the famous novel '1984'?",
    choices: [
      "George Orwell",
      "Aldous Huxley",
      "Ray Bradbury",
      "Kurt Vonnegut",
    ],
    answer: "George Orwell",
    id: "q66id",
  },
  {
    question:
      "The highest mountain peak in North America is located in which state?",
    choices: ["Alaska", "California", "Colorado", "Wyoming"],
    answer: "Alaska",
    id: "0kxyx",
  },
  {
    question: "The famous painting 'Guernica' was created by which artist?",
    choices: ["Pablo Picasso", "Salvador Dali", "Joan Miro", "Rene Magritte"],
    answer: "Pablo Picasso",
    id: "wdcjo",
  },
  {
    question: "The chemical symbol for silver is?",
    choices: ["Ag", "Au", "Hg", "Pb"],
    answer: "Ag",
    id: "1btho",
  },
  {
    question: "The famous music group ABBA is from which country?",
    choices: ["Sweden", "Denmark", "Norway", "Finland"],
    answer: "Sweden",
    id: "ve3fb",
  },
  {
    question: "The novel 'The Lord of the Rings' was written by which author?",
    choices: [
      "J.R.R. Tolkien",
      "C.S. Lewis",
      "George R.R. Martin",
      "Neil Gaiman",
    ],
    answer: "J.R.R. Tolkien",
    id: "gxqit",
  },
  {
    question: "The ancient city of Pompeii is located in which country?",
    choices: ["Italy", "Greece", "Rome", "Turkey"],
    answer: "Italy",
    id: "u4i6i",
  },
  {
    question: "The famous physicist Stephen Hawking was born in which year?",
    choices: ["1940", "1942", "1945", "1947"],
    answer: "1942",
    id: "3s1ax",
  },
  {
    question: "The chemical symbol for copper is?",
    choices: ["Cu", "Ag", "Au", "Hg"],
    answer: "Cu",
    id: "6e1e1",
  },
  {
    question: "The famous artist Michelangelo created which famous sculpture?",
    choices: ["David", "The Pietà", "Moses", "The Creation of Adam"],
    answer: "David",
    id: "0ui8t",
  },
  {
    question: "The novel 'The Catcher in the Rye' was written by which author?",
    choices: [
      "J.D. Salinger",
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "John Steinbeck",
    ],
    answer: "J.D. Salinger",
    id: "hgm6q",
  },
  {
    question:
      "The highest mountain peak in South America is located in which country?",
    choices: ["Argentina", "Chile", "Brazil", "Peru"],
    answer: "Argentina",
    id: "wupg4",
  },
  {
    question: "The famous music festival Woodstock was held in which year?",
    choices: ["1967", "1968", "1969", "1970"],
    answer: "1969",
    id: "5lay6",
  },
  {
    question: "The ancient city of Carthage was located in which country?",
    choices: ["Tunisia", "Morocco", "Algeria", "Libya"],
    answer: "Tunisia",
    id: "zheuo",
  },
  {
    question: "The famous scientist Isaac Newton was born in which year?",
    choices: ["1642", "1643", "1645", "1647"],
    answer: "1643",
    id: "ihwsg",
  },
  {
    question: "The novel 'The Great Gatsby' was written by which author?",
    choices: [
      "F. Scott Fitzgerald",
      "Ernest Hemingway",
      "John Steinbeck",
      "William Faulkner",
    ],
    answer: "F. Scott Fitzgerald",
    id: "hdmpi",
  },
  {
    question: "The chemical symbol for tin is?",
    choices: ["Sn", "Pb", "Hg", "Cu"],
    answer: "Sn",
    id: "hv31i",
  },
  {
    question: "The famous music group The Beatles are from which city?",
    choices: ["Liverpool", "London", "Manchester", "Birmingham"],
    answer: "Liverpool",
    id: "2fwg3",
  },
  {
    question: "The ancient city of Persepolis is located in which country?",
    choices: ["Iran", "Iraq", "Turkey", "Afghanistan"],
    answer: "Iran",
    id: "99wvq",
  },
  {
    question:
      "The highest mountain peak in Europe is located in which country?",
    choices: ["Russia", "France", "Switzerland", "Italy"],
    answer: "Russia",
    id: "38ovm",
  },
  {
    question: "The famous scientist Albert Einstein was born in which year?",
    choices: ["1875", "1877", "1879", "1881"],
    answer: "1879",
    id: "zn9gi",
  },
  {
    question: "The novel 'Moby-Dick' was written by which author?",
    choices: [
      "Herman Melville",
      "Edgar Allan Poe",
      "Mark Twain",
      "Nathaniel Hawthorne",
    ],
    answer: "Herman Melville",
    id: "a3lu8",
  },
  {
    question: "The famous painting 'The Scream' was created by which artist?",
    choices: [
      "Edvard Munch",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Salvador Dali",
    ],
    answer: "Edvard Munch",
    id: "po8gl",
  },
  {
    question: "The chemical symbol for iron is?",
    choices: ["Fe", "Cu", "Ag", "Au"],
    answer: "Fe",
    id: "k5xt0",
  },
  {
    question: "The famous musician Bob Dylan is from which state?",
    choices: ["Minnesota", "California", "New York", "Texas"],
    answer: "Minnesota",
    id: "v6obf",
  },
  {
    question: "The ancient city of Ephesus is located in which country?",
    choices: ["Turkey", "Greece", "Rome", "Israel"],
    answer: "Turkey",
    id: "f56tk",
  },
  {
    question: "The highest mountain peak in Asia is located in which country?",
    choices: ["Nepal", "China", "India", "Pakistan"],
    answer: "Nepal",
    id: "9blsr",
  },
  {
    question: "The famous scientist Marie Curie was born in which year?",
    choices: ["1867", "1869", "1871", "1873"],
    answer: "1867",
    id: "0799u",
  },
  {
    question:
      "The novel 'The Picture of Dorian Gray' was written by which author?",
    choices: [
      "Oscar Wilde",
      "Bram Stoker",
      "Mary Shelley",
      "Robert Louis Stevenson",
    ],
    answer: "Oscar Wilde",
    id: "12gpo",
  },
  {
    question: "The chemical symbol for mercury is?",
    choices: ["Hg", "Pb", "Cu", "Ag"],
    answer: "Hg",
    id: "o3q6x",
  },
  {
    question: "The famous musician Elvis Presley was born in which state?",
    choices: ["Tennessee", "Mississippi", "Alabama", "Arkansas"],
    answer: "Mississippi",
    id: "4jk5s",
  },
  {
    question: "The ancient city of Palmyra is located in which country?",
    choices: ["Syria", "Jordan", "Israel", "Turkey"],
    answer: "Syria",
    id: "pevv5",
  },
  {
    question:
      "The highest mountain peak in Africa is located in which country?",
    choices: ["Egypt", "South Africa", "Morocco", "Tanzania"],
    answer: "Tanzania",
    id: "b3i9x",
  },
  {
    question: "The famous scientist Charles Darwin was born in which year?",
    choices: ["1807", "1809", "1811", "1813"],
    answer: "1809",
    id: "vr6un",
  },
  {
    question:
      "The novel 'The Adventures of Huckleberry Finn' was written by which author?",
    choices: [
      "Mark Twain",
      "Herman Melville",
      "Edgar Allan Poe",
      "Nathaniel Hawthorne",
    ],
    answer: "Mark Twain",
    id: "m5kgv",
  },
  {
    question: "The chemical symbol for lead is?",
    choices: ["Pb", "Hg", "Cu", "Ag"],
    answer: "Pb",
    id: "wvu1k",
  },
  {
    question: "The famous musician John Lennon was born in which year?",
    choices: ["1940", "1942", "1945", "1947"],
    answer: "1940",
    id: "ikgq3",
  },
  {
    question: "The ancient city of Angkor Thom is located in which country?",
    choices: ["Cambodia", "Thailand", "Vietnam", "Laos"],
    answer: "Cambodia",
    id: "fbya7",
  },
  {
    question: "The famous scientist Galileo Galilei was born in which year?",
    choices: ["1564", "1565", "1567", "1569"],
    answer: "1564",
    id: "pwlio",
  },
  {
    question:
      "The novel 'The Count of Monte Cristo' was written by which author?",
    choices: [
      "Alexandre Dumas",
      "Victor Hugo",
      "Gustave Flaubert",
      "Honore de Balzac",
    ],
    answer: "Alexandre Dumas",
    id: "oiskw",
  },
  {
    question: "The chemical symbol for zinc is?",
    choices: ["Zn", "Cu", "Ag", "Au"],
    answer: "Zn",
    id: "67llh",
  },
  {
    question: "The famous musician Eric Clapton is from which country?",
    choices: ["England", "Scotland", "Wales", "Ireland"],
    answer: "England",
    id: "iiq1k",
  },
  {
    question: "The famous scientist Isaac Newton died in which year?",
    choices: ["1725", "1727", "1729", "1731"],
    answer: "1727",
    id: "qwx0i",
  },
  {
    question: "The novel 'The War of the Worlds' was written by which author?",
    choices: [
      "H.G. Wells",
      "Jules Verne",
      "Arthur Conan Doyle",
      " Bram Stoker",
    ],
    answer: "H.G. Wells",
    id: "g140u",
  },
  {
    question: "The chemical symbol for carbon is?",
    choices: ["C", "O", "N", "H"],
    answer: "C",
    id: "lklhf",
  },
  {
    question: "The famous musician Jimi Hendrix was born in which year?",
    choices: ["1942", "1943", "1945", "1947"],
    answer: "1942",
    id: "2bo6p",
  },
  {
    question: "The ancient city of Babylon is located in which country?",
    choices: ["Iraq", "Iran", "Turkey", "Israel"],
    answer: "Iraq",
    id: "y5ayt",
  },
  {
    question: "The famous scientist Albert Einstein died in which year?",
    choices: ["1950", "1952", "1954", "1955"],
    answer: "1955",
    id: "4wnfy",
  },
  {
    question: "The novel 'The Canterbury Tales' was written by which author?",
    choices: [
      "Geoffrey Chaucer",
      "William Shakespeare",
      "John Milton",
      "Alexander Pope",
    ],
    answer: "Geoffrey Chaucer",
    id: "l86xh",
  },
  {
    question: "The chemical symbol for oxygen is?",
    choices: ["O", "H", "N", "C"],
    answer: "O",
    id: "jaupj",
  },
  {
    question: "The famous musician Freddie Mercury was born in which year?",
    choices: ["1946", "1947", "1948", "1949"],
    answer: "1946",
    id: "e95ol",
  },
  {
    question: "The famous scientist Marie Curie died in which year?",
    choices: ["1934", "1935", "1936", "1937"],
    answer: "1934",
    id: "zm5vd",
  },
  {
    question:
      "The novel 'The Adventures of Tom Sawyer' was written by which author?",
    choices: [
      "Mark Twain",
      "Herman Melville",
      "Edgar Allan Poe",
      "Nathaniel Hawthorne",
    ],
    answer: "Mark Twain",
    id: "3sydw",
  },
  {
    question: "The chemical symbol for nitrogen is?",
    choices: ["N", "O", "H", "C"],
    answer: "N",
    id: "1bacb",
  },
  {
    question: "The famous musician Mick Jagger is from which country?",
    choices: ["England", "Scotland", "Wales", "Ireland"],
    answer: "England",
    id: "eymq8",
  },
  {
    question: "The famous scientist Charles Darwin died in which year?",
    choices: ["1882", "1884", "1886", "1888"],
    answer: "1882",
    id: "ntz2o",
  },
  {
    question: "The novel 'The Scarlet Letter' was written by which author?",
    choices: [
      "Nathaniel Hawthorne",
      "Herman Melville",
      "Edgar Allan Poe",
      "Mark Twain",
    ],
    answer: "Nathaniel Hawthorne",
    id: "zphdo",
  },
  {
    question: "The chemical symbol for hydrogen is?",
    choices: ["H", "O", "N", "C"],
    answer: "H",
    id: "drv52",
  },
  {
    question: "The famous musician John Lennon died in which year?",
    choices: ["1980", "1981", "1982", "1983"],
    answer: "1980",
    id: "mbg6f",
  },
  {
    question: "The ancient city of Carthage is located in which country?",
    choices: ["Tunisia", "Morocco", "Algeria", "Libya"],
    answer: "Tunisia",
    id: "kqzjs",
  },
  {
    question: "The famous scientist Galileo Galilei died in which year?",
    choices: ["1641", "1642", "1643", "1644"],
    answer: "1642",
    id: "cdo7b",
  },
  {
    question: "The chemical symbol for sulfur is?",
    choices: ["S", "O", "N", "C"],
    answer: "S",
    id: "edb3a",
  },
  {
    question: "The chemical symbol for phosphorus is?",
    choices: ["P", "O", "N", "C"],
    answer: "P",
    id: "r3f7l",
  },
  {
    question: "The famous musician Jimi Hendrix died in which year?",
    choices: ["1970", "1971", "1972", "1973"],
    answer: "1970",
    id: "9lkji",
  },
  {
    question: "The chemical symbol for potassium is?",
    choices: ["K", "Na", "Ca", "Mg"],
    answer: "K",
    id: "ktpu3",
  },
  {
    question: "The famous musician Freddie Mercury died in which year?",
    choices: ["1991", "1992", "1993", "1994"],
    answer: "1991",
    id: "242ac",
  },
  {
    question: "Who painted the famous painting 'The Starry Night'?",
    choices: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Claude Monet",
    ],
    answer: "Vincent van Gogh",
    id: "ylg97",
  },
  {
    question:
      "Which of the following authors wrote the novel 'Pride and Prejudice'?",
    choices: ["Jane Austen", "Charles Dickens", "J.K. Rowling", "Mary Shelley"],
    answer: "Jane Austen",
    id: "sl5n6",
  },
  {
    question: "Which music group's debut album was titled 'Please Please Me'?",
    choices: ["The Rolling Stones", "The Who", "The Beatles", "The Kinks"],
    answer: "The Beatles",
    id: "9b5xm",
  },
  {
    question:
      "The ancient city of Petra is located in which modern-day country?",
    choices: ["Egypt", "Jordan", "Israel", "Syria"],
    answer: "Jordan",
    id: "uy5pn",
  },
  {
    question:
      "Who is the main character in Herman Melville's novel 'Moby-Dick'?",
    choices: ["Captain Ahab", "Ishmael", "Queequeg", "Starbuck"],
    answer: "Captain Ahab",
    id: "p28li",
  },
  {
    question: "The chemical symbol 'H' represents which element?",
    choices: ["Helium", "Hydrogen", "Helicobacter", "Hydrochloric Acid"],
    answer: "Hydrogen",
    id: "jg8uz",
  },
  {
    question: "The famous tennis tournament 'Wimbledon' is held in which city?",
    choices: ["London", "Paris", "New York", "Melbourne"],
    answer: "London",
    id: "il1np",
  },
  {
    question: "The 'Rosetta Stone' was discovered in which year?",
    choices: ["1796", "1799", "1800", "1805"],
    answer: "1799",
    id: "zyyj2",
  },
  {
    question: "The 'Great Fire of London' occurred in which year?",
    choices: ["1665", "1666", "1667", "1668"],
    answer: "1666",
    id: "o2tw8",
  },
  {
    question:
      "The 'Cold War' was a period of tension between which two superpowers?",
    choices: [
      "US and China",
      "US and Soviet Union",
      "US and UK",
      "Soviet Union and China",
    ],
    answer: "US and Soviet Union",
    id: "beedp",
  },
  {
    question: "The ' Treaty of Versailles' was signed in which year?",
    choices: ["1918", "1919", "1920", "1921"],
    answer: "1919",
    id: "7l0t1",
  },
  {
    question:
      "The ' Treaty of Rome' established which international organization?",
    choices: ["European Union", "NATO", "UNESCO", "OECD"],
    answer: "European Union",
    id: "flkso",
  },
  {
    question:
      "The 'Great Wall of China' was built to protect the country from which nomadic group?",
    choices: ["Mongols", "Tatars", "Huns", "Manchu"],
    answer: "Mongols",
    id: "xqwz0",
  },
  {
    question: "The 'Voyager 1' spacecraft was launched in which year?",
    choices: ["1975", "1976", "1977", "1978"],
    answer: "1977",
    id: "g277k",
  },
  {
    question: "The 'Boeing 707' is a type of which mode of transportation?",
    choices: ["Car", "Train", "Airplane", "Ship"],
    answer: "Airplane",
    id: "axedl",
  },
  {
    question:
      "The 'Rio Grande' river forms part of the border between which two countries?",
    choices: [
      "US and Mexico",
      "US and Canada",
      "Mexico and Guatemala",
      "Brazil and Argentina",
    ],
    answer: "US and Mexico",
    id: "lin4g",
  },
  {
    question: "The 'Ancient Olympic Games' were held in which city?",
    choices: ["Athens", "Sparta", "Olympia", "Corinth"],
    answer: "Olympia",
    id: "wn6du",
  },
  {
    question:
      "The 'Bachata' is a type of music and dance originating from which country?",
    choices: ["Cuba", "Dominican Republic", "Puerto Rico", "Haiti"],
    answer: "Dominican Republic",
    id: "0cr5j",
  },
  {
    question: "The 'Kama Sutra' is an ancient Indian text on which subject?",
    choices: ["Philosophy", "Medicine", "Erotica", "Astronomy"],
    answer: "Erotica",
    id: "8rzz2",
  },
  {
    question: "The 'Qu'ran' is the holy book of which religion?",
    choices: ["Islam", "Christianity", "Judaism", "Hinduism"],
    answer: "Islam",
    id: "9crky",
  },
  {
    question: "The 'Suez Crisis' occurred in which year?",
    choices: ["1955", "1956", "1957", "1958"],
    answer: "1956",
    id: "jugkq",
  },
  {
    question: "The 'Winter Olympics' were first held in which year?",
    choices: ["1920", "1924", "1928", "1932"],
    answer: "1924",
    id: "umxb7",
  },
  {
    question:
      "The 'Yankee Stadium' is a baseball stadium located in which city?",
    choices: ["New York", "Los Angeles", "Chicago", "Boston"],
    answer: "New York",
    id: "lflef",
  },
  {
    question:
      "The term 'Quarantine' originated from the Italian phrase for which number?",
    choices: ["20", "30", "40", "50"],
    answer: "40",
    id: "8xvvl",
  },
  {
    question:
      "The 'UNESCO World Heritage Site' of 'Angkor Wat' is located in which country?",
    choices: ["Cambodia", "Thailand", "Vietnam", "Laos"],
    answer: "Cambodia",
    id: "jrn32",
  },
  {
    question:
      "The 'Guggenheim Museum' in Bilbao, Spain was designed by which architect?",
    choices: ["Frank Gehry", "I.M. Pei", "Frank Lloyd Wright", "Le Corbusier"],
    answer: "Frank Gehry",
    id: "j5btg",
  },
  {
    question:
      "The 'Hadron Collider' is a scientific instrument used to study which phenomenon?",
    choices: ["Gravity", "Magnetism", "Electromagnetism", "Particle Physics"],
    answer: "Particle Physics",
    id: "8weyl",
  },
  {
    question: "The 'SARS' virus originated from which animal?",
    choices: ["Bat", "Monkey", "Pig", "Chicken"],
    answer: "Bat",
    id: "uf6jc",
  },
  {
    question: "The 'Ten Commandments' are a central part of which religion?",
    choices: ["Judaism", "Christianity", "Islam", "Hinduism"],
    answer: "Judaism",
    id: "abkiv",
  },
  {
    question:
      "The 'Vivaldi' concertos are famous for their use of which instrument?",
    choices: ["Violin", "Cello", "Piano", "Flute"],
    answer: "Violin",
    id: "rbj0x",
  },
  {
    question: "The 'War of the Roses' was a civil war in which country?",
    choices: ["England", "France", "Spain", "Italy"],
    answer: "England",
    id: "qv5m5",
  },
  {
    question: "The 'Watergate Scandal' involved which US President?",
    choices: [
      "Richard Nixon",
      "John F. Kennedy",
      "Lyndon B. Johnson",
      "Gerald Ford",
    ],
    answer: "Richard Nixon",
    id: "ncceb",
  },
  {
    question:
      "The 'World Wide Web' was invented by which British computer scientist?",
    choices: ["Tim Berners-Lee", "Alan Turing", "Steve Jobs", "Bill Gates"],
    answer: "Tim Berners-Lee",
    id: "ug0n8",
  },
  {
    question:
      "The 'X Games' are an annual extreme sports event held in which country?",
    choices: ["USA", "Canada", "Mexico", "Brazil"],
    answer: "USA",
    id: "0m3n7",
  },
  {
    question: "The 'Yellowstone National Park' is located in which US state?",
    choices: ["Wyoming", "Montana", "Idaho", "Utah"],
    answer: "Wyoming",
    id: "vu20v",
  },
  {
    question:
      "The 'Zoroastrianism' religion originated in which ancient empire?",
    choices: ["Persian", "Roman", "Greek", "Egyptian"],
    answer: "Persian",
    id: "2a43m",
  },
  {
    question: "The city of 'Paris' is often called the 'City of...'?",
    choices: ["Love", "Light", "Fashion", "Art"],
    answer: "Light",
    id: "7shry",
  },
  {
    question: "The company 'Google' was founded by which two individuals?",
    choices: [
      "Larry Page and Sergey Brin",
      "Steve Jobs and Steve Wozniak",
      "Bill Gates and Paul Allen",
      "Mark Zuckerberg and Eduardo Saverin",
    ],
    answer: "Larry Page and Sergey Brin",
    id: "a4i8w",
  },
  {
    question: "The chemical symbol 'Ag' represents which element?",
    choices: ["Silver", "Gold", "Copper", "Tin"],
    answer: "Silver",
    id: "8p3ii",
  },
  {
    question: "The classic novel '1984' was written by which author?",
    choices: [
      "George Orwell",
      "Aldous Huxley",
      "Ray Bradbury",
      "Kurt Vonnegut",
    ],
    answer: "George Orwell",
    id: "k5wov",
  },
  {
    question: "The country of 'Nauru' is located in which region?",
    choices: ["Oceania", "Asia", "Africa", "South America"],
    answer: "Oceania",
    id: "qaeil",
  },
  {
    question: "The currency of 'Japan' is the...",
    choices: ["Yen", "Dollar", "Euro", "Pound"],
    answer: "Yen",
    id: "c3mw2",
  },
  {
    question: "The famous 'Eiffel Tower' is located in which city?",
    choices: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
    id: "udybi",
  },
  {
    question:
      "The 'Francis Crick' institute is a biomedical research center located in which city?",
    choices: ["London", "Cambridge", "Oxford", "Edinburgh"],
    answer: "London",
    id: "ohiar",
  },
  {
    question: "The 'Group of Eight' is a forum of which eight countries?",
    choices: [
      "Industrialized nations",
      "Developing nations",
      "European nations",
      "Asian nations",
    ],
    answer: "Industrialized nations",
    id: "7o37m",
  },
  {
    question: "The 'Hubble Space Telescope' was launched in which year?",
    choices: ["1990", "1991", "1992", "1993"],
    answer: "1990",
    id: "zzxvz",
  },
  {
    question: "The 'International System of Units' is also known as...",
    choices: ["SI Units", "Metric System", "Imperial System", "CGS System"],
    answer: "SI Units",
    id: "i0k8h",
  },
  {
    question:
      "The 'Kremlin' is a historic fortified complex located in which city?",
    choices: ["Moscow", "St. Petersburg", "Kiev", "Minsk"],
    answer: "Moscow",
    id: "xg4yf",
  },
  {
    question: "The 'Lion' is the national animal of which country?",
    choices: ["India", "China", "Japan", "Singapore"],
    answer: "India",
    id: "0kvn0",
  },
  {
    question: "The 'Magna Carta' is a medieval charter signed in which year?",
    choices: ["1215", "1315", "1415", "1515"],
    answer: "1215",
    id: "oaep7",
  },
  {
    question: "The 'Mona Lisa' painting is also known as...",
    choices: [
      "La Gioconda",
      "The Scream",
      "The Last Supper",
      "The Creation of Adam",
    ],
    answer: "La Gioconda",
    id: "hdzjz",
  },
  {
    question: "The 'Nobel Prizes' were established by which Swedish inventor?",
    choices: ["Alfred Nobel", "Gustav Vasa", "Ingmar Bergman", "Carl Linnaeus"],
    answer: "Alfred Nobel",
    id: "86uye",
  },
  {
    question: "The 'Olympic Games' were founded in ancient...",
    choices: ["Greece", "Rome", "Egypt", "China"],
    answer: "Greece",
    id: "mqjs2",
  },
  {
    question:
      "The 'Periodic Table' of elements was developed by which Russian chemist?",
    choices: [
      "Dmitri Mendeleev",
      "Antoine Lavoisier",
      "John Dalton",
      "J.J. Thomson",
    ],
    answer: "Dmitri Mendeleev",
    id: "yz8q5",
  },
  {
    question:
      "The 'Rosetta Stone' is an ancient Egyptian artifact that features which three languages?",
    choices: [
      "Egyptian hieroglyphs, Demotic script, and Greek",
      "Latin, Greek, and Egyptian hieroglyphs",
      "Hebrew, Greek, and Latin",
      "Arabic, Turkish, and Persian",
    ],
    answer: "Egyptian hieroglyphs, Demotic script, and Greek",
    id: "lx28y",
  },
  {
    question: "The 'Sahara Desert' is located in which continent?",
    choices: ["Africa", "Asia", "Europe", "South America"],
    answer: "Africa",
    id: "kdcax",
  },
  {
    question: "The 'Taj Mahal' is a mausoleum located in which Indian city?",
    choices: ["Agra", "Delhi", "Mumbai", "Jaipur"],
    answer: "Agra",
    id: "0kvdp",
  },
  {
    question:
      "The 'Umbrella Revolution' was a democratic protest movement that took place in which country?",
    choices: ["Hong Kong", "Taiwan", "South Korea", "Japan"],
    answer: "Hong Kong",
    id: "fqax6",
  },
  {
    question:
      "The 'Vatican City' is an independent city-state located within which country?",
    choices: ["Italy", "Vatican City", "Switzerland", "Austria"],
    answer: "Italy",
    id: "mmfru",
  },
  {
    question:
      "The 'Wimbledon Championships' is a tennis tournament held in which city?",
    choices: ["London", "Paris", "New York", "Melbourne"],
    answer: "London",
    id: "sr52p",
  },
  {
    question: "The 'X-ray' was discovered by which German physicist?",
    choices: [
      "Wilhelm Conrad Röntgen",
      "Albert Einstein",
      "Max Planck",
      "Hermann Minkowski",
    ],
    answer: "Wilhelm Conrad Röntgen",
    id: "r1po1",
  },
  {
    question:
      "The 'Yellow Brick Road' is a fictional road in which classic novel?",
    choices: [
      "The Wizard of Oz",
      "Alice in Wonderland",
      "The Lord of the Rings",
      "The Chronicles of Narnia",
    ],
    answer: "The Wizard of Oz",
    id: "y070n",
  },
  {
    question:
      "The 'Zodiac' is a circle of twelve signs, each representing a different...",
    choices: ["Animal", "Month", "Planet", "Constellation"],
    answer: "Constellation",
    id: "vhohi",
  },
  {
    question: "There are how many bones in the adult human body?",
    choices: ["206", "200", "210", "220"],
    answer: "206",
    id: "zjtsb",
  },
  {
    question: "This planet is known for being the hottest in our solar system.",
    choices: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: "Venus",
    id: "h1h3e",
  },
  {
    question:
      "Under which article of the US Constitution is the power of impeachment outlined?",
    choices: ["Article I", "Article II", "Article III", "Article IV"],
    answer: "Article II",
    id: "a1onu",
  },
  {
    question: "Vitamin D is essential for the absorption of which mineral?",
    choices: ["Calcium", "Iron", "Potassium", "Sodium"],
    answer: "Calcium",
    id: "5mw36",
  },
  {
    question: "What is the largest living species of lizard?",
    choices: [
      "Komodo dragon",
      "Saltwater crocodile",
      "Black mamba",
      "Green anaconda",
    ],
    answer: "Komodo dragon",
    id: "q6krc",
  },
  {
    question: "What is the longest mountain range in South America?",
    choices: ["Andes", "Rocky Mountains", "Sierra Madre", "Cordillera Blanca"],
    answer: "Andes",
    id: "b9vpe",
  },
  {
    question: "What is the national capital of Australia?",
    choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
    id: "km82h",
  },
  {
    question: "What is the national flower of Japan?",
    choices: ["Cherry blossom", "Rose", "Lily", "Orchid"],
    answer: "Cherry blossom",
    id: "7324m",
  },
  {
    question: "What is the official language of China?",
    choices: ["Mandarin", "Cantonese", "Taiwanese", "Tibetan"],
    answer: "Mandarin",
    id: "3u98f",
  },
  {
    question: "What was the name of the famous ship that sank in 1912?",
    choices: ["RMS Titanic", "RMS Olympic", "RMS Britannic", "RMS Aquitania"],
    answer: "RMS Titanic",
    id: "0nxmf",
  },
  {
    question: "When did the 'Berlin Wall' fall?",
    choices: ["1985", "1989", "1990", "1991"],
    answer: "1989",
    id: "mz66n",
  },
  {
    question: "Which ancient city was the capital of the Inca Empire?",
    choices: ["Cuzco", "Machu Picchu", "Lima", "Santiago"],
    answer: "Cuzco",
    id: "w8n47",
  },
  {
    question: "Which artist painted the ceiling of the Sistine Chapel?",
    choices: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Caravaggio"],
    answer: "Michelangelo",
    id: "vfy34",
  },
  {
    question:
      "Which bird is known for its distinctive call that sounds like laughter?",
    choices: ["Kookaburra", "Pelican", "Flamingo", "Penguin"],
    answer: "Kookaburra",
    id: "umvqa",
  },
  {
    question: "Which composer wrote the famous opera 'The Magic Flute'?",
    choices: [
      "Wolfgang Amadeus Mozart",
      "Ludwig van Beethoven",
      "Johannes Brahms",
      "Richard Wagner",
    ],
    answer: "Wolfgang Amadeus Mozart",
    id: "j9lgk",
  },
  {
    question: "Which country is home to the ancient city of Petra?",
    choices: ["Egypt", "Jordan", "Israel", "Syria"],
    answer: "Jordan",
    id: "5fpzd",
  },
  {
    question: "Which English poet wrote the poem 'The Road Not Taken'?",
    choices: [
      "William Wordsworth",
      "John Keats",
      "Robert Frost",
      "William Shakespeare",
    ],
    answer: "Robert Frost",
    id: "r7sw3",
  },
  {
    question: "Which Greek god was the god of the underworld?",
    choices: ["Zeus", "Poseidon", "Hades", "Hermes"],
    answer: "Hades",
    id: "ms5u3",
  },
  {
    question:
      "Which instrument is often associated with the jazz musician Louis Armstrong?",
    choices: ["Trumpet", "Saxophone", "Piano", "Guitar"],
    answer: "Trumpet",
    id: "5hsq6",
  },
  {
    question: "Which kingdom is the largest in Scandinavia?",
    choices: ["Denmark", "Norway", "Sweden", "Iceland"],
    answer: "Sweden",
    id: "39wlg",
  },
  {
    question: "Which language is spoken in Brazil?",
    choices: ["Spanish", "Portuguese", "French", "Italian"],
    answer: "Portuguese",
    id: "i5y38",
  },
  {
    question: "Which mammal has the longest gestation period?",
    choices: ["Elephant", "Whale", "Hippopotamus", "Giraffe"],
    answer: "Elephant",
    id: "n7ak7",
  },
  {
    question:
      "Which musical instrument is often associated with the country of Scotland?",
    choices: ["Bagpipes", "Guitar", "Violin", "Drums"],
    answer: "Bagpipes",
    id: "ayunu",
  },
  {
    question:
      "Which of the following planets in our solar system has the most moons?",
    choices: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Jupiter",
    id: "41pf6",
  },
  {
    question:
      "Which of the following scientists is credited with the discovery of gravity?",
    choices: [
      "Galileo Galilei",
      "Isaac Newton",
      "Albert Einstein",
      "Leonardo da Vinci",
    ],
    answer: "Isaac Newton",
    id: "r6xx2",
  },
  {
    question:
      "Which painting by Leonardo da Vinci is also known as 'La Gioconda'?",
    choices: ["The Last Supper", "The Mona Lisa", "The Scream", "Starry Night"],
    answer: "The Mona Lisa",
    id: "ngbs2",
  },
  {
    question: "Which river is the longest in South America?",
    choices: ["Amazon River", "Rio Grande", "Orinoco River", "Magdalena River"],
    answer: "Amazon River",
    id: "j2v66",
  },
  {
    question: "Which Russian city is also known as the 'City of Canals'?",
    choices: ["Moscow", "St. Petersburg", "Kiev", "Minsk"],
    answer: "St. Petersburg",
    id: "zf9g9",
  },
  {
    question: "Which US state is known as the 'Land of 10,000 Lakes'?",
    choices: ["Minnesota", "Wisconsin", "Michigan", "New York"],
    answer: "Minnesota",
    id: "xtndz",
  },
  {
    question: "Which planet in our solar system is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
    id: "rmuiy",
  },
  {
    question:
      "Which of the following authors wrote the novel 'To Kill a Mockingbird'?",
    choices: [
      "F. Scott Fitzgerald",
      "Harper Lee",
      "Jane Austen",
      "J.K. Rowling",
    ],
    answer: "Harper Lee",
    id: "yskh9",
  },
  {
    question: "Which music group's debut album was titled '#1'?",
    choices: [
      "The Black Eyed Peas",
      "The Beatles",
      "One Direction",
      "Maroon 5",
    ],
    answer: "Maroon 5",
    id: "gk57u",
  },
  {
    question:
      "The highest mountain peak in the solar system is located on which planet?",
    choices: ["Mars", "Venus", "Earth", "Neptune"],
    answer: "Mars",
    id: "12z1v",
  },
  {
    question:
      "The famous painting 'The Starry Night' was created by which artist?",
    choices: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    answer: "Vincent van Gogh",
    id: "ydbex",
  },
  {
    question: "The largest living species of lizard is the?",
    choices: [
      "Komodo dragon",
      "Saltwater crocodile",
      "Black mamba",
      "Green anaconda",
    ],
    answer: "Komodo dragon",
    id: "ttfda",
  },
  {
    question: "The first president of the United States was?",
    choices: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "Theodore Roosevelt",
    ],
    answer: "George Washington",
    id: "edquu",
  },
  {
    question: "The famous music festival 'Coachella' is held in which state?",
    choices: ["California", "Florida", "New York", "Texas"],
    answer: "California",
    id: "qm616",
  },
  {
    question:
      "The highest waterfall in the world, Angel Falls, is located in which country?",
    choices: ["Brazil", "Argentina", "Venezuela", "Colombia"],
    answer: "Venezuela",
    id: "jjfyp",
  },
  {
    question: "The largest mammal on Earth is the?",
    choices: ["Blue whale", "Fin whale", "Humpback whale", "Sperm whale"],
    answer: "Blue whale",
    id: "qdx58",
  },
  {
    question: "The ancient Olympic Games were held in which ancient city?",
    choices: ["Olympia", "Athens", "Sparta", "Corinth"],
    answer: "Olympia",
    id: "3aj6a",
  },
  {
    question: "The famous video game character 'Mario' was created by?",
    choices: [
      "Shigeru Miyamoto",
      "Satoshi Tajiri",
      "Hideo Kojima",
      "Eiji Aonuma",
    ],
    answer: "Shigeru Miyamoto",
    id: "3jsty",
  },
  {
    question: "The largest city in Scandinavia is?",
    choices: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"],
    answer: "Stockholm",
    id: "5gd4v",
  },
  {
    question: "The famous physicist 'Niels Bohr' was born in which country?",
    choices: ["Denmark", "Norway", "Sweden", "Finland"],
    answer: "Denmark",
    id: "e4i9d",
  },
  {
    question: "The popular social media platform 'Instagram' was founded by?",
    choices: [
      "Mark Zuckerberg",
      "Kevin Systrom",
      "Evan Spiegel",
      "Jack Dorsey",
    ],
    answer: "Kevin Systrom",
    id: "kt8e4",
  },
  {
    question: "The famous music group 'The Beatles' was formed in which city?",
    choices: ["Liverpool", "London", "Manchester", "Birmingham"],
    answer: "Liverpool",
    id: "2hn1e",
  },
  {
    question:
      "The ancient city of 'Babylon' was located in which modern-day country?",
    choices: ["Iraq", "Iran", "Egypt", "Turkey"],
    answer: "Iraq",
    id: "6h8mv",
  },
  {
    question: "The chemical symbol 'Cu' represents which element?",
    choices: ["Copper", "Zinc", "Tin", "Silver"],
    answer: "Copper",
    id: "q6shl",
  },
  {
    question:
      "The famous tennis tournament 'Wimbledon' is held in which country?",
    choices: ["England", "France", "Australia", "United States"],
    answer: "England",
    id: "2xhda",
  },
  {
    question:
      "The popular video game series 'Assassin's Creed' is developed by?",
    choices: ["Ubisoft", "Rockstar Games", "Electronic Arts", "Activision"],
    answer: "Ubisoft",
    id: "r6v1b",
  },
  {
    question: "The largest planet in our solar system is?",
    choices: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Jupiter",
    id: "58gu2",
  },
  {
    question: "The famous novel 'Pride and Prejudice' was written by?",
    choices: [
      "Jane Austen",
      "Charles Dickens",
      "J.K. Rowling",
      " Edgar Allan Poe",
    ],
    answer: "Jane Austen",
    id: "pmfke",
  },
  {
    question: "The highest mountain peak in North America is?",
    choices: ["Denali", "Mount Whitney", "Mount Rainier", "Mount Hood"],
    answer: "Denali",
    id: "5joum",
  },
  {
    question: "The popular animated TV series 'The Simpsons' was created by?",
    choices: ["Matt Groening", "Seth MacFarlane", "Trey Parker", "Matt Stone"],
    answer: "Matt Groening",
    id: "h8eau",
  },
  {
    question: "The famous music group 'Queen' was formed in which year?",
    choices: ["1968", "1970", "1972", "1974"],
    answer: "1970",
    id: "yb5sl",
  },
  {
    question: "The largest city in South America is?",
    choices: ["Sao Paulo", "Rio de Janeiro", "Buenos Aires", "Lima"],
    answer: "Sao Paulo",
    id: "8rszd",
  },
  {
    question: "The chemical symbol 'Hg' represents which element?",
    choices: ["Mercury", "Silver", "Gold", "Tin"],
    answer: "Mercury",
    id: "1to5j",
  },
  {
    question:
      "The ancient city of 'Machu Picchu' is located in which modern-day country?",
    choices: ["Peru", "Chile", "Argentina", "Bolivia"],
    answer: "Peru",
    id: "zkrtp",
  },
  {
    question:
      "The famous physicist 'Albert Einstein' was born in which country?",
    choices: ["Germany", "Austria", "Switzerland", "France"],
    answer: "Germany",
    id: "swpfo",
  },
  {
    question:
      "The popular video game series 'Grand Theft Auto' is developed by?",
    choices: ["Rockstar Games", "Electronic Arts", "Ubisoft", "Activision"],
    answer: "Rockstar Games",
    id: "dfgdk",
  },
  {
    question: "The highest mountain peak in Europe is?",
    choices: ["Mount Elbrus", "Mount Blanc", "Mount Olympus", "Mount Vesuvius"],
    answer: "Mount Elbrus",
    id: "i0voa",
  },
  {
    question: "The famous painting 'The Last Supper' was created by?",
    choices: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Caravaggio"],
    answer: "Leonardo da Vinci",
    id: "o4dnm",
  },
  {
    question: "The largest city in Asia is?",
    choices: ["Tokyo", "Seoul", "Hong Kong", "Shanghai"],
    answer: "Tokyo",
    id: "zzghz",
  },
  {
    question: "The chemical symbol 'Au' represents which element?",
    choices: ["Gold", "Silver", "Copper", "Tin"],
    answer: "Gold",
    id: "uv6a5",
  },
  {
    question:
      "The famous music group 'The Rolling Stones' was formed in which year?",
    choices: ["1960", "1962", "1964", "1966"],
    answer: "1962",
    id: "jvopo",
  },
  {
    question: "The highest waterfall in Europe is?",
    choices: ["Rhine Falls", "Plitvice Falls", "Gullfoss", "Vettisfossen"],
    answer: "Rhine Falls",
    id: "u1ils",
  },
  {
    question: "The famous novel '1984' was written by?",
    choices: [
      "George Orwell",
      "Aldous Huxley",
      "Ray Bradbury",
      "Kurt Vonnegut",
    ],
    answer: "George Orwell",
    id: "rue8r",
  },
  {
    question: "The largest city in Africa is?",
    choices: ["Lagos", "Cairo", "Kinshasa", "Johannesburg"],
    answer: "Lagos",
    id: "qxkb6",
  },
  {
    question: "The chemical symbol 'Pb' represents which element?",
    choices: ["Lead", "Copper", "Tin", "Mercury"],
    answer: "Lead",
    id: "st5ik",
  },
  {
    question:
      "The famous physicist 'Stephen Hawking' was born in which country?",
    choices: ["England", "Scotland", "Wales", "Ireland"],
    answer: "England",
    id: "4937u",
  },
  {
    question: "The highest mountain peak in South America is?",
    choices: ["Aconcagua", "Ojos del Salado", "Monte Pissis", "Cerro Bonete"],
    answer: "Aconcagua",
    id: "7hhzo",
  },
  {
    question: "The popular social media platform 'Twitter' was founded by?",
    choices: ["Jack Dorsey", "Evan Williams", "Biz Stone", "Noah Glass"],
    answer: "Jack Dorsey",
    id: "sn69g",
  },
  {
    question: "The famous music group 'The Who' was formed in which year?",
    choices: ["1961", "1963", "1965", "1967"],
    answer: "1964",
    id: "7knx4",
  },
  {
    question: "The largest city in Australia is?",
    choices: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    answer: "Sydney",
    id: "dj1a1",
  },
  {
    question: "The chemical symbol 'Sn' represents which element?",
    choices: ["Tin", "Lead", "Copper", "Silver"],
    answer: "Tin",
    id: "gtwg3",
  },
  {
    question:
      "The famous novel 'Pride and Prejudice and Zombies' was written by?",
    choices: [
      "Seth Grahame-Smith",
      "Jane Austen",
      "Stephenie Meyer",
      "J.K. Rowling",
    ],
    answer: "Seth Grahame-Smith",
    id: "uwods",
  },
  {
    question: "The popular video game series 'Call of Duty' is developed by?",
    choices: ["Activision", "Electronic Arts", "Ubisoft", "Rockstar Games"],
    answer: "Activision",
    id: "xv9li",
  },
  {
    question: "The famous painting 'Guernica' was created by?",
    choices: ["Pablo Picasso", "Salvador Dali", "Joan Miro", "Francis Bacon"],
    answer: "Pablo Picasso",
    id: "4cfmb",
  },
  {
    question: "The largest city in the Middle East is?",
    choices: ["Istanbul", "Tehran", "Cairo", "Baghdad"],
    answer: "Istanbul",
    id: "ybm5y",
  },
  {
    question: "The chemical symbol 'Zn' represents which element?",
    choices: ["Zinc", "Copper", "Tin", "Silver"],
    answer: "Zinc",
    id: "3x5cp",
  },
  {
    question: "The famous physicist 'Marie Curie' was born in which country?",
    choices: ["Poland", "France", "Germany", "Austria"],
    answer: "Poland",
    id: "6ou0d",
  },
  {
    question: "The highest waterfall in Asia is?",
    choices: [
      "Huangguoshu Falls",
      "Jiuzhaigou Falls",
      "Tiger Leaping Gorge",
      "Plum Blossom Mountain",
    ],
    answer: "Huangguoshu Falls",
    id: "kswg0",
  },
  {
    question: "The popular social media platform 'Facebook' was founded by?",
    choices: [
      "Mark Zuckerberg",
      "Evan Spiegel",
      "Kevin Systrom",
      "Jack Dorsey",
    ],
    answer: "Mark Zuckerberg",
    id: "zrl9c",
  },
  {
    question: "The famous music group 'The Who' was formed in which city?",
    choices: ["London", "Manchester", "Birmingham", "Liverpool"],
    answer: "London",
    id: "9gbg3",
  },
  {
    question: "The chemical symbol 'Fe' represents which element?",
    choices: ["Iron", "Copper", "Tin", "Silver"],
    answer: "Iron",
    id: "hokif",
  },
  {
    question: "The famous novel 'The Lord of the Rings' was written by?",
    choices: [
      "J.R.R. Tolkien",
      "C.S. Lewis",
      "George R.R. Martin",
      "J.K. Rowling",
    ],
    answer: "J.R.R. Tolkien",
    id: "ypnw8",
  },
  {
    question: "The highest mountain peak in Africa is?",
    choices: [
      "Mount Kilimanjaro",
      "Mount Elbrus",
      "Mount Everest",
      "Mount Denali",
    ],
    answer: "Mount Kilimanjaro",
    id: "19ybv",
  },
  {
    question: "The popular video game series 'Assassin's Creed' is set in?",
    choices: [
      "Medieval Europe",
      "Ancient Egypt",
      "Feudal Japan",
      "The American Revolution",
    ],
    answer: "Medieval Europe",
    id: "j3vd6",
  },
  {
    question: "The famous painting 'The Night Cafe' was created by?",
    choices: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Claude Monet",
      "Paul Cezanne",
    ],
    answer: "Vincent van Gogh",
    id: "j4rwe",
  },
  {
    question: "The largest city in North America is?",
    choices: ["Mexico City", "New York City", "Los Angeles", "Chicago"],
    answer: "Mexico City",
    id: "mtisd",
  },
  {
    question: "The chemical symbol 'Cr' represents which element?",
    choices: ["Chromium", "Copper", "Tin", "Silver"],
    answer: "Chromium",
    id: "5s08u",
  },
  {
    question:
      "The famous physicist 'Richard Feynman' was born in which country?",
    choices: ["United States", "England", "Canada", "Australia"],
    answer: "United States",
    id: "mg26s",
  },
  {
    question: "The famous music group 'The Beatles' was formed in which year?",
    choices: ["1960", "1962", "1964", "1966"],
    answer: "1960",
    id: "y5noh",
  },
  {
    question: "The chemical symbol 'Ni' represents which element?",
    choices: ["Nickel", "Copper", "Tin", "Silver"],
    answer: "Nickel",
    id: "o7vgl",
  },
  {
    question: "The famous novel 'The Count of Monte Cristo' was written by?",
    choices: [
      "Alexandre Dumas",
      "Victor Hugo",
      "Gustave Flaubert",
      "Honore de Balzac",
    ],
    answer: "Alexandre Dumas",
    id: "w6ttm",
  },
  {
    question: "The highest mountain peak in Antarctica is?",
    choices: ["Vinson Massif", "Mount Elbrus", "Mount Everest", "Mount Denali"],
    answer: "Vinson Massif",
    id: "1upac",
  },
  {
    question: "The popular video game series 'Halo' is developed by?",
    choices: ["Bungie", "343 Industries", "Ubisoft", "Rockstar Games"],
    answer: "Bungie",
    id: "tj0vp",
  },
  {
    question: "The famous painting 'The Weeping Woman' was created by?",
    choices: ["Pablo Picasso", "Salvador Dali", "Joan Miro", "Francis Bacon"],
    answer: "Pablo Picasso",
    id: "28fmc",
  },
  {
    question: "The largest city in Europe is?",
    choices: ["Istanbul", "Moscow", "London", "Berlin"],
    answer: "Istanbul",
    id: "dbnht",
  },
  {
    question: "The chemical symbol 'Co' represents which element?",
    choices: ["Cobalt", "Copper", "Tin", "Silver"],
    answer: "Cobalt",
    id: "l0e1s",
  },
  {
    question:
      "The famous physicist 'Erwin Schrodinger' was born in which country?",
    choices: ["Austria", "Germany", "Switzerland", "France"],
    answer: "Austria",
    id: "qvo9d",
  },
  {
    question: "The highest waterfall in Africa is?",
    choices: [
      "Victoria Falls",
      "Tugela Falls",
      "Kalandula Falls",
      "Augrabies Falls",
    ],
    answer: "Victoria Falls",
    id: "s40oh",
  },
  {
    question: "The popular social media platform 'Snapchat' was founded by?",
    choices: [
      "Evan Spiegel",
      "Mark Zuckerberg",
      "Kevin Systrom",
      "Jack Dorsey",
    ],
    answer: "Evan Spiegel",
    id: "80y10",
  },
  {
    question: "The largest city in Oceania is?",
    choices: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    answer: "Sydney",
    id: "yqpe7",
  },
  {
    question: "The chemical symbol 'Mn' represents which element?",
    choices: ["Manganese", "Magnesium", "Molybdenum", "Meitnerium"],
    answer: "Manganese",
    id: "eo5iq",
  },
  {
    question: "The famous novel 'War and Peace' was written by?",
    choices: [
      "Leo Tolstoy",
      "Fyodor Dostoevsky",
      "Anton Chekhov",
      "Vladimir Nabokov",
    ],
    answer: "Leo Tolstoy",
    id: "hg0ld",
  },
  {
    question: "The highest mountain peak in Australia is?",
    choices: [
      "Mount Kosciuszko",
      "Mount Kilimanjaro",
      "Mount Elbrus",
      "Mount Denali",
    ],
    answer: "Mount Kosciuszko",
    id: "hlgnt",
  },
  {
    question: "The popular video game series 'Final Fantasy' is developed by?",
    choices: ["Square Enix", "Ubisoft", "Rockstar Games", "Activision"],
    answer: "Square Enix",
    id: "zbtjg",
  },
  {
    question: "The famous painting 'The Birth of Venus' was created by?",
    choices: [
      "Sandro Botticelli",
      "Leonardo da Vinci",
      "Michelangelo",
      "Raphael",
    ],
    answer: "Sandro Botticelli",
    id: "oih8r",
  },
  {
    question: "The chemical symbol 'Cd' represents which element?",
    choices: ["Cadmium", "Copper", "Tin", "Silver"],
    answer: "Cadmium",
    id: "h32a3",
  },
  {
    question: "The famous physicist 'Enrico Fermi' was born in which country?",
    choices: ["Italy", "Germany", "Switzerland", "France"],
    answer: "Italy",
    id: "syetj",
  },
  {
    question:
      "What is the world's largest island, located in the Arctic Ocean?",
    choices: ["Greenland", "Iceland", "Baffin Island", "Ellesmere Island"],
    answer: "Greenland",
    id: "9v5ei",
  },
  {
    question:
      "Which mountain range runs along the border between France and Spain?",
    choices: ["Pyrenees", "Alps", "Carpathian Mountains", "Apennine Mountains"],
    answer: "Pyrenees",
    id: "glkoh",
  },
  {
    question: "What is the capital city of Australia?",
    choices: ["Sydney", "Melbourne", "Perth", "Canberra"],
    answer: "Canberra",
    id: "sue3f",
  },
  {
    question: "Which African country has a coastline on the Mediterranean Sea?",
    choices: ["Egypt", "South Africa", "Morocco", "Libya"],
    answer: "Egypt",
    id: "52mvv",
  },
  {
    question: "Which strait separates the continents of Asia and Africa?",
    choices: ["Bosphorus", "Suez Canal", "Bab-el-Mandeb", "Strait of Malacca"],
    answer: "Bab-el-Mandeb",
    id: "6cnse",
  },
  {
    question: "Which city is the capital of Greenland?",
    choices: ["Nuuk", "Tasiilaq", "Ilulissat", "Qaqortoq"],
    answer: "Nuuk",
    id: "twnkr",
  },
  {
    question: "What is the longest river in Asia?",
    choices: ["Yangtze River", "Yellow River", "Mekong River", "Amur River"],
    answer: "Yangtze River",
    id: "t21u3",
  },
  {
    question:
      "Which island nation is located in the Pacific Ocean and is known for its chocolate?",
    choices: ["Fiji", "Samoa", "Vanuatu", "Solomon Islands"],
    answer: "Samoa",
    id: "9vf70",
  },
  {
    question: "Which city is the capital of Norway?",
    choices: ["Oslo", "Bergen", "Trondheim", "Stavanger"],
    answer: "Oslo",
    id: "5r3bf",
  },
  {
    question: "What is the highest mountain peak in the solar system?",
    choices: ["Mount Olympus", "Mauna Kea", "Mount Everest", "Denali"],
    answer: "Mount Olympus",
    id: "0zu62",
  },
  {
    question: "Which river flows through the Grand Canyon?",
    choices: [
      "Colorado River",
      "Missouri River",
      "Mississippi River",
      "Rio Grande",
    ],
    answer: "Colorado River",
    id: "9uiqh",
  },
  {
    question: "Which city is the capital of Chile?",
    choices: ["Santiago", "Valdivia", "Puerto Montt", "La Serena"],
    answer: "Santiago",
    id: "uatpl",
  },
  {
    question: "Which strait separates the continents of Asia and Europe?",
    choices: [
      "Bosphorus",
      "Dardanelles",
      "Strait of Malacca",
      "Strait of Hormuz",
    ],
    answer: "Bosphorus",
    id: "z5gvg",
  },
  {
    question: "What is the world's largest island in the Mediterranean Sea?",
    choices: ["Sicily", "Sardinia", "Corsica", "Crete"],
    answer: "Sicily",
    id: "l3151",
  },
  {
    question: "Which city is the capital of Bulgaria?",
    choices: ["Sofia", "Plovdiv", "Varna", "Burgas"],
    answer: "Sofia",
    id: "jime0",
  },
  {
    question:
      "What is the highest mountain peak in the Caucasus mountain range?",
    choices: [
      "Mount Elbrus",
      "Mount Kazbek",
      "Mount Dykh-Tau",
      "Mount Shkhara",
    ],
    answer: "Mount Elbrus",
    id: "xnw0n",
  },
  {
    question: "Which river flows through the city of Paris?",
    choices: ["Seine River", "Marne River", "Oise River", "Loire River"],
    answer: "Seine River",
    id: "81brs",
  },
  {
    question: "What is the world's largest hot desert?",
    choices: ["Sahara", "Gobi", "Mojave", "Atacama"],
    answer: "Sahara",
    id: "kpjk1",
  },
  {
    question: "Which city is the capital of Bangladesh?",
    choices: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi"],
    answer: "Dhaka",
    id: "auu09",
  },
  {
    question: "What is the highest mountain peak in the Andes mountain range?",
    choices: ["Aconcagua", "Ojos del Salado", "Monte Pissis", "Cerro Bonete"],
    answer: "Aconcagua",
    id: "govvg",
  },
  {
    question: "What is the world's largest artificial lake?",
    choices: ["Lake Mead", "Lake Volta", "Lake Nasser", "Lake Kariba"],
    answer: "Lake Volta",
    id: "7m23l",
  },
  {
    question: "Which city is the capital of Sri Lanka?",
    choices: ["Colombo", "Kandy", "Galle", "Negombo"],
    answer: "Colombo",
    id: "t1wtc",
  },
  {
    question: "Which river flows through the city of Vienna?",
    choices: ["Danube River", "Rhine River", "Elbe River", "Vltava River"],
    answer: "Danube River",
    id: "2g9tm",
  },
  {
    question: "What is the world's largest island in the Arctic Ocean?",
    choices: ["Greenland", "Ellesmere Island", "Baffin Island", "Iceland"],
    answer: "Greenland",
    id: "04xer",
  },
  {
    question: "Which city is the capital of Pakistan?",
    choices: ["Islamabad", "Karachi", "Lahore", "Peshawar"],
    answer: "Islamabad",
    id: "f5od3",
  },
  {
    question: "What is the highest mountain peak in North Africa?",
    choices: [
      "Mount Toubkal",
      "Mount Kilimanjaro",
      "Mount Elbrus",
      "Mount Denali",
    ],
    answer: "Mount Toubkal",
    id: "dlvav",
  },
  {
    question: "Which river flows through the city of Berlin?",
    choices: ["Spree River", "Elbe River", "Oder River", "Rhine River"],
    answer: "Spree River",
    id: "o3u79",
  },
  {
    question: "What is the world's largest waterfall, by height?",
    choices: [
      "Angel Falls",
      "Victoria Falls",
      "Iguazu Falls",
      "Yosemite Falls",
    ],
    answer: "Angel Falls",
    id: "2kwjy",
  },
  {
    question: "Which city is the capital of Morocco?",
    choices: ["Rabat", "Casablanca", "Marrakech", "Fez"],
    answer: "Rabat",
    id: "8iri3",
  },
  {
    question: "What is the highest mountain peak in the Appalachian Mountains?",
    choices: [
      "Mount Mitchell",
      "Mount Katahdin",
      "Mount Greylock",
      "Mount Mansfield",
    ],
    answer: "Mount Mitchell",
    id: "i2is0",
  },
  {
    question: "Which river flows through the city of Prague?",
    choices: ["Vltava River", "Elbe River", "Oder River", "Danube River"],
    answer: "Vltava River",
    id: "r7qqe",
  },
  {
    question: "What is the world's largest peninsula?",
    choices: [
      "Arabian Peninsula",
      "Indian Peninsula",
      "Italian Peninsula",
      "Scandinavian Peninsula",
    ],
    answer: "Arabian Peninsula",
    id: "uhnu7",
  },
  {
    question: "Which city is the capital of Nicaragua?",
    choices: ["Managua", "Leon", "Granada", "Bluefields"],
    answer: "Managua",
    id: "ywpmj",
  },
  {
    question: "What is the highest mountain peak in the Rocky Mountains?",
    choices: ["Mount Elbert", "Mount Harvard", "Mount Bross", "Mount Lincoln"],
    answer: "Mount Elbert",
    id: "9mr8j",
  },
  {
    question: "Which river flows through the city of Budapest?",
    choices: ["Danube River", "Tisza River", "Szamos River", "Körös River"],
    answer: "Danube River",
    id: "8r0bc",
  },
  {
    question: "What is the world's largest archipelago?",
    choices: [
      "Indonesian Archipelago",
      "Philippine Archipelago",
      "Maldives Archipelago",
      "Azores Archipelago",
    ],
    answer: "Indonesian Archipelago",
    id: "asdvr",
  },
  {
    question: "Which city is the capital of Honduras?",
    choices: ["Tegucigalpa", "San Pedro Sula", "La Ceiba", "Choloma"],
    answer: "Tegucigalpa",
    id: "4f5h4",
  },
  {
    question:
      "What is the highest mountain peak in the Sierra Nevada mountain range?",
    choices: [
      "Mount Whitney",
      "Mount Williamson",
      "Mount Tyndall",
      "Mount Russell",
    ],
    answer: "Mount Whitney",
    id: "q64wx",
  },
  {
    question: "Which river flows through the city of Zurich?",
    choices: ["Limmat River", "Rhine River", "Aare River", "Reuss River"],
    answer: "Limmat River",
    id: "8l3db",
  },
  {
    question: "What is the world's largest lake by surface area?",
    choices: [
      "Caspian Sea",
      "Lake Superior",
      "Lake Michigan",
      "Lake Tanganyika",
    ],
    answer: "Caspian Sea",
    id: "o0rdv",
  },
  {
    question: "Which city is the capital of Guatemala?",
    choices: [
      "Guatemala City",
      "Antigua Guatemala",
      "Quetzaltenango",
      "Escuintla",
    ],
    answer: "Guatemala City",
    id: "vo5o3",
  },
  {
    question:
      "What is the highest mountain peak in the Cascades mountain range?",
    choices: [
      "Mount Rainier",
      "Mount Baker",
      "Mount St. Helens",
      "Mount Adams",
    ],
    answer: "Mount Rainier",
    id: "0j3a5",
  },
  {
    question: "Which city is the capital of Belize?",
    choices: ["Belmopan", "Belize City", "San Pedro", "Dangriga"],
    answer: "Belmopan",
    id: "c79tm",
  },
  {
    question: "What is the highest mountain peak in the Ozark Mountains?",
    choices: [
      "Mount Magazine",
      "Mount Nebo",
      "Black Mountain",
      "Taum Sauk Mountain State Park",
    ],
    answer: "Mount Magazine",
    id: "50oy0",
  },
  {
    question: "Which river flows through the city of Munich?",
    choices: ["Isar River", "Inn River", "Salzach River", "Lech River"],
    answer: "Isar River",
    id: "spbgz",
  },
  {
    question: "Which city is the capital of El Salvador?",
    choices: ["San Salvador", "Santa Ana", "San Miguel", "Sonsonate"],
    answer: "San Salvador",
    id: "fjh4p",
  },
  {
    question: "Which river flows through the city of Cologne?",
    choices: ["Rhine River", "Moselle River", "Rur River", "Erft River"],
    answer: "Rhine River",
    id: "ezouf",
  },
  {
    question: "What is the world's largest canal?",
    choices: [
      "Suez Canal",
      "Panama Canal",
      "Corinth Canal",
      "White Sea-Baltic Canal",
    ],
    answer: "Suez Canal",
    id: "tdakf",
  },
  {
    question: "Which city is the capital of Costa Rica?",
    choices: ["San Jose", "Alajuela", "Cartago", "Limon"],
    answer: "San Jose",
    id: "plg24",
  },
  {
    question: "Which river flows through the city of Moscow?",
    choices: ["Moskva River", "Volga River", "Don River", "Kama River"],
    answer: "Moskva River",
    id: "nnzwy",
  },
  {
    question: "What is the world's largest island in the Pacific Ocean?",
    choices: ["New Guinea", "Honshu", "Luzon", "Sulawesi"],
    answer: "New Guinea",
    id: "q8p2t",
  },
  {
    question: "Which city is the capital of Panama?",
    choices: ["Panama City", "Colón", "David", "Chitre"],
    answer: "Panama City",
    id: "y2ebm",
  },
  {
    question: "What is the highest mountain peak in the Himalayas?",
    choices: ["Mount Everest", "K2", "Kangchenjunga", "Annapurna"],
    answer: "Mount Everest",
    id: "04phq",
  },
  {
    question: "What is the world's largest lake by volume?",
    choices: [
      "Lake Baikal",
      "Lake Tanganyika",
      "Lake Superior",
      "Lake Michigan",
    ],
    answer: "Lake Baikal",
    id: "gzbja",
  },
  {
    question: "Which city is the capital of Ecuador?",
    choices: ["Quito", "Guayaquil", "Cuenca", "Manta"],
    answer: "Quito",
    id: "mywsa",
  },
  {
    question: "What is the highest mountain peak in the Alps?",
    choices: ["Mont Blanc", "Monte Rosa", "Matterhorn", "Dom"],
    answer: "Mont Blanc",
    id: "x80ca",
  },
  {
    question: "What is the capital of Australia?",
    choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
    id: "7obbe",
  },
  {
    question: "What is the largest island in the Mediterranean Sea?",
    choices: ["Sicily", "Sardinia", "Corsica", "Crete"],
    answer: "Sicily",
    id: "9l6tp",
  },
  {
    question: "Which African country has a coastline on the Indian Ocean?",
    choices: ["South Africa", "Morocco", "Egypt", "Tunisia"],
    answer: "South Africa",
    id: "dlwip",
  },
  {
    question: "What is the largest city in Scandinavia?",
    choices: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"],
    answer: "Stockholm",
    id: "0onro",
  },
  {
    question: "Which river forms the border between the US and Mexico?",
    choices: ["Rio Grande", "Colorado", "Gila", "Pecos"],
    answer: "Rio Grande",
    id: "spkzy",
  },
  {
    question: "What is the world's largest inland body of water?",
    choices: ["Caspian Sea", "Dead Sea", "Great Lakes", "Lake Baikal"],
    answer: "Caspian Sea",
    id: "dybws",
  },
  {
    question: "Which city is the largest in Scandinavia?",
    choices: ["Stockholm", "Oslo", "Copenhagen", "Helsinki"],
    answer: "Stockholm",
    id: "7psp6",
  },
  {
    question: "What is the capital of New Zealand?",
    choices: ["Wellington", "Auckland", "Christchurch", "Queenstown"],
    answer: "Wellington",
    id: "xk20e",
  },
  {
    question: "Which city is the largest in the Baltic States?",
    choices: ["Riga", "Tallinn", "Vilnius", "Helsinki"],
    answer: "Riga",
    id: "xi194",
  },
  {
    question: "Which city is the capital of Turkey?",
    choices: ["Istanbul", "Ankara", "Izmir", "Bursa"],
    answer: "Ankara",
    id: "nde60",
  },
  {
    question: "Which river forms the border between Argentina and Uruguay?",
    choices: ["Rio de la Plata", "Parana", "Uruguay", "Sao Francisco"],
    answer: "Rio de la Plata",
    id: "9v40v",
  },
  {
    question: "What is the capital of Thailand?",
    choices: ["Bangkok", "Chiang Mai", "Ayutthaya", "Pattaya"],
    answer: "Bangkok",
    id: "j4err",
  },
  {
    question: "Which city is the largest in the Caucasus region?",
    choices: ["Tbilisi", "Yerevan", "Baku", "Yerevan"],
    answer: "Baku",
    id: "9g969",
  },
  {
    question: "What is the world's largest coral reef system?",
    choices: [
      "Great Barrier Reef",
      "Red Sea Coral Reef",
      "New Caledonia Barrier Reef",
      "Belize Barrier Reef",
    ],
    answer: "Great Barrier Reef",
    id: "g5oh7",
  },
  {
    question: "Which city is the largest in the Middle East?",
    choices: ["Tehran", "Istanbul", "Baghdad", "Riyadh"],
    answer: "Tehran",
    id: "bg51b",
  },
  {
    question: "What is the world's largest bay?",
    choices: ["Bay of Bengal", "Hudson Bay", "James Bay", "Baffin Bay"],
    answer: "Bay of Bengal",
    id: "awdru",
  },
  {
    question: "Which city is the capital of Poland?",
    choices: ["Warsaw", "Krakow", "Gdansk", "Poznan"],
    answer: "Warsaw",
    id: "hplrh",
  },
  {
    question: "What is the capital of China?",
    choices: ["Beijing", "Shanghai", "Guangzhou", "Hong Kong"],
    answer: "Beijing",
    id: "3xsvb",
  },
  {
    question: "Which city is the largest in Southeast Asia?",
    choices: ["Jakarta", "Bangkok", "Kuala Lumpur", "Singapore"],
    answer: "Jakarta",
    id: "jqyj0",
  },
  {
    question: "Which city is the capital of Sweden?",
    choices: ["Stockholm", "Gothenburg", "Malmo", "Uppsala"],
    answer: "Stockholm",
    id: "55huv",
  },
  {
    question: "What is the world's largest island in the Mediterranean?",
    choices: ["Sicily", "Sardinia", "Corsica", "Crete"],
    answer: "Sicily",
    id: "zlx3h",
  },
  {
    question: "Which city is the largest in Eastern Europe?",
    choices: ["Moscow", "Warsaw", "Prague", "Budapest"],
    answer: "Moscow",
    id: "2ra09",
  },
  {
    question: "Which city is the capital of Denmark?",
    choices: ["Copenhagen", "Aarhus", "Odense", "Aalborg"],
    answer: "Copenhagen",
    id: "36vwx",
  },
  {
    question: "Which city is the largest in Western Europe?",
    choices: ["London", "Paris", "Berlin", "Amsterdam"],
    answer: "London",
    id: "2ozdd",
  },
  {
    question: "What is the capital of Portugal?",
    choices: ["Lisbon", "Porto", "Funchal", "Evora"],
    answer: "Lisbon",
    id: "x39fh",
  },
  {
    question: "Which river forms the border between the US and Canada?",
    choices: ["Rio Grande", "Saint Lawrence", "Niagara", "Columbia"],
    answer: "Saint Lawrence",
    id: "rgss0",
  },
  {
    question: "Which city is the capital of Greece?",
    choices: ["Athens", "Thessaloniki", "Piraeus", "Patras"],
    answer: "Athens",
    id: "w6q1a",
  },
  {
    question: "Which city is the largest in South America?",
    choices: ["Sao Paulo", "Buenos Aires", "Rio de Janeiro", "Lima"],
    answer: "Sao Paulo",
    id: "7u0zg",
  },
  {
    question: "What is the capital of Finland?",
    choices: ["Helsinki", "Turku", "Tampere", "Oulu"],
    answer: "Helsinki",
    id: "p0ozn",
  },
  {
    question: "Which river forms the border between North and South Korea?",
    choices: ["Yalu", "Tumen", "Imjin", "Han"],
    answer: "Yalu",
    id: "qpkhz",
  },
  {
    question: "Which city is the capital of Austria?",
    choices: ["Vienna", "Salzburg", "Graz", "Innsbruck"],
    answer: "Vienna",
    id: "5cub4",
  },
  {
    question: "Which city is the largest in the Caribbean?",
    choices: ["Havana", "Kingston", "Santo Domingo", "San Juan"],
    answer: "Havana",
    id: "0sd5j",
  },
  {
    question: "What is the capital of Switzerland?",
    choices: ["Bern", "Zurich", "Geneva", "Basel"],
    answer: "Bern",
    id: "t33hc",
  },
  {
    question: "Which river flows through the city of Rome?",
    choices: ["Tiber", "Arno", "Po", "Adige"],
    answer: "Tiber",
    id: "dztve",
  },
  {
    question: "Which city is the capital of Ireland?",
    choices: ["Dublin", "Cork", "Limerick", "Galway"],
    answer: "Dublin",
    id: "ykpyw",
  },
  {
    question: "Which city is the largest in Central America?",
    choices: ["Mexico City", "Guatemala City", "San Jose", "Panama City"],
    answer: "Mexico City",
    id: "e3ihu",
  },
  {
    question: "What is the capital of Belgium?",
    choices: ["Brussels", "Antwerp", "Ghent", "Bruges"],
    answer: "Brussels",
    id: "gq35o",
  },
  {
    question: "Which city is the capital of Croatia?",
    choices: ["Zagreb", "Split", "Dubrovnik", "Rijeka"],
    answer: "Zagreb",
    id: "0pu2d",
  },
  {
    question: "What is the world's largest lake?",
    choices: [
      "Caspian Sea",
      "Lake Superior",
      "Lake Michigan",
      "Lake Tanganyika",
    ],
    answer: "Caspian Sea",
    id: "9q50g",
  },
  {
    question: "What is the capital of Slovakia?",
    choices: ["Bratislava", "Kosice", "Presov", "Nitra"],
    answer: "Bratislava",
    id: "bxnd1",
  },
  {
    question: "What is the capital of Hungary?",
    choices: ["Budapest", "Debrecen", "Szeged", "Pecs"],
    answer: "Budapest",
    id: "8ny20",
  },
  {
    question: "Which city is the capital of Romania?",
    choices: ["Bucharest", "Cluj-Napoca", "Timisoara", "Iasi"],
    answer: "Bucharest",
    id: "rswfz",
  },
  {
    question: "Which city is the capital of Serbia?",
    choices: ["Belgrade", "Novi Sad", "Niš", "Kragujevac"],
    answer: "Belgrade",
    id: "ywn6v",
  },
  {
    question: "Which city is the capital of Ukraine?",
    choices: ["Kiev", "Lviv", "Odessa", "Kharkiv"],
    answer: "Kiev",
    id: "b8if6",
  },
  {
    question: "Which city is the capital of Macedonia?",
    choices: ["Skopje", "Bitola", "Prilep", "Ohrid"],
    answer: "Skopje",
    id: "wmzm6",
  },
  {
    question: "What is the world's longest mountain range?",
    choices: [
      "The Andes",
      "The Himalayas",
      "The Rocky Mountains",
      "The Appalachian Mountains",
    ],
    answer: "The Andes",
    id: "4zwv3",
  },
  {
    question: "Which river is the longest in Russia?",
    choices: ["The Volga", "The Ob", "The Yenisei", "The Don"],
    answer: "The Volga",
    id: "lh35b",
  },
  {
    question: "What is the capital of Mongolia?",
    choices: ["Ulaanbaatar", "Beijing", "Astana", "Seoul"],
    answer: "Ulaanbaatar",
    id: "ryq79",
  },
  {
    question: "Which city is the largest in Iceland?",
    choices: ["Reykjavik", "Akureyri", "Egilstaðir", "Hafnarfjordur"],
    answer: "Reykjavik",
    id: "70ah9",
  },
  {
    question: "What is the largest island in the Arctic Ocean?",
    choices: ["Greenland", "Ellesmere Island", "Svalbard", "Franz Josef Land"],
    answer: "Greenland",
    id: "ct445",
  },
  {
    question: "Which river forms the border between Egypt and Sudan?",
    choices: ["The Nile", "The Blue Nile", "The Atbara", "The Sobat"],
    answer: "The Nile",
    id: "sd61s",
  },
  {
    question: "What is the capital of Bhutan?",
    choices: ["Thimphu", "Kathmandu", "Dhaka", "New Delhi"],
    answer: "Thimphu",
    id: "33jg5",
  },
  {
    question:
      "Which mountain range runs along the border between China and Nepal?",
    choices: ["The Himalayas", "The Karakoram", "The Tian Shan", "The Qinling"],
    answer: "The Himalayas",
    id: "w8zkh",
  },
  {
    question: "What is the largest city in Cyprus?",
    choices: ["Nicosia", "Limassol", "Larnaca", "Paphos"],
    answer: "Nicosia",
    id: "lhwe4",
  },
  {
    question: "What is the capital of Mozambique?",
    choices: ["Maputo", "Beira", "Nampula", "Quelimane"],
    answer: "Maputo",
    id: "avztm",
  },
  {
    question: "Which city is the largest in Georgia?",
    choices: ["Tbilisi", "Batumi", "Kutaisi", "Rustavi"],
    answer: "Tbilisi",
    id: "pinvi",
  },
  {
    question: "What is the largest island in the Canary Islands?",
    choices: ["Tenerife", "Fuerteventura", "Gran Canaria", "Lanzarote"],
    answer: "Tenerife",
    id: "7nqjt",
  },
  {
    question: "Which river forms the border between Canada and the US?",
    choices: [
      "The Saint Lawrence",
      "The Great Lakes",
      "The Colorado",
      "The Rio Grande",
    ],
    answer: "The Saint Lawrence",
    id: "9ra1f",
  },
  {
    question: "What is the capital of Namibia?",
    choices: ["Windhoek", "Swakopmund", "Walvis Bay", "Lüderitz"],
    answer: "Windhoek",
    id: "0n5e4",
  },
  {
    question: "Which city is the largest in Lithuania?",
    choices: ["Vilnius", "Kaunas", "Klaipeda", "Panevezys"],
    answer: "Vilnius",
    id: "zl5lu",
  },
  {
    question: "What is the largest island in the Philippines?",
    choices: ["Luzon", "Mindanao", "Visayas", "Palawan"],
    answer: "Luzon",
    id: "6ucun",
  },
  {
    question: "What is the capital of Guyana?",
    choices: ["Georgetown", "New Amsterdam", "Linden", "Bartica"],
    answer: "Georgetown",
    id: "qo9tc",
  },
  {
    question: "Which city is the largest in Belize?",
    choices: ["Belize City", "San Ignacio", "Belmopan", "Dangriga"],
    answer: "Belize City",
    id: "5sihi",
  },
  {
    question: "What is the largest island in the Azores?",
    choices: [
      "São Miguel Island",
      "Santa Maria Island",
      "Terceira Island",
      "Faial Island",
    ],
    answer: "São Miguel Island",
    id: "lvy66",
  },
  {
    question: "Which river forms the border between Norway and Sweden?",
    choices: ["The Torne", "The Kalix", "The Lule", "The Ångerman"],
    answer: "The Torne",
    id: "abdmg",
  },
  {
    question: "What is the capital of Guinea-Bissau?",
    choices: ["Bissau", "Cacheu", "Gabu", "Bafata"],
    answer: "Bissau",
    id: "79z74",
  },
  {
    question: "Which city is the largest in Honduras?",
    choices: ["Tegucigalpa", "San Pedro Sula", "La Ceiba", "Choloma"],
    answer: "Tegucigalpa",
    id: "hitao",
  },
  {
    question: "What is the largest island in the Gulf of Mexico?",
    choices: ["Cuba", "Hispaniola", "Jamaica", "Cozumel"],
    answer: "Cuba",
    id: "y8tq0",
  },
  {
    question: "Which river flows through the city of Hamburg?",
    choices: ["The Elbe", "The Alster", "The Bille", "The Oste"],
    answer: "The Elbe",
    id: "g3igh",
  },
  {
    question: "What is the capital of Guinea?",
    choices: ["Conakry", "Kankan", "Kindia", "Nzérékoré"],
    answer: "Conakry",
    id: "c5k9d",
  },
  {
    question: "Which city is the largest in Nicaragua?",
    choices: ["Managua", "León", "Granada", "Estelí"],
    answer: "Managua",
    id: "1rt63",
  },
  {
    question: "What is the largest island in the Solomon Islands?",
    choices: ["Guadalcanal", "Malaita", "New Georgia", "San Cristobal"],
    answer: "Guadalcanal",
    id: "2i7xj",
  },
  {
    question: "Which river forms the border between Russia and China?",
    choices: ["The Amur", "The Ussuri", "The Argun", "The Zeya"],
    answer: "The Amur",
    id: "t331i",
  },
  {
    question: "What is the capital of Suriname?",
    choices: ["Paramaribo", "Moengo", "Nieuw Nickerie", "Saramacca"],
    answer: "Paramaribo",
    id: "loe5d",
  },
  {
    question: "Which city is the largest in Costa Rica?",
    choices: ["San José", "Alajuela", "Cartago", "Heredia"],
    answer: "San José",
    id: "8jqhw",
  },
  {
    question: "What is the largest island in the Andaman and Nicobar Islands?",
    choices: [
      "North Andaman",
      "Middle Andaman",
      "South Andaman",
      "Little Andaman",
    ],
    answer: "Middle Andaman",
    id: "qzfoz",
  },
  {
    question: "What is the capital of Djibouti?",
    choices: ["Djibouti City", "Ali Sabieh", "Tadjourah", "Obock"],
    answer: "Djibouti City",
    id: "sutrq",
  },
  {
    question: "Which city is the largest in Botswana?",
    choices: ["Gaborone", "Francistown", "Maun", "Selebi-Phikwe"],
    answer: "Gaborone",
    id: "j2fay",
  },
  {
    question: "What is the largest island in the Comoros?",
    choices: ["Grande Comore", "Anjouan", "Mohéli", "Mayotte"],
    answer: "Grande Comore",
    id: "7tfpa",
  },
  {
    question: "What is the capital of Lesotho?",
    choices: ["Maseru", "Mafeteng", "Mohale's Hoek", "Qacha's Nek"],
    answer: "Maseru",
    id: "t147k",
  },
  {
    question: "Which city is the largest in Swaziland?",
    choices: ["Mbabane", "Manzini", "Big Bend", "Malkerns"],
    answer: "Mbabane",
    id: "6xqwt",
  },
  {
    question: "What is the largest island in the Maldives?",
    choices: ["Vilingili", "Malé", "Hulhumalé", "Thilafushi"],
    answer: "Vilingili",
    id: "zzlm7",
  },
  {
    question: "Which river forms the border between Zambia and Zimbabwe?",
    choices: ["The Zambezi", "The Kafue", "The Luangwa", "The Chongwe"],
    answer: "The Zambezi",
    id: "oesd8",
  },
  {
    question: "What is the capital of Sierra Leone?",
    choices: ["Freetown", "Bo", "Kenema", "Makeni"],
    answer: "Freetown",
    id: "z1yv6",
  },
  {
    question: "Which city is the largest in Liberia?",
    choices: ["Monrovia", "Gbarnga", "Kakata", "Buchanan"],
    answer: "Monrovia",
    id: "mns11",
  },
  {
    question: "What is the largest island in Vanuatu?",
    choices: ["Espiritu Santo", "Malakula", "Éfaté", "Tanna"],
    answer: "Espiritu Santo",
    id: "ji8hf",
  },
  {
    question: "What is the capital of Mauritania?",
    choices: ["Nouakchott", "Nouadhibou", "Choum", "Kaédi"],
    answer: "Nouakchott",
    id: "iifza",
  },
  {
    question: "Which city is the largest in Cape Verde?",
    choices: ["Praia", "Mindelo", "Santa Maria", "Sal"],
    answer: "Praia",
    id: "xjc9z",
  },
  {
    question:
      "What is the largest island in the Federated States of Micronesia?",
    choices: ["Yap", "Chuuk", "Kosrae", "Pohnpei"],
    answer: "Yap",
    id: "vnjbs",
  },
  {
    question: "Which river forms the border between South Sudan and Sudan?",
    choices: ["The Nile", "The Sobat", "The Atbara", "The Blue Nile"],
    answer: "The Nile",
    id: "9zcvx",
  },
  {
    question: "What is the capital of São Tomé and Principe?",
    choices: ["São Tomé", "Trindade", "Neves", "Santana"],
    answer: "São Tomé",
    id: "th2op",
  },
  {
    question: "Which city is the largest in Guinea?",
    choices: ["Conakry", "Kankan", "Kindia", "Nzérékoré"],
    answer: "Conakry",
    id: "jlb7z",
  },
  {
    question:
      "What is the largest island in the Republic of the Marshall Islands?",
    choices: ["Kwajalein", "Majuro", "Ebeye", "Jaluit"],
    answer: "Kwajalein",
    id: "hvb96",
  },
  {
    question: "Which river flows through the city of Ankara?",
    choices: ["The Kızıl", "The Sakarya", "The Ankara", "The Çankaya"],
    answer: "The Kızıl",
    id: "tqbu5",
  },
  {
    question: "What is the capital of Eritrea?",
    choices: ["Asmara", "Massawa", "Keren", "Assab"],
    answer: "Asmara",
    id: "1ij0u",
  },
  {
    question: "Which city is the largest in Timor-Leste?",
    choices: ["Dili", "Baucau", "Ermera", "Aileu"],
    answer: "Dili",
    id: "qcira",
  },
  {
    question: "Which river forms the border between Finland and Sweden?",
    choices: ["The Torne", "The Kalix", "The Teno", "The Muonio"],
    answer: "The Torne",
    id: "bzc9w",
  },
  {
    question: "What is the capital of Burundi?",
    choices: ["Gitega", "Bujumbura", "Ngozi", "Rumonge"],
    answer: "Gitega",
    id: "ev4j4",
  },
  {
    question: "Which city is the largest in Rwanda?",
    choices: ["Kigali", "Gitarama", "Butare", "Gisenyi"],
    answer: "Kigali",
    id: "8z3gv",
  },
  {
    question: "What is the largest island in the Turks and Caicos Islands?",
    choices: ["Providenciales", "Grand Turk", "North Caicos", "Middle Caicos"],
    answer: "Providenciales",
    id: "pclmr",
  },
  {
    question: "Which river flows through the city of Oslo?",
    choices: ["The Akerselva", "The Alna", "The Loelva", "The Frogner"],
    answer: "The Akerselva",
    id: "nr5gt",
  },
  {
    question:
      "Which iconic sitcom is set in a Boston bar where everyone knows your name?",
    choices: [
      "Friends",
      "How I Met Your Mother",
      "The Big Bang Theory",
      "Cheers",
    ],
    answer: "Cheers",
    id: "1dr6y",
  },
  {
    question:
      "Which actress played the role of Katniss Everdeen in The Hunger Games film series?",
    choices: [
      "Jennifer Lawrence",
      "Shailene Woodley",
      "Emma Stone",
      "Saoirse Ronan",
    ],
    answer: "Jennifer Lawrence",
    id: "cisbi",
  },
  {
    question:
      "Which British rock band, formed in 1960, is known for hits like 'I Want to Hold Your Hand' and 'Yesterday'?",
    choices: ["The Rolling Stones", "The Beatles", "Queen", "Led Zeppelin"],
    answer: "The Beatles",
    id: "ufneu",
  },
  {
    question:
      "Which actor played the role of Tony Stark/Iron Man in the Marvel Cinematic Universe?",
    choices: [
      "Robert Downey Jr.",
      "Chris Hemsworth",
      "Chris Evans",
      "Ryan Reynolds",
    ],
    answer: "Robert Downey Jr.",
    id: "51kci",
  },
  {
    question:
      "Which 1994 Disney movie features the songs 'Hakuna Matata' and 'Can You Feel the Love Tonight'?",
    choices: ["The Lion King", "Beauty and the Beast", "Aladdin", "Mulan"],
    answer: "The Lion King",
    id: "i7dgv",
  },
  {
    question: "Who played the title character in the TV show 'House M.D.'?",
    choices: ["Hugh Laurie", "Bryan Cranston", "Jon Hamm", "Steve Carell"],
    answer: "Hugh Laurie",
    id: "6cx5b",
  },
  {
    question:
      "What was the name of the famous sitcom that aired from 1994 to 2004 and starred Jennifer Aniston, Courteney Cox, and Lisa Kudrow?",
    choices: [
      "Friends",
      "Seinfeld",
      "The Big Bang Theory",
      "How I Met Your Mother",
    ],
    answer: "Friends",
    id: "d01a4",
  },
  {
    question:
      "Which musician is known for hits like 'Purple Rain' and 'When Doves Cry'?",
    choices: ["Michael Jackson", "Elvis Presley", "David Bowie", "Prince"],
    answer: "Prince",
    id: "5c6y0",
  },
  {
    question:
      "What was the name of the famous video game character created by Shigeru Miyamoto?",
    choices: ["Mario", "Sonic the Hedgehog", "Link", "Lara Croft"],
    answer: "Mario",
    id: "5zr8n",
  },
  {
    question: "Who played the role of Ross Geller in the TV show 'Friends'?",
    choices: [
      "Matt LeBlanc",
      "Matthew Perry",
      "David Schwimmer",
      "Jennifer Aniston",
    ],
    answer: "David Schwimmer",
    id: "scysx",
  },
  {
    question:
      "Which actress played the role of Rachel Green in the TV show 'Friends'?",
    choices: [
      "Courteney Cox",
      "Jennifer Aniston",
      "Lisa Kudrow",
      "Matt LeBlanc",
    ],
    answer: "Jennifer Aniston",
    id: "fgb4h",
  },
  {
    question:
      "Which actor played the role of Sherlock Holmes in the BBC TV series 'Sherlock'?",
    choices: [
      "Benedict Cumberbatch",
      "Tom Hiddleston",
      "Martin Freeman",
      "Andrew Scott",
    ],
    answer: "Benedict Cumberbatch",
    id: "no5h8",
  },
  {
    question:
      "What was the name of the famous music group formed in 1962, known for hits like 'I Want to Hold Your Hand' and 'Yesterday'?",
    choices: ["The Rolling Stones", "The Beatles", "Queen", "Led Zeppelin"],
    answer: "The Beatles",
    id: "kj5iw",
  },
  {
    question:
      "Which actor played the role of the villainous Joker in the 2008 movie 'The Dark Knight'?",
    choices: ["Heath Ledger", "Joaquin Phoenix", "Jared Leto", "Mark Hamill"],
    answer: "Heath Ledger",
    id: "b1zn1",
  },
  {
    question:
      "Which actress played the role of Hermione Granger in the Harry Potter film series?",
    choices: [
      "Emma Watson",
      "Jennifer Lawrence",
      "Shailene Woodley",
      "Saoirse Ronan",
    ],
    answer: "Emma Watson",
    id: "yyv6c",
  },
  {
    question:
      "Which British rock band, formed in 1964, is known for hits like 'Stairway to Heaven' and 'Whole Lotta Love'?",
    choices: ["The Rolling Stones", "The Beatles", "Led Zeppelin", "Queen"],
    answer: "Led Zeppelin",
    id: "2zh9u",
  },
  {
    question:
      "Who played the role of the titular character in the TV show 'Doctor Who' from 2010 to 2013?",
    choices: [
      "Matt Smith",
      "David Tennant",
      "Christopher Eccleston",
      "Peter Capaldi",
    ],
    answer: "Matt Smith",
    id: "9inr0",
  },
  {
    question:
      "Which actress played the role of Leslie Knope in the TV show 'Parks and Recreation'?",
    choices: ["Amy Poehler", "Tina Fey", "Julia Louis-Dreyfus", "Kristen Wiig"],
    answer: "Amy Poehler",
    id: "lc0w7",
  },
  {
    question:
      "Which actor played the role of James Bond in the 2006 movie 'Casino Royale'?",
    choices: ["Daniel Craig", "Pierce Brosnan", "Roger Moore", "Sean Connery"],
    answer: "Daniel Craig",
    id: "5xhu9",
  },
  {
    question: "Which musician is known for hits like 'Respect' and 'Think'?",
    choices: [
      "Aretha Franklin",
      "Tina Turner",
      "Janis Joplin",
      "Patti LaBelle",
    ],
    answer: "Aretha Franklin",
    id: "d2yzt",
  },
  {
    question:
      "Which actor played the role of the villainous Magneto in the X-Men film series?",
    choices: [
      "Ian McKellen",
      "Patrick Stewart",
      "Hugh Jackman",
      "Michael Fassbender",
    ],
    answer: "Ian McKellen",
    id: "jwuo8",
  },
  {
    question:
      "Which actress played the role of Dorothy Gale in the 1939 movie 'The Wizard of Oz'?",
    choices: [
      "Judy Garland",
      "Marilyn Monroe",
      "Audrey Hepburn",
      "Elizabeth Taylor",
    ],
    answer: "Judy Garland",
    id: "mopla",
  },
  {
    question:
      "Which band, formed in 1973, is known for hits like 'Stairway to Heaven' and 'Whole Lotta Love'?",
    choices: ["Led Zeppelin", "The Rolling Stones", "The Beatles", "Queen"],
    answer: "Led Zeppelin",
    id: "6cnwg",
  },
  {
    question: "Which TV show, created by J.J. Abrams, aired from 2004 to 2010?",
    choices: ["Lost", "Heroes", "The X-Files", "Fringe"],
    answer: "Lost",
    id: "2zvll",
  },
  {
    question:
      "Which actor played the role of Captain America in the Marvel Cinematic Universe?",
    choices: [
      "Chris Evans",
      "Chris Hemsworth",
      "Robert Downey Jr.",
      "Ryan Reynolds",
    ],
    answer: "Chris Evans",
    id: "af27x",
  },
  {
    question:
      "Which actress played the role of Black Widow in the Marvel Cinematic Universe?",
    choices: ["Scarlett Johansson", "Gal Gadot", "Brie Larson", "Zendaya"],
    answer: "Scarlett Johansson",
    id: "7piij",
  },
  {
    question:
      "Which musician is known for hits like 'Imagine' and 'Revolution'?",
    choices: [
      "John Lennon",
      "Paul McCartney",
      "George Harrison",
      "Ringo Starr",
    ],
    answer: "John Lennon",
    id: "t167a",
  },
  {
    question:
      "Which actor played the role of Thor in the Marvel Cinematic Universe?",
    choices: [
      "Chris Hemsworth",
      "Tom Hiddleston",
      "Idris Elba",
      "Anthony Hopkins",
    ],
    answer: "Chris Hemsworth",
    id: "jnzj6",
  },
  {
    question:
      "Which actress played the role of Lois Lane in the 2013 movie 'Man of Steel'?",
    choices: ["Amy Adams", "Jessica Chastain", "Emma Stone", "Saoirse Ronan"],
    answer: "Amy Adams",
    id: "oety7",
  },
  {
    question:
      "Which musician is known for hits like 'Hound Dog' and 'Jailhouse Rock'?",
    choices: [
      "Elvis Presley",
      "Chuck Berry",
      "Little Richard",
      "Jerry Lee Lewis",
    ],
    answer: "Elvis Presley",
    id: "oca3s",
  },
  {
    question:
      "Which actor played the role of Luke Skywalker in the original Star Wars trilogy?",
    choices: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Alec Guinness"],
    answer: "Mark Hamill",
    id: "0d99z",
  },
  {
    question:
      "Which actress played the role of Emma Swan in the TV show 'Once Upon a Time'?",
    choices: [
      "Jennifer Morrison",
      "Ginnifer Goodwin",
      "Lana Parrilla",
      "Robert Carlyle",
    ],
    answer: "Jennifer Morrison",
    id: "h723n",
  },
  {
    question:
      "Which musician is known for hits like 'We Are the Champions' and 'Bohemian Rhapsody'?",
    choices: ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    answer: "Freddie Mercury",
    id: "ic3kv",
  },
  {
    question:
      "Which actor played the role of the titular character in the TV show 'Sherlock'?",
    choices: [
      "Benedict Cumberbatch",
      "Tom Hiddleston",
      "Martin Freeman",
      "Andrew Scott",
    ],
    answer: "Benedict Cumberbatch",
    id: "eq7eb",
  },
  {
    question:
      "Which musician is known for hits like 'Stairway to Heaven' and 'Whole Lotta Love'?",
    choices: ["Led Zeppelin", "The Rolling Stones", "Queen", "The Who"],
    answer: "Led Zeppelin",
    id: "uv7wq",
  },
  {
    question:
      "Which actor played the role of Bruce Wayne/Batman in Christopher Nolan's The Dark Knight Trilogy?",
    choices: [
      "Christian Bale",
      "Robert Pattinson",
      "Michael Keaton",
      "Val Kilmer",
    ],
    answer: "Christian Bale",
    id: "cjkin",
  },
  {
    question:
      "Which 1984 film starring Eddie Murphy and Dan Aykroyd follows two men who are forced to trade places as part of a bet between two wealthy businessmen?",
    choices: [
      "Trading Places",
      "The Prince and the Pauper",
      "Freaky Friday",
      "Like Father Like Son",
    ],
    answer: "Trading Places",
    id: "o25px",
  },
  {
    question: "Which American author wrote the novel 'Gone with the Wind'?",
    choices: [
      "F. Scott Fitzgerald",
      "Margaret Mitchell",
      "Harper Lee",
      "Edith Wharton",
    ],
    answer: "Margaret Mitchell",
    id: "wc76y",
  },
  {
    question:
      "Which 1990s TV show set in New York City starred Sarah Michelle Gellar as Buffy Summers?",
    choices: ["Buffy the Vampire Slayer", "Angel", "Charmed", "Roswell"],
    answer: "Buffy the Vampire Slayer",
    id: "7gahg",
  },
  {
    question:
      "Which musician is known for hits like 'Born to Run' and 'Dancing in the Dark'?",
    choices: ["Bruce Springsteen", "Bob Seger", "Tom Petty", "John Mellencamp"],
    answer: "Bruce Springsteen",
    id: "tf7u3",
  },
  {
    question:
      "Which actor played the role of Carl Fredricksen in the Pixar film 'Up'?",
    choices: [
      "Edward Asner",
      "Christopher Plummer",
      "John Ratzenberger",
      "Tom Hanks",
    ],
    answer: "Edward Asner",
    id: "tdsgu",
  },
  {
    question:
      "Which 1975 film about a killer shark was based on a novel by Peter Benchley?",
    choices: ["Jaws", "Deep Blue Sea", "The Shallows", "Open Water"],
    answer: "Jaws",
    id: "77528",
  },
  {
    question:
      "Which actress played the role of Samantha Carter in the TV show 'Stargate SG-1'?",
    choices: [
      "Amanda Tapping",
      "Christina Cox",
      "Laura Vandervoort",
      "Katee Sackhoff",
    ],
    answer: "Amanda Tapping",
    id: "7ie8e",
  },
  {
    question:
      "Which musician is known for hits like 'Uptown Funk' and 'Just the Way You Are'?",
    choices: ["Bruno Mars", "Mark Ronson", "The Weeknd", "Pharrell Williams"],
    answer: "Bruno Mars",
    id: "5wfpy",
  },
  {
    question:
      "Which 1962 film starring Audrey Hepburn as Holly Golightly is based on a novella by Truman Capote?",
    choices: [
      "Breakfast at Tiffany's",
      "Roman Holiday",
      "Funny Face",
      "My Fair Lady",
    ],
    answer: "Breakfast at Tiffany's",
    id: "vw468",
  },
  {
    question:
      "Which actor played the role of Steve Urkel in the TV show 'Family Matters'?",
    choices: [
      "Jaleel White",
      "Reginald VelJohnson",
      "Darius McCrary",
      "Kellie Shanygne Williams",
    ],
    answer: "Jaleel White",
    id: "v42iu",
  },
  {
    question:
      "Which TV show is set in the fictional town of Stars Hollow, Connecticut?",
    choices: ["Gilmore Girls", "The O.C.", "Gossip Girl", "One Tree Hill"],
    answer: "Gilmore Girls",
    id: "3pv0w",
  },
  {
    question:
      "Which musician is known for hits like 'I Will Always Love You' and 'I Have Nothing'?",
    choices: ["Whitney Houston", "Mariah Carey", "Celine Dion", "Tina Turner"],
    answer: "Whitney Houston",
    id: "0fgnj",
  },
  {
    question:
      "Which actor played the role of Al Bundy in the TV show 'Married... with Children'?",
    choices: [
      "Ed O'Neill",
      "Christina Applegate",
      "David Faustino",
      "Katey Sagal",
    ],
    answer: "Ed O'Neill",
    id: "l010f",
  },
  {
    question:
      "Which 1986 film starring Tom Cruise as a hotshot fighter pilot is based on a novel by Ehud Yonay?",
    choices: [
      "Top Gun",
      "The Right Stuff",
      "The Great Waldo Pepper",
      "Firefox",
    ],
    answer: "Top Gun",
    id: "cg4zf",
  },
  {
    question:
      "Which actress played the role of Lily Aldrin in the TV show 'How I Met Your Mother'?",
    choices: [
      "Alyson Hannigan",
      "Cobie Smulders",
      "Jennifer Morrison",
      "Christa Miller",
    ],
    answer: "Alyson Hannigan",
    id: "8iij8",
  },
  {
    question:
      "Which musician is known for hits like 'Sweet Child O' Mine' and 'November Rain'?",
    choices: ["Axl Rose", "Slash", "Duff McKagan", "Matt Sorum"],
    answer: "Axl Rose",
    id: "iih36",
  },
  {
    question: "Which TV show is set in the fictional coffee shop Central Perk?",
    choices: ["Friends", "Seinfeld", "How I Met Your Mother", "New Girl"],
    answer: "Friends",
    id: "itqti",
  },
  {
    question:
      "Which actor played the role of Dr. Gregory House in the TV show 'House M.D.'?",
    choices: [
      "Hugh Laurie",
      "Jesse Spencer",
      "Robert Sean Leonard",
      "Omar Epps",
    ],
    answer: "Hugh Laurie",
    id: "4re1k",
  },
  {
    question:
      "Which musician is known for hits like 'Viva la Vida' and 'Paradise'?",
    choices: ["Coldplay", "The Script", "OneRepublic", "The 1975"],
    answer: "Coldplay",
    id: "o3wg8",
  },
  {
    question:
      "Which actress played the role of Phoebe Buffay in the TV show 'Friends'?",
    choices: [
      "Lisa Kudrow",
      "Jennifer Aniston",
      "Courteney Cox",
      "Matt LeBlanc",
    ],
    answer: "Lisa Kudrow",
    id: "12k39",
  },
  {
    question:
      "Which 1977 film starring John Travolta as a young man who becomes a disco dancing sensation is based on a novel by Nik Cohn?",
    choices: [
      "Saturday Night Fever",
      "Stayin' Alive",
      "Disco Inferno",
      "Disco Fever",
    ],
    answer: "Saturday Night Fever",
    id: "9h7vk",
  },
  {
    question: "Which actor played the role of Jack Bauer in the TV show '24'?",
    choices: [
      "Kiefer Sutherland",
      "Mary Lynn Rajskub",
      "Carlos Bernard",
      "Dennis Haysbert",
    ],
    answer: "Kiefer Sutherland",
    id: "4mwz2",
  },
  {
    question:
      "Which musician is known for hits like 'Hotel California' and 'Desperado'?",
    choices: ["Eagles", "Lynyrd Skynyrd", "The Doobie Brothers", "America"],
    answer: "Eagles",
    id: "cc7cs",
  },
  {
    question:
      "Which actress played the role of Ellen Ripley in the Alien film series?",
    choices: ["Sigourney Weaver", "Ripley", "Alien", "Jean-Pierre Jeunet"],
    answer: "Sigourney Weaver",
    id: "i9ktq",
  },
  {
    question: "Which TV show is set in the fictional town of Pawnee, Indiana?",
    choices: [
      "Parks and Recreation",
      "The Office",
      "Brooklyn Nine-Nine",
      "Arrested Development",
    ],
    answer: "Parks and Recreation",
    id: "9c02n",
  },
  {
    question:
      "Which musician is known for hits like 'Purple Haze' and 'All Along the Watchtower'?",
    choices: ["Jimi Hendrix", "Eric Clapton", "Jeff Beck", "Pete Townshend"],
    answer: "Jimi Hendrix",
    id: "ho2zq",
  },
  {
    question:
      "Which actor played the role of Ross Geller in the TV show 'Friends'?",
    choices: [
      "David Schwimmer",
      "Matt LeBlanc",
      "Matthew Perry",
      "Courteney Cox",
    ],
    answer: "David Schwimmer",
    id: "pcwmx",
  },
  {
    question:
      "Which 1984 film starring Eddie Murphy and Beverly Hills Cop is based on a screenplay by Vincent Patrick?",
    choices: [
      "Beverly Hills Cop",
      "Trading Places",
      "The Golden Child",
      "Coming to America",
    ],
    answer: "Beverly Hills Cop",
    id: "ed7jk",
  },
  {
    question:
      "Which musician is known for hits like 'Dancing Queen' and 'Mamma Mia'?",
    choices: ["ABBA", "The Bee Gees", "The Carpenters", "Fleetwood Mac"],
    answer: "ABBA",
    id: "9rdk4",
  },
  {
    question:
      "Which actress played the role of Buffy Summers in the TV show 'Buffy the Vampire Slayer'?",
    choices: [
      "Sarah Michelle Gellar",
      "Alyson Hannigan",
      "Nicholas Brendon",
      "Anthony Head",
    ],
    answer: "Sarah Michelle Gellar",
    id: "8prjg",
  },
  {
    question:
      "Which 1999 film starring Bruce Willis as a time traveler is based on a screenplay by Terry Rossio and Bill Marsilii?",
    choices: [
      "The Sixth Sense",
      "Twelve Monkeys",
      "Edge of Tomorrow",
      "Looper",
    ],
    answer: "Twelve Monkeys",
    id: "ns8sr",
  },
  {
    question:
      "Which actor played the role of Michael Scott in the TV show 'The Office'?",
    choices: ["Steve Carell", "Rainn Wilson", "John Krasinski", "Ed Helms"],
    answer: "Steve Carell",
    id: "a7o60",
  },
  {
    question:
      "Which musician is known for hits like 'Bohemian Rhapsody' and 'We Will Rock You'?",
    choices: ["Queen", "Led Zeppelin", "The Rolling Stones", "Aerosmith"],
    answer: "Queen",
    id: "111vj",
  },
  {
    question:
      "Which 1975 film starring Al Pacino as a bank robber is based on a true story?",
    choices: [
      "Dog Day Afternoon",
      "The Godfather",
      "Scarface",
      "Carlito's Way",
    ],
    answer: "Dog Day Afternoon",
    id: "wy5yk",
  },
  {
    question:
      "Which actress played the role of Kelly Kapoor in the TV show 'The Office'?",
    choices: ["Mindy Kaling", "Ellie Kemper", "Angela Kinsey", "Jenna Fischer"],
    answer: "Mindy Kaling",
    id: "638bm",
  },
  {
    question:
      "Which actor played the role of Barney Stinson in the TV show 'How I Met Your Mother'?",
    choices: [
      "Neil Patrick Harris",
      "Josh Radnor",
      "Jason Segel",
      "Cobie Smulders",
    ],
    answer: "Neil Patrick Harris",
    id: "86h6n",
  },
  {
    question:
      "Which musician is known for hits like 'Sweet but Psycho' and 'High Hopes'?",
    choices: ["Ava Max", "Billie Eilish", "Lana Del Rey", "Halsey"],
    answer: "Ava Max",
    id: "6xowt",
  },
  {
    question:
      "Which actor played the role of Joey Tribbiani in the TV show 'Friends'?",
    choices: [
      "Matt LeBlanc",
      "Matthew Perry",
      "David Schwimmer",
      "Jennifer Aniston",
    ],
    answer: "Matt LeBlanc",
    id: "5qxdh",
  },
  {
    question:
      "Which 1985 film starring Michael J. Fox as a high school student who travels back in time is based on a screenplay by Bob Gale and Robert Zemeckis?",
    choices: [
      "Back to the Future",
      "The Goonies",
      "Ghostbusters",
      "Indiana Jones and the Temple of Doom",
    ],
    answer: "Back to the Future",
    id: "ibwb4",
  },
  {
    question:
      "Which actress played the role of Monica Geller in the TV show 'Friends'?",
    choices: [
      "Courteney Cox",
      "Jennifer Aniston",
      "Lisa Kudrow",
      "Matt LeBlanc",
    ],
    answer: "Courteney Cox",
    id: "0cd8t",
  },
  {
    question:
      "Which musician is known for hits like 'SexyBack' and 'Suit & Tie'?",
    choices: [
      "Justin Timberlake",
      "Britney Spears",
      "Christina Aguilera",
      "Jessica Simpson",
    ],
    answer: "Justin Timberlake",
    id: "04wbu",
  },
  {
    question:
      "Which TV show is set in the fictional town of Quahog, Rhode Island?",
    choices: ["Family Guy", "American Dad!", "The Simpsons", "South Park"],
    answer: "Family Guy",
    id: "0bajp",
  },
  {
    question:
      "Which actor played the role of Sheldon Cooper in the TV show 'The Big Bang Theory'?",
    choices: ["Jim Parsons", "Johnny Galecki", "Kaley Cuoco", "Simon Helberg"],
    answer: "Jim Parsons",
    id: "rk45y",
  },
  {
    question:
      "Which musician is known for hits like 'Hips Don't Lie' and 'Whenever, Wherever'?",
    choices: ["Shakira", "Jennifer Lopez", "Ricky Martin", "Marc Anthony"],
    answer: "Shakira",
    id: "2jdc4",
  },
  {
    question:
      "Which 1994 film starring Tom Hanks as a character who is stranded on a deserted island is based on a novel by Daniel Defoe?",
    choices: ["Cast Away", "Forrest Gump", "Apollo 13", "Saving Private Ryan"],
    answer: "Cast Away",
    id: "tp1ng",
  },
  {
    question:
      "Which actress played the role of Carrie Bradshaw in the TV show 'Sex and the City'?",
    choices: [
      "Sarah Jessica Parker",
      "Kim Cattrall",
      "Kristin Davis",
      "Cynthia Nixon",
    ],
    answer: "Sarah Jessica Parker",
    id: "hkyrd",
  },
  {
    question:
      "Which musician is known for hits like 'Yesterday' and 'Hey Jude'?",
    choices: [
      "Paul McCartney",
      "John Lennon",
      "George Harrison",
      "Ringo Starr",
    ],
    answer: "Paul McCartney",
    id: "jxrqt",
  },
  {
    question:
      "Which actor played the role of Dwight Schrute in the TV show 'The Office'?",
    choices: [
      "Rainn Wilson",
      "Steve Carell",
      "John Krasinski",
      "Jenna Fischer",
    ],
    answer: "Rainn Wilson",
    id: "k7all",
  },
  {
    question:
      "Which musician is known for hits like 'I Will Survive' and 'I Am Woman'?",
    choices: ["Gloria Gaynor", "Aretha Franklin", "Diana Ross", "Donna Summer"],
    answer: "Gloria Gaynor",
    id: "92ui7",
  },
  {
    question:
      "Which actor played the role of Chandler Bing in the TV show 'Friends'?",
    choices: [
      "Matthew Perry",
      "Matt LeBlanc",
      "David Schwimmer",
      "Jennifer Aniston",
    ],
    answer: "Matthew Perry",
    id: "ofh1t",
  },
  {
    question:
      "Which 1962 film starring Audrey Hepburn as a princess who falls in love with a commoner is based on a novel by Erich Kästner?",
    choices: [
      "Roman Holiday",
      "Sabrina",
      "Funny Face",
      "Paris When It Sizzles",
    ],
    answer: "Roman Holiday",
    id: "o3qig",
  },
  {
    question:
      "Which musician is known for hits like 'Satisfaction' and 'Paint It Black'?",
    choices: ["The Rolling Stones", "The Beatles", "The Who", "The Kinks"],
    answer: "The Rolling Stones",
    id: "f5p9r",
  },
  {
    question:
      "Which TV show is set in the fictional town of Mayberry, North Carolina?",
    choices: [
      "The Andy Griffith Show",
      "I Love Lucy",
      "The Brady Bunch",
      "All in the Family",
    ],
    answer: "The Andy Griffith Show",
    id: "c17f5",
  },
  {
    question:
      "Which actor played the role of Sam Malone in the TV show 'Cheers'?",
    choices: [
      "Ted Danson",
      "Woody Harrelson",
      "Kelsey Grammer",
      "Rhea Perlman",
    ],
    answer: "Ted Danson",
    id: "5uas0",
  },
  {
    question:
      "Which musician is known for hits like 'Jailhouse Rock' and 'Hound Dog'?",
    choices: ["Elvis Presley", "Chuck Berry", "Little Richard", "Bo Diddley"],
    answer: "Elvis Presley",
    id: "0i93s",
  },
  {
    question:
      "Which actress played the role of Emily Gilmore in the TV show 'Gilmore Girls'?",
    choices: [
      "Lauren Graham",
      "Alexis Bledel",
      "Melissa McCarthy",
      "Kelly Bishop",
    ],
    answer: "Kelly Bishop",
    id: "hb54x",
  },
  {
    question:
      "Which 1984 film starring Eddie Murphy as a con artist who poses as a preacher is based on a screenplay by Rudy De Luca and Barry W. Blaustein?",
    choices: [
      "The Golden Child",
      "Beverly Hills Cop",
      "Trading Places",
      "The Prince and the Pauper",
    ],
    answer: "The Golden Child",
    id: "saby2",
  },
  {
    question:
      "Which TV show is set in the fictional town of Walnut Grove, Minnesota?",
    choices: [
      "Little House on the Prairie",
      "The Waltons",
      "The Brady Bunch",
      "Happy Days",
    ],
    answer: "Little House on the Prairie",
    id: "rwhtl",
  },
  {
    question:
      "Which actor played the role of Barney Fife in the TV show 'The Andy Griffith Show'?",
    choices: ["Don Knotts", "Jim Nabors", "Andy Griffith", "Ron Howard"],
    answer: "Don Knotts",
    id: "fof7b",
  },
  {
    question:
      "Which 1975 film starring Robert De Niro as a young boxer is based on a screenplay by Paul Schrader?",
    choices: ["Raging Bull", "Taxi Driver", "The Deer Hunter", "Rocky"],
    answer: "Raging Bull",
    id: "zezoj",
  },
  {
    question:
      "Which musician is known for hits like 'Tiny Dancer' and 'Crocodile Rock'?",
    choices: ["Elton John", "Billy Joel", "Leon Russell", "Captain & Tennille"],
    answer: "Elton John",
    id: "vdlwn",
  },
  {
    question:
      "Which actor played the role of Luke Skywalker in the original 'Star Wars' trilogy?",
    choices: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Alec Guinness"],
    answer: "Mark Hamill",
    id: "mb2tf",
  },
  {
    question:
      "Which actress played the role of Ellen Ripley in the 'Alien' film franchise?",
    choices: [
      "Sigourney Weaver",
      "Linda Hamilton",
      "Jamie Lee Curtis",
      "Neve Campbell",
    ],
    answer: "Sigourney Weaver",
    id: "8hozj",
  },
  {
    question:
      "Which American singer-songwriter is known for hits like 'Respect' and 'Think'?",
    choices: ["Aretha Franklin", "Tina Turner", "Diana Ross", "Patti LaBelle"],
    answer: "Aretha Franklin",
    id: "gr0f7",
  },
  {
    question:
      "Which 1984 film starring Eddie Murphy and Dan Aykroyd follows two men who are forced to trade places as part of a bet?",
    choices: [
      "Trading Places",
      "The Prince and the Pauper",
      "Freaky Friday",
      "Like Father Like Son",
    ],
    answer: "Trading Places",
    id: "pafkl",
  },
  {
    question:
      "Which American actress is known for her iconic roles in films like 'The Princess Bride' and 'When Harry Met Sally'?",
    choices: [
      "Meg Ryan",
      "Julia Roberts",
      "Sandra Bullock",
      "Reese Witherspoon",
    ],
    answer: "Meg Ryan",
    id: "1dd9i",
  },
  {
    question:
      "Which British singer-songwriter is known for hits like 'Space Oddity' and 'Changes'?",
    choices: ["David Bowie", "Elton John", "Rod Stewart", "Freddie Mercury"],
    answer: "David Bowie",
    id: "ckgjc",
  },
  {
    question:
      "Which 1994 film starring Tom Hanks and Meg Ryan follows an online romance?",
    choices: [
      "You've Got Mail",
      "Sleepless in Seattle",
      "When Harry Met Sally",
      "Joe Versus the Volcano",
    ],
    answer: "You've Got Mail",
    id: "umzlr",
  },
  {
    question:
      "Which actor played the role of Darth Vader in the original 'Star Wars' trilogy?",
    choices: [
      "David Prowse",
      "James Earl Jones",
      "Harrison Ford",
      "Mark Hamill",
    ],
    answer: "David Prowse",
    id: "72h6x",
  },
  {
    question:
      "Which American actress is known for her iconic roles in films like 'The Wizard of Oz' and 'Meet Me in St. Louis'?",
    choices: ["Judy Garland", "Doris Day", "Marilyn Monroe", "Audrey Hepburn"],
    answer: "Judy Garland",
    id: "r80eq",
  },
  {
    question:
      "Which 1985 film starring Michael J. Fox and Christopher Lloyd follows a time-traveling teenager?",
    choices: [
      "Back to the Future",
      "The Goonies",
      "Ghostbusters",
      "Indiana Jones and the Temple of Doom",
    ],
    answer: "Back to the Future",
    id: "dbrae",
  },
  {
    question:
      "Which British rock band, formed in 1968, is known for hits like 'Stairway to Heaven' and 'Whole Lotta Love'?",
    choices: ["Led Zeppelin", "Pink Floyd", "Queen", "The Who"],
    answer: "Led Zeppelin",
    id: "h89o1",
  },
  {
    question:
      "Which actor played the role of Clarice Starling in the 1991 film 'The Silence of the Lambs'?",
    choices: [
      "Jodie Foster",
      "Sigourney Weaver",
      "Linda Hamilton",
      "Neve Campbell",
    ],
    answer: "Jodie Foster",
    id: "70vm2",
  },
  {
    question:
      "Which American actress is known for her iconic roles in films like 'The Philadelphia Story' and 'Rear Window'?",
    choices: [
      "Katharine Hepburn",
      "Audrey Hepburn",
      "Ingrid Bergman",
      "Greta Garbo",
    ],
    answer: "Katharine Hepburn",
    id: "66ogk",
  },
  {
    question:
      "Which 1975 film starring Steven Spielberg and Roy Scheider follows a killer shark?",
    choices: [
      "Jaws",
      "E.T. the Extra-Terrestrial",
      "Jurassic Park",
      "Indiana Jones and the Raiders of the Lost Ark",
    ],
    answer: "Jaws",
    id: "vy9lk",
  },
  {
    question:
      "Which American singer-songwriter is known for hits like 'Purple Rain' and 'When Doves Cry'?",
    choices: ["Prince", "Michael Jackson", "David Bowie", "Elton John"],
    answer: "Prince",
    id: "znn2k",
  },
  {
    question:
      "Which actress played the role of Ellen DeGeneres's character's love interest in the sitcom 'Ellen'?",
    choices: [
      "Laura Dern",
      "Jennifer Aniston",
      "Courtney Cox",
      "Julia Roberts",
    ],
    answer: "Laura Dern",
    id: "wlddc",
  },
  {
    question:
      "Which British singer-songwriter is known for hits like 'Space Age Love Song' and 'If You Leave'?",
    choices: ["A Flock of Seagulls", "The Cure", "Depeche Mode", "New Order"],
    answer: "A Flock of Seagulls",
    id: "6q99k",
  },
  {
    question:
      "Which 1994 film starring Tom Hanks and Meg Ryan follows a romantic relationship that develops through email exchanges?",
    choices: [
      "You've Got Mail",
      "Sleepless in Seattle",
      "When Harry Met Sally",
      "Joe Versus the Volcano",
    ],
    answer: "You've Got Mail",
    id: "cjdxp",
  },
  {
    question:
      "Which American actress is known for her iconic roles in films like 'Roman Holiday' and 'Funny Face'?",
    choices: [
      "Audrey Hepburn",
      "Katharine Hepburn",
      "Ingrid Bergman",
      "Greta Garbo",
    ],
    answer: "Audrey Hepburn",
    id: "mlw52",
  },
  {
    question:
      "Which British rock band, formed in 1964, is known for hits like 'I Want to Hold Your Hand' and 'Yesterday'?",
    choices: ["The Beatles", "The Rolling Stones", "The Who", "Queen"],
    answer: "The Beatles",
    id: "rzcv4",
  },
  {
    question:
      "Which actor played the role of Luke Skywalker in the prequel trilogy of the 'Star Wars' franchise?",
    choices: [
      "Hayden Christensen",
      "Mark Hamill",
      "Ewan McGregor",
      "Natalie Portman",
    ],
    answer: "Hayden Christensen",
    id: "e14i5",
  },
  {
    question:
      "Which American singer-songwriter is known for hits like 'Respect' and 'Chain of Fools'?",
    choices: ["Aretha Franklin", "Tina Turner", "Diana Ross", "Patti LaBelle"],
    answer: "Aretha Franklin",
    id: "8u8b3",
  },
  {
    question:
      "Which 1986 film starring Tom Cruise and Kelly McGillis follows a group of elite fighter pilots?",
    choices: [
      "Top Gun",
      "The Right Stuff",
      "Apollo 13",
      "The Great Waldo Pepper",
    ],
    answer: "Top Gun",
    id: "xm25i",
  },
  {
    question:
      "Which American actress is known for her iconic roles in films like 'The Exorcist' and 'Klute'?",
    choices: ["Ellen Burstyn", "Jane Fonda", "Glenn Close", "Meryl Streep"],
    answer: "Ellen Burstyn",
    id: "avdht",
  },
  {
    question:
      "Which British singer-songwriter is known for hits like 'Imagine' and 'Revolution'?",
    choices: [
      "John Lennon",
      "Paul McCartney",
      "George Harrison",
      "Ringo Starr",
    ],
    answer: "John Lennon",
    id: "wnl21",
  },
  {
    question:
      "Which 1994 film starring Keanu Reeves and Sandra Bullock follows a bus that must stay above 50 mph?",
    choices: ["Speed", "The Matrix", "Point Break", "John Wick"],
    answer: "Speed",
    id: "hb9uk",
  },
  {
    question:
      "Which American actor is known for his iconic roles in films like 'The Godfather' and 'Apocalypse Now'?",
    choices: ["Marlon Brando", "Al Pacino", "Robert De Niro", "Jack Nicholson"],
    answer: "Marlon Brando",
    id: "zzm5h",
  },
  {
    question:
      "Which British rock band, formed in 1964, is known for hits like 'Satisfaction' and 'Paint It Black'?",
    choices: ["The Rolling Stones", "The Beatles", "The Who", "Queen"],
    answer: "The Rolling Stones",
    id: "iyrif",
  },
  {
    question:
      "Which actress played the role of Katniss Everdeen in the 'Hunger Games' film franchise?",
    choices: [
      "Jennifer Lawrence",
      "Shailene Woodley",
      "Saoirse Ronan",
      "Emma Stone",
    ],
    answer: "Jennifer Lawrence",
    id: "rpnq9",
  },
  {
    question:
      "Which American singer-songwriter is known for hits like 'Hound Dog' and 'Jailhouse Rock'?",
    choices: ["Elvis Presley", "Chuck Berry", "Little Richard", "Buddy Holly"],
    answer: "Elvis Presley",
    id: "a931b",
  },
  {
    question:
      "Which 1975 film starring Jack Nicholson and Louise Fletcher follows a rebellious patient at a mental institution?",
    choices: [
      "One Flew Over the Cuckoo's Nest",
      "The Shining",
      "Easy Rider",
      "Chinatown",
    ],
    answer: "One Flew Over the Cuckoo's Nest",
    id: "18jz1",
  },
  {
    question:
      "Which British rock band, formed in 1970, is known for hits like 'Stairway to Heaven' and 'Whole Lotta Love'?",
    choices: ["Led Zeppelin", "Pink Floyd", "Queen", "The Who"],
    answer: "Led Zeppelin",
    id: "04dc8",
  },
  {
    question: "Who was the Roman Emperor who was assassinated in 41 AD?",
    choices: ["Claudius", "Caligula", "Nero", "Augustus"],
    answer: "Caligula",
    id: "39lpb",
  },
  {
    question: "The Treaty of Versailles was signed in which year?",
    choices: ["1918", "1919", "1920", "1921"],
    answer: "1919",
    id: "hdqvk",
  },
  {
    question: "The Great Fire of London occurred in which year?",
    choices: ["1661", "1665", "1666", "1667"],
    answer: "1666",
    id: "6b8p0",
  },
  {
    question: "The Phoenicians were an ancient civilization from which region?",
    choices: ["Africa", "Asia", "Europe", "Middle East"],
    answer: "Middle East",
    id: "j1au3",
  },
  {
    question: "The Rosetta Stone was discovered in which year?",
    choices: ["1796", "1797", "1798", "1799"],
    answer: "1799",
    id: "qa0c8",
  },
  {
    question: "The Boston Tea Party took place in which year?",
    choices: ["1772", "1773", "1774", "1775"],
    answer: "1773",
    id: "1yzfl",
  },
  {
    question: "The Mongol Empire was founded by whom?",
    choices: ["Genghis Khan", "Temujin", "Kublai Khan", "Ögedei Khan"],
    answer: "Genghis Khan",
    id: "g85xn",
  },
  {
    question: "The Renaissance began in which century?",
    choices: ["13th", "14th", "15th", "16th"],
    answer: "14th",
    id: "mpo5s",
  },
  {
    question: "The Mayan civilization flourished in which modern-day country?",
    choices: ["Mexico", "Guatemala", "Belize", "Honduras"],
    answer: "Mexico",
    id: "k8jje",
  },
  {
    question:
      "The D-Day invasion of Nazi-occupied France took place on which date?",
    choices: ["June 5, 1944", "June 6, 1944", "June 7, 1944", "June 8, 1944"],
    answer: "June 6, 1944",
    id: "27bmz",
  },
  {
    question: "The ancient Olympic Games were held in which city?",
    choices: ["Athens", "Sparta", "Corinth", "Olympia"],
    answer: "Olympia",
    id: "8u2xa",
  },
  {
    question: "The Magna Carta was signed in which year?",
    choices: ["1205", "1215", "1225", "1235"],
    answer: "1215",
    id: "vxuix",
  },
  {
    question: "The Berlin Wall was torn down in which year?",
    choices: ["1988", "1989", "1990", "1991"],
    answer: "1989",
    id: "8kpqf",
  },
  {
    question: "The Viking Age began in which century?",
    choices: ["7th", "8th", "9th", "10th"],
    answer: "8th",
    id: "jo3jb",
  },
  {
    question: "The Battle of Waterloo took place in which year?",
    choices: ["1813", "1814", "1815", "1816"],
    answer: "1815",
    id: "bryop",
  },
  {
    question: "The Great Pyramid of Giza was built for which pharaoh?",
    choices: ["Khufu", "Sneferu", "Khafre", "Menkaure"],
    answer: "Khufu",
    id: "uqucb",
  },
  {
    question: "The Roman Empire fell to the barbarians in which year?",
    choices: ["410", "420", "430", "440"],
    answer: "410",
    id: "3kder",
  },
  {
    question: "The Battle of Gettysburg took place during which war?",
    choices: [
      "American Civil War",
      "World War I",
      "World War II",
      "American Revolutionary War",
    ],
    answer: "American Civil War",
    id: "nx2v5",
  },
  {
    question: "The Bronze Age began in which millennium?",
    choices: ["3rd", "2nd", "1st", "4th"],
    answer: "3rd",
    id: "ipr4a",
  },
  {
    question: "The Treaty of Westphalia was signed in which year?",
    choices: ["1645", "1646", "1647", "1648"],
    answer: "1648",
    id: "rx40z",
  },
  {
    question: "The ancient Sumerians lived in which region?",
    choices: ["Mesopotamia", "Egypt", "Greece", "Rome"],
    answer: "Mesopotamia",
    id: "bfbmn",
  },
  {
    question: "The Boston Massacre took place in which year?",
    choices: ["1764", "1765", "1770", "1775"],
    answer: "1770",
    id: "5imq2",
  },
  {
    question:
      "The ancient city of Angkor Wat is located in which modern-day country?",
    choices: ["Thailand", "Cambodia", "Vietnam", "Laos"],
    answer: "Cambodia",
    id: "l6auu",
  },
  {
    question: "The Black Death pandemic occurred in which century?",
    choices: ["13th", "14th", "15th", "16th"],
    answer: "14th",
    id: "e0ctl",
  },
  {
    question:
      "The Wright brothers made the first powered flight in which year?",
    choices: ["1901", "1902", "1903", "1905"],
    answer: "1903",
    id: "i9754",
  },
  {
    question:
      "The ancient city of Carthage was located in which modern-day country?",
    choices: ["Morocco", "Algeria", "Tunisia", "Libya"],
    answer: "Tunisia",
    id: "ug6ar",
  },
  {
    question: "The Treaty of Paris was signed in which year?",
    choices: ["1782", "1783", "1784", "1785"],
    answer: "1783",
    id: "6g1hh",
  },
  {
    question: "The Berlin Blockade took place in which year?",
    choices: ["1946", "1947", "1948", "1949"],
    answer: "1948",
    id: "8nu4d",
  },
  {
    question: "The ancient Olympic Games were discontinued in which century?",
    choices: ["3rd", "4th", "5th", "6th"],
    answer: "5th",
    id: "xqank",
  },
  {
    question: "The Punic Wars were fought between Rome and which city-state?",
    choices: ["Carthage", "Sparta", "Athens", "Corinth"],
    answer: "Carthage",
    id: "bbzf2",
  },
  {
    question: "The Mayflower Compact was signed in which year?",
    choices: ["1619", "1620", "1621", "1622"],
    answer: "1620",
    id: "8mybm",
  },
  {
    question: "The Great Depression began in which year?",
    choices: ["1925", "1929", "1930", "1931"],
    answer: "1929",
    id: "9tsay",
  },
  {
    question: "The Treaty of Rome was signed in which year?",
    choices: ["1955", "1956", "1957", "1958"],
    answer: "1957",
    id: "fj8jg",
  },
  {
    question:
      "The ancient city of Persepolis was located in which modern-day country?",
    choices: ["Iran", "Iraq", "Turkey", "Afghanistan"],
    answer: "Iran",
    id: "wj92t",
  },
  {
    question: "The War of the Roses took place in which century?",
    choices: ["14th", "15th", "16th", "17th"],
    answer: "15th",
    id: "s4rw1",
  },
  {
    question:
      "The ancient city of Ephesus was located in which modern-day country?",
    choices: ["Turkey", "Greece", "Rome", "Egypt"],
    answer: "Turkey",
    id: "nqziv",
  },
  {
    question: "The Berlin Wall was erected in which year?",
    choices: ["1960", "1961", "1962", "1963"],
    answer: "1961",
    id: "myshp",
  },
  {
    question: "The Iron Curtain was a term coined by whom?",
    choices: [
      "Winston Churchill",
      "Joseph Stalin",
      "Nikita Khrushchev",
      "Mikhail Gorbachev",
    ],
    answer: "Winston Churchill",
    id: "rsba5",
  },
  {
    question: "The Great Fire of Chicago occurred in which year?",
    choices: ["1870", "1871", "1872", "1873"],
    answer: "1871",
    id: "985dx",
  },
  {
    question: "The Philippine-American War took place from which years?",
    choices: ["1898-1902", "1899-1903", "1900-1904", "1901-1905"],
    answer: "1899-1902",
    id: "qxapw",
  },
  {
    question: "The ancient city of Petra was the capital of which kingdom?",
    choices: ["Nabataea", "Palmyra", "Damas", "Edom"],
    answer: "Nabataea",
    id: "y2bqd",
  },
  {
    question:
      "The Opium Wars took place between China and which European power?",
    choices: ["Great Britain", "France", "Germany", "Portugal"],
    answer: "Great Britain",
    id: "7j5tn",
  },
  {
    question: "The Treaty of Waitangi was signed in which year?",
    choices: ["1839", "1840", "1841", "1842"],
    answer: "1840",
    id: "squva",
  },
  {
    question: "The American Civil War was fought between which years?",
    choices: ["1860-1865", "1861-1865", "1862-1866", "1863-1867"],
    answer: "1861-1865",
    id: "c6y4r",
  },
  {
    question: "The Boxer Rebellion took place in which years?",
    choices: ["1899-1901", "1900-1902", "1901-1903", "1902-1904"],
    answer: "1899-1901",
    id: "6od23",
  },
  {
    question:
      "The ancient city of Troy was located in which modern-day country?",
    choices: ["Turkey", "Greece", "Italy", "Croatia"],
    answer: "Turkey",
    id: "36584",
  },
  {
    question:
      "The Mongol Empire was the largest contiguous empire in which century?",
    choices: ["13th", "14th", "15th", "16th"],
    answer: "13th",
    id: "3jytv",
  },
  {
    question: "The Council of Nicaea was convened in which year?",
    choices: ["323", "324", "325", "326"],
    answer: "325",
    id: "gbfi5",
  },
  {
    question: "The Viking Age began in which year?",
    choices: ["793", "794", "795", "796"],
    answer: "793",
    id: "llpjs",
  },
  {
    question: "The Treaty of Utrecht was signed in which year?",
    choices: ["1711", "1712", "1713", "1714"],
    answer: "1713",
    id: "2ntvh",
  },
  {
    question: "The Red Scare took place in which years?",
    choices: ["1917-1922", "1918-1923", "1919-1924", "1920-1925"],
    answer: "1919-1920",
    id: "dmvni",
  },
  {
    question: "The Great Plague of London occurred in which year?",
    choices: ["1664", "1665", "1666", "1667"],
    answer: "1665",
    id: "wkt78",
  },
  {
    question: "The Magna Carta was signed by which king of England?",
    choices: ["John", "Henry", "Richard", "Edward"],
    answer: "John",
    id: "vz06j",
  },
  {
    question: "The Cuban Missile Crisis took place in which year?",
    choices: ["1961", "1962", "1963", "1964"],
    answer: "1962",
    id: "w1let",
  },
  {
    question:
      "The ancient city of Babylon was located in which modern-day country?",
    choices: ["Iraq", "Iran", "Turkey", "Syria"],
    answer: "Iraq",
    id: "0dft1",
  },
  {
    question: "The Yalta Conference took place in which year?",
    choices: ["1944", "1945", "1946", "1947"],
    answer: "1945",
    id: "gijer",
  },
  {
    question: "The ancient city of Pompeii was destroyed by which volcano?",
    choices: [
      "Mount Vesuvius",
      "Mount Etna",
      "Mount St. Helens",
      "Mount Olympus",
    ],
    answer: "Mount Vesuvius",
    id: "aamds",
  },
  {
    question: "The Treaty of Vienna was signed in which year?",
    choices: ["1814", "1815", "1816", "1817"],
    answer: "1815",
    id: "3c0gd",
  },
  {
    question: "The American Revolution began in which year?",
    choices: ["1765", "1775", "1785", "1795"],
    answer: "1775",
    id: "n9hg2",
  },
  {
    question:
      "The ancient city of Delphi was located in which modern-day country?",
    choices: ["Greece", "Turkey", "Rome", "Egypt"],
    answer: "Greece",
    id: "5s761",
  },
  {
    question:
      "The ancient Egyptians built the temples of Abu Simbel in which modern-day country?",
    choices: ["Egypt", "Sudan", "Libya", "Chad"],
    answer: "Egypt",
    id: "2bccc",
  },
  {
    question: "The First Crusade was launched in which year?",
    choices: ["1095", "1100", "1110", "1115"],
    answer: "1095",
    id: "h4ugi",
  },
  {
    question:
      "The Kingdom of Kongo was a medieval kingdom located in which modern-day country?",
    choices: ["Angola", "Congo", "Gabon", "DRCongo"],
    answer: "Angola",
    id: "khx48",
  },
  {
    question: "The Han Dynasty ruled ancient China from which year?",
    choices: ["206 BCE", "221 BCE", "206 CE", "221 CE"],
    answer: "206 BCE",
    id: "vxr21",
  },
  {
    question: "The concept of zero was invented in which ancient civilization?",
    choices: ["Mayan", "Inca", "Sumerian", "Indian"],
    answer: "Indian",
    id: "l0dyt",
  },
  {
    question: "The Treaty of Tordesillas was signed in which year?",
    choices: ["1492", "1494", "1496", "1500"],
    answer: "1494",
    id: "y2vov",
  },
  {
    question:
      "The ancient city of Mohenjo-Daro was located in which modern-day country?",
    choices: ["Pakistan", "India", "Afghanistan", "Iran"],
    answer: "Pakistan",
    id: "sf2dk",
  },
  {
    question: "The first successful human spaceflight was undertaken by whom?",
    choices: ["Yuri Gagarin", "Alan Shepard", "John Glenn", "Sergei Korolev"],
    answer: "Yuri Gagarin",
    id: "t3peu",
  },
  {
    question: "The Rosetta Stone was found in which year?",
    choices: ["1799", "1801", "1803", "1805"],
    answer: "1799",
    id: "lmbz8",
  },
  {
    question: "The Congress of Vienna took place in which year?",
    choices: ["1814", "1815", "1816", "1817"],
    answer: "1815",
    id: "54l6i",
  },
  {
    question:
      "The ancient city of Angkor Wat was built in the 12th century by which king?",
    choices: [
      "Jayavarman VII",
      "Suryavarman II",
      "Indravarman I",
      "Yasovarman I",
    ],
    answer: "Suryavarman II",
    id: "rc62h",
  },
  {
    question: "The Dutch East India Company was founded in which year?",
    choices: ["1600", "1602", "1605", "1610"],
    answer: "1602",
    id: "054m9",
  },
  {
    question: "The Battle of Hastings took place in which year?",
    choices: ["1065", "1066", "1067", "1068"],
    answer: "1066",
    id: "b8blb",
  },
  {
    question: "The Silk Road connected ancient China with which region?",
    choices: ["Mediterranean", "Middle East", "South Asia", "Southeast Asia"],
    answer: "Mediterranean",
    id: "5nf48",
  },
  {
    question: "The ancient Olympic Games featured which event?",
    choices: ["Chariot racing", "Wrestling", "Javelin throw", "Shot put"],
    answer: "Chariot racing",
    id: "nah0k",
  },
  {
    question: "The ancient city of Persepolis was destroyed by whom?",
    choices: [
      "Alexander the Great",
      "Darius III",
      "Xerxes I",
      "Cyrus the Great",
    ],
    answer: "Alexander the Great",
    id: "xsery",
  },
  {
    question: "The Edict of Ashoka was issued in which year?",
    choices: ["268 BCE", "250 BCE", "232 BCE", "220 BCE"],
    answer: "258 BCE",
    id: "7363v",
  },
  {
    question:
      "The first permanent English settlement was established in which year?",
    choices: ["1607", "1605", "1603", "1595"],
    answer: "1607",
    id: "26azt",
  },
  {
    question: "The War of the Austrian Succession took place from which years?",
    choices: ["1740-1748", "1744-1755", "1745-1750", "1742-1749"],
    answer: "1740-1748",
    id: "6m0xx",
  },
  {
    question:
      "The ancient city of Pompeii was buried under volcanic ash in which year?",
    choices: ["79 CE", "70 CE", "89 CE", "99 CE"],
    answer: "79 CE",
    id: "3309w",
  },
  {
    question:
      "The ancient Greeks developed the concept of which philosophical school?",
    choices: ["Stoicism", "Epicureanism", "Platonism", "Aristotelianism"],
    answer: "Stoicism",
    id: "ow0l1",
  },
  {
    question: "The Treaty of Ghent was signed in which year?",
    choices: ["1812", "1813", "1814", "1815"],
    answer: "1814",
    id: "bq1cp",
  },
  {
    question:
      "The ancient city of Samarkand was an important stop on which trade route?",
    choices: ["Silk Road", "Spice Route", "Incense Road", "Roman Road"],
    answer: "Silk Road",
    id: "52bju",
  },
  {
    question: "The Soviet Union launched which spacecraft in 1957?",
    choices: ["Sputnik 1", "Sputnik 2", "Vostok 1", "Luna 2"],
    answer: "Sputnik 1",
    id: "7om26",
  },
  {
    question:
      "The ancient Egyptians built the Great Sphinx of Giza during which dynasty?",
    choices: [
      "Old Kingdom",
      "Middle Kingdom",
      "New Kingdom",
      "Ptolemaic Kingdom",
    ],
    answer: "Old Kingdom",
    id: "a6o7n",
  },
  {
    question: "The Treaty of Lausanne was signed in which year?",
    choices: ["1922", "1923", "1924", "1925"],
    answer: "1923",
    id: "oopae",
  },
  {
    question:
      "The ancient city of Taxila was located in which modern-day country?",
    choices: ["Pakistan", "India", "Afghanistan", "Iran"],
    answer: "Pakistan",
    id: "dntum",
  },
  {
    question: "The first modern Olympic Games took place in which year?",
    choices: ["1892", "1894", "1896", "1898"],
    answer: "1896",
    id: "r03aj",
  },
  {
    question: "The English Civil War took place from which years?",
    choices: ["1642-1646", "1645-1649", "1648-1651", "1650-1653"],
    answer: "1642-1646",
    id: "d98wl",
  },
  {
    question:
      "The ancient city of Palmyra was an important center of which ancient trade?",
    choices: ["Silk Road", "Incense Road", "Spice Route", "Roman Road"],
    answer: "Incense Road",
    id: "x2sub",
  },
  {
    question: "The ancient Greeks believed in the mythology of which hero?",
    choices: ["Perseus", "Theseus", "Hercules", "Orpheus"],
    answer: "Hercules",
    id: "9k2zc",
  },
  {
    question:
      "The first permanent Dutch settlement was established in which year?",
    choices: ["1624", "1626", "1628", "1630"],
    answer: "1626",
    id: "kujvy",
  },
  {
    question:
      "The ancient city of Paestum was founded by which ancient Greeks?",
    choices: ["Syracusans", "Spartans", "Athenians", "Phoenicians"],
    answer: "Syracusans",
    id: "vfned",
  },
  {
    question:
      "The English Reformation took place during the reign of which monarch?",
    choices: ["Henry VIII", "Edward VI", "Mary I", "Elizabeth I"],
    answer: "Henry VIII",
    id: "tpjrw",
  },
  {
    question:
      "The ancient city of Petra was carved into the rocks by which ancient civilization?",
    choices: ["Nabateans", "Romans", "Greeks", "Assyrians"],
    answer: "Nabateans",
    id: "grvbe",
  },
  {
    question: "The ancient Chinese invented which technology?",
    choices: ["Paper", "Gunpowder", "Printing press", "Compass"],
    answer: "Paper",
    id: "kulsm",
  },
  {
    question: "The Treaty of Campo Formio was signed in which year?",
    choices: ["1796", "1797", "1798", "1799"],
    answer: "1797",
    id: "cx2fj",
  },
  {
    question:
      "The ancient city of Carthage was founded by which Phoenician queen?",
    choices: ["Dido", "Jezebel", "Semiramis", "Cleopatra"],
    answer: "Dido",
    id: "vl89c",
  },
  {
    question: "The War of the Quadruple Alliance took place from which years?",
    choices: ["1718-1720", "1720-1722", "1722-1724", "1724-1726"],
    answer: "1718-1720",
    id: "her4h",
  },
  {
    question:
      "The ancient Greeks developed the concept of which scientific discipline?",
    choices: ["Biology", "Chemistry", "Physics", "Mathematics"],
    answer: "Biology",
    id: "2spoi",
  },
  {
    question: "The Soviet Union launched which space station in 1986?",
    choices: ["Mir", "Salyut", "Vostok", "Luna"],
    answer: "Mir",
    id: "uexru",
  },
  {
    question:
      "The ancient city of Ephesus was an important center of which ancient cult?",
    choices: ["Christianity", "Paganism", "Judaism", "Dionysian Mysteries"],
    answer: "Christianity",
    id: "xin10",
  },
  {
    question:
      "The ancient city of Palenque was a major center of which civilization?",
    choices: ["Mayan", "Aztec", "Inca", "Olmec"],
    answer: "Mayan",
    id: "xgi00",
  },
  {
    question:
      "The United States dropped atomic bombs on which two Japanese cities?",
    choices: [
      "Hiroshima and Nagasaki",
      "Tokyo and Osaka",
      "Kyoto and Nara",
      "Fukuoka and Sasebo",
    ],
    answer: "Hiroshima and Nagasaki",
    id: "0elwj",
  },
  {
    question: "The ancient city of Ur was located in which modern-day country?",
    choices: ["Iraq", "Iran", "Syria", "Turkey"],
    answer: "Iraq",
    id: "xqve0",
  },
  {
    question: "The Edict of Milan was issued in which year?",
    choices: ["313 CE", "314 CE", "315 CE", "316 CE"],
    answer: "313 CE",
    id: "dwlgn",
  },
  {
    question: "The Treaty of Bucharest was signed in which year?",
    choices: ["1812", "1813", "1814", "1815"],
    answer: "1812",
    id: "higgy",
  },
  {
    question:
      "The ancient city of Mohenjo-Daro was part of which ancient civilization?",
    choices: [
      "Indus Valley Civilization",
      "Vedic Civilization",
      "Mauryan Empire",
      "Gupta Empire",
    ],
    answer: "Indus Valley Civilization",
    id: "cv5pn",
  },
  {
    question: "The War of the Polish Succession took place from which years?",
    choices: ["1733-1735", "1735-1738", "1738-1740", "1740-1742"],
    answer: "1733-1735",
    id: "6fhve",
  },
  {
    question: "The ancient Greeks believed in the mythology of which goddess?",
    choices: ["Athena", "Artemis", "Aphrodite", "Hera"],
    answer: "Athena",
    id: "3lanv",
  },
  {
    question: "The Treaty of Constantinople was signed in which year?",
    choices: ["1832", "1833", "1834", "1835"],
    answer: "1832",
    id: "rro2f",
  },
  {
    question:
      "The ancient city of Antioch was an important center of which early Christian community?",
    choices: [
      "Jewish-Christian",
      "Gentile-Christian",
      "Pauline-Christian",
      "Gnostic-Christian",
    ],
    answer: "Gentile-Christian",
    id: "5wznx",
  },
  {
    question: "The Soviet Union launched which spacecraft in 1961?",
    choices: ["Sputnik 3", "Vostok 1", "Luna 3", "Korabl-Sputnik"],
    answer: "Vostok 1",
    id: "u5ruc",
  },
  {
    question:
      "The ancient city of Nubia was located in which modern-day country?",
    choices: ["Sudan", "Egypt", "Ethiopia", "Eritrea"],
    answer: "Sudan",
    id: "vvdwe",
  },
  {
    question: "The War of the Grand Alliance took place from which years?",
    choices: ["1688-1697", "1690-1695", "1695-1699", "1697-1701"],
    answer: "1688-1697",
    id: "p19ei",
  },
  {
    question:
      "The ancient city of Susa was an important center of which ancient empire?",
    choices: [
      "Persian Empire",
      "Achaemenid Empire",
      "Parthian Empire",
      "Sassanian Empire",
    ],
    answer: "Achaemenid Empire",
    id: "5zdp4",
  },
  {
    question: "The Soviet Union launched which spacecraft in 1959?",
    choices: ["Luna 2", "Luna 3", "Luna 4", "Luna 5"],
    answer: "Luna 3",
    id: "srr9g",
  },
  {
    question:
      "The ancient city of Leptis Magna was an important center of which ancient civilization?",
    choices: ["Phoenician", "Carthaginian", "Roman", "Graeco-Roman"],
    answer: "Roman",
    id: "yi7jz",
  },
  {
    question: "The Treaty of Aix-la-Chapelle was signed in which year?",
    choices: ["1668", "1679", "1697", "1719"],
    answer: "1668",
    id: "48x7k",
  },
  {
    question:
      "The ancient city of Persepolis was the capital of which ancient empire?",
    choices: [
      "Achaemenid Empire",
      "Parthian Empire",
      "Sassanian Empire",
      "Persian Empire",
    ],
    answer: "Achaemenid Empire",
    id: "9lpkg",
  },
  {
    question:
      "The United States dropped atomic bombs on which two Japanese cities in 1945?",
    choices: [
      "Hiroshima and Nagasaki",
      "Tokyo and Osaka",
      "Kyoto and Nara",
      "Fukuoka and Sasebo",
    ],
    answer: "Hiroshima and Nagasaki",
    id: "qfph4",
  },
  {
    question: "The ancient city of Angkor Wat was built during which dynasty?",
    choices: [
      "Khmer Empire",
      "Chenla Kingdom",
      "Funan Kingdom",
      "Chola Empire",
    ],
    answer: "Khmer Empire",
    id: "gqokn",
  },
  {
    question: "The Treaty of Riga was signed in which year?",
    choices: ["1920", "1921", "1922", "1923"],
    answer: "1921",
    id: "wwpei",
  },
  {
    question:
      "The ancient city of Pergamon was an important center of which ancient civilization?",
    choices: ["Greek", "Roman", "Hittite", "Lydia"],
    answer: "Greek",
    id: "9orak",
  },
  {
    question: "The War of the League of Cambrai took place from which years?",
    choices: ["1508-1516", "1515-1525", "1521-1530", "1535-1545"],
    answer: "1508-1516",
    id: "fi158",
  },
  {
    question:
      "The ancient city of Ephesus was an important center of which early Christian community?",
    choices: [
      "Jewish-Christian",
      "Gentile-Christian",
      "Pauline-Christian",
      "Gnostic-Christian",
    ],
    answer: "Gentile-Christian",
    id: "kjub6",
  },
  {
    question: "Which boxer was known for his undefeated record of 50-0?",
    choices: [
      "Muhammad Ali",
      "Joe Frazier",
      "Floyd Mayweather Jr.",
      "George Foreman",
    ],
    answer: "Floyd Mayweather Jr.",
    id: "p2w61",
  },
  {
    question:
      "Which of the following tennis tournaments is NOT one of the four Grand Slam tournaments?",
    choices: [
      "Australian Open",
      "French Open",
      "Wimbledon",
      "Indian Wells Masters",
    ],
    answer: "Indian Wells Masters",
    id: "vjt87",
  },
  {
    question: "Who is the all-time leading scorer in the NBA?",
    choices: [
      "LeBron James",
      "Kareem Abdul-Jabbar",
      "Michael Jordan",
      "Kevin Durant",
    ],
    answer: "Kareem Abdul-Jabbar",
    id: "2s8mz",
  },
  {
    question: "In which year did the FIFA World Cup start?",
    choices: ["1920", "1930", "1950", "1990"],
    answer: "1930",
    id: "nacnw",
  },
  {
    question: "Who is the founder of the Olympics?",
    choices: [
      "Pierre de Coubertin",
      "Baron Verbiest",
      "Juan Antonio Samaranch",
      "Avery Brundage",
    ],
    answer: "Pierre de Coubertin",
    id: "rrn1o",
  },
  {
    question: "What is the distance of a marathon?",
    choices: ["20 miles", "26.2 miles", "30 miles", "40 miles"],
    answer: "26.2 miles",
    id: "d8m1i",
  },
  {
    question: "Who is the only tennis player to achieve a 'Golden Slam'?",
    choices: [
      "Steffi Graf",
      "Martina Navratilova",
      "Venus Williams",
      "Serena Williams",
    ],
    answer: "Steffi Graf",
    id: "tr536",
  },
  {
    question:
      "Which of the following cricketers is known as 'The God of Cricket'?",
    choices: [
      "Sachin Tendulkar",
      "Don Bradman",
      "Brian Lara",
      "Jacques Kallis",
    ],
    answer: "Sachin Tendulkar",
    id: "m1svj",
  },
  {
    question: "In which sport is the term 'hat-trick' commonly used?",
    choices: ["Cricket", "Football", "Hockey", "Rugby"],
    answer: "Football",
    id: "jniqr",
  },
  {
    question:
      "Who is the all-time leading wicket-taker in international cricket?",
    choices: [
      "Muttiah Muralitharan",
      "Shane Warne",
      "Anil Kumble",
      "Harbhajan Singh",
    ],
    answer: "Muttiah Muralitharan",
    id: "ykihx",
  },
  {
    question: "Which boxer was known as 'The Brockton Blockbuster'?",
    choices: [
      "Rocky Marciano",
      "Joe Frazier",
      "Muhammad Ali",
      "George Foreman",
    ],
    answer: "Rocky Marciano",
    id: "59lof",
  },
  {
    question:
      "Which of the following Formula 1 drivers has won the most World Championships?",
    choices: [
      "Michael Schumacher",
      "Lewis Hamilton",
      "Juan Manuel Fangio",
      "Ayrton Senna",
    ],
    answer: "Michael Schumacher",
    id: "yjw2n",
  },
  {
    question:
      "Which golfer is known for his iconic swing and his nickname 'The Golden Bear'?",
    choices: ["Jack Nicklaus", "Arnold Palmer", "Gary Player", "Tiger Woods"],
    answer: "Jack Nicklaus",
    id: "ucizs",
  },
  {
    question: "Who is the all-time leading scorer in the WNBA?",
    choices: [
      "Diana Taurasi",
      "Candace Parker",
      "Lisa Leslie",
      "Sheryl Swoopes",
    ],
    answer: "Diana Taurasi",
    id: "pzqm4",
  },
  {
    question:
      "Which of the following baseball players broke the color barrier in Major League Baseball?",
    choices: ["Jackie Robinson", "Babe Ruth", "Lou Gehrig", "Joe DiMaggio"],
    answer: "Jackie Robinson",
    id: "m7wx8",
  },
  {
    question:
      "Which cyclist won the Tour de France a record seven consecutive times?",
    choices: [
      "Lance Armstrong",
      "Miguel Indurain",
      "Bernard Hinault",
      "Jacques Anquetil",
    ],
    answer: "Lance Armstrong",
    id: "y2wrr",
  },
  {
    question: "Who is the all-time leading rebounder in the NBA?",
    choices: [
      "Wilt Chamberlain",
      "Bill Russell",
      "Hakeem Olajuwon",
      "Kareem Abdul-Jabbar",
    ],
    answer: "Wilt Chamberlain",
    id: "tb8qf",
  },
  {
    question: "Which boxer won gold at the 1960 Summer Olympics?",
    choices: [
      "Cassius Clay",
      "Sugar Ray Robinson",
      "George Foreman",
      "Joe Frazier",
    ],
    answer: "Cassius Clay",
    id: "8itc3",
  },
  {
    question:
      "Which of the following tennis players has won the most Grand Slam singles titles?",
    choices: [
      "Roger Federer",
      "Rafael Nadal",
      "Novak Djokovic",
      "Serena Williams",
    ],
    answer: "Serena Williams",
    id: "8eir6",
  },
  {
    question: "Who is the founder of the New York Yankees?",
    choices: [
      "George Steinbrenner",
      "Jacob Ruppert",
      "Colonel Huston",
      "Billy Martin",
    ],
    answer: "Jacob Ruppert",
    id: "4n9hb",
  },
  {
    question:
      "Which of the following Formula 1 teams has won the most Constructors' Championships?",
    choices: ["Ferrari", "Mercedes", "Red Bull Racing", "McLaren"],
    answer: "Ferrari",
    id: "9vzsf",
  },
  {
    question: "Who is the all-time leading scorer in the NHL?",
    choices: ["Wayne Gretzky", "Gordie Howe", "Mario Lemieux", "Bobby Orr"],
    answer: "Wayne Gretzky",
    id: "tlwd7",
  },
  {
    question: "Which boxer was known as 'Sugar'?",
    choices: [
      "Sugar Ray Robinson",
      "Sugar Ray Leonard",
      "Marvin Hagler",
      "Thomas Hearns",
    ],
    answer: "Sugar Ray Robinson",
    id: "7k851",
  },
  {
    question:
      "Which of the following athletes has won the most Olympic gold medals?",
    choices: ["Michael Phelps", "Mark Spitz", "Carl Lewis", "Paavo Nurmi"],
    answer: "Michael Phelps",
    id: "5lbsu",
  },
  {
    question: "Who is the founder of the Boston Celtics?",
    choices: ["Walter A. Brown", "Red Auerbach", "Bill Russell", "Larry Bird"],
    answer: "Walter A. Brown",
    id: "9oj04",
  },
  {
    question:
      "Which of the following tennis players has won the most ATP Masters 1000 titles?",
    choices: ["Novak Djokovic", "Rafael Nadal", "Roger Federer", "Andy Murray"],
    answer: "Novak Djokovic",
    id: "v3ir6",
  },
  {
    question: "Who is the all-time leading passer in the NFL?",
    choices: ["Drew Brees", "Tom Brady", "Peyton Manning", "Brett Favre"],
    answer: "Drew Brees",
    id: "3x96z",
  },
  {
    question:
      "Which of the following cricketers has taken the most wickets in Test cricket?",
    choices: [
      "Muttiah Muralitharan",
      "Shane Warne",
      "Anil Kumble",
      "Glenn McGrath",
    ],
    answer: "Muttiah Muralitharan",
    id: "y8wxt",
  },
  {
    question: "Who is the founder of the Indianapolis 500?",
    choices: ["Carl Fisher", "Tony Hulman", "Roger Penske", "Bobby Rahal"],
    answer: "Carl Fisher",
    id: "l6ub6",
  },
  {
    question:
      "Which of the following golfers has won the most major championships?",
    choices: ["Jack Nicklaus", "Arnold Palmer", "Gary Player", "Tiger Woods"],
    answer: "Jack Nicklaus",
    id: "7a0b1",
  },
  {
    question: "Which boxer was known as 'The Greatest'?",
    choices: ["Muhammad Ali", "Joe Frazier", "George Foreman", "Mike Tyson"],
    answer: "Muhammad Ali",
    id: "n29mt",
  },
  {
    question: "Who is the founder of the Chicago Bulls?",
    choices: [
      "Jerry Reinsdorf",
      "Michael Jordan",
      "Phil Jackson",
      "Derrick Rose",
    ],
    answer: "Jerry Reinsdorf",
    id: "jtzth",
  },
  {
    question:
      "Which of the following tennis players has won the most Grand Slam singles titles in the Open Era?",
    choices: [
      "Serena Williams",
      "Steffi Graf",
      "Martina Navratilova",
      "Chris Evert",
    ],
    answer: "Serena Williams",
    id: "0bg6k",
  },
  {
    question: "Who is the all-time leading rusher in the NFL?",
    choices: ["Emmitt Smith", "Walter Payton", "Gale Sayers", "Barry Sanders"],
    answer: "Emmitt Smith",
    id: "sa6ac",
  },
  {
    question: "Which of the following cricketers is known as 'The Wall'?",
    choices: [
      "Rahul Dravid",
      "Sachin Tendulkar",
      "Sunil Gavaskar",
      "VVS Laxman",
    ],
    answer: "Rahul Dravid",
    id: "6mmrz",
  },
  {
    question: "Who is the founder of the Boston Marathon?",
    choices: [
      "John J. McDermott",
      "Lawrence Olson",
      "William R. Anderson",
      "Thomas W. Burke",
    ],
    answer: "John J. McDermott",
    id: "h3qn6",
  },
  {
    question:
      "Which of the following athletes has won the most Olympic gold medals in individual events?",
    choices: ["Michael Phelps", "Mark Spitz", "Carl Lewis", "Paavo Nurmi"],
    answer: "Michael Phelps",
    id: "k1go5",
  },
  {
    question:
      "Which of the following tennis players has won the most ATP Tour titles?",
    choices: [
      "Roger Federer",
      "Rafael Nadal",
      "Novak Djokovic",
      "Jimmy Connors",
    ],
    answer: "Jimmy Connors",
    id: "lp8n8",
  },
  {
    question: "Who is the founder of the New York Mets?",
    choices: [
      "Joan Whitney Payson",
      "M. Donald Grant",
      "George Weiss",
      "Johnny Murphy",
    ],
    answer: "Joan Whitney Payson",
    id: "1xb5x",
  },
  {
    question: "Which boxer was known as 'The Raging Bull'?",
    choices: ["Jake LaMotta", "Mike Tyson", "Rocky Marciano", "Joe Frazier"],
    answer: "Jake LaMotta",
    id: "zavyz",
  },
  {
    question: "Who is the founder of the Indianapolis Colts?",
    choices: ["Bob Irsay", "Jim Irsay", "Tony Dungy", "Peyton Manning"],
    answer: "Bob Irsay",
    id: "129mx",
  },
  {
    question:
      "Which of the following tennis players has won the most Grand Slam doubles titles?",
    choices: [
      "Martina Navratilova",
      "Billie Jean King",
      "Pam Shriver",
      "Venus Williams",
    ],
    answer: "Martina Navratilova",
    id: "byko4",
  },
  {
    question: "Who is the all-time leading scorer in the ABA?",
    choices: ["Julius Erving", "George Gervin", "David Thompson", "Dan Issel"],
    answer: "Dan Issel",
    id: "kkl53",
  },
  {
    question:
      "Which of the following cricketers is known as 'The Master Blaster'?",
    choices: [
      "Sachin Tendulkar",
      "Sunil Gavaskar",
      "Vivian Richards",
      "Brian Lara",
    ],
    answer: "Sachin Tendulkar",
    id: "us629",
  },
  {
    question: "Who is the founder of the Pittsburgh Steelers?",
    choices: ["Art Rooney", "Dan Rooney", "Chuck Noll", "Terry Bradshaw"],
    answer: "Art Rooney",
    id: "fmqsl",
  },
  {
    question: "Who is the founder of the Chicago White Sox?",
    choices: [
      "Charles Comiskey",
      "Bill Veeck",
      "Jerry Reinsdorf",
      "Ozzie Guillén",
    ],
    answer: "Charles Comiskey",
    id: "fg5yb",
  },
  {
    question:
      "Which of the following athletes has won the most Olympic gold medals in team events?",
    choices: ["Michael Phelps", "Mark Spitz", "Carl Lewis", "Paavo Nurmi"],
    answer: "Michael Phelps",
    id: "0w0c6",
  },
  {
    question: "Who is the founder of the Boston Red Sox?",
    choices: [
      "John I. Taylor",
      "Tom Yawkey",
      "Ted Williams",
      "Carl Yastrzemski",
    ],
    answer: "John I. Taylor",
    id: "2ujfl",
  },
  {
    question:
      "Which of the following cricketers is known as 'The Little Master'?",
    choices: [
      "Sachin Tendulkar",
      "Sunil Gavaskar",
      "Vivian Richards",
      "Brian Lara",
    ],
    answer: "Sunil Gavaskar",
    id: "5xznu",
  },
  {
    question: "Who is the founder of the Green Bay Packers?",
    choices: ["Curly Lambeau", "Vince Lombardi", "Bart Starr", "Brett Favre"],
    answer: "Curly Lambeau",
    id: "etpv7",
  },
  {
    question: "Who is the founder of the Detroit Lions?",
    choices: [
      "George A. Richards",
      "William Clay Ford Sr.",
      "Matt Millen",
      "Barry Sanders",
    ],
    answer: "George A. Richards",
    id: "u4a0f",
  },
  {
    question: "Who is the founder of the Cleveland Browns?",
    choices: ["Arthur B. McBride", "Paul Brown", "Jim Brown", "Otto Graham"],
    answer: "Arthur B. McBride",
    id: "jdbgq",
  },
  {
    question: "Which of the following cricketers is known as 'The Master'?",
    choices: [
      "Sachin Tendulkar",
      "Sunil Gavaskar",
      "Vivian Richards",
      "Brian Lara",
    ],
    answer: "Sachin Tendulkar",
    id: "clcq3",
  },
  {
    question:
      "Who is the only player to have won the Super Bowl, the NFL MVP award, and the Super Bowl MVP award in the same season?",
    choices: ["Joe Montana", "Tom Brady", "Terry Bradshaw", "Steve Young"],
    answer: "Steve Young",
    id: "cbb73",
  },
  {
    question: "Which cyclist has won the most stages in the Tour de France?",
    choices: [
      "Eddy Merckx",
      "Bernard Hinault",
      "Jacques Anquetil",
      "Lance Armstrong",
    ],
    answer: "Eddy Merckx",
    id: "10cyk",
  },
  {
    question:
      "Who is the all-time leading scorer in the history of the English Premier League?",
    choices: ["Alan Shearer", "Wayne Rooney", "Andy Cole", "Thierry Henry"],
    answer: "Alan Shearer",
    id: "9mxwy",
  },
  {
    question:
      "Which of the following boxers was known for his 'peek-a-boo' defense?",
    choices: ["Mike Tyson", "Floyd Patterson", "Joe Frazier", "Jake LaMotta"],
    answer: "Floyd Patterson",
    id: "4vad3",
  },
  {
    question:
      "Who is the only player to have won the WNBA MVP, Finals MVP, and Olympic gold medal in the same year?",
    choices: [
      "Lisa Leslie",
      "Sheryl Swoopes",
      "Diana Taurasi",
      "Candace Parker",
    ],
    answer: "Lisa Leslie",
    id: "mf2ox",
  },
  {
    question:
      "Which of the following cricketers has taken the most wickets in ODI cricket?",
    choices: [
      "Muttiah Muralitharan",
      "Wasim Akram",
      "Shane Warne",
      "Anil Kumble",
    ],
    answer: "Muttiah Muralitharan",
    id: "7hxjo",
  },
  {
    question:
      "Who is the all-time leading scorer in the history of the UEFA Champions League?",
    choices: [
      "Cristiano Ronaldo",
      "Lionel Messi",
      "Robert Lewandowski",
      "Zlatan Ibrahimović",
    ],
    answer: "Cristiano Ronaldo",
    id: "1va86",
  },
  {
    question:
      "Which of the following tennis players has won the most doubles titles in the Open Era?",
    choices: [
      "Martina Navratilova",
      "Billie Jean King",
      "Chris Evert",
      "Pam Shriver",
    ],
    answer: "Martina Navratilova",
    id: "f5ivo",
  },
  {
    question:
      "Who is the only player to have won the NBA championship, MVP, and Finals MVP in the same season?",
    choices: [
      "Magic Johnson",
      "Kareem Abdul-Jabbar",
      "Larry Bird",
      "Michael Jordan",
    ],
    answer: "Magic Johnson",
    id: "1pc5j",
  },
  {
    question:
      "Which of the following athletes has won the most gold medals in the Winter Olympics?",
    choices: [
      "Norwegian biathlete Ole Einar Bjørndalen",
      "American speed skater Eric Heiden",
      "German luge athlete Georg Hackl",
      "Austrian alpine skier Annemarie Moser-Pröll",
    ],
    answer: "Norwegian biathlete Ole Einar Bjørndalen",
    id: "jll75",
  },
  {
    question:
      "Who is the all-time leading scorer in the history of the NCAA Men's Division I Basketball Championship?",
    choices: [
      "Christian Laettner",
      "J.J. Redick",
      "Tyler Hansbrough",
      "Lew Alcindor",
    ],
    answer: "Christian Laettner",
    id: "19nmn",
  },
  {
    question: "Which of the following boxers was known for his 'bolo punch'?",
    choices: [
      "Kid Gavilán",
      "Sugar Ray Robinson",
      "Jake LaMotta",
      "Rocky Marciano",
    ],
    answer: "Kid Gavilán",
    id: "tnkhc",
  },
  {
    question:
      "Who is the only player to have won the FIFA World Cup, the UEFA Champions League, and the Ballon d'Or in the same year?",
    choices: ["Lionel Messi", "Cristiano Ronaldo", "Zinedine Zidane", "Kaka"],
    answer: "Lionel Messi",
    id: "fke6a",
  },
  {
    question:
      "Which of the following tennis players has won the most singles titles in the Open Era?",
    choices: [
      "Roger Federer",
      "Rafael Nadal",
      "Novak Djokovic",
      "Pete Sampras",
    ],
    answer: "Roger Federer",
    id: "irhbt",
  },
  {
    question: "Who is the all-time leading scorer in the history of the NHL?",
    choices: ["Wayne Gretzky", "Gordie Howe", "Mario Lemieux", "Alex Ovechkin"],
    answer: "Wayne Gretzky",
    id: "z0752",
  },
  {
    question:
      "Which of the following cricketers has scored the most centuries in international cricket?",
    choices: [
      "Sachin Tendulkar",
      "Jacques Kallis",
      "Ricky Ponting",
      "Brian Lara",
    ],
    answer: "Sachin Tendulkar",
    id: "p6j3n",
  },
  {
    question:
      "Which of the following athletes has won the most Olympic medals in the history of the Winter Olympics?",
    choices: [
      "Norwegian biathlete Ole Einar Bjørndalen",
      "American speed skater Eric Heiden",
      "German luge athlete Georg Hackl",
      "Austrian alpine skier Annemarie Moser-Pröll",
    ],
    answer: "Norwegian biathlete Ole Einar Bjørndalen",
    id: "8efxz",
  },
  {
    question:
      "What is the process by which water moves through a plant, from the roots to the leaves, and is then released into the air as water vapor?",
    choices: ["Respiration", "Photosynthesis", "Transpiration", "Osmosis"],
    answer: "Transpiration",
    id: "1vcbx",
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Earth", "Saturn", "Jupiter", "Uranus"],
    answer: "Jupiter",
    id: "u27ih",
  },
  {
    question:
      "What is the term for the remains or imprints of ancient plants and animals?",
    choices: ["Fossils", "Rocks", "Minerals", "Gemstones"],
    answer: "Fossils",
    id: "zt1kg",
  },
  {
    question:
      "What is the scientific study of the structure, behavior, and evolution of the universe?",
    choices: ["Cosmology", "Astrology", "Astronomy", "Geology"],
    answer: "Cosmology",
    id: "qyisy",
  },
  {
    question:
      "What is the process by which the universe became transparent to light, occurring about 380,000 years after the Big Bang?",
    choices: ["Recursion", "Recombination", "Decoupling", "Expansion"],
    answer: "Recombination",
    id: "5zugs",
  },
  {
    question:
      "What is the term for a region in space where the gravitational pull is so strong that not even light can escape?",
    choices: ["Black Hole", "White Hole", "Wormhole", "Nebula"],
    answer: "Black Hole",
    id: "jbgy0",
  },
  {
    question:
      "What is the term for the process by which an organism's genetic information is passed from one generation to the next?",
    choices: ["Evolution", "Genetics", "Heredity", "Adaptation"],
    answer: "Heredity",
    id: "ewgwb",
  },
  {
    question:
      "What is the scientific study of the structure, properties, and reactions of matter?",
    choices: ["Biology", "Chemistry", "Physics", "Geology"],
    answer: "Chemistry",
    id: "n7w6p",
  },
  {
    question:
      "What is the term for a substance that increases the rate of a chemical reaction without being consumed or altered?",
    choices: ["Catalyst", "reactant", "Product", "Inhibitor"],
    answer: "Catalyst",
    id: "lamro",
  },
  {
    question:
      "What is the scientific term for the 'study of the structure, properties, and reactions of matter'?",
    choices: ["Biology", "Chemistry", "Physics", "Geology"],
    answer: "Chemistry",
    id: "14jzx",
  },
  {
    question:
      "What is the scientific study of the Earth's physical structure, composition, and processes?",
    choices: ["Geology", "Meteorology", "Oceanography", "Astronomy"],
    answer: "Geology",
    id: "esi6r",
  },
  {
    question:
      "What is the term for the movement of tectonic plates that can cause earthquakes and volcanic activity?",
    choices: ["Continental Drift", "Plate Tectonics", "Glaciation", "Erosion"],
    answer: "Plate Tectonics",
    id: "4x22v",
  },
  {
    question:
      "What is the scientific term for the 'study of the Earth's physical structure, composition, and processes'?",
    choices: ["Geology", "Meteorology", "Oceanography", "Astronomy"],
    answer: "Geology",
    id: "m8wvv",
  },
  {
    question: "What is the scientific study of the weather and climate?",
    choices: ["Meteorology", "Oceanography", "Geology", "Astronomy"],
    answer: "Meteorology",
    id: "sz5aa",
  },
  {
    question:
      "What is the term for the movement of water through a plant, from the roots to the leaves, and is then released into the air as water vapor?",
    choices: ["Respiration", "Photosynthesis", "Transpiration", "Osmosis"],
    answer: "Transpiration",
    id: "g4h1p",
  },
  {
    question: "What is the scientific study of the ocean and its phenomena?",
    choices: ["Oceanography", "Meteorology", "Geology", "Astronomy"],
    answer: "Oceanography",
    id: "2rf4g",
  },
  {
    question:
      "What is the term for the process by which water moves through a plant, from the roots to the leaves, and is then released into the air as water vapor?",
    choices: ["Respiration", "Photosynthesis", "Transpiration", "Osmosis"],
    answer: "Transpiration",
    id: "sgbsm",
  },
  {
    question:
      "What is the scientific study of the universe beyond the Earth's atmosphere?",
    choices: ["Astronomy", "Astrology", "Cosmology", "Geology"],
    answer: "Astronomy",
    id: "ixyii",
  },
];

const EURO = [
  {
    question: "Which country won the Eurovision Song Contest in 2015?",
    choices: ["Sweden", "Austria", "Australia", "France"],
    answer: "Sweden",
    id: "1pxbb",
  },
  {
    question: "Who represented Norway in the 2019 Eurovision Song Contest?",
    choices: ["KEiiNO", "Mørland", "JOWST", "Alexander Rybak"],
    answer: "KEiiNO",
    id: "pvltd",
  },
  {
    question:
      "What is the name of the Armenian entry in the 2016 Eurovision Song Contest?",
    choices: ["LoveWave", "Not Alone", "Face the Shadow", " Chain of Lights"],
    answer: "LoveWave",
    id: "oylvb",
  },
  {
    question: "How many times has Luxembourg won the Eurovision Song Contest?",
    choices: ["4", "5", "3", "2"],
    answer: "5",
    id: "kw2sn",
  },
  {
    question:
      "What is the name of the winner of the 2007 Eurovision Song Contest?",
    choices: [
      "Molitva",
      "Hard Rock Hallelujah",
      ".everybody",
      "The Worrying Kind",
    ],
    answer: "Hard Rock Hallelujah",
    id: "cxtyt",
  },
  {
    question: "Which city hosted the 2012 Eurovision Song Contest?",
    choices: ["Baku", "Istanbul", "Stockholm", "Copenhagen"],
    answer: "Baku",
    id: "okaz3",
  },
  {
    question:
      "Who represented the United Kingdom in the 2016 Eurovision Song Contest?",
    choices: ["Joe and Jake", "Molly Smitten-Downes", "Electro Velvet", "Blue"],
    answer: "Joe and Jake",
    id: "ete1e",
  },
  {
    question:
      "What is the name of the Swedish entry in the 2012 Eurovision Song Contest?",
    choices: ["Euphoria", "Waterline", "Suus", "Crystalline"],
    answer: "Euphoria",
    id: "vpqvc",
  },
  {
    question: "Who finished second in the 2015 Eurovision Song Contest?",
    choices: ["Poland", "Russia", "Italy", "Australia"],
    answer: "Russia",
    id: "deq9s",
  },
  {
    question: "How many times has Portugal won the Eurovision Song Contest?",
    choices: ["2", "1", "3", "0"],
    answer: "1",
    id: "t9rrt",
  },
  {
    question:
      "What is the name of the Cypriot entry in the 2018 Eurovision Song Contest?",
    choices: ["Fuego", "Gravity", "Oniro Mou", "La La Love"],
    answer: "Fuego",
    id: "qhyl2",
  },
  {
    question: "Who finished fifth in the 2019 Eurovision Song Contest?",
    choices: ["Spain", "Italy", "France", "Switzerland"],
    answer: "Switzerland",
    id: "wobur",
  },
  {
    question:
      "What is the name of the winner of the 2017 Eurovision Song Contest?",
    choices: [
      "Amar Pelos Dois",
      "Beautiful Mess",
      "Grab the Moment",
      "Never Give Up on You",
    ],
    answer: "Amar Pelos Dois",
    id: "rm17p",
  },
  {
    question: "How many times has Finland won the Eurovision Song Contest?",
    choices: ["1", "0", "2", "3"],
    answer: "1",
    id: "ojcii",
  },
  {
    question: "Who represented Germany in the 2015 Eurovision Song Contest?",
    choices: ["Ann Sophie", "Levina", "Jamie-Lee Kriewitz", "Elaiza"],
    answer: "Ann Sophie",
    id: "ag26b",
  },
  {
    question:
      "What is the name of the winner of the 2013 Eurovision Song Contest?",
    choices: ["Only Teardrops", "Waterfall", "Glorious", "Birds"],
    answer: "Only Teardrops",
    id: "k34ga",
  },
  {
    question: "Which city hosted the 2011 Eurovision Song Contest?",
    choices: ["Düsseldorf", "Baku", "Stockholm", "Oslo"],
    answer: "Düsseldorf",
    id: "dmxdb",
  },
  {
    question:
      "Who represented the Netherlands in the 2019 Eurovision Song Contest?",
    choices: [
      "Duncan Laurence",
      "Waylon",
      "Ilse DeLange",
      "Trijntje Oosterhuis",
    ],
    answer: "Duncan Laurence",
    id: "q4kqq",
  },
  {
    question:
      "What is the name of the Albanian entry in the 2018 Eurovision Song Contest?",
    choices: ["Mall", "World", "Fairytale", "Shaj"],
    answer: "Mall",
    id: "s72wl",
  },
  {
    question: "Who finished last in the 2016 Eurovision Song Contest?",
    choices: ["Czech Republic", "Germany", "Austria", "Switzerland"],
    answer: "Czech Republic",
    id: "jscag",
  },
  {
    question: "How many times has Denmark won the Eurovision Song Contest?",
    choices: ["3", "2", "1", "4"],
    answer: "3",
    id: "a3rwj",
  },
  {
    question:
      "What is the name of the Icelandic entry in the 2019 Eurovision Song Contest?",
    choices: ["Hatrið mun sigra", "Our Choice", "Never Forget", "Paper"],
    answer: "Hatrið mun sigra",
    id: "7kfgm",
  },
  {
    question: "Who represented Russia in the 2016 Eurovision Song Contest?",
    choices: [
      "Sergey Lazarev",
      "Polina Gagarina",
      "nAlexey Vorobyov",
      "Dima Bilan",
    ],
    answer: "Sergey Lazarev",
    id: "lop15",
  },
  {
    question:
      "What is the name of the Maltese entry in the 2018 Eurovision Song Contest?",
    choices: ["Taboo", "Breathlessly", "My Story", "The Beginning"],
    answer: "Taboo",
    id: "zd7iy",
  },
  {
    question: "Who finished third in the 2018 Eurovision Song Contest?",
    choices: ["Italy", "France", "Germany", "Austria"],
    answer: "Italy",
    id: "x5apz",
  },
  {
    question: "How many times has Ireland won the Eurovision Song Contest?",
    choices: ["7", "6", "5", "4"],
    answer: "7",
    id: "gpxvy",
  },
  {
    question:
      "What is the name of the Greek entry in the 2018 Eurovision Song Contest?",
    choices: ["Oníra mátia", "This Is Love", "Utopian Land", "Alcohol Is Free"],
    answer: "Oníra mátia",
    id: "snhsf",
  },
  {
    question: "Who represented Australia in the 2017 Eurovision Song Contest?",
    choices: ["Isaiah Firebrace", "Dami Im", "Guy Sebastian", "Jessica Mauboy"],
    answer: "Isaiah Firebrace",
    id: "d2zc8",
  },
  {
    question:
      "What is the name of the Azerbaijani entry in the 2018 Eurovision Song Contest?",
    choices: [
      "X My Heart",
      "When the Music Dies",
      "Running Scared",
      "Start a Fire",
    ],
    answer: "X My Heart",
    id: "wtsfr",
  },
  {
    question: "Who finished fourth in the 2015 Eurovision Song Contest?",
    choices: ["Belgium", "Australia", "Italy", "France"],
    answer: "Belgium",
    id: "vbjvg",
  },
  {
    question: "How many times has Sweden won the Eurovision Song Contest?",
    choices: ["6", "5", "4", "7"],
    answer: "6",
    id: "hykmk",
  },
  {
    question:
      "What is the name of the Czech entry in the 2018 Eurovision Song Contest?",
    choices: ["Lie to Me", "Hope Never Dies", "I Stand", "Fairytale"],
    answer: "Lie to Me",
    id: "betxi",
  },
  {
    question: "Who represented Bulgaria in the 2017 Eurovision Song Contest?",
    choices: [
      "Kristian Kostov",
      "Poli Genova",
      "Equinox",
      "Victoria Georgieva",
    ],
    answer: "Kristian Kostov",
    id: "ic6cx",
  },
  {
    question:
      "What is the name of the Slovenian entry in the 2018 Eurovision Song Contest?",
    choices: ["Hvala, ne!", "On My Way", "Here for You", "Blue and Red"],
    answer: "Hvala, ne!",
    id: "nwjo6",
  },
  {
    question: "Who finished second in the 2018 Eurovision Song Contest?",
    choices: ["Cyprus", "Israel", "Austria", "Germany"],
    answer: "Cyprus",
    id: "combj",
  },
  {
    question: "How many times has Switzerland won the Eurovision Song Contest?",
    choices: ["2", "1", "3", "0"],
    answer: "2",
    id: "affqj",
  },
  {
    question:
      "What is the name of the Israeli entry in the 2018 Eurovision Song Contest?",
    choices: ["Toy", "Golden Boy", "Made of Stars", "Milim"],
    answer: "Toy",
    id: "5pgzs",
  },
  {
    question: "Who represented Austria in the 2016 Eurovision Song Contest?",
    choices: ["Zoë", "Conchita Wurst", "Nathanael", "Cesár Sampson"],
    answer: "Zoë",
    id: "pb7lw",
  },
  {
    question:
      "What is the name of the Belarusian entry in the 2017 Eurovision Song Contest?",
    choices: ["Historyja majho žyccia", "Solovy", "Time", "Story of My Life"],
    answer: "Story of My Life",
    id: "fdxrw",
  },
  {
    question: "Who finished fourth in the 2018 Eurovision Song Contest?",
    choices: ["Germany", "Austria", "France", "Lithuania"],
    answer: "Germany",
    id: "at8c9",
  },
  {
    question:
      "How many times has the United Kingdom won the Eurovision Song Contest?",
    choices: ["5", "6", "4", "3"],
    answer: "5",
    id: "2xiav",
  },
  {
    question:
      "What is the name of the Croatian entry in the 2018 Eurovision Song Contest?",
    choices: ["Crazy", "Lighthouse", "My Friend", "Falter"],
    answer: "Falter",
    id: "i05cz",
  },
  {
    question: "Who represented San Marino in the 2019 Eurovision Song Contest?",
    choices: [
      "Serhat",
      "Valentina Monetta",
      "Michele Perniola",
      "Anita Simoncini",
    ],
    answer: "Serhat",
    id: "8qeki",
  },
  {
    question:
      "What is the name of the Hungarian entry in the 2018 Eurovision Song Contest?",
    choices: ["Viszlát nyár", "Jázmin", "Unstoppable", "Wars for Nothing"],
    answer: "Viszlát nyár",
    id: "c0zja",
  },
  {
    question: "Who finished fifth in the 2017 Eurovision Song Contest?",
    choices: ["Bulgaria", "Romania", "France", "Italy"],
    answer: "Bulgaria",
    id: "e2eqg",
  },
  {
    question:
      "How many times has the Netherlands won the Eurovision Song Contest?",
    choices: ["5", "4", "3", "2"],
    answer: "5",
    id: "6vr2q",
  },
  {
    question:
      "What is the name of the Polish entry in the 2018 Eurovision Song Contest?",
    choices: [
      "Light Me Up",
      "In the Light",
      "Flashlight",
      "Colour of Your Life",
    ],
    answer: "Light Me Up",
    id: "2bq48",
  },
  {
    question: "Who represented Slovenia in the 2019 Eurovision Song Contest?",
    choices: [
      "Zala Kralj & Gašper Šantl",
      "Lea Sirk",
      "Omar Naber",
      "ManuElla",
    ],
    answer: "Zala Kralj & Gašper Šantl",
    id: "ylyc7",
  },
  {
    question:
      "What is the name of the Estonian entry in the 2019 Eurovision Song Contest?",
    choices: ["Storm", "Play", "Goodbye to Yesterday", "Verona"],
    answer: "Storm",
    id: "2s1v8",
  },
  {
    question: "Who finished sixth in the 2016 Eurovision Song Contest?",
    choices: ["Ukraine", "Sweden", "France", "Spain"],
    answer: "Ukraine",
    id: "sadc7",
  },
  {
    question: "How many times has Belgium won the Eurovision Song Contest?",
    choices: ["1", "2", "3", "0"],
    answer: "1",
    id: "ddjye",
  },
  {
    question:
      "What is the name of the Montenegrin entry in the 2018 Eurovision Song Contest?",
    choices: ["Inje", "Heaven", "Just Get Out of My Life", "Adio"],
    answer: "Inje",
    id: "xhqgj",
  },
  {
    question: "Who represented Albania in the 2019 Eurovision Song Contest?",
    choices: [
      "Jonida Maliqi",
      "Eugent Bushpepa",
      "Eneda Tarifa",
      "Rona Nishliu",
    ],
    answer: "Jonida Maliqi",
    id: "6yw51",
  },
  {
    question:
      "What is the name of the Georgian entry in the 2018 Eurovision Song Contest?",
    choices: [
      "For You",
      "Shine",
      "Three Minutes to Earth",
      "I Don't Wanna Fight",
    ],
    answer: "For You",
    id: "ovswy",
  },
  {
    question: "Who finished seventh in the 2017 Eurovision Song Contest?",
    choices: ["Armenia", "Azerbaijan", "Romania", "Moldova"],
    answer: "Armenia",
    id: "scnia",
  },
  {
    question: "How many times has Spain won the Eurovision Song Contest?",
    choices: ["2", "3", "1", "4"],
    answer: "2",
    id: "yv2ha",
  },
  {
    question:
      "What is the name of the Macedonian entry in the 2018 Eurovision Song Contest?",
    choices: ["Lost and Found", "Dance Alone", "To the Sky", "Crno i belo"],
    answer: "Lost and Found",
    id: "5n3jo",
  },
  {
    question: "Who represented Cyprus in the 2017 Eurovision Song Contest?",
    choices: ["Hovig", "Minus One", "John Karayiannis", "Eleni Foureira"],
    answer: "Hovig",
    id: "tc5nf",
  },
  {
    question:
      "What is the name of the Danish entry in the 2018 Eurovision Song Contest?",
    choices: [
      "Higher Ground",
      "Soldiers of Love",
      "Should've Known Better",
      "Never Alone",
    ],
    answer: "Higher Ground",
    id: "x1j66",
  },
  {
    question: "Who finished eighth in the 2018 Eurovision Song Contest?",
    choices: ["Lithuania", "Moldova", "Greece", "Czech Republic"],
    answer: "Lithuania",
    id: "7isn1",
  },
  {
    question: "How many times has Italy won the Eurovision Song Contest?",
    choices: ["3", "2", "1", "4"],
    answer: "2",
    id: "6d09x",
  },
  {
    question:
      "What is the name of the Ukrainian entry in the 2018 Eurovision Song Contest?",
    choices: ["Under the Ladder", "1944", " Titanium", "Time"],
    answer: "Under the Ladder",
    id: "k3kd6",
  },
  {
    question: "Who represented Armenia in the 2017 Eurovision Song Contest?",
    choices: ["Artsvik", "Iveta Mukuchyan", "Dorians", "Genealogy"],
    answer: "Artsvik",
    id: "0nzf6",
  },
  {
    question:
      "What is the name of the Latvian entry in the 2018 Eurovision Song Contest?",
    choices: ["Funny Girl", "Cake to Bake", "Line", "Beautiful Song"],
    answer: "Funny Girl",
    id: "68qc0",
  },
  {
    question: "Who finished ninth in the 2016 Eurovision Song Contest?",
    choices: ["Belgium", "Israel", "Sweden", "Austria"],
    answer: "Belgium",
    id: "oxm1s",
  },
  {
    question: "How many times has France won the Eurovision Song Contest?",
    choices: ["5", "6", "4", "3"],
    answer: "5",
    id: "iv00q",
  },
  {
    question:
      "What is the name of the Finnish entry in the 2018 Eurovision Song Contest?",
    choices: ["Monsters", "Sing It Away", "Aina mun pitää", "Lipstick"],
    answer: "Monsters",
    id: "0ojy4",
  },
  {
    question: "Who represented Russia in the 2017 Eurovision Song Contest?",
    choices: [
      "Yuliya Samoylova",
      "Sergey Lazarev",
      "Polina Gagarina",
      "Buranovskiye Babushki",
    ],
    answer: "Yuliya Samoylova",
    id: "448oe",
  },
  {
    question:
      "What is the name of the Moldovan entry in the 2018 Eurovision Song Contest?",
    choices: ["My Lucky Day", "Falling Stars", "Hey, Mamma!", "Loco Loco"],
    answer: "My Lucky Day",
    id: "i3ktj",
  },
  {
    question: "Who finished tenth in the 2019 Eurovision Song Contest?",
    choices: ["Russia", "France", "Italy", "Azerbaijan"],
    answer: "Russia",
    id: "yga5m",
  },
  {
    question: "How many times has Austria won the Eurovision Song Contest?",
    choices: ["2", "1", "3", "0"],
    answer: "2",
    id: "p5nlz",
  },
  {
    question:
      "What is the name of the Norwegian entry in the 2018 Eurovision Song Contest?",
    choices: [
      "That's How You Write a Song",
      "Grab the Moment",
      "Icebreaker",
      "Silent Storm",
    ],
    answer: "That's How You Write a Song",
    id: "bp50e",
  },
  {
    question: "Who represented Portugal in the 2018 Eurovision Song Contest?",
    choices: ["Cláudia Pascoal", "Salvador Sobral", "Suzy", "Conan Osíris"],
    answer: "Cláudia Pascoal",
    id: "g6n6k",
  },
  {
    question:
      "What is the name of the Romanian entry in the 2018 Eurovision Song Contest?",
    choices: ["Goodbye", "Yodel It!", "Miracle", "De la capăt"],
    answer: "Goodbye",
    id: "ypujp",
  },
  {
    question: "Who finished eleventh in the 2017 Eurovision Song Contest?",
    choices: ["Denmark", "Austria", "Israel", "Cyprus"],
    answer: "Denmark",
    id: "bc44i",
  },
  {
    question:
      "What is the name of the Serbian entry in the 2018 Eurovision Song Contest?",
    choices: [" Nova deca", "In Too Deep", "Lane moje", "Ovo je Balkan"],
    answer: "Nova deca",
    id: "xvd48",
  },
  {
    question: "Which country hosted the Eurovision Song Contest in 1997?",
    choices: ["Ireland", "United Kingdom", "France", "Germany"],
    answer: "Ireland",
    id: "chj7w",
  },
  {
    question: "Who represented Turkey in the 2012 Eurovision Song Contest?",
    choices: [
      "Can Bonomo",
      "roman Lob",
      "Engelbert Humperdinck",
      "Buranovskiye Babushki",
    ],
    answer: "Can Bonomo",
    id: "8zo8u",
  },
  {
    question:
      "What is the name of the winner of the 1991 Eurovision Song Contest?",
    choices: ["Sandra Kim", "Niamh Kavanagh", "Carola", "Linda Martin"],
    answer: "Carola",
    id: "8uf3i",
  },
  {
    question: "How many times has Greece won the Eurovision Song Contest?",
    choices: ["One", "Two", "Three", "None"],
    answer: "One",
    id: "czxjn",
  },
  {
    question: "Who represented Israel in the 2018 Eurovision Song Contest?",
    choices: ["Netta Barzilai", "Eleni Foureira", "SuRie", "Mikolas Josef"],
    answer: "Netta Barzilai",
    id: "uohre",
  },
  {
    question:
      "What is the name of the Spanish entry in the 2017 Eurovision Song Contest?",
    choices: [
      "Occidentali's Karma",
      "Amar Pelos Dois",
      "Requiem",
      "Do It for Your Lover",
    ],
    answer: "Do It for Your Lover",
    id: "9ck43",
  },
  {
    question: "Which city hosted the 2003 Eurovision Song Contest?",
    choices: ["Latvia", "Estonia", "Lithuania", "Riga"],
    answer: "Riga",
    id: "dqnug",
  },
  {
    question: "Who finished last in the 2017 Eurovision Song Contest?",
    choices: ["Germany", "Spain", "United Kingdom", "Austria"],
    answer: "Germany",
    id: "wl57z",
  },
  {
    question:
      "What is the name of the French entry in the 2018 Eurovision Song Contest?",
    choices: ["Mall", "Merkel", "Mercy", "Together"],
    answer: "Mercy",
    id: "jchyw",
  },
  {
    question: "How many times has Turkey won the Eurovision Song Contest?",
    choices: ["One", "Two", "Three", "None"],
    answer: "One",
    id: "v7yuv",
  },
  {
    question: "Who represented Croatia in the 2017 Eurovision Song Contest?",
    choices: ["Jacques Houdek", "O.Torvald", "Norma John", "Imri Ziv"],
    answer: "Jacques Houdek",
    id: "6r5yq",
  },
  {
    question:
      "What is the name of the Slovenian winner of the Eurovision Song Contest?",
    choices: ["None", "Carola", "Charlotte Nilsson", "Francesca"],
    answer: "Francesca",
    id: "t93ke",
  },
  {
    question: "Which country won the Eurovision Song Contest in 1969?",
    choices: ["Spain", "France", "Netherlands", "United Kingdom"],
    answer: "Spain",
    id: "z0w7i",
  },
  {
    question: "Who represented Austria in the 2017 Eurovision Song Contest?",
    choices: ["Nathan Trent", "Blanche", "Ilinca ft. Alex Florea", "DiHaj"],
    answer: "Nathan Trent",
    id: "y1o9d",
  },
  {
    question:
      "What is the name of the winner of the 1982 Eurovision Song Contest?",
    choices: [
      "Nicole",
      "Corinne Hermès",
      "Richard Herrey and Per Gessle",
      "Bucks Fizz",
    ],
    answer: "Nicole",
    id: "c2gwy",
  },
  {
    question: "How many times has Bulgaria won the Eurovision Song Contest?",
    choices: ["Zero", "One", "Two", "Three"],
    answer: "Zero",
    id: "u79jr",
  },
  {
    question: "Who represented Lithuania in the 2018 Eurovision Song Contest?",
    choices: ["Ieva Zasimauskaitė", "Eleni Foureira", "SuRie", "Mikolas Josef"],
    answer: "Ieva Zasimauskaitė",
    id: "mc6dp",
  },
  {
    question:
      "What is the name of the winner of the 2014 Eurovision Song Contest?",
    choices: ["AramMp3", "Calm After the Storm", "Rise Like a Phoenix", "Undo"],
    answer: "Rise Like a Phoenix",
    id: "5c555",
  },
  {
    question: "Which city hosted the 1987 Eurovision Song Contest?",
    choices: ["Brussels", "Dublin", "Zagreb", "Berna"],
    answer: "Brussels",
    id: "6jwoc",
  },
  {
    question: "Who finished fifth in the 2016 Eurovision Song Contest?",
    choices: ["Australia", "Ireland", "Sweden", "Russia"],
    answer: "Russia",
    id: "2ls2i",
  },
  {
    question:
      "What is the name of the Israeli entry in the 2017 Eurovision Song Contest?",
    choices: ["Paper", "Requiem", "I Never Give Up", "Beautiful Mess"],
    answer: "I Never Give Up",
    id: "7uxr6",
  },
  {
    question: "Who represented Estonia in the 2017 Eurovision Song Contest?",
    choices: ["Koit Toome and Laura", "Artsvik", "Blanche", "Triana Park"],
    answer: "Koit Toome and Laura",
    id: "pjx36",
  },
  {
    question:
      "What is the name of the winner of the 1984 Eurovision Song Contest?",
    choices: [
      "La det swinge",
      "Diggi-Loo Diggi-Ley",
      "Hard Rock Hallelujah",
      "J'aime la vie",
    ],
    answer: "Diggi-Loo Diggi-Ley",
    id: "x0dlr",
  },
  {
    question: "Which city hosted the 2013 Eurovision Song Contest?",
    choices: ["Malmö", "Stockholm", "Gothenburg", "Helsinki"],
    answer: "Malmö",
    id: "cubbs",
  },
  {
    question: "Who finished last in the 2019 Eurovision Song Contest?",
    choices: ["United Kingdom", "Germany", "Israel", "France"],
    answer: "United Kingdom",
    id: "ggvnd",
  },
  {
    question:
      "What is the name of the Dutch entry in the 2017 Eurovision Song Contest?",
    choices: ["Lights and Shadows", "Gravity", "Space", "Lights & Sounds"],
    answer: "Lights and Shadows",
    id: "m6ac0",
  },
  {
    question: "How many times has Norway won the Eurovision Song Contest?",
    choices: ["Two", "Three", "Four", "None"],
    answer: "Three",
    id: "qyrpg",
  },
  {
    question: "Who represented Serbia in the 2018 Eurovision Song Contest?",
    choices: [
      "Sanja Ilić and Balkanika",
      "Eleni Foureira",
      "SuRie",
      "Mikolas Josef",
    ],
    answer: "Sanja Ilić and Balkanika",
    id: "1w28q",
  },
  {
    question:
      "What is the name of the winner of the 2001 Eurovision Song Contest?",
    choices: [
      "I Wanna",
      "Everybody",
      "Fly on the Wings of Love",
      "My Number One",
    ],
    answer: "Everybody",
    id: "28qxd",
  },
  {
    question: "Which city hosted the 2018 Eurovision Song Contest?",
    choices: ["Lisbon", "Porto", "Faro", "Braga"],
    answer: "Lisbon",
    id: "scqdl",
  },
  {
    question: "Who finished tenth in the 2017 Eurovision Song Contest?",
    choices: ["Denmark", "Austria", "United Kingdom", "France"],
    answer: "Denmark",
    id: "ptqnp",
  },
  {
    question:
      "What is the name of the winner of the 1996 Eurovision Song Contest?",
    choices: [
      "The Voice",
      "Ooh Aah... Just a Little Bit",
      "Shine",
      "Wonderful",
    ],
    answer: "The Voice",
    id: "6t2b2",
  },
  {
    question: "Who represented Latvia in the 2017 Eurovision Song Contest?",
    choices: ["Triana Park", "Agnete", "Justs", "Laura"],
    answer: "Triana Park",
    id: "87wbv",
  },
  {
    question: "Which city hosted the 2004 Eurovision Song Contest?",
    choices: ["Istanbul", "Ankara", "Izmir", "Antalya"],
    answer: "Istanbul",
    id: "yj5q5",
  },
  {
    question: "Who finished second in the 2017 Eurovision Song Contest?",
    choices: ["Australia", "Russia", "Bulgaria", "Portugal"],
    answer: "Russia",
    id: "h3v4d",
  },
  {
    question:
      "What is the name of the winner of the 1987 Eurovision Song Contest?",
    choices: [
      "Hold Me Now",
      "Gente di mare",
      "Nur ein Lied",
      "Fångad av en stormvind",
    ],
    answer: "Hold Me Now",
    id: "w2ti4",
  },
  {
    question: "How many times has Israel won the Eurovision Song Contest?",
    choices: ["Three", "Four", "Five", "Six"],
    answer: "Four",
    id: "temh2",
  },
  {
    question: "Who represented Cyprus in the 2018 Eurovision Song Contest?",
    choices: ["Eleni Foureira", "Aisel", "Mikolas Josef", "Cesar Sampson"],
    answer: "Eleni Foureira",
    id: "mqfj8",
  },
  {
    question:
      "What is the name of the winner of the 1992 Eurovision Song Contest?",
    choices: [
      "Why Me?",
      "Fångad av en stormvind",
      "Rapariga do mar",
      "Wijs me de weg",
    ],
    answer: "Why Me?",
    id: "5lggq",
  },
  {
    question: "Which city hosted the 2019 Eurovision Song Contest?",
    choices: ["Tel Aviv", "Jerusalem", "Haifa", "Eilat"],
    answer: "Tel Aviv",
    id: "6xb96",
  },
  {
    question: "Who represented Germany in the 2018 Eurovision Song Contest?",
    choices: ["Michael Schulte", "SuRie", "Mikolas Josef", "Eleni Foureira"],
    answer: "Michael Schulte",
    id: "mzp80",
  },
  {
    question:
      "What is the name of the winner of the 1993 Eurovision Song Contest?",
    choices: [
      "In Your Eyes",
      "Better the Devil You Know",
      "Mystery",
      "Lane moje",
    ],
    answer: "In Your Eyes",
    id: "gmbf5",
  },
  {
    question: "Which city hosted the 2015 Eurovision Song Contest?",
    choices: ["Vienna", "Graz", "Salzburg", "Innsbruck"],
    answer: "Vienna",
    id: "3ect3",
  },
  {
    question: "Who finished ninth in the 2018 Eurovision Song Contest?",
    choices: ["Lithuania", "Austria", "Sweden", "France"],
    answer: "Sweden",
    id: "4086w",
  },
  {
    question: "Who represented Poland in the 2018 Eurovision Song Contest?",
    choices: [
      "Gromee feat. Lukas Meijer",
      "Eleni Foureira",
      "SuRie",
      "Mikolas Josef",
    ],
    answer: "Gromee feat. Lukas Meijer",
    id: "fgier",
  },
  {
    question:
      "What is the name of the winner of the 1995 Eurovision Song Contest?",
    choices: ["Nocturne", "The Voice", "Just a Dream", "Niamh Kavanagh"],
    answer: "Nocturne",
    id: "9wibr",
  },
  {
    question: "Which city hosted the 2016 Eurovision Song Contest?",
    choices: ["Stockholm", "Gothenburg", "Malmö", "Stockholm"],
    answer: "Stockholm",
    id: "lone8",
  },
  {
    question: "Who finished seventh in the 2019 Eurovision Song Contest?",
    choices: ["North Macedonia", "Italy", "Russia", "Azerbaijan"],
    answer: "North Macedonia",
    id: "xcr50",
  },
  {
    question:
      "What is the name of the Slovenian entry in the 2017 Eurovision Song Contest?",
    choices: ["On My Way", "Flame Is Burning", "Gravity", "Space"],
    answer: "On My Way",
    id: "mojox",
  },
  {
    question: "Who represented Malta in the 2018 Eurovision Song Contest?",
    choices: ["Christabelle", "Eleni Foureira", "SuRie", "Mikolas Josef"],
    answer: "Christabelle",
    id: "1glqy",
  },
  {
    question:
      "What is the name of the winner of the 1994 Eurovision Song Contest?",
    choices: [
      "Rock 'n' Roll Kids",
      "To nie ja!",
      "Wijs me de weg",
      "Liefde is een kaartspel",
    ],
    answer: "Rock 'n' Roll Kids",
    id: "61flj",
  },
  {
    question: "Which city hosted the 2014 Eurovision Song Contest?",
    choices: ["Copenhagen", "Aarhus", "Odense", "Aalborg"],
    answer: "Copenhagen",
    id: "7322n",
  },
  {
    question: "Who finished sixth in the 2018 Eurovision Song Contest?",
    choices: ["Lithuania", "Austria", "Norway", "Italy"],
    answer: "Italy",
    id: "byyz0",
  },
  {
    question: "Who represented Azerbaijan in the 2018 Eurovision Song Contest?",
    choices: ["Aisel", "Eleni Foureira", "SuRie", "Mikolas Josef"],
    answer: "Aisel",
    id: "pqfv6",
  },
  {
    question:
      "What is the name of the winner of the 1990 Eurovision Song Contest?",
    choices: [
      "Insieme: 1992",
      "Romeo",
      "Fångad av en stormvind",
      "Há sempre alguém",
    ],
    answer: "Insieme: 1992",
    id: "0z778",
  },
  {
    question: "Which city hosted the 2009 Eurovision Song Contest?",
    choices: ["Moscow", "Saint Petersburg", "Kazan", "Sochi"],
    answer: "Moscow",
    id: "qfuly",
  },
  {
    question: "Who represented Sweden in the 2018 Eurovision Song Contest?",
    choices: ["Benjamin Ingrosso", "Eleni Foureira", "SuRie", "Mikolas Josef"],
    answer: "Benjamin Ingrosso",
    id: "py16w",
  },
  {
    question:
      "Which country has won the Eurovision Song Contest the most number of times?",
    choices: ["Ireland", "Sweden", "France", "United Kingdom"],
    answer: "Ireland",
    id: "sxdhr",
  },
  {
    question:
      "In what year did ABBA win the Eurovision Song Contest for Sweden?",
    choices: ["1972", "1973", "1974", "1975"],
    answer: "1974",
    id: "m8quu",
  },
  {
    question: "Who was the winner of the Eurovision Song Contest 2019?",
    choices: ["Duncan Laurence", " Mahmood", " Sergey Lazarev", "John Lundvik"],
    answer: "Duncan Laurence",
    id: "9vb5z",
  },
  {
    question: "Which city hosted the Eurovision Song Contest 2016?",
    choices: ["Stockholm", "Copenhagen", "Malmö", "Gothenburg"],
    answer: "Stockholm",
    id: "kna6c",
  },
  {
    question:
      "Which country has participated in the Eurovision Song Contest the most number of times?",
    choices: ["United Kingdom", "France", "Germany", "Ireland"],
    answer: "United Kingdom",
    id: "omjfz",
  },
  {
    question:
      "Who represented the United Kingdom in the Eurovision Song Contest 2019?",
    choices: ["Michael Rice", "Mahmood", "Sergey Lazarev", "Duncan Laurence"],
    answer: "Michael Rice",
    id: "mpidi",
  },
  {
    question: "In what year did the Eurovision Song Contest first take place?",
    choices: ["1955", "1956", "1957", "1958"],
    answer: "1956",
    id: "otlh5",
  },
  {
    question: "Which country debuted in the Eurovision Song Contest in 2008?",
    choices: ["San Marino", "Azerbaijan", "Georgia", "Andorra"],
    answer: "Azerbaijan",
    id: "1l93w",
  },
  {
    question: "Who won the Eurovision Song Contest 2015?",
    choices: ["Måns Zelmerlöw", "Polina Gagarina", "Il Volo", "Loïc Nottet"],
    answer: "Måns Zelmerlöw",
    id: "9zpas",
  },
  {
    question: "In what city was the Eurovision Song Contest 2013 held?",
    choices: ["Malmö", "Stockholm", "Gothenburg", "Copenhagen"],
    answer: "Malmö",
    id: "bvrlh",
  },
  {
    question: "Which country has never won the Eurovision Song Contest?",
    choices: ["Portugal", "Netherlands", "Denmark", "Luxembourg"],
    answer: "Portugal",
    id: "xtrf7",
  },
  {
    question: "Who was the winner of the Eurovision Song Contest 2012?",
    choices: ["Loreen", "Buranovskiye Babushki", "Rona Nishliu", "Ott Lepland"],
    answer: "Loreen",
    id: "1b2qy",
  },
  {
    question:
      "In what year did Turkey last participate in the Eurovision Song Contest?",
    choices: ["2011", "2012", "2013", "2014"],
    answer: "2012",
    id: "3n1yq",
  },
  {
    question:
      "Which country has participated in the Eurovision Song Contest the least number of times?",
    choices: ["Andorra", "Monaco", "Luxembourg", "Morocco"],
    answer: "Morocco",
    id: "xrktm",
  },
  {
    question: "Who represented Russia in the Eurovision Song Contest 2019?",
    choices: ["Sergey Lazarev", "Dima Bilan", "Philipp Kirkorov", "Ani Lorak"],
    answer: "Sergey Lazarev",
    id: "f7agp",
  },
  {
    question: "In what country was the Eurovision Song Contest 2005 held?",
    choices: ["Ukraine", "Russia", "Poland", "Austria"],
    answer: "Ukraine",
    id: "p9isi",
  },
  {
    question: "Which country won the Eurovision Song Contest 2007?",
    choices: ["Serbia", "Ukraine", "Russia", "Finland"],
    answer: "Serbia",
    id: "zm8ew",
  },
  {
    question: "Who won the Eurovision Song Contest 2018?",
    choices: [
      "Netta Barzilai",
      "Eleni Foureira",
      "Mikolas Josef",
      "Cesár Sampson",
    ],
    answer: "Netta Barzilai",
    id: "hobgk",
  },
  {
    question: "In what year did Austria last win the Eurovision Song Contest?",
    choices: ["1966", "1976", "2014", "2015"],
    answer: "2014",
    id: "5hy29",
  },
  {
    question:
      "Which country has participated in the Eurovision Song Contest the most consecutive years?",
    choices: ["United Kingdom", "France", "Germany", "Ireland"],
    answer: "United Kingdom",
    id: "g7ym8",
  },
  {
    question: "Who represented Azerbaijan in the Eurovision Song Contest 2019?",
    choices: ["Chingiz", "Tulia", "Mahmood", "Sergey Lazarev"],
    answer: "Chingiz",
    id: "5vmzn",
  },
  {
    question: "In what city was the Eurovision Song Contest 2014 held?",
    choices: ["Copenhagen", "Stockholm", "Malmö", "Helsinki"],
    answer: "Copenhagen",
    id: "l3yt0",
  },
  {
    question: "Which country won the Eurovision Song Contest 2009?",
    choices: ["Norway", "Russia", "Ukraine", "Iceland"],
    answer: "Norway",
    id: "6ohcf",
  },
  {
    question: "Who was the winner of the Eurovision Song Contest 2016?",
    choices: ["Jamala", "Dami Im", "Sergey Lazarev", "Francesca Michielin"],
    answer: "Jamala",
    id: "fycni",
  },
  {
    question: "In what year did Portugal last win the Eurovision Song Contest?",
    choices: ["1966", "1976", "2017", "2018"],
    answer: "2017",
    id: "x2fc7",
  },
  {
    question:
      "Which country has participated in the Eurovision Song Contest the most times without a win?",
    choices: ["Portugal", "Cyprus", "Iceland", "Malta"],
    answer: "Portugal",
    id: "6fege",
  },
  {
    question: "Who represented Germany in the Eurovision Song Contest 2019?",
    choices: ["S!sters", "Michael Rice", "Mahmood", "Duncan Laurence"],
    answer: "S!sters",
    id: "ais7z",
  },
  {
    question:
      "In what year did the Eurovision Song Contest first introduce semi-finals?",
    choices: ["2004", "2005", "2006", "2007"],
    answer: "2004",
    id: "vchtw",
  },
  {
    question: "Which country won the Eurovision Song Contest 2014?",
    choices: ["Austria", "Netherlands", "Sweden", "Hungary"],
    answer: "Austria",
    id: "r2xnk",
  },
  {
    question: "Who was the winner of the Eurovision Song Contest 2017?",
    choices: [
      "Salvador Sobral",
      "Kristian Kostov",
      "Blind Channel",
      "Imri Ziv",
    ],
    answer: "Salvador Sobral",
    id: "a9ic6",
  },
  {
    question: "In what city was the Eurovision Song Contest 2019 held?",
    choices: ["Tel Aviv", "Jerusalem", "Haifa", "Eilat"],
    answer: "Tel Aviv",
    id: "i3qk9",
  },
  {
    question:
      "Which country has never participated in the Eurovision Song Contest?",
    choices: ["Liechtenstein", "Monaco", "Andorra", "Tunisia"],
    answer: "Tunisia",
    id: "dqmzc",
  },
  {
    question: "Who represented Sweden in the Eurovision Song Contest 2019?",
    choices: ["John Lundvik", "Mahmood", "Duncan Laurence", "Michael Rice"],
    answer: "John Lundvik",
    id: "1i7l0",
  },
  {
    question: "In what year did Norway last win the Eurovision Song Contest?",
    choices: ["2009", "2010", "2011", "2012"],
    answer: "2009",
    id: "uqu18",
  },
  {
    question: "Which country won the Eurovision Song Contest 2006?",
    choices: ["Finland", "Sweden", "Norway", "Russia"],
    answer: "Finland",
    id: "2gkpt",
  },
  {
    question: "Who was the winner of the Eurovision Song Contest 2011?",
    choices: ["Azerbaijan", "Italy", "Sweden", "Germany"],
    answer: "Azerbaijan",
    id: "o4ra5",
  },
  {
    question: "In what city was the Eurovision Song Contest 2001 held?",
    choices: ["Stockholm", "Copenhagen", "Parken Stadium", "Globen"],
    answer: "Parken Stadium",
    id: "o7y25",
  },
  {
    question:
      "Which country has participated in the Eurovision Song Contest the most times with the same singer?",
    choices: ["Ireland", "United Kingdom", "Sweden", "Germany"],
    answer: "Ireland",
    id: "0mhfg",
  },
  {
    question: "Who represented Cyprus in the Eurovision Song Contest 2019?",
    choices: ["Tamta", "Eleni Foureira", "Tulia", "Chingiz"],
    answer: "Tamta",
    id: "6xmh0",
  },
  {
    question:
      "In what year did the Eurovision Song Contest introduce the 50/50 jury-televoting system?",
    choices: ["2009", "2010", "2011", "2012"],
    answer: "2009",
    id: "qm60v",
  },
  {
    question: "Which country won the Eurovision Song Contest 2000?",
    choices: ["Denmark", "Sweden", "Russia", "Olsen Brothers"],
    answer: "Denmark",
    id: "exd3u",
  },
  {
    question: "Who was the winner of the Eurovision Song Contest 2010?",
    choices: ["Lena", "Didrik Solli-Tangen", "Safura", "Giorgos Alkaios"],
    answer: "Lena",
    id: "yo4yv",
  },
  {
    question: "In what city was the Eurovision Song Contest 2015 held?",
    choices: ["Vienna", "Graz", "Innsbruck", "Salzburg"],
    answer: "Vienna",
    id: "8mgwj",
  },
  {
    question:
      "Which country has never qualified for the Eurovision Song Contest final?",
    choices: ["Montenegro", "Andorra", "Monaco", "Luxembourg"],
    answer: "Andorra",
    id: "nurdy",
  },
  {
    question: "Who represented France in the Eurovision Song Contest 2019?",
    choices: ["Bilal Hassani", "Mahmood", "Duncan Laurence", "S!sters"],
    answer: "Bilal Hassani",
    id: "45dy9",
  },
  {
    question:
      "In what year did the Eurovision Song Contest first introduce the 'Big Five' rule?",
    choices: ["1999", "2000", "2001", "2004"],
    answer: "1999",
    id: "9ye79",
  },
  {
    question: "Which country won the Eurovision Song Contest 2002?",
    choices: ["Latvia", "Malta", "Cyprus", "Sweden"],
    answer: "Latvia",
    id: "t9ntv",
  },
  {
    question: "Who was the winner of the Eurovision Song Contest 2003?",
    choices: ["Sertab Erener", "Olsen Brothers", "Helena Paparizou", "Ruslana"],
    answer: "Sertab Erener",
    id: "mjrjt",
  },
  {
    question: "In what city was the Eurovision Song Contest 2003 held?",
    choices: ["Riga", "Latvia", "Tallinn", "Vilnius"],
    answer: "Riga",
    id: "u75oj",
  },
  {
    question:
      "Which country has participated in the Eurovision Song Contest the most times without being in the top 5?",
    choices: ["Iceland", "Cyprus", "Malta", "Portugal"],
    answer: "Iceland",
    id: "xj42e",
  },
  {
    question: "Who represented Italy in the Eurovision Song Contest 2019?",
    choices: ["Mahmood", "Duncan Laurence", "John Lundvik", "Tulia"],
    answer: "Mahmood",
    id: "aq4y4",
  },
  {
    question:
      "In what year did the Eurovision Song Contest first introduce the 'televoting' system?",
    choices: ["1997", "1998", "1999", "2000"],
    answer: "1997",
    id: "v6suj",
  },
  {
    question: "Which country won the Eurovision Song Contest 2001?",
    choices: ["Estonia", "Denmark", "Sweden", "Norway"],
    answer: "Estonia",
    id: "q5ip2",
  },
  {
    question: "Who was the winner of the Eurovision Song Contest 2004?",
    choices: ["Ruslana", "Helena Paparizou", "Martin Vučić", "Ivan Mikulić"],
    answer: "Ruslana",
    id: "zvg3n",
  },
  {
    question: "In what city was the Eurovision Song Contest 2004 held?",
    choices: ["Istanbul", "Ankara", "Izmir", "Bursa"],
    answer: "Istanbul",
    id: "plw4q",
  },
  {
    question: "Which country has never hosted the Eurovision Song Contest?",
    choices: ["Luxembourg", "Monaco", "Andorra", "Liechtenstein"],
    answer: "Liechtenstein",
    id: "i7r5h",
  },
  {
    question: "Who represented Spain in the Eurovision Song Contest 2019?",
    choices: ["Miki", "Mahmood", "Duncan Laurence", "John Lundvik"],
    answer: "Miki",
    id: "07mls",
  },
  {
    question:
      "In what year did the Eurovision Song Contest first introduce the 'semi-final' system?",
    choices: ["2004", "2005", "2006", "2007"],
    answer: "2004",
    id: "vr2jc",
  },
  {
    question: "Which country won the Eurovision Song Contest 2008?",
    choices: ["Russia", "Ukraine", "Greece", "Norway"],
    answer: "Russia",
    id: "dahay",
  },
  {
    question: "Who was the winner of the Eurovision Song Contest 2005?",
    choices: [
      "Helena Paparizou",
      "Martin Vučić",
      "Ivan Mikulić",
      "Waldo's People",
    ],
    answer: "Helena Paparizou",
    id: "be8em",
  },
  {
    question: "In what city was the Eurovision Song Contest 2005 held?",
    choices: ["Kyiv", "Lviv", "Donetsk", "Kharkiv"],
    answer: "Kyiv",
    id: "z0mta",
  },
  {
    question:
      "Which country has participated in the Eurovision Song Contest the most times with the same language?",
    choices: ["France", "Germany", "Italy", "Spain"],
    answer: "France",
    id: "uikxi",
  },
  {
    question: "Who represented Australia in the Eurovision Song Contest 2019?",
    choices: [
      "Kate Miller-Heidke",
      "Mahmood",
      "Duncan Laurence",
      "John Lundvik",
    ],
    answer: "Kate Miller-Heidke",
    id: "ubcff",
  },
  {
    question:
      "In what year did the Eurovision Song Contest first introduce the 'jury voting' system?",
    choices: ["2009", "2010", "2011", "2012"],
    answer: "2009",
    id: "knp9e",
  },
  {
    question: "Which country won the Eurovision Song Contest 2013?",
    choices: ["Denmark", "Azerbaijan", "Ukraine", "Norway"],
    answer: "Denmark",
    id: "gqzef",
  },
  {
    question: "Who was the winner of the Eurovision Song Contest 2006?",
    choices: ["Lordi", "Dima Bilan", "Helena Paparizou", "Carola"],
    answer: "Lordi",
    id: "uelwv",
  },
  {
    question: "In what city was the Eurovision Song Contest 2006 held?",
    choices: ["Athens", "Thessaloniki", "Piraeus", "Patras"],
    answer: "Athens",
    id: "l7jij",
  },
  {
    question:
      "Which country has participated in the Eurovision Song Contest the most times without winning?",
    choices: ["Portugal", "Cyprus", "Iceland", "Malta"],
    answer: "Portugal",
    id: "fx2q4",
  },
  {
    question:
      "In what year did the Eurovision Song Contest first introduce the 'automatic qualification' rule?",
    choices: ["1999", "2000", "2001", "2004"],
    answer: "1999",
    id: "q88tp",
  },
  {
    question: "Which country won the Eurovision Song Contest 2012?",
    choices: ["Loreen", "Buranovskiye Babushki", "Rona Nishliu", "Ott Lepland"],
    answer: "Loreen",
    id: "k8fsm",
  },
  {
    question: "Who was the winner of the Eurovision Song Contest 2007?",
    choices: [
      "Marija Šerifović",
      "Verka Serduchka",
      "Dima Bilan",
      "Sergey Lazarev",
    ],
    answer: "Marija Šerifović",
    id: "oxe68",
  },
  {
    question: "In what city was the Eurovision Song Contest 2007 held?",
    choices: ["Helsinki", "Espoo", "Vantaa", "Turku"],
    answer: "Helsinki",
    id: "rbdlf",
  },
  {
    question: "Who represented Israel in the Eurovision Song Contest 2019?",
    choices: ["Kobi Marimi", "Mahmood", "Duncan Laurence", "John Lundvik"],
    answer: "Kobi Marimi",
    id: "3eq8v",
  },
  {
    question:
      "In what year did the Eurovision Song Contest first introduce the 'video jury' system?",
    choices: ["2013", "2014", "2015", "2016"],
    answer: "2013",
    id: "tnlyk",
  },
  {
    question: "Which country won the Eurovision Song Contest 2005?",
    choices: [
      "Helena Paparizou",
      "Martin Vučić",
      "Ivan Mikulić",
      "Waldo's People",
    ],
    answer: "Helena Paparizou",
    id: "q75ap",
  },
  {
    question: "Who was the winner of the Eurovision Song Contest 2014?",
    choices: ["Conchita Wurst", "The Common Linnets", "Sanna Nielsen", "Basim"],
    answer: "Conchita Wurst",
    id: "6kcvc",
  },
  {
    question: "Who represented Greece in the Eurovision Song Contest 2019?",
    choices: ["Katerine Duska", "Mahmood", "Duncan Laurence", "John Lundvik"],
    answer: "Katerine Duska",
    id: "ka7fd",
  },
  {
    question:
      "In what year did the Eurovision Song Contest first introduce the 'online voting' system?",
    choices: ["2019", "2020", "2021", "2022"],
    answer: "2019",
    id: "nbg62",
  },
  {
    question: "Which country won the Eurovision Song Contest 2015?",
    choices: ["Måns Zelmerlöw", "Polina Gagarina", "Il Volo", "Loïc Nottet"],
    answer: "Måns Zelmerlöw",
    id: "ar7ea",
  },
  {
    question: "Who was the winner of the Eurovision Song Contest 2009?",
    choices: ["Alexander Rybak", "Patricia Kaas", "Inga and Anush", " Aydın"],
    answer: "Alexander Rybak",
    id: "midpe",
  },
  {
    question: "In what city was the Eurovision Song Contest 2009 held?",
    choices: ["Moscow", "Saint Petersburg", "Kazan", "Sochi"],
    answer: "Moscow",
    id: "dki8z",
  },
  {
    question:
      "In what year did the Eurovision Song Contest first introduce the 'jury-televoting' system?",
    choices: ["2003", "2004", "2005", "2006"],
    answer: "2003",
    id: "254gh",
  },
  {
    question: "Which country won the Eurovision Song Contest 2016?",
    choices: ["Jamala", "Dami Im", "Sergey Lazarev", "Francesca Michielin"],
    answer: "Jamala",
    id: "gapku",
  },
  {
    question: "Who was the winner of the Eurovision Song Contest 2008?",
    choices: ["Dima Bilan", "Ani Lorak", "Kalomira", "Sirusho"],
    answer: "Dima Bilan",
    id: "2maqi",
  },
  {
    question: "In what city was the Eurovision Song Contest 2008 held?",
    choices: ["Belgrade", "Novi Sad", "Nis", "Kragujevac"],
    answer: "Belgrade",
    id: "akaw4",
  },
  {
    question:
      "In what year did the Eurovision Song Contest first introduce the 'backing vocals' rule?",
    choices: ["1999", "2000", "2001", "2002"],
    answer: "1999",
    id: "yd6ny",
  },
  {
    question: "Which country won the Eurovision Song Contest 2017?",
    choices: [
      "Salvador Sobral",
      "Kristian Kostov",
      "Blind Channel",
      "Imri Ziv",
    ],
    answer: "Salvador Sobral",
    id: "dzi7c",
  },
  {
    question: "In what city was the Eurovision Song Contest 2010 held?",
    choices: ["Oslo", "Bergen", "Trondheim", "Stavanger"],
    answer: "Oslo",
    id: "iscau",
  },
  {
    question: "Who represented Albania in the Eurovision Song Contest 2019?",
    choices: ["Jonida Maliqi", "Mahmood", "Duncan Laurence", "John Lundvik"],
    answer: "Jonida Maliqi",
    id: "3ocw9",
  },
  {
    question:
      "In what year did the Eurovision Song Contest first introduce the 'split jury-televoting' system?",
    choices: ["2013", "2014", "2015", "2016"],
    answer: "2013",
    id: "387h6",
  },
  {
    question: "Which country won the Eurovision Song Contest 2019?",
    choices: ["Duncan Laurence", "Mahmood", "John Lundvik", "S!sters"],
    answer: "Duncan Laurence",
    id: "jtom4",
  },
  {
    question: "In what city was the Eurovision Song Contest 2011 held?",
    choices: ["Düsseldorf", "Berlin", "Munich", "Hamburg"],
    answer: "Düsseldorf",
    id: "g6902",
  },
  {
    question:
      "Which country has won the Eurovision Song Contest the most times?",
    choices: ["Ireland", "Sweden", "France", "United Kingdom"],
    answer: "Ireland",
    id: "840st",
  },
  {
    question:
      "What is the name of the Swedish song that won Eurovision in 2012?",
    choices: ["Euphoria", "Heroes", "Undo", "Waterline"],
    answer: "Euphoria",
    id: "3fhwl",
  },
  {
    question: "Which singer represented Russia in Eurovision 2015?",
    choices: [
      "Polina Gagarina",
      "Sergey Lazarev",
      "Dima Bilan",
      "Buranovskiye Babushki",
    ],
    answer: "Polina Gagarina",
    id: "3qxt3",
  },
  {
    question: "In what year did ABBA win Eurovision for Sweden?",
    choices: ["1973", "1974", "1975", "1976"],
    answer: "1974",
    id: "58nb6",
  },
  {
    question:
      "Which country has participated in Eurovision the most times without a win?",
    choices: ["Portugal", "Malta", "Cyprus", "Iceland"],
    answer: "Portugal",
    id: "j6xv3",
  },
  {
    question: "Who hosted Eurovision 2019?",
    choices: ["Bar Refaeli", "Assi Azar", "Lucy Ayoub", "Erez Tal"],
    answer: "Assi Azar",
    id: "ose0g",
  },
  {
    question: "What is the name of the Eurovision 2016 winner?",
    choices: ["Jamala", "Douwe Bob", "Francesca Michielin", "Sergey Lazarev"],
    answer: "Jamala",
    id: "wa3yv",
  },
  {
    question: "Which country won Eurovision 2005?",
    choices: ["Greece", "Ukraine", "Moldova", "Hungary"],
    answer: "Greece",
    id: "g313e",
  },
  {
    question: "Who represented Australia in Eurovision 2015?",
    choices: [
      "Guy Sebastian",
      "Dami Im",
      "Jessica Mauboy",
      "Kate Miller-Heidke",
    ],
    answer: "Guy Sebastian",
    id: "3f5jj",
  },
  {
    question: "In what year did Eurovision first introduce semi-finals?",
    choices: ["2004", "2005", "2006", "2007"],
    answer: "2004",
    id: "k2evc",
  },
  {
    question: "Which Eurovision song has the most views on YouTube?",
    choices: [
      "Conchita Wurst - Rise Like a Phoenix",
      "Loreen - Euphoria",
      "Måns Zelmerlöw - Heroes",
      "Netta Barzilai - Toy",
    ],
    answer: "Netta Barzilai - Toy",
    id: "4pbn1",
  },
  {
    question:
      "Who performed the Eurovision 2013 winning song 'Only Teardrops'?",
    choices: [
      "Emmelie de Forest",
      "Farid Mammadov",
      "Amandine Bourgeois",
      "Birgit Õigemeel",
    ],
    answer: "Emmelie de Forest",
    id: "ad7yq",
  },
  {
    question: "What is the name of the Eurovision 2020 winner?",
    choices: [
      "Duncan Laurence - Arcade",
      "The Rasmus - Jezebel",
      "The Roop - On Fire",
      "Uku Suviste - What Love Is",
    ],
    answer: "Duncan Laurence - Arcade",
    id: "jlvgd",
  },
  {
    question: "Which country has participated in Eurovision the least times?",
    choices: [
      "Montenegro",
      "North Macedonia",
      "Slovakia",
      "Bosnia and Herzegovina",
    ],
    answer: "Montenegro",
    id: "5axn9",
  },
  {
    question: "Who won Eurovision 2001?",
    choices: ["Estonia", "Denmark", "France", "Greece"],
    answer: "Estonia",
    id: "s6te2",
  },
  {
    question: "Which country won Eurovision 2011?",
    choices: ["Azerbaijan", "Italy", "Sweden", "Germany"],
    answer: "Azerbaijan",
    id: "nq1f1",
  },
  {
    question: "Who hosted Eurovision 2016?",
    choices: [
      "Måns Zelmerlöw",
      "Petra Mede",
      "Gina Dirawi",
      "Charlotte Perrelli",
    ],
    answer: "Petra Mede",
    id: "hu3rl",
  },
  {
    question:
      "Which Eurovision song is known for its iconic 'douze points' lyrics?",
    choices: ["Hard Rock Hallelujah", "My Number One", "Euphoria", "Fairytale"],
    answer: "Hard Rock Hallelujah",
    id: "u3a7v",
  },
  {
    question: "Which country won Eurovision 1997?",
    choices: ["United Kingdom", "Ireland", "France", "Italy"],
    answer: "United Kingdom",
    id: "tg44h",
  },
  {
    question: "Who represented the Netherlands in Eurovision 2019?",
    choices: ["Duncan Laurence", "Waylon", "Ilse DeLange", "Douwe Bob"],
    answer: "Duncan Laurence",
    id: "9h7it",
  },
  {
    question: "What is the name of the Eurovision 1999 winner?",
    choices: ["Take Me to Your Heaven", "Divine", "Wild Dances", "I Wanna"],
    answer: "Take Me to Your Heaven",
    id: "6p5lt",
  },
  {
    question:
      "Which country has never made it to the top 5 in the Eurovision final?",
    choices: ["Slovenia", "Montenegro", "Albania", "North Macedonia"],
    answer: "Montenegro",
    id: "y06i9",
  },
  {
    question: "Which city hosted the Eurovision Song Contest 2001?",
    choices: ["Copenhagen", "Stockholm", "Oslo", "Copenhagen"],
    answer: "Copenhagen",
    id: "nynhn",
  },
  {
    question: "Who represented Ireland in Eurovision 2013?",
    choices: ["Ryan Dolan", "Brendan Murray", "Jedward", "Niamh Kavanagh"],
    answer: "Ryan Dolan",
    id: "ee2mj",
  },
  {
    question: "In what year did France last win the Eurovision Song Contest?",
    choices: ["1977", "1974", "1975", "1972"],
    answer: "1977",
    id: "wksry",
  },
  {
    question:
      "Which Eurovision winner was a member of the Irish girl group 'B*Witched'?",
    choices: ["Edele Lynch", "Keavy Lynch", "Niamh Kavanagh", "Lindsay Armaou"],
    answer: "Niamh Kavanagh",
    id: "6rf2r",
  },
  {
    question:
      "Which country has the highest average score in the Eurovision Song Contest?",
    choices: ["Sweden", "Ireland", "Luxembourg", "United Kingdom"],
    answer: "Sweden",
    id: "8khki",
  },
  {
    question:
      "Who wrote the lyrics for the winning song 'My Number One' in 2005?",
    choices: [
      "Christos Dantis",
      "Helena Paparizou",
      "Mikael Wendt",
      "Yiannis Doxas",
    ],
    answer: "Christos Dantis",
    id: "o8291",
  },
  {
    question:
      "In what year did the Eurovision Song Contest introduce the 'Big Five' rule?",
    choices: ["1999", "2000", "2004", "2000"],
    answer: "2000",
    id: "1gpyz",
  },
  {
    question: "Who represented Portugal in Eurovision 2017?",
    choices: [
      "Luísa Sobral",
      "Salvador Sobral",
      "Leonor Andrade",
      "Conan Osiris",
    ],
    answer: "Salvador Sobral",
    id: "9o7w6",
  },
  {
    question: "What is the name of the venue that hosted Eurovision 2018?",
    choices: [
      "Altice Arena",
      "MEO Arena",
      "Lisbon Arena",
      "Pavilhão de Setúbal",
    ],
    answer: "Altice Arena",
    id: "babe5",
  },
  {
    question:
      "Which country has finished last in the Eurovision Song Contest the most times?",
    choices: ["Norway", "Austria", "Finland", "Switzerland"],
    answer: "Norway",
    id: "c4mav",
  },
  {
    question: "Who hosted Eurovision 2018?",
    choices: [
      "Filomena Cautela",
      "Sílvia Alberto",
      "Catarina Furtado",
      "Daniela Ruah",
    ],
    answer: "Filomena Cautela",
    id: "2uxph",
  },
  {
    question:
      "In what year did the Eurovision Song Contest introduce the semi-final system?",
    choices: ["2004", "2005", "2008", "2007"],
    answer: "2004",
    id: "ldldi",
  },
  {
    question: "Which country won Eurovision 1961?",
    choices: ["Luxembourg", "France", "Spain", "Denmark"],
    answer: "Luxembourg",
    id: "lv01l",
  },
  {
    question: "Who represented the United Kingdom in Eurovision 2016?",
    choices: ["Joe and Jake", "Lucie Jones", "Blue", "Electro Velvet"],
    answer: "Joe and Jake",
    id: "cwj3h",
  },
  {
    question: "What is the name of the Eurovision 1994 winner?",
    choices: [
      "Rock 'n' Roll Kids",
      "In Your Eyes",
      "Hard Rock Hallelujah",
      "The Voice",
    ],
    answer: "Rock 'n' Roll Kids",
    id: "5ri7a",
  },
  {
    question: "Which city hosted the Eurovision Song Contest 2012?",
    choices: ["Baku", "Istanbul", "Ankara", "Yerevan"],
    answer: "Baku",
    id: "mnwgl",
  },
  {
    question: "Who represented Cyprus in Eurovision 2015?",
    choices: [
      "John Karayiannis",
      "Minus One",
      "Eleni Foureira",
      "Despina Olympiou",
    ],
    answer: "John Karayiannis",
    id: "xa8qz",
  },
  {
    question: "In what year did Conchita Wurst win Eurovision for Austria?",
    choices: ["2013", "2014", "2015", "2016"],
    answer: "2014",
    id: "66xgj",
  },
  {
    question: "Which country has won Eurovision the least times?",
    choices: ["Austria", "Ireland", "Luxembourg", "Portugal"],
    answer: "Portugal",
    id: "kctff",
  },
  {
    question: "Who wrote the music for the winning song 'Fairytale' in 2009?",
    choices: [
      "Alexander Rybak",
      "Mikkel S. Eriksen",
      "Tor Erik Hermansen",
      "Philip Berg",
    ],
    answer: "Alexander Rybak",
    id: "octrp",
  },
  {
    question: "Which country won Eurovision 1982?",
    choices: ["Germany", "Israel", "United Kingdom", "Germany"],
    answer: "Germany",
    id: "ip43n",
  },
  {
    question: "Who represented Turkey in Eurovision 2003?",
    choices: ["Sertab Erener", "Athena", "Mor ve Ötesi", "Hadise"],
    answer: "Sertab Erener",
    id: "bxmww",
  },
  {
    question: "What is the name of the Eurovision 1996 winner?",
    choices: [
      "The Voice",
      "Ooh Aah... Just a Little Bit",
      "Why Me?",
      "Love Shine a Light",
    ],
    answer: "The Voice",
    id: "3v4bw",
  },
  {
    question: "Which city hosted the Eurovision Song Contest 1994?",
    choices: ["Dublin", "Cork", "Galway", "Limerick"],
    answer: "Dublin",
    id: "uc65d",
  },
  {
    question: "Who represented Norway in Eurovision 2009?",
    choices: [
      "Alexander Rybak",
      "Didrik Solli-Tangen",
      "Stella Mwangi",
      "Margaret Berger",
    ],
    answer: "Alexander Rybak",
    id: "z4flh",
  },
  {
    question: "What is the name of the Eurovision 1976 winner?",
    choices: [
      "Sicher",
      "Save Your Kisses for Me",
      "L'oiseau et l'enfant",
      "Puppet on a String",
    ],
    answer: "Save Your Kisses for Me",
    id: "77ixk",
  },
  {
    question: "Which country won Eurovision 1979?",
    choices: ["Israel", "Spain", "France", "United Kingdom"],
    answer: "Israel",
    id: "acs77",
  },
  {
    question: "Who hosted Eurovision 2007?",
    choices: [
      "Jaana Pelkonen",
      "Mikko Leppilampi",
      "Jari Sillanpää",
      "Jenni Vartiainen",
    ],
    answer: "Jaana Pelkonen",
    id: "9uxcu",
  },
  {
    question: "What is the name of the Eurovision 2003 winner?",
    choices: [
      "Everyway That I Can",
      "Sanomi",
      "Keine Sterne",
      "I'm in Love with a Fairytale",
    ],
    answer: "Everyway That I Can",
    id: "cqd1o",
  },
  {
    question:
      "Which country has participated in Eurovision the most times without a top 5 placement?",
    choices: ["Portugal", "Cyprus", "Iceland", "Malta"],
    answer: "Cyprus",
    id: "6y9uo",
  },
  {
    question:
      "Who wrote the music for the winning song 'Hard Rock Hallelujah' in 2006?",
    choices: ["Lordi", "Mr. Lordi", "Awa", "H.P. Paananen"],
    answer: "Mr. Lordi",
    id: "fhc7a",
  },
  {
    question:
      "In what year did Lithuania debut in the Eurovision Song Contest?",
    choices: ["1994", "1999", "2001", "1993"],
    answer: "1994",
    id: "u50wp",
  },
  {
    question: "Who represented Bulgaria in Eurovision 2017?",
    choices: ["Kristian Kostov", "Poli Genova", "Sofi Marinova", "Equinox"],
    answer: "Kristian Kostov",
    id: "8xz5y",
  },
  {
    question: "What is the name of the Eurovision 2004 winner?",
    choices: ["Wild Dances", "My Number One", "Everyway That I Can", "I Wanna"],
    answer: "Wild Dances",
    id: "3qt2n",
  },
  {
    question:
      "Which country has won Eurovision the most times in the 21st century?",
    choices: ["Sweden", "Ireland", "Germany", "Norway"],
    answer: "Sweden",
    id: "0yjix",
  },
  {
    question: "Who represented Belgium in Eurovision 2016?",
    choices: ["Laura Tesoro", "Loïc Nottet", "Blanche", "Sennek"],
    answer: "Laura Tesoro",
    id: "pirji",
  },
  {
    question:
      "In what year did the Eurovision Song Contest introduce the 'juror ranking' system?",
    choices: ["2013", "2016", "2018", "2019"],
    answer: "2016",
    id: "2l15w",
  },
  {
    question:
      "Which country has participated in Eurovision the most times without a win in the 21st century?",
    choices: ["Portugal", "Cyprus", "Malta", "Iceland"],
    answer: "Iceland",
    id: "jptzt",
  },
  {
    question: "Who wrote the lyrics for the winning song 'Euphoria' in 2012?",
    choices: ["Thomas G:son", "Peter Boström", "Loreen", "Fredrik Kempe"],
    answer: "Thomas G:son",
    id: "g3hmu",
  },
  {
    question: "What is the name of the Eurovision 1981 winner?",
    choices: ["Making Your Mind Up", "Johnny Blue", "Kræmernes ø", "Hungary"],
    answer: "Making Your Mind Up",
    id: "ql37n",
  },
  {
    question: "Which city hosted the Eurovision Song Contest 2015?",
    choices: ["Vienna", "Graz", "Linz", "Innsbruck"],
    answer: "Vienna",
    id: "5xk4q",
  },
  {
    question: "Who represented Albania in Eurovision 2012?",
    choices: [
      "Rona Nishliu",
      "Adrian Lulgjuraj",
      "Bledar Sejko",
      "Eneda Tarifa",
    ],
    answer: "Rona Nishliu",
    id: "9xliv",
  },
  {
    question:
      "In what year did Azerbaijan debut in the Eurovision Song Contest?",
    choices: ["2008", "2007", "2009", "2010"],
    answer: "2008",
    id: "27qj8",
  },
  {
    question:
      "Which country has participated in Eurovision the least times in the 21st century?",
    choices: [
      "Montenegro",
      "North Macedonia",
      "Bosnia and Herzegovina",
      "Georgia",
    ],
    answer: "Montenegro",
    id: "nyff0",
  },
];

export const getRandom10Questions = (
  exclude: string[],
  theme: Theme = "all"
) => {
  const DATA = theme === "all" ? ALL : EURO;
  const allQuestions = DATA.filter((q) => !exclude.includes(q.id));
  if (allQuestions.length <= 1) return [];
  const random10Questions = allQuestions
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);
  return random10Questions;
};
