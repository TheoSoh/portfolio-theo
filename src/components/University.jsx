const University = ({ universityTitle, courses }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-mono text-lg font-semibold">{universityTitle}</h2>
      <ul className="flex list-inside list-disc flex-col gap-1">
        {courses && (
          <>
            {courses.map((course, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: course }} />
            ))}
          </>
        )}
      </ul>
      <span className="h-fit w-full border-b-[1px] border-graphite" />
    </div>
  );
};

export default University;
