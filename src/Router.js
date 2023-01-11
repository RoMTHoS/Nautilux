import InterventionsList from "./containers/InterventionsList";
import Intervention from "./containers/Intervention";
import InterventionForm from "./containers/InterventionForm";
import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<InterventionsList />} />
      <Route path="/intervention/:interventionId" element={<Intervention />} />
      <Route path="/create" element={<InterventionForm />} />
    </Routes>
  );
}

export default Router;
