import {Box,Image,Heading} from "@chakra-ui/react"
import { Link,NavLink } from "react-router-dom"
export default function Gift() {

    const data3=[
        {
        id:1,
        image:"https://www.jcrew.com/s7-img-facade/BN067_PT2648?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480",
        catagory:"",
        desc:"Limited-edition set-of-four napkins in Liberty@ fabrics",
        price:"INR 5,530"  
    
      },
      {
        id:2,
        image:"https://www.jcrew.com/s7-img-facade/BM672_PT2726?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Apotheke X J.Crew First Snow in Oslo candle",
        price:"INR 2,696"  
    
      },
      {
        id:3,
        image:"https://www.jcrew.com/s7-img-facade/BN785_EE3850?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Placeworks puzzle set",
        price:"INR 5,253"
    
      },
      {
        id:4,
        image:"https://www.jcrew.com/s7-img-facade/BN069_PT2648?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Limited-edition set-of-four placemats in Liberty@ fabrics",
        price:"INR 6,912"  
    
      },
      {
        id:5,
        image:"https://www.jcrew.com/s7-img-facade/BN065_PT2648?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Limited-edition tablecloth in Liberty@ fabrics",
        price:"INR 17,694"  
    
      },
      {
        id:6,
        image:"https://www.jcrew.com/s7-img-facade/BN048_PT2648?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition queen duvet set in Liberty@ Tudor Tulip fabric",
        price:"INR 34,281"
    
      },
      {
        id:7,
        image:"https://www.jcrew.com/s7-img-facade/BG661_EE2615?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Barbour@ quilted dog bed",
        price:"INR 13,823"  
    
      },
      {
        id:8,
        image:"https://www.jcrew.com/s7-img-facade/BR738_EE4805?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        catagory:"ONLY A FEW LEFT",
        desc:"Forest Green hand-poured candle",
        price:"INR 6,221"  
    
      },
      {
        id:9,
        image:"https://www.jcrew.com/s7-img-facade/BN062_PT2648?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition king sheet set in Liberty® Tudor Tulip fabric",
        price:"INR 35,663"
    
      },
      {
        id:10,
        image:"https://www.jcrew.com/s7-img-facade/BM673_PT2724?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        catagory:"",
        desc:"Apotheke X J.Crew First Powder in Aspen candle",
        price:"INR 2,696"  
    
      },
      {
        id:11,
        image:"https://www.jcrew.com/s7-img-facade/BN068_YD2415?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        catagory:"NEW",
        desc:"Limited-edition set-of-four placemats in Black Watch tartan" ,
        price:"INR 6,912"  
    
      },
      {
        id:12,
        image:"https://www.jcrew.com/s7-img-facade/BN121_YD2415?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        catagory:"NEW COLOR",
        desc:"Limited-edition set-of-four napkins in Black Watch tartan",
        price:"INR 5,530"
    
      },
      {
        id:13,
        image:"https://www.jcrew.com/s7-img-facade/BN292_YD3034?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Apron in limited-edition J.Crew prints",
        price:"INR 6,843"  
    
      },
      {
        id:14,
        image:"https://www.jcrew.com/s7-img-facade/BG765_EE2623?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        catagory:"",
        desc:"Girls'jacqured dress in metalic leopard",
        price:"INR 7,465"  
    
      },
      {
        id:15,
        image:"https://www.jcrew.com/s7-img-facade/BN064_YD2415?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        catagory:"NEW COLOR",
        desc:"Limited-edition tablecloth in Black Watch tartan",
        price:"INR 13,547"
    
      },
      {
        id:16,
        image:"https://www.jcrew.com/s7-img-facade/09491_EF7274?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        catagory:"",
        desc:"ShedRain® for J.Crew umbrella",
        price:"INR 5,460"  
    
      },
      {
        id:17,
        image:"https://www.jcrew.com/s7-img-facade/BN156_PP3967?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        catagory:"ONLY A FEW LEFT",
        desc:"Double-faced blanket in English wool",
        price:"INR 22,808"  
    
      },
      {
        id:18,
        image:"https://www.jcrew.com/s7-img-facade/BM985_EE3656?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        catagory:"",
        desc:"Snow Peak® fireside gloves",
        price:"INR 8,978"
    
      },
      {
        id:19,
        image:"https://www.jcrew.com/s7-img-facade/BM984_EE3651?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        catagory:"",
        desc:"Snow Peak® Pack & Carry fireplace",
        price:"INR 19,345"  
    
      },
      {
        id:20,
        image:"https://www.jcrew.com/s7-img-facade/BM726_EE3854?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        catagory:"ONLY A FEW LEFT",
        desc:"Assouline Aspen Style book",
        price:"INR 13,132"  
    
      },
      {
        id:21,
        image:"https://www.jcrew.com/s7-img-facade/BL703_EE3627?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
        catagory:"",
        desc:"Pendleton® Yakima Camp striped wool throw blanket",
        price:"INR 17,832"
    
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
       <Box height="250px" width="70%" textAlign="center" margin="auto" backgroundColor="purple" marginTop="20px" color="white" paddingTop="35px" boxShadow= "rgb(38, 57, 77) 0px 20px 30px -10px">
            <Heading fontFamily="serif" fontSize="40px">The Gift Guide</Heading>
            <Heading fontFamily="serif" fontSize="30px">Creative, artful, inspiring ideas for everyone on your list at every price.</Heading>
        </Box>
            <Box height="450px" width="60%" margin="auto" marginTop="30px" display="flex" gap="20px" >
               <Image src="https://alithadnews.com/wp-content/uploads/2020/04/Gift-Box.jpg" width="50%" height="100%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"/>
               <Image src="https://i2.wp.com/itsalwaysautumn.com/wp-content/uploads/2019/05/explosion-gift-box.jpg" width="50%" height="100%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"/>
             </Box>
       
         <Box display="grid" gridTemplateColumns="repeat(3, 1Fr)" height="100%" width="100%" gap="20px">
                {three}
                </Box>

                <Box height="450px" width="90%" margin="auto" marginTop="30px" display="flex">
                    <Image src="https://wallpapercave.com/wp/wp2060600.jpg" width="100%" height="100%"/>
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


 