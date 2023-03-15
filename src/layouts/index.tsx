/**
 * @ Author: Hikaru
 * @ Create Time: 2023-02-08 01:35:14
 * @ Modified by: Hikaru
 * @ Modified time: 2023-03-15 15:52:38
 * @ Description: i@rua.moe
 */

import React from 'react';
import { Outlet } from '@umijs/max';
import { WaterMark } from '@ant-design/pro-components';
import styles from './index.less';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { EXP_DATE } from '@/constants/env';

const Layout: React.FC = () => {
  const date = new Date().getTime();

  return (
    <WaterMark
      content={(date >= EXP_DATE) ? '' : 'It has expired, this website is not authorized, please do not do any operation, otherwise there is a risk of funds'}
      fontColor="#ccc"
      zIndex={99999}
      className={styles.watermarkContainer}
    >
      <div className={styles.layoutContainer}>
        <Header />
        <div className={styles.contentContainer}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </WaterMark>
  );
}

export default Layout;
