import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const fetchPublicGists = async (page: number, perPage: number) => {
  const response = await axios.get(
    `https://api.github.com/gists/public?page=${page}&per_page=${perPage}`,
    { validateStatus: () => true } 
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch gists");
  }

  const data = response.data.map((gist: any) => {
    return { 
        ...gist,
         notebook : Object.keys(gist?.files),
         keyword: gist?.description.length ? gist?.description.split(' ')[0] : 'keyword',
         updated_at : dayjs(gist?.updated_at).fromNow()}
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
