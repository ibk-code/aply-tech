// ------------ import external dependencies -------------
import Head from "next/head";

// ------------ import internal dependencies -----------
import SkipToContent from "@/components/SkipToContent";
import Navigation from "@/components/Navigation";
import Btn from "@/components/Btn";
import Pills from "@/components/Pills";
import styles from "./style.module.css";

export default function Home() {
  const tags = [
    "Pre-Nursery",
    "Nursery",
    "Primary",
    "Junior Secondary",
    "Senior Secondary"
  ];

  const imgs = ["/img/ar.png", "/img/ar.png", "/img/ar.png", "/img/study.png"];
  return (
    <>
      <Head>
        <title>Aply Schools</title>
      </Head>
      <header>
        <SkipToContent content="Skip to content" section="main" />
        <Navigation />
      </header>
      <main className="container" id="main">
        <div className={styles.wrapper}>
          {/* ------ contact section ------- */}
          <aside>
            <div className={styles.contactContainer}>
              <h2>Contact School</h2>
              <img
                src="/img/contact.png"
                alt="Contact User"
                className={styles.profileImg}
              />
              <span className={styles.contactName}>
                Mrs. Francisca Chidubem
              </span>
              <div className={styles.iconWrap}>
                <div className={styles.iconHolder}>
                  <img src="/card.svg" alt="card Img" />
                </div>
                <div>
                  <div className={styles.iconHolder}>
                    <img src="/bookmark.svg" alt="Bookmark Img" />
                  </div>
                  <span>100+</span>
                </div>
                <div className={styles.iconHolder}>
                  <img src="/web.svg" alt="Web Img" />
                </div>
                <div>
                  <div className={styles.iconHolder}>
                    <img src="/message.svg" alt="message Img" />
                  </div>
                  <span>1K+</span>
                </div>
              </div>
              <Btn size="sm">Apply Online</Btn>
            </div>

            {/* ------ notice section ------ */}
            <div
              className={`${styles.contactContainer} mt-18 ${styles.noticeBoard}`}
            >
              <article>
                <h3>Notice Board</h3>
                <p>
                  For 2020/21 session, we are accepting students into Nursery,
                  Primary and Secondary. <br /> <br />
                  Please call our school first on 0700 000 000.
                </p>
                <p>
                  For 2020/21 session, we will start accepting applications on
                  January 15, 2021.
                  <br /> <br />
                  You can apply online at applyschools.ng
                </p>
              </article>
            </div>
          </aside>

          <section className={styles.schoolContent}>
            <h1 className={styles.heading}>Nordic International School</h1>
            <div className={`${styles.contentWrapper} mt-18`}>
              <div className={styles.schoolInfo}>
                <div>
                  <article className={styles.schoolSummary}>
                    <p>
                      Nigeria Ghana International School, Abuja, is a private
                      co-educational secondary school established in 2006,
                      located in the serenity of Kuje Area Council in the
                      Federal Capital Territory.
                    </p>
                  </article>
                  <div className={styles.locationWrapper}>
                    <img src="/location.svg" alt="Location Image" />
                    <span>
                      Plot 700, Gitto Road <br /> Mabuchi, Abuja
                    </span>
                  </div>
                  <div className={styles.catgTags}>
                    {tags.map((ele: string, ind: number) => (
                      <Pills text={ele} key={ind} />
                    ))}
                  </div>
                </div>
                <div>
                  <img
                    src="/img/nordic.png"
                    alt="Nordic Image"
                    className={styles.nordic}
                  />
                  <div className={styles.countWrap}>
                    <span>210 views</span>
                    <div className={styles.viewIcon}>
                      <img src="/eye.svg" alt="views" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mottoWrapper}>
                <img src="/flag.svg" alt="School Motto" />
                <span>
                  <b>School Motto:</b> Excellence and Integrity
                </span>
              </div>

              <div className={styles.sliderWrapper}>
                <div className={styles.imgSlide}>
                  {imgs.map((img: string, ind: number) => (
                    <img src={img} alt="Image Slide" key={ind} />
                  ))}
                </div>
                <div className={styles.imgCount}>
                  <img src="/img/picture.png" alt="Picture Count" />
                  <span>+16</span>
                </div>
              </div>
            </div>

            {/* ------- School Key information section ------- */}
            <div className={`${styles.contentWrapper} mt-18`}>
              <div className={styles.keyInformation}>
                <h3>Key Information</h3>
                <img src="/down.svg" alt="Down Svg" />
              </div>

              <div className={styles.detailWrapper}>
                <div className={styles.schoolDetail}>
                  <span>Founded</span>
                  <span>2015</span>
                </div>
                <div className={styles.schoolDetail}>
                  <span>Ownership</span>
                  <span>Private</span>
                </div>
                <div className={styles.schoolDetail}>
                  <span>Gender</span>
                  <span>Boys & Girls</span>
                </div>
                <div className={styles.schoolDetail}>
                  <span>Faith Affilation</span>
                  <span>Christian</span>
                </div>
                <div className={styles.schoolDetail}>
                  <span>Scholarship</span>
                  <span>No</span>
                </div>
                <div className={styles.schoolDetail}>
                  <span>Student Population</span>
                  <span>47</span>
                </div>
                <div className={styles.schoolDetail}>
                  <span>Teaching Staff</span>
                  <span>10</span>
                </div>
                <div className={styles.schoolDetail}>
                  <span>Non-Teaching Staff</span>
                  <span>5</span>
                </div>
                <div className={styles.schoolDetail}>
                  <span>Special Need</span>
                  <span>Yes</span>
                </div>
                <div className={styles.schoolDetail}>
                  <span>Curriculum</span>
                  <span>National Curriculum of England & Wales</span>
                </div>
                <div className={styles.schoolDetail}>
                  <span>School Fees Discount</span>
                  <span>Upfront Yearly Payment Discount</span>
                </div>
                <div className={styles.schoolDetail}>
                  <span></span>
                  <span>Siblings Discount</span>
                </div>
              </div>
            </div>

            {/* <div className={styles.contentWrapper}>
              <div></div>
            </div> */}
          </section>
        </div>
      </main>
    </>
  );
}
