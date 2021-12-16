import React,{useState} from "react";
import data from "./data";
import Model from "./Model";

const Home = () =>{
    const [model, setModel] = useState(false);
    const [tempdata, setTempdata] = useState([]);

    const getData = (img, title, desc) =>{
        let tempData = [img, title, desc];
        setTempdata(item => [1, ...tempData]);
        return setModel(true);
    }
    return(
        <>
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

                
            <section className="py-4 py-lg-5 container">
                <div className="row justify-content-center align-item-center">
                {data.cardData.map((item, index)=>{
                    return(
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4"key={index}>
                        <div className="card p-0 overflow-hidden h-100 shadow">
                            <img src={item.imgSrc}className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <button className="btn btn-primary" 
                                    onClick={() => getData(item.imgSrc, item.tutor, item.desc )}
                                    >Lihat Resep</button>


                                </div>
                            
                        </div>
                    </div>
                    )
                })}
                    
                </div>

            </section>
                {
                    model === true ? <Model img={tempdata[1]} title={tempdata[2]} desc={tempdata[3]} tutor={tempdata[4]} hide={()=> setModel(false)}/>: ''
                }
              
        </>
        
    )
}
export default Home;