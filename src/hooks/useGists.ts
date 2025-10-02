import { useQuery } from "@tanstack/react-query";
import { fetchPublicGists } from "../services/gistService";
import { PUBLIC_GIST_QUERY_KEY } from "../constants/util";

export const useGists = (page: number, perPage: number = 10) => {
  return useQuery({
    queryKey: [PUBLIC_GIST_QUERY_KEY, page, perPage],
    queryFn: () => fetchPublicGists(page, perPage),
    placeholderData: (prevData, prevQuery) => prevData, 
    staleTime: 1000 * 60 * 1, 
  });
};
