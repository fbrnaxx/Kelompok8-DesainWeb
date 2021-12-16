import React, {component} from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div>
                {/* <!-- ======= Footer ======= --> */}
                <footer id="footer">
                    <div class="container d-md-flex py-4">

                    <div class="mr-md-auto text-center text-md-left">
                        <div class="copyright">
                        &copy; Copyright <strong><span>Mastercook ITK</span></strong>. All Rights Reserved
                        </div>
                        <div class="credits">
                        Designed by <a>Kelompok 8</a>
                        </div>
                    </div>
                    <div class="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="https://line.me/id/" class="line"><i class="bx bx-at"></i></a>
                        <a href="https://www.instagram.com/" class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="https://twitter.com/" class="twitter"><i class="bx bxl-twitter"></i></a>
                        <a href="https://web.facebook.com/" class="facebook"><i class="bx bxl-facebook"></i></a>
                        <a href="https://www.youtube.com" class="youtube"><i class="bx bxl-youtube"></i></a>
                        <a href="https://mail.google.com/" title="More Details" class="email"><i class='bx bx-envelope-open'></i></a>
                    </div>
                    </div>
                </footer>
                {/* <!-- End Footer --> */}
            </div>
        )
    }
}
export default Footer