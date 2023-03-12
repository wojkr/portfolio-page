const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://www.linkedin.com/in/wojciech-w-krupa/"
        target="_blank"
        className="hover:opacity-50 transition duration-500"
        rel="noreferrer"
      >
        <img src="/assets/linkedin.png" alt="linkedin-link" />
      </a>

      <a
        href="https://github.com/wojkr"
        target="_blank"
        className="hover:opacity-50 transition duration-500 h-[30px] w-[30px]"
        rel="noreferrer"
      >
        <img src="/assets/github-mark-white.png" alt="instagram-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
