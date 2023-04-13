import Typography from "../../Typography";
import ListMeanings from "./ListMeanings";
import PlayButton from "./PlayButton";

const WordContent = () => {
  const word = [
    {
      word: "board",
      phonetic: "/bɔːd/",
      phonetics: [
        { text: "/bɔːd/", audio: "" },
        { text: "/bɔːɹd/", audio: "" },
      ],
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition:
                "A relatively long, wide and thin piece of any material, usually wood or similar, often for use in construction or furniture-making.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "A device (e.g., switchboard) containing electrical switches and other controls and designed to control lights, sound, telephone connections, etc.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "A flat surface with markings for playing a board game.",
              synonyms: [],
              antonyms: [],
              example:
                "Each player starts the game with four counters on the board.",
            },
            {
              definition:
                "Short for blackboard, whiteboard, chessboard, surfboard, message board (on the Internet), etc.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "A committee that manages the business of an organization, e.g., a board of directors.",
              synonyms: [],
              antonyms: [],
              example: "We have to wait to hear back from the board.",
            },
            {
              definition:
                "Regular meals or the amount paid for them in a place of lodging.",
              synonyms: [],
              antonyms: [],
              example: "Room and board",
            },
            { definition: "The side of a ship.", synonyms: [], antonyms: [] },
            {
              definition:
                "The distance a sailing vessel runs between tacks when working to windward.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "The wall that surrounds an ice hockey rink, often in plural.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "A long, narrow table, like that used in a medieval dining hall.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "Paper made thick and stiff like a board, for book covers, etc.; pasteboard.",
              synonyms: [],
              antonyms: [],
              example: "to bind a book in boards",
            },
            {
              definition: "A level or stage having a particular layout.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "A container for holding pre-dealt cards that is used to allow multiple sets of players to play the same cards.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: [],
          antonyms: [],
        },
        {
          partOfSpeech: "verb",
          definitions: [
            {
              definition:
                "To step or climb onto or otherwise enter a ship, aircraft, train or other conveyance.",
              synonyms: [],
              antonyms: ["alight", "disembark"],
              example: "It is time to board the aircraft.",
            },
            {
              definition:
                "To provide someone with meals and lodging, usually in exchange for money.",
              synonyms: [],
              antonyms: [],
              example: "to board one's horse at a livery stable",
            },
            {
              definition: "To receive meals and lodging in exchange for money.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "To capture an enemy ship by going alongside and grappling her, then invading her with a boarding party",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "To obtain meals, or meals and lodgings, statedly for compensation",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "To approach (someone); to make advances to, accost.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "To cover with boards or boarding.",
              synonyms: [],
              antonyms: [],
              example: "to board a house",
            },
            {
              definition: "To hit (someone) with a wooden board.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "To write something on a board, especially a blackboard or whiteboard.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: [],
          antonyms: ["alight", "disembark"],
        },
      ],
      license: {
        name: "CC BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
      },
      sourceUrls: ["https://en.wiktionary.org/wiki/board"],
    },
    {
      word: "board",
      phonetic: "/bɔːd/",
      phonetics: [
        { text: "/bɔːd/", audio: "" },
        { text: "/bɔːɹd/", audio: "" },
      ],
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            { definition: "A rebound.", synonyms: [], antonyms: [] },
          ],
          synonyms: [],
          antonyms: [],
        },
      ],
      license: {
        name: "CC BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
      },
      sourceUrls: ["https://en.wiktionary.org/wiki/board"],
    },
  ];
  return (
    <div>
      <div className="flex flex-row items-center justify-between mt-10">
        <Typography variant="headingL">{word[0].word}</Typography>
        <PlayButton />
      </div>
      <Typography variant="headingM" className="text-purple mb-10">
        {word[0].phonetic}
      </Typography>
      <ListMeanings meanings={word[0].meanings} />
    </div>
  );
};

export default WordContent;
