const AnchorToGitHub = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open github.com"
      className="w-fit cursor-pointer rounded-md border border-graphite bg-green from-light-green to-green px-2 py-[0.1rem] font-mono text-sm hover:bg-gradient-to-t lg:text-xs"
    >
      View code in GitHub
    </a>
  );
};
export default AnchorToGitHub;
