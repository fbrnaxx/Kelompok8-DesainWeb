import React, {component} from 'react';
import {Link} from 'react-router-dom'; 

class Blog extends React.Component{
    render(){
        return(
            <div>

                {/* <!-- ======= Hero Section ======= --> */}
                <section class="breadcrumbs">
                    <div class="container">
                        <ol>
                            
                            <li><a href="index.html">Beranda</a></li>
                            <li>Blog MCI</li>
                        </ol>
                        <h2>Mastercook of ITK</h2>
                    </div>
                </section>
                {/* <!-- End Breadcrumbs --> */}

                <section class="inner-page">
                    <div class="container" data-aos="fade-up">
                        <div class="col-lg-12 col-md-12 portfolio-item filter-web">
                            <img src="asset/img/bannermenu.png" class="img-fluid" alt=""></img>
                        </div>
                    </div>
                </section>

                {/* <!-- partial --> */}
                <div class="section-title">
                    <h2>MasterCook ITK Menu</h2>
                    <p>Kumpulan tutorial beragam menu masakan yang bisa anda ikuti, dan tentunya dengan cara yang sangat mudah dan disertai video pengiringnya</p>
                </div>

                <div class="blogmakanan">

                    <div class="product">
                        <div class="product-card">
                            <h2 class="name">Main Course</h2>
                            <span class="price">Bakso Itali</span>
                            <a class="popup-btn">Tutorial</a>
                            <img src="images/BaksoItali.jpg" class="product-img" alt=""></img>
                        </div>
                        <div class="popup-view">
                            <div class="popup-card">
                                <a><i class="fas fa-times close-btn"></i></a>
                                <div class="product-img">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-mA6Y5VdTvM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="info">
                                    <div class='walkthrough show reveal'>
                                        <div class='walkthrough-pagination'>
                                            <a class='dot active'></a>
                                            <a class='dot'></a>
                                            <a class='dot'></a>
                                            <a class='dot'></a>
                                        </div>
                                        <div class='walkthrough-body'>
                                            <ul class='screens animate'>
                                                <li class='screen active'>
                                                    <h3>
                                                        <br></br>Bahan Bola Daging:
                                                    </h3>
                                                    <p>
                                                        500 g daging sapi <br></br> 2 sdm tepung panir <br></br> 1 butir telur ayam <br></br> 2 sdm bawang merah goreng <br></br> 1 sdm bawang putih goreng <br></br> 1 sdm daun basil/peterseli <br></br> 1/2 sdt pala bubuk <br></br> 1/2 sdt merica bubuk <br></br> 1/2 sdt oregano kering <br></br> 2 sdt garam <br></br>
                                                    </p>
                                                </li>

                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Bahan Saus:
                                                    </h3>
                                                    <p>
                                                        1 sdm mentega <br></br> 30 g bawang bombay cincang halus <br></br> 1 siung bawang putih cincang halus <br></br> 3 buah tomat merah ukuran sedang, parut atau blender halus <br></br> 1 sdm pasta tomat <br></br> 1/2 sdt oregano kering <br></br> 1/2 sdt basil kering <br></br> 2 lembar bay leaf <br></br> 1/2 sdt merica bubuk <br></br> 1 sdt gula pasir <br></br> 1 sdt garam
                                                    </p>
                                                </li>

                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Cara Buat Bakso :
                                                    </h3>
                                                    <p>
                                                        1. Siapkan food processor, masukkan semua bahan ke dalam mangkuknya. <br></br>2. Proses hingga halus dan kalis. <br></br>3. Jika tak ada food processor, cincang halus daging sapi. <br></br>4. Haluskan bawang merah dan bawang putih goreng. <br></br>5. Campurkan semua bahan dan uleni dengan tangan hingga kalis. <br></br>6. Bentuk adonan daging menjadi bola-bola sebesar bakso. <br></br>7. Goreng dengan sedikit minyak hingga kecokelatan dan matang. Angkat dan tiriskan.
                                                    </p>
                                                </li>
                                        
                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Cara Buat Saus :
                                                    </h3>
                                                    <p>
                                                        1. Tumis bawang bombay dan bawang putih hingga harum.<br></br>2. Masukkan tomat dan bahan lainnya lalu didihkan.<br></br>3. Tambahkan bola-bola daging dan masak hingga kuahnya kental lalu angkat.<br></br>
                                                    </p>
                                                </li>

                                            </ul>
                                            <button class='prev-screen'>
                                                <i class='icon-angle-left'></i>
                                            </button>
                                            <button class='next-screen'>
                                                <i class='icon-angle-right'></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product">
                        <div class="product-card">
                            <h2 class="name">Main Course</h2>
                            <span class="price">Gado-Gado</span>
                            <a class="popup-btn">Tutorial</a>
                            <img src="images/GadoGado.jpg" class="product-img" alt=""></img>
                        </div>
                        <div class="popup-view">
                            <div class="popup-card">
                                <a><i class="fas fa-times close-btn"></i></a>
                                <div class="product-img">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Jm1ThTdVgwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="info">
                                    <div class='walkthrough show reveal'>
                                        <div class='walkthrough-pagination'>
                                            <a class='dot active'></a>
                                            <a class='dot'></a>
                                            <a class='dot'></a>
                                            <a class='dot'></a>
                                        </div>
                                        <div class='walkthrough-body'>
                                            <ul class='screens animate'>
                                                <li class='screen active'>
                                                    <h3>
                                                        <br></br>Bahan Gado-Gado:
                                                    </h3>
                                                    <p>
                                                        2 buah kentang kukus dan potong kotak <br></br>300 gram tahu putih<br></br> 300 gram tempe <br></br>8 lembar daun selada, sobek-sobek <br></br>2 buah timun, iris <br></br>150 gram taoge, rebus <br></br>15 butir telur puyuh, rebus <br></br>Empong mlinjo, goreng dan jadikan remah kasar <br></br>1 liter minyak goreng
                                                    </p>
                                                </li>

                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Bahan Saus Kacang:
                                                    </h3>
                                                    <p>
                                                        200 gram kacang tanah kulit, goreng dan haluskan selagi hangat <br></br>2 lembar daun jeruk, buang bagian tulang <br></br>2 sdt garam <br></br>0 gram gula merah, sisir <br></br>750 ml santan dari 1 butir kelapa <br></br>1 sdt asam Jawa dan 2 sdm air, larutkan
                                                    </p>
                                                </li>

                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Bumbu Halus:
                                                    </h3>
                                                    <p>
                                                        5 buah cabai merah, rebus <br></br>3 buah cabai merah keriting, rebus <br></br>5 cm kencur <br></br>4 siung bawang putih, rebus <br></br>1/2 sdt terasi
                                                    </p>
                                                </li>
                                        
                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Cara Buat Gado-Gado :
                                                    </h3>
                                                    <p>
                                                        1. Campur bumbu marinasi, aduk rata. Masukkan tahu dan tempe, rendam. Diamkan<br></br> 2. Panaskan minyak, goreng tahu dan tempe sampai matang. Sisihkan<br></br> 3. Saatnya membuat saus. Di panci, masukkan bumbu halus, santan, daun jeruk, kacang, garam, dan gula. Rebus sampai mendidih dan sedikit mengental. Tambahkan 3 sdt air asam Jawa. Aduk rata<br></br> 4. Siapkan piring saji. Tata tahu, tempe, dan semua sayur plus telur puyuh. Siram dengan saus kacang. Beri taburan emping mlinjo.
                                                    </p>
                                                 </li>

                                            </ul>
                                            <button class='prev-screen'>
                                                <i class='icon-angle-left'></i>
                                            </button>
                                            <button class='next-screen'>
                                                <i class='icon-angle-right'></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product">
                        <div class="product-card">
                            <h2 class="name">Main Course</h2>
                            <span class="price">Sate Taichan</span>
                            <a class="popup-btn">Tutorial</a>
                            <img src="images/SateTaichan.jpg" class="product-img" alt=""></img>
                        </div>
                        <div class="popup-view">
                            <div class="popup-card">
                                <a><i class="fas fa-times close-btn"></i></a>
                                <div class="product-img">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/zUOGSDfCYMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="info">
                                    <div class='walkthrough show reveal'>
                                        <div class='walkthrough-pagination'>
                                            <a class='dot active'></a>
                                            <a class='dot'></a>
                                            <a class='dot'></a>
                                            <a class='dot'></a>
                                        </div>
                                        <div class='walkthrough-body'>
                                            <ul class='screens animate'>
                                                <li class='screen active'>
                                                    <h3>
                                                        <br></br>Bahan Sate:
                                                    </h3>
                                                    <p>
                                                        500 gram daging dada ayam<br></br> 6 siung bawang putih dihaluskan<br></br>Air perasan jeruk nipis dari 3 buah jeruk<br></br>1/2 sendok teh lada bubuk<br></br>1/2 sendok teh penyedap rasa<br></br>1 sendok teh garam<br></br>3 sendok makan minyak goreng<br></br>Tusuk sate secukupnya
                                                    </p>
                                                </li>

                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Bahan Sambal:
                                                    </h3>
                                                    <p>
                                                        12 buah buah cabai rawit merah<br></br> 5 buah cabai merah keriting<br></br> 2 siung bawang merah<br></br>1 siung bawang putih<br></br>1/2 sendok teh garam<br></br>1/4 sendok teh gula pasir<br></br>Air secukupnya
                                                    </p>
                                                </li>
                                    
                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Cara Buat Sate:
                                                    </h3>
                                                    <p> 1. Cuci bersih dada ayam dengan air mengalir. Lalu potong-potong dadu dan masukkan dalam wadah besar.<br></br>2. Beri air perasan jeruk nipis, bawang putih yang telah dihaluskan, lada bubuk, garam, dan penyedap rasa. Aduk rata <br></br>3. Diamkan daging dalam kulkas selama 1 jam agar bumbu meresap.<br></br>4. Setelah 1 jam, tusukkan daging ke tusuk sate sesuai selera.<br></br>5. Bakar sate dengan cara memanggangnya di atas bara api langsung atau menggunakan wajan pemanggang. <br></br>6. Panggang sate sampai dagingnya benar-benar matang, berubah warna, dan meninggalkan sedikit bekas bakaran. Jangan lupa di balik saat dipanggang agar matangnya merata.<br></br>7. Setelah matang, taruh sate dalam piring saji. Sisihkan.
                                                    </p>
                                                </li>
                                    
                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Cara Buat Sambal:
                                                    </h3>
                                                    <p>
                                                        1. Rebus terlebih dahulu cabai merah, cabai rawit, bawang merah, dan bawang putih sampai agak lunak. Angkat dan tiriskan.<br></br> 2. Haluskan semua bahan sambal dengan blender untuk hasil yang lembut. Tapi kalau mau sambal bertekstur kasar, kamu bisa mengulek kasar semua bahan menggunakan cobek. <br></br>3. Kemudian panaskan minyak sedikit saja dan tumis sebentar sambal. Bumbui dengan garam dan gula pasir. Aduk rata dan jangan lupa koreksi rasanya. <br></br>4. Ambil piring saji lalu susun lontong, sate, irisan timun, dan irisan tomat. <br></br>5. Siram sate dengan sambal dan taburan bawang goreng lalu beri potongan jeruk nipis. <br></br>6. Sate taichan siap disajikan.
                                                    </p>
                                                </li>

                                            </ul>
                                            <button class='prev-screen'>
                                                <i class='icon-angle-left'></i>
                                            </button>
                                            <button class='next-screen'>
                                                <i class='icon-angle-right'></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product">
                        <div class="product-card">
                            <h2 class="name">Main Course</h2>
                            <span class="price">Rendang Sapi</span>
                            <a class="popup-btn">Tutorial</a>
                            <img src="images/RendangSapi.jpg" class="product-img" alt=""></img>
                        </div>
                        <div class="popup-view">
                            <div class="popup-card">
                                <a><i class="fas fa-times close-btn"></i></a>
                                <div class="product-img">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/VX0ox3uQHQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="info">
                                    <div class='walkthrough show reveal'>
                                        <div class='walkthrough-pagination'>
                                            <a class='dot active'></a>
                                            <a class='dot'></a>
                                            <a class='dot'></a>
                                        </div>
                                        <div class='walkthrough-body'>
                                            <ul class='screens animate'>
                                                <li class='screen active'>
                                                    <h3>
                                                        <br></br>Bahan Rendang:
                                                    </h3>
                                                    <p>
                                                        500 gr daging<br></br>1 batang serai geprek<br></br>3 lembar daun jeruk<br></br>2 lembar daun salam<br></br>1 ruas lengkuas geprek<br></br>2 cm kayu manis<br></br>1 sdt gula merah<br></br>1 sdt kaldu sapi dan garam<br></br>1/2 sdt merica bubuk<br></br>Jeruk nipis<br></br>500 ml santan dari 1/2 kelapa
                                                    </p>
                                                </li>

                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Bahan Bumbu Halus:
                                                    </h3>
                                                    <p>
                                                        4 siung bawang putih<br></br>6 butir bawang merah<br></br>2 butir kemiri<br></br>1/2 sdt ketumbar<br></br>3 cabai merah besar (buang bijinya)<br></br>2 cm kunyit<br></br>3 cm jahe
                                                    </p>
                                                </li>
                                    
                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Cara Buat Rendang:
                                                    </h3>
                                                    <p> 1. Cuci bersih daging, potong sesuai selera, beri perasan jeruk nipis, lalu cuci lagi<br></br> 2. Haluskan bumbu, lalu tumis bumbu halus dengan serai, daun jeruk, daun salam, kayu manis dan lengkuas sampai matan<br></br> 3. Masukkan daging, aduk rata, lalu masukkan santan. Masak dengan api kecil sambil sesekali diaduk.<br></br> 4. Kemudian masukkan garam, kaldu, jintan, merica dan gula merah, diamkan hingga bumbu meresap dan airnya menyusut.<br></br> 5. Koreksi rasa, angkat dan hidangkan.
                                                    </p>
                                                </li>

                                            </ul>
                                            <button class='prev-screen'>
                                                <i class='icon-angle-left'></i>
                                            </button>
                                            <button class='next-screen'>
                                                <i class='icon-angle-right'></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product">
                        <div class="product-card">
                            <h2 class="name">Main Course</h2>
                            <span class="price">Ratatouille</span>
                            <a class="popup-btn">Tutorial</a>
                            <img src="images/Ratatouille.jpg" class="product-img" alt=""></img>
                        </div>
                        <div class="popup-view">
                            <div class="popup-card">
                                <a><i class="fas fa-times close-btn"></i></a>
                                <div class="product-img">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/0gTP2_4PjPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="info">
                                    <div class='walkthrough show reveal'>
                                        <div class='walkthrough-pagination'>
                                            <a class='dot active'></a>
                                            <a class='dot'></a>
                                            <a class='dot'></a>
                                            <a class='dot'></a>
                                        </div>
                                        <div class='walkthrough-body'>
                                            <ul class='screens animate'>
                                                <li class='screen active'>
                                                    <h3>
                                                        <br></br>Bahan Ratatouille dan Garnish:
                                                    </h3>
                                                    <p>
                                                        4 buah tomat<br></br>3 buah terong ungu<br></br>2 buah zukini<br></br>1 sdm minyak zaitun<br></br>1 batang thyme, cincang kasar<br></br>3 lembar daun basil, cincang halus<br></br>1 sdt olive oil<br></br>Secukupnya lada bubuk<br></br>Secukupnya garam
                                                    </p>
                                                </li>

                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Bahan Saus: 
                                                    </h3>
                                                    <p>
                                                        2 siung bawang putih<br></br>1 butir bawang bombay<br></br>3 sdm minyak zaitun<br></br>½ sdt lada hitam kasar<br></br>½ sdt garam<br></br>1 batang thyme, cincang kasar<br></br>5 butir tomat, blansir, buang kulit dan bijinya<br></br>½ sdt thyme<br></br>1 sdt oregano
                                                    </p>
                                                </li>
                                    
                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Cara Buat Ratatouille:
                                                    </h3>
                                                    <p> 1. Buatlah sausnya terlebih dahulu. Pertama, panaskan minyak zaitun, tumis bawang bombay dan bawang putih hingga harum. Masukkan tomat, paprika lalu tumis sampai layu.<br></br> 2. Selanjutnya, tambahkan oregano, thyme, lada hitam, dan garam. Angkat saus lalu sisihkan.<br></br> 3. Iris tipis zukini dan terong, kemudian cincang kasar thyme.<br></br> 4. Siapkan pinggan atau wadah tahan panas, kemudian olesi dengan olive oil. Setelah itu, beri 2 sdm saus, ratakan. <br></br>5. Tata semua irisan bahan sayur dengan membentuk lingkaran dengan isian selang-seling. Lalu, beri saus di antara tumpukan sayurannya.
                                                    </p>
                                                </li>
                                    
                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Cara Buat Ratatouille:
                                                    </h3>
                                                    <p>
                                                        6. Setelah rata, tutup ratatouille dengan alumunium foil. Jangan lupa beri lubang pada beberapa tempat untuk sirkulasi udara. <br></br>7. Oven ratatouille selama 30 menit. Keluarkan dari oven dan lepas alumunium foilnya.<br></br>8. Lanjutkan dengan memanggang kembali selama 15 menit, setelah itu angkat.<br></br>9. Ratatouille siap disajikan bersama garnish.
                                                    </p>
                                                </li>

                                            </ul>
                                            <button class='prev-screen'>
                                                <i class='icon-angle-left'></i>
                                            </button>
                                            <button class='next-screen'>
                                                <i class='icon-angle-right'></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product">
                        <div class="product-card">
                            <h2 class="name">Dessert</h2>
                            <span class="price">Dessert Box</span>
                            <a class="popup-btn">Tutorial</a>
                            <img src="images/dessert box.jpg" class="product-img" alt=""></img>
                        </div>
                        <div class="popup-view">
                            <div class="popup-card">
                                <a><i class="fas fa-times close-btn"></i></a>
                                <div class="product-img">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ORtrjc3IG-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="info">
                                    <div class='walkthrough show reveal'>
                                        <div class='walkthrough-pagination'>
                                            <a class='dot active'></a>
                                            <a class='dot'></a>
                                            <a class='dot'></a>
                                        </div>
                                        <div class='walkthrough-body'>
                                            <ul class='screens animate'>
                                                <li class='screen active'>
                                                    <h3>
                                                        <br></br>Bahan Cake:
                                                    </h3>
                                                    <p>
                                                        225 gr tepung serbaguna<br></br> 80 gr coklat bubuk berkualitas<br></br>400 gr gula pasir butiran halus<br></br>2 sdt baking soda<br></br>1 sdt baking powder<br></br>1 sdt garam<br></br>125 gr minyak sayur<br></br>250 gr buttermilk<br></br>250 gr air panas (mendidih)<br></br>2 telur utuh<br></br>Pasta vanilla/blackforest secukupnya
                                                    </p>
                                                </li>

                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Bahan Topping: 
                                                    </h3>
                                                    <p>
                                                        Whipped cream kocok<br></br>Black cherry<br></br>Red cherry<br></br>Coklat serut
                                                    </p>
                                                </li>
                                    
                                                <li class='screen'>
                                                    <h3>
                                                    </h3>
                                                    <p> 1. Campur semua bahan kering, ayak. Sisihkan<br></br>2. Kemudian campur telur dan buttermilk, lalu masukkan minyak sambil diaduk. Setelah rata, masukkan air panas secara bertahap dan tetap diaduk agar telur tidak matang.<br></br>3. Campur bahan kering dengan bahan basah sambil diaduk dengan whisk.<br></br>4. Setelah adonan cair, panggal suhu 190C selama 45 menit atau sampai matang.<br></br>5. Setelah matang, susun di box dan sajikan dingin.
                                                    </p>
                                                </li>

                                            </ul>
                                            <button class='prev-screen'>
                                                <i class='icon-angle-left'></i>
                                            </button>
                                            <button class='next-screen'>
                                                <i class='icon-angle-right'></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product">
                        <div class="product-card">
                            <h2 class="name">Main Course</h2>
                            <span class="price">Spaghetti Carbonara</span>
                            <a class="popup-btn">Tutorial</a>
                            <img src="images/SpaghettiCarbonara.jpg" class="product-img" alt=""></img>
                        </div>
                        <div class="popup-view">
                            <div class="popup-card">
                                <a><i class="fas fa-times close-btn"></i></a>
                                <div class="product-img">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/UQV3bZc3fHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="info">
                                    <div class='walkthrough show reveal'>
                                        <div class='walkthrough-pagination'>
                                            <a class='dot active'></a>
                                            <a class='dot'></a>
                                            <a class='dot'></a>
                                            <a class='dot'></a>
                                        </div>
                                        <div class='walkthrough-body'>
                                            <ul class='screens animate'>
                                                <li class='screen active'>
                                                    <h3>
                                                        <br></br>Bahan Masakan:
                                                    </h3>
                                                    <p>
                                                        200 gram Spaghetti<br></br>1 Liter air mineral<br></br>1/2 cup susu cair<br></br>1 butir Kuning Telur<br></br>Chicken Nugget yang sudah digoreng secukupnya dan potong dadu<br></br>1 sdm Mentega<br></br>1 sdt Oregano<br></br>1 sdt Parsley<br></br>Lada hitam secukupnya<br></br>Garam dan Gula secukupnya.
                                                    </p>
                                                </li>

                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Bahan Saus: 
                                                    </h3>
                                                    <p>
                                                        2 butir kuning telur<br></br>2 butir telur<br></br>75 gr keju parmesan yang sudah diparut<br></br>2 sdm heavy cream<br></br>2 siung bawang putih dicincang<br></br>2 sdm minyak zaitun<br></br>2 lembar smoked beef, dipotong-potong<br></br>garam dan lada secukupnya
                                                    </p>
                                                </li>
                                    
                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Cara Buat Spagheti:
                                                    </h3>
                                                    <p>
                                                        1. Pertama masak air hingga mendidih, lalu masukkan spaghetti dan sejumput garam. Masak sampai tekstur spaghetti sesuai yang diinginkan.<br></br>2. Di panci yang berbeda masukkan susu cair, masak dengan api sangat kecil, jangan sampai mendidih, lalu matikan api.<br></br>3. Kemudian masukkan sedikit susu kedalam mangkuk yang diisi telur, dan aduk perlahan. Lalu masukkan semua telur tadi ke panci dan aduk sampai rata.<br></br>4. Setelah spaghetti matang, keluarkan airnya, campurkan dengan mentega selagi panas. Lalu tambahkan susu tadi kedalam panci tersebut. Masukkan nugget, garam, gula, oregano dan blackpepper. Aduk semuanya sampai rata dan mengental.<br></br>5. Tata diatas piring, taburkan blackpepper dan parsley. Sajikan bersama saus carbonara yang harus kamu buat terlebih dahulu sesuai resep di bawah ini.
                                                    </p>
                                                </li>
                                    
                                                <li class='screen'>
                                                    <h3>
                                                        <br></br>Cara Buat Saus:
                                                    </h3>
                                                    <p>
                                                        1. Panaskan minyak zaitun. Masukan bawang putih dan smoked beef, masak hingga matang dengan api sedang agar minyak zaitun tidak mengeluarkan asap.<br></br>2. Kemudian Kocok telur, kuning telur, heavy cream dan keju parmesan dalam wadah hingga merata. Lalu tambahkan garam dan lada bubuk secukupnya.<br></br>3. Panaskan lagi tumisan bawang putih tadi, lalu masukkan semua bahan dan aduk merata hingga matang.<br></br>4. Terakhir, masukkan spaghetti yang sudah dimasak tadi. Aduk sampai merata dan masak sebentar.<br></br>5. Selesai. Spaghetti carbonara resep selesai dibuat dan siap dihidangkan. Selamat menikmati! 
                                                    </p>
                                                </li>

                                            </ul>
                                            <button class='prev-screen'>
                                                <i class='icon-angle-left'></i>
                                            </button>
                                            <button class='next-screen'>
                                                <i class='icon-angle-right'></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
                

            </div>
        )
    }
}
export default Blog;