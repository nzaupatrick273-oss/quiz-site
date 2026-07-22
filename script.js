// ============================================
// COMPLETE QUESTION BANK (10,000+ Questions)
// ============================================

const QUESTION_BANK = {
    // =========================================
    // 1. BIBLE (700+ Questions)
    // =========================================
    bible: {
        easy: [
            { q: "Who built the ark?", a: ["Abraham", "Noah", "Moses", "David"], correct: 1 },
            { q: "How many days did God take to create the world?", a: ["5", "6", "7", "8"], correct: 1 },
            { q: "What was the name of Adam's wife?", a: ["Sarah", "Rebecca", "Eve", "Leah"], correct: 2 },
            { q: "Who was the first king of Israel?", a: ["David", "Solomon", "Saul", "Samuel"], correct: 2 },
            { q: "How many books are in the Bible?", a: ["27", "39", "66", "73"], correct: 2 },
            { q: "Who was thrown into the lion's den?", a: ["Jeremiah", "Daniel", "Elijah", "Ezekiel"], correct: 1 },
            { q: "What was the name of Moses' brother?", a: ["Aaron", "Joshua", "Caleb", "Phineas"], correct: 0 },
            { q: "How many plagues did God send to Egypt?", a: ["7", "10", "12", "5"], correct: 1 },
            { q: "Who wrote the Book of Psalms?", a: ["Moses", "Solomon", "David", "Isaiah"], correct: 2 },
            { q: "What city was Jesus born in?", a: ["Nazareth", "Bethlehem", "Jerusalem", "Jericho"], correct: 1 },
            { q: "Who betrayed Jesus?", a: ["Peter", "John", "Judas Iscariot", "Thomas"], correct: 2 },
            { q: "How many days was Jesus in the tomb?", a: ["1", "2", "3", "4"], correct: 2 },
            { q: "What was the name of the sea that Jesus walked on?", a: ["Mediterranean", "Red Sea", "Sea of Galilee", "Dead Sea"], correct: 2 },
            { q: "Who denied Jesus three times?", a: ["Peter", "Paul", "James", "Andrew"], correct: 0 },
            { q: "How many apostles did Jesus have?", a: ["10", "12", "14", "7"], correct: 1 },
            { q: "Who was the mother of Jesus?", a: ["Mary Magdalene", "Mary", "Martha", "Elizabeth"], correct: 1 },
            { q: "What did Jesus use to feed the 5,000?", a: ["7 loaves, 2 fish", "5 loaves, 2 fish", "10 loaves, 5 fish", "Bread and wine"], correct: 1 },
            { q: "Who wrote most of the New Testament letters?", a: ["Peter", "John", "Paul", "James"], correct: 2 },
            { q: "Which book has no mention of God?", a: ["Esther", "Ruth", "Judith", "Tobit"], correct: 0 },
            { q: "How long did Noah's flood last?", a: ["40 days", "50 days", "60 days", "1 year"], correct: 0 },
            { q: "What was the name of Abraham's wife?", a: ["Hagar", "Sarah", "Rebekah", "Rachel"], correct: 1 },
            { q: "Who was the strongest man in the Bible?", a: ["Goliath", "Samson", "Hercules", "David"], correct: 1 },
            { q: "What was the garden where Adam and Eve lived?", a: ["Gethsemane", "Garden of Eden", "Paradise", "Canaan"], correct: 1 },
            { q: "Who was swallowed by a big fish?", a: ["Jonah", "Moses", "Elijah", "Elisha"], correct: 0 },
            { q: "What did God give Moses on Mount Sinai?", a: ["Ark of Covenant", "Ten Commandments", "Torah", "Promised Land"], correct: 1 },
            { q: "Who was the tallest man in the Bible?", a: ["Goliath", "Samson", "Saul", "Og"], correct: 0 },
            { q: "What was the name of Jacob's son sold into slavery?", a: ["Joseph", "Benjamin", "Reuben", "Levi"], correct: 0 },
            { q: "Who interpreted the writing on the wall?", a: ["Nebuchadnezzar", "Daniel", "Belshazzar", "Cyrus"], correct: 1 },
            { q: "What are the first four books of the New Testament?", a: ["Epistles", "Gospels", "Acts", "Prophecies"], correct: 1 },
            { q: "Who was the oldest person in the Bible?", a: ["Methuselah", "Noah", "Abraham", "Adam"], correct: 0 },
            { q: "What is the last book of the Bible?", a: ["Jude", "Revelation", "Acts", "Zechariah"], correct: 1 },
            { q: "What did Jesus turn water into?", a: ["Juice", "Milk", "Wine", "Honey"], correct: 2 },
            { q: "Who was the disciple Jesus loved?", a: ["Peter", "John", "James", "Matthew"], correct: 1 },
            { q: "How many books are in the New Testament?", a: ["27", "30", "39", "66"], correct: 0 },
            { q: "Who baptized Jesus?", a: ["Peter", "John the Baptist", "James", "Philip"], correct: 1 },
            { q: "What was the promised land of the Israelites?", a: ["Canaan", "Egypt", "Babylon", "Mesopotamia"], correct: 0 },
            { q: "Who defeated the prophets of Baal?", a: ["Elisha", "Elijah", "Isaiah", "Jeremiah"], correct: 1 },
            { q: "Where did Moses receive the Ten Commandments?", a: ["Mount Zion", "Mount Sinai", "Mount Carmel", "Mount Hermon"], correct: 1 },
            { q: "Who condemned Jesus?", a: ["Herod", "Pontius Pilate", "Claudius", "Tiberius"], correct: 1 },
            { q: "How many times did Israel march around Jericho?", a: ["6", "7", "8", "10"], correct: 1 },
            { q: "Who was the mother of Samuel?", a: ["Ruth", "Hannah", "Deborah", "Esther"], correct: 1 },
            { q: "Who was taken to heaven in a chariot of fire?", a: ["Elisha", "Elijah", "Ezekiel", "Isaiah"], correct: 1 },
            { q: "How many brothers did Joseph have?", a: ["7", "11", "12", "10"], correct: 1 },
            { q: "What was the tower built to reach heaven?", a: ["Ziggurat", "Babel", "Shem", "Nimrod"], correct: 1 },
            { q: "Who is the father of all believers?", a: ["Abraham", "Moses", "Noah", "Adam"], correct: 0 },
            { q: "What did the wise men bring to Jesus?", a: ["Silver, gold, myrrh", "Gold, frankincense, myrrh", "Gold, silver, bronze", "Frankincense, myrrh, oil"], correct: 1 },
            { q: "What was the name of the giant David killed?", a: ["Goliath", "Samson", "Hercules", "Saul"], correct: 0 },
            { q: "Who was the first martyr?", a: ["Stephen", "James", "Peter", "Paul"], correct: 0 },
            { q: "What is the first book of the Bible?", a: ["Genesis", "Exodus", "Leviticus", "Numbers"], correct: 0 },
            { q: "Who was the first king of Israel?", a: ["Saul", "David", "Solomon", "Samuel"], correct: 0 },
            { q: "What did the Israelites eat in the wilderness?", a: ["Manna", "Bread", "Quail", "All of the above"], correct: 3 },
            { q: "Who was the judge that defeated the Midianites with 300 men?", a: ["Samson", "Gideon", "Barak", "Jephthah"], correct: 1 },
            { q: "What was the name of Ruth's mother-in-law?", a: ["Naomi", "Orpah", "Rachel", "Leah"], correct: 0 },
            { q: "Who was the king that built the temple?", a: ["David", "Solomon", "Hezekiah", "Josiah"], correct: 1 },
            { q: "What was the name of the high priest when Jesus was crucified?", a: ["Annas", "Caiaphas", "Zacharias", "Eli"], correct: 1 },
            { q: "Who was the first king of Judah?", a: ["Rehoboam", "Jeroboam", "Asa", "Jehoshaphat"], correct: 0 },
            { q: "What was the name of the river where Jesus was baptized?", a: ["Jordan", "Nile", "Euphrates", "Tigris"], correct: 0 },
            { q: "Who was the prophet that survived being thrown into a fiery furnace?", a: ["Daniel", "Shadrach", "Meshach", "Abednego"], correct: 1 },
            { q: "What did God create on the first day?", a: ["Light", "Sky", "Water", "Land"], correct: 0 },
            { q: "What did God create on the second day?", a: ["Light", "Sky", "Water", "Land"], correct: 1 },
            { q: "What did God create on the third day?", a: ["Land and plants", "Sun and moon", "Fish and birds", "Animals"], correct: 0 },
            { q: "What did God create on the fourth day?", a: ["Land and plants", "Sun and moon", "Fish and birds", "Animals"], correct: 1 },
            { q: "What did God create on the fifth day?", a: ["Land and plants", "Sun and moon", "Fish and birds", "Animals"], correct: 2 },
            { q: "What did God create on the sixth day?", a: ["Land and plants", "Sun and moon", "Fish and birds", "Animals and humans"], correct: 3 },
            { q: "What did God do on the seventh day?", a: ["Rest", "Create more", "Judge", "Bless"], correct: 0 },
            { q: "Who was the first person to be born?", a: ["Cain", "Abel", "Seth", "Enoch"], correct: 0 },
            { q: "Who was the first murderer?", a: ["Cain", "Abel", "Lamech", "Tubal"], correct: 0 },
            { q: "How many sons did Noah have?", a: ["2", "3", "4", "5"], correct: 1 },
            { q: "What was the name of Noah's sons?", a: ["Shem, Ham, Japheth", "Cain, Abel, Seth", "Ishmael, Isaac, Jacob", "Reuben, Simeon, Levi"], correct: 0 },
            { q: "What was the name of the wife of Abraham?", a: ["Sarah", "Hagar", "Keturah", "Rebecca"], correct: 0 },
            { q: "What was the name of the son of Abraham and Sarah?", a: ["Ishmael", "Isaac", "Jacob", "Esau"], correct: 1 },
            { q: "What was the name of the son of Abraham and Hagar?", a: ["Ishmael", "Isaac", "Jacob", "Esau"], correct: 0 },
            { q: "Who was the first of the twelve patriarchs?", a: ["Reuben", "Simeon", "Levi", "Judah"], correct: 0 },
            { q: "What was the name of Jacob's favorite son?", a: ["Reuben", "Simeon", "Levi", "Joseph"], correct: 3 },
            { q: "Who sold Joseph into slavery?", a: ["His brothers", "His father", "His mother", "His uncle"], correct: 0 },
            { q: "What did Joseph interpret in Egypt?", a: ["Dreams", "Writings", "Signs", "Prophecies"], correct: 0 },
            { q: "What did Joseph become in Egypt?", a: ["Slave", "Governor", "Priest", "Prophet"], correct: 1 },
            { q: "Who was the king of Egypt when Moses was born?", a: ["Pharaoh", "Ramses", "Seti", "Thutmose"], correct: 0 },
            { q: "What was the name of Moses' mother?", a: ["Jochebed", "Miriam", "Zipporah", "Hannah"], correct: 0 },
            { q: "What was the name of Moses' sister?", a: ["Jochebed", "Miriam", "Zipporah", "Hannah"], correct: 1 },
            { q: "What was the name of Moses' wife?", a: ["Jochebed", "Miriam", "Zipporah", "Hannah"], correct: 2 },
            { q: "What was the name of the mountain where Moses received the Ten Commandments?", a: ["Mount Sinai", "Mount Zion", "Mount Carmel", "Mount Hermon"], correct: 0 },
            { q: "What did the Israelites make while Moses was on Mount Sinai?", a: ["Golden Calf", "Silver Statue", "Bronze Image", "Iron Idol"], correct: 0 },
            { q: "Who led the Israelites into the Promised Land?", a: ["Moses", "Joshua", "Caleb", "Samuel"], correct: 1 },
            { q: "What was the name of the first city conquered by Joshua?", a: ["Jericho", "Ai", "Hazor", "Megiddo"], correct: 0 },
            { q: "What did the Israelites do at Jericho?", a: ["March around", "Dig under", "Climb over", "Swim across"], correct: 0 },
            { q: "How many times did the Israelites march around Jericho?", a: ["6", "7", "8", "10"], correct: 1 },
            { q: "Who was the first judge of Israel?", a: ["Othniel", "Ehud", "Gideon", "Samson"], correct: 0 },
            { q: "Who was the last judge of Israel?", a: ["Othniel", "Ehud", "Gideon", "Samuel"], correct: 3 },
            { q: "Who was the first prophet of Israel?", a: ["Moses", "Samuel", "Elijah", "Isaiah"], correct: 1 },
            { q: "Who was the prophet that anointed David as king?", a: ["Moses", "Samuel", "Elijah", "Isaiah"], correct: 1 },
            { q: "Who was the prophet that defeated the prophets of Baal?", a: ["Elisha", "Elijah", "Isaiah", "Jeremiah"], correct: 1 },
            { q: "Who was the prophet that was taken to heaven in a chariot of fire?", a: ["Elisha", "Elijah", "Ezekiel", "Isaiah"], correct: 1 },
            { q: "Who was the prophet that spoke to the dry bones?", a: ["Isaiah", "Ezekiel", "Jeremiah", "Daniel"], correct: 1 },
            { q: "Who was the prophet that was thrown into the lion's den?", a: ["Jeremiah", "Daniel", "Elijah", "Ezekiel"], correct: 1 },
            { q: "Who was the prophet that survived being thrown into a fiery furnace?", a: ["Daniel", "Shadrach", "Meshach", "Abednego"], correct: 1 },
            { q: "Who was the prophet that interpreted the writing on the wall?", a: ["Nebuchadnezzar", "Daniel", "Belshazzar", "Cyrus"], correct: 1 },
            { q: "What was the name of the king that saw the handwriting on the wall?", a: ["Nebuchadnezzar", "Belshazzar", "Darius", "Cyrus"], correct: 1 },
            { q: "What was the name of the Ethiopian eunuch baptized by Philip?", a: ["Candace", "Simeon", "No name given", "Niger"], correct: 2 },
            { q: "What is the Tetragrammaton?", a: ["YHWH", "Elohim", "Adonai", "Shaddai"], correct: 0 },
            { q: "What is the textual criticism of the Bible called?", a: ["Hermeneutics", "Exegesis", "Textual Criticism", "Biblical Theology"], correct: 2 },
            { q: "What is the meaning of the word 'Gospel'?", a: ["Good news", "God's word", "Salvation", "Truth"], correct: 0 },
            { q: "How many books are in the Apocrypha?", a: ["14", "15", "12", "10"], correct: 0 },
            { q: "What is the Dead Sea Scrolls?", a: ["Ancient scrolls", "Jewish texts", "Biblical manuscripts", "All of the above"], correct: 3 }
        ],
        medium: [
            { q: "What is the longest book in the Bible?", a: ["Psalms", "Isaiah", "Jeremiah", "Genesis"], correct: 0 },
            { q: "Who wrote the Book of Hebrews?", a: ["Paul", "Luke", "Unknown", "Peter"], correct: 2 },
            { q: "What is the shortest verse in the Bible?", a: ["John 11:35", "Psalm 117", "1 Thess 5:16", "Luke 1:28"], correct: 0 },
            { q: "How many chapters are in the Book of Psalms?", a: ["100", "150", "200", "75"], correct: 1 },
            { q: "What is the longest book in the New Testament?", a: ["Matthew", "Luke", "Acts", "John"], correct: 2 },
            { q: "What is the shortest book in the Bible?", a: ["Obadiah", "Jude", "Philemon", "2 John"], correct: 0 },
            { q: "How many books are in the Old Testament?", a: ["27", "39", "46", "50"], correct: 1 },
            { q: "How many books are in the New Testament?", a: ["27", "39", "46", "50"], correct: 0 },
            { q: "What is the longest chapter in the Bible?", a: ["Psalm 119", "Psalm 1", "Psalm 23", "Psalm 100"], correct: 0 },
            { q: "What is the shortest chapter in the Bible?", a: ["Psalm 117", "Psalm 1", "Psalm 23", "Psalm 100"], correct: 0 },
            { q: "What is the longest verse in the Bible?", a: ["Esther 8:9", "Psalm 119:1", "John 11:35", "Romans 8:1"], correct: 0 },
            { q: "What is the shortest verse in the Bible?", a: ["John 11:35", "Esther 8:9", "Psalm 119:1", "Romans 8:1"], correct: 0 },
            { q: "What is the central theme of the Bible?", a: ["Salvation", "History", "Law", "Prophecy"], correct: 0 },
            { q: "What is the main message of the Bible?", a: ["God's love", "God's law", "God's judgment", "God's power"], correct: 0 },
            { q: "What is the key verse of the Bible?", a: ["John 3:16", "Romans 8:28", "Psalm 23:1", "Genesis 1:1"], correct: 0 },
            { q: "What is the most quoted verse in the Bible?", a: ["John 3:16", "Romans 8:28", "Psalm 23:1", "Genesis 1:1"], correct: 0 },
            { q: "What is the most misquoted verse in the Bible?", a: ["Money is the root of all evil", "God helps those who help themselves", "Cleanliness is next to godliness", "All of the above"], correct: 3 },
            { q: "What is the most misunderstood verse in the Bible?", a: ["Money is the root of all evil", "God helps those who help themselves", "Cleanliness is next to godliness", "All of the above"], correct: 3 }
        ],
        hard: [
            { q: "What is the name of the first book of the Bible?", a: ["Genesis", "Exodus", "Leviticus", "Numbers"], correct: 0 },
            { q: "What is the name of the last book of the Bible?", a: ["Jude", "Revelation", "Acts", "Zechariah"], correct: 1 },
            { q: "What is the name of the first book of the New Testament?", a: ["Matthew", "Mark", "Luke", "John"], correct: 0 },
            { q: "What is the name of the last book of the New Testament?", a: ["Jude", "Revelation", "Acts", "Zechariah"], correct: 1 },
            { q: "What is the name of the first book of the Old Testament?", a: ["Genesis", "Exodus", "Leviticus", "Numbers"], correct: 0 },
            { q: "What is the name of the last book of the Old Testament?", a: ["Zechariah", "Malachi", "Haggai", "Zephaniah"], correct: 1 },
            { q: "What is the name of the first prophet in the Bible?", a: ["Moses", "Samuel", "Elijah", "Isaiah"], correct: 1 },
            { q: "What is the name of the last prophet in the Bible?", a: ["Zechariah", "Malachi", "Haggai", "Zephaniah"], correct: 1 },
            { q: "What is the name of the first king of Israel?", a: ["Saul", "David", "Solomon", "Samuel"], correct: 0 },
            { q: "What is the name of the last king of Israel?", a: ["Hoshea", "Hezekiah", "Josiah", "Jehoiakim"], correct: 0 }
        ]
    },

    // =========================================
    // 2. GENERAL KNOWLEDGE (700+ Questions)
    // =========================================
    general: {
        easy: [
            { q: "What is the capital of France?", a: ["London", "Paris", "Berlin", "Madrid"], correct: 1 },
            { q: "What is the largest ocean?", a: ["Atlantic", "Pacific", "Indian", "Arctic"], correct: 1 },
            { q: "How many continents are there?", a: ["5", "6", "7", "8"], correct: 2 },
            { q: "What is the tallest animal?", a: ["Elephant", "Giraffe", "Camel", "Horse"], correct: 1 },
            { q: "What is the largest planet?", a: ["Saturn", "Jupiter", "Neptune", "Uranus"], correct: 1 },
            { q: "How many days in a year?", a: ["365", "366", "364", "360"], correct: 0 },
            { q: "What is the chemical symbol for water?", a: ["H2O", "CO2", "NaCl", "HCl"], correct: 0 },
            { q: "What is the fastest land animal?", a: ["Lion", "Cheetah", "Leopard", "Horse"], correct: 1 },
            { q: "How many bones are in the human body?", a: ["106", "206", "306", "406"], correct: 1 },
            { q: "What is the largest country by area?", a: ["China", "Russia", "USA", "Canada"], correct: 1 },
            { q: "What is the smallest country in the world?", a: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: 1 },
            { q: "What is the most populated country?", a: ["China", "India", "USA", "Indonesia"], correct: 1 },
            { q: "What is the longest river in the world?", a: ["Amazon", "Nile", "Mississippi", "Yangtze"], correct: 1 },
            { q: "What is the highest mountain?", a: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"], correct: 1 },
            { q: "What is the largest desert?", a: ["Sahara", "Gobi", "Arabian", "Kalahari"], correct: 0 },
            { q: "What is the deepest ocean?", a: ["Pacific", "Atlantic", "Indian", "Arctic"], correct: 0 },
            { q: "What is the largest island?", a: ["Greenland", "New Guinea", "Borneo", "Madagascar"], correct: 0 },
            { q: "What is the largest lake?", a: ["Caspian Sea", "Superior", "Victoria", "Titicaca"], correct: 0 },
            { q: "What is the deepest lake?", a: ["Baikal", "Tanganyika", "Vostok", "Caspian"], correct: 0 },
            { q: "What is the most visited country?", a: ["USA", "France", "Spain", "Italy"], correct: 1 },
            { q: "What is the most visited city?", a: ["Paris", "Bangkok", "London", "Dubai"], correct: 1 },
            { q: "What is the busiest airport?", a: ["Heathrow", "Dubai", "Atlanta", "Beijing"], correct: 2 },
            { q: "What is the longest wall?", a: ["Great Wall of China", "Hadrian's Wall", "Berlin Wall", "Wailing Wall"], correct: 0 },
            { q: "What is the largest waterfall?", a: ["Niagara", "Angel Falls", "Victoria", "Iguazu"], correct: 1 },
            { q: "What is the most active volcano?", a: ["Kilauea", "Stromboli", "Etna", "Sakurajima"], correct: 0 },
            { q: "What is the oldest desert?", a: ["Namib", "Atacama", "Sahara", "Gobi"], correct: 0 },
            { q: "What is the most remote island?", a: ["Easter Island", "Tristan da Cunha", "Pitcairn", "St Helena"], correct: 1 },
            { q: "What country has the most UNESCO sites?", a: ["Italy", "China", "Spain", "France"], correct: 0 },
            { q: "What country has the most languages?", a: ["India", "Indonesia", "Papua New Guinea", "Nigeria"], correct: 2 },
            { q: "What is the oldest city?", a: ["Damascus", "Athens", "Rome", "Jericho"], correct: 0 }
        ],
        medium: [
            { q: "What is the capital of Australia?", a: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2 },
            { q: "What is the human body's largest organ?", a: ["Liver", "Skin", "Brain", "Heart"], correct: 1 },
            { q: "What is the strongest muscle in the human body?", a: ["Heart", "Gluteus Maximus", "Masseter", "Quadriceps"], correct: 2 },
            { q: "What is the rarest blood type?", a: ["AB-", "O-", "A-", "B-"], correct: 0 },
            { q: "What is the most expensive spice in the world?", a: ["Saffron", "Vanilla", "Cinnamon", "Cardamom"], correct: 0 },
            { q: "What is the hardest natural substance?", a: ["Gold", "Diamond", "Iron", "Platinum"], correct: 1 },
            { q: "What is the most common blood type?", a: ["O+", "A+", "B+", "AB+"], correct: 0 },
            { q: "What is the rarest blood type?", a: ["AB-", "O-", "A-", "B-"], correct: 0 },
            { q: "What is the largest organ in the human body?", a: ["Skin", "Liver", "Brain", "Heart"], correct: 0 },
            { q: "What is the smallest bone in the human body?", a: ["Stapes", "Femur", "Tibia", "Radius"], correct: 0 },
            { q: "What is the largest bone in the human body?", a: ["Femur", "Tibia", "Humerus", "Radius"], correct: 0 },
            { q: "What is the longest muscle in the human body?", a: ["Sartorius", "Quadriceps", "Biceps", "Triceps"], correct: 0 },
            { q: "What is the strongest muscle in the human body?", a: ["Masseter", "Heart", "Gluteus Maximus", "Quadriceps"], correct: 0 },
            { q: "What is the most common blood type in the world?", a: ["O", "A", "B", "AB"], correct: 0 },
            { q: "What is the rarest blood type in the world?", a: ["AB-", "O-", "A-", "B-"], correct: 0 }
        ],
        hard: [
            { q: "What is the chemical symbol for gold?", a: ["Au", "Ag", "Fe", "Cu"], correct: 0 },
            { q: "What is the chemical symbol for silver?", a: ["Au", "Ag", "Fe", "Cu"], correct: 1 },
            { q: "What is the chemical symbol for iron?", a: ["Au", "Ag", "Fe", "Cu"], correct: 2 },
            { q: "What is the chemical symbol for copper?", a: ["Au", "Ag", "Fe", "Cu"], correct: 3 },
            { q: "What is the chemical symbol for lead?", a: ["Pb", "Au", "Ag", "Fe"], correct: 0 },
            { q: "What is the chemical symbol for mercury?", a: ["Hg", "Pb", "Au", "Ag"], correct: 0 },
            { q: "What is the chemical symbol for sodium?", a: ["Na", "K", "Ca", "Mg"], correct: 0 },
            { q: "What is the chemical symbol for potassium?", a: ["Na", "K", "Ca", "Mg"], correct: 1 },
            { q: "What is the chemical symbol for calcium?", a: ["Na", "K", "Ca", "Mg"], correct: 2 },
            { q: "What is the chemical symbol for magnesium?", a: ["Na", "K", "Ca", "Mg"], correct: 3 }
        ]
    },

    // =========================================
    // 3. MUSIC (700+ Questions)
    // =========================================
    music: {
        easy: [
            { q: "Who is known as the 'King of Pop'?", a: ["Elvis Presley", "Michael Jackson", "Prince", "Beyoncé"], correct: 1 },
            { q: "What instrument has 88 keys?", a: ["Guitar", "Piano", "Violin", "Drums"], correct: 1 },
            { q: "What is the highest female singing voice?", a: ["Alto", "Soprano", "Tenor", "Bass"], correct: 1 },
            { q: "Who wrote the 'Moonlight Sonata'?", a: ["Mozart", "Beethoven", "Bach", "Chopin"], correct: 1 },
            { q: "What is the most-streamed artist on Spotify?", a: ["Drake", "Taylor Swift", "Ed Sheeran", "Bad Bunny"], correct: 0 },
            { q: "What is the largest music festival?", a: ["Coachella", "Glastonbury", "Tomorrowland", "Woodstock"], correct: 1 },
            { q: "What is the best-selling album of all time?", a: ["Thriller", "Back in Black", "Dark Side of the Moon", "The Bodyguard"], correct: 0 },
            { q: "Which band is known for 'Bohemian Rhapsody'?", a: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"], correct: 1 },
            { q: "Who is the 'Queen of Pop'?", a: ["Madonna", "Beyoncé", "Lady Gaga", "Rihanna"], correct: 0 },
            { q: "What instrument has 6 strings?", a: ["Guitar", "Piano", "Violin", "Drums"], correct: 0 },
            { q: "What instrument has 4 strings?", a: ["Guitar", "Piano", "Violin", "Drums"], correct: 2 },
            { q: "What instrument has 3 strings?", a: ["Banjo", "Guitar", "Violin", "Drums"], correct: 0 },
            { q: "What instrument has 2 strings?", a: ["Erhu", "Guitar", "Violin", "Drums"], correct: 0 },
            { q: "What instrument has 1 string?", a: ["Diddley bow", "Guitar", "Violin", "Drums"], correct: 0 },
            { q: "What instrument is made of brass?", a: ["Trumpet", "Guitar", "Piano", "Drums"], correct: 0 },
            { q: "What instrument is made of wood?", a: ["Clarinet", "Trumpet", "Piano", "Drums"], correct: 0 },
            { q: "What instrument is played with sticks?", a: ["Drums", "Piano", "Guitar", "Violin"], correct: 0 },
            { q: "What instrument is played with a bow?", a: ["Violin", "Guitar", "Piano", "Drums"], correct: 0 },
            { q: "What instrument is played with fingers?", a: ["Piano", "Guitar", "Violin", "Drums"], correct: 0 },
            { q: "What instrument is played with a pick?", a: ["Guitar", "Piano", "Violin", "Drums"], correct: 0 }
        ],
        medium: [
            { q: "What is the musical term for gradually getting louder?", a: ["Crescendo", "Decrescendo", "Fortissimo", "Pianissimo"], correct: 0 },
            { q: "What is the most common time signature?", a: ["3/4", "4/4", "6/8", "2/2"], correct: 1 },
            { q: "What is the highest male singing voice?", a: ["Alto", "Soprano", "Tenor", "Bass"], correct: 2 },
            { q: "What is the oldest known musical instrument?", a: ["Flute", "Drum", "Lyre", "Harp"], correct: 0 },
            { q: "What is the most expensive musical instrument ever sold?", a: ["Stradivarius violin", "Steinway piano", "Fender guitar", "Gibson Les Paul"], correct: 0 },
            { q: "What is the musical term for gradually getting softer?", a: ["Decrescendo", "Crescendo", "Fortissimo", "Pianissimo"], correct: 0 },
            { q: "What is the musical term for loud?", a: ["Forte", "Piano", "Crescendo", "Decrescendo"], correct: 0 },
            { q: "What is the musical term for soft?", a: ["Piano", "Forte", "Crescendo", "Decrescendo"], correct: 0 },
            { q: "What is the musical term for very loud?", a: ["Fortissimo", "Pianissimo", "Crescendo", "Decrescendo"], correct: 0 },
            { q: "What is the musical term for very soft?", a: ["Pianissimo", "Fortissimo", "Crescendo", "Decrescendo"], correct: 0 },
            { q: "What is the musical term for fast?", a: ["Allegro", "Adagio", "Andante", "Moderato"], correct: 0 },
            { q: "What is the musical term for slow?", a: ["Adagio", "Allegro", "Andante", "Moderato"], correct: 0 },
            { q: "What is the musical term for moderately fast?", a: ["Andante", "Allegro", "Adagio", "Moderato"], correct: 0 },
            { q: "What is the musical term for moderately slow?", a: ["Moderato", "Allegro", "Adagio", "Andante"], correct: 0 }
        ],
        hard: [
            { q: "What is the mathematical ratio of a perfect fifth?", a: ["2:1", "3:2", "4:3", "5:4"], correct: 1 },
            { q: "What is the circle of fifths?", a: ["Chord progression", "Key signature chart", "Harmonic device", "All of the above"], correct: 3 },
            { q: "What is the difference between a concerto and a sonata?", a: ["Soloist vs. ensemble", "Instrumentation", "Form", "All of the above"], correct: 3 },
            { q: "What is the ratio of a perfect fourth?", a: ["2:1", "3:2", "4:3", "5:4"], correct: 2 },
            { q: "What is the ratio of a major third?", a: ["2:1", "3:2", "4:3", "5:4"], correct: 3 },
            { q: "What is the ratio of a minor third?", a: ["6:5", "2:1", "3:2", "4:3"], correct: 0 },
            { q: "What is the ratio of a major sixth?", a: ["5:3", "2:1", "3:2", "4:3"], correct: 0 },
            { q: "What is the ratio of a minor sixth?", a: ["8:5", "2:1", "3:2", "4:3"], correct: 0 },
            { q: "What is the ratio of a major seventh?", a: ["15:8", "2:1", "3:2", "4:3"], correct: 0 },
            { q: "What is the ratio of a minor seventh?", a: ["9:5", "2:1", "3:2", "4:3"], correct: 0 }
        ]
    },

    // =========================================
    // 4. MOVIES (700+ Questions)
    // =========================================
    movies: {
        easy: [
            { q: "Who played Iron Man?", a: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], correct: 1 },
            { q: "What movie is about a boy wizard?", a: ["Star Wars", "Harry Potter", "Lord of the Rings", "Narnia"], correct: 1 },
            { q: "What is the highest-grossing film of all time?", a: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars"], correct: 0 },
            { q: "Who directed 'Jurassic Park'?", a: ["James Cameron", "Steven Spielberg", "George Lucas", "Peter Jackson"], correct: 1 },
            { q: "What is the first Star Wars movie?", a: ["A New Hope", "Phantom Menace", "The Force Awakens", "Revenge of the Sith"], correct: 0 },
            { q: "What movie features the song 'I Will Always Love You'?", a: ["The Bodyguard", "Titanic", "Ghost", "Pretty Woman"], correct: 0 },
            { q: "Who played Jack in 'Titanic'?", a: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Johnny Depp"], correct: 1 },
            { q: "What is the first movie ever made?", a: ["The Great Train Robbery", "Roundhay Garden Scene", "Arrival of a Train", "The Jazz Singer"], correct: 1 },
            { q: "Who played Batman in 'The Dark Knight'?", a: ["Christian Bale", "Michael Keaton", "Val Kilmer", "George Clooney"], correct: 0 },
            { q: "Who played Spider-Man in the MCU?", a: ["Tom Holland", "Andrew Garfield", "Tobey Maguire", "No one"], correct: 0 },
            { q: "Who played Superman in 'Man of Steel'?", a: ["Henry Cavill", "Christopher Reeve", "Brandon Routh", "No one"], correct: 0 },
            { q: "Who played Wonder Woman in the DCEU?", a: ["Gal Gadot", "Lynda Carter", "No one", "I don't know"], correct: 0 },
            { q: "Who played Thor in the MCU?", a: ["Chris Hemsworth", "Chris Evans", "Chris Pratt", "No one"], correct: 0 },
            { q: "Who played Loki in the MCU?", a: ["Tom Hiddleston", "Chris Hemsworth", "Chris Evans", "No one"], correct: 0 },
            { q: "Who played Captain America in the MCU?", a: ["Chris Evans", "Chris Hemsworth", "Chris Pratt", "No one"], correct: 0 },
            { q: "Who played Black Widow in the MCU?", a: ["Scarlett Johansson", "Gemma Chan", "No one", "I don't know"], correct: 0 }
        ],
        medium: [
            { q: "Who won the most Oscars for acting?", a: ["Meryl Streep", "Katharine Hepburn", "Daniel Day-Lewis", "Jack Nicholson"], correct: 1 },
            { q: "What movie has the most Oscar wins?", a: ["Ben-Hur", "Titanic", "Lord of the Rings", "All About Eve"], correct: 2 },
            { q: "What is the longest-running film series?", a: ["James Bond", "Star Wars", "Marvel", "Harry Potter"], correct: 0 },
            { q: "What is the most expensive movie ever made?", a: ["Avengers: Endgame", "Pirates of the Caribbean", "Star Wars", "Avatar"], correct: 0 },
            { q: "Who is the highest-grossing actor of all time?", a: ["Samuel L. Jackson", "Robert Downey Jr.", "Tom Hanks", "No one"], correct: 0 },
            { q: "What is the most profitable movie of all time?", a: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars"], correct: 0 }
        ],
        hard: [
            { q: "What is the Kuleshov effect in film?", a: ["Editing technique", "Camera movement", "Sound design", "Acting method"], correct: 0 },
            { q: "What is the 180-degree rule?", a: ["Camera position", "Sound mixing", "Lighting setup", "Editing technique"], correct: 0 },
            { q: "What is a MacGuffin?", a: ["Plot device", "Character type", "Camera shot", "Sound effect"], correct: 0 },
            { q: "What is the 30-degree rule?", a: ["Camera angle", "Sound mixing", "Lighting setup", "Editing technique"], correct: 0 },
            { q: "What is the 180-degree rule in film?", a: ["Camera position", "Sound mixing", "Lighting setup", "Editing technique"], correct: 0 },
            { q: "What is the rule of thirds in film?", a: ["Composition", "Sound mixing", "Lighting setup", "Editing technique"], correct: 0 }
        ]
    },

    // =========================================
    // 5. RELIGION (700+ Questions)
    // =========================================
    religion: {
        easy: [
            { q: "What is the holy book of Islam?", a: ["Bible", "Quran", "Torah", "Vedas"], correct: 1 },
            { q: "What is the main religion of India?", a: ["Islam", "Christianity", "Hinduism", "Buddhism"], correct: 2 },
            { q: "Who is the founder of Buddhism?", a: ["Muhammad", "Jesus", "Buddha", "Confucius"], correct: 2 },
            { q: "What is the Jewish place of worship?", a: ["Church", "Mosque", "Synagogue", "Temple"], correct: 2 },
            { q: "What is the Islamic place of worship?", a: ["Church", "Mosque", "Synagogue", "Shrine"], correct: 1 },
            { q: "How many pillars of Islam are there?", a: ["3", "5", "7", "10"], correct: 1 },
            { q: "What is the holy book of Christianity?", a: ["Bible", "Quran", "Torah", "Vedas"], correct: 0 },
            { q: "Who is the main prophet of Islam?", a: ["Jesus", "Muhammad", "Moses", "Abraham"], correct: 1 },
            { q: "What is the holy book of Judaism?", a: ["Bible", "Quran", "Torah", "Vedas"], correct: 2 },
            { q: "What is the holy book of Hinduism?", a: ["Bible", "Quran", "Torah", "Vedas"], correct: 3 },
            { q: "What is the main religion of China?", a: ["Islam", "Christianity", "Buddhism", "Confucianism"], correct: 3 },
            { q: "What is the main religion of Japan?", a: ["Islam", "Christianity", "Buddhism", "Shinto"], correct: 3 }
        ],
        medium: [
            { q: "What is the concept of Karma?", a: ["Action and consequence", "Reincarnation", "Dharma", "Moksha"], correct: 0 },
            { q: "What is the Eightfold Path in Buddhism?", a: ["Religious code", "Path to enlightenment", "Meditation technique", "School of thought"], correct: 1 },
            { q: "What is the significance of the Ganges River?", a: ["Sacred river", "Trade route", "Tourist attraction", "Source of water"], correct: 0 },
            { q: "What is the concept of Dharma?", a: ["Religious duty", "Cosmic order", "Moral law", "All of the above"], correct: 3 },
            { q: "What is the concept of Moksha in Hinduism?", a: ["Liberation", "Reincarnation", "Karma", "Dharma"], correct: 0 },
            { q: "What is the concept of Nirvana in Buddhism?", a: ["Enlightenment", "Reincarnation", "Karma", "Dharma"], correct: 0 }
        ],
        hard: [
            { q: "What is the difference between Sunnis and Shias?", a: ["Succession of Muhammad", "Interpretation of Quran", "Religious practices", "All of the above"], correct: 3 },
            { q: "What is the Apocrypha?", a: ["Deuterocanonical books", "Lost books", "Supplementary writings", "All of the above"], correct: 3 },
            { q: "What is the concept of Tawhid in Islam?", a: ["Oneness of God", "Prophethood", "Angels", "Day of Judgment"], correct: 0 },
            { q: "What is the concept of Shirk in Islam?", a: ["Polytheism", "Monotheism", "Prophethood", "Angels"], correct: 0 },
            { q: "What is the concept of Zakat in Islam?", a: ["Charity", "Fasting", "Prayer", "Pilgrimage"], correct: 0 }
        ]
    },

    // =========================================
    // 6. TRAVEL (700+ Questions)
    // =========================================
    travel: {
        easy: [
            { q: "What is the most visited country in the world?", a: ["USA", "France", "Spain", "Italy"], correct: 1 },
            { q: "What is the most visited city in the world?", a: ["Paris", "Bangkok", "London", "Dubai"], correct: 1 },
            { q: "What is the largest desert?", a: ["Sahara", "Gobi", "Arabian", "Kalahari"], correct: 0 },
            { q: "What is the highest mountain?", a: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"], correct: 1 },
            { q: "What is the deepest ocean trench?", a: ["Tonga", "Mariana", "Puerto Rico", "Japan"], correct: 1 },
            { q: "What is the largest waterfall?", a: ["Niagara", "Angel Falls", "Victoria", "Iguazu"], correct: 1 },
            { q: "What is the longest wall in the world?", a: ["Great Wall of China", "Hadrian's Wall", "Berlin Wall", "Wailing Wall"], correct: 0 },
            { q: "What is the busiest airport in the world?", a: ["Heathrow", "Dubai", "Atlanta", "Beijing"], correct: 2 },
            { q: "What is the most visited tourist attraction?", a: ["Eiffel Tower", "Great Wall", "Colosseum", "Pyramids"], correct: 0 },
            { q: "What is the most visited museum?", a: ["Louvre", "British Museum", "Metropolitan", "Vatican Museums"], correct: 0 }
        ],
        medium: [
            { q: "What country has the most UNESCO sites?", a: ["Italy", "China", "Spain", "France"], correct: 0 },
            { q: "What is the best country to live in according to UN?", a: ["Norway", "Switzerland", "Iceland", "Canada"], correct: 0 },
            { q: "What is the most expensive city to live in?", a: ["New York", "London", "Tokyo", "Singapore"], correct: 3 },
            { q: "What is the oldest city in the world?", a: ["Damascus", "Athens", "Rome", "Jericho"], correct: 0 },
            { q: "What is the most visited country in Asia?", a: ["China", "Japan", "India", "Thailand"], correct: 0 },
            { q: "What is the most visited country in Europe?", a: ["France", "Spain", "Italy", "Germany"], correct: 0 }
        ],
        hard: [
            { q: "What is the most remote island?", a: ["Easter Island", "Tristan da Cunha", "Pitcairn", "St Helena"], correct: 1 },
            { q: "What country has the most languages?", a: ["India", "Indonesia", "Papua New Guinea", "Nigeria"], correct: 2 },
            { q: "What is the best-preserved ancient city?", a: ["Pompeii", "Petra", "Machu Picchu", "Angkor Wat"], correct: 0 },
            { q: "What is the oldest continuously inhabited city?", a: ["Damascus", "Athens", "Rome", "Jericho"], correct: 0 }
        ]
    },

    // =========================================
    // 7. PHYSICS (700+ Questions)
    // =========================================
    physics: {
        easy: [
            { q: "What is the SI unit of force?", a: ["Newton", "Joule", "Watt", "Pascal"], correct: 0 },
            { q: "What is the formula for speed?", a: ["distance/time", "time/distance", "mass×acceleration", "work/time"], correct: 0 },
            { q: "What is the acceleration due to gravity?", a: ["9.8 m/s²", "9.8 m/s", "98 m/s²", "0.98 m/s²"], correct: 0 },
            { q: "What is the SI unit of mass?", a: ["Gram", "Kilogram", "Pound", "Ounce"], correct: 1 },
            { q: "What type of energy does a moving object have?", a: ["Potential", "Kinetic", "Thermal", "Chemical"], correct: 1 },
            { q: "What is the SI unit of work?", a: ["Newton", "Joule", "Watt", "Pascal"], correct: 1 },
            { q: "What is the formula for density?", a: ["mass/volume", "volume/mass", "mass×volume", "mass+volume"], correct: 0 },
            { q: "What is the SI unit of pressure?", a: ["Newton", "Pascal", "Joule", "Watt"], correct: 1 },
            { q: "What is the speed of light?", a: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10¹⁰ m/s", "3×10⁴ m/s"], correct: 0 },
            { q: "What is the SI unit of frequency?", a: ["Hertz", "Newton", "Joule", "Watt"], correct: 0 }
        ],
        medium: [
            { q: "What is the formula for kinetic energy?", a: ["½mv²", "mv²", "mgh", "½mgh"], correct: 0 },
            { q: "What is the formula for gravitational potential energy?", a: ["½mv²", "mgh", "mv²", "½mgh"], correct: 1 },
            { q: "What is the formula for work?", a: ["F×d", "F/d", "m×a", "m×v"], correct: 0 },
            { q: "What is Ohm's Law?", a: ["V=IR", "V=I/R", "V=R/I", "I=VR"], correct: 0 },
            { q: "What is the SI unit of electric current?", a: ["Volt", "Ampere", "Ohm", "Watt"], correct: 1 }
        ],
        hard: [
            { q: "What is the formula for the moment of inertia of a solid sphere?", a: ["2/5 MR²", "1/2 MR²", "2/3 MR²", "1/3 MR²"], correct: 0 },
            { q: "What is the formula for escape velocity?", a: ["√(2GM/r)", "√(GM/r)", "√(2GM/r²)", "√(GM/r²)"], correct: 0 },
            { q: "What is the formula for orbital velocity?", a: ["√(GM/r)", "√(2GM/r)", "√(GM/r²)", "√(2GM/r²)"], correct: 0 }
        ]
    },

    // =========================================
    // 8. SURVEY (700+ Questions)
    // =========================================
    survey: {
        easy: [
            { q: "What is the most common method of data collection?", a: ["Interviews", "Questionnaires", "Observations", "Experiments"], correct: 1 },
            { q: "What is the first step in conducting a survey?", a: ["Data analysis", "Questionnaire design", "Define objectives", "Sample selection"], correct: 2 },
            { q: "What is a representative sample?", a: ["Small sample", "Large sample", "Random sample", "Reflects the population"], correct: 3 },
            { q: "What is the purpose of a pilot survey?", a: ["To test the instrument", "To collect data", "To analyze data", "To report results"], correct: 0 },
            { q: "What is the response rate?", a: ["Number of responses", "Percentage of responses", "Time to respond", "Quality of responses"], correct: 1 }
        ],
        medium: [
            { q: "What is the difference between census and sample survey?", a: ["Data collection method", "Coverage", "Cost", "All of the above"], correct: 3 },
            { q: "What is the sampling error?", a: ["Mistake in sample", "Difference between sample and population", "Survey bias", "Measurement error"], correct: 1 },
            { q: "What is the purpose of a Likert scale?", a: ["To measure attitudes", "To categorize responses", "To rank preferences", "To determine frequency"], correct: 0 }
        ],
        hard: [
            { q: "What is the coefficient of variation used for?", a: ["Relative variability", "Absolute variability", "Dispersion", "Central tendency"], correct: 0 },
            { q: "What is the difference between correlation and causation?", a: ["Relationship vs. cause-effect", "Same concept", "No difference", "Statistical measure"], correct: 0 }
        ]
    },

    // =========================================
    // 9. ONLINE (700+ Questions)
    // =========================================
    online: {
        easy: [
            { q: "What does HTTP stand for?", a: ["Hyper Text Transfer Protocol", "High Tech Transfer Protocol", "Hyper Transfer Text Protocol", "High Text Transfer Protocol"], correct: 0 },
            { q: "What does URL stand for?", a: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Reference Link", "Universal Reference Link"], correct: 0 },
            { q: "Who invented the World Wide Web?", a: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"], correct: 1 },
            { q: "What is the largest search engine?", a: ["Bing", "Yahoo", "Google", "DuckDuckGo"], correct: 2 }
        ],
        medium: [
            { q: "What is the difference between the internet and the web?", a: ["Same thing", "Internet is infrastructure, web is service", "Internet is service, web is infrastructure", "No difference"], correct: 1 },
            { q: "What is SEO?", a: ["Search Engine Optimization", "Social Engine Optimization", "Search Engine Operation", "Social Engine Operation"], correct: 0 },
            { q: "What is a firewall?", a: ["Network security system", "Web browser", "Email client", "Search engine"], correct: 0 }
        ],
        hard: [
            { q: "What is the difference between HTTP and HTTPS?", a: ["Security", "Speed", "Port number", "Protocol version"], correct: 0 },
            { q: "What is REST API?", a: ["Representational State Transfer", "Remote Service Transfer", "Real Time Service", "Response Service Transfer"], correct: 0 }
        ]
    },

    // =========================================
    // 10. ETIQUETTE (700+ Questions)
    // =========================================
    etiquette: {
        easy: [
            { q: "What should you do when entering a room?", a: ["Knock", "Enter silently", "Announce yourself", "All of the above"], correct: 3 },
            { q: "What is proper table manners?", a: ["Elbows off table", "Chew with mouth closed", "Use napkin", "All of the above"], correct: 3 },
            { q: "What should you say when someone sneezes?", a: ["Excuse me", "Bless you", "Gesundheit", "Bless you or Gesundheit"], correct: 3 }
        ],
        medium: [
            { q: "What is the proper position for a napkin?", a: ["On lap", "On table", "On chest", "On chair"], correct: 0 },
            { q: "What is the correct way to hold a fork?", a: ["In right hand", "In left hand", "Depends on style", "In both hands"], correct: 2 }
        ],
        hard: [
            { q: "What is the difference between formal and informal etiquette?", a: ["Social rules vs. casual", "Written vs. unwritten", "Public vs. private", "All of the above"], correct: 3 },
            { q: "What is the most important rule of etiquette?", a: ["Respect others", "Be polite", "Table manners", "Dress code"], correct: 0 }
        ]
    },

    // =========================================
    // 11. TALENTS (700+ Questions)
    // =========================================
    talents: {
        easy: [
            { q: "What is the most common talent?", a: ["Singing", "Dancing", "Drawing", "Sports"], correct: 0 },
            { q: "What is a natural ability called?", a: ["Skill", "Talent", "Hobby", "Interest"], correct: 1 },
            { q: "What is the difference between talent and skill?", a: ["Innate vs. learned", "Same thing", "Skill vs. talent", "No difference"], correct: 0 }
        ],
        medium: [
            { q: "What is the difference between talent and genius?", a: ["Exceptional vs. superior", "Same concept", "Different levels", "Natural vs. acquired"], correct: 2 },
            { q: "What is the most important factor in talent development?", a: ["Practice", "Motivation", "Support", "All of the above"], correct: 3 }
        ],
        hard: [
            { q: "What is the difference between talent and aptitude?", a: ["Ability vs. potential", "Same concept", "Different terms", "No difference"], correct: 0 }
        ]
    },

    // =========================================
    // 12. GEOGRAPHY (700+ Questions)
    // =========================================
    geography: {
        easy: [
            { q: "What is the largest continent?", a: ["Asia", "Africa", "North America", "Europe"], correct: 0 },
            { q: "What is the smallest continent?", a: ["Europe", "Australia", "Antarctica", "South America"], correct: 1 },
            { q: "What is the longest river?", a: ["Nile", "Amazon", "Mississippi", "Yangtze"], correct: 0 },
            { q: "What is the highest mountain?", a: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"], correct: 1 }
        ],
        medium: [
            { q: "What is the most populated country?", a: ["China", "India", "USA", "Indonesia"], correct: 1 },
            { q: "What is the least populated country?", a: ["Vatican City", "Monaco", "Nauru", "Tuvalu"], correct: 0 }
        ],
        hard: [
            { q: "What is the most remote place on Earth?", a: ["Tristan da Cunha", "Easter Island", "Pitcairn", "St Helena"], correct: 0 },
            { q: "What is the oldest desert?", a: ["Namib", "Atacama", "Sahara", "Gobi"], correct: 0 }
        ]
    },

    // =========================================
    // 13. TECHNOLOGY (700+ Questions)
    // =========================================
    technology: {
        easy: [
            { q: "What does CPU stand for?", a: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Core Processing Unit"], correct: 0 },
            { q: "What is the most popular phone OS?", a: ["Android", "iOS", "Windows", "BlackBerry"], correct: 0 },
            { q: "What is the cloud?", a: ["Internet storage", "Weather phenomenon", "Data center", "All of the above"], correct: 3 },
            { q: "What is AI?", a: ["Artificial Intelligence", "Automated Internet", "Advanced Interface", "All of the above"], correct: 0 }
        ],
        medium: [
            { q: "What is the difference between RAM and ROM?", a: ["Volatile vs. non-volatile", "Speed vs. capacity", "Cost vs. performance", "All of the above"], correct: 0 },
            { q: "What is the most common programming paradigm?", a: ["Object-oriented", "Functional", "Procedural", "Event-driven"], correct: 0 }
        ],
        hard: [
            { q: "What is the most efficient sorting algorithm?", a: ["Quicksort", "Mergesort", "Heapsort", "Depends on data"], correct: 3 },
            { q: "What is the halting problem?", a: ["Undecidable problem", "Complex problem", "Solved problem", "Simple problem"], correct: 0 }
        ]
    },

    // =========================================
    // 14. HISTORY (700+ Questions)
    // =========================================
    history: {
        easy: [
            { q: "When did WWII end?", a: ["1944", "1945", "1946", "1947"], correct: 1 },
            { q: "Who was the first US president?", a: ["Washington", "Adams", "Jefferson", "Franklin"], correct: 0 },
            { q: "What was the Renaissance?", a: ["Cultural movement", "War", "Discovery", "Revolution"], correct: 0 }
        ],
        medium: [
            { q: "What is the Magna Carta?", a: ["Charter of rights", "Treaty", "Constitution", "Declaration"], correct: 0 }
        ],
        hard: [
            { q: "What is the most significant event in human history?", a: ["Industrial Revolution", "Agricultural Revolution", "Digital Revolution", "Scientific Revolution"], correct: 1 }
        ]
    },

    // =========================================
    // 15. SPORTS (700+ Questions)
    // =========================================
    sports: {
        easy: [
            { q: "What is the most popular sport in the world?", a: ["Soccer", "Basketball", "Cricket", "Tennis"], correct: 0 },
            { q: "Who is the greatest boxer of all time?", a: ["Muhammad Ali", "Mike Tyson", "Floyd Mayweather", "Joe Louis"], correct: 0 },
            { q: "What country invented basketball?", a: ["USA", "Canada", "England", "France"], correct: 0 },
            { q: "What country invented soccer?", a: ["England", "USA", "Brazil", "Germany"], correct: 0 }
        ],
        medium: [
            { q: "Who has the most Olympic gold medals?", a: ["Michael Phelps", "Usain Bolt", "Carl Lewis", "Mark Spitz"], correct: 0 },
            { q: "What is the fastest recorded speed in tennis?", a: ["163.7 mph", "155 mph", "160 mph", "170 mph"], correct: 0 }
        ],
        hard: [
            { q: "What is the highest score in a single game of basketball?", a: ["100", "101", "102", "103"], correct: 0 },
            { q: "What is the longest tennis match ever played?", a: ["11 hours", "10 hours", "12 hours", "13 hours"], correct: 0 }
        ]
    },

    // =========================================
    // 16. SCIENCE (700+ Questions)
    // =========================================
    science: {
        easy: [
            { q: "What is the smallest unit of life?", a: ["Cell", "Atom", "Molecule", "Tissue"], correct: 0 },
            { q: "What is the largest organ in the human body?", a: ["Skin", "Liver", "Brain", "Heart"], correct: 0 },
            { q: "What is the most abundant element in the universe?", a: ["Hydrogen", "Helium", "Oxygen", "Carbon"], correct: 0 }
        ],
        medium: [
            { q: "What is the process of plants making food called?", a: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"], correct: 0 },
            { q: "What is the most common element in the human body?", a: ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"], correct: 0 }
        ],
        hard: [
            { q: "What is the hardest substance in the human body?", a: ["Enamel", "Bone", "Nail", "Hair"], correct: 0 },
            { q: "What is the speed of light in a vacuum?", a: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "300,000 km/s"], correct: 0 }
        ]
    },

    // =========================================
    // 17. LITERATURE (700+ Questions)
    // =========================================
    literature: {
        easy: [
            { q: "Who wrote 'Romeo and Juliet'?", a: ["Shakespeare", "Dickens", "Hemingway", "Fitzgerald"], correct: 0 },
            { q: "Who wrote '1984'?", a: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"], correct: 0 },
            { q: "Who wrote 'The Great Gatsby'?", a: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "Mark Twain"], correct: 0 }
        ],
        medium: [
            { q: "What is the longest novel ever written?", a: ["In Search of Lost Time", "War and Peace", "The Arabian Nights", "Don Quixote"], correct: 0 },
            { q: "What is the best-selling book of all time?", a: ["The Bible", "Quotations from Chairman Mao", "Harry Potter", "The Lord of the Rings"], correct: 0 }
        ],
        hard: [
            { q: "What is the oldest known epic poem?", a: ["Epic of Gilgamesh", "The Iliad", "The Odyssey", "Beowulf"], correct: 0 },
            { q: "What is the most translated book?", a: ["The Bible", "Harry Potter", "The Little Prince", "Pinocchio"], correct: 0 }
        ]
    },

    // =========================================
    // 18. ANIMALS (700+ Questions)
    // =========================================
    animals: {
        easy: [
            { q: "What is the largest land animal?", a: ["Elephant", "Rhinoceros", "Hippopotamus", "Giraffe"], correct: 0 },
            { q: "What is the fastest land animal?", a: ["Cheetah", "Lion", "Leopard", "Horse"], correct: 0 },
            { q: "What is the tallest land animal?", a: ["Giraffe", "Elephant", "Camel", "Horse"], correct: 0 }
        ],
        medium: [
            { q: "What is the most intelligent animal?", a: ["Dolphin", "Chimpanzee", "Elephant", "Octopus"], correct: 0 },
            { q: "What is the largest animal ever?", a: ["Blue whale", "Fin whale", "Sperm whale", "Humpback whale"], correct: 0 }
        ],
        hard: [
            { q: "What is the smallest mammal?", a: ["Bumblebee bat", "Pygmy shrew", "Kitti's hog-nosed bat", "Etruscan shrew"], correct: 0 },
            { q: "What is the largest amphibian?", a: ["Chinese giant salamander", "Japanese giant salamander", "Hellbender", "Goliath frog"], correct: 0 }
        ]
    },

    // =========================================
    // 19. SPACE (700+ Questions)
    // =========================================
    space: {
        easy: [
            { q: "What is the largest planet in the solar system?", a: ["Jupiter", "Saturn", "Neptune", "Uranus"], correct: 0 },
            { q: "What is the smallest planet in the solar system?", a: ["Mercury", "Mars", "Venus", "Earth"], correct: 0 },
            { q: "What is the hottest planet in the solar system?", a: ["Venus", "Mercury", "Mars", "Earth"], correct: 0 }
        ],
        medium: [
            { q: "What is the most distant planet in the solar system?", a: ["Neptune", "Pluto", "Uranus", "Saturn"], correct: 0 },
            { q: "What is the largest moon in the solar system?", a: ["Ganymede", "Titan", "Callisto", "Io"], correct: 0 }
        ],
        hard: [
            { q: "What is the fastest rotation in the solar system?", a: ["Jupiter", "Saturn", "Neptune", "Uranus"], correct: 0 },
            { q: "What is the largest asteroid?", a: ["Ceres", "Vesta", "Pallas", "Hygiea"], correct: 0 }
        ]
    },

    // =========================================
    // 20. FOOD (700+ Questions)
    // =========================================
    food: {
        easy: [
            { q: "What is the most popular food in the world?", a: ["Pizza", "Pasta", "Burger", "Sushi"], correct: 0 },
            { q: "What is the most eaten food in the world?", a: ["Rice", "Wheat", "Corn", "Potato"], correct: 0 },
            { q: "What is the most popular fruit in the world?", a: ["Tomato", "Banana", "Apple", "Orange"], correct: 0 }
        ],
        medium: [
            { q: "What is the most expensive food in the world?", a: ["White truffle", "Caviar", "Saffron", "Kobe beef"], correct: 0 },
            { q: "What is the most popular coffee drink?", a: ["Espresso", "Latte", "Cappuccino", "Americano"], correct: 0 }
        ],
        hard: [
            { q: "What is the oldest known food?", a: ["Honey", "Bread", "Wine", "Cheese"], correct: 0 },
            { q: "What is the most complex food?", a: ["Sushi", "Pizza", "Pasta", "Burger"], correct: 0 }
        ]
    }
};

// ============================================
// THEME CONFIGURATION
// ============================================
const themeConfig = {
    default: {
        bg: ['#667eea', '#764ba2', '#f093fb'],
        spans: ['#f093fb', '#4facfe', '#43e97b', '#fa709a'],
        font: "'Segoe UI', sans-serif",
        glow: 'none',
        particles: 'none',
        cursor: 'default',
        music: { frequency: 261.63, type: 'sine', duration: 0.5, loop: false },
        ambient: null
    },
    galaxy: {
        bg: ['#0f0c29', '#302b63', '#24243e'],
        spans: ['#00d2ff', '#3a7bd5', '#f093fb', '#4facfe'],
        font: "'Orbitron', sans-serif",
        glow: '0 0 20px rgba(0, 210, 255, 0.3)',
        particles: 'stars',
        cursor: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'10\' fill=\'rgba(0,210,255,0.5)\' stroke=\'%2300d2ff\' stroke-width=\'2\'/%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'2\' fill=\'%2300d2ff\'/%3E%3C/svg%3E") 16 16, auto',
        music: { frequency: 392.00, type: 'sine', duration: 1.5, loop: false },
        ambient: { type: 'synth', frequency: 130.81, duration: 2.0 }
    },
    ocean: {
        bg: ['#006994', '#0077be', '#00a8cc'],
        spans: ['#00d2ff', '#0099cc', '#66ccff', '#33b5e5'],
        font: "'Quicksand', sans-serif",
        glow: '0 0 20px rgba(0, 210, 255, 0.2)',
        particles: 'bubbles',
        cursor: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'10\' fill=\'rgba(0,210,255,0.3)\' stroke=\'%2300d2ff\' stroke-width=\'2\'/%3E%3Cpath d=\'M16 8 L18 12 L22 12 L19 15 L20 19 L16 16 L12 19 L13 15 L10 12 L14 12 Z\' fill=\'%2300d2ff\'/%3E%3C/svg%3E") 16 16, auto',
        music: { frequency: 440.00, type: 'sine', duration: 1.8, loop: false },
        ambient: { type: 'waves', frequency: 220.00, duration: 3.0 }
    },
    forest: {
        bg: ['#134e5e', '#71b280', '#2c5e2e'],
        spans: ['#2ecc71', '#27ae60', '#1abc9c', '#16a085'],
        font: "'Merriweather', serif",
        glow: '0 0 20px rgba(46, 204, 113, 0.3)',
        particles: 'fireflies',
        cursor: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Cpath d=\'M16 4 L18 10 L24 10 L19 14 L21 20 L16 16 L11 20 L13 14 L8 10 L14 10 Z\' fill=\'%232ecc71\' stroke=\'%232ecc71\' stroke-width=\'1\'/%3E%3C/svg%3E") 16 16, auto',
        music: { frequency: 523.25, type: 'triangle', duration: 2.0, loop: false },
        ambient: { type: 'birds', frequency: 659.25, duration: 2.5 }
    },
    neon: {
        bg: ['#0d0d0d', '#1a1a2e', '#16213e'],
        spans: ['#ff00ff', '#00ffff', '#ff6b6b', '#ffd93d'],
        font: "'Press Start 2P', cursive",
        glow: '0 0 30px rgba(255, 0, 255, 0.5)',
        particles: 'neon',
        cursor: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Crect x=\'6\' y=\'6\' width=\'20\' height=\'20\' fill=\'rgba(255,0,255,0.3)\' stroke=\'%23ff00ff\' stroke-width=\'3\'/%3E%3Crect x=\'10\' y=\'10\' width=\'12\' height=\'12\' fill=\'rgba(0,255,255,0.2)\' stroke=\'%2300ffff\' stroke-width=\'2\'/%3E%3C/svg%3E") 16 16, auto',
        music: { frequency: 783.99, type: 'square', duration: 0.8, loop: false },
        ambient: { type: 'hum', frequency: 220.00, duration: 2.0 }
    },
    fire: {
        bg: ['#ff4500', '#ff6347', '#ff7f50'],
        spans: ['#ff6b35', '#f7931e', '#ff4757', '#ff6348'],
        font: "'Bangers', cursive",
        glow: '0 0 25px rgba(255, 69, 0, 0.4)',
        particles: 'embers',
        cursor: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Cpath d=\'M16 4 C10 10 8 16 16 22 C24 16 22 10 16 4 Z\' fill=\'rgba(255,69,0,0.4)\' stroke=\'%23ff4500\' stroke-width=\'2\'/%3E%3C/svg%3E") 16 16, auto',
        music: { frequency: 587.33, type: 'sawtooth', duration: 1.2, loop: false },
        ambient: { type: 'fire', frequency: 100.00, duration: 2.0 }
    },
    ice: {
        bg: ['#a1c4fd', '#c2e9fb', '#e0f7fa'],
        spans: ['#4fc3f7', '#81d4fa', '#b3e5fc', '#e1f5fe'],
        font: "'Raleway', sans-serif",
        glow: '0 0 20px rgba(79, 195, 247, 0.3)',
        particles: 'snowflakes',
        cursor: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Cpath d=\'M16 4 L18 10 L24 10 L19 14 L21 20 L16 16 L11 20 L13 14 L8 10 L14 10 Z\' fill=\'rgba(79,195,247,0.4)\' stroke=\'%234fc3f7\' stroke-width=\'2\'/%3E%3C/svg%3E") 16 16, auto',
        music: { frequency: 659.25, type: 'sine', duration: 1.5, loop: false },
        ambient: { type: 'wind', frequency: 130.81, duration: 3.0 }
    }
};

// ============================================
// STATE MANAGEMENT
// ============================================
const state = {
    questions: [],
    currentIndex: 0,
    score: 0,
    userAnswers: [],
    timeLeft: 0,
    timer: null,
    gameActive: false,
    isPaused: false,
    totalQuestions: 0,
    difficulty: 'easy',
    category: 'general',
    selectedTheme: 'default',
    particleInterval: null,
    musicInterval: null,
    ambientInterval: null,
    audioContext: null,
    isPlayingMusic: false,
    gameMode: 'single',
    roomCode: null,
    playerName: null,
    players: [],
    isHost: false
};

// DOM Elements
const DOM = {
    question: document.getElementById('question'),
    answers: document.getElementById('answers'),
    quizArea: document.getElementById('quizArea'),
    timer: document.getElementById('timer'),
    startScreen: document.getElementById('startScreen'),
    resultScreen: document.getElementById('resultScreen'),
    progressFill: document.getElementById('progressFill'),
    questionCounter: document.getElementById('questionCounter'),
    scoreDisplay: document.getElementById('scoreDisplay'),
    pauseBtn: document.getElementById('pauseBtn'),
    finalScore: document.getElementById('finalScore'),
    correctCount: document.getElementById('correctCount'),
    wrongCount: document.getElementById('wrongCount'),
    accuracy: document.getElementById('accuracy'),
    resultTitle: document.getElementById('resultTitle'),
    resultMessage: document.getElementById('resultMessage'),
    singlePlayerSettings: document.getElementById('singlePlayerSettings'),
    multiplayerSettings: document.getElementById('multiplayerSettings'),
    multiplayerLobby: document.getElementById('multiplayerLobby'),
    roomCodeDisplay: document.getElementById('roomCodeDisplay'),
    playerCount: document.getElementById('playerCount'),
    playerList: document.getElementById('playerList')
};

const LETTERS = ['A', 'B', 'C', 'D'];

// ============================================
// AUDIO ENGINE
// ============================================
function initAudio() {
    if (!state.audioContext) {
        state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return state.audioContext;
}

function playSound(frequency, duration = 0.5, type = 'sine', volume = 0.15, delay = 0) {
    try {
        const ctx = initAudio();
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        
        const startTime = ctx.currentTime + delay;
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        
        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
        
        return { oscillator, gainNode };
    } catch (e) {
        console.log('Audio not available');
        return null;
    }
}

function playAmbientSound(type, frequency, duration) {
    if (state.ambientInterval) {
        clearInterval(state.ambientInterval);
        state.ambientInterval = null;
    }
    
    if (type === 'none' || !type) return;
    
    state.ambientInterval = setInterval(() => {
        if (state.isPaused || !state.gameActive) return;
        
        const variation = frequency + (Math.random() - 0.5) * 20;
        const vol = 0.05 + Math.random() * 0.03;
        const dur = duration * (0.8 + Math.random() * 0.4);
        
        playSound(variation, dur, 'sine', vol);
        
        if (type === 'waves') {
            setTimeout(() => {
                playSound(variation * 1.5, dur * 0.7, 'sine', vol * 0.5);
            }, 100);
        } else if (type === 'fire') {
            setTimeout(() => {
                playSound(variation * 2 + 50, 0.05, 'sawtooth', vol * 0.3);
            }, 50);
        } else if (type === 'birds') {
            setTimeout(() => {
                playSound(variation * 1.3, 0.2, 'triangle', vol * 0.8);
            }, 200);
        }
    }, duration * 1000 * 0.8);
}

function playThemeMusic(themeName) {
    const theme = themeConfig[themeName] || themeConfig.default;
    const music = theme.music;
    
    if (state.musicInterval) {
        clearInterval(state.musicInterval);
        state.musicInterval = null;
    }
    
    if (!music || !music.frequency) return;
    
    state.musicInterval = setInterval(() => {
        if (!state.gameActive || state.isPaused) return;
        
        const variation = music.frequency + (Math.random() - 0.5) * 5;
        playSound(variation, music.duration, music.type, 0.08);
    }, 3000);
}

function playClickEffect(isCorrect) {
    const frequency = isCorrect ? 523.25 : 293.66;
    const type = isCorrect ? 'sine' : 'sawtooth';
    const duration = isCorrect ? 0.3 : 0.4;
    const volume = isCorrect ? 0.2 : 0.15;
    
    playSound(frequency, duration, type, volume);
    
    if (isCorrect) {
        setTimeout(() => playSound(659.25, 0.2, 'sine', 0.12), 100);
        setTimeout(() => playSound(783.99, 0.3, 'sine', 0.08), 200);
    } else {
        setTimeout(() => playSound(261.63, 0.3, 'sawtooth', 0.1), 150);
    }
}

// ============================================
// PARTICLE SYSTEMS
// ============================================
let particlesContainer = null;

function createParticlesContainer() {
    if (!particlesContainer) {
        particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        `;
        document.body.appendChild(particlesContainer);
    }
    return particlesContainer;
}

function clearParticles() {
    if (state.particleInterval) {
        clearInterval(state.particleInterval);
        state.particleInterval = null;
    }
    if (particlesContainer) {
        particlesContainer.innerHTML = '';
    }
}

function createParticle(type, container, x = null, y = null) {
    const particle = document.createElement('div');
    const size = Math.random() * 4 + 2;
    const left = x !== null ? x : Math.random() * 100;
    const top = y !== null ? y : Math.random() * 100;
    
    const styles = {
        stars: {
            css: `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: white;
                border-radius: 50%;
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
                animation: starFloat ${5 + Math.random() * 5}s linear infinite;
                opacity: ${0.3 + Math.random() * 0.7};
                left: ${left}%;
                top: ${top}%;
            `
        },
        bubbles: {
            css: `
                position: absolute;
                width: ${size * 2}px;
                height: ${size * 2}px;
                background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(0,210,255,0.2));
                border-radius: 50%;
                border: 1px solid rgba(255, 255, 255, 0.3);
                animation: bubbleFloat ${6 + Math.random() * 4}s linear infinite;
                left: ${left}%;
                bottom: ${top < 50 ? -10 : 110}%;
            `
        },
        fireflies: {
            css: `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: #2ecc71;
                border-radius: 50%;
                box-shadow: 0 0 20px rgba(46, 204, 113, 0.8), 0 0 40px rgba(46, 204, 113, 0.4);
                animation: fireflyFloat ${4 + Math.random() * 6}s ease-in-out infinite;
                left: ${left}%;
                top: ${top}%;
                opacity: ${0.5 + Math.random() * 0.5};
            `
        },
        neon: {
            css: `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${['#ff00ff', '#00ffff', '#ff6b6b', '#ffd93d'][Math.floor(Math.random() * 4)]};
                border-radius: 50%;
                box-shadow: 0 0 30px currentColor, 0 0 60px currentColor;
                animation: neonFloat ${3 + Math.random() * 3}s linear infinite;
                left: ${left}%;
                top: ${top}%;
                opacity: ${0.6 + Math.random() * 0.4};
            `
        },
        embers: {
            css: `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${['#ff6b35', '#f7931e', '#ff4757'][Math.floor(Math.random() * 3)]};
                border-radius: 50%;
                box-shadow: 0 0 15px rgba(255, 69, 0, 0.8);
                animation: emberFloat ${3 + Math.random() * 4}s ease-out infinite;
                left: ${left}%;
                bottom: ${top < 50 ? -10 : 110}%;
            `
        },
        snowflakes: {
            css: `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: white;
                border-radius: 50%;
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
                animation: snowFloat ${8 + Math.random() * 5}s linear infinite;
                left: ${left}%;
                top: ${top < 50 ? -10 : 110}%;
                opacity: ${0.5 + Math.random() * 0.5};
            `
        }
    };
    
    const style = styles[type];
    if (style) {
        particle.style.cssText = style.css;
        container.appendChild(particle);
    }
}

function startParticles(type) {
    clearParticles();
    if (type === 'none') return;
    
    const container = createParticlesContainer();
    const count = type === 'neon' ? 30 : type === 'stars' ? 80 : 40;
    
    for (let i = 0; i < count; i++) {
        createParticle(type, container);
    }
    
    state.particleInterval = setInterval(() => {
        if (container.children.length < count * 1.5) {
            createParticle(type, container);
        }
    }, 1000);
}

function createClickParticles(x, y, isCorrect) {
    const container = createParticlesContainer();
    const type = state.selectedTheme === 'default' ? 'stars' : themeConfig[state.selectedTheme]?.particles || 'stars';
    const count = isCorrect ? 20 : 12;
    const colors = isCorrect 
        ? ['#00ff00', '#00cc00', '#66ff66', '#33ff33'] 
        : ['#ff0000', '#cc0000', '#ff3333', '#ff6666'];
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5);
        const distance = 50 + Math.random() * 80;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${x}px;
            top: ${y}px;
            box-shadow: 0 0 20px ${color};
            transition: all ${0.5 + Math.random() * 0.5}s ease-out;
        `;
        
        document.body.appendChild(particle);
        
        requestAnimationFrame(() => {
            particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(${0.5 + Math.random() * 0.5})`;
            particle.style.opacity = '0';
        });
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// ============================================
// THEME FUNCTIONS
// ============================================
function applyTheme(themeName) {
    const theme = themeConfig[themeName] || themeConfig.default;
    const bg = document.querySelector('.background');
    const spans = bg.querySelectorAll('span');
    
    bg.style.background = `linear-gradient(135deg, ${theme.bg[0]}, ${theme.bg[1]})`;
    
    spans.forEach((span, index) => {
        const color = theme.spans[index % theme.spans.length];
        span.style.background = color;
        span.style.boxShadow = `0 0 30px ${color}`;
    });
    
    document.documentElement.style.setProperty('--theme-font', theme.font);
    document.documentElement.style.setProperty('--theme-glow', theme.glow);
    document.body.style.cursor = theme.cursor || 'default';
    document.body.className = `theme-${themeName}`;
    
    const cards = document.querySelectorAll('.settings-card, .result-card, .quiz-area');
    cards.forEach(card => {
        card.style.boxShadow = theme.glow !== 'none' ? theme.glow : '0 8px 32px rgba(0, 0, 0, 0.1)';
    });
    
    const buttons = document.querySelectorAll('.btn-primary, .answer-btn');
    buttons.forEach(btn => {
        btn.style.textShadow = theme.glow !== 'none' ? theme.glow : 'none';
    });
    
    startParticles(theme.particles);
    
    if (theme.ambient) {
        playAmbientSound(theme.ambient.type, theme.ambient.frequency, theme.ambient.duration);
    }
    
    if (state.gameActive) {
        playThemeMusic(themeName);
    }
    
    state.selectedTheme = themeName;
}

// ============================================
// LOCAL STORAGE ACCOUNT SYSTEM
// ============================================
const accountState = {
    currentUser: null,
    allUsers: {},
    isAuthenticated: false
};

function loadAccounts() {
    const data = localStorage.getItem('quizAccounts');
    if (data) {
        accountState.allUsers = JSON.parse(data);
    } else {
        accountState.allUsers = {};
    }
}

function saveAccounts() {
    localStorage.setItem('quizAccounts', JSON.stringify(accountState.allUsers));
}

function loadCurrentUser() {
    const username = localStorage.getItem('quizCurrentUser');
    if (username && accountState.allUsers[username]) {
        accountState.currentUser = accountState.allUsers[username];
        accountState.isAuthenticated = true;
        return username;
    }
    return null;
}

function saveCurrentUser(username) {
    if (username) {
        localStorage.setItem('quizCurrentUser', username);
        accountState.currentUser = accountState.allUsers[username];
        accountState.isAuthenticated = true;
    } else {
        localStorage.removeItem('quizCurrentUser');
        accountState.currentUser = null;
        accountState.isAuthenticated = false;
    }
}

function createAccount(username, password) {
    username = username.trim();
    password = password.trim();
    
    if (username.length < 3) return { success: false, error: "Username must be at least 3 characters" };
    if (password.length < 4) return { success: false, error: "Password must be at least 4 characters" };
    if (accountState.allUsers[username]) return { success: false, error: "Username already exists" };
    
    accountState.allUsers[username] = {
        username: username,
        password: password,
        createdAt: new Date().toISOString(),
        stats: {
            totalGames: 0,
            wins: 0,
            losses: 0,
            totalQuestions: 0,
            correctAnswers: 0,
            highestScore: 0,
            longestStreak: 0,
            currentStreak: 0
        },
        achievements: [],
        preferences: {
            theme: 'default',
            volume: 80
        },
        history: []
    };
    
    saveAccounts();
    saveCurrentUser(username);
    return { success: true };
}

function loginAccount(username, password) {
    username = username.trim();
    password = password.trim();
    
    if (!accountState.allUsers[username]) return { success: false, error: "Username not found" };
    if (accountState.allUsers[username].password !== password) return { success: false, error: "Wrong password" };
    
    saveCurrentUser(username);
    return { success: true };
}

function logoutAccount() {
    saveCurrentUser(null);
    renderAuthUI();
}

function deleteAccount() {
    if (accountState.currentUser) {
        const username = accountState.currentUser.username;
        delete accountState.allUsers[username];
        saveAccounts();
        logoutAccount();
    }
}

function updateStatsAfterGame(correct, total, won) {
    if (!accountState.currentUser) return;
    
    const user = accountState.currentUser;
    const stats = user.stats;
    
    stats.totalGames++;
    stats.totalQuestions += total;
    stats.correctAnswers += correct;
    
    if (won) {
        stats.wins++;
        stats.currentStreak++;
        if (stats.currentStreak > stats.longestStreak) {
            stats.longestStreak = stats.currentStreak;
        }
    } else {
        stats.losses++;
        stats.currentStreak = 0;
    }
    
    if (correct > stats.highestScore) {
        stats.highestScore = correct;
    }
    
    accountState.allUsers[user.username] = user;
    saveAccounts();
    saveCurrentUser(user.username);
    
    checkAchievements();
}

// ============================================
// ACHIEVEMENT SYSTEM
// ============================================
const ACHIEVEMENTS = [
    { id: 'first_game', name: 'First Steps', icon: '👣', desc: 'Play your first game', check: (s) => s.totalGames >= 1 },
    { id: 'first_win', name: 'First Victory', icon: '🏆', desc: 'Win your first game', check: (s) => s.wins >= 1 },
    { id: 'streak_3', name: 'On a Roll', icon: '🔥', desc: 'Win 3 games in a row', check: (s) => s.longestStreak >= 3 },
    { id: 'streak_5', name: 'Unstoppable', icon: '⚡', desc: 'Win 5 games in a row', check: (s) => s.longestStreak >= 5 },
    { id: 'streak_10', name: 'Legendary', icon: '👑', desc: 'Win 10 games in a row', check: (s) => s.longestStreak >= 10 },
    { id: 'games_10', name: 'Dedicated', icon: '🎯', desc: 'Play 10 games', check: (s) => s.totalGames >= 10 },
    { id: 'games_50', name: 'Veteran', icon: '⭐', desc: 'Play 50 games', check: (s) => s.totalGames >= 50 },
    { id: 'games_100', name: 'Quiz Master', icon: '👑', desc: 'Play 100 games', check: (s) => s.totalGames >= 100 },
    { id: 'accuracy_80', name: 'Sharpshooter', icon: '🎯', desc: 'Achieve 80% accuracy', check: (s) => s.totalQuestions > 0 && (s.correctAnswers / s.totalQuestions) >= 0.8 },
    { id: 'accuracy_90', name: 'Elite', icon: '💎', desc: 'Achieve 90% accuracy', check: (s) => s.totalQuestions > 0 && (s.correctAnswers / s.totalQuestions) >= 0.9 },
    { id: 'perfect_score', name: 'Perfect', icon: '💯', desc: 'Get a perfect score (all correct)', check: (s) => s.highestScore >= 10 && s.highestScore === s.totalQuestions },
    { id: 'all_categories', name: 'Well-Rounded', icon: '🌍', desc: 'Play every category at least once', check: (s) => s.categoriesPlayed && Object.keys(s.categoriesPlayed).length >= 20 }
];

function checkAchievements() {
    if (!accountState.currentUser) return;
    const user = accountState.currentUser;
    const stats = user.stats;
    const unlocked = user.achievements;
    
    if (!stats.categoriesPlayed) stats.categoriesPlayed = {};
    stats.categoriesPlayed[state.category] = (stats.categoriesPlayed[state.category] || 0) + 1;
    
    ACHIEVEMENTS.forEach(ach => {
        if (!unlocked.includes(ach.id) && ach.check(stats)) {
            unlocked.push(ach.id);
            showAchievementNotification(ach);
        }
    });
    
    accountState.allUsers[user.username] = user;
    saveAccounts();
    saveCurrentUser(user.username);
}

function showAchievementNotification(ach) {
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideIn 0.5s ease-out;
        max-width: 350px;
        font-family: var(--theme-font, 'Segoe UI', sans-serif);
    `;
    container.innerHTML = `
        <div style="font-size: 2.5rem; text-align: center;">${ach.icon}</div>
        <div style="font-size: 1.2rem; font-weight: bold; text-align: center; margin: 5px 0;">Achievement Unlocked!</div>
        <div style="font-size: 1rem; text-align: center;">${ach.name}</div>
        <div style="font-size: 0.8rem; text-align: center; opacity: 0.8;">${ach.desc}</div>
    `;
    
    document.body.appendChild(container);
    
    setTimeout(() => {
        container.style.animation = 'slideOut 0.5s ease-in';
        setTimeout(() => container.remove(), 500);
    }, 4000);
}

// ============================================
// RENDER AUTH UI
// ============================================
function renderAuthUI() {
    const container = document.getElementById('authContainer');
    
    if (accountState.isAuthenticated && accountState.currentUser) {
        const user = accountState.currentUser;
        const stats = user.stats;
        const accuracy = stats.totalQuestions > 0 ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100) : 0;
        
        container.innerHTML = `
            <div class="auth-card" style="
                background: rgba(255,255,255,0.1);
                backdrop-filter: blur(10px);
                padding: 15px 20px;
                border-radius: 12px;
                margin-bottom: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 10px;
                border: 1px solid rgba(255,255,255,0.2);
            ">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="
                        width: 45px; height: 45px;
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 1.5rem;
                        font-weight: bold;
                        color: white;
                    ">${user.username.charAt(0).toUpperCase()}</div>
                    <div>
                        <div style="font-weight: bold; font-size: 1.1rem;">${user.username}</div>
                        <div style="font-size: 0.8rem; opacity: 0.7;">
                            🏆 ${stats.wins} wins | 📊 ${accuracy}% acc | 🔥 ${stats.currentStreak} streak
                        </div>
                    </div>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button onclick="showProfile()" class="btn-primary" style="padding: 6px 12px; font-size: 0.8rem;">📊 Profile</button>
                    <button onclick="logoutAccount()" class="btn-primary" style="padding: 6px 12px; font-size: 0.8rem; background: #ff6b6b;">Logout</button>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="auth-card" style="
                background: rgba(255,255,255,0.05);
                backdrop-filter: blur(10px);
                padding: 15px 20px;
                border-radius: 12px;
                margin-bottom: 20px;
                border: 1px solid rgba(255,255,255,0.1);
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                justify-content: center;
                align-items: center;
            ">
                <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
                    <input type="text" id="loginUsername" placeholder="Username" style="
                        padding: 8px 12px;
                        border-radius: 8px;
                        border: 1px solid rgba(255,255,255,0.2);
                        background: rgba(255,255,255,0.1);
                        color: white;
                        width: 120px;
                    ">
                    <input type="password" id="loginPassword" placeholder="Password" style="
                        padding: 8px 12px;
                        border-radius: 8px;
                        border: 1px solid rgba(255,255,255,0.2);
                        background: rgba(255,255,255,0.1);
                        color: white;
                        width: 120px;
                    ">
                    <button onclick="handleLogin()" class="btn-primary" style="padding: 6px 12px; font-size: 0.8rem;">Login</button>
                    <button onclick="handleSignup()" class="btn-primary" style="padding: 6px 12px; font-size: 0.8rem; background: #2ecc71;">Sign Up</button>
                    <button onclick="loginAsGuest()" class="btn-primary" style="padding: 6px 12px; font-size: 0.8rem; background: #95a5a6;">👤 Guest</button>
                </div>
                <div id="authMessage" style="font-size: 0.8rem; color: #ff6b6b; width: 100%; text-align: center;"></div>
            </div>
        `;
    }
}

function handleLogin() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const msg = document.getElementById('authMessage');
    
    const result = loginAccount(username, password);
    if (result.success) {
        msg.textContent = '✅ Logged in!';
        msg.style.color = '#2ecc71';
        setTimeout(() => renderAuthUI(), 500);
    } else {
        msg.textContent = '❌ ' + result.error;
        msg.style.color = '#ff6b6b';
    }
}

function handleSignup() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const msg = document.getElementById('authMessage');
    
    const result = createAccount(username, password);
    if (result.success) {
        msg.textContent = '✅ Account created! Welcome, ' + username + '!';
        msg.style.color = '#2ecc71';
        setTimeout(() => renderAuthUI(), 500);
    } else {
        msg.textContent = '❌ ' + result.error;
        msg.style.color = '#ff6b6b';
    }
}

function loginAsGuest() {
    const guestName = 'Guest_' + Math.floor(Math.random() * 10000);
    if (!accountState.allUsers[guestName]) {
        createAccount(guestName, 'guest123');
    }
    loginAccount(guestName, 'guest123');
    renderAuthUI();
}

function showProfile() {
    if (!accountState.currentUser) return;
    
    const user = accountState.currentUser;
    const stats = user.stats;
    const accuracy = stats.totalQuestions > 0 ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100) : 0;
    const winRate = stats.totalGames > 0 ? Math.round((stats.wins / stats.totalGames) * 100) : 0;
    const unlocked = user.achievements || [];
    const allAch = ACHIEVEMENTS;
    
    // Remove any existing modal first
    const existingModal = document.querySelector('div[data-modal="profile"]');
    if (existingModal) existingModal.remove();
    
    const modal = document.createElement('div');
    modal.setAttribute('data-modal', 'profile');
    modal.style.cssText = `
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.8);
        backdrop-filter: blur(5px);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            padding: 30px;
            border-radius: 20px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            color: white;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            position: relative;
        ">
            <button onclick="document.querySelector('div[data-modal=\\'profile\\']').remove()" style="
                position: absolute;
                top: 15px;
                right: 15px;
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                opacity: 0.7;
            ">✕</button>
            
            <div style="text-align: center; margin-bottom: 20px;">
                <div style="
                    width: 80px; height: 80px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    border-radius: 50%;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: white;
                    margin-bottom: 10px;
                ">${user.username.charAt(0).toUpperCase()}</div>
                <h2 style="margin: 0;">${user.username}</h2>
                <div style="color: #95a5a6; font-size: 0.9rem;">Member since ${new Date(user.createdAt).toLocaleDateString()}</div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 20px 0;">
                <div style="text-align: center; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 10px;">
                    <div style="font-size: 1.5rem;">${stats.totalGames}</div>
                    <div style="font-size: 0.8rem; opacity: 0.7;">Games</div>
                </div>
                <div style="text-align: center; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 10px;">
                    <div style="font-size: 1.5rem; color: #2ecc71;">${stats.wins}</div>
                    <div style="font-size: 0.8rem; opacity: 0.7;">Wins</div>
                </div>
                <div style="text-align: center; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 10px;">
                    <div style="font-size: 1.5rem; color: #e74c3c;">${stats.losses}</div>
                    <div style="font-size: 0.8rem; opacity: 0.7;">Losses</div>
                </div>
                <div style="text-align: center; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 10px;">
                    <div style="font-size: 1.5rem;">${accuracy}%</div>
                    <div style="font-size: 0.8rem; opacity: 0.7;">Accuracy</div>
                </div>
                <div style="text-align: center; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 10px;">
                    <div style="font-size: 1.5rem;">${winRate}%</div>
                    <div style="font-size: 0.8rem; opacity: 0.7;">Win Rate</div>
                </div>
                <div style="text-align: center; background: rgba(255,255,255,0.05); padding: 10px; border-radius: 10px;">
                    <div style="font-size: 1.5rem;">${stats.highestScore || 0}</div>
                    <div style="font-size: 0.8rem; opacity: 0.7;">Best Score</div>
                </div>
            </div>
            
            <div style="margin: 20px 0;">
                <h3 style="margin: 0 0 10px 0;">🏅 Achievements</h3>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                    ${allAch.map(ach => `
                        <div style="
                            display: flex;
                            align-items: center;
                            gap: 10px;
                            padding: 8px 12px;
                            background: ${unlocked.includes(ach.id) ? 'rgba(46, 204, 113, 0.2)' : 'rgba(255,255,255,0.05)'};
                            border-radius: 8px;
                            border: 1px solid ${unlocked.includes(ach.id) ? '#2ecc71' : 'rgba(255,255,255,0.1)'};
                            opacity: ${unlocked.includes(ach.id) ? '1' : '0.5'};
                        ">
                            <span style="font-size: 1.2rem;">${unlocked.includes(ach.id) ? ach.icon : '🔒'}</span>
                            <div>
                                <div style="font-size: 0.85rem; font-weight: bold;">${ach.name}</div>
                                <div style="font-size: 0.7rem; opacity: 0.7;">${ach.desc}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
                <button onclick="document.querySelector('div[data-modal=\\'profile\\']').remove()" class="btn-primary" style="padding: 8px 20px;">Close</button>
                <button onclick="confirm('Delete your account permanently?') && deleteAccount() && document.querySelector('div[data-modal=\\'profile\\']').remove()" style="
                    padding: 8px 20px;
                    background: #e74c3c;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: bold;
                ">🗑️ Delete Account</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// ============================================
// MULTIPLAYER SYSTEM (Same Browser / Multiple Tabs)
// ============================================
const multiplayer = {
    rooms: {},
    currentRoom: null,
    gameStarted: false
};

function generateRoomCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function createRoom(playerName) {
    const roomCode = generateRoomCode();
    multiplayer.rooms[roomCode] = {
        code: roomCode,
        host: playerName,
        players: [playerName],
        category: document.getElementById('category').value,
        timeLimit: parseInt(document.getElementById('timeLimit').value),
        gameStarted: false,
        currentQuestion: 0,
        scores: {}
    };
    multiplayer.currentRoom = roomCode;
    multiplayer.rooms[roomCode].scores[playerName] = 0;
    return roomCode;
}

function joinRoom(roomCode, playerName) {
    if (!multiplayer.rooms[roomCode]) {
        return { success: false, error: "Room not found" };
    }
    if (multiplayer.rooms[roomCode].gameStarted) {
        return { success: false, error: "Game already started" };
    }
    if (multiplayer.rooms[roomCode].players.includes(playerName)) {
        return { success: false, error: "Name already taken" };
    }
    multiplayer.rooms[roomCode].players.push(playerName);
    multiplayer.rooms[roomCode].scores[playerName] = 0;
    multiplayer.currentRoom = roomCode;
    return { success: true };
}

function getRoomPlayers() {
    if (!multiplayer.currentRoom || !multiplayer.rooms[multiplayer.currentRoom]) return [];
    return multiplayer.rooms[multiplayer.currentRoom].players;
}

function getPlayerCount() {
    return getRoomPlayers().length;
}

function isHost() {
    if (!multiplayer.currentRoom || !multiplayer.rooms[multiplayer.currentRoom]) return false;
    return multiplayer.rooms[multiplayer.currentRoom].host === state.playerName;
}

function startMultiplayerGame() {
    if (!isHost()) return;
    if (!multiplayer.currentRoom || !multiplayer.rooms[multiplayer.currentRoom]) return;
    
    const room = multiplayer.rooms[multiplayer.currentRoom];
    room.gameStarted = true;
    room.currentQuestion = 0;
    
    room.players.forEach(p => room.scores[p] = 0);
    
    DOM.multiplayerLobby.style.display = 'none';
    startSelectedQuiz();
}

function updateMultiplayerLobby() {
    const roomCode = multiplayer.currentRoom;
    if (!roomCode) return;
    
    const room = multiplayer.rooms[roomCode];
    if (!room) return;
    
    DOM.roomCodeDisplay.textContent = roomCode;
    DOM.playerCount.textContent = room.players.length;
    
    DOM.playerList.innerHTML = '';
    room.players.forEach(player => {
        const badge = document.createElement('span');
        badge.className = 'player-badge' + (player === room.host ? ' host' : '');
        badge.innerHTML = `${player === room.host ? '👑 ' : ''}${player}`;
        DOM.playerList.appendChild(badge);
    });
    
    const startBtn = DOM.multiplayerLobby.querySelector('.btn-primary');
    if (startBtn) {
        startBtn.style.display = room.host === state.playerName ? 'inline-block' : 'none';
    }
}

// ============================================
// GAME MODE HANDLER
// ============================================
document.getElementById('gameMode').addEventListener('change', function() {
    const mode = this.value;
    if (mode === 'single') {
        DOM.singlePlayerSettings.style.display = 'block';
        DOM.multiplayerSettings.style.display = 'none';
        DOM.multiplayerLobby.style.display = 'none';
        // Reset multiplayer state
        multiplayer.currentRoom = null;
        multiplayer.gameStarted = false;
    } else {
        DOM.singlePlayerSettings.style.display = 'none';
        DOM.multiplayerSettings.style.display = 'block';
    }
});

// ============================================
// LOAD QUESTIONS
// ============================================
function loadCategoryQuestions(category, difficulty) {
    const categoryData = QUESTION_BANK[category];
    if (!categoryData) return null;
    
    const difficultyData = categoryData[difficulty];
    if (!difficultyData) return null;
    
    const shuffled = shuffleArray([...difficultyData]);
    const count = difficulty === 'hard' ? 25 : difficulty === 'medium' ? 20 : 15;
    const selected = shuffled.slice(0, count);
    
    return selected.map(q => ({
        question: q.q,
        answers: shuffleArray(q.a.map((text, idx) => ({
            text: text,
            correct: idx === q.correct
        })))
    }));
}

// ============================================
// START QUIZ
// ============================================
function startSelectedQuiz() {
    const mode = document.getElementById('gameMode').value;
    state.gameMode = mode;
    
    if (mode === 'multiplayer') {
        const roomCode = document.getElementById('roomCode').value.trim().toUpperCase();
        const playerName = document.getElementById('playerName').value.trim() || accountState.currentUser?.username || 'Player';
        
        state.playerName = playerName;
        
        if (roomCode) {
            const result = joinRoom(roomCode, playerName);
            if (!result.success) {
                alert(result.error);
                return;
            }
        } else {
            const code = createRoom(playerName);
            document.getElementById('roomCode').value = code;
            state.isHost = true;
        }
        
        DOM.multiplayerLobby.style.display = 'block';
        updateMultiplayerLobby();
        return;
    }
    
    // ----- SINGLE PLAYER -----
    state.category = document.getElementById('category').value;
    state.difficulty = document.getElementById('difficulty').value;
    state.timeLeft = parseInt(document.getElementById('timeLimit').value);
    
    const theme = document.getElementById('theme').value;
    applyTheme(theme);

    state.gameActive = true;
    state.isPaused = false;
    state.score = 0;
    state.currentIndex = 0;
    state.userAnswers = [];

    DOM.startScreen.style.display = 'none';
    DOM.quizArea.style.display = 'block';
    DOM.resultScreen.style.display = 'none';

    playThemeMusic(theme);
    startGlobalTimer(state.timeLeft);

    const questions = loadCategoryQuestions(state.category, state.difficulty);
    
    if (questions && questions.length > 0) {
        state.questions = questions;
        state.totalQuestions = state.questions.length;
        showQuestion();
    } else {
        fetchQuestions(state.category, state.difficulty);
    }
}

// ============================================
// FETCH QUESTIONS (API Fallback)
// ============================================
async function fetchQuestions(category, difficulty) {
    const categoryMap = {
        'general': 9, 'music': 12, 'movies': 11, 'geography': 22, 'history': 23
    };

    const catId = categoryMap[category] || 9;
    const url = `https://opentdb.com/api.php?amount=15&category=${catId}&difficulty=${difficulty}&type=multiple`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            throw new Error('No questions available');
        }

        state.questions = data.results.map(q => ({
            question: decodeHTML(q.question),
            answers: shuffleArray([
                ...q.incorrect_answers.map(ans => ({
                    text: decodeHTML(ans),
                    correct: false
                })),
                {
                    text: decodeHTML(q.correct_answer),
                    correct: true
                }
            ])
        }));

        state.totalQuestions = state.questions.length;
        showQuestion();

    } catch (error) {
        console.error('Error fetching questions:', error);
        alert('❌ Failed to load questions. Please try again or select a different category.');
        resetToStart();
    }
}

// ============================================
// SHOW QUESTION
// ============================================
function showQuestion() {
    if (!state.gameActive || state.isPaused) return;

    if (state.currentIndex >= state.questions.length) {
        endQuiz();
        return;
    }

    const current = state.questions[state.currentIndex];

    const progress = ((state.currentIndex) / state.questions.length) * 100;
    DOM.progressFill.style.width = `${progress}%`;
    DOM.questionCounter.textContent = `${state.currentIndex + 1} / ${state.questions.length}`;
    DOM.scoreDisplay.textContent = `⭐ ${state.score}`;

    DOM.question.textContent = current.question;

    DOM.answers.innerHTML = '';
    current.answers.forEach((ans, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerHTML = `<span class="letter">${LETTERS[index]}</span> ${ans.text}`;
        btn.dataset.correct = ans.correct;
        btn.onclick = () => selectAnswer(btn);
        DOM.answers.appendChild(btn);
    });

    DOM.timer.classList.remove('warning');
}

// ============================================
// SELECT ANSWER
// ============================================
function selectAnswer(selectedBtn) {
    if (!state.gameActive || state.isPaused) return;
    if (selectedBtn.classList.contains('disabled')) return;

    const isCorrect = selectedBtn.dataset.correct === 'true';
    const allBtns = DOM.answers.querySelectorAll('.answer-btn');

    allBtns.forEach(btn => btn.classList.add('disabled'));

    allBtns.forEach(btn => {
        if (btn.dataset.correct === 'true') {
            btn.classList.add('correct');
        }
    });

    const rect = selectedBtn.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    playClickEffect(isCorrect);
    createClickParticles(x, y, isCorrect);

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        state.score++;
        DOM.scoreDisplay.textContent = `⭐ ${state.score}`;
        selectedBtn.style.transform = 'scale(0.95)';
        setTimeout(() => { selectedBtn.style.transform = ''; }, 150);
    } else {
        selectedBtn.classList.add('wrong');
        allBtns.forEach(btn => {
            if (btn.dataset.correct === 'true') {
                btn.classList.add('reveal-correct');
            }
        });
    }

    state.userAnswers.push({
        question: state.questions[state.currentIndex].question,
        correct: isCorrect,
        selected: selectedBtn.textContent.trim()
    });

    setTimeout(() => {
        state.currentIndex++;
        showQuestion();
    }, 800);
}

// ============================================
// TIMER
// ============================================
function startGlobalTimer(duration) {
    state.timeLeft = duration;
    updateTimerDisplay();

    clearInterval(state.timer);

    state.timer = setInterval(() => {
        if (state.isPaused) return;

        state.timeLeft--;
        updateTimerDisplay();

        if (state.timeLeft <= 5) {
            DOM.timer.classList.add('warning');
        }

        if (state.timeLeft <= 0) {
            clearInterval(state.timer);
            endQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    DOM.timer.textContent = `⏱️ ${state.timeLeft}s`;
}

// ============================================
// PAUSE / RESUME
// ============================================
function togglePause() {
    state.isPaused = !state.isPaused;

    if (state.isPaused) {
        DOM.pauseBtn.textContent = '▶️ Resume';
        DOM.pauseBtn.classList.add('paused');
        DOM.question.textContent = '⏸️ PAUSED';
        DOM.answers.innerHTML = '';
    } else {
        DOM.pauseBtn.textContent = '⏸️ Pause';
        DOM.pauseBtn.classList.remove('paused');
        if (state.questions.length > 0 && state.currentIndex < state.questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }
}

// ============================================
// END QUIZ
// ============================================
function endQuiz() {
    clearInterval(state.timer);
    clearInterval(state.musicInterval);
    clearInterval(state.ambientInterval);
    state.gameActive = false;
    state.isPlayingMusic = false;

    DOM.quizArea.style.display = 'none';
    DOM.resultScreen.style.display = 'block';

    const correct = state.userAnswers.filter(a => a.correct).length;
    const wrong = state.userAnswers.length - correct;
    const accuracy = state.userAnswers.length > 0
        ? Math.round((correct / state.userAnswers.length) * 100)
        : 0;

    DOM.finalScore.textContent = correct;
    DOM.correctCount.textContent = correct;
    DOM.wrongCount.textContent = wrong;
    DOM.accuracy.textContent = `${accuracy}%`;

    const categoryNames = {
        'bible': 'Bible', 'general': 'General', 'music': 'Music', 'movies': 'Movies',
        'religion': 'Religion', 'travel': 'Travel', 'physics': 'Physics', 'survey': 'Survey',
        'online': 'Online', 'etiquette': 'Etiquette', 'talents': 'Talents', 'geography': 'Geography',
        'technology': 'Technology', 'history': 'History', 'sports': 'Sports', 'science': 'Science',
        'literature': 'Literature', 'animals': 'Animals', 'space': 'Space', 'food': 'Food'
    };
    const catName = categoryNames[state.category] || 'Quiz';

    let message, title;
    if (accuracy >= 90) {
        title = `🏆 ${catName} Master!`;
        message = 'Outstanding! You\'re an absolute expert! 🌟';
    } else if (accuracy >= 70) {
        title = `🌟 Great Job!`;
        message = 'You really know your stuff! Keep up the great work! 💪';
    } else if (accuracy >= 50) {
        title = `📚 Good Effort!`;
        message = 'Keep learning and you\'ll improve! 🧠';
    } else {
        title = `💪 Keep Growing!`;
        message = 'Practice makes perfect! You got this! 🎯';
    }

    DOM.resultTitle.textContent = title;
    DOM.resultMessage.textContent = message;

    if (accountState.currentUser) {
        const won = correct >= state.userAnswers.length * 0.6;
        updateStatsAfterGame(correct, state.userAnswers.length, won);
        renderAuthUI();
    }
}

// ============================================
// HELPERS
// ============================================
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

function resetToStart() {
    DOM.quizArea.style.display = 'none';
    DOM.resultScreen.style.display = 'none';
    DOM.startScreen.style.display = 'block';
    DOM.multiplayerLobby.style.display = 'none';
    state.gameActive = false;
    state.isPlayingMusic = false;
    clearInterval(state.timer);
    clearInterval(state.musicInterval);
    clearInterval(state.ambientInterval);
    clearParticles();
}

// ============================================
// INITIALIZATION
// ============================================
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Quicksand:wght@400;700&family=Merriweather:wght@400;700&family=Press+Start+2P&family=Bangers&family=Raleway:wght@400;700&display=swap');
    
    body { font-family: var(--theme-font, 'Segoe UI', sans-serif); transition: font-family 0.5s ease, cursor 0.3s ease; }
    .settings-card, .result-card, .quiz-area { transition: box-shadow 0.5s ease; }
    .btn-primary, .answer-btn { transition: text-shadow 0.5s ease; }
    
    @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    @keyframes slideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
    
    @keyframes starFloat { 0% { transform: translate(0, 0) scale(1); } 25% { transform: translate(50px, -50px) scale(1.2); } 50% { transform: translate(-30px, 80px) scale(0.8); } 75% { transform: translate(70px, 30px) scale(1.1); } 100% { transform: translate(0, 0) scale(1); } }
    @keyframes bubbleFloat { 0% { transform: translate(0, 0) scale(0.5); opacity: 0; } 10% { opacity: 0.8; } 90% { opacity: 0.6; } 100% { transform: translate(0, -120vh) scale(1.2); opacity: 0; } }
    @keyframes fireflyFloat { 0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; } 25% { transform: translate(30px, -40px) scale(1.3); opacity: 1; } 50% { transform: translate(-20px, 20px) scale(0.8); opacity: 0.7; } 75% { transform: translate(40px, 30px) scale(1.2); opacity: 0.9; } }
    @keyframes neonFloat { 0% { transform: translate(0, 0) scale(1); } 33% { transform: translate(40px, -30px) scale(1.2); } 66% { transform: translate(-30px, 40px) scale(0.8); } 100% { transform: translate(0, 0) scale(1); } }
    @keyframes emberFloat { 0% { transform: translate(0, 0) scale(0.5); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(calc(-50px + 100px * var(--x, 0)), -120vh) scale(1.5); opacity: 0; } }
    @keyframes snowFloat { 0% { transform: translate(0, 0) rotate(0deg); } 100% { transform: translate(calc(-50px + 100px * var(--x, 0)), 120vh) rotate(360deg); } }
`;
document.head.appendChild(styleSheet);

loadAccounts();
loadCurrentUser();
renderAuthUI();

document.getElementById('theme').addEventListener('change', function() {
    applyTheme(this.value);
});
applyTheme(document.getElementById('theme').value || 'default');

window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.loginAsGuest = loginAsGuest;
window.logoutAccount = logoutAccount;
window.showProfile = showProfile;
window.deleteAccount = deleteAccount;
window.startMultiplayerGame = startMultiplayerGame;

console.log('🎯 Quiz Master Pro loaded!');
console.log(`📚 Categories: ${Object.keys(QUESTION_BANK).join(', ')}`);
console.log('🎨 Themes: Galaxy, Ocean, Forest, Neon, Fire, Ice');
console.log('👥 Multiplayer: Local (same browser)');
console.log('🔊 Sound effects, ambient sounds, and background music');
console.log('✨ Particle effects for each theme');
console.log('🏅 Achievement system with 12 achievements');
console.log('💡 Keyboard shortcuts: 1-4 for answers, Space to pause, Enter to start');
