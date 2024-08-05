import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Link from '@docusaurus/Link';

import styles from './index.module.css';
import React, { FC }  from 'react';
import './styles.css';
import Translate from '@docusaurus/Translate';



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container" style={{display:'flex'}}>
          <img src={require('@site/static/img/CryptBD.png').default} className={styles.featureSvg} role="img" />
          <div className="container" style={{display:'flex', flexDirection:'column'}}>
            <p className="hero__subtitle" style={{ maxWidth: '75%', margin: 'auto auto', padding: '15px 0 5px 0' }}><Translate>Sistema web para el Análisis Exploratorio de Datos en el mercado de las criptomonedas mediante la aplicación de Ciencia de Datos</Translate></p>
            <Link
              className="button button--secondary button--lg"
              to={"/docs/casos-de-uso"}
              style={{ margin: 'auto auto'}}>
              <Translate>Casos de uso
              </Translate>
            </Link>
          </div>
        </div>
    </header>
  );
}

interface HomepageSectionProps {
  header?: string;
  description?: string;
  className?: string;
}

const HomepageSection: FC<HomepageSectionProps> = (props) => {
  const toKebabCase = (header) =>
    header &&
    header
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      )
      .map((parts) => parts.toLowerCase())
      .join('-');

  return (
    <div className={clsx('homepage__section', props.className)}>
      <div className='homepage__container'>
        {props.header && (
          <h2 className='homepage__header' id={toKebabCase(props.header)}>
            {props.header}
          </h2>
        )}
        {props.description && (
          <p className='homepage__description'>{props.description}</p>
        )}
        {props.children}
      </div>
    </div>
  );
};


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout 
      description="Sistema web para el Análisis Exploratorio de Datos en el mercado de las criptomonedas <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <HomepageSection header=''>
          <div className='about__cards' style={{margin:'30px'}}>
            <Link
              to='/docs/diseño/'
              className='about__card'
            >
              <div className='about__section'>
                <div className='about__icon'>
                <img src={require('@site/static/img/disenio.png').default} className={styles.featureSvg} role="img" />
                </div>
                <h3 className='about__header'><Translate>Diseño</Translate></h3>
                <p className='about__description'><Translate>
                  Especificación del diseño arquitectónico y detallado del sistema.
                  </Translate>
                </p>
              </div>
            </Link>
            <Link to='/docs/desarrollo/' className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>
                <img src={require('@site/static/img/desarrollo.png').default} className={styles.featureSvg} role="img" />
                </div>
                <h3 className='about__header'><Translate>Desarrollo</Translate></h3>
                <p className='about__description'><Translate>
                  Descripción del proceso de desarrollo de las principales funcionalidades del sistema.</Translate>
                </p>
              </div>
            </Link>
            <Link to='/docs/secciones/' className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>
                <img src={require('@site/static/img/descripcion.png').default} className={styles.featureSvg} role="img" />
                </div>
                <h3 className='about__header'><Translate>Descripción del sistema</Translate></h3>
                <p className='about__description'><Translate>
                  Descripción e ilustración detallada de cada sección del sistema junto a las funcionalidades correspondientes.</Translate>
                </p>
              </div>
            </Link>
          </div>
        </HomepageSection>
      </main>
    </Layout>
  );
}
