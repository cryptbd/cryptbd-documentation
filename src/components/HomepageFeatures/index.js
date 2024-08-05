import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: 'Diseño',
    Img: require('@site/static/img/diseno.png').default,
    description: (
      <><Translate>
        Descripción del diseño arquitectónico y detallado del sistema.</Translate>
      </>
    ),
    to: "/docs/diseño",
  },
  {
    title: 'Desarrollo',
    Img: require('@site/static/img/CryptBD.png').default,
    description: (
      <><Translate>
        Descripción del desarrollo de las principales funcionalidades del sistema.</Translate>
      </>
    ),
    to: "/docs/desarrollo",
  },
  {
    title: 'Descripción del sistema',
    Img: require('@site/static/img/estrategias.png').default,
    description: (
      <><Translate>
        Descripción e ilustración de cada sección del sistema junto a las funcionalidades correspondientes.</Translate>
      </>
    ),
    to: "/docs/secciones",
  },
];

function Feature({Img, title, description, to}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Link
          className="button button--secondary button--lg"
          to={to}>
          {title}
        </Link>
        <p style={{margin:'20px auto'}}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
