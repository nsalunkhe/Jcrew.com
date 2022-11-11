import {Box,Image,Heading,Link} from "@chakra-ui/react"


export default function Cart() {
    return (
        <div>
      <Box height="500px" width="90%" margin="auto" display="flex" gap="50px" marginTop="50px" textAlign="start">
        <Box height="100%" width="40%" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            <Image src="https://www.jcrew.com/s7-img-facade/BN121_YD2415_d4?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540" height="100%"width="100%"></Image>
        </Box >
        <Box height="100%" width="50%" paddingTop="30px">
            <Heading size="sm" >NEW COLOR</Heading>
            <Heading size="md" marginTop="30px" fontWeight="medium">NEW COLOR Limited-edition set-of-four napkins in Black Watch tartan</Heading>
            <Heading size="sm" fontWeight="hairline">Item BN121</Heading>
            <Heading size="sm" color="navy">Color:Navy</Heading>
            <Image src="https://www.jcrew.com/s7-img-facade/BN121_YD2415_sw?$pdp_sw20$" height="40px" width="40px" borderRadius="50%"></Image>
             <Heading size="sm" fontWeight="hairline">Size:One Size</Heading>
             <Heading size="sm"fontWeight="hairline" >All sizes are US sizes.</Heading>
             <Heading size="sm">Product details</Heading>
             <Heading size="sm" fontWeight="hairline">Introducing our limited-edition home collection, an exclusive capsule of cotton bedding and table linens made with some of our favorite prints. By buying cotton products from J.Crew, you're supporting our investment in Better Cotton's mission to help cotton communities survive and thrive while protecting and restoring the environment. This product is sourced through a system of mass balance and therefore may not contain Better Cotton. All J.Crew home products are eligible for return in accordance with our return policy. Items that have been opened or removed from original packaging are not eligible for return.</Heading>
             <ul style={{marginLeft:"30px" }}>
                <li>Cotton.</li>
                <li>Select stores.</li>
                <li>Item BN121.</li>
             </ul>
             <Box height="40px" width="300px" backgroundColor="black" color="white" textAlign="center" paddingTop="7px" >
             <Link href="https://www.jcrew.com/in/help/international-orders">CHECKOUT NOW</Link>
             </Box>
        </Box>
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