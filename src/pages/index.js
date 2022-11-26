import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

import  { Redirect,useLocation  } from 'react-router-dom';

export default function Home() {
  //const location = useLocation();
  return <Redirect to='/docs/intro' />;
}