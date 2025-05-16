import "./style.css";
import iconHub from "./gitHub-black.svg";
const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={iconHub} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
