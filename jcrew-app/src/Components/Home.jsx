import {Box,Image,Heading} from "@chakra-ui/react"
import Logo from "../Images/JCREW LOGO.png"
import { Link } from "@chakra-ui/react"


export default function Home() {
           
    const data=[
        {
          id:1,
          image:"https://www.jcrew.com/s7-img-facade/BN121_YD2415?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"NEW",
          desc:"Limited-edition set-of-four napkins in Black watch tartan",
          price:"INR 5,530"
        },
        { 
         id:2,
          image:"https://www.jcrew.com/s7-img-facade/BN068_YD2415?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"NEW",
          desc:"Limited-edition det-of-four placemats in Black watch tartan",
          price:"INR 6,912"
        },
        {
          id:3,
          image:"https://www.jcrew.com/s7-img-facade/BN064_YD2415?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
          catagory:"NEW",
          desc:"Limited-edition tablecloth in Black watch tartan",
          price:"INR 13,547"

        },
       
    ]
    
    const data2=[ {
            id:4,
            image:"https://www.jcrew.com/s7-img-facade/BN066_YD2455?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
            catagory:"NEW",
            desc:"Limited-edition set-of-four napkins in Stewart tartan",
            price:"INR 5,530"  
        
          },
          {
            id:5,
            image:"https://www.jcrew.com/s7-img-facade/BN070_YD2455?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
            catagory:"NEW",
            desc:"Limited-edition set-of-four placemats in Stewart tartan",
            price:"INR 6,912"  
        
          },
          {
            id:6,
            image:"https://www.jcrew.com/s7-img-facade/BM663_YD2455?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
            catagory:"NEW",
            desc:"Limited-edition tablecloth in Good tidings plaid",
            price:"INR 13,547"
        
          }]
   

    const data3=[ {
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
        image:"https://www.jcrew.com/s7-img-facade/BN053_PT2648?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition full/queen duvet set in Liberty@Toutouayette fabric",
        price:"INR 34,281"  
    
      },
      {
        id:8,
        image:"https://www.jcrew.com/s7-img-facade/BN083_PT2660?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition full/queen duvet set in Liberty@ May Nouveau fabric",
        price:"INR 34,281"  
    
      },
      {
        id:9,
        image:"https://www.jcrew.com/s7-img-facade/BN084_PT0598?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition full/queen duvet set in Black Watch tartan",
        price:"INR 30,134"
    
      },
      {
        id:10,
        image:"https://www.jcrew.com/s7-img-facade/BN051_YD2415?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition full/queen duvet set in Liberty@ Poppy Amelie fabric",
        price:"INR 34,281"  
    
      },
      {
        id:11,
        image:"https://www.jcrew.com/s7-img-facade/BN090_PT0598?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition king duvet set in Liberty@Tudor Tulip fabric",
        price:"INR 37,045"  
    
      },
      {
        id:12,
        image:"https://www.jcrew.com/s7-img-facade/BN054_YD2415?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition king/ California king duvet set in Liberty@Toutouayette fabric",
        price:"INR 37,045"
    
      }, {
        id:13,
        image:"https://www.jcrew.com/s7-img-facade/BM511_YD2419_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Boys'rugby crewneck sweatshirt in french terry",
        price:"INR 9,607"  
    
      },
      {
        id:14,
        image:"https://www.jcrew.com/s7-img-facade/BM506_SR0882?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Kids' bear Fair Isle sweater in lambswool bend ",
        price:"INR 10,990"  
    
      },
      {
        id:15,
        image:"https://www.jcrew.com/s7-img-facade/BC670_BL9141?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Kids'quilted jersey reversible half-zip sweatshirt",
        price:"INR 12,372"
    
      },
      {
        id:16,
        image:"https://www.jcrew.com/s7-img-facade/BM630_SR0259?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"OLD",
        desc:"Kids' wool-blend Fair Isle beanie ",
        price:"INR 5,460"  
    
      },
      {
        id:17,
        image:"https://www.jcrew.com/s7-img-facade/AZ841_NA6445?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"OLD",
        desc:"Boys' long-sleeve waffle T-shirt",
        price:"INR 6,221"  
    
      },
      {
        id:18,
        image:"https://www.jcrew.com/s7-img-facade/BM650_KF5316?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"OLD",
        desc:"Kids'long-sleeve fa-la-la graphic T-shirt ",
        price:"INR 4,493"
    
      },
      {
        id:19,
        image:"https://www.jcrew.com/s7-img-facade/BN091_PT0518?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition king/ California king duvet set in Liberty@ May Nouveau fabric",
        price:"INR 37,045"  
    
      }, {
        id:20,
        image:"https://www.jcrew.com/s7-img-facade/BC199_WQ6295?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Flannel pajama set",
        price:"INR 13,547"  
    
      },
      {
        id:21,
        image:"https://www.jcrew.com/s7-img-facade/BK216_RD6052?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Heavyweight chamois workshirt",
        price:"INR 8,225"  
    
      },
      {
        id:22,
        image:"https://www.jcrew.com/s7-img-facade/AZ972_SR0059?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"TOP RATED",
        desc:"Cashmere cable-knit sweater",
        price:"INR 31,516"
    
      },
      {
        id:23,
        image:"https://www.jcrew.com/s7-img-facade/BD014_SR0059?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"BEST SELLER",
        desc:"Cashmere beanie",
        price:"INR 5,046"  
    
      },
      {
        id:24,
        image:"https://www.jcrew.com/s7-img-facade/BL820_SR0815?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"",
        desc:"Marled cotton crewneck sweater",
        price:"INR 6,152"  
    
      },
      {
        id:25,
        image:"https://www.jcrew.com/s7-img-facade/BJ316_PP3789?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW COLOR",
        desc:"Wool suit belt",
        price:"INR 9,607"
    
      },
      {
        id:26,
        image:"https://www.jcrew.com/s7-img-facade/BN059_PT2648?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition king duvet set in Black Watch tartan",
        price:"INR 32,899"  
    
      },
      {
        id:27,
        image:"https://www.jcrew.com/s7-img-facade/BN086_PT2660?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition king/ California king duvet set in Liberty@ Poppy Amelie fabric",
        price:"INR 37,045"
    
      },
      {
        id:28,
        image:"https://www.jcrew.com/s7-img-facade/BN053_PT2648?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition twin XL sheet set in Liberty@Tudor Tulip fabric",
        price:"INR 27,369"  
    
      },
      {
        id:29,
        image:"https://www.jcrew.com/s7-img-facade/BN083_PT2660?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition twin XL sheet set in Liberty@ Toutouayette fabric" ,
        price:"INR 27,369"  
    
      },
      {
        id:30,
        image:"https://www.jcrew.com/s7-img-facade/BN084_PT0598?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition twin XL sheet set in Liberty@May Nouveau fabric",
        price:"INR 27,369"
    
      },
      {
        id:31,
        image:"https://www.jcrew.com/s7-img-facade/BN051_YD2415?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition twin XL sheet set in Black Watch tartan",
        price:"INR 24,605"  
    
      },
      {
        id:32,
        image:"https://www.jcrew.com/s7-img-facade/BN085_PT0518?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition twin XL sheet set in Liberty@Poppy Amelie fabric",
        price:"INR 27,369"  
    
      },
      {
        id:33,
        image:"https://www.jcrew.com/s7-img-facade/BN056_PT2648?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition full sheet set in Liberty@Tudor Tulip fabric",
        price:"INR 32,899"
    
      },
      {
        id:34,
        image:"https://www.jcrew.com/s7-img-facade/BN089_PT2660?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition full sheet set in Liberty@ Toutouayette fabric",
        price:"INR 32,899"  
    
      },
      {
        id:35,
        image:"https://www.jcrew.com/s7-img-facade/BN090_PT0598?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition full sheet set in Liberty@May Nouveau fabric",
        price:"INR 32,899"  
    
      },
      {
        id:36,
        image:"https://www.jcrew.com/s7-img-facade/BN091_PT0518?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition full sheet set in Black Watch tartan",
        price:"INR 27,369"
    
      },
      {
        id:37,
        image:"https://www.jcrew.com/s7-img-facade/BN091_PT0518?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition full/queen set in Liberty@ Poppy Amelie fabric",
        price:"INR 32,899"  
    
      },
      {
        id:38,
        image:"https://www.jcrew.com/s7-img-facade/BN057_YD2415?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition queen sheet set in Liberty@Tudor Tulip fabric",
        price:"INR 34,281"  
    
      },
      {
        id:39,
        image:"https://www.jcrew.com/s7-img-facade/BN088_PT0518?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"ONLY A FEW LEFT",
        desc:"Limited-edition full sheet set in Liberty@ Toutouayette fabric",
        price:"INR 34,281"
    
      }

    ]


   const one=data.map((element)=>{
     return (
        <Box width="30%" height="auto" padding="20px" boxShadow= "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" marginTop="50px">
           <Image src={element.image} width="95%" height="70%"/>
           <p>{element.catagory}</p>
           <Heading size="md" marginTop="10px">{element.desc}</Heading>
           <Heading fontSize="15px" marginTop="10px">{element.price}</Heading>
        </Box>
     )
   })
   const two=data2.map((element)=>{
    return (
       <Box width="30%" height="auto" padding="20px" boxShadow= "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"  marginTop="50px">
          <Image src={element.image} width="95%" height="70%"/>
          <p>{element.catagory}</p>
          <Heading size="md" marginTop="10px">{element.desc}</Heading>
          <Heading fontSize="15px" marginTop="10px">{element.price}</Heading>
       </Box>
    )
  })
  
  const three=data3.map((element)=>{
    return (
       
       <Box width="100%" height="auto" padding="20px" boxShadow= "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"  marginTop="50px" >
          <Image src={element.image} width="95%" height="70%"/>
          <p>{element.catagory}</p>
          <Heading size="md" marginTop="10px">{element.desc}</Heading>
          <Heading fontSize="15px" marginTop="10px">{element.price}</Heading>
       </Box>
     
    )
  })
       
          
    return (
      <div>
            <Box width="100%" height="400px" margin="auto" display="flex" justifyContent="center" backgroundColor="grey">
                <Box width="25%" height="100%">
                    <Image src={Logo} height="100%" width="100%"></Image>
                </Box>
                <Box width="25%" height="100%"  backgroundColor="olive"paddingTop="70px" >
                    <Heading size="md" color="white">For your next dinner party…</Heading>
                    <Heading color="orange">The J.Crew home collection</Heading>
                    <Heading size="md">In new fabrics from Liberty® and our own classic prints.</Heading>
                </Box>
                <Box width="25%" height="100%">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzVu2bBDcM8MFDsle-VvyJzVCYo51mYhQmw&usqp=CAU" height="100%" width="100%"></Image>
                </Box>
            </Box>
            {/*--------section2 begins------------------------------------------------------------------------------------------- */}


             <Box display="flex" justifyContent="center" height="400px" width="100%" gap="20px">
                {one}
             </Box>
             <Box display="flex" justifyContent="center" height="400px" width="100%" gap="20px">
                {two}
             </Box>
           {/* ----------------section3 begins------------------------ */}
           <Box  width="80%" height="600px"  margin="auto"  marginTop="30px" display="flex" gap="30px" marginBottom="50px">
             <Box width="55%" height="100%" boxShadow= "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"><Image src="https://www.jcrew.com/brand_creative/2022/202211-Nov/home/2022nov_1025_w_home_grid_img0.jpg" height="100%" width="100%"/></Box>
             <Box width="45%" height="100%" boxShadow= "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"><Image src="https://www.jcrew.com/brand_creative/2022/202211-Nov/home/2022nov_1025_w_home_img6.jpg" height="100%" width="100%"/></Box>
             </Box>
        
               <Box display="grid" gridTemplateColumns="repeat(3, 1Fr)" height="100%" width="100%" gap="20px">
                {three}
                </Box>
              
             {/* ------------Here is my Footer section -------------------------------------*/}
               

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



