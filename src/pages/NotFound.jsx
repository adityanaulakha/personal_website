import { Link } from 'react-router-dom';
import { Page, Block } from '../components/PageTransition';
import TextReveal from '../components/TextReveal';

export default function NotFound() {
  return (
    <Page className="py-20">
      <Block>
        <p className="text-xs font-medium text-fg-muted">404</p>
        <h1 className="mt-1 text-2xl font-bold text-fg" aria-label="Nothing here.">
          <TextReveal text="Nothing here." delay={0.08} />
        </h1>
        <p className="mt-1 text-xs font-normal leading-5 text-fg-muted sm:text-sm">The page you were looking for does not exist.</p>
        <Link to="/" className="link-slide mt-6 inline-block text-sm font-medium text-fg">
          Back home
        </Link>
      </Block>
    </Page>
  );
}
