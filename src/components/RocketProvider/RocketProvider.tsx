import React, { createContext, useContext, useEffect, useState } from "react";
import { useRocket } from "src/service/hooks/rocketsHooks";
import { Rocket } from "../../service/interfaces/RocketInterface";

interface RocketContextType {
  rocket: Rocket | null;
  error: Error | null;
  loading: boolean;
}
const RocketContext = createContext<RocketContextType | undefined>(undefined);

export const RocketProvider: React.FC<{
  rocketId: string;
  children: React.ReactNode;
}> = ({ rocketId, children }) => {
  const { data, error } = useRocket(rocketId);
  const [rocket, setRocket] = useState<Rocket | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (data) {
      setRocket(data);
      setLoading(false);
    } else if (error) {
      setLoading(false);
    }
  }, [data, error]);

  return (
    <RocketContext.Provider value={{ rocket, error, loading }}>
      {children}
    </RocketContext.Provider>
  );
};
export const useRocketContext = () => {
  const context = useContext(RocketContext);
  if (context === undefined) {
    throw new Error("useRocketContext must be used within a RocketProvider");
  }
  return context;
};
