import { Box, List, Text } from '@dracula/dracula-ui';

import { alternatives } from '../lib/alternatives';

export default function About(): JSX.Element {
    return (
        <Box className="pageholder" px="xs">
            <Text as="p" size="lg" mb="xs">
                List of words/phrases:
            </Text>
            <List variant="unordered" color="purple">
                {alternatives.sort().map((alternative) => (
                    <li className="drac-text drac-text-white" key={alternative}>
                        {alternative}
                    </li>
                ))}
            </List>
        </Box>
    );
}
