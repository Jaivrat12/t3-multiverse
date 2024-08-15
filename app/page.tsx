import Link from 'next/link';
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
} from '@nextui-org/react';

const gameModes = [
    { title: 'Classic Mode', href: '/classic' },
    { title: 'Infinite Mode', href: '/infinte' },
    { title: 'Ultimate Mode', href: '/ultimate' },
];

export default function Home() {
    return (
        <div className="container pt-16">
            <h1 className="mb-4 text-4xl text-center">T3 Multiverse</h1>

            <p className="text-center mb-8">
                Enjoy a multiverse of Tic Tac Toe Games!
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
                {gameModes.map(({ title, href }, i) => (
                    <Card
                        key={i}
                        shadow="sm"
                    >
                        <CardHeader>
                            <h3 className="w-full text-center text-2xl">
                                {title}
                            </h3>
                        </CardHeader>

                        <ButtonGroup
                            radius="none"
                            variant="flat"
                            fullWidth
                        >
                            <Button
                                as={Link}
                                href={`${href}/online`}
                                color="success"
                            >
                                Play Online
                            </Button>

                            <Button
                                as={Link}
                                href={href}
                                color="primary"
                            >
                                Play Offline
                            </Button>
                        </ButtonGroup>
                    </Card>
                ))}
            </div>
        </div>
    );
}
