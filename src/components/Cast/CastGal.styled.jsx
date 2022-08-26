import styled from '@emotion/styled';

export const CastGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 72px);
  grid-template-columns: repeat(auto-fill, minmax(154px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 16px 0;
  border-top: 1px solid #676297;
  border-bottom: 1px solid #8f7ca8;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastGalleryItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 1px;
`;

export const CastGalleryItemImage = styled.img`
  border-radius: 10px;
  width: 100%;
`;

export const CastTitle = styled.h5`
  margin: 6px;
  text-align: center;
  color: #373955;
`;

export const GalleryTitle = styled.h2`
  font-size: 12px;
  text-align: center;
  color: #373955;
`;
