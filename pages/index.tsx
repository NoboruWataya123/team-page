import Grid from '../components/Grid/Grid'
import styles from '../styles/Home.module.css'
import Items from '../components/Items/Items'
import Image from 'next/image';
import Footer from '../components/Footer/Footer';
import image from 'next/image';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.flexbox}>
        <h1 className={styles.heading}>The creative crew</h1>
        <div className={styles.innerflexbox}>
          <h4 className={styles.herotext}>Who we are</h4>
          <p className={styles.paragraph}>We are team of creatively diverse. driven. innovative individuals working in various locations from the world</p>
        </div>   
      </div>
      
      <Grid>
        <Items><Image src="/photo1.png" alt="photo" width={200} height={300}/><span className={styles.horiz}>Product owner</span><p className={styles.imgp}>Bill Mahoney</p></Items>
        <Items><Image src="/photo2.png" alt="photo" width={200} height={300}/><span className={styles.horiz}>Art director</span><p className={styles.imgp}>Saba Cabrera</p></Items>
        <Items><Image src="/photo3.png" alt="photo" width={200} height={300}/><span className={styles.horiz}>Tech Lead</span><p className={styles.imgp}>Shae Le</p></Items>
        <Items><Image src="/photo4.png" alt="photo" width={200} height={300}/><span className={styles.horiz}>UX Designer</span><p className={styles.imgp}>Skylah Lu</p> </Items>
        <Items><Image src="/photo5.png" alt="photo" width={200} height={300}/><span className={styles.horiz}>Developer</span><p className={styles.imgp}>Griff Richards</p> </Items>
        <Items><Image src="/photo6.png" alt="photo" width={200} height={300}/><span className={styles.horiz}>Developer</span><p className={styles.imgp}>Stan John</p> </Items>
      </Grid>
      <br />
      <br />
      <Footer>made by DDK</Footer>
      <br />
      <br />
    </div>
  )
}
