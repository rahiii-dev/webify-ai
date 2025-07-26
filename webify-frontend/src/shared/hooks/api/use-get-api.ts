import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";

export function useGetApi<T = any>(url: string, requireAuth = true, autoFetch = true) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const { getToken } = useAuth();

  const get = async () => {
    setIsPending(true);
    setError(null);
    try {
      const token = requireAuth ? await getToken() : null;
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      const response = await axios.get<T>(url, { headers });
      setData(response.data);
    } catch (err: any) {
      setError(err?.response?.data?.message || err.message);
    } finally {
      setIsPending(false);
    }
  };

  useEffect(() => {
    if (autoFetch) get();
  }, [url]);

  return { data, error, isPending, refetch: get };
}
