import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useGistStore, ViewType } from "../store/useGistStore";
import { getHeaders } from "../constants/api";
import { GITHUB_URL } from "../constants/util";
dayjs.extend(relativeTime);
const BASE_URL = `${GITHUB_URL}/gists`;

export const githubGistService = {
  star: async (gistId: string) => {
    await axios.put(`${BASE_URL}/${gistId}/star`, null, getHeaders());
  },

  unstar: async (gistId: string) => {
    await axios.delete(`${BASE_URL}/${gistId}/star`, getHeaders());
  },

  isStarred: async (gistId: string): Promise<boolean> => {
    try {
      await axios.get(`${BASE_URL}/${gistId}/star`, getHeaders());
      return true;
    } catch (error: any) {
      if (error.response?.status === 404) return false;
      throw error;
    }
  },

  publicGists: async (page: number, perPage: number) => {
    const response = await axios.get(
      `${BASE_URL}/public?page=${page}&per_page=${perPage}`,
      { validateStatus: () => true },
    );
    return transformGistResponse(response);
  },

  starredGist: async (page: number, perPage: number) => {
    const response = await axios.get(
      `${BASE_URL}/starred?page=${page}&per_page=${perPage}`,
      getHeaders(),
    );
    return transformGistResponse(response);
  },

  forkGist: async (gistId: string) => {
    const response = await axios.post(
      `${BASE_URL}/${gistId}/forks`,
      null,
      getHeaders(),
    );
    if (response.status !== 201) {
      throw new Error("Failed to fork gist");
    }
    return response.data;
  },

  forkedGist: async () => {
    const response = await axios.get(`${BASE_URL}`, getHeaders());
    return transformGistResponse(response);
  },

  // getForks: async (gistId: string) => {
  //   const response = await axios.get(`${BASE_URL}/${gistId}/forks`, getHeaders());
  //   if (response.status !== 200) {
  //     throw new Error("Failed to get forks");
  //   }
  //   return response.data;
  // },

  // isForkedByUser: async (gistId: string, currentUserLogin: string) => {
  //   const forks = await githubGistService.getForks(gistId);
  //   return forks.some((fork: any) => fork.owner?.login === currentUserLogin);
  // },
};

const transformGistResponse = (response: any) => {
  if (response.status !== 200) {
    throw new Error("Failed to fetch gists");
  }

  const data = response.data?.map((gist: any) => {
    return {
      ...gist,
      notebook: Object.keys(gist?.files),
      keyword: gist?.description.length
        ? gist?.description.split(" ")[0]
        : "keyword",
      updated_at: dayjs(gist?.updated_at).fromNow(),
      cardJson: Object.entries(gist).filter(
        ([key, value]) => typeof value !== "object",
      ),
    };
  });

  const linkHeader = response.headers["link"];
  let totalPages = 1;

  if (linkHeader) {
    const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);
    if (lastPageMatch) {
      totalPages = parseInt(lastPageMatch[1], 10);
    }
  }

  return { data, totalPages };
};
