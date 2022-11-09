import {Box,Image,Heading} from "@chakra-ui/react"
import Logo from "../Images/JCREW LOGO.png"

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
   

    const data3=[
        {
        id:1,
        image:"https://www.jcrew.com/s7-img-facade/BN053_PT2648?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition set-of-four napkins in Stewart tartan",
        price:"INR 5,530"  
    
      },
      {
        id:2,
        image:"https://www.jcrew.com/s7-img-facade/BN083_PT2660?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition set-of-four placemats in Stewart tartan",
        price:"INR 6,912"  
    
      },
      {
        id:3,
        image:"https://www.jcrew.com/s7-img-facade/BN084_PT0598?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition tablecloth in Good tidings plaid",
        price:"INR 13,547"
    
      },
      {
        id:4,
        image:"https://www.jcrew.com/s7-img-facade/BN051_YD2415?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition set-of-four napkins in Stewart tartan",
        price:"INR 5,530"  
    
      },
      {
        id:5,
        image:"https://www.jcrew.com/s7-img-facade/BN090_PT0598?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition set-of-four placemats in Stewart tartan",
        price:"INR 6,912"  
    
      },
      {
        id:6,
        image:"https://www.jcrew.com/s7-img-facade/BN054_YD2415?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition tablecloth in Good tidings plaid",
        price:"INR 13,547"
    
      },
      {
        id:7,
        image:"https://www.jcrew.com/s7-img-facade/BN091_PT0518?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition set-of-four napkins in Stewart tartan",
        price:"INR 5,530"  
    
      },
      {
        id:8,
        image:"https://www.jcrew.com/s7-img-facade/BN059_PT2648?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition set-of-four placemats in Stewart tartan",
        price:"INR 6,912"  
    
      },
      {
        id:9,
        image:"https://www.jcrew.com/s7-img-facade/BN086_PT2660?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition tablecloth in Good tidings plaid",
        price:"INR 13,547"
    
      },
      {
        id:10,
        image:"https://www.jcrew.com/s7-img-facade/BN053_PT2648?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition set-of-four napkins in Stewart tartan",
        price:"INR 5,530"  
    
      },
      {
        id:11,
        image:"https://www.jcrew.com/s7-img-facade/BN083_PT2660?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition set-of-four placemats in Stewart tartan",
        price:"INR 6,912"  
    
      },
      {
        id:12,
        image:"https://www.jcrew.com/s7-img-facade/BN084_PT0598?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition tablecloth in Good tidings plaid",
        price:"INR 13,547"
    
      },
      {
        id:13,
        image:"https://www.jcrew.com/s7-img-facade/BN051_YD2415?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition set-of-four napkins in Stewart tartan",
        price:"INR 5,530"  
    
      },
      {
        id:14,
        image:"https://www.jcrew.com/s7-img-facade/BN085_PT0518?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition set-of-four placemats in Stewart tartan",
        price:"INR 6,912"  
    
      },
      {
        id:15,
        image:"https://www.jcrew.com/s7-img-facade/BN056_PT2648?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition tablecloth in Good tidings plaid",
        price:"INR 13,547"
    
      },
      {
        id:16,
        image:"https://www.jcrew.com/s7-img-facade/BN089_PT2660?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition set-of-four napkins in Stewart tartan",
        price:"INR 5,530"  
    
      },
      {
        id:17,
        image:"https://www.jcrew.com/s7-img-facade/BN090_PT0598?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition set-of-four placemats in Stewart tartan",
        price:"INR 6,912"  
    
      },
      {
        id:18,
        image:"https://www.jcrew.com/s7-img-facade/BN091_PT0518?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition tablecloth in Good tidings plaid",
        price:"INR 13,547"
    
      },
      {
        id:19,
        image:"https://www.jcrew.com/s7-img-facade/BN066_YD2455?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition set-of-four napkins in Stewart tartan",
        price:"INR 5,530"  
    
      },
      {
        id:20,
        image:"https://www.jcrew.com/s7-img-facade/BN057_YD2415?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition set-of-four placemats in Stewart tartan",
        price:"INR 6,912"  
    
      },
      {
        id:21,
        image:"https://www.jcrew.com/s7-img-facade/BN088_PT0518?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=309&hei=309",
        catagory:"NEW",
        desc:"Limited-edition tablecloth in Good tidings plaid",
        price:"INR 13,547"
    
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
              
             
      </div>
    );
  }



