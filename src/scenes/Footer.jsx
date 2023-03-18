import SocialMediaIcons from "../components/SocialMediaIcons";
const Footer = () => {
  return (
    <footer className="h-64 bg-primary-2 bg-gradient-1 pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons color="dark-1" />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-dark-1">
            WK{" "}
          </p>
          <p className="font-playfair text-md text-dark-1">
            &copy;2023 WOJCIECH KRUPA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
