import Link from 'next/link';
import {
    Navbar as NextUiNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
} from '@nextui-org/react';
import { FaHouseChimney } from 'react-icons/fa6';

export default function Navbar() {
    return (
        <NextUiNavbar>
            <NavbarBrand>
                <Link href="/">
                    <FaHouseChimney size="1.5rem" />
                </Link>
            </NavbarBrand>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        as={Link}
                        color="primary"
                        href="/signup"
                        variant="flat"
                    >
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </NextUiNavbar>
    );
}
