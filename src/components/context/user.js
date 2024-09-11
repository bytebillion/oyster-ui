import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./auth";
import axios from "../../libs/axios";
import UpgradePlanModal from "../Pricing/UpgradePlanModal/UpgradePlanModal";
import { getDaysDiff } from "../../libs/utility";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);
const UpgradeModalContext = createContext(undefined);

export function useUpgradeModal() {
  return useContext(UpgradeModalContext);
}

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function UserContextProvider({ children }) {
  const [showupgrade, setshowupgrade] = useState(false);
  const handleupgrade = () => setshowupgrade(!showupgrade);

  const [userDetails, setUserDetails] = useState(null);
  const { isAuthenticated } = useAuth();

  const handleUser = useCallback(() => {
    if (userDetails) {
      const daysDiff = getDaysDiff(
        new Date(userDetails?.createdAt),
        new Date()
      );
      const daysLeft = 15 - daysDiff;

      daysLeft > 0 && userDetails?.subscription == null
        ? console.log(`${daysLeft} days free trial left`)
        : userDetails?.subscription == null
        ? setshowupgrade(true)
        : new Date(userDetails?.subscription.endDate) >= new Date()
        ? console.log("Subscribed")
        : console.log("Subscription Expired");
    }
  }, [userDetails]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setshowupgrade(false);
      return;
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      setshowupgrade(false);
      return;
    }

    axios.get("/api/user").then((res) => {
      if (res.status === 200) setUserDetails(res.data.data);
    });
  }, [isAuthenticated]);

  useEffect(() => {
    handleUser();
  }, [userDetails, handleUser]);

  return (
    <UserContext.Provider value={userDetails}>
      <UserDispatchContext.Provider value={setUserDetails}>
        <UpgradeModalContext.Provider value={{ showupgrade, setshowupgrade }}>
          {children}

          {showupgrade && <UpgradePlanModal handleupgrade={handleupgrade} />}
        </UpgradeModalContext.Provider>
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export { UserContext, UserDispatchContext };
export default UserContextProvider;
