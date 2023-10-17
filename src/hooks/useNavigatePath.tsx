import { useNavigate } from "react-router-dom";

function useNavigatePath() {
  const navigate = useNavigate();

  return {
    goTo: (pathTo: string) => navigate(pathTo),
  };
}

export default useNavigatePath;
