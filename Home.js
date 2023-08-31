import React from 'react'
import "./Home.css";
import Product from './Product';
import ButtonAnimation from './ButtonAnimation';

function Home() {
    return (
        <div className="Home">
            
            <div className="home__container">
                <img className="home__image"
                    src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
                    alt="banner" />
            </div>
            <div className="home__row">
                <Product
                id="12321341"
                title="HP Victus Gaming Laptop AMD Ryzen 5 5600H,15.6 inch(39.6cm) FHD Gaming Laptop,8GB RAM,512GB SSD,AMD Radeon™ RX 6500M 4GB GDDR6 Graphics,Backlit KB,B&O(Win 11) 15-fb0146AX"
                bprice="M.R.P.₹61,799"
                price={55999}
                image="https://m.media-amazon.com/images/I/71dR3oAa0kL._SY450_.jpg"
                rating={5}/>
                <Product
                id="49538094"
                title="Tecno Phantom V Fold 5G White (12GB RAM,256GB Storage) | The First Full Size Fold | LTPO AMOLED Display | 4nm D9000+ Fast Processor"
                bprice="₹88,499"
                price={109499}
                image="https://m.media-amazon.com/images/I/61ImnPH5lKL._AC_UY218_.jpg"
                rating={4} />
            </div>
            <div className="home__row">
                <Product
                id="4903850"
                title="Apple Watch Ultra [GPS + Cellular 49 mm] Smart Watch w/Rugged Titanium Case & Orange Alpine Loop Medium. Fitness Tracker, Precision GPS, Action Button, Extra-Long BatteryLife, Brighter Retina Display"
                bprice="₹87,499" 
                price={89900}
                secondimage="https://m.media-amazon.com/images/I/91z5KuonXrL._SL1500_.jpg"
                rating={4}/>
                <Product 
                id="23445930"
                title="Shri Ram Charitmanas Gita Press Ramcharitmanas, Tulsidas Krit Ramcharitmanas, (Hardcover, Hindi, Goswami Tulsidas) The book has been sanctified and awakened by worshiping by the best learned priest. "
                bprice="₹699"
                price={500}
                secondimage="https://i.pinimg.com/1200x/b3/b9/28/b3b9281ba31255848be131987bfeaf6b.jpg"
                rating={5}
                />
                <Product 
                id="3254354345"
                title="HP M270 Backlit USB Wired Gaming Mouse with 6 Buttons, 4-Speed Customizable 2400 DPI, Ergonomic Design, Breathing LED Lighting, Metal Scroll Wheel, Lightweighted / 3 Years Warranty (7ZZ87AA), Black"
                bprice="₹600"
                price={411}
                secondimage="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/7/z/7zz87aa.png"
                rating={5}/>
            </div>
            <div className="home__row">
                <Product 
                id="90829332"
                title="Samsung 34-inches 86.42cm LED Odyssey G5 Ultra WQHD, 165 Hz, 1ms, 1000R Curved Gaming Monitor, HDR10, AMD FreeSync Premium -LC34G55TWWWXXL, Black, 3440 X 1440 (WQHD) Pixels"
                bprice="₹60,000"
                price={58999}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDFnLn4dMoChMJkPvi83YCehDW79Gz0vGVo4AQ_J6Cg&s"
                rating={5}/>
            </div>
        </div>
        

    )
}

export default Home
