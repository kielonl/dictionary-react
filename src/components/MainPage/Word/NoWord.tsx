import Typography from "../../Typography";

const NoWord = () => {
  return (
    <div className="text-center mt-10">
      <Typography variant="headingL">😕</Typography>
      <Typography variant="headingS" className="font-bold">
        No definitions found
      </Typography>
      <Typography variant="bodyM">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </Typography>
    </div>
  );
};

export default NoWord;
