import { useEffect, useState } from "react";
import { api, message } from "./api";
export function useLoad(url, initial = null) {
  const [version, setVersion] = useState(0);
  const key = url + "#" + version;
  const [result, setResult] = useState({ key: null, data: initial, error: "" });
  useEffect(() => {
    const controller = new AbortController();
    api
      .get(url, { signal: controller.signal })
      .then((r) => setResult({ key, data: r.data, error: "" }))
      .catch((e) => {
        if (!controller.signal.aborted)
          setResult({ key, data: initial, error: message(e) });
      });
    return () => controller.abort();
    // Initial data is only a placeholder; requests are determined by URL and reload version.
    // oxlint-disable-next-line react/exhaustive-deps
  }, [url, key]);
  return {
    data: result.key === key ? result.data : initial,
    error: result.key === key ? result.error : "",
    loading: result.key !== key,
    reload: () => setVersion((v) => v + 1),
  };
}
