export interface Photo {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
}

export interface imageDetailProps {
  photo: Photo;
}

export interface PhotoDetailProps {
  params: {
    id: string;
  };
}
