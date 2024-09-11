import { useNavigate } from "react-router-dom";
import "./Content.css";

const Content = () => {
  const navigate = useNavigate();

  return (
    <div className="content_wrapper">
      <div className="content_text">
        <h3>
          Empower Your Content With <span>Oyster’s</span> Intelligence
        </h3>
        <p>
          What’s common between corporates looking to establish successful B2B
          synergies and SEO experts, and bloggers trying to prove their nuance
          in the writing industry? They all swear by the power of precise,
          error-free, and plagiarism free written content!
        </p>
        <button onClick={() => navigate("/auth")}>Try Oyster</button>
      </div>
    </div>
  );
};

export default Content;
