import { useState, useCallback } from "react";

const useApiCall = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const BASE_URL = "http://localhost:3000";

  const apiCall = useCallback(async (
    url: string,
    method: "GET" | "POST" | "PATCH",
    body?: any
  ) => {
    setLoading(true);
    setError(null);

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    const options: RequestInit = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const API_ENDPOINT = `${BASE_URL}/${url}`;

      const response = await fetch(API_ENDPOINT, options);

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const get = useCallback(async (url: string) => {
    return apiCall(url, "GET");
  }, [apiCall]);

  const post = useCallback(async (url: string, body: any) => {
    return apiCall(url, "POST", body);
  }, [apiCall]);

  const patch = useCallback(async (url: string, body: any) => {
    return apiCall(url, "PATCH", body);
  }, [apiCall]);

  return { get, post, patch, loading, error };
};

export default useApiCall;
