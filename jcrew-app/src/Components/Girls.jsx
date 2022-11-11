import {Box,Image,Heading} from "@chakra-ui/react"
import { Link,NavLink } from "react-router-dom"

export default function Girls() {

    const data3=[
        {
        id:1,
        image:"https://www.jcrew.com/s7-img-facade/BM573_YD2359?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        catagory:"NEW",
        desc:"Girls'smocked puff-sleeve dress in tartan",
        price:"INR 12,372"  
    
      },
      {
        id:2,
        image:"https://www.jcrew.com/s7-img-facade/BL685_YD2359?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Girls'ruffle cotton poplin top in tartan",
        price:"INR 7,603"  
    
      },
      {
        id:3,
        image:"https://www.jcrew.com/s7-img-facade/BJ702_GR5673?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Girls'chateau parka in stadium-cloth wool",
        price:"INR 31,516"
    
      },
      {
        id:4,
        image:"https://www.jcrew.com/s7-img-facade/BM142_GP0251?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Girls'sequin holiday graphic T-shirt",
        price:"INR 5,046"  
    
      },
      {
        id:5,
        image:"https://www.jcrew.com/s7-img-facade/BM588_YD2359?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Girls'tiered ruffle skirt in Good Tidings plaid",
        price:"INR 8,225"  
    
      },
      {
        id:6,
        image:"https://www.jcrew.com/s7-img-facade/BM608_RD6052?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Girls' velvet ballet flats",
        price:"INR 8,985"
    
      },
      {
        id:7,
        image:"https://www.jcrew.com/s7-img-facade/BM144_GP0264?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Girls'long-sleeve sequin graphic T-shirt",
        price:"INR 5,046"  
    
      },
      {
        id:8,
        image:"https://www.jcrew.com/s7-img-facade/BM613_RD6052?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Girls'beaded tiara headband",
        price:"INR 3,87"  
    
      },
      {
        id:9,
        image:"https://www.jcrew.com/s7-img-facade/BL997_PT3356?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Girls' fleece mockneck sweatshirt",
        price:"INR 6,843"
    
      },
      {
        id:10,
        image:"https://www.jcrew.com/s7-img-facade/BM597_PT3460?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW COLOR",
        desc:"Girls'printed everyday leggins",
        price:"INR 3,387"  
    
      },
      {
        id:11,
        image:"https://www.jcrew.com/s7-img-facade/BM577_SR0123?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Girls'mixy sweater-dress in Good Tidings plaid" ,
        price:"INR 12,372"  
    
      },
      {
        id:12,
        image:"https://www.jcrew.com/s7-img-facade/BM598_PT3356?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Girls'classic fleece sweatpant",
        price:"INR 6,843"
    
      },
      {
        id:13,
        image:"https://www.jcrew.com/s7-img-facade/BM049_GP0296?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Girls' graphic crewneck sweatshirt",
        price:"INR 7,603"  
    
      },
      {
        id:14,
        image:"https://www.jcrew.com/s7-img-facade/BM579_PT3370?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Girls'jacqured dress in metalic leopard",
        price:"INR 13,547"  
    
      },
      {
        id:15,
        image:"https://www.jcrew.com/s7-img-facade/AZ657_WT0002?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Girls' tissue turtleneck",
        price:"INR 3,664"
    
      },
      {
        id:16,
        image:"https://www.jcrew.com/s7-img-facade/BM590_PT3461?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Girls'everyday leggins in fair Isle",
        price:"INR 4,078"  
    
      },
      {
        id:17,
        image:"https://www.jcrew.com/s7-img-facade/BM594_PT3370_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Girls'jacqured skirt in metalic leopard",
        price:"INR 7,603"  
    
      },
      {
        id:18,
        image:"https://www.jcrew.com/s7-img-facade/BM578_BL6622?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Girls crewneck mixy e=with tulle",
        price:"INR 10,368"
    
      },
      {
        id:19,
        image:"https://www.jcrew.com/s7-img-facade/BM578_PK6148_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Girls'crewneck mixy dress with tulle",
        price:"INR 10,368"  
    
      },
      {
        id:20,
        image:"https://www.jcrew.com/s7-img-facade/BK286_PT2483?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Kids'long-sleeve printed sleep set",
        price:"INR 6,843"  
    
      },
      {
        id:21,
        image:"https://www.jcrew.com/s7-img-facade/BL647_SR0121?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Kids'fair Isle crewneck sweater",
        price:"INR 9,607"
    
      }

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
        <Box height="150px" width="400px" textAlign="center" margin="auto" backgroundColor="Purple" marginTop="20px" color="white" paddingTop="35px" boxShadow= "rgb(38, 57, 77) 0px 20px 30px -10px">
            <Heading fontFamily="cursive">Girls’ new arrivals</Heading>
        </Box>
        <Box height="450px" width="70%" margin="auto" marginTop="30px" display="flex">
            <Image src="https://www.jcrew.com/brand_creative/2022/202212-Dec/cc_newarrivals/2022dec_1108_cc_g_na_img1.jpg" width="50%" height="100%"/>
            <Image src="https://www.jcrew.com/brand_creative/2022/202212-Dec/cc_newarrivals/2022dec_1108_cc_g_na_img2.jpg" width="50%" height="100%"/>
        </Box>
         <Box display="grid" gridTemplateColumns="repeat(3, 1Fr)" height="100%" width="100%" gap="20px">
                {three}
                </Box>
                <Box height="450px" width="60%" margin="auto" marginTop="30px"  gap="20px" display="flex">
            <Image src="https://www.jcrew.com/brand_creative/2022/202212-Dec/partyshop/2022dec_1108_w_partyshop_img10.jpg" width="50%" height="100%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"/>
            <Image src="https://www.jcrew.com/s7-img-facade/BN326_EC8333?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480" width="50%" height="100%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"/>
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