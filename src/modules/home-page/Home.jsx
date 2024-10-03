import styles from "@/public/styles/Home.module.css"
import Carousel from "@/src/components/carousel/Carousel"
import { carouselImages } from "@/web-data/render-data"

export default function Home() {
    return <div className={styles.homeCarisol}>
    <ul className="items">
        <Carousel images={carouselImages}/>
        {/* <li>Carousel</li>
        <div >
            <li>product</li>
            <li>features</li>
            <li>features</li>
            <li>features</li>
        </div>
        <div>awareness</div>
        <div>small about</div>
        <div>product review</div> */}
    </ul>
</div>
}