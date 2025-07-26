import { useState } from "react";
import axios from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";

export function useDeleteApi<T = any>(baseUrl: string, requireAuth = true) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const { getToken } = useAuth();

  const remove = async (id: string | undefined) => {
    setIsPending(true);
    setError(null);
    try {
      const token = requireAuth ? await getToken() : null;
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const url = id ?  `${baseUrl}/${id}` : baseUrl;
      const response = await axios.delete<T>(url, { headers });
      setData(response.data);
      return response.data;
    } catch (err: any) {
      setError(err?.response?.data?.message || err.message);
      return null;
    } finally {
      setIsPending(false);
    }
  };

  return { data, error, isPending, remove };
}
