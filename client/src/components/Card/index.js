import { Button, Box, Image } from '@chakra-ui/react';
import {Link} from "react-router-dom";
import moment from 'moment';
import {useBasket} from "../../context/BasketContext"

function Card({item}) {
  const {addToBasket,items}=useBasket();
  const findBasketItem=items.find((basket_item)=>basket_item._id===item._id)
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
        <Link to={`/product/${item._id}`}>
            <Image src={item.photos[0]} alt="product" loading='lazy'></Image>
            <Box p="6">
                <Box d="flex" alignItems="baseline">{moment(item.createdAt).format('DD/MM/YYYY')}</Box>
                <Box mt="1" fontWeight="semibold" as='h4' lineHeight="5">{item.title}</Box>
                <Box>{item.price}</Box>
            </Box>
        </Link>
        <Button colorScheme={findBasketItem?'pink':'green'} variant="solid" onClick={()=>addToBasket(item,findBasketItem)}>
          {
            findBasketItem?'Remove From Basket':'Add To Basket'
          }
        </Button>
    </Box>
  )
}

export default Card