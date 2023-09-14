import { useParams } from 'react-router-dom';

function usePageId() {
  const { id } = useParams();
  return id;
}

export { usePageId };
