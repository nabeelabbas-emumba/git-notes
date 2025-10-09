import { useQuery } from "@tanstack/react-query";
import { PUBLIC_GIST_QUERY_KEY } from "../constants/util";
import { ViewType } from "../store/useGistStore";
import { githubGistService } from "../services/gistService";

export const useGists = (
  page: number,
  perPage: number = 10,
  viewType: ViewType,
) => {
  return useQuery({
    queryKey: [PUBLIC_GIST_QUERY_KEY, page, perPage, viewType],
    queryFn: async () => {
      if (viewType === "starred") {
        return githubGistService.starredGists(page, perPage);
      } else {
        return githubGistService.publicGists(page, perPage);
      }
    },
    // placeholderData: (prevData, prevQuery) => prevData,
    // staleTime: 1000 * 60 * 1,
    staleTime: 0, // always stale → triggers new API call
    refetchOnMount: "always", // refetch even if cached
    refetchOnWindowFocus: false, // optional: don’t refetch when focusing window
    refetchOnReconnect: false, // optional: don’t refetch on reconnect
  });
};
