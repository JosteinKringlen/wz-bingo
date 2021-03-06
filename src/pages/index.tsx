/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box, Button, Card, Switch, Text } from '@dracula/dracula-ui';

import { useBingoContext } from '../contexts/bingo-context';
import { getRandomBingoBoard } from '../lib/alternatives';

const FREE_INDEX = 12;

export default function Home(): JSX.Element {
    const { checked, setChecked, board, setBoard, useFree, setUseFree } =
        useBingoContext();

    return (
        <div className="pageholder drac-px-xs">
            <Card
                color="pink"
                variant="subtle"
                className="max-w-1/1 md:max-w-4/6"
                mx="auto"
                my="md"
                p="sm"
            >
                <Text>Create a new bingo board:</Text>
                <Box mt="md">
                    <Switch
                        color="purple"
                        id="demo"
                        name="demo"
                        checked={useFree}
                        onChange={() => {
                            setUseFree((draft) => !draft);
                        }}
                    />
                    <label htmlFor="demo" className="drac-text drac-text-white">
                        <Text className="italic">FREE</Text> center
                    </label>
                </Box>
                <Button
                    mt="sm"
                    onClick={() => {
                        setBoard(() => getRandomBingoBoard());
                        setChecked(() => new Array(25).fill(false));

                        if (useFree) {
                            setBoard((draft) => {
                                draft[FREE_INDEX] = 'FREE!';
                            });
                            setChecked((draft) => {
                                draft[FREE_INDEX] = true;
                            });
                        }
                    }}
                >
                    Create
                </Button>
            </Card>
            <Box
                className="grid grid-cols-5 grid-rows-5 gap-1 max-w-1/1 md:max-w-4/6"
                mx="auto"
                mb="md"
            >
                {board.length
                    ? board.map((element, index) => (
                          <button
                              type="button"
                              color={checked[index] ? 'green' : 'red'}
                              style={{ aspectRatio: '1' }}
                              className={`items-center justify-center cursor-pointer flex drac-card-subtle drac-rounded drac-border-${
                                  checked[index] ? 'green' : 'red'
                              }`}
                              key={element}
                              onClick={() => {
                                  setChecked((draft) => {
                                      draft[index] = !draft[index];
                                  });
                              }}
                          >
                              <Text
                                  className="drac-text-xs md:text-drac-md break-words max-w-1/1"
                                  color={
                                      checked[index]
                                          ? 'blackSecondary'
                                          : 'white'
                                  }
                                  align="center"
                              >
                                  {element}
                              </Text>
                          </button>
                      ))
                    : null}
            </Box>
        </div>
    );
}
