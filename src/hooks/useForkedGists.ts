import { useQuery } from "@tanstack/react-query";
import { PUBLIC_GIST_QUERY_KEY } from "../constants/util";
import { ViewType } from "../store/useGistStore";
import { githubGistService } from "../services/gistService";

export const useForkedGists = () => {
  return useQuery({
    queryKey: [PUBLIC_GIST_QUERY_KEY],
    queryFn: () => githubGistService.forkedGist(),
    // placeholderData: (prevData, prevQuery) => prevData,
    // staleTime: 1000 * 60 * 1,
    staleTime: 0, // always stale → triggers new API call
    refetchOnMount: "always", // refetch even if cached
    refetchOnWindowFocus: false, // optional: don’t refetch when focusing window
    refetchOnReconnect: false, // optional: don’t refetch on reconnect
  });
};
