import {Box,Image,Heading} from "@chakra-ui/react"
import { Link,NavLink } from "react-router-dom"
export default function Boys() {

    const data3=[
        {
        id:1,
        image:"https://www.jcrew.com/s7-img-facade/BM511_YD2419_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Boys'rugby crewneck sweatshirt in french terry",
        price:"INR 9,607"  
    
      },
      {
        id:2,
        image:"https://www.jcrew.com/s7-img-facade/BM506_SR0882?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Kids' bear Fair Isle sweater in lambswool bend ",
        price:"INR 10,990"  
    
      },
      {
        id:3,
        image:"https://www.jcrew.com/s7-img-facade/BC670_BL9141?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Kids'quilted jersey reversible half-zip sweatshirt",
        price:"INR 12,372"
    
      },
      {
        id:4,
        image:"https://www.jcrew.com/s7-img-facade/BM630_SR0259?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"OLD",
        desc:"Kids' wool-blend Fair Isle beanie ",
        price:"INR 5,460"  
    
      },
      {
        id:5,
        image:"https://www.jcrew.com/s7-img-facade/AZ841_NA6445?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"OLD",
        desc:"Boys' long-sleeve waffle T-shirt",
        price:"INR 6,221"  
    
      },
      {
        id:6,
        image:"https://www.jcrew.com/s7-img-facade/BM650_KF5316?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"OLD",
        desc:"Kids'long-sleeve fa-la-la graphic T-shirt ",
        price:"INR 4,493"
    
      },
      {
        id:7,
        image:"https://www.jcrew.com/s7-img-facade/AZ762_NA6167?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Boys' button-down poplin shirt in plaid",
        price:"INR 6,843"  
    
      },
      {
        id:8,
        image:"https://www.jcrew.com/s7-img-facade/AZ762_RD5545?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Kid's long-sleeve polo shirt with plaid collor",
        price:"INR 6,843"  
    
      },
      {
        id:9,
        image:"https://www.jcrew.com/s7-img-facade/AZ762_BL7505?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Boys'silk tie in good Tidings plaid ",
        price:"INR 4,078"
    
      },
      {
        id:10,
        image:"https://www.jcrew.com/s7-img-facade/BM668_SR0097?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Boys'cable-knit fisherman sweater",
        price:"INR 9,607"  
    
      },
      {
        id:11,
        image:"https://www.jcrew.com/s7-img-facade/BM651_KF5303?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Boys'cable-knit fisherman sweater" ,
        price:"INR 9,607"  
    
      },
      {
        id:12,
        image:"https://www.jcrew.com/s7-img-facade/BK283_EE3327?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Boys'cable-knit fisherman sweater",
        price:"INR 9,607"
    
      },
      {
        id:13,
        image:"https://www.jcrew.com/s7-img-facade/BL684_SR0097?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Boys'Fair Isle half-zip sweater",
        price:"INR 10,990"  
    
      },
      {
        id:14,
        image:"https://www.jcrew.com/s7-img-facade/BJ103_GY6469?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Kids'long-sleeve snowboarder graphic T-shirt",
        price:"INR 4,078"  
    
      },
      {
        id:15,
        image:"https://www.jcrew.com/s7-img-facade/BM652_KF5309?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Boys' New Balance@ 327 sneakers",
        price:"INR 8,985"
    
      },
      {
        id:16,
        image:"https://www.jcrew.com/s7-img-facade/BJ194_BL8133?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Boys' Fair Isle sweater-jogger pant",
        price:"INR 10,990"  
    
      },
      {
        id:17,
        image:"https://www.jcrew.com/s7-img-facade/BM662_SR0259?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Kids'sherpa critter slippers",
        price:"INR 7,603"
    
      },
      {
        id:18,
        image:"https://www.jcrew.com/s7-img-facade/BJ194_GR7503?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Kids'long-sleeve snowmobile pocket T-shirt",
        price:"INR 5,046"
    
      },
      {
        id:19,
        image:"https://www.jcrew.com/s7-img-facade/BL651_BL7361_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Boys'fishtail parka with PrimaLoft@",
        price:"INR 24,605"  
    
      },
      {
        id:20,
        image:"https://www.jcrew.com/s7-img-facade/BL651_BR6948?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Boy's Fair Isle crewneck sweater ",
        price:"INR 10,990"  
    
      },
      {
        id:21,
        image:"https://www.jcrew.com/s7-img-facade/BL651_GR6909?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Boys'fishtail parka with PrimaLoft@",
        price:"INR 24,605"
    
      },
      {
        id:22,
        image:"https://www.jcrew.com/s7-img-facade/BJ322_YD2303?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Kids'chino carpenter pant",
        price:"INR 8,225"  
    
      },
      {
        id:23,
        image:"https://www.jcrew.com/s7-img-facade/BJ322_YD0113?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Kids'chino carpenter pant",
        price:"IINR 8,225"  
    
      },
      {
        id:24,
        image:"https://www.jcrew.com/s7-img-facade/BJ322_YD0088?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Kids'chino carpenter pant",
        price:"INR 8,225"
    
      },
      {
        id:25,
        image:"https://www.jcrew.com/s7-img-facade/BL651_GR6909?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW COLOR",
        desc:"Kids'relaxed-fit shirt in lightweight flannel",
        price:"INR 8,225"
    
      },
      {
        id:26,
        image:"https://www.jcrew.com/s7-img-facade/BL288_YD2531?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW COLOR",
        desc:"Kids'relaxed-fit shirt in lightweight flannel",
        price:"INR 8,225"  
    
      },
      {
        id:27,
        image:"https://www.jcrew.com/s7-img-facade/BL152_KF5102?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW COLOR",
        desc:"Kids'relaxed-fit shirt in lightweight flannel",
        price:"INR 8,225"  
    
      },
      {
        id:28,
        image:"https://www.jcrew.com/s7-img-facade/BL153_BL6861?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Boys' relaxed-fit pull-on corduroy pant",
        price:"INR 7,603"
    
      },
      {
        id:29,
        image:"https://www.jcrew.com/s7-img-facade/BK219_BL7505?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Boys' relaxed-fit pull-on corduroy pant",
        price:"INR 7,603"  
    
      },
      {
        id:30,
        image:"https://www.jcrew.com/s7-img-facade/BL203_KF4048?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Boys' relaxed-fit pull-on corduroy pant",
        price:"INR 7,603"  
    
      },
      

    ]

    const three=data3.map((element)=>{
        return (
           
           <Box width="100%" height="auto" padding="20px" boxShadow= "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"  marginTop="50px" >
              <Image src={element.image} width="95%" height="70%"/>
              <p>{element.catagory}</p>
              <Heading size="md" marginTop="10px">{element.desc}</Heading>
              <Heading fontSize="15px" marginTop="10px" marginBottom="20px">{element.price}</Heading>
              <NavLink to="/cart">Quick buy</NavLink>
           </Box>
         
        )
      })
    return (
      <div>
        <Box height="150px" width="400px" textAlign="center"  margin="auto" backgroundColor="Chocolate" marginTop="20px" color="white" paddingTop="35px"  boxShadow= "rgb(38, 57, 77) 0px 20px 30px -10px">
            <Heading fontFamily="cursive">boys’ new arrivals</Heading>
        </Box>
        <Box height="600px" width="45%" textAlign="center"   margin="auto" marginTop="20px" color="white" paddingTop="35px">
            <Image src="https://www.jcrew.com/brand_creative/2022/202212-Dec/cc_newarrivals/2022dec_1108_cc_na_b_img5.jpg" width="100%" height="600px"/>
        </Box>
         <Box display="grid" gridTemplateColumns="repeat(3, 1Fr)" height="100%" width="100%" gap="20px">
                {three}
                </Box>
                <Box width="100%" height="400px" backgroundColor="gray" marginTop="30px" display="flex" gap="20px">
                   
                   <Box height="100%" width="30%" padding="30px" display="grid" color="white" fontSize="20px">
                       <Link href="https://www.jcrew.com/in/help/customer-service">Customer Service</Link>
                       <Link href="https://www.jcrew.com/in/help/order-status">Track Order</Link>
                       <Link href="https://www.jcrew.com/in/help/returns-exchanges">Shipping</Link>
                       <Link href="https://www.jcrew.com/in/help/shipping-handling">International Orders</Link>
                       <Link href="https://www.jcrew.com/in/help/international-orders">Contact Us</Link>
                       <Link href="https://www.jcrew.com/in/help/contact-us">Returns and Exchange</Link>
                   </Box>
                   <Box height="100%" width="30%" padding="30px" display="grid" color="white" fontSize="20px">
                       <Link href="https://stores.jcrew.com/search">Find a Store</Link>
                       <Link href="https://www.jcrew.com/in/r/size-charts">Size Charts</Link>
                       <Link href="https://www.jcrew.com/in/best-deals">Offers & Promotions</Link>
                       <Link href="https://www.jcrew.com/in/favorites">My Favorites</Link>
                       <Link href="https://www.facebook.com/jcrew">Facebook</Link>
                       <Link href="https://www.instagram.com/jcrew/">Instagram</Link>
                       <Link href="https://twitter.com/jcrew">Twitter</Link>
                   </Box>
                   <Box height="100%" width="30%" padding="20px" display="grid" color="white" fontSize="20px">
                       <Link href="https://www.jcrew.com/in/s/aboutus">Our Story</Link>
                       <Link href="https://jobs.jcrew.com/">Careers</Link>
                       <Link href="https://www.jcrew.com/in/s/corporate-responsibility">Social Responsibility</Link>
                       <Link href="https://www.jcrew.com/in/s/CSR-california-transparency-act">California Transparency Act/Modern Slavery Act</Link>
                       <Link href="https://investors.jcrew.com/investor-relations/?ver=jc">Investor Relations</Link>
                       <Link href="https://www.jcrew.com/in/help/terms-of-use">Terms of Use</Link>
                       <Link href="https://www.jcrew.com/in/help/privacy-policy">Privacy Policy</Link>
                       <Link href="https://jcrew.clarip.com/dsr/create?brand=jcrew&type=3">California Do Not Sell My Personal Information</Link>
                       <Link href="https://www.jcrew.com/in/s/diversity-equity-inclusion">Diversity, Equity and Inclusion at J.Crew Group</Link>
                       
                   </Box>
                    
                </Box>
      </div>
    );
  }