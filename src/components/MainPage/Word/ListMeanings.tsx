import { Meaning } from "../../../types";
import Typography from "../../Typography";
import Example from "./Example";
import Semantics from "./Semantics";
import WordSection from "./WordSection";

interface ListMeaningsProps {
  className?: string;
  meanings: Meaning[];
}

const ListMeanings: React.FC<ListMeaningsProps> = ({ className, meanings }) => {
  const partsOfSpeech = meanings.map((meaning) => meaning.partOfSpeech);
  const definitions = meanings.map((meaning) => meaning.definitions);
  const synonyms = meanings.map((meaning) => meaning.synonyms);
  const antonyms = meanings.map((meaning) => meaning.antonyms);

  const renderSemantics = (synonyms: string[], antonyms: string[]) => {
    return (
      <>
        {synonyms.length !== 0 && (
          <Semantics semanticName="Synonyms" semantics={synonyms} />
        )}

        {antonyms.length !== 0 && (
          <Semantics semanticName="Antonyms" semantics={antonyms} />
        )}
      </>
    );
  };

  return (
    <div className={className}>
      {partsOfSpeech.map((partOfSpeech, index) => {
        return (
          <WordSection name={partOfSpeech} key={index}>
            <Typography>
              <Typography variant="headingS" className="text-grey mt-8">
                Meaning
              </Typography>
              {definitions[index].map((definition, index) => {
                return (
                  <>
                    <li
                      className="marker:text-purple marker:text-[15px] my-4 ml-10"
                      key={index}
                    >
                      {definition.definition}
                      {definition.example && (
                        <Example example={definition.example} />
                      )}
                      {renderSemantics(
                        definition.synonyms,
                        definition.antonyms
                      )}
                    </li>
                  </>
                );
              })}
            </Typography>
            {renderSemantics(synonyms[index], antonyms[index])}
          </WordSection>
        );
      })}
    </div>
  );
};

export default ListMeanings;
