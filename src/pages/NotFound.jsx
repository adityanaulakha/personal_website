import { Link } from 'react-router-dom';
import { Page, Block } from '../components/PageTransition';
import TextReveal from '../components/TextReveal';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('Not found');
  return (
    <Page className="py-20">
      <Block>
        <p className="text-sm font-normal leading-5 text-fg-subtle">404</p>
        <h1 className="mt-1 text-2xl font-bold leading-8 text-fg" aria-label="Nothing here.">
          <TextReveal text="Nothing here." delay={0.08} />
        </h1>
        <p className="mt-1 text-sm font-normal leading-5 text-fg-muted md:text-base md:leading-6">The page you were looking for does not exist.</p>
        <Link to="/" className="link-slide mt-6 inline-block text-fg">
          Back home
        </Link>
      </Block>
    </Page>
  );
}
