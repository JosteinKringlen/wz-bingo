import type { Draft } from 'immer';
import type { ReactNode } from 'react';
import React, { createContext, useContext } from 'react';
import { useImmer } from 'use-immer';

type ContextType = {
    board: Array<string>;
    setBoard: (
        f:
            | Array<string>
            | ((draft: Array<string> | Draft<Array<string>>) => void),
    ) => void;
    checked: Array<boolean>;
    setChecked: (
        f:
            | Array<boolean>
            | ((draft: Array<boolean> | Draft<Array<boolean>>) => void),
    ) => void;
    useFree: boolean;
    setUseFree: (
        f: boolean | ((draft: boolean | Draft<boolean>) => void),
    ) => void;
};

const BingoContext = createContext<ContextType | undefined>(undefined);

function BingoContextProvider({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    const [checked, setChecked] = useImmer(() => new Array(25).fill(false));
    const [board, setBoard] = useImmer<Array<string>>([]);
    const [useFree, setUseFree] = useImmer(false);
    return (
        <BingoContext.Provider
            value={{
                board,
                setBoard,
                checked,
                setChecked,
                useFree,
                setUseFree,
            }}
        >
            {children}
        </BingoContext.Provider>
    );
}

function useBingoContext(): ContextType {
    const context = useContext(BingoContext);
    if (context === undefined) {
        throw new Error(
            'useBingoContext must be used within a BingoContextProvider',
        );
    }
    return context;
}

export { BingoContextProvider, useBingoContext };
