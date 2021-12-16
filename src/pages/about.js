import React, {component} from 'react';
import {Link} from 'react-router-dom'; 


class About extends React.Component{
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

                <section class="inner-page">
                    <div class="container" data-aos="fade-up">
                        <div class="col-lg-12 col-md-12 portfolio-item filter-web">
                            <img src="asset/img/bannerabout.png" class="img-fluid" alt=""></img>
                        </div>
                    </div>
                </section>

                {/* <!-- partial --> */}
                <div class="section-title">
                    <div class="col-lg-12">
                        <h2>Tentang Kami</h2>
                        <p>MasterCook ITK merupakan media digital yang menyajikan beraneka ragam resep-resep makanan. Kami sangat senang jika Anda memberikan kritik / saran untuk MasterCook ITK agar menjadi lebih baik lagi dalam memberikan artikel dan informasi untuk pembaca. Anda bisa memberikan kritik / saran tersebut pada halaman contact. Kami akan berusaha semaksimal mungkin untuk menyajikan artikel yang bermanfaat bagi pembaca. Semoga MasterCook ITK akan terus berinovasi untuk menyajikan artikel dan informasi seputar dapur dan dunia masak.</p>
                    </div>
                </div>

                <section class="inner-page">
                    <div class="container" data-aos="fade-up">
                        <div class="col-lg-12 offset-3">
                            <img src="images/images/rempah.png" class="img-fluid" alt=""></img>
                        </div>
                    </div>
                </section>

                <div class="section-title">
                    <div class="col-lg-12">
                        <h2>Website ini dibuat oleh</h2>
                        <p>Website ini dibuat oleh Kelompok 8 (Tadika Mesra) Desain Web yang beranggotakan :<br/><br/>M. Adhistya Putra - 11191045 (A) | Brayen Novendra - 11191016 (B) | Febriana - 11191023 (A)
                            <br/>Ivan Arnett Milenio Wayong - 11191032 (B) | Muhammad Asfian - 11191048 (B) | Tri Fani Arella Putra - 11191072 (B)<br/><br/>dengan tujuan menyelesaikan tugas kelompok yang diberikan</p>
                    </div>
                </div>

                {/* <!-- partial --> */}
            </div>
        )
    }
}export default About;