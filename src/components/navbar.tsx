import { Anchor, Button } from '@dracula/dracula-ui';
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar(): JSX.Element {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className="drac-bg-animated drac-mb-sm">
            <nav className="flex items-center flex-wrap drac-py-sm pageholder">
                <Link href="/" passHref>
                    <Anchor
                        onClick={() => setActive(false)}
                        color="black"
                        weight="bold"
                        className="text-xl"
                        p="xs"
                    >
                        WZ Bingo
                    </Anchor>
                </Link>
                <Button
                    type="button"
                    className="inline-flex  rounded lg:hidden drac-text-black-secondary ml-auto outline-none drac-p-xs"
                    onClick={handleClick}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </Button>
                <div
                    className={`${
                        active ? '' : 'hidden'
                    }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                        <Link href="/" passHref>
                            <Anchor
                                onClick={() => setActive(false)}
                                color="blackSecondary"
                                weight="semibold"
                                className="lg:inline-flex lg:w-auto w-full items-center justify-center"
                                p="xs"
                            >
                                Home
                            </Anchor>
                        </Link>
                        <Link href="/about" passHref>
                            <Anchor
                                onClick={() => setActive(false)}
                                color="blackSecondary"
                                weight="semibold"
                                className="lg:inline-flex lg:w-auto w-full items-center justify-center"
                                p="xs"
                            >
                                About
                            </Anchor>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
