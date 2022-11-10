export default function Women() {
    return (
      <div>
        <h1>Women</h1>
      </div>
    );
  }import {Box,Image,Heading} from "@chakra-ui/react"
  import { Link,NavLink } from "react-router-dom"
  export default function Women() {
  
      const data3=[
          {
          id:1,
          image:"https://www.jcrew.com/s7-img-facade/BD613_SU9614_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"BEST SELLER",
          desc:"Rollneck sweater in Supersoft yarn",
          price:"INR 12,372"  
      
        },
        {
          id:2,
          image:"https://www.jcrew.com/s7-img-facade/F8444_EE3355?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"BEST SELLER",
          desc:"Nordic boots",
          price:"INR 15,827"  
      
        },
        {
          id:3,
          image:"https://www.jcrew.com/s7-img-facade/BM312_PT3361_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"NEW",
          desc:"Tissue turtleneck in ivory plaid",
          price:"INR 6,221"
      
        },
        {
          id:4,
          image:"https://www.jcrew.com/s7-img-facade/BM931_YD2191_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"",
          desc:"Classic-fit flannel shirt in Snowy Stewart tartan",
          price:"INR 13,547"  
      
        },
        {
          id:5,
          image:"https://www.jcrew.com/s7-img-facade/BM342_GR7105_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"NEW",
          desc:"Perfect-fit turtleneck with jewel buttons",
          price:"INR 10,990"  
      
        },
        {
          id:6,
          image:"https://www.jcrew.com/s7-img-facade/BN309_GY6372?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"BEST SELLER",
          desc:"Lightweight sculpted hoop earrings",
          price:"INR 6,635"
      
        },
        {
          id:7,
          image:"https://www.jcrew.com/s7-img-facade/BM403_SR0918_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"NEW",
          desc:"Cashmere Fair Isle pullover sweater",
          price:"INR 17,694"  
      
        },
        {
          id:8,
          image:"https://www.jcrew.com/s7-img-facade/BA400_SU3832_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"BEST SELLER",
          desc:"Cashmere classic-fit crewneck sweater",
          price:"INR 17694"  
      
        },
        {
          id:9,
          image:"https://www.jcrew.com/s7-img-facade/BM948_GR5673_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"BEST SELLER",
          desc:"New chateau parka in Italian stadium-cloth wool",
          price:"INR 27,577"
      
        },
        {
          id:10,
          image:"https://www.jcrew.com/s7-img-facade/H1891_EE1584?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"new color",
          desc:"Perfect Winter boots with shearling",
          price:"INR 27,369"  
      
        },
        {
          id:11,
          image:"https://www.jcrew.com/s7-img-facade/BN125_GR7084_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"NEW",
          desc:"Velvet jeweled button-frontmini dress" ,
          price:"INR 31,516"  
      
        },
        {
          id:12,
          image:"https://www.jcrew.com/s7-img-facade/BE043_SU8672_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"",
          desc:"FairIsle cardigan",
          price:"INR 20,458"
      
        },
        {
          id:13,
          image:"https://www.jcrew.com/s7-img-facade/BE159_NA7096_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"NEW COLOR",
          desc:"Relaxed rollneck sweater",
          price:"INR 13,547"  
      
        },
        {
          id:14,
          image:"https://www.jcrew.com/s7-img-facade/BM896_YD2172_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"NEW",
          desc:"Pleated taffeta skirt in Good Tidings plaid",
          price:"INR 27,369"  
      
        },
        {
          id:15,
          image:"https://www.jcrew.com/s7-img-facade/BM561_RD6052_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"NEW",
          desc:"Lousia lady jacket in italian boiled wool",
          price:"INR 38,428"
      
        },
        {
          id:16,
          image:"https://www.jcrew.com/s7-img-facade/BM214_SR0147_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"",
          desc:"Cashmere cable-knit crewneck sweater",
          price:"INR 24,605"  
      
        },
        {
          id:17,
          image:"https://www.jcrew.com/s7-img-facade/BM789_NA6764_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"NEW",
          desc:"Chunky cable-knit scarf",
          price:"INR 12,372"  
      
        },
        {
          id:18,
          image:"https://www.jcrew.com/s7-img-facade/BK728_RD6052_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"NEW COLOR",
          desc:"Sequin mini skirt",
          price:"INR 19,076"
      
        },
        {
          id:19,
          image:"https://www.jcrew.com/s7-img-facade/BM264_NA6764_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"",
          desc:"Cashmere cropped turtleneck sweater",
          price:"INR 19,076"  
      
        },
        {
          id:20,
          image:"https://www.jcrew.com/s7-img-facade/BN347_RD6052?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"NEW",
          desc:"Triple crystle drop earrings",
          price:"INR 3,387"  
      
        },
        {
          id:21,
          image:"https://www.jcrew.com/s7-img-facade/BM897_SR0399_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"NEW",
          desc:"Fair Isle sweater-skirt",
          price:"INR 13,547"
      
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
          <Box height="150px" width="500px" textAlign="center" margin="auto" backgroundColor="green" marginTop="20px" color="white" paddingTop="35px" boxShadow= "rgb(38, 57, 77) 0px 20px 30px -10px">
              <Heading fontFamily="cursive">The Holiday Collection</Heading>
              <Heading fontFamily="cursive">Women</Heading>
          </Box>
          <Box height="450px" width="60%" margin="auto" marginTop="30px" display="flex" gap="20px" >
              <Image src="https://www.jcrew.com/brand_creative/2022/202212-Dec/w_newarrivals/2022dec_1108_w_na_img0.jpg" width="50%" height="100%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"/>
              <Image src="https://www.jcrew.com/brand_creative/2022/202212-Dec/w_newarrivals/2022dec_1108_w_na_img5.jpg" width="50%" height="100%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"/>
          </Box>
           <Box display="grid" gridTemplateColumns="repeat(3, 1Fr)" height="100%" width="100%" gap="20px">
                  {three}
                  </Box>
  
                  <Box height="450px" width="60%" margin="auto" marginTop="30px" display="flex" gap="20px" >
              <Image src="https://www.jcrew.com/s7-img-facade/BN125_GR7084_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540" width="50%" height="100%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"/>
              <Image src="https://www.jcrew.com/brand_creative/2022/202212-Dec/flyout/2022dec_1108_flyouts_w_img0.jpg" width="50%" height="100%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"/>
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