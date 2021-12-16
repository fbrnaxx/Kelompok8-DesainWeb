import React, {component} from 'react';
import {Link} from 'react-router-dom'; 

class Home extends React.Component{
    render(){
        return(
            <div>
                

                <section id="hero" class="d-flex align-items-center">
                    <div class="container-fluid" data-aos="zoom-out" data-aos-delay="100">
                    <div class="row justify-content-center">
                        <div class="col-xl-12">
                        <div class="opening">
                            <h1>Hai, Cooking Lovers</h1>
                            <h2>Welcome to the Official Website of Mastercook of ITK</h2>
                            <a href="#tabs" class="btn-get-started scrollto">Get Started</a>
                        </div>
                        </div>
                    </div>
                    </div>

                </section>{/* End Hero */}
                {/* ======= Hero Section ======= */}
                
                <main id="main">
                    <section id="tabs" class="tabs">
                        <div class="recepie_videoes_area">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6">
                                    <div class="recepie_info">
                                        <h3>Video resep yang dapat anda ikuti dalam membuat masakan</h3>
                                    <p>Ingin makan ramen yang sedang viral, tapi dengan biaya yang murah dan cara yang mudah ?, tonton video dibawah yang telah MCI buat</p>
                                    <div class="video_watch d-flex align-items-center">
                                        <a class="popup-video" href="https://www.youtube.com/watch?v=4uwlesjgLRw"> <i class="ti-control-play"></i> </a>
                                        <div class="watch_text" >
                                            <h4>Watch Video</h4>
                                            <p>Ramen Anak Kos</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="videos_thumb">
                                        <div class="big_img">
                                            <img src="asset/img/video/big.png" alt=""></img>
                                        </div>
                                        <div class="small_thumb">
                                            <img src="asset/img/video/small_1.png" alt=""></img>
                                        </div>
                                        <div class="small_thumb_2">
                                            <img src="asset/img/video/2.png" alt=""></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>{/* End Tabs Section */}

                    <div class="container">
                        <div class="card-content">
                            
                            <div class="section-title">
                                <h2>The Best Recipes</h2>
                            </div>

                            <div class="col-xl-12 offset-1">
                                <div class="blog-card spring-fever">
                                    <img src="asset/img/cardcon/app.jpg" alt=""></img>
                                    <div class="title-content">
                                    <h3><Link to="/blog">Appetizer</Link></h3>
                                    <div class="intro"> <a>Makanan Pembuka</a> </div>
                                    </div>
                                    <div class="card-info">
                                    <p>hidangan pembuka yang pertama kali akan disajikan berfungsi merangsang nafsu makan sebelum menikmati hidangan utama.</p>
                                    <Link to="/blog">See Recipes<span class="licon icon-arr icon-black"></span></Link>
                                    </div>
                                </div>   

                                <div class="blog-card spring-fever">
                                    <img src="asset/img/cardcon/mc.jpg" alt=""></img>
                                    <div class="title-content">
                                    <h3><Link to="/blog">Main Course</Link></h3>
                                    <div class="intro"> <a href="blog.html">Hidangan Utama</a> </div>
                                    </div>
                                    <div class="card-info">
                                    <p>hidangan bertujuan untuk memuaskan dan menyenangkan, biasanya merupakan hidangan yang paling mengenyangkan dan padat komposisinya</p>
                                    <Link to="/blog">See Recipes<span class="licon icon-arr icon-black"></span></Link>
                                    </div>
                                    <div class="gradient-overlay"></div>
                                    <div class="color-overlay"></div>
                                </div>

                                <div class="blog-card spring-fever">
                                    <img src="asset/img/cardcon/des.jpg" alt=""></img>
                                    <div class="title-content">
                                    <h3><Link to="/blog">Dessert</Link></h3>
                                    <div class="intro"> <a href="blog.html">Hidangan Penutup</a> </div>
                                    </div>
                                    <div class="card-info">
                                    <p>hidangan yang disajikan setelah hidangan utama (main course). Dessert juga biasa disebut dengan hidangan pencuci mulut.</p>
                                    <Link to="/blog">See Recipes<span class="licon icon-arr icon-black"></span></Link>
                                    </div>
                                    <div class="gradient-overlay"></div>
                                    <div class="color-overlay"></div>
                                </div>
                            </div>

                            

                        </div>
                        
                    </div>

                    <div class="custimer_feedback_area">
                        <div class="container">
                            <div class="row justify-content-center mb-50">
                                <div class="col-xl-9">
                                    <div class="section_title text-center">
                                        <h3>Menu Rekomendasi</h3>
                                        <p>Berbagai pilihan menu yang mudah dimasak, dan kami rekomendasikan di MCI<br></br></p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="container">
                                        <div class="deck-content">

                                            <div class="deck">
                                                <div class="deck-image">
                                                    <img src="images/satai.jpg" alt=""></img>
                                                    <div class="overlay-b">
                                                        <div class="overlay-inner">
                                                            <Link to="/blog" class="fa fa-link"></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="deck-info">
                                                    <h3>Satai Ayam</h3>
                                                    <span class="date">120 Menit</span>
                                                    <p>satai adalah makanan yang terbuat dari daging yang dipotong kecil-kecil dan ditusuk sedemikian rupa <a rel="nofollow" href="blog.html">Selengkapnya</a></p>
                                                </div>
                                            </div>

                                            <div class="deck">
                                                <div class="deck-image">
                                                    <img src="images/SotoMakassar.jpg" alt=""></img>
                                                    <div class="overlay-b">
                                                        <div class="overlay-inner">
                                                            <Link to="/blog" class="fa fa-link"></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="deck-info">
                                                    <h3>Coto Makasar</h3>
                                                    <span class="date">180 Menit</span>
                                                    <p>Berasal dari Makasar. Makanan ini terbuat dari jeroan sapi yang direbus dalam waktu yang lama.  <a rel="nofollow" href="blog.html">Selengkapnya</a></p>
                                                </div>
                                            </div>

                                            <div class="deck">
                                                <div class="deck-image">
                                                    <img src="images/PizzaPasta.jpg" alt=""></img>
                                                    <div class="overlay-b">
                                                        <div class="overlay-inner">
                                                            <Link to="/blog" class="fa fa-link"></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="deck-info">
                                                    <h3>Pizza</h3>
                                                    <span class="date">120 Menit</span>
                                                    <p>Hidangan gurih dari Italia sejenis adonan bundar dan pipih, biasanya dilumuri saus tomat serta keju  <a rel="nofollow" href="blog.html">Selengkapnya</a></p>
                                                </div>
                                            </div>

                                            <div class="deck">
                                                <div class="deck-image">
                                                    <img src="images/nasi goreng.jpg" alt=""></img>
                                                    <div class="overlay-b">
                                                        <div class="overlay-inner">
                                                            <Link to="/blog" class="fa fa-link"></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="deck-info">
                                                    <h3>Nasi Goreng</h3>
                                                    <span class="date">30 Menit</span>
                                                    <p> sebuah makanan berupa nasi yang digoreng dan diaduk dalam minyak goreng, margarin <a rel="nofollow" href="blog.html">Selengkapnya</a></p>
                                                </div>
                                            </div>

                                            <div class="deck">
                                                <div class="deck-image">
                                                    <img src="images/rawon.jpg" alt=""></img>
                                                    <div class="overlay-b">
                                                        <div class="overlay-inner">
                                                            <Link to="/blog" class="fa fa-link"></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="deck-info">
                                                    <h3>Rawon</h3>
                                                    <span class="date">120 Menit</span>
                                                    <p>masakan Indonesia berupa sup daging berkuah hitam dengan campuran bumbu khas dan kluwek.   <a rel="nofollow" href="blog.html">Selengkapnya</a></p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* customer_feedback_area */}
                    
                </main>
                


            </div>
        )
    }
}
export default Home;
