import { Text } from '@dracula/dracula-ui';
import { motion } from 'framer-motion';

import { alternatives } from '../lib/alternatives';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: 0.2,
            staggerChildren: 0.025,
        },
    },
};

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

export default function About(): JSX.Element {
    return (
        <motion.div
            className="pageholder drac-px-xs"
            variants={container}
            initial="hidden"
            animate="show"
        >
            <Text as="p" size="lg" mb="xs">
                List of words/phrases:
            </Text>
            <motion.ul className="drac-list-unordered drac-list-purple">
                {alternatives.sort().map((alternative) => (
                    <motion.li
                        className="drac-text drac-text-white"
                        key={alternative}
                        variants={item}
                    >
                        {alternative}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
}
