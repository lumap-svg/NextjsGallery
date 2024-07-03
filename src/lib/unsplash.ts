// functions to interract with splash api

const headers = {
  Authorization: `Client-ID 3Qjkw0hYzfqcpcYyBSQCeKe2wAVgBwD_t9ynd-UV8Cg`,
};

export const getPhotos = async () => {
  const url = new URL(`https://api.unsplash.com/photos`);
  url.searchParams.set("per_page", "10");
  url.searchParams.set("order_by", "popular");

  return await fetch(url, { headers });
};

// get a single photo using its id
export const getPhoto = async (id: string) => {
  return await fetch(`https://api.unsplash.com/photos/${id}`, { headers });
};
