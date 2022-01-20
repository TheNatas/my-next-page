import { NextComponentType } from 'next';
import Image from 'next/image';
import background from '../public/background.jpeg';
import styles from './background.module.css';

const Background : NextComponentType = () => {
  return(
    <div className={styles.overlay}>
      <Image src={background} layout='fill' alt=''/>
    </div>
  )
}

export default Background;