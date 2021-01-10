import { Box, Heading, Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function NavbarComponent() {
    return(
        <Box
            w="100%"
            bg="teal.200"
            p="2em"
            d="flex"
            justifyContent="space-between"
            mb="4"
        >
            <Link href="/">
                <Heading
                    cursor="pointer"
                >
                    Foreign exchange rates
                </Heading>
            </Link>

            <Menu>
                <MenuButton 
                    as={Button}
                    aria-label="menu"
                >
                    <HamburgerIcon 
                        color="black.500"
                    />
                </MenuButton>
                <MenuList>
                    <Link href="/latest">
                        <MenuItem>Latest</MenuItem>
                    </Link>
                    <Link href="/about">
                        <MenuItem>About</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
            
        </Box>
    )
}