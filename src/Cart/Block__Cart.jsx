import { Box, Button, Grid, Image, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import { BsFillHeartFill, BsBagDash } from "react-icons/bs";
import { Link } from "react-router-dom"
import { StoreContext } from "../Context/Context";
import { useContext } from "react";
import { ProductContext } from "../Context/ContextProduct";

export default function Block__Cart() {

    let [ data ] = useContext(StoreContext)
    let { Product, setProduct } = useContext(ProductContext)
    let { Like, setLike } = useContext(ProductContext)

    let AddProduct = (Item) => {
        let idPro = []
        Product.map(el => idPro.push(el.id))
        if (idPro.indexOf(Item.id) === -1) {
            setProduct((el) => [ ...el, Item ])   
        }
    }

    let AddLike = (Item) => {
        let idPro = []
        Like.map(el => idPro.push(el.id))
        if (idPro.indexOf(Item.id) === -1) {
            setLike((el) => [ ...el, Item ])
        }
        else{
            let liketodo = Like.filter((el) => {
                return el.id !== Item.id
            })
            setLike(liketodo)
        }
        let idLike = Like.map(el => el.id)
        data.filter((el) => {
            if (idLike.includes(el.id)) {
                
            }
        })
    }

    return (
        <>
            <Grid templateColumns={{ base: 'repeat(2, 3fr)', sm: 'repeat(2, 3fr)', md: 'repeat(3, 3fr)', lg: 'repeat(4, 3fr)', xl: 'repeat(5, 3fr)', "2xl": 'repeat(5, 3fr)' }} gap={{ base: 2, md: 4 }}>
                {
                    !data.length && 
                    <>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                    </>
                }
                {
                    data.slice(0, 60).map((item, index) => (
                        <Box key={index} className="block_Cart" zIndex={5} overflow={'hidden'} borderRadius={'5px'} m={'0 auto'} p={{base:'2px', md:"4px", lg:"7px"}} w='95%' minH='300px'>
                            <Button variant={"unstyled"} onClick={() => AddLike(item)} p={{ base: "0", lg: "5px" }} position={"absolute"} bg='rgba(116, 116, 116, 0.500)' right={0} top={0} zIndex={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <BsFillHeartFill fontSize='15px' className='LikeBtn' color={'rgb(255, 255, 255)'}/>
                            </Button>
                            <Link to={`/products/${item.id}`}>
                                <Box overflow={'hidden'} maxH={{base:'150px', lg:'200px'}} h='100%' p={{base:"5px", md:"2px"}}>
                                    <Image cursor={'pointer'} w='100%' h='100%' objectFit="contain" src={item.thumbnail} borderRadius='lg' />
                                </Box>
                            </Link>
                            <Box h='100px' overflow='hidden' p='5px'>
                                <Text fontSize={{base:"12px", lg:"14px"}} color='gray.600' fontWeight={700} overflow={'hidden'}>{item.title}</Text>
                                <Text fontSize="12px" color='gray.500' fontWeight={400} overflow={'hidden'}>{item.description}</Text>
                            </Box>
                            <Box display='flex' alignItems='center' justifyContent='space-between'>
                                <Box display='flex' alignItems='center'>
                                    <Image w='12px' src='https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png'/>
                                    <Text ml='5px' color='black' fontSize='12px' fontFamily='sans-serif'>{ item.rating }</Text>
                                </Box>
                                <Text color='blue.600' fontSize={{ base: "13px", sm: '14px', md: "16px" }} fontWeight="600">{item.price} $</Text>
                                <Button onClick={() => AddProduct(item)} variant='solid' colorScheme='blue' p={{base:'0', md:"5px 15px"}} >
                                    <BsBagDash />
                                </Button>
                            </Box>
                        </Box>
                    ))
                }
            </Grid>
        </>
    )
}
