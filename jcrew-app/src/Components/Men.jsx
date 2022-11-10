import {Box,Image,Heading} from "@chakra-ui/react"
import { Link,NavLink } from "react-router-dom"
export default function Men() {

    const data3=[
        {
        id:1,
        image:"https://www.jcrew.com/s7-img-facade/BC199_WQ6295?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Flannel pajama set",
        price:"INR 13,547"  
    
      },
      {
        id:2,
        image:"https://www.jcrew.com/s7-img-facade/BK216_RD6052?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Heavyweight chamois workshirt",
        price:"INR 8,225"  
    
      },
      {
        id:3,
        image:"https://www.jcrew.com/s7-img-facade/AZ972_SR0059?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"TOP RATED",
        desc:"Cashmere cable-knit sweater",
        price:"INR 31,516"
    
      },
      {
        id:4,
        image:"https://www.jcrew.com/s7-img-facade/BD014_SR0059?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Cashmere beanie",
        price:"INR 5,046"  
    
      },
      {
        id:5,
        image:"https://www.jcrew.com/s7-img-facade/BL820_SR0815?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Marled cotton crewneck sweater",
        price:"INR 6,152"  
    
      },
      {
        id:6,
        image:"https://www.jcrew.com/s7-img-facade/BJ316_PP3789?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW COLOR",
        desc:"Wool suit belt",
        price:"INR 9,607"
    
      },
      {
        id:7,
        image:"https://www.jcrew.com/s7-img-facade/BJ471_WZ2197?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Wallace & Barnes wool work jacket with PrimaLoft@",
        price:"INR 27,369"  
    
      },
      {
        id:8,
        image:"https://www.jcrew.com/s7-img-facade/AU407_PP4376?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Fair Isle critter socks",
        price:"INR 2,005"  
    
      },
      {
        id:9,
        image:"https://www.jcrew.com/s7-img-facade/BJ117_PP3514?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Heritage wool-blend baseball cap",
        price:"INR 7,534"
    
      },
      {
        id:10,
        image:"https://www.jcrew.com/s7-img-facade/J5425_WZ2386?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Ludlow Slim-fit-collor tuxedo jacket in velvet",
        price:"INR 41,192"  
    
      },
      {
        id:11,
        image:"https://www.jcrew.com/s7-img-facade/H8038_YD2531?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Pajama set in cotton poplin" ,
        price:"INR 12,372"  
    
      },
      {
        id:12,
        image:"https://www.jcrew.com/s7-img-facade/BC197_RD5633?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Waffle union suit",
        price:"INR 13,547"
    
      },
      {
        id:13,
        image:"https://www.jcrew.com/s7-img-facade/BJ706_PT2649?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW COLOR",
        desc:"Secret Wash cotton poplin shirt",
        price:"INR 10,990"  
    
      },
      {
        id:14,
        image:"https://www.jcrew.com/s7-img-facade/BM332_PP3826?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"English wool bucket hat in cocktail plaid",
        price:"INR 10,368"  
    
      },
      {
        id:15,
        image:"https://www.jcrew.com/s7-img-facade/BM633_PP3887?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Joshua Ellis for J.Crew cashmere scarf in tartan",
        price:"INR 20,458"
    
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
        image:"https://www.jcrew.com/s7-img-facade/BH279_EE2694?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"CB Sports three-snap pouch pullover",
        price:"INR 15,205"  
    
      },
      {
        id:18,
        image:"https://www.jcrew.com/s7-img-facade/BJ309_RD6161?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Half zip rugby shirt",
        price:"INR 12,372"
    
      },
      {
        id:19,
        image:"https://www.jcrew.com/s7-img-facade/BJ061_GR5673?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Wallace & Barnes canvas work jacket",
        price:"INR 27,369"  
    
      },
      {
        id:20,
        image:"https://www.jcrew.com/s7-img-facade/BM103_GR6070?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Burshed wool polo sweater",
        price:"INR 21,840"  
    
      },
      {
        id:21,
        image:"https://www.jcrew.com/s7-img-facade/BN618_PP4046?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Wallace & Barnes organic cotton bandana",
        price:"INR 2,696"
    
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
        <Box height="150px" width="400px" textAlign="center" margin="auto" backgroundColor="skyBlue" marginTop="20px" color="black" paddingTop="35px" fontFamily="cursive" boxShadow= "rgb(38, 57, 77) 0px 20px 30px -10px">
            <Heading>Mens’ new arrivals</Heading>
        </Box>
        <Box height="450px" width="60%" margin="auto" marginTop="30px" display="flex">
            <Image src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_m_img0.jpg" width="50%" height="100%"/>
            <Image src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_m_img2.jpg" width="50%" height="100%"/>
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