import {Box,Image,Heading} from "@chakra-ui/react"
import { Link,NavLink } from "react-router-dom"
export default function Shoes() {

    const data3=[
        {
        id:1,
        image:"https://www.jcrew.com/s7-img-facade/BM487_PP4090?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Heritage duck boots in tumbled leather",
        price:"INR 24,605"  
    
      },
      {
        id:2,
        image:"https://www.jcrew.com/s7-img-facade/BN187_PP4093?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Heritage duck boots in suede",
        price:"INR 24,605"  
    
      },
      {
        id:3,
        image:"https://www.jcrew.com/s7-img-facade/BJ034_PP3687?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Cascade boots in roughout suede",
        price:"INR 41,192"
    
      },
      {
        id:4,
        image:"https://www.jcrew.com/s7-img-facade/BK821_PP3686?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Cascade booots in tumbled leather",
        price:"41,192"  
    
      },
      {
        id:5,
        image:"https://www.jcrew.com/s7-img-facade/BJ036_PP3687?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Cascade low-top boots in roughout suede",
        price:"INR 34,281"  
    
      },
      {
        id:6,
        image:"https://www.jcrew.com/s7-img-facade/BJ025_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Kenten Chelsea boots",
        price:"41,192"
    
      },
      {
        id:7,
        image:"https://www.jcrew.com/s7-img-facade/BJ025_PP2328?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Kenten Chelsea boots",
        price:"41,192"  
    
      },
      {
        id:8,
        image:"https://www.jcrew.com/s7-img-facade/BL843_PP3382?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Kenten cap-toe boots",
        price:"INR 45,339"  
    
      },
      {
        id:9,
        image:"https://www.jcrew.com/s7-img-facade/BJ026_PP3381?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Kenton pacer boots",
        price:"INR 41,192"
    
      },
      {
        id:10,
        image:"https://www.jcrew.com/s7-img-facade/BJ027_PP3383?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Kenton plain-toe boots",
        price:"INR 41,192"  
    
      },
      {
        id:11,
        image:"https://www.jcrew.com/s7-img-facade/BJ895_EE3250?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Sorel@ caribou boots" ,
        price:"INR 27,646"  
    
      },
      {
        id:12,
        image:"https://www.jcrew.com/s7-img-facade/BM128_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Blundstone@ 558 Chelsea boots",
        price:"INR 29,712"
    
      },
      {
        id:13,
        image:"https://www.jcrew.com/s7-img-facade/M1805_MG2943?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Sherpa-lined suede slippers",
        price:"INR 8,225"  
    
      },
      {
        id:14,
        image:"https://www.jcrew.com/s7-img-facade/M1805_PP4008?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Sherpa-lined suede slippers",
        price:"INR 8,225"  
    
      },
      {
        id:15,
        image:"https://www.jcrew.com/s7-img-facade/BL836_PP4005?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Lined wool slippers",
        price:"INR 8,225"
    
      },
      {
        id:16,
        image:"https://www.jcrew.com/s7-img-facade/AZ665_YD2560?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW COLOR",
        desc:"Flannel pajama pant",
        price:"INR 4,769"  
    
      },
      {
        id:17,
        image:"https://www.jcrew.com/s7-img-facade/BJ013_PP3649?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Hampshire hand-sewn buckle shoes",
        price:"INR 34,281"  
    
      },
      {
        id:18,
        image:"https://www.jcrew.com/s7-img-facade/BJ013_PP3650?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Hampshire hand-sewn buckle shoes",
        price:"INR 34,281"
    
      },
      {
        id:19,
        image:"https://www.jcrew.com/s7-img-facade/BJ926_EE3341?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"New Balance@ 997H Cordura sneakers",
        price:"INR 12,441"  
    
      },
      {
        id:20,
        image:"https://www.jcrew.com/s7-img-facade/BE877_EE2237?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"New Balance@ X j.Crew CT300 sneakers",
        price:"INR 13,132"  
    
      },
      {
        id:21,
        image:"https://www.jcrew.com/s7-img-facade/BJ489_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"Alden@for J.Crew monk-strap dress shoes",
        desc:"Wallace & Barnes organic cotton bandana",
        price:"INR 90,263"
    
      }

    ]

    const three=data3.map((element)=>{
        return (
           
           <Box width="100%" height="auto" padding="20px" boxShadow= "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"  marginTop="50px" >
              <Image src={element.image} width="95%" height="70%"/>
              <p>{element.catagory}</p>
              <Heading size="md" marginTop="10px">{element.desc}</Heading>
              <Heading fontSize="15px" marginTop="10px">{element.price}</Heading>
              <NavLink to="/cart">Quick buy</NavLink>
           </Box>
         
        )
      })
    return (
      <div>
       <Box height="250px" width="70%" textAlign="center" border="1px solid red" margin="auto" backgroundColor="brown" marginTop="20px" color="white" paddingTop="35px" boxShadow= "rgb(38, 57, 77) 0px 20px 30px -10px">
            <Heading fontFamily="cursive">IntroducingThe heritage duck boot Originally designed in the early 1900s for hunters braving northeastern winters, these are relably built to carry you through the season.</Heading>
        </Box>
        <Box height="450px" width="90%" margin="auto" marginTop="30px" display="flex">
            <Image src="https://www.jcrew.com/brand_creative/2022/202212-Dec/m_shoes/2022dec_1108_m_shoes_img0.jpg" width="100%" height="100%"/>
        </Box>
         <Box display="grid" gridTemplateColumns="repeat(3, 1Fr)" height="100%" width="100%" gap="20px">
                {three}
                </Box>
                <Box height="450px" width="60%" margin="auto" marginTop="30px" display="flex" gap="20px" >
            <Image src="https://www.jcrew.com/s7-img-facade/BN187_PP4093?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=600&hei=600" width="50%" height="100%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"/>
            <Image src="https://www.jcrew.com/s7-img-facade/BC010_PP2015?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480" width="50%" height="100%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"/>
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