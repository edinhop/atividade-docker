import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';


export default function Sobre() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6" >
                <Box w='100%' p={4} color='white'>
                    <Heading as='h2' size='2xl' fontWeight="bold" letterSpacing="tight" textAlign='center'>
                        Sobre
                    </Heading>
                    <br />
                    <Text align='justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus ante, lobortis vel enim sed, finibus lacinia eros. Nullam egestas dictum magna, sit amet elementum nisi scelerisque et. Sed lacinia placerat justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at nibh semper, sodales nisi sit amet, dapibus metus. Quisque ac semper ante. In pharetra a eros nec sollicitudin. Nam eu interdum mauris. Nullam feugiat tortor sem, eget aliquam mi accumsan sed. Aenean ultrices magna tortor, in blandit tellus suscipit at. Proin tempor maximus sapien in facilisis. Donec ultrices, est vitae elementum fringilla, enim enim placerat magna, vitae fringilla odio nulla et enim.

Ut sit amet ligula ut mauris blandit varius. Quisque enim orci, gravida eu est quis, efficitur tincidunt leo. Ut vestibulum finibus vehicula. Donec eleifend eros sit amet ipsum aliquam, eu facilisis arcu pellentesque. Nunc dui nisi, finibus sit amet elementum nec, hendrerit et felis. Pellentesque quis tortor tortor. Ut suscipit fringilla laoreet. Nullam venenatis ornare urna non lacinia. Integer malesuada vestibulum est. Morbi blandit bibendum nulla at laoreet. Morbi fermentum risus quam, ut lobortis quam placerat eget. Suspendisse pharetra est libero, quis egestas odio dignissim a. Nullam vehicula laoreet sem eget commodo.

Vestibulum auctor nunc eu elementum congue. Vestibulum ornare leo ut dictum ultricies. Donec interdum vehicula odio, id porttitor diam imperdiet vel. Sed varius venenatis purus, eu dapibus enim. Pellentesque congue euismod sapien, a mattis arcu rhoncus posuere. Nunc dignissim faucibus nisl, a lacinia nulla finibus sit amet. Phasellus mattis hendrerit sapien, a egestas lorem interdum vitae. Suspendisse lacinia elementum est, ac luctus purus luctus sit amet. Vestibulum vehicula velit ut augue maximus, ac sollicitudin dolor cursus.

Nulla in mi risus. Cras ornare sagittis egestas. Nulla sit amet convallis metus. Cras pellentesque dictum lectus quis convallis. Nulla ante enim, tempor non augue eget, dapibus interdum metus. Maecenas egestas, lacus ac luctus ullamcorper, dolor magna bibendum neque, non facilisis ex mi quis orci. Mauris ac orci rutrum nunc gravida posuere. Nunc vestibulum nisl in lacus fermentum luctus eget nec ex.

Integer vel metus quis nisl cursus sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Nulla ac lacinia velit, eget mollis turpis. Proin lacinia viverra interdum. In hac habitasse platea dictumst. Nulla et hendrerit odio.

Donec laoreet lectus non gravida lobortis. Vestibulum viverra laoreet neque. Morbi a lorem mollis, ultrices odio ac, imperdiet ipsum. Sed risus ante, blandit imperdiet ornare et, sagittis eget felis. Etiam ante lectus, scelerisque nec velit eu, ultricies varius purus. Phasellus sit amet sapien eu ligula facilisis ornare. Maecenas sagittis et nisi non congue.

Integer a pretium orci. Curabitur ac tellus lorem. Mauris nisl tellus, ornare at leo at, facilisis malesuada sapien. Praesent quis tempus metus. In placerat ligula dolor, nec dictum metus sollicitudin a. Sed mauris metus, fringilla sit amet ornare vel, ornare quis turpis. In euismod commodo nisl sed euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean viverra a odio et suscipit. Fusce sollicitudin, felis ut hendrerit malesuada, metus odio tristique nibh, at dictum nulla odio in arcu. Donec vitae neque dolor.
                    </Text>

                </Box>
            </Flex>
            <Footer />
        </Flex>
    );
}