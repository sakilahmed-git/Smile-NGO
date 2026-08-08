import { useState, useEffect } from "react";

// TODO: implement useTheme
export function useTheme() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch logic goes here
    setLoading(false);
  }, []);

  return { data, loading };
}
