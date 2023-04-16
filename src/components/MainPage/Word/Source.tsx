import Icon from "../../Icon";
import Typography from "../../Typography";

interface SourceProps {
  sourceUrls?: string[];
}

const Source: React.FC<SourceProps> = ({ sourceUrls }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-8  border-t-[1px] border-light-grey dark:border-dark-grey py-8">
      <Typography
        variant="bodyS"
        className="text-grey underline sm:no-underline"
      >
        Source
      </Typography>
      <div>
        {sourceUrls?.map((sourceUrl, index) => {
          return (
            <Typography
              variant="bodyS"
              key={index}
              className="text-black dark:text-white cursor-pointer underline sm:no-underline"
            >
              <a
                className="flex flex-row gap-2 "
                target="_blank"
                href={sourceUrl}
              >
                {sourceUrl} <Icon.NewWindow />
              </a>
            </Typography>
          );
        })}
      </div>
    </div>
  );
};

export default Source;
