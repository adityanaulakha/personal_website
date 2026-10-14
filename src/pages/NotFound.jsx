import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('Not found');
  return (
    <div className="py-16">
      <p className="text-sm text-soft">404</p>
      <h1 className="mt-1 text-2xl font-bold text-foreground">Nothing here.</h1>
      <p className="mt-1 text-sm text-muted-foreground md:text-base">
        The page you were looking for does not exist.
      </p>
      <Link to="/" className="mt-6 inline-block text-sm font-medium text-foreground underline-offset-4 hover:underline">
        Back home
      </Link>
    </div>
  );
}
